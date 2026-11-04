"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { TasteRowItem } from "@/data/tasteData";
import {
  BookIcon,
  PlayCircleIcon,
  ChargerIcon,
  ChevronForwardIcon,
} from "./TasteIcons";

interface TasteCardProps {
  item: TasteRowItem;
  instanceId: string;
  isHovered: boolean;
  isDimmed: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}

export default function TasteCard({
  item,
  isHovered,
  isDimmed,
  onHoverStart,
  onHoverEnd,
}: TasteCardProps) {
  // If item is a placeholder card
  if (item.type === "placeholder") {
    return (
      <div
        onMouseEnter={onHoverStart}
        onMouseLeave={onHoverEnd}
        style={{ backgroundColor: item.bgColor }}
        className={`relative w-[480px] h-[200px] rounded-[20px] p-4 flex-shrink-0 select-none cursor-pointer overflow-hidden transition-all duration-300 ${
          isHovered
            ? "opacity-100 scale-[1.02] shadow-2xl z-20"
            : isDimmed
            ? "opacity-30 grayscale-[40%] scale-[0.98]"
            : "opacity-100 hover:shadow-xl"
        }`}
      >
        <AnimatePresence mode="wait" initial={false}>
          {!isHovered ? (
            /* ================= PLACEHOLDER DEFAULT ================= */
            <motion.div
              key="placeholder-default"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full flex justify-between items-stretch"
            >
              <div className="flex-1 flex flex-col justify-between pr-3 h-full">
                <div className="flex flex-col gap-1">
                  <h3 className="font-work font-medium text-[28px] sm:text-[30px] text-white/90 leading-[1.25] tracking-[-0.02em]">
                    {item.label || "Curating"}
                  </h3>
                  <p className="font-work font-normal text-[20px] sm:text-[22px] text-white/50 leading-[1.25] tracking-[-0.02em]">
                    More in progress
                  </p>
                </div>
                <div className="w-12 h-12 rounded-[14px] bg-white/10 flex items-center justify-center text-white/70">
                  <span className="text-[22px] font-light leading-none">+</span>
                </div>
              </div>

              {/* Right Media Outline */}
              <div className="w-[168px] h-[168px] rounded-[20px] bg-white/10 border border-white/15 flex items-center justify-center flex-shrink-0">
                <span className="text-white/30 text-3xl font-light select-none">
                  +
                </span>
              </div>
            </motion.div>
          ) : (
            /* ================= PLACEHOLDER HOVER ================= */
            <motion.div
              key="placeholder-hover"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full flex flex-col justify-between"
            >
              <div className="flex items-center justify-between w-full h-[30px]">
                <span className="font-work font-normal text-[22px] text-white/80 leading-[1.25] tracking-[-0.02em]">
                  {item.label || "In the pipeline"}
                </span>
                <div className="w-6 h-6 flex items-center justify-center">
                  <ChevronForwardIcon className="w-[7px] h-[11px] text-white/80" />
                </div>
              </div>

              <div className="flex-1 flex items-center pt-2">
                <p className="font-work font-medium italic text-[22px] sm:text-[25px] text-white leading-[1.25] tracking-[-0.02em]">
                  {item.hint || "Adding more artifacts that define my bar."}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // Full Taste Card
  const renderIcon = () => {
    switch (item.icon) {
      case "book":
        return <BookIcon className="w-8 h-10 text-white" />;
      case "music":
        return <PlayCircleIcon className="w-10 h-10 text-white" />;
      case "company":
        return <ChargerIcon className="w-10 h-10 text-white" />;
      case "design":
      default:
        return <ChargerIcon className="w-10 h-10 text-white" />;
    }
  };

  const CardWrapper = item.link ? "a" : "div";
  const linkProps = item.link
    ? { href: item.link, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <CardWrapper
      {...linkProps}
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      style={{ backgroundColor: item.bgColor }}
      className={`relative w-[480px] h-[200px] rounded-[20px] p-4 flex-shrink-0 select-none cursor-pointer overflow-hidden transition-all duration-300 ${
        isHovered
          ? "opacity-100 scale-[1.02] shadow-2xl z-20"
          : isDimmed
          ? "opacity-30 grayscale-[40%] scale-[0.98]"
          : "opacity-100 hover:shadow-xl"
      }`}
    >
      <AnimatePresence mode="wait" initial={false}>
        {!isHovered ? (
          /* ================= DEFAULT STATE ================= */
          <motion.div
            key="default"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full flex justify-between items-stretch"
          >
            {/* Left Content Area */}
            <div className="flex-1 flex flex-col justify-between pr-3 h-full">
              {/* Title & Creator */}
              <div className="flex flex-col gap-1">
                <h3 className="font-work font-medium text-[30px] sm:text-[32px] text-white leading-[1.25] tracking-[-0.02em] line-clamp-1">
                  {item.title}
                </h3>
                <p className="font-work font-normal text-[22px] sm:text-[24px] text-white/90 leading-[1.25] tracking-[-0.02em] whitespace-pre-line line-clamp-2">
                  {item.creator}
                </p>
              </div>

              {/* Bottom Icon */}
              <div className="w-12 h-12 flex items-center justify-start">
                {renderIcon()}
              </div>
            </div>

            {/* Right Media Thumbnail */}
            <div className="w-[168px] h-[168px] rounded-[20px] overflow-hidden flex-shrink-0 relative bg-black/10">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="168px"
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        ) : (
          /* ================= HOVER STATE (MICRO-TAKE) ================= */
          <motion.div
            key="hover"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full flex flex-col justify-between"
          >
            {/* Top Bar: Title + Chevron */}
            <div className="flex items-center justify-between w-full h-[30px]">
              <span className="font-work font-normal text-[24px] text-white leading-[1.25] tracking-[-0.02em]">
                {item.title}
              </span>
              <div className="w-6 h-6 flex items-center justify-center">
                <ChevronForwardIcon className="w-[7px] h-[11px] text-white" />
              </div>
            </div>

            {/* Quote / Micro-take */}
            <div className="flex-1 flex items-center pt-2">
              <p className="font-work font-medium italic text-[24px] sm:text-[27px] text-white leading-[1.25] tracking-[-0.02em]">
                {item.quote}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </CardWrapper>
  );
}
