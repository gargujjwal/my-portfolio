import { CgWorkAlt } from "react-icons/cg";
import ExpenseTrackerImg from "@/../public/images/projects/expense-tracker.png";
import { FaReact } from "react-icons/fa";
import ForklifyImg from "@/../public/images/projects/forklify.png";
import { LuGraduationCap } from "react-icons/lu";
import React from "react";
import RockPaperScissorImg from "@/../public/images/projects/rock-paper-scissor.png";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
    {
        title: "Full-Stack Developer",
        location: "Remote",
        description:
            "Hired for the first time to digitize all academics of Greenfield School in Tamil Nadu. This ongoing initiative aims to streamline and modernize various educational processes for enhanced efficiency and accessibility",
        icon: React.createElement(FaReact),
        date: "2023 - present",
    },
    {
        title: "Backend Developer Intern",
        location: "Remote",
        description:
            "Collaborated to develope backend with Node.JS and Firebase, integrated OAuth with JWT for secure user authentication. Used Puppeteer.JS for web scraping, managing data for 500+ lawyers. Also, dockerized and optimized SEO for top 10 search results",
        icon: React.createElement(CgWorkAlt),
        date: "2023 - Present",
    },
    {
        title: "Bachelor's Degree",
        location: "VIT, Vellore, Tamil Nadu, India",
        description:
            "I will complete my Bachelor's degree in Information Technology in 2025. I actively participate in various technical clubs and take part in numerous hackathons. This experience greatly enriches my knowledge and passion for IT.",
        icon: React.createElement(LuGraduationCap),
        date: "2021 - present",
    },
    {
        title: "Graduated School",
        location: "Delhi, India",
        description:
            "I completed my schooling at Flora Dale School in Delhi. In my 12th grade, I achieved an impressive 94.4%, building upon the strong foundation I laid in my 10th grade where I secured 93.8%.",
        icon: React.createElement(LuGraduationCap),
        date: "2021",
    },
] as const;

export const projectsData = [
    {
        title: "Forklify",
        description:
            "A unique recipe-sharing platform for culinary creators to showcase their dishes and discover a variety of recipes from fellow food enthusiasts.",
        tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma", "MUI"],
        imageUrl: ForklifyImg,
        url: "https://forklify-six.vercel.app/",
    },
    {
        title: "Expense Tracker App",
        description:
            "Effortlessly manages your expenses, track your spending, and stay on top of your budget with ease with this mobile app.",
        tags: ["React Native", "Redux", "Tailwind", "Firebase"],
        imageUrl: ExpenseTrackerImg,
        url: "",
    },
    {
        title: "🪨 📃 ✂️ Game",
        description:
            "A simple game of rock-paper-scissors built with React and Tailwind.",
        tags: ["React", "Vite", "Typescript", "Tailwind"],
        imageUrl: RockPaperScissorImg,
        url: "https://gargujjwal.github.io/Frontend-Mentors-rock-paper-scissors-solution/",
    },
] as const;

export const skillsData = [
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
    "React",
    "React Native",
    "Redux",
    "Next.js",
    "HTML",
    "CSS",
    "Node.js",
    "Git",
    "Tailwind",
    "Prisma",
    "MongoDB",
    "Express",
    "PostgreSQL",
    "Flask",
    "Post",
] as const;
