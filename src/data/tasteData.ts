export type TasteCategory = "all" | "music" | "books" | "companies" | "design";

export interface TasteCardItem {
  id: string;
  type: "card";
  category: "music" | "books" | "companies" | "design";
  title: string;
  creator: string;
  bgColor: string;
  image: string;
  quote: string;
  link?: string;
  icon: "music" | "book" | "company" | "design";
}

export interface TastePlaceholderItem {
  id: string;
  type: "placeholder";
  bgColor: string;
  label?: string;
  hint?: string;
  category?: TasteCategory;
}

export type TasteRowItem = TasteCardItem | TastePlaceholderItem;

export const CATEGORIES: { label: string; value: TasteCategory }[] = [
  { label: "All Categories", value: "all" },
  { label: "Music", value: "music" },
  { label: "Books", value: "books" },
  { label: "Companies", value: "companies" },
  { label: "Design & Craft", value: "design" },
];

// Row 1: Drifts Left (6 cards x 480px = 2880px + gaps)
export const row1Items: TasteRowItem[] = [
  {
    id: "siddhartha",
    type: "card",
    category: "books",
    title: "Siddhartha",
    creator: "Hermann Hesse",
    bgColor: "#435235", // Olive / Forest
    image: "/taste/siddhartha.png",
    quote: "It helped me feel something that can’t really be put in words very well easily.",
    icon: "book",
  },
  {
    id: "r1-p1",
    type: "placeholder",
    bgColor: "#9e3c2b", // Terracotta / Brick
    label: "Physical Craft",
    hint: "Curating objects that age with grace...",
    category: "design",
  },
  {
    id: "teenage-engineering",
    type: "card",
    category: "design",
    title: "Teenage Eng.",
    creator: "Jesper Kouthoofd",
    bgColor: "#63605a", // Muted Stone
    image: "/taste/ather.png",
    quote: "Playful analog tactility refusing to surrender to flat glass rectangles.",
    icon: "design",
  },
  {
    id: "r1-p2",
    type: "placeholder",
    bgColor: "#164752", // Deep Petrol Teal
    label: "Acoustic Pacing",
    hint: "Heavy rotation tracks & soundscapes...",
    category: "music",
  },
  {
    id: "r1-p3",
    type: "placeholder",
    bgColor: "#242320", // Dark Charcoal
    label: "Typography & Layout",
    hint: "Details you feel before you read...",
    category: "design",
  },
  {
    id: "r1-p4",
    type: "placeholder",
    bgColor: "#c25e00", // Burnt Ochre
    label: "Foundational Reads",
    hint: "Books that rewires how I look at systems...",
    category: "books",
  },
];

// Row 2: Drifts Right (6 cards x 480px)
export const row2Items: TasteRowItem[] = [
  {
    id: "r2-p1",
    type: "placeholder",
    bgColor: "#1e2d4f", // Japanese Indigo
    label: "Software Craft",
    hint: "Tools built with religious precision...",
    category: "companies",
  },
  {
    id: "na-kaho",
    type: "card",
    category: "music",
    title: "Na Kaho",
    creator: "Faraz Nayyar",
    bgColor: "#d6211e", // Cricket Crimson
    image: "/taste/na-kaho.png",
    quote: "It helped me feel something that can’t really be put in words very well easily.",
    icon: "music",
  },
  {
    id: "r2-p2",
    type: "placeholder",
    bgColor: "#4a4742", // Warm Flint
    label: "Cricket Aesthetics",
    hint: "The patience and geometry of test cricket...",
    category: "design",
  },
  {
    id: "linear",
    type: "card",
    category: "companies",
    title: "Linear",
    creator: "Karri Saarinen",
    bgColor: "#242320", // Charcoal Carbon
    image: "/taste/ather.png",
    quote: "Treating latency as an emotional bug and keyboard rhythm as sacred.",
    icon: "company",
  },
  {
    id: "r2-p3",
    type: "placeholder",
    bgColor: "#1e4d2b", // Deep Racing Green
    label: "Industrial Heritage",
    hint: "Dieter Rams, Braun & timeless industrial design...",
    category: "design",
  },
  {
    id: "r2-p4",
    type: "placeholder",
    bgColor: "#581c5c", // Royal Plum
    label: "Product Conviction",
    hint: "Opinionated software over neutral utilities...",
    category: "companies",
  },
];

// Row 3: Drifts Left (6 cards x 480px)
export const row3Items: TasteRowItem[] = [
  {
    id: "r3-p1",
    type: "placeholder",
    bgColor: "#c25e00", // Burnt Ochre
    label: "Hardware & Sound",
    hint: "Physical switches, rotary dials and haptics...",
    category: "design",
  },
  {
    id: "ather-energy",
    type: "card",
    category: "companies",
    title: "Ather Energy",
    creator: "Tarun Mehta & \nSwapnil Jain",
    bgColor: "#102a83", // Royal Cobalt
    image: "/taste/ather.png",
    quote: "It helped me feel something that can’t really be put in words very well easily.",
    icon: "company",
  },
  {
    id: "r3-p2",
    type: "placeholder",
    bgColor: "#9e3c2b", // Terracotta
    label: "Mental Models",
    hint: "Architecture & Christopher Alexander patterns...",
    category: "books",
  },
  {
    id: "braun-et66",
    type: "card",
    category: "design",
    title: "Dieter Rams",
    creator: "Ten Principles",
    bgColor: "#435235", // Olive
    image: "/taste/siddhartha.png",
    quote: "Good design is as little design as possible. Less, but better.",
    icon: "design",
  },
  {
    id: "r3-p3",
    type: "placeholder",
    bgColor: "#1e2d4f", // Japanese Indigo
    label: "Sound Design",
    hint: "Tactile clicks, spring physics, and acoustic feedback...",
    category: "music",
  },
  {
    id: "r3-p4",
    type: "placeholder",
    bgColor: "#63605a", // Muted Ash Stone
    label: "Work in Progress",
    hint: "Adding more artifacts that raise the bar...",
    category: "design",
  },
];
