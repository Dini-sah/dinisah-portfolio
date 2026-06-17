"use client";

import { useEffect, useState } from "react";
import { motion, type Variants } from "framer-motion";

type MaskedRotatingTextProps = {
  className?: string;
  interval?: number;
  texts: string[];
};

const revealDuration = 1.65;
const revealEase = [0.4, 1, 0.3, 1] as const;
const revealTimes = [0, 0.66, 0.78, 1];
const revealCycleMs = revealDuration * 1000;
const cycleRestMs = 120;

const textVariants: Variants = {
  hidden: {
    clipPath: "inset(0 100% 0 0)",
  },
  visible: {
    clipPath: [
      "inset(0 100% 0 0)",
      "inset(0 100% 0 0)",
      "inset(0 100% 0 0)",
      "inset(0 0% 0 0)",
    ],
    transition: {
      duration: revealDuration,
      ease: revealEase,
      times: revealTimes,
    },
  },
};

const maskVariants: Variants = {
  hidden: {
    clipPath: "inset(0 100% 0 0)",
  },
  visible: {
    clipPath: [
      "inset(0 100% 0 0)",
      "inset(0 0% 0 0)",
      "inset(0 0% 0 0)",
      "inset(0 0% 0 100%)",
    ],
    transition: {
      duration: revealDuration,
      ease: revealEase,
      times: revealTimes,
    },
  },
};

export default function MaskedRotatingText({
  className = "",
  interval = revealCycleMs,
  texts,
}: MaskedRotatingTextProps) {
  const [index, setIndex] = useState(0);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    if (texts.length < 2) return;

    const cycleDelay = Math.max(interval, revealCycleMs + cycleRestMs);
    const intervalId = window.setInterval(() => {
      setCycle((currentCycle) => currentCycle + 1);
      setIndex((currentIndex) => (currentIndex + 1) % texts.length);
    }, cycleDelay);

    return () => window.clearInterval(intervalId);
  }, [interval, texts.length]);

  if (texts.length === 0) return null;

  const text = texts[index];

  return (
    <span className={className} aria-live="polite">
      <span className="sr-only">{text}</span>
      <span key={`${text}-${cycle}`} className="relative inline-block overflow-hidden" aria-hidden="true">
        <motion.span
          className="inline-block will-change-[clip-path]"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          {text}
        </motion.span>
        <motion.span
          className="absolute inset-0 z-10 bg-primary-color will-change-[clip-path]"
          variants={maskVariants}
          initial="hidden"
          animate="visible"
        />
      </span>
    </span>
  );
}
