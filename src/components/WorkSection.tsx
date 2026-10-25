"use client";

import { motion } from "framer-motion";

interface Project {
  id: string;
  title: string;
  tags: string[];
  description: string;
}

const projects: Project[] = [
  {
    id: "project-1",
    title: "Enabling settlement-based pricing",
    tags: ["Tag 1", "Tag 2", "Tag 3"],
    description:
      "A few projects I’ve led, shaped and shipped. A few projects I’ve led, shaped and shipped. A few projects I’ve led, shaped and shipped.",
  },
  {
    id: "project-2",
    title: "Enabling settlement-based pricing",
    tags: ["Tag 1", "Tag 2", "Tag 3"],
    description:
      "A few projects I’ve led, shaped and shipped. A few projects I’ve led, shaped and shipped. A few projects I’ve led, shaped and shipped.",
  },
  {
    id: "project-3",
    title: "Enabling settlement-based pricing",
    tags: ["Tag 1", "Tag 2", "Tag 3"],
    description:
      "A few projects I’ve led, shaped and shipped. A few projects I’ve led, shaped and shipped. A few projects I’ve led, shaped and shipped.",
  },
  {
    id: "project-4",
    title: "Enabling settlement-based pricing",
    tags: ["Tag 1", "Tag 2", "Tag 3"],
    description:
      "A few projects I’ve led, shaped and shipped. A few projects I’ve led, shaped and shipped. A few projects I’ve led, shaped and shipped.",
  },
];

/**
 * Work Section matching Figma Screen 68:609:
 *
 * Section Frame (Frame 40, 1192px wide, centered on 1512px canvas with 160px margins):
 * - Heading: "Work highlights", Inter Medium 36px, #1c1b19, line-height 128%, tracking -6%
 * - Subtitle: "A few projects I’ve led, shaped and shipped.", Inter Regular 16px, #595752, tracking -4%
 * - Gap to grid: 28px
 * - Grid: 2 columns, 32px horizontal gap, 32px vertical gap
 * - Cards:
 *   - Thumbnail: 580x308 px (aspect 580/308), rounded 16px, fill #d9d9d9
 *   - Gap to info: 12px
 *   - Title: Inter Medium 18px, #1c1b19, tracking -4%
 *   - Tags: rounded 8px, h-22px, bg #bdbdbd, text #f2f2f2, Inter 14px, tracking -4%
 *   - Description: Inter Regular 16px, #595752, tracking -4%
 */
export default function WorkSection() {
  return (
    <section
      id="work"
      className="w-full max-w-[1512px] mx-auto px-6 md:px-12 xl:px-[160px] pt-12 md:pt-20 pb-28 md:pb-36 scroll-mt-8"
    >
      <div className="max-w-[1192px] mx-auto flex flex-col">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-[8px] mb-[28px]"
        >
          <h2 className="font-sans text-[28px] sm:text-[32px] md:text-[36px] font-medium text-[#1c1b19] leading-[1.28] tracking-[-0.06em]">
            Work highlights
          </h2>
          <p className="font-sans text-[15px] md:text-[16px] font-normal text-[#595752] leading-[1.25] tracking-[-0.04em]">
            A few projects I’ve led, shaped and shipped.
          </p>
        </motion.div>

        {/* 2-Column Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[32px]">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col gap-[12px] group cursor-pointer select-none"
            >
              {/* Media Card (580 x 308 px) */}
              <div className="w-full aspect-[580/308] rounded-[16px] bg-[#d9d9d9] overflow-hidden transition-transform duration-300 group-hover:scale-[1.01] relative shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
                {/* Content inside cards will go here */}
              </div>

              {/* Card Meta & Description */}
              <div className="flex flex-col gap-[8px]">
                {/* Title + Tags Row */}
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <h3 className="font-sans text-[17px] md:text-[18px] font-medium text-[#1c1b19] leading-[1.25] tracking-[-0.04em] transition-colors duration-200 group-hover:text-[#d6211e]">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-[6px] shrink-0">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="inline-flex items-center justify-center px-2 py-[2px] h-[22px] rounded-[8px] bg-[#bdbdbd] font-sans text-[13px] md:text-[14px] font-normal text-[#f2f2f2] leading-[1.25] tracking-[-0.04em]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <p className="font-sans text-[15px] md:text-[16px] font-normal text-[#595752] leading-[1.25] tracking-[-0.04em]">
                  {project.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
