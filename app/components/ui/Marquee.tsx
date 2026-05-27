"use client";

import { motion, type Variants } from "framer-motion";
import React, { useLayoutEffect, useRef, useState } from "react";

interface MarqueeProps {
    content: React.ReactNode[];
    speed?: number;
    styles?: string;
}

export default function Marquee({ content, speed = 20, styles = "" }: MarqueeProps) {
    const rowRef = useRef<HTMLDivElement | null>(null);
    const [rowWidth, setRowWidth] = useState(0);

    useLayoutEffect(() => {
        const row = rowRef.current;
        if (!row) return;

        const updateWidth = () => {
            setRowWidth(row.scrollWidth);
        };

        updateWidth();

        const observer = new ResizeObserver(updateWidth);
        observer.observe(row);

        return () => observer.disconnect();
    }, [content]);

    const marqueeVariants: Variants = {
        animate: {
            x: rowWidth ? [0, -rowWidth] : 0,
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop" as const,
                    duration: speed,
                    ease: "linear" as const,
                },
            },
        },
    };

    return (
        <div
            style={{
                maskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%, #000 5%, #000 95%, rgba(0,0,0,0) 100%)',
                WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%, #000 5%, #000 95%, rgba(0,0,0,0) 100%)',
            }}
            className={`w-full min-w-0 max-w-full overflow-hidden whitespace-nowrap ${styles}`}
        >
            <motion.div
                variants={marqueeVariants}
                animate={rowWidth ? "animate" : undefined}
                className="marquee_container flex w-max max-w-none items-center"
            >
                {[0, 1].map((loopIndex) => (
                    <div
                        key={loopIndex}
                        ref={loopIndex === 0 ? rowRef : undefined}
                        className="marquee_wrapper flex shrink-0 items-center gap-3 pr-3"
                        aria-hidden={loopIndex === 1}
                    >
                        {content.map((item, contentIndex) => (
                            <div
                                key={`${loopIndex}-${contentIndex}`}
                                className="svgIcon flex h-10 w-28 shrink-0 items-center justify-center [&_svg]:h-8 [&_svg]:max-w-full [&_svg]:shrink-0"
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                ))}
                <div className="marquee_wrapper flex shrink-0 items-center gap-3 pr-3" aria-hidden>
                    {content.map((item, contentIndex) => (
                        <div
                            key={`buffer-${contentIndex}`}
                            className="svgIcon flex h-10 w-28 shrink-0 items-center justify-center [&_svg]:h-8 [&_svg]:max-w-full [&_svg]:shrink-0"
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
