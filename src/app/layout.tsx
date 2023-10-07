import "./globals.css";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ThemeSwitch from "@/components/ui/ThemeSwitch";
import ActiveSectionContextProvider from "@/contexts/ActiveSectionContext";
import ThemeContextProvider from "@/contexts/ThemeContext";
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

const TITLE = "Ujjwal Garg | Portfolio" as const;
const DESCRIPTION =
    "Ujjwal is a full-stack developer with 1½ years of experience. His focus is React (Next.js) & backend with Node" as const;

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    generator: "Next.js",
    applicationName: TITLE,
    referrer: "origin-when-cross-origin",
    keywords: [
        "Ujjwal",
        "Garg",
        "Personal",
        "Ujjwal Garg",
        "Ujjwal Portfolio",
        "Garg Portfolio",
        "Ujjwal Garg Personal",
        "Ujjwal Garg Portfolio",
        "Ujjwal Garg Personal Portfolio",
        "Next.js",
        "vercel",
        "Portfolio",
        "developer",
    ],
    authors: [{ name: "Ujjwal Garg" }],
    colorScheme: "dark light",
    creator: "Ujjwal Garg",
    category: "Portfolio",
    formatDetection: {
        email: true,
        address: false,
        telephone: false,
    },
    openGraph: {
        title: TITLE,
        description: DESCRIPTION,
        url: "https://ujjwal-new-portfolio.vercel.app/",
        siteName: TITLE,
        images: [
            {
                url: "https://ujjwal-new-portfolio.vercel.app/about",
            },
        ],
        locale: "en_US",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: TITLE,
        description: DESCRIPTION,
        creator: "@UjwalGarg100204",
        images: {
            url: "/images/seo.png",
            alt: TITLE,
        },
    },
    verification: {
        google: "INGBoGtBTc4-bplE45Egc4UJbModhDeMq6wS7JFCXPM",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="!scroll-smooth">
            <meta
                property="twitter:image"
                content="Twitter link preview image URL"
            ></meta>
            <body
                className={`${inter.className} relative bg-gray-50 pt-28 text-gray-950 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 sm:pt-36`}
            >
                <div className="absolute right-[11rem] top-[-6rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full bg-[#fbe2e3] blur-[10rem] dark:bg-[#946263] sm:w-[68.75rem]"></div>
                <div className="absolute left-[-35rem] top-[-1rem] -z-10 h-[31.25rem] w-[50rem] rounded-full bg-[#dbd7fb] blur-[10rem] dark:bg-[#676394] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>

                <ThemeContextProvider>
                    <ActiveSectionContextProvider>
                        <Header />
                        {children}
                        <Footer />

                        <Toaster position="top-right" />
                        <ThemeSwitch />
                    </ActiveSectionContextProvider>
                </ThemeContextProvider>
                <Analytics />
            </body>
        </html>
    );
}
