"use client";

import { motion } from "framer-motion";
import CricketBall from "./CricketBall";

/**
 * Hero section — main headline with exact Figma styling.
 *
 * Figma specs (Group 1 / Node 5768:756):
 * - Max width: 786px, height: 177px
 * - Font: Inter Regular (400)
 * - Size: 46px on desktop (fluidly responsive on mobile)
 * - Letter-spacing: -6% (-0.06em)
 * - Line-height: 128%
 * - Alignment: Center
 *
 * Exact Colors:
 * - "Hey, I’m ": #1c1b19 (Regular)
 * - "Yash": #a2a2a2 (Muted grey, Regular)
 * - Cricket Ball: #D6211E with vertical seams
 * - " a": #1c1b19 (Regular)
 * - "product manager": #d6211e (Red, Regular — not italic!)
 * - " with roots in design": #1c1b19 (Regular)
 * - "& who enjoys playing cricket.": #1c1b19 (Regular)
 */
export default function Hero() {
  return (
    <main className="flex items-center justify-center flex-1 px-6 md:px-12 xl:px-[120px] py-12 md:py-0 select-none">
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="font-sans text-[27px] sm:text-[34px] md:text-[40px] lg:text-[46px] font-normal text-[#1c1b19] text-center max-w-[786px] leading-[1.28] tracking-[-0.06em]"
      >
        <span>Hey, I’m </span>
        <span className="group/yash inline-inline cursor-pointer">
          <span className="text-[#a2a2a2] transition-colors duration-300 group-hover/yash:text-[#d6211e]">
            Yash
          </span>
          <span className="inline-block align-middle mx-[4px] sm:mx-[6px] relative -top-[2px] md:-top-[3px] transition-transform duration-300 group-hover/yash:rotate-12 group-hover/yash:scale-105 active:scale-95">
            <span className="block w-[24px] h-[24px] sm:w-[30px] sm:h-[30px] lg:w-[36px] lg:h-[36px]">
              <CricketBall
                className="w-full h-full"
                variant="logo"
              />
            </span>
          </span>
        </span>
        <span> a</span>
        <br />
        <span className="text-[#d6211e]">product manager</span>
        <span> with roots in design</span>
        <br />
        <span>&amp; who enjoys playing cricket.</span>
      </motion.h1>
    </main>
  );
}
