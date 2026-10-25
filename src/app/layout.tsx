import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Work_Sans } from "next/font/google";
import "./globals.css";
import { AudioProvider } from "@/context/AudioContext";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
  weight: "300",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
  weight: "500",
});

export const metadata: Metadata = {
  title: "Yash Choudhary",
  description:
    "Hey, I'm Yash — a product manager with roots in design & who enjoys playing cricket.",
  icons: {
    icon: [
      { url: "/logo-ball.svg", type: "image/svg+xml" },
      { url: "/logo-ball.png", type: "image/png" },
    ],
    shortcut: "/logo-ball.svg",
    apple: "/logo-ball.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} ${workSans.variable} antialiased`}
    >
      <body className="min-h-screen bg-[#faf7ef] text-[#1c1b19] font-sans">
        <AudioProvider>{children}</AudioProvider>
      </body>
    </html>
  );
}
