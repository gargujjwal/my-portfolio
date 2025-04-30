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
    { name: "Home", hash: "#home" },
    { name: "About", hash: "#about" },
    { name: "Projects", hash: "#projects" },
    { name: "Skills", hash: "#skills" },
    { name: "Experience", hash: "#experience" },
    { name: "Contact", hash: "#contact" },
] as const;

export const experiencesData: ExperienceData[] = [
    {
        title: "Enterprise Software Developer",
        location: "School Management System Project",
        description:
            "Engineered a comprehensive school management platform handling 1200+ student records with modular architecture. Implemented tRPC for type-safe API communication and developed scalable features including Fee Management, Attendance Tracking, and Notification Systems.",
        icon: React.createElement(FaReact),
        date: "October 2023 - April 2024",
    },
    {
        title: "Technical Teaching Assistant",
        location: "Apna College (JainEMO Pvt. Ltd.)",
        description:
            "Mentored 4,000+ students by providing comprehensive technical guidance and resolving doubts across programming concepts. Maintained an exceptional 5-star rating through consistent, high-quality technical support and knowledge transfer.",
        icon: React.createElement(LuGraduationCap),
        date: "October 2023 - January 2024",
    },
    {
        title: "Backend Development Intern",
        location: "Valsco Technology Pvt. Ltd. (Remote)",
        description:
            "Optimized website SEO achieving top 5 Google search rankings through strategic implementation. Executed efficient database seeding using Puppeteer for web scraping. Successfully integrated third-party payment gateway, enhancing the platform's payment capabilities.",
        icon: React.createElement(CgWorkAlt),
        date: "August 2023 - September 2023",
    },
    {
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
        title: "Cross-Platform Expense Tracker",
        description:
            "Mobile application for expense tracking with state management using Redux and real-time data synchronization through Firebase.",
        tags: ["React Native", "Redux", "Expo", "Firebase"],
        imageUrl: ExpenseTrackerImg,
        url: "https://github.com/gargujjwal/expense-tracker-react-native-app",
    },
] as const;

export const skillsData = {
    "Programming Languages": [
        "Java",
        "TypeScript",
        "JavaScript",
        "Python",
        "C++",
    ],
    "Backend Technologies": [
        "Spring Boot",
        "Node.js",
        "Flask",
        "REST APIs",
        "Microservices",
        "JWT",
        "Spring Security",
    ],
    "Frontend Technologies": [
        "React",
        "Next.js",
        "Angular",
        "Material UI",
        "Tailwind CSS",
    ],
    Databases: ["PostgreSQL", "MySQL", "MongoDB", "Firebase", "Prisma ORM"],
    "DevOps & Tools": [
        "Docker",
        "CI/CD",
        "GitHub Actions",
        "Git",
        "Neovim",
        "Maven",
        "Gradle",
    ],
    "Testing & Quality": ["JUnit", "Vitest"],
    "AI & ML": ["Machine Learning", "Computer Vision", "NLP"],
} as const;
