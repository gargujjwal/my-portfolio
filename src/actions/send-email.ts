"use server";

import { ContactFormSchema } from "@/components/sections/Contact/zod-contact-form";
import ContactFormEmail from "@/email/ContactFormEmail";
import { env } from "@/env";
import { APIResponse } from "@/lib/types";
import { getErrorMessage } from "@/lib/utils";
import React from "react";
import { Resend } from "resend";
import { CreateEmailResponse } from "resend/build/src/emails/interfaces";

const resend = new Resend(env.RESEND_API_KEY);

export const sendEmail = async (
    formData: unknown,
): Promise<APIResponse<CreateEmailResponse>> => {
    const contactFormData = ContactFormSchema.safeParse(formData);
    if (!contactFormData.success) {
        const errors = contactFormData.error.flatten();
        console.log(errors);

        return {
            status: "error",
            message: `${errors.fieldErrors.message} ${errors.fieldErrors.senderEmail}`,
            data: {},
        };
    }

    const { senderEmail, message } = contactFormData.data;

    try {
        const res = await resend.emails.send({
            from: "Contact Form From Portfolio <onboarding@resend.dev>",
            to: "ujjwalgarg100204@gmail.com",
            subject: "Message from contact form",
            reply_to: senderEmail,
            react: React.createElement(ContactFormEmail, {
                message: message,
                senderEmail: senderEmail,
            }),
        });
        return {
            status: "ok",
            message: "Email sent successfully",
            data: res,
        };
    } catch (err: unknown) {
        return {
            status: "error",
            message: getErrorMessage(err),
            data: {},
        };
    }
};
