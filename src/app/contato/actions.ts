"use server";

import { env } from "@/env";
import { ContactFormValues } from "./page";

export async function sendContactMail(values: ContactFormValues) {
  try {
    if (!values.token) return null;
    const recaptchaParams = new URLSearchParams({
      secret: env.RECAPTCHA_SECRET_KEY,
      response: values.token,
    });
    const recaptchaTokenResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?${recaptchaParams.toString()}`,
      { method: "POST" },
    );
    const recaptchaTokenPayload: { success: boolean } =
      await recaptchaTokenResponse.json();

    if (!recaptchaTokenPayload.success) return null;
    delete values.token;

    console.log(values);
    return true;
  } catch (error) {
    console.error(error);
  }
}
