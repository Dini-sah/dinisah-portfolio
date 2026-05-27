import { MouseEvent, ReactNode, useRef, useState } from "react";

type SpotlightCardProps = {
    children: ReactNode;
    className?: string;
    spotlightColor?: string;
};

const SpotlightCard = ({ children, className = "", spotlightColor = "rgba(255, 255, 255, 0.25)" }: SpotlightCardProps) => {
    const divRef = useRef<HTMLDivElement | null>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!divRef.current || isFocused) return;

        const rect = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleFocus = () => {
        setIsFocused(true);
        setOpacity(0.6);
    };

    const handleBlur = () => {
        setIsFocused(false);
        setOpacity(0);
    };

    const handleMouseEnter = () => {
        setOpacity(0.6);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`group relative overflow-hidden rounded-xl border border-[#d8d0c0]/80 bg-[#f6f1e7]/78 shadow-[0_18px_50px_rgba(72,61,45,0.10),inset_0_1px_0_rgba(255,255,255,0.65)] backdrop-blur-sm transition-[border-color,box-shadow] duration-300 ease-out hover:border-[#e5484d]/70 hover:shadow-[0_22px_58px_rgba(229,72,77,0.14),inset_0_1px_0_rgba(255,255,255,0.7)] focus-within:border-[#e5484d]/70 dark:border-neutral-700 dark:bg-[rgba(255,255,255,0.03)] dark:shadow-none dark:hover:border-primary-color/70 dark:hover:shadow-[0_20px_60px_rgba(51,224,146,0.08)] ${className}`}
        >
            <div className="pointer-events-none absolute inset-0 rounded-xl ring-0 ring-[#e5484d]/0 transition-[box-shadow] duration-300 group-hover:ring-2 group-hover:ring-[#e5484d]/20 group-focus-within:ring-2 group-focus-within:ring-[#e5484d]/20 dark:group-hover:ring-primary-color/20 dark:group-focus-within:ring-primary-color/20" />
            <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out"
                style={{
                    opacity,
                    background: `radial-gradient(circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 24%)`,
                }}
            />
            <div className="relative z-10 h-full">
                {children}
            </div>
        </div>
    );
};

export default SpotlightCard;
