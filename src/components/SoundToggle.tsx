"use client";

import { motion } from "framer-motion";
import { useAudio } from "@/context/AudioContext";

/**
 * Sound toggle button with audio equalizer bars.
 *
 * Consumes global AudioContext so state and audio playback
 * are 100% unified with zero duplicate audio instances.
 */
export default function SoundToggle() {
  const { isPlaying, isVisible, toggleSound } = useAudio();

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      onClick={toggleSound}
      className={`inline-flex items-baseline gap-[5px] cursor-pointer group select-none ${
        isVisible ? "pointer-events-auto" : "pointer-events-none"
      }`}
      aria-label={isPlaying ? "Mute background music" : "Play background music"}
      type="button"
    >
      {/* 3 Equalizer Bars in a rigid baseline-anchored container: zero X/Y shift */}
      <span
        className="relative inline-block w-[8px] h-[10px] select-none"
        style={{ verticalAlign: "baseline" }}
      >
        <span className="absolute bottom-0 left-0 right-0 h-[10px] flex items-end gap-[1px]">
          <motion.span
            className="w-[2px] bg-[#d9d9d9] block rounded-[0.5px]"
            animate={
              isPlaying
                ? { height: [10, 3, 9, 4, 10] }
                : { height: 10 }
            }
            transition={
              isPlaying
                ? { duration: 1.1, repeat: Infinity, ease: "easeInOut" }
                : { duration: 0.25 }
            }
            style={{ height: 10 }}
          />
          <motion.span
            className="w-[2px] bg-[#d9d9d9] block rounded-[0.5px]"
            animate={
              isPlaying
                ? { height: [6, 10, 4, 8, 6] }
                : { height: 6 }
            }
            transition={
              isPlaying
                ? { duration: 0.9, repeat: Infinity, ease: "easeInOut", delay: 0.15 }
                : { duration: 0.25 }
            }
            style={{ height: 6 }}
          />
          <motion.span
            className="w-[2px] bg-[#d9d9d9] block rounded-[0.5px]"
            animate={
              isPlaying
                ? { height: [10, 5, 2, 7, 10] }
                : { height: 10 }
            }
            transition={
              isPlaying
                ? { duration: 1.2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }
                : { duration: 0.25 }
            }
            style={{ height: 10 }}
          />
        </span>
      </span>

      {/* Label: stacked in grid to lock width and guarantee 100% fixed X-axis position */}
      <span className="inline-grid grid-cols-1 font-mono text-[13px] md:text-[14px] font-light text-black leading-[1.25] tracking-[-0.06em] text-left transition-opacity group-hover:opacity-75">
        <span
          className={`col-start-1 row-start-1 transition-opacity duration-200 ${
            isPlaying ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          SOUND ON
        </span>
        <span
          className={`col-start-1 row-start-1 transition-opacity duration-200 ${
            !isPlaying ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          SOUND OFF
        </span>
      </span>
    </motion.button>
  );
}
