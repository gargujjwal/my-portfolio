"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

import useLocalStorage from "@/hooks/useLocalStorage";

type Theme = "light" | "dark";

type ThemeContextProviderProps = {
    children: React.ReactNode;
};

type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export default function ThemeContextProvider({
    children,
}: ThemeContextProviderProps) {
    const { setOrUpdateValue: setThemeLocal, getValue: getThemeLocal } =
        useLocalStorage("theme");

    const [theme, setTheme] = useState<Theme>("light");

    const toggleTheme = () => {
        if (theme === "light") {
            setTheme("dark");
            setThemeLocal("dark");
            document.documentElement.classList.add("dark");
        } else {
            setTheme("light");
            setThemeLocal("light");
            document.documentElement.classList.remove("dark");
        }
    };

    useEffect(() => {
        const localStorageTheme = getThemeLocal();
        switch (true) {
            case localStorageTheme !== null:
                setTheme(localStorageTheme as Theme);
                if (localStorageTheme === "dark")
                    document.documentElement.classList.add("dark");
                break;
            case window.matchMedia("(prefers-color-scheme: dark)").matches:
                setTheme("dark");
                document.documentElement.classList.add("dark");
        }
    }, [getThemeLocal]);

    return (
        <ThemeContext.Provider
            value={{
                theme,
                toggleTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === null) {
        throw new Error("useTheme must be used within a ThemeContextProvider");
    }
    return context;
}
