"use client";

import { motion, type Variants } from "framer-motion";

type RevealHeadingProps = {
  className?: string;
  once?: boolean;
  text: string;
};

const wordVariants: Variants = {
  hidden: {
    clipPath: "inset(0 100% 0 0)",
  },
  visible: {
    clipPath: "inset(0 0% 0 0)",
    transition: {
      duration: 0.95,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function RevealHeading({
  className = "",
  once = true,
  text,
}: RevealHeadingProps) {
  const words = text.split(" ");

  return (
    <motion.h2
      aria-label={text}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.65, margin: "0px 0px -12% 0px" }}
      transition={{ staggerChildren: 0.045 }}
    >
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          className="inline-block overflow-hidden align-bottom"
          variants={wordVariants}
        >
          <span aria-hidden="true" className="inline-block">
            {word}
          </span>
          {index < words.length - 1 && <span aria-hidden="true">&nbsp;</span>}
        </motion.span>
      ))}
    </motion.h2>
  );
}
