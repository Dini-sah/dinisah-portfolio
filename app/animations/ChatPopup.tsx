"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const messages = [
    "Hola!",
    "My name is Dinesh Kumar",
    "But you can call me Dineyyy!!!",
    "Copy my email, and get in touch",
];

export default function ChatPopup() {
    const inViewRef = useRef(null);
    const isInView = useInView(inViewRef, { once: false, margin: "0px" });
    const [displayedMessages, setDisplayedMessages] = useState<string[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (isInView && currentIndex < messages.length) {
            const timer = setTimeout(() => {
                setDisplayedMessages((prev) => [...prev, messages[currentIndex]]);
                setCurrentIndex((prev) => prev + 1);
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [isInView, currentIndex]);

    return (
        <div ref={inViewRef} className="absolute bottom-6 space-y-2">
            {displayedMessages.map((msg, idx) => {
                const isFirst = idx === 0;
                const isLast = idx === displayedMessages.length - 1;
                const borderRadiusClass = isFirst
                    ? "rounded-tl-[0.75rem] rounded-tr-[0.75rem] rounded-br-[0.75rem] rounded-bl-[0.25rem]"
                    : isLast
                        ? "rounded-tl-[0.25rem] rounded-tr-[0.75rem] rounded-br-[0.75rem] rounded-bl-[0.75rem]"
                        : "rounded-tl-[0.25rem] rounded-tr-[0.75rem] rounded-br-[0.75rem] rounded-bl-[0.25rem]";

                return (
                    <div key={`${msg}-${idx}`} className="w-fit rounded-lg text-white">
                        <p className={`bg-zinc-800/75 p-2 pr-3 leading-[1] lg:text-sm 2xl:text-lg ${borderRadiusClass}`}>
                            {msg}
                        </p>
                    </div>
                );
            })}
            {isInView && currentIndex < messages.length && (
                <div className="flex h-6 w-fit animate-pulse items-center gap-1 rounded-lg bg-zinc-800 p-2 text-gray-700">
                    <span className="h-2 w-2 rounded-full bg-gray-400"></span>
                    <span className="h-2 w-2 rounded-full bg-gray-400"></span>
                    <span className="h-2 w-2 rounded-full bg-gray-400"></span>
                </div>
            )}
        </div>
    );
}
