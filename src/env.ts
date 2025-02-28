import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    RECAPTCHA_SECRET_KEY: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_RECAPTCHA_CLIENT_KEY: z.string().min(1),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_RECAPTCHA_CLIENT_KEY:
      process.env.NEXT_PUBLIC_RECAPTCHA_CLIENT_KEY,
  },
});
