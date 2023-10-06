"use client";

import SectionHeading from "../ui/SectionHeading";
import { motion } from "framer-motion";
import useSectionInView from "@/hooks/useSectionInView";

export default function About() {
    const { ref } = useSectionInView("About");

    return (
        <motion.section
            ref={ref}
            className="mb-28 max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-40"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
        >
            <SectionHeading>About me</SectionHeading>
            <p className="mb-3">
                After completing my schooling, I decided to pursue my passion
                for programming. I started my
                <span className="font-bold">
                    {" "}
                    Bachelor&apos;s degree in Computer Science at VIT College{" "}
                </span>{" "}
                to learn more about programming majoring in Information
                Technology. I am currently in my{" "}
                <span className="font-medium">final year of college</span>. I am
                also a{" "}
                <span className="underline">
                    self-taught full-stack web & app developer
                </span>
                .
                <span className="italic"> My favorite part of programming</span>{" "}
                is the problem-solving aspect. I{" "}
                <span className="underline"> love</span> the feeling of finally
                figuring out a solution to a problem. My core stack is{" "}
                <span className="font-medium">
                    React, Next.js, Node.js, and MongoDB
                </span>
                . I am also familiar with TypeScript and Prisma. I am always
                looking to learn new technologies. I am currently looking for a{" "}
                <span className="font-medium">full-time position</span> as a
                software developer.
            </p>

            <p>
                <span className="italic">When I&apos;m not coding</span>, I
                enjoy playing video games, watching movies, and spending time
                with my family. I also enjoy{" "}
                <span className="font-medium">learning new things</span>.
            </p>
        </motion.section>
    );
}
