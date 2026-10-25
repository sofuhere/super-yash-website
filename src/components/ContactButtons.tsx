"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";

const EMAIL_ADDRESS = "choudharyyash252@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/choudharyyash";

/**
 * Contact buttons matching Figma node 27:253 (Frame 20):
 * - LinkedIn icon button (Frame 19): 56x56 square, border #d9d9d9, radius 12px
 * - Email button (Frame 18): 387x56 rounded rectangle, border #d9d9d9, radius 12px
 *   - Clicking opens mailto:choudharyyash252@gmail.com AND copies email to clipboard
 *   - Shows temporary "Copied to clipboard!" feedback state
 */
export default function ContactButtons() {
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
    }, 2400);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="flex items-center justify-center gap-[10px] sm:gap-[12px] w-full max-w-[455px] mt-8 md:mt-10 px-2 sm:px-0"
    >
      {/* LinkedIn Button */}
      <a
        href={LINKEDIN_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn profile"
        className="w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] shrink-0 rounded-[12px] border border-[#d9d9d9] flex items-center justify-center bg-transparent transition-all duration-200 hover:border-[#1c1b19] hover:bg-[#f3efe6]/50 active:scale-95"
      >
        <svg
          viewBox="0 0 24 24"
          fill="#1c1b19"
          className="w-[22px] h-[22px] sm:w-[26px] sm:h-[26px]"
          aria-hidden="true"
        >
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      </a>

      {/* Email Button */}
      <a
        href={`mailto:${EMAIL_ADDRESS}`}
        onClick={handleEmailClick}
        aria-label="Email Yash Choudhary"
        className="h-[48px] sm:h-[56px] flex-1 sm:flex-initial sm:w-[387px] rounded-[12px] border border-[#d9d9d9] flex items-center justify-center px-3 sm:px-4 md:px-5 gap-[8px] sm:gap-[12px] bg-transparent transition-all duration-200 hover:border-[#1c1b19] hover:bg-[#f3efe6]/50 active:scale-[0.99] select-none"
      >
        {copied ? (
          <>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#1c1b19"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-[18px] h-[18px] sm:w-[22px] sm:h-[22px] shrink-0"
              aria-hidden="true"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span className="font-sans text-[13px] min-[380px]:text-[15px] sm:text-[18px] md:text-[23px] font-normal text-[#1c1b19] tracking-[-0.04em] whitespace-nowrap">
              Copied to clipboard!
            </span>
          </>
        ) : (
          <>
            <svg
              viewBox="0 0 26 20"
              fill="none"
              className="w-[18px] h-[14px] sm:w-[24px] sm:h-[18px] md:w-[26px] md:h-[20px] shrink-0"
              aria-hidden="true"
            >
              <rect
                x="1"
                y="1"
                width="24"
                height="18"
                rx="3"
                stroke="#1c1b19"
                strokeWidth="1.8"
              />
              <path
                d="M2 3.5L13 11.5L24 3.5"
                stroke="#1c1b19"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="font-sans text-[12.5px] min-[380px]:text-[14.5px] sm:text-[18px] md:text-[23px] font-normal text-[#1c1b19] tracking-[-0.04em] whitespace-nowrap">
              {EMAIL_ADDRESS}
            </span>
          </>
        )}
      </a>
    </motion.div>
  );
}
