import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "SpeakNerd.ai — Learn to speak nerd (without becoming one)",
  description:
    "AI explained in plain English. No jargon walls. No PhD required. Just a regular guy who figured it out and wants to help you do the same.",
  keywords: [
    "AI explained simply",
    "what is AI",
    "AI for beginners",
    "vibe coding",
    "learn AI",
    "AI glossary",
    "artificial intelligence basics",
  ],
  openGraph: {
    title: "SpeakNerd.ai — Learn to speak nerd (without becoming one)",
    description:
      "AI explained in plain English. No jargon walls. No PhD required.",
    url: "https://speaknerd.ai",
    siteName: "SpeakNerd.ai",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SpeakNerd.ai — Learn to speak nerd (without becoming one)",
    description:
      "AI explained in plain English. No jargon walls. No PhD required.",
    creator: "@SteveBuilds_AI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
