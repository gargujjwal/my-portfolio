import { z } from "zod";

export const ContactFormSchema = z.object({
    senderEmail: z.string().email(),
    message: z.string().min(1).max(500),
});

export type TContactFormSchema = z.infer<typeof ContactFormSchema>;
