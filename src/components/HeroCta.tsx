"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EMAIL_ADDRESS = "choudharyyash252@gmail.com";

/**
 * Pixel-perfect Hero CTA buttons matching Figma Screen 44:422 ("With Buttons")
 * and Node 44:532 ("Button States"):
 *
 * Frame 23 (bounds: 258 x 56 px, placed exactly 24px below headline):
 *
 * 1. "See my work" (Frame 18, 182 x 56 px, radius: 12px):
 *    - Left padding: 18px
 *    - Icon: stat_minus_2 (exact 28x28 vector from Figma)
 *    - Gap: 4px
 *    - Text: "See my work", Inter Regular 20px, #1c1b19, line-height 125%, tracking -4%
 *    - Right padding: 18px
 *    - Default: border 1px #d9d9d9, bg transparent
 *    - Hover: border 1px #1c1b19, bg #efece5
 *
 * 2. Mail button (Frame 19, 64 x 56 px, radius: 12px):
 *    - Icon: mail (exact 28x28 vector from Figma, perfectly centered at x:18, y:14)
 *    - Default: border 1px #d9d9d9, bg transparent
 *    - Hover: border 1px #1c1b19, bg #efece5
 *    - On click: opens mailto & copies to clipboard with "Copied!" feedback
 */
export default function HeroCta() {
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleEmailClick = () => {
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
      className="flex items-center justify-center gap-[12px] w-[258px] mt-[24px] select-none"
    >
      {/* 1. "See my work" Button (182 x 56 px) */}
      <a
        href="#work"
        onClick={handleWorkClick}
        className="group h-[56px] w-[182px] shrink-0 rounded-[12px] border border-[#d9d9d9] bg-transparent flex items-center pl-[18px] pr-[18px] gap-[4px] transition-all duration-200 hover:border-[#1c1b19] hover:bg-[#efece5] active:scale-[0.98]"
        aria-label="See my work"
      >
        {/* Exact stat_minus_2 vector from Figma (28x28) */}
        <div className="w-[28px] h-[28px] shrink-0 flex items-center justify-center transition-transform duration-200 group-hover:translate-y-[2px]">
          <svg
            width="28"
            height="28"
            viewBox="18 14 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M31.9999 33.4346L36.9582 28.4862C37.1462 28.2982 37.3715 28.2025 37.634 28.1992C37.8965 28.1961 38.125 28.2918 38.3194 28.4862C38.5073 28.674 38.6012 28.9009 38.6012 29.1667C38.6012 29.4325 38.5073 29.6593 38.3194 29.8471L33.3707 34.7958C33.0013 35.1653 32.5443 35.35 31.9999 35.35C31.4554 35.35 30.9985 35.1653 30.6291 34.7958L25.6803 29.8471C25.4925 29.6593 25.3969 29.4341 25.3936 29.1716C25.3903 28.9091 25.4859 28.6806 25.6803 28.4862C25.8684 28.2982 26.0953 28.2042 26.3611 28.2042C26.6267 28.2042 26.8535 28.2982 27.0416 28.4862L31.9999 33.4346ZM31.9999 26.182L36.9582 21.2333C37.1462 21.0453 37.3715 20.9497 37.634 20.9466C37.8965 20.9433 38.125 21.0389 38.3194 21.2333C38.5073 21.4214 38.6012 21.6482 38.6012 21.9138C38.6012 22.1796 38.5073 22.4065 38.3194 22.5945L33.3707 27.543C33.0013 27.9124 32.5443 28.0971 31.9999 28.0971C31.4554 28.0971 30.9985 27.9124 30.6291 27.543L25.6803 22.5945C25.4925 22.4065 25.3969 22.1812 25.3936 21.9187C25.3903 21.6562 25.4859 21.4278 25.6803 21.2333C25.8684 21.0453 26.0953 20.9513 26.3611 20.9513C26.6267 20.9513 26.8535 21.0453 27.0416 21.2333L31.9999 26.182Z"
              fill="#1C1B1F"
            />
          </svg>
        </div>

        <span className="font-sans text-[20px] font-normal text-[#1c1b19] leading-[1.25] tracking-[-0.04em] whitespace-nowrap">
          See my work
        </span>
      </a>

      {/* 2. Mail Icon Button (64 x 56 px) */}
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
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-[20px] h-[20px] shrink-0"
              aria-hidden="true"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          ) : (
            <div className="w-[28px] h-[28px] shrink-0 flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
              {/* Exact mail vector from Figma (28x28) */}
              <svg
                width="28"
                height="28"
                viewBox="212 14 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M216.278 37.3329C215.753 37.3329 215.298 37.1401 214.912 36.7546C214.527 36.3688 214.334 35.9134 214.334 35.3884V20.6108C214.334 20.0858 214.527 19.6304 214.912 19.2446C215.298 18.8591 215.753 18.6663 216.278 18.6663H235.723C236.248 18.6663 236.703 18.8591 237.089 19.2446C237.474 19.6304 237.667 20.0858 237.667 20.6108V35.3884C237.667 35.9134 237.474 36.3688 237.089 36.7546C236.703 37.1401 236.248 37.3329 235.723 37.3329H216.278ZM235.723 22.4579L226.516 28.3983C226.431 28.4436 226.349 28.4808 226.268 28.51C226.187 28.5392 226.098 28.5538 226 28.5538C225.903 28.5538 225.814 28.5392 225.733 28.51C225.652 28.4808 225.569 28.4436 225.485 28.3983L216.278 22.4579V35.3884H235.723V22.4579ZM226 26.7941L235.645 20.6108H216.375L226 26.7941ZM216.278 22.6913V21.3531V21.377V20.6108V21.3691V21.3464V22.6913Z"
                  fill="#1C1B19"
                />
              </svg>
            </div>
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
