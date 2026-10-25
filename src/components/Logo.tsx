"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import CricketBall from "./CricketBall";

/**
 * Logo component — cricket ball icon + "Yash." text.
 *
 * Hover state (Super Yash Easter egg):
 * - Ball tilts 20deg and subtly scales up.
 * - "Super " smoothly unfolds in red (#D6211E) from behind the ball,
 *   gliding "Yash." to the right.
 * - Both "Super" and "Yash." stay 100% locked to the header baseline.
 */
export default function Logo() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href="/"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      className="inline-flex items-baseline gap-[10px] select-none group cursor-pointer"
      aria-label="Super Yash Portfolio Home"
    >
      {/* Cricket ball with spring tilt/zoom on hover */}
      <motion.span
        className="inline-block relative top-[13px]"
        animate={{
          rotate: isHovered ? 20 : 0,
          scale: isHovered ? 1.08 : 1,
        }}
        transition={{ type: "spring", stiffness: 380, damping: 22 }}
      >
        <CricketBall size={36} variant="logo" />
      </motion.span>

      {/* Typography with smooth "Super" reveal on hover */}
      <span className="font-logo text-[20px] font-medium leading-[1.25] tracking-[-0.02em] inline-flex items-baseline">
        <motion.span
          initial={false}
          animate={{
            width: isHovered ? "auto" : 0,
            opacity: isHovered ? 1 : 0,
            x: isHovered ? 0 : -6,
            marginRight: isHovered ? "0.28em" : "0em",
          }}
          transition={{
            duration: 0.35,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="text-[#d6211e] overflow-hidden whitespace-nowrap inline-block"
        >
          Super
        </motion.span>
        <span className="text-[#1c1b19]">Yash.</span>
      </span>
    </a>
  );
}
