import { NextResponse } from "next/server";
import { headers } from "next/headers";
import nodemailer from "nodemailer";
import crypto from "crypto";

// Helper function to hash user details for Meta CAPI compliance (SHA-256)
const hashData = (data: string | undefined) => {
  if (!data) return "";
  return crypto
    .createHash("sha256")
    .update(data.trim().toLowerCase())
    .digest("hex");
};

const createTransporter = () =>
  nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // ==========================================
    // 1. PIPELINE A: NEWSLETTER SIGNUP FLOW
    // ==========================================
    if (body?.type === "newsletter") {
      const { email } = body;
      if (!email) {
        return NextResponse.json({ message: "Email is required" }, { status: 400 });
      }

      const transporter = createTransporter();
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: `New Newsletter Signup`,
        text: `New newsletter signup: ${email}`,
        html: `<p>New newsletter signup: <strong>${email}</strong></p>`,
      };

      await transporter.sendMail(mailOptions);
      return NextResponse.json({ message: "Subscribed successfully" }, { status: 200 });
    }

    // ==========================================
    // 2. PIPELINE B: HIGH-VALUE PROJECT INQUIRY FLOW
    // ==========================================
    const {
      fullName,
      businessName,
      phone,
      email,
      projectType,
      budget,
      message,
      eventId, // Sent from your frontend payload for event deduplication
    } = body || {};

    // Internal Email Dispatch via Nodemailer
    const transporter = createTransporter();
    const mailOptions = {
      from: email || process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email || undefined,
      subject: `New Project Inquiry from ${fullName || "Unknown"} for [${projectType || "N/A"}]`,
      text: `
        Name: ${fullName}
        Business Name: ${businessName}
        Phone: ${phone}
        Email: ${email}
        Project Type: ${projectType}
        Budget: ${budget}

        Project Brief:
        ${message}
      `,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #111;">
          <h2>New Project Request</h2>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Business Name:</strong> ${businessName}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Project Type:</strong> ${projectType}</p>
          <p><strong>Budget:</strong> ${budget}</p>
          <hr style="border: none; border-top: 1px solid #eee;" />
          <p><strong>Project Brief:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    };

    // Wait for internal email notification to complete successfully
    await transporter.sendMail(mailOptions);

    // ==========================================
    // 3. PIPELINE C: META CONVERSIONS API DISPATCH
    // ==========================================
    // Wrapping in a localized try-catch ensures that even if Meta's servers hit a hiccup, 
    // the user's form submission isn't ruined for them on the frontend.
    try {
      const reqHeaders = await headers();
      const ip = reqHeaders.get("x-forwarded-for")?.split(",")[0] || "127.0.0.1";
      const userAgent = reqHeaders.get("user-agent") || "";

      const pixelId = process.env.META_PIXEL_ID || process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;
      const accessToken = process.env.META_CAPI_ACCESS_TOKEN;

      if (pixelId && accessToken) {
        const capiPayload = {
          data: [
            {
              event_name: "Lead",
              event_time: Math.floor(Date.now() / 1000),
              action_source: "website",
              event_id: eventId, // Critical: Must match client-side event_id to prevent double counting
              event_source_url: request.url,
              user_data: {
                client_ip_address: ip,
                client_user_agent: userAgent,
                em: email ? [hashData(email)] : [], // Meta requires array formatting for hashed values
                ph: phone ? [hashData(phone)] : [],
              },
              custom_data: {
                content_name: projectType,
                value: parseFloat(budget?.replace(/,/g, "")) || 0,
                currency: "NGN",
              },
            },
          ],
        };

        await fetch(
          `https://graph.facebook.com/v19.0/${pixelId}/events?access_token=${accessToken}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(capiPayload),
          }
        );
      }
    } catch (metaError) {
      // Log tracking errors internally without altering response codes
      console.error("Background CAPI Transmission Failure:", metaError);
    }

    return NextResponse.json({ message: "Inquiry transmitted successfully" }, { status: 200 });

  } catch (error) {
    console.error("Global Server Pipeline Error:", error);
    return NextResponse.json({ message: "Failed to process form payload" }, { status: 500 });
  }
}