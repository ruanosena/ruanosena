"use server";

import { env } from "@/env";
import { SITE_NAME, SUPPORT_EMAIL } from "@/lib/constants";
import Nodemailer from "nodemailer";
import { ContactFormValues } from "./ContactForm";

export async function sendContactMail(values: ContactFormValues) {
  if (!(await validateRecaptchaToken(values.token))) return false;
  delete values.token;

  const transporter = Nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: env.CONTACT_EMAIL_ADDRESS,
      pass: env.CONTACT_EMAIL_PASSWORD,
    },
  });

  const mailData = {
    from: `${SITE_NAME} <${env.CONTACT_EMAIL_ADDRESS}>`,
    to: SUPPORT_EMAIL,
    subject: `Mensagem de ${values.name + (values["last-name"] ? ` ${values["last-name"]}` : "")}${values.company ? `, [${values.company}]` : ""}`,
    text: values.message + " | Enviado de: " + values.email,
    html: `<div>${values.message}</div><p>Enviado de: 
      ${values.email}</p>`,
  };

  return new Promise((resolve) =>
    transporter.sendMail(mailData, function (error) {
      if (error) {
        console.error(error);
        resolve(false);
      }
      resolve(true);
    }),
  );
}

async function validateRecaptchaToken(token?: string) {
  if (!token) return null;
  const recaptchaParams = new URLSearchParams({
    secret: env.RECAPTCHA_SECRET_KEY,
    response: token,
  });
  const recaptchaTokenResponse = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?${recaptchaParams.toString()}`,
    { method: "POST" },
  );
  const { success, score }: { success: boolean; score: number } =
    await recaptchaTokenResponse.json();

  return success && (score ? score > 0.4 : true);
}
