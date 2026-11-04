"use client";

import React from "react";
import { TasteRowItem, TasteCategory } from "@/data/tasteData";
import TasteCard from "./TasteCard";

interface TasteMarqueeRowProps {
  items: TasteRowItem[];
  rowId: string;
  direction: "left" | "right";
  duration?: number; // seconds
  selectedCategory?: TasteCategory;
  isPaused: boolean;
  hoveredInstanceId: string | null;
  onHoverCard: (instanceId: string | null) => void;
}

export default function TasteMarqueeRow({
  items,
  rowId,
  direction,
  duration = 50,
  selectedCategory = "all",
  isPaused,
  hoveredInstanceId,
  onHoverCard,
}: TasteMarqueeRowProps) {
  // 3 items x 4 repetitions = 12 cards (6000px).
  // Half is exactly 6 cards (3000px). Moving -50% creates a mathematically flawless loop.
  const duplicatedItems = [...items, ...items, ...items, ...items];

  const trackClass =
    direction === "left"
      ? "taste-marquee-track-left"
      : "taste-marquee-track-right";

  return (
    <div className="w-full overflow-hidden py-1 select-none cursor-default">
      <style>{`
        @keyframes marqueeDriftLeft {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }

        @keyframes marqueeDriftRight {
          0% {
            transform: translate3d(-50%, 0, 0);
          }
          100% {
            transform: translate3d(0, 0, 0);
          }
        }

        .taste-marquee-track-left {
          display: flex;
          width: max-content;
          will-change: transform;
          animation: marqueeDriftLeft var(--marquee-speed, 50s) linear infinite;
        }

        .taste-marquee-track-right {
          display: flex;
          width: max-content;
          will-change: transform;
          animation: marqueeDriftRight var(--marquee-speed, 50s) linear infinite;
        }
      `}</style>

      <div
        className={trackClass}
        style={
          {
            "--marquee-speed": `${duration}s`,
            animationPlayState: isPaused ? "paused" : "running",
          } as React.CSSProperties
        }
      >
        {duplicatedItems.map((item, idx) => {
          const instanceId = `${rowId}-${item.id}-${idx}`;
          const isThisCardHovered = hoveredInstanceId === instanceId;
          const isDimmed =
            // Either dimmed because of category filter:
            (selectedCategory !== "all" &&
              item.category !== undefined &&
              item.category !== selectedCategory) ||
            // OR dimmed because another card is currently being hovered:
            (hoveredInstanceId !== null && !isThisCardHovered);

          return (
            <div
              key={instanceId}
              className="mr-[20px] flex-shrink-0"
            >
              <TasteCard
                item={item}
                instanceId={instanceId}
                isHovered={isThisCardHovered}
                isDimmed={isDimmed}
                onHoverStart={() => onHoverCard?.(instanceId)}
                onHoverEnd={() => onHoverCard?.(null)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
