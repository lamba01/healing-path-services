import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const { firstName, lastName, email, phone, message } = await req.json();

  try {
    await resend.emails.send({
      from: "Healing Path Website <noreply@hppstherapy.com>",
      to: "moyinooluwafemi2004@gmail.com",
      replyTo: email,
      subject: `New Enquiry from ${firstName} ${lastName}`,
      html: `
        <h2>New message from Healing Path website</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { error: "Email failed to send" },
      { status: 500 },
    );
  }
}
