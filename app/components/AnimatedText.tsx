"use client";

import { motion } from "framer-motion";

type AnimatedTextProps = {
  text: string;
  className?: string;
  stagger?: number;
  as?: "h1" | "h2";
};

const container = (stagger: number) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: stagger,
    },
  },
});

const letter = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
};

export default function AnimatedText({
  text,
  className = "",
  stagger = 0.05,
  as = "h2",
}: AnimatedTextProps) {
  const MotionTag = as === "h1" ? motion.h1 : motion.h2;

  return (
    <MotionTag
      variants={container(stagger)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      className={className}
    >
      {text.split("").map((char, index) => (
        <motion.span key={index} variants={letter} className="inline-block">
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </MotionTag>
  );
}
