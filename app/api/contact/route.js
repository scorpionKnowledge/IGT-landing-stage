import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !phone || !message) {
      return new Response(
        JSON.stringify({ message: "All fields are required" }),
        { status: 400 }
      );
    }

    // Setup SMTP transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // e.g. smtp.gmail.com, smtp.office365.com, etc.
      port: 465, // 465 for SSL, 587 for TLS
      secure: true, // true for 465, false for 587
      auth: {
        user: process.env.MAIL_USERNAME, // your email
        pass: process.env.MAIL_PASSWORD, // your app password
      },
    });

    // Send email
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: "info@infinityglobaltech.net", // change to your receiving email
      subject: `New Contact Form Submission`,
      html: `
        <h2>New Contact Request</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Message:</b><br/>${message}</p>
      `,
    });

    return new Response(
      JSON.stringify({ message: "Message sent successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ message: "Something went wrong", error }),
      { status: 500 }
    );
  }
}
