"use client";

import React, { createContext, useContext, useState } from "react";

import type { SectionName } from "@/lib/types";

type ActiveSectionCtx = {
    activeSection: SectionName;
    timeOfLastClick: number;
    changeActiveSection: (section: SectionName) => void;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
};

export const ActiveSectionContext = createContext<ActiveSectionCtx | null>(
    null,
);

type ActiveSectionContextProviderProps = {
    children: React.ReactNode;
};

export default function ActiveSectionContextProvider({
    children,
}: ActiveSectionContextProviderProps) {
    const [activeSection, setActiveSection] = useState<SectionName>("Home");
    const [timeOfLastClick, setTimeOfLastClick] = useState(0); // we need to keep track of this to disable the observer temporarily when user clicks on a link

    const changeActiveSection = (section: SectionName) => {
        setActiveSection(section);
        setTimeOfLastClick(Date.now());
    };

    return (
        <ActiveSectionContext.Provider
            value={{
                activeSection,
                timeOfLastClick,
                changeActiveSection,
                setActiveSection,
            }}
        >
            {children}
        </ActiveSectionContext.Provider>
    );
}

export function useActiveSectionCtx() {
    const context = useContext(ActiveSectionContext);

    if (context === null) {
        throw new Error(
            "useActiveSectionCtx must be used within an ActiveSectionContextProvider",
        );
    }

    return context;
}
