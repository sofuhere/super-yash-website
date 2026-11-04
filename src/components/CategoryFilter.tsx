"use client";

import React, { useState, useRef, useEffect } from "react";
import { CATEGORIES, TasteCategory } from "@/data/tasteData";
import { KeyboardArrowDownIcon } from "./TasteIcons";

interface CategoryFilterProps {
  selectedCategory: TasteCategory;
  onSelectCategory: (category: TasteCategory) => void;
}

export default function CategoryFilter({
  selectedCategory,
  onSelectCategory,
}: CategoryFilterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeCategoryLabel =
    CATEGORIES.find((c) => c.value === selectedCategory)?.label ||
    "All Categories";

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative inline-block text-left select-none">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="h-[52px] px-4 flex items-center gap-3 rounded-[12px] border border-[#d9d9d9] bg-[#faf7ef] hover:border-[#1c1b19]/40 transition-colors duration-200 cursor-pointer focus:outline-none"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <span className="font-sans text-[16px] font-normal text-[#1c1b19] tracking-[-0.04em] leading-[1.25]">
          {activeCategoryLabel}
        </span>
        <span
          className={`transition-transform duration-200 text-[#1c1b19] ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <KeyboardArrowDownIcon className="w-[13px] h-[8px]" />
        </span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-[190px] rounded-[12px] bg-[#faf7ef] border border-[#dfdbd0] shadow-xl py-1 z-50 animate-in fade-in zoom-in-95 duration-150">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.value;
            return (
              <button
                key={cat.value}
                onClick={() => {
                  onSelectCategory(cat.value);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-2.5 text-[15px] font-sans tracking-[-0.03em] flex items-center justify-between transition-colors duration-150 cursor-pointer ${
                  isSelected
                    ? "bg-[#1c1b19]/5 text-[#d6211e] font-medium"
                    : "text-[#1c1b19] hover:bg-[#1c1b19]/5"
                }`}
              >
                <span>{cat.label}</span>
                {isSelected && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d6211e]" />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
