"use client";

import { motion } from "framer-motion";

type AnimatedSectionProps = {
  children: React.ReactNode;
  className?: string;
};

export default function AnimatedSection({
  children,
  className = "",
}: AnimatedSectionProps) {
  // Calcul direct (pas de state, pas d'effet)
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <motion.section
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }} // 🔑 animation jouée UNE SEULE FOIS
      variants={{
        hidden: {
          opacity: 0,
          scale: 1,
        },
        visible: {
          opacity: 1,
          scale: isMobile ? 1 : [1, 1.2, 1], // scale desktop uniquement
          transition: {
            duration: 2,
            ease: "easeOut",
          },
        },
      }}
    >
      {children}
    </motion.section>
  );
}
