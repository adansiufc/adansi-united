import { EMAIL } from "@/lib/constants";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL,
    pass: "mditfrxouqpvqiul",
  },
});

export async function POST(req: Request) {
  const data = await req.json();
  const mailOptions = {
    from: EMAIL,
    to: data.email,
    subject: `New message from ${data.name}`,
    html: data.message,
  };

  try {
    await transporter.sendMail(mailOptions);
    return Response.json({ data, message: "Email sent successfully!" });
  } catch (error) {
    console.log(error);
    return Response.json({
      error: 500,
      message: `An error occurred while sending the email. ${error}`,
    });
  }
}
