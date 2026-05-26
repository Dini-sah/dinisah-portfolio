'use client'
import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useMotionValue, animate, useSpring } from "framer-motion";

export default function Cursor() {
    const [cursorSize, setCursorSize] = useState({ x: 40, y: 40 });
    const [cursorText, setCursorText] = useState('');
    const hoveredElementRef = useRef<HTMLElement | null>(null);
    const [borderRadius, setBorderRadius] = useState("50%");
    const tooltipRef = useRef<HTMLDivElement | null>(null);
    const threesoldDistance = 20;

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const smoothX = useSpring(mouseX, { stiffness: 300, damping: 20, mass: 0.5 });
    const smoothY = useSpring(mouseY, { stiffness: 300, damping: 20, mass: 0.5 });

    const resetElement = useCallback((element: HTMLElement | null) => {
        if (!element) return;

        animate(element, { x: 0, y: 0 }, {
            type: "spring",
            stiffness: 270,
            damping: 12,
            mass: 0.42
        });
    }, []);

    const resetCursor = useCallback(() => {
        resetElement(hoveredElementRef.current);
        hoveredElementRef.current = null;
        setCursorSize({ x: 40, y: 40 });
        setBorderRadius("50%");
        setCursorText('');
    }, [resetElement]);

    const getDistanceFromRect = useCallback((rect: DOMRect, x: number, y: number) => {
        const { top, left, width, height } = rect;
        const right = left + width;
        const bottom = top + height;
        const nearestX = Math.max(left, Math.min(x, right));
        const nearestY = Math.max(top, Math.min(y, bottom));
        const dx = x - nearestX;
        const dy = y - nearestY;

        return Math.sqrt(dx * dx + dy * dy);
    }, []);

    const handleMouseMove = useCallback((e: MouseEvent) => {
        const { clientX, clientY } = e;

        mouseX.set(clientX - cursorSize.x / 2);
        mouseY.set(clientY - cursorSize.y / 2);

        if (hoveredElementRef.current) {
            const { left, top, height, width } = hoveredElementRef.current.getBoundingClientRect();
            const hoverDistance = hoveredElementRef.current && getDistanceFromRect(hoveredElementRef.current.getBoundingClientRect(), clientX, clientY)
            const isTooltip = hoveredElementRef.current.hasAttribute("data-sticky-tooltip");
            const cardBgHover = hoveredElementRef.current.hasAttribute("data-hover");
            
            if (hoverDistance > threesoldDistance || cardBgHover) {
                resetCursor();
            } else if (!isTooltip) {
                const center = { x: left + width / 2, y: top + height / 2 }
                const distance = { x: clientX - center.x, y: clientY - center.y }
                mouseX.set((center.x - cursorSize.x / 2) + (distance.x * 0.1));
                mouseY.set((center.y - cursorSize.y / 2) + (distance.y * 0.1));

                animate(
                    hoveredElementRef.current,
                    { x: distance.x * 0.2, y: distance.y * 0.2 },
                    {
                        type: "spring",
                        stiffness: 360,
                        damping: 24,
                        mass: 0.28
                    }
                );
            } else {
                const offset = 40;
                mouseX.set(clientX - cursorSize.x / 2 + offset);
                mouseY.set(clientY - cursorSize.y / 2 + offset);
            }

        }
    }, [cursorSize.x, cursorSize.y, getDistanceFromRect, mouseX, mouseY, resetCursor]);

    const handleMouseEnter = useCallback((e: MouseEvent) => {
        const target = e.currentTarget as HTMLElement;
        if (!target.hasAttribute("data-sticky") && !target.hasAttribute("data-sticky-tooltip") 
        && !target.hasAttribute("data-hover")) return;

        if (hoveredElementRef.current && hoveredElementRef.current !== target) {
            resetElement(hoveredElementRef.current);
        }

        const rect = target.getBoundingClientRect();
        const style = window.getComputedStyle(target);
        hoveredElementRef.current = target;

        if (target.hasAttribute("data-sticky")) {
            setCursorSize({ x: rect.width + 10, y: rect.height + 10 });
            const radius = style.borderRadius;
            setBorderRadius(radius !== "0px" && radius !== "0" ? radius : "4px");
            setCursorText('');
        } else if (target.hasAttribute("data-sticky-tooltip")) {
            const value = target.getAttribute("data-sticky-tooltip");
            setCursorText(value || "");
            setTimeout(() => {
                requestAnimationFrame(() => {
                    if (tooltipRef.current) {
                        const { offsetWidth, offsetHeight } = tooltipRef.current;
                        setCursorSize({ x: offsetWidth, y: offsetHeight });
                        setBorderRadius("8px");
                    }
                });
            }, 0);
        } else if (target.hasAttribute("data-hover")) {
            setBorderRadius("50%");
        }
    }, [resetElement]);

    const handleMouseLeave = useCallback((e: MouseEvent) => {
        const target = e.currentTarget as HTMLElement;
        if (hoveredElementRef.current === target) {
            resetCursor();
        } else {
            resetElement(target);
        }
    }, [resetCursor, resetElement]);

    useEffect(() => {
        const stickyElements = document.querySelectorAll<HTMLElement>("[data-sticky]");
        const stickyTooltip = document.querySelectorAll<HTMLElement>("[data-sticky-tooltip]");
        const hoverCard = document.querySelectorAll<HTMLElement>("[data-hover]");

        window.addEventListener("mousemove", handleMouseMove);
        stickyElements.forEach((el) => {
            el.addEventListener("mouseenter", handleMouseEnter);
            el.addEventListener("mouseleave", handleMouseLeave);
        });
        stickyTooltip.forEach((el) => {
            el.addEventListener("mouseenter", handleMouseEnter);
            el.addEventListener("mouseleave", handleMouseLeave);
        })
        hoverCard.forEach((el) => {
            el.addEventListener("mouseenter", handleMouseEnter);
            el.addEventListener("mouseleave", handleMouseLeave);
        })

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            stickyElements.forEach((el) => {
                el.removeEventListener("mouseenter", handleMouseEnter);
                el.removeEventListener("mouseleave", handleMouseLeave);
            });
            stickyTooltip.forEach((el) => {
                el.removeEventListener("mouseenter", handleMouseEnter);
                el.removeEventListener("mouseleave", handleMouseLeave);
            });
            hoverCard.forEach((el) => {
                el.removeEventListener("mouseenter", handleMouseEnter);
                el.removeEventListener("mouseleave", handleMouseLeave);
            });
        };
    }, [handleMouseEnter, handleMouseLeave, handleMouseMove]);

    return (
        <motion.div
            className="circle"
            style={{
                left: smoothX,
                top: smoothY,
                pointerEvents: "none",
            }}
            animate={{
                width: cursorSize.x,
                height: cursorSize.y,
                borderRadius
            }}>
            <motion.div ref={tooltipRef} className="text-xs w-fit flow-root p-2 text-[#e5484d] dark:text-[#e4ded7] mix-blend-difference" style={{ whiteSpace: 'nowrap' }}>{cursorText}</motion.div>
        </motion.div>
    );
}
