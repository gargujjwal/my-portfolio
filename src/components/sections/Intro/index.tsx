"use client";

import { BsArrowRight, BsLinkedin } from "react-icons/bs";

import { useActiveSectionCtx } from "@/contexts/ActiveSectionContext";
import useSectionInView from "@/hooks/useSectionInView";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import Avatar from "./Avatar";
import IntroText from "./IntroText";

export default function Intro() {
    const { ref } = useSectionInView("Home", 0.5);
    const { changeActiveSection } = useActiveSectionCtx();

    return (
        <section
            ref={ref}
            id="home"
            className="mb-28 max-w-[50rem] scroll-mt-[100rem] text-center sm:mb-0"
        >
            <div className="flex items-center justify-center">
                <Avatar />
            </div>

            <IntroText />

            <motion.div
                className="flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.1,
                }}
            >
                <Link
                    href="#contact"
                    className="group flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3 text-white outline-none transition hover:scale-110 hover:bg-gray-950 focus:scale-110 active:scale-105"
                    onClick={changeActiveSection.bind(null, "Contact")}
                >
                    Contact me here{" "}
                    <BsArrowRight className="opacity-70 transition group-hover:translate-x-1" />
                </Link>

                <a
                    className="borderBlack group flex cursor-pointer items-center gap-2 rounded-full bg-white px-7 py-3 outline-none transition hover:scale-110 focus:scale-110 active:scale-105 dark:bg-white/10"
                    href="/CV.pdf"
                    download
                >
                    Download CV{" "}
                    <HiDownload className="opacity-60 transition group-hover:translate-y-1" />
                </a>

                <a
                    className="borderBlack flex cursor-pointer items-center gap-2 rounded-full bg-white p-4 text-gray-700 transition hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] active:scale-105 dark:bg-white/10 dark:text-white/60"
                    href="https://linkedin.com"
                    target="_blank"
                >
                    <BsLinkedin />
                </a>

                <a
                    className="borderBlack flex cursor-pointer items-center gap-2 rounded-full bg-white p-4 text-[1.35rem] text-gray-700 transition hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] active:scale-105 dark:bg-white/10 dark:text-white/60"
                    href="https://github.com"
                    target="_blank"
                >
                    <FaGithubSquare />
                </a>
            </motion.div>
        </section>
    );
}
