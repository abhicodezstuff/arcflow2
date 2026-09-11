import type { Metadata } from "next";

import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import GhostFibers from "@/components/reactbits/GhostFibers";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arcflow — Automate the work between your tools.",
  description:
    "Automate workflows between the tools your team already uses.",
  openGraph: {
    title: "Arcflow — Automate the work between your tools.",
    description:
      "Automate workflows between the tools your team already uses.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Arcflow — Automate the work between your tools.",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="relative min-h-full bg-[#09090B]">
        <div className="pointer-events-none fixed inset-0 z-0 opacity-35">
          <GhostFibers
            lineColor="#5B7CFF"
            glowColor="#8EA2FF"
            speed={0.12}
            scale={2.4}
            rotationSpeed={0.08}
            layers={3}
            glowIntensity={0.8}
            brightness={1.2}
            blueBoost={1.1}
            vignette={0.95}
            grain={0.02}
            fps={30}
          />
        </div>

        <div className="relative z-10 min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}