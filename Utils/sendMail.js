import nodemailer from "nodemailer";
import ejs from "ejs";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// configure
var transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  //   service: "gmail",
  auth: {
    user: "a04316ab37d176",
    pass: "2703c9e9f26ce5",
  },
});

export const generateVerificationCode = () => {
  return Math.floor(1000 + Math.random() * 9000);
};

export const sendVerificationEmail = async (
  name,
  recipientEmail,
  verificationCode
) => {
  const data = {
    name: name,
    verificationCode: verificationCode,
    replyMessage:
      "Thank you for reaching out to us. We have received your message and will get back to you shortly.",
  };
  const html = await renderTemplate("otp_template", data);
  const mailOptions = {
    from: "admin@admin.com",
    to: recipientEmail,
    subject: "Your Verification Code",
    // text: `Your verification code is ${verificationCode}`,
    html: html,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Verification email sent successfully");
  } catch (error) {
    console.error("Error while sending verification email:", error);
  }
};

// template render
const renderTemplate = (templateName, data) => {
  return new Promise((resolve, reject) => {
    ejs.renderFile(
      path.join(__dirname, "..", "views", "emails", `${templateName}.ejs`),
      data,
      (err, html) => {
        if (err) {
          reject(err);
        } else {
          resolve(html);
        }
      }
    );
  });
};
