"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type HoverCardProps = {
  children: ReactNode;
  className?: string;
};

export default function HoverCard({
  children,
  className = "",
}: HoverCardProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        y: -6,
      }}
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
