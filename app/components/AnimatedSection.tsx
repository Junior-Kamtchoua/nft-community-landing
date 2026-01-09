"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
};

export default function AnimatedSection({
  children,
  className = "",
}: AnimatedSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 1 }}
      whileInView={{
        opacity: [0, 1, 1],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 2,
        times: [0, 0.5, 1],
        ease: "easeOut",
      }}
      viewport={{
        once: false, // 🔥 rejoue à CHAQUE scroll
        amount: 0.3,
      }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
