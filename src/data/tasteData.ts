export type TasteCategory = "all" | "music" | "books" | "companies" | "craft";

export interface TasteCardItem {
  id: string;
  type: "card";
  category: "music" | "books" | "companies" | "craft";
  title: string;
  creator: string;
  bgColor: string;
  image: string;
  quote: string;
  hoverTitle?: string;
  link?: string;
  icon: "music" | "book" | "charger" | "currency" | "apparel";
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

// Row 1: Drifts Left
export const row1Items: TasteCardItem[] = [
  {
    id: "siddhartha",
    type: "card",
    category: "books",
    title: "Siddhartha",
    creator: "Hermann Hesse",
    bgColor: "#5c5c58", // Muted Stone / Slate
    image: "/taste/siddhartha.png",
    quote: "It helped me feel something that can’t really be put in words very well easily.",
    icon: "book",
  },
  {
    id: "na-kaho",
    type: "card",
    category: "music",
    title: "Na Kaho",
    creator: "Faraz Nayyar",
    bgColor: "#d6211e", // Cricket Crimson
    image: "/taste/na-kaho.png",
    quote: "Acoustic vulnerability and vocal restraint that lingers long after.",
    icon: "music",
  },
  {
    id: "ather-energy",
    type: "card",
    category: "companies",
    title: "Ather Energy",
    creator: "Tarun Mehta & \nSwapnil Jain",
    hoverTitle: "What I like about Ather?",
    bgColor: "#102a83", // Royal Cobalt
    image: "/taste/ather.png",
    quote: "The way they treat hardware and software as a single, beautifully crafted medium is lovely.",
    icon: "charger",
  },
];

// Row 2: Drifts Right
export const row2Items: TasteCardItem[] = [
  {
    id: "jogi",
    type: "card",
    category: "music",
    title: "Jogi",
    creator: "Swastik The Band",
    bgColor: "#581c5c", // Royal Purple / Plum
    image: "/taste/jogi.png",
    quote: "A haunting flute melody and Sufi yearning that captures the soul.",
    icon: "music",
  },
  {
    id: "duniya",
    type: "card",
    category: "music",
    title: "Duniya kisi ke pyaar me",
    creator: "Mehdi Hassan",
    bgColor: "#8c4d28", // Warm Clay / Rust
    image: "/taste/duniya.png",
    quote: "Timeless subcontinental melody where every single note has intention.",
    icon: "music",
  },
  {
    id: "jaan-wandiyo",
    type: "card",
    category: "music",
    title: "Jaan Wandiyo",
    creator: "Rauhan Malik",
    bgColor: "#242320", // Carbon / Charcoal
    image: "/taste/jaan-wandiyo.png",
    quote: "Raw cultural storytelling with intimate, honest acoustic pacing.",
    icon: "music",
  },
];

// Row 3: Drifts Left
export const row3Items: TasteCardItem[] = [
  {
    id: "zerodha",
    type: "card",
    category: "companies",
    title: "Zerodha",
    creator: "Nitin & Nikhil Kamath",
    hoverTitle: "What I like about Zerodha?",
    bgColor: "#11318d", // Deep Navy
    image: "/taste/zerodha.png",
    quote: "Extreme honesty as a design principle, always choosing what is right over what is convenient.",
    icon: "currency",
  },
  {
    id: "sprint",
    type: "card",
    category: "books",
    title: "Sprint",
    creator: "Jake Knapp",
    hoverTitle: "Sprint",
    bgColor: "#4db9e8", // Cyan Blue
    image: "/taste/sprint.png",
    quote: "Amongst my first product reads, and the book that drew me into the craft of building.",
    icon: "book",
  },
  {
    id: "march",
    type: "card",
    category: "craft",
    title: "March",
    creator: "Sukh Dugal",
    hoverTitle: "What I like about March?",
    bgColor: "#0f2275", // Deep Indigo
    image: "/taste/march.png",
    quote: "They make the most ordinary basics extraordinary through attention-to-detail and narrative.",
    icon: "apparel",
  },
];
