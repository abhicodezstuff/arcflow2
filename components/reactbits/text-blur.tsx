"use client";

import { motion } from "motion/react";

interface TextBlurProps {
  children: React.ReactNode;
  className?: string;
}

export function TextBlur({ children, className = "" }: TextBlurProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        filter: "blur(12px)",
        y: 12,
      }}
      animate={{
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}