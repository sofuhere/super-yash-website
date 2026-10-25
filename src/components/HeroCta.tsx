"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EMAIL_ADDRESS = "choudharyyash252@gmail.com";

/**
 * Hero CTA buttons matching Figma Screen 44:422 ("With Buttons")
 * and node 44:532 ("Button States"):
 *
 * Frame 23 (258 x 56 px):
 * 1. "See my work" button (Frame 18, 182 x 56 px):
 *    - Default: border #d9d9d9, bg transparent
 *    - Hover: border #1c1b19, bg #efece5
 *    - Radius: 12px
 *    - Icon: stat_minus_2 (double chevron down)
 *    - Text: "See my work", Inter Regular 20px, #1c1b19, tracking -4%
 *
 * 2. Mail icon button (Frame 19, 64 x 56 px):
 *    - Default: border #d9d9d9, bg transparent
 *    - Hover: border #1c1b19, bg #efece5
 *    - Radius: 12px
 *    - Icon: mail (Material Symbols)
 *    - On click: opens mailto & copies email with "Copied!" feedback
 */
export default function HeroCta() {
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(EMAIL_ADDRESS).catch(() => {});
    }
    setCopied(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setCopied(false);
    }, 2200);
  };

  const handleWorkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = document.getElementById("work");
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="flex items-center justify-center gap-[12px] w-full max-w-[258px] mt-6 sm:mt-8 select-none"
    >
      {/* 1. "See my work" Button */}
      <a
        href="#work"
        onClick={handleWorkClick}
        className="group h-[56px] w-[182px] shrink-0 rounded-[12px] border border-[#d9d9d9] bg-transparent flex items-center justify-center gap-[10px] px-4 transition-all duration-200 hover:border-[#1c1b19] hover:bg-[#efece5] active:scale-[0.98]"
        aria-label="See my work"
      >
        {/* Double downward chevron (stat_minus_2) */}
        <svg
          viewBox="0 -960 960 960"
          className="w-[20px] h-[20px] shrink-0 fill-[#1c1b1f] transition-transform duration-200 group-hover:translate-y-[2px]"
          aria-hidden="true"
        >
          <path d="M480-200 240-440l56-56 184 183 184-183 56 56-240 240Zm0-240L240-680l56-56 184 183 184-183 56 56-240 240Z" />
        </svg>

        <span className="font-sans text-[20px] font-normal text-[#1c1b19] leading-[1.25] tracking-[-0.04em] whitespace-nowrap">
          See my work
        </span>
      </a>

      {/* 2. Mail Icon Button */}
      <div className="relative">
        <a
          href={`mailto:${EMAIL_ADDRESS}`}
          onClick={handleEmailClick}
          aria-label="Send email to Yash Choudhary"
          title="Send email or click to copy"
          className="group h-[56px] w-[64px] shrink-0 rounded-[12px] border border-[#d9d9d9] bg-transparent flex items-center justify-center transition-all duration-200 hover:border-[#1c1b19] hover:bg-[#efece5] active:scale-[0.98]"
        >
          {copied ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#1c1b19"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-[20px] h-[20px] shrink-0 text-[#1c1b19]"
              aria-hidden="true"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          ) : (
            <svg
              viewBox="0 -960 960 960"
              className="w-[23px] h-[19px] shrink-0 fill-[#1c1b19] transition-transform duration-200 group-hover:scale-105"
              aria-hidden="true"
            >
              <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
            </svg>
          )}
        </a>

        {/* Floating "Copied!" Tooltip */}
        <AnimatePresence>
          {copied && (
            <motion.div
              initial={{ opacity: 0, y: 4, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 2, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="absolute -top-9 left-1/2 -translate-x-1/2 bg-[#1c1b19] text-[#faf7ef] font-mono text-[11px] font-light py-1 px-2 rounded-[6px] shadow-md whitespace-nowrap pointer-events-none tracking-[-0.02em]"
            >
              Copied!
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
