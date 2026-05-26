'use client'
import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import MoonIcon from "../assets/icons/MoonIcon";
import SunIcon from "../assets/icons/SunIcon";

const subscribe = (callback: () => void) => {
    const timeoutId = window.setTimeout(callback, 0);
    return () => window.clearTimeout(timeoutId);
};

const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

export default function Theme() {
    const { systemTheme, theme, setTheme } = useTheme();
    const mounted = useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);
    const currentTheme = theme === "system" ? systemTheme : theme;

    const toggleTheme = () => {
        return currentTheme === "light" ? setTheme("dark") : setTheme("light");
    }

    return (
        <button
            onClick={toggleTheme}
            className="dark:bg-primary-bg bg-zinc-100 dark:text-primary-color text-zinc-500 border dark:border-zinc-800 border-zinc-200 rounded-full p-1"
            aria-label="Toggle Theme"
            data-sticky
        >
            <span
                className={`block duration-300 transition-transform ${currentTheme === "light" ? "-rotate-180" : "rotate-0"
                    }`}
            >
                {mounted && currentTheme === "light" ? <SunIcon /> : <MoonIcon />}
            </span>
        </button>
    )
}
