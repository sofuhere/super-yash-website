"use client";

import { motion, type Variants } from "framer-motion";
import CricketBall from "./CricketBall";
import HeroCta from "./HeroCta";

/**
 * Staggered animation variants:
 * Rhythmic 100ms cascade for each line, moving subtly up 12px with an Apple-style ease.
 */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

const lineVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

/**
 * Ball entry animation:
 * Begins as Line 1 settles (~0.25s), executing a gentle seam-rotation from -45° to 0°
 * with a soft spring settle that mimics real physical inertia.
 */
const ballVariants: Variants = {
  hidden: {
    rotate: -45,
    scale: 0.82,
  },
  visible: {
    rotate: 0,
    scale: 1,
    transition: {
      delay: 0.22,
      type: "spring",
      stiffness: 220,
      damping: 18,
      mass: 0.8,
    },
  },
};

/**
 * Hero section — main headline with exact Figma styling.
 *
 * Exact Colors:
 * - "Hey, I’m ": #1c1b19 (Regular)
 * - "Yash": #a2a2a2 (Muted grey, turns #d6211e on hover)
 * - Cricket Ball: #D6211E with vertical seams
 * - "a ": #1c1b19 (Regular)
 * - "product manager": #d6211e (Red, Regular — not italic)
 * - " with": #1c1b19 (Regular)
 * - "roots in design & who": #1c1b19 (Regular)
 * - "enjoys playing cricket.": #1c1b19 (Regular)
 */
export default function Hero() {
  return (
    <main className="flex flex-col items-center justify-center flex-1 px-6 md:px-12 xl:px-[120px] py-12 md:py-0 select-none">
      <motion.h1
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="font-sans text-[27px] sm:text-[34px] md:text-[40px] lg:text-[46px] font-normal text-[#1c1b19] text-center max-w-[786px] leading-[1.28] tracking-[-0.06em]"
      >
        {/* Line 1: Hey, I’m Yash 🔴 */}
        <motion.span variants={lineVariants} className="block">
          <span>Hey, I’m </span>
          <span className="group/yash inline-inline cursor-pointer">
            <span className="text-[#a2a2a2] transition-colors duration-300 group-hover/yash:text-[#d6211e]">
              Yash
            </span>
            <span className="inline-block align-middle ml-[6px] sm:ml-[8px] lg:ml-[9px] relative -top-[2px] md:-top-[3px] transition-transform duration-300 group-hover/yash:rotate-12 group-hover/yash:scale-105 active:scale-95">
              <motion.span
                variants={ballVariants}
                className="block w-[24px] h-[24px] sm:w-[30px] sm:h-[30px] lg:w-[36px] lg:h-[36px]"
              >
                <CricketBall
                  className="w-full h-full"
                  variant="logo"
                />
              </motion.span>
            </span>
          </span>
        </motion.span>

        {/* Line 2: a product manager with */}
        <motion.span variants={lineVariants} className="block">
          <span>a </span>
          <span className="text-[#d6211e]">product manager</span>
          <span> with</span>
        </motion.span>

        {/* Line 3: roots in design & who */}
        <motion.span variants={lineVariants} className="block">
          <span>roots in design &amp; who</span>
        </motion.span>

        {/* Line 4: enjoys playing cricket. */}
        <motion.span variants={lineVariants} className="block">
          <span>enjoys playing cricket.</span>
        </motion.span>
      </motion.h1>
      <HeroCta />
    </main>
  );
}
