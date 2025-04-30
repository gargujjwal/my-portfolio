"use client";
import { motion } from "framer-motion";

const IntroText = () => {
    return (
        <motion.h1
            className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <span className="font-bold">Hello, I&apos;m Ujjwal.</span> I&apos;m
            a <span className="font-bold">Java Software Engineer</span> with a
            focus on <span className="font-bold">full-stack development</span>.
            I specialize in building{" "}
            <span className="italic">enterprise applications</span> using{" "}
            <span className="underline">
                Spring Boot, React, and microservices architecture
            </span>
            . Proficient in major frameworks like{" "}
            <span className="font-bold">Next.js, Angular, and Node.js</span>.
        </motion.h1>
    );
};

export default IntroText;
