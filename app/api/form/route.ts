import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

export async function POST(request: Request) {
  const formData = await request.formData();
  const SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;
  let captcha = formData.get("g-recaptcha-response");
  console.log(captcha);

  let res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body:`secret=${SECRET_KEY}&response=${captcha}`,
  }).then(async (res)=>{
    let data = await res.json();
    console.log(data)
    if (data.score > 0.7) {
      sendEmail();
    }
  });
  return new Response("ok");
}

async function sendEmail() {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
    user: process.env.EMAIL_USER, 
    pass: process.env.EMAIL_PASS
    }
  });

  let mailOptions = {
    from: 'presidencygrouphotels@gmail.com', 
    to: 'bijosh22@gmail.com', 
    subject: 'Score is greater than 0.8',
    text: 'The score is greater than 0.8.'
  };

  let info = await transporter.sendMail(mailOptions)

  console.log("Message sent: %s", info.messageId);
}