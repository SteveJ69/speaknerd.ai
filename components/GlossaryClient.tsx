"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import type { Term } from "@/lib/terms";
import type { Category } from "@/lib/categories";

interface GlossaryClientProps {
  terms: Term[];
  categories: Category[];
}

export function GlossaryClient({ terms, categories }: GlossaryClientProps) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return terms.filter((term) => {
      const matchesSearch =
        !search ||
        term.title.toLowerCase().includes(search.toLowerCase()) ||
        term.subtitle.toLowerCase().includes(search.toLowerCase()) ||
        term.tldr.toLowerCase().includes(search.toLowerCase());
      const matchesCategory =
        !activeCategory || term.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [terms, search, activeCategory]);

  const categoryColors: Record<string, string> = {};
  for (const cat of categories) {
    categoryColors[cat.slug] = `${cat.bgColor} ${cat.color}`;
  }

  return (
    <>
      {/* Search */}
      <div className="mb-8">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search terms..."
          className="w-full px-4 py-3 rounded-lg border border-border bg-input text-text placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
        />
      </div>

      {/* Category filters */}
      <div className="flex flex-wrap gap-2 mb-10">
        <button
          onClick={() => setActiveCategory(null)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            !activeCategory
              ? "bg-primary text-white"
              : "bg-surface text-text-muted hover:bg-surface-alt"
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat.slug}
            onClick={() =>
              setActiveCategory(activeCategory === cat.slug ? null : cat.slug)
            }
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === cat.slug
                ? "bg-primary text-white"
                : "bg-surface text-text-muted hover:bg-surface-alt"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Terms grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-text-muted text-lg">
            No terms found. Try a different search?
          </p>
          <p className="mt-2 text-text-light text-sm">
            More terms are being added every week.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((term) => (
            <Link
              key={term.slug}
              href={`/terms/${term.slug}`}
              className="group block bg-surface rounded-xl p-6 hover:shadow-md transition-shadow border border-transparent hover:border-primary/20"
            >
              <div className="flex items-center gap-3">
                <span
                  className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                    categoryColors[term.category] ||
                    "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                  }`}
                >
                  {categories.find((c) => c.slug === term.category)?.name ||
                    term.category}
                </span>
              </div>
              <h3 className="mt-3 text-lg font-bold text-text group-hover:text-primary transition-colors">
                {term.title}
              </h3>
              <p className="mt-1 text-sm text-text-light">{term.subtitle}</p>
              <p className="mt-3 text-sm text-text-muted leading-relaxed">
                {term.tldr}
              </p>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
