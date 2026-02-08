export interface Category {
  slug: string;
  name: string;
  description: string;
  color: string;
  bgColor: string;
}

export const categories: Category[] = [
  {
    slug: "ai-basics",
    name: "AI Basics",
    description: "The foundation — what AI actually is and how it works",
    color: "text-violet-700",
    bgColor: "bg-violet-50",
  },
  {
    slug: "vibe-coding",
    name: "Vibe Coding",
    description: "Building apps with AI — no CS degree required",
    color: "text-emerald-700",
    bgColor: "bg-emerald-50",
  },
  {
    slug: "building-blocks",
    name: "Building Blocks",
    description: "The tech pieces that make apps work",
    color: "text-blue-700",
    bgColor: "bg-blue-50",
  },
  {
    slug: "buzzwords",
    name: "Buzzwords",
    description: "The hype words everyone throws around",
    color: "text-rose-700",
    bgColor: "bg-rose-50",
  },
  {
    slug: "money-business",
    name: "Money & Business",
    description: "The terms you hear when tech meets revenue",
    color: "text-amber-700",
    bgColor: "bg-amber-50",
  },
  {
    slug: "tools-platforms",
    name: "Tools & Platforms",
    description: "The actual products and services people use",
    color: "text-cyan-700",
    bgColor: "bg-cyan-50",
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
