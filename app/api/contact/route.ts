import { NextResponse } from "next/server";
import { headers } from "next/headers";
import nodemailer from "nodemailer";
import crypto from "crypto";

// 1. Meta CAPI Hashing Helper (SHA-256 compliance)
const hashData = (data: string | undefined) => {
  if (!data) return "";
  return crypto
    .createHash("sha256")
    .update(data.trim().toLowerCase())
    .digest("hex");
};

// 2. Adaptive Transporter Engine (Intelligently resolves any of your variant fallback envs)
const getTransporter = () => {
  const user = process.env.EMAIL_USER || process.env.EMAIL_SERVER_USER || process.env.SMTP_USER || "";
  const pass = process.env.EMAIL_PASS || process.env.EMAIL_SERVER_PASSWORD || process.env.SMTP_PASS || "";
  const host = process.env.EMAIL_HOST || process.env.SMTP_HOST;
  const port = parseInt(process.env.EMAIL_PORT || process.env.SMTP_PORT || "465");

  // Fallback to basic Gmail preset if host is absent but user exists
  if (!host && user.includes("gmail.com")) {
    return nodemailer.createTransport({ service: "gmail", auth: { user, pass } });
  }

  return nodemailer.createTransport({
    host: host || "smtp.gmail.com",
    port: port,
    secure: port === 465,
    auth: { user, pass },
  });
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Automatically flag routing using explicit fields if 'flowType' isn't explicitly passed
    const flowType = body?.flowType || (body?.type === "newsletter" ? "newsletter" : body?.companyName ? "web-leaks" : body?.hasInfo ? "trust-test" : "project");
    const transporter = getTransporter();
    const fallbackUser = process.env.EMAIL_USER || process.env.EMAIL_SERVER_USER || process.env.SMTP_USER || "system@ellorum.com";
    const notificationReceiver = process.env.NOTIFICATION_RECEIVER_EMAIL || process.env.LEAD_RECEIVER_EMAIL || process.env.NOTIFICATION_RECEIVER || fallbackUser;

    const mailOptions = {
      from: `"Ellorum Pipeline Engine" <${fallbackUser}>`,
      to: notificationReceiver,
      subject: "New System Alert Pipeline Signal",
      text: "",
      html: "",
      replyTo: undefined as string | undefined,
    };

    switch (flowType) {
      // ==========================================
      // FLOW A: NEWSLETTER SIGNUP
      // ==========================================
      case "newsletter": {
        const { email } = body;
        if (!email) return NextResponse.json({ message: "Email is required" }, { status: 400 });

        mailOptions.subject = `✨ New Newsletter Signup`;
        mailOptions.text = `New newsletter subscriber added: ${email}`;
        mailOptions.html = `<p>New newsletter subscriber added: <strong>${email}</strong></p>`;
        break;
      }

      // ==========================================
      // FLOW B: HIGH-VALUE PROJECT INQUIRY (+ Meta CAPI)
      // ==========================================
      case "project": {
        const { fullName, businessName, phone, email, projectType, budget, message } = body;
        
        mailOptions.replyTo = email || undefined;
        mailOptions.subject = `💼 New Project Inquiry: ${fullName || "Unknown"} [${projectType || "N/A"}]`;
        mailOptions.text = `Name: ${fullName}\nBusiness: ${businessName}\nPhone: ${phone}\nEmail: ${email}\nBudget: ${budget}\nBrief:\n${message}`;
        mailOptions.html = `
          <div style="font-family: sans-serif; padding: 20px; color: #111; max-width: 600px;">
            <h2 style="border-bottom: 2px solid #E2B233; padding-bottom: 5px;">New Project Request</h2>
            <p><strong>Name:</strong> ${fullName}</p>
            <p><strong>Business Name:</strong> ${businessName}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Project Type:</strong> ${projectType}</p>
            <p><strong>Budget:</strong> ${budget}</p>
            <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
            <p><strong>Project Brief:</strong></p>
            <p style="white-space: pre-wrap; background: #f8fafc; padding: 12px; border-radius: 6px;">${message}</p>
          </div>`;
        break;
      }

      // ==========================================
      // FLOW C: SILENT LOSS / TRUST TEST DIAGNOSTICS
      // ==========================================
      case "trust-test":
      case "silent-loss": {
        const { businessName, hasWebsite, hasInfo, leadName, leadEmail, leadWhatsApp } = body;
        const isBleeding = hasWebsite === "no" || hasInfo === "no";
        const diagnosticSummary = isBleeding 
          ? "CRITICAL ALERT: Bleeding leads out to active competitors." 
          : "WARN: Foundation active, but lacks conversion retention hooks.";

        mailOptions.subject = `🚨 Trust Test Lead Check: ${businessName}`;
        mailOptions.html = `
          <div style="font-family: sans-serif; max-width: 600px; color: #333; line-height: 1.6;">
            <h2 style="color: #060B1A; border-bottom: 2px solid #E2B233; padding-bottom: 8px;">Trust Test Performance Analysis</h2>
            <h3>🏢 Business Profile Metrics</h3>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr style="background: #f8fafc;"><td style="padding: 8px; font-weight: bold; border: 1px solid #e2e8f0;">Business Name:</td><td style="padding: 8px; border: 1px solid #e2e8f0;">${businessName}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold; border: 1px solid #e2e8f0;">Live Modern Website:</td><td style="padding: 8px; border: 1px solid #e2e8f0; font-weight: bold; color: ${hasWebsite === "yes" ? "#2ecc71" : "#e8402b"}">${String(hasWebsite).toUpperCase()}</td></tr>
              <tr style="background: #f8fafc;"><td style="padding: 8px; font-weight: bold; border: 1px solid #e2e8f0;">Instantly Visible Info/Photos:</td><td style="padding: 8px; border: 1px solid #e2e8f0; font-weight: bold; color: ${hasInfo === "yes" ? "#2ecc71" : "#e8402b"}">${String(hasInfo).toUpperCase()}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold; border: 1px solid #e2e8f0;">Diagnostic Valuation Status:</td><td style="padding: 8px; border: 1px solid #e2e8f0; color: #e8402b; font-weight: bold;">${diagnosticSummary}</td></tr>
            </table>
            <h3>👤 Lead Contact Coordinates</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px; font-weight: bold; border: 1px solid #e2e8f0; width: 40%;">Contact Name:</td><td style="padding: 8px; border: 1px solid #e2e8f0;">${leadName}</td></tr>
              <tr style="background: #f8fafc;"><td style="padding: 8px; font-weight: bold; border: 1px solid #e2e8f0;">Email Address:</td><td style="padding: 8px; border: 1px solid #e2e8f0;"><a href="mailto:${leadEmail}">${leadEmail}</a></td></tr>
              <tr><td style="padding: 8px; font-weight: bold; border: 1px solid #e2e8f0;">WhatsApp Number:</td><td style="padding: 8px; border: 1px solid #e2e8f0;"><a href="https://wa.me/${String(leadWhatsApp).replace(/\s+/g, "")}" style="color: #2ecc71; font-weight: bold;">${leadWhatsApp} (Open Chat)</a></td></tr>
            </table>
          </div>`;
        break;
      }

      // ==========================================
      // FLOW D: WEB LEAKS ARCHITECTURE
      // ==========================================
      case "web-leaks": {
        const { companyName, groupType, websiteUrl, hasWebsite, evaluationMessage, leadName, leadWhatsApp, submittedAt } = body;
        
        mailOptions.subject = `🔥 New Lead Diagnostic Check: ${companyName}`;
        mailOptions.html = `
          <div style="font-family: sans-serif; max-width: 600px; color: #333;">
            <h2>Lead Diagnostic Performance Summary</h2>
            <p><strong>Captured Timestamp:</strong> ${submittedAt || new Date().toISOString()}</p>
            <hr style="border: none; border-top: 1px solid #cbd5e1; margin: 15px 0;" />
            <h3>1. Target Profile Parameters</h3>
            <ul>
              <li><strong>Contact Name:</strong> ${leadName}</li>
              <li><strong>WhatsApp Phone Connection:</strong> ${leadWhatsApp}</li>
              <li><strong>Company/Group Identity:</strong> ${companyName}</li>
              <li><strong>Organization Classification:</strong> ${groupType}</li>
            </ul>
            <h3>2. Infrastructure State</h3>
            <ul>
              <li><strong>Owns Live Website Space:</strong> ${hasWebsite ? "Yes" : "No"}</li>
              <li><strong>Target Domain / Trace URL Location:</strong> <a href="${websiteUrl}" target="_blank">${websiteUrl || "None Provided"}</a></li>
            </ul>
            <h3>3. Evaluated Response Copy Delivery Context</h3>
            <blockquote style="background: #f1f5f9; padding: 14px; border-left: 4px solid #E2B233; font-style: italic; margin-top: 10px;">
              ${evaluationMessage}
            </blockquote>
          </div>`;
        break;
      }

      default:
        return NextResponse.json({ error: "Invalid routing context configuration sequence target" }, { status: 400 });
    }

    // Dispatch the compiled email configuration
    await transporter.sendMail(mailOptions);

    // ==========================================
    // EXTRA PIPELINE: CONDITIONAL META CAPI EXECUTION
    // ==========================================
    // Fires exclusively on high-value incoming entries ('project' or lead tracking scenarios)
    if (flowType === "project" || body?.eventId) {
      try {
        const reqHeaders = await headers();
        const ip = reqHeaders.get("x-forwarded-for")?.split(",")[0] || "127.0.0.1";
        const userAgent = reqHeaders.get("user-agent") || "";
        const pixelId = process.env.META_PIXEL_ID || process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;
        const accessToken = process.env.META_CAPI_ACCESS_TOKEN;

        if (pixelId && accessToken) {
          const emailField = body.email || body.leadEmail || "";
          const phoneField = body.phone || body.leadWhatsApp || "";

          const capiPayload = {
            data: [
              {
                event_name: "Lead",
                event_time: Math.floor(Date.now() / 1000),
                action_source: "website",
                event_id: body.eventId || `evt_${crypto.randomUUID()}`,
                event_source_url: request.url,
                user_data: {
                  client_ip_address: ip,
                  client_user_agent: userAgent,
                  em: emailField ? [hashData(emailField)] : [],
                  ph: phoneField ? [hashData(phoneField)] : [],
                },
                custom_data: {
                  content_name: body.projectType || flowType,
                  value: parseFloat(body.budget?.replace(/,/g, "")) || 0,
                  currency: "NGN",
                },
              },
            ],
          };

          await fetch(`https://graph.facebook.com/v19.0/${pixelId}/events?access_token=${accessToken}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(capiPayload),
          });
        }
      } catch (metaError) {
        // Suppress failure internally so client experience is perfectly unbothered
        console.error("Meta CAPI execution safely bypassed:", metaError);
      }
    }

    return NextResponse.json({ success: true, message: "Pipeline transaction handled perfectly" }, { status: 200 });

  } catch (error) {
    console.error("Global Server Pipeline Master Error:", error);
    return NextResponse.json({ error: "Failed processing integrated form transaction" }, { status: 500 });
  }
}