import { getAllTerms } from "@/lib/terms";
import { categories } from "@/lib/categories";
import { GlossaryClient } from "@/components/GlossaryClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Glossary — Every term explained in plain English | SpeakNerd.ai",
  description:
    "50+ AI terms explained like a human wrote them. No textbook definitions. Just plain English breakdowns from someone who learned the hard way.",
};

export default function GlossaryPage() {
  const terms = getAllTerms();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-text">
          The AI Glossary
        </h1>
        <p className="mt-4 text-text-muted text-lg max-w-2xl mx-auto">
          Every term explained like you&apos;re a smart person who just
          hasn&apos;t learned this stuff yet. Because that&apos;s exactly what
          you are.
        </p>
      </div>

      <GlossaryClient terms={terms} categories={categories} />
    </div>
  );
}
