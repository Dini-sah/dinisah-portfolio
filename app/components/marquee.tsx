import { motion, type Variants } from "framer-motion";
import React from "react";

interface MarqueeProps {
    content: React.ReactNode[];
    speed?: number;
    styles: string;
}

export default function Marquee({ content, speed, styles }: MarqueeProps) {

    const marqueeVariants: Variants = {
        animate: {
            x: [0, -content.length * (100 + 8)],
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
                WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%, #000 5%, #000 95%, rgba(0,0,0,0) 100%)', // For Safari support
            }}
            className={`overflow-hidden whitespace-nowrap w-full ${styles} sm:max-w-[20rem] min-[300px]:max-w-[13.5rem]`}>
            <motion.div variants={marqueeVariants} animate="animate" className="marquee_container">
                <div className="marquee_wrapper flex items-center gap-2">
                    {Array.from({ length: 2 }).map((_, loopIndex) => (
                        content.map((data, contentIndex) => (
                            <div key={`${loopIndex}-${contentIndex}`} className="svgIcon">
                                {data}
                            </div>
                        ))
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
