"use client";
import useSectionInView from "@/hooks/useSectionInView";
import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";

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
                After completing my schooling with over{" "}
                <span className="font-bold">
                    93% in both X and XII CBSE examinations
                </span>{" "}
                , I pursued my passion for software engineering at{" "}
                <span className="font-bold">
                    Vellore Institute of Technology
                </span>{" "}
                , majoring in Information Technology. Currently in my
                <span className="font-medium">
                    {" "}
                    final year with a CGPA of 8.96/10
                </span>{" "}
                , I&apos;ve developed expertise in
                <span className="font-medium">
                    {" "}
                    Java, Spring Boot, and full-stack development
                </span>{" "}
                .<span className="italic"> My core strength</span> is designing
                and implementing{" "}
                <span className="font-medium">
                    microservices-based architectures
                </span>{" "}
                for enterprise applications.
                <span className="underline">
                    {" "}
                    I excel at solving complex technical challenges
                </span>{" "}
                and have hands-on experience with
                <span className="font-medium">
                    {" "}
                    TypeScript, React, Next.js, and various databases including
                    PostgreSQL and MongoDB
                </span>{" "}
                .
            </p>
            <p className="mb-3">
                My professional experience includes working as a{" "}
                <span className="font-bold">
                    Backend Development Intern at Valsco Technology
                </span>{" "}
                and serving as a{" "}
                <span className="font-bold">
                    Technical Teaching Assistant at Apna College
                </span>{" "}
                , where I mentored over 4,000 students. I&apos;ve developed
                several significant projects, including a
                <span className="font-medium">
                    {" "}
                    cervical cancer prediction system using Spring Boot and ML
                </span>{" "}
                and an
                <span className="font-medium">
                    {" "}
                    enterprise school management system handling 1200+ student
                    records
                </span>{" "}
                .
            </p>
            <p>
                <span className="italic">When I&apos;m not coding</span>, I
                enjoy staying updated with the latest technology trends, solving
                algorithmic challenges, and contributing to the developer
                community. I am currently seeking a{" "}
                <span className="font-medium">
                    full-time position as a Java Software Engineer{" "}
                </span>{" "}
                where I can apply my skills in building secure, scalable
                enterprise applications.
            </p>
        </motion.section>
    );
}
