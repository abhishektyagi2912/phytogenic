import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { adminNotificationEmail, customerConfirmationEmail } from "@/lib/email/templates";

export async function POST(request: NextRequest) {
  let body: { name?: string; email?: string; phone?: string; message?: string };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, phone, message } = body;

  if (!name || !email || !phone || !message) {
    return NextResponse.json(
      { error: "Name, email, phone and message are all required." },
      { status: 400 }
    );
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    console.error("Contact form submitted but SMTP env vars are not configured.");
    return NextResponse.json(
      { error: "Email sending is not configured on the server yet." },
      { status: 503 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const fromAddress = `"Phytogenic Life Science" <${SMTP_USER}>`;
  const enquiry = { name, email, phone, message };

  const admin = adminNotificationEmail(enquiry);
  const confirmation = customerConfirmationEmail(enquiry);

  const results = await Promise.allSettled([
    transporter.sendMail({
      from: fromAddress,
      to: CONTACT_TO || "sales@phytogenic.co.in",
      replyTo: email,
      subject: admin.subject,
      text: admin.text,
      html: admin.html,
    }),
    transporter.sendMail({
      from: fromAddress,
      to: email,
      replyTo: CONTACT_TO || "sales@phytogenic.co.in",
      subject: confirmation.subject,
      text: confirmation.text,
      html: confirmation.html,
    }),
  ]);

  const [adminResult, confirmationResult] = results;

  if (adminResult.status === "rejected") {
    console.error("Failed to send admin notification email:", adminResult.reason);
    return NextResponse.json(
      { error: "Failed to send your message. Please try again later." },
      { status: 500 }
    );
  }

  if (confirmationResult.status === "rejected") {
    console.error("Failed to send customer confirmation email:", confirmationResult.reason);
  }

  return NextResponse.json({
    ok: true,
    confirmationSent: confirmationResult.status === "fulfilled",
  });
}
