import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

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

    // Handle newsletter signup
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
      return NextResponse.json({ message: "Subscribed" }, { status: 200 });
    }

    // Existing project inquiry handling (backwards compatible)
    const {
      fullName,
      businessName,
      phone,
      email,
      projectType,
      budget,
      message,
    } = body || {};

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

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Nodemailer error:", error);
    return NextResponse.json({ message: "Failed to transmit email package" }, { status: 500 });
  }
}