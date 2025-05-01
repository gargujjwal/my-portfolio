import AceInterviewImg from "@/../public/images/projects/aceinterview.png";
import ExpenseTrackerImg from "@/../public/images/projects/expense-tracker.png";
import ForklifyImg from "@/../public/images/projects/forklify.png";
import CervixCancerPredictorImg from "@/../public/images/projects/hackforher-health.png";
import PlaceholderImg from "@/../public/images/projects/placeholder-image.jpg";
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { ExperienceData } from "./types";

export const links = [
    { id: 1, name: "Home", hash: "#home" },
    { id: 2, name: "About", hash: "#about" },
    { id: 3, name: "Projects", hash: "#projects" },
    { id: 4, name: "Skills", hash: "#skills" },
    { id: 5, name: "Experience", hash: "#experience" },
    { id: 6, name: "Contact", hash: "#contact" },
] as const;

export const experiencesData: ExperienceData[] = [
    {
        id: 1,
        title: "Enterprise Software Developer",
        location: "School Management System Project",
        description:
            "Engineered a comprehensive school management platform handling 1200+ student records with modular architecture. Implemented tRPC for type-safe API communication and developed scalable features including Fee Management, Attendance Tracking, and Notification Systems.",
        icon: React.createElement(FaReact),
        date: "October 2023 - April 2024",
    },
    {
        id: 2,
        title: "Technical Teaching Assistant",
        location: "Apna College (JainEMO Pvt. Ltd.)",
        description:
            "Mentored 4,000+ students by providing comprehensive technical guidance and resolving doubts across programming concepts. Maintained an exceptional 5-star rating through consistent, high-quality technical support and knowledge transfer.",
        icon: React.createElement(LuGraduationCap),
        date: "October 2023 - January 2024",
    },
    {
        id: 3,
        title: "Backend Development Intern",
        location: "Valsco Technology Pvt. Ltd. (Remote)",
        description:
            "Optimized website SEO achieving top 5 Google search rankings through strategic implementation. Executed efficient database seeding using Puppeteer for web scraping. Successfully integrated third-party payment gateway, enhancing the platform's payment capabilities.",
        icon: React.createElement(CgWorkAlt),
        date: "August 2023 - September 2023",
    },
    {
        id: 4,
        title: "Bachelor of Technology, Information Technology",
        location: "Vellore Institute of Technology, Tamil Nadu",
        description:
            "Pursuing B.Tech in Information Technology with a strong academic record (CGPA: 8.96/10). Actively participating in technical clubs and hackathons, including developing an AI-driven interview preparation system and machine learning-powered healthcare platform.",
        icon: React.createElement(LuGraduationCap),
        date: "2021 - 2025 (Expected)",
    },
];

export const projectsData = [
    {
        id: 1,
        title: "AceInterview",
        description:
            "AI-driven interview preparation system with multimodal analysis of verbal and non-verbal communication, providing real-time feedback on facial emotions, speech patterns, posture, and vocal prosody.",
        tags: [
            "Python",
            "Flask",
            "React.js",
            "Docker",
            "Machine Learning",
            "Computer Vision",
            "NLP",
            "Microservices",
        ],
        imageUrl: AceInterviewImg,
        url: "https://github.com/gargujjwal/aceinterview",
    },
    {
        id: 2,
        title: "Cervix Cancer Predictor",
        description:
            "A machine learning-powered healthcare platform for cervical cancer prediction with secure patient-doctor communication and real-time consultation features.",
        tags: [
            "Java",
            "Spring Boot",
            "Spring Security",
            "Flask",
            "PostgreSQL",
            "Machine Learning",
            "Docker",
        ],
        imageUrl: CervixCancerPredictorImg,
        url: "https://github.com/gargujjwal/hackforher-health",
    },
    {
        id: 3,
        title: "Enterprise School Management System",
        description:
            "Comprehensive school management platform handling 1200+ student records with features including fee management, attendance tracking, and notification systems.",
        tags: [
            "Next.js",
            "TypeScript",
            "MySQL",
            "Prisma ORM",
            "tRPC",
            "AWS EC2",
            "Microservices",
        ],
        imageUrl: PlaceholderImg,
        url: "",
    },
    {
        id: 4,
        title: "Forklify",
        description:
            "Full-stack recipe sharing platform with comprehensive CRUD operations and secure user authentication using NextAuth.js.",
        tags: [
            "Next.js",
            "MongoDB",
            "Prisma",
            "NextAuth.js",
            "Material UI",
            "Tailwind",
        ],
        imageUrl: ForklifyImg,
        url: "https://github.com/gargujjwal/forklify",
    },
    {
        id: 5,
        title: "Cross-Platform Expense Tracker",
        description:
            "Mobile application for expense tracking with state management using Redux and real-time data synchronization through Firebase.",
        tags: ["React Native", "Redux", "Expo", "Firebase"],
        imageUrl: ExpenseTrackerImg,
        url: "https://github.com/gargujjwal/expense-tracker-react-native-app",
    },
] as const;

export const skillsData = [
    {
        id: 1,
        title: "Programming Languages",
        skills: [
            { id: 1, name: "Java" },
            { id: 2, name: "TypeScript" },
            { id: 3, name: "JavaScript" },
            { id: 4, name: "Python" },
            { id: 5, name: "C++" },
        ],
    },
    {
        id: 2,
        title: "Backend Technologies",
        skills: [
            { id: 1, name: "Spring Boot" },
            { id: 2, name: "Node.js" },
            { id: 3, name: "Flask" },
            { id: 4, name: "REST APIs" },
            { id: 5, name: "Microservices" },
            { id: 6, name: "JWT" },
            { id: 7, name: "Spring Security" },
        ],
    },
    {
        id: 3,
        title: "Frontend Technologies",
        skills: [
            { id: 1, name: "React" },
            { id: 2, name: "Next.js" },
            { id: 3, name: "Angular" },
            { id: 4, name: "Material UI" },
            { id: 5, name: "Tailwind CSS" },
        ],
    },
    {
        id: 4,
        title: "Databases & ORMs",
        skills: [
            { id: 1, name: "PostgreSQL" },
            { id: 2, name: "MySQL" },
            { id: 3, name: "MongoDB" },
            { id: 4, name: "Firebase" },
            { id: 5, name: "Prisma ORM" },
            { id: 6, name: "JPA" },
            { id: 7, name: "JDBC" },
        ],
    },
    {
        id: 5,
        title: "DevOps & Tools",
        skills: [
            { id: 1, name: "Docker" },
            { id: 2, name: "CI/CD" },
            { id: 3, name: "GitHub Actions" },
            { id: 4, name: "Git" },
            { id: 5, name: "Neovim" },
            { id: 6, name: "Maven" },
            { id: 7, name: "Gradle" },
        ],
    },
    {
        id: 6,
        title: "Testing & Quality",
        skills: [
            { id: 1, name: "JUnit" },
            { id: 2, name: "Vitest" },
            { id: 3, name: "Postman" },
        ],
    },
] as const;
