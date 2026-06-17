"use client";

import { motion, type Variants } from "framer-motion";

type RevealHeadingProps = {
  className?: string;
  lines?: string[];
  once?: boolean;
  text: string;
};

const lineVariants: Variants = {
  hidden: {
    clipPath: "inset(0 100% 0 0)",
  },
  visible: (index: number) => ({
    clipPath: [
      "inset(0 100% 0 0)",
      "inset(0 100% 0 0)",
      "inset(0 100% 0 0)",
      "inset(0 0% 0 0)",
    ],
    transition: {
      delay: index * 0.22,
      duration: 1.85,
      ease: [0.4, 1, 0.3, 1],
      times: [0.5, 0.9, 0.9, 1],
    },
  }),
};

const maskVariants: Variants = {
  hidden: {
    clipPath: "inset(0 100% 0 0)",
  },
  visible: (index: number) => ({
    clipPath: [
      "inset(0 100% 0 0)",
      "inset(0 0% 0 0)",
      "inset(0 0% 0 0)",
      "inset(0 0% 0 100%)",
    ],
    transition: {
      delay: index * 0.22,
      duration: 1.85,
      ease: [0.4, 1, 0.3, 1],
      times: [0.5, 0.9, 0.9, 1],
    },
  }),
};

export default function RevealHeading({
  className = "",
  lines,
  once = true,
  text,
}: RevealHeadingProps) {
  const revealLines = lines ?? [text];

  return (
    <motion.h2
      aria-label={text}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.65, margin: "0px 0px -12% 0px" }}
    >
      {revealLines.map((line, index) => (
        <span
          key={`${line}-${index}`}
          className="relative block overflow-hidden"
        >
          <motion.span
            aria-hidden="true"
            className="block will-change-[clip-path]"
            custom={index}
            variants={lineVariants}
          >
            {line}
          </motion.span>
          <motion.span
            aria-hidden="true"
            className="absolute inset-0 z-10 bg-primary-color will-change-[clip-path]"
            custom={index}
            variants={maskVariants}
          />
        </span>
      ))}
    </motion.h2>
  );
}
