"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  TasteCategory,
  row1Items,
  row2Items,
  row3Items,
} from "@/data/tasteData";
import CategoryFilter from "./CategoryFilter";
import TasteMarqueeRow from "./TasteMarqueeRow";

export default function TasteSection() {
  const [selectedCategory, setSelectedCategory] = useState<TasteCategory>("all");
  const [hoveredInstanceId, setHoveredInstanceId] = useState<string | null>(null);

  const isPaused = hoveredInstanceId !== null;

  return (
    <section
      id="taste"
      className="w-full max-w-[1512px] mx-auto pt-8 pb-24 md:pb-32 scroll-mt-[84px] select-none"
    >
      {/* ================= EXACT FIGMA 1192px CONTAINER ================= */}
      <div className="w-full max-w-[1192px] mx-auto px-6 md:px-12 xl:px-0 flex flex-col">
        {/* Section Header (Figma Frame 55, 1192px wide) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 md:mb-10"
        >
          {/* Title & Subtitle */}
          <div className="flex flex-col">
            <h2 className="font-sans text-[28px] sm:text-[32px] md:text-[36px] font-medium text-[#1c1b19] tracking-[-0.06em] leading-[1.28]">
              Understand my taste?
            </h2>
            <p className="font-sans text-[15px] sm:text-[16px] font-normal text-[#595752] tracking-[-0.04em] leading-[1.45] mt-2.5 max-w-[550px]">
              Anything and everything that inspires me to build better things.
              <br className="hidden sm:inline" />
              It can help you evaluate if we’d resonate well and find it easy to
              work together :)
            </p>
          </div>

          {/* Category Filter */}
          <div className="self-start md:self-end">
            <CategoryFilter
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
          </div>
        </motion.div>

        {/* Marquee Rows Frame (Figma Frame 54, 1192px wide, straight architectural edges - no gradient) */}
        <div className="relative w-full overflow-hidden flex flex-col gap-[20px]">

          {/* Row 1: Drift Left */}
          <TasteMarqueeRow
            rowId="r1"
            items={row1Items}
            direction="left"
            duration={70}
            selectedCategory={selectedCategory}
            isPaused={isPaused}
            hoveredInstanceId={hoveredInstanceId}
            onHoverCard={setHoveredInstanceId}
          />

          {/* Row 2: Drift Right */}
          <TasteMarqueeRow
            rowId="r2"
            items={row2Items}
            direction="right"
            duration={78}
            selectedCategory={selectedCategory}
            isPaused={isPaused}
            hoveredInstanceId={hoveredInstanceId}
            onHoverCard={setHoveredInstanceId}
          />

          {/* Row 3: Drift Left */}
          <TasteMarqueeRow
            rowId="r3"
            items={row3Items}
            direction="left"
            duration={65}
            selectedCategory={selectedCategory}
            isPaused={isPaused}
            hoveredInstanceId={hoveredInstanceId}
            onHoverCard={setHoveredInstanceId}
          />
        </div>
      </div>
    </section>
  );
}
