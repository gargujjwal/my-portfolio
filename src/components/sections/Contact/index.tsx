"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { ContactFormSchema, TContactFormSchema } from "./zod-contact-form";

import { sendEmail } from "@/actions/send-email";
import useSectionInView from "@/hooks/useSectionInView";
import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import SectionHeading from "../../ui/SectionHeading";
import SubmitBtn from "../../ui/SubmitBtn";

export default function Contact() {
    const { ref } = useSectionInView("Contact");
    const {
        register,
        formState: { isSubmitting, errors },
        handleSubmit,
        reset,
    } = useForm<TContactFormSchema>({
        resolver: zodResolver(ContactFormSchema),
    });

    const onSubmit: SubmitHandler<TContactFormSchema> = async (data) => {
        const { status, message } = await sendEmail(data);
        if (status === "error") {
            toast.error(message);
            return;
        }

        toast.success(message);
        reset();
    };

    return (
        <motion.section
            id="contact"
            ref={ref}
            className="mb-20 w-[min(100%,38rem)] text-center sm:mb-28"
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration: 1,
            }}
            viewport={{
                once: true,
            }}
        >
            <SectionHeading>Contact me</SectionHeading>

            <p className="-mt-6 text-gray-700 dark:text-white/80">
                Please contact me directly at{" "}
                <a className="underline" href="mailto:example@gmail.com">
                    example@gmail.com
                </a>{" "}
                or through this form.
            </p>

            <form
                className="mt-10 flex flex-col dark:text-black"
                onSubmit={handleSubmit(onSubmit)}
            >
                <input
                    className={clsx(
                        "borderBlack h-14 rounded-lg px-4 transition-all dark:bg-white dark:bg-opacity-80 dark:outline-none dark:focus:bg-opacity-100",
                        errors.senderEmail &&
                            "bg-red-200 text-red-500 placeholder:text-red-500",
                    )}
                    placeholder="Your email"
                    {...register("senderEmail")}
                />
                <textarea
                    className={clsx(
                        "borderBlack my-3 h-52 rounded-lg p-4 transition-all dark:bg-white dark:bg-opacity-80 dark:outline-none dark:focus:bg-opacity-100",
                        errors.message &&
                            "bg-red-200 text-red-500 placeholder:text-red-500",
                    )}
                    placeholder="Your message"
                    {...register("message")}
                />
                <SubmitBtn disabled={isSubmitting} />
            </form>
        </motion.section>
    );
}
