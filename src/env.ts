import { z } from "zod";

const EnvSchema = z.object({
    NODE_ENV: z
        .enum(["development", "test", "production"])
        .default("development"),

    RESEND_API_KEY: z.string().min(1),
});

export const env = EnvSchema.parse(process.env);
