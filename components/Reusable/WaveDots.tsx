"use client";
import React from "react";
import { motion } from "framer-motion";

const AnimatedDotsBackground: React.FC = () => {
  const rows = 20;
  const cols = 20;
  const dots = Array.from({ length: rows * cols }, (_, i) => i);

  return (
    <div className="relative flex h-50 w-50 items-center justify-center bg-white dark:bg-black overflow-hidden group">
      {/* Base dotted background */}
      <div
        className="
          absolute inset-0 
          [background-size:20px_20px]
          [background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]
          dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]
          transition-all duration-500
          group-hover:[background-image:radial-gradient(#60a5fa_1px,transparent_1px)]
          dark:group-hover:[background-image:radial-gradient(#f472b6_1px,transparent_1px)]
        "
      />

      {/* Animated floating dots */}
      <div className="absolute inset-0 grid [grid-template-columns:repeat(auto-fill,minmax(25px,1fr))] [grid-template-rows:repeat(auto-fill,minmax(25px,1fr))] pointer-events-none">
        {dots.map((_, i) => {
          const delay = (i % cols) * 0.03 + Math.floor(i / cols) * 0.03;
          return (
            <motion.div
              key={i}
              className="rounded-full mx-auto my-auto"
              style={{
                width: "4px",
                height: "4px",
                backgroundColor: "rgba(156,163,175,0.4)",
              }}
              animate={{
                y: [0, -2, 0],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay,
              }}
              whileHover={{
                y: -6,
                scale: 1.6,
                backgroundColor: [
                  "#60a5fa", // blue
                  "#34d399", // green
                  "#facc15", // yellow
                  "#f87171", // red
                  "#a78bfa", // purple
                ],
                transition: { duration: 1.2, repeat: Infinity },
              }}
            />
          );
        })}
      </div>

      {/* Soft radial fade overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-white/50 dark:to-black/70" />
    </div>
  );
};

export default AnimatedDotsBackground;
