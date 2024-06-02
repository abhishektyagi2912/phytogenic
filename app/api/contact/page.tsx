import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export default async function handler(req: NextRequest, res: NextResponse) {
  if (req.method === 'POST') {
    try {
      const body = await req.json() as ContactFormData;
      const { name, email, phone, message } = body;

      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      await transporter.sendMail({
        from: email,
        to: 'sales@phytogenic.co.in',
        subject: 'New Contact Form Submission',
        html: `
          <p>You have a new contact form submission:</p>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      });

      return new NextResponse(JSON.stringify({ message: 'Email sent successfully!' }), { status: 200 });
    } catch (error) {
      console.error(error);
      return new NextResponse(JSON.stringify({ message: 'Failed to send email.' }), { status: 500 });
    }
  } else {
    return new NextResponse(JSON.stringify({ message: 'Method not allowed.' }), { status: 405 });
  }
}
