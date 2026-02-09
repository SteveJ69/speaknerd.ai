"use client";

import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-card/90 backdrop-blur-sm border-b border-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/logo.webp"
            alt="SpeakNerd.ai"
            className="h-12"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/glossary"
            className="text-sm font-medium text-text-muted hover:text-primary transition-colors"
          >
            Glossary
          </Link>
          <Link
            href="/story"
            className="text-sm font-medium text-text-muted hover:text-primary transition-colors"
          >
            My Story
          </Link>
          <Link
            href="/products"
            className="text-sm font-medium text-text-muted hover:text-primary transition-colors"
          >
            Products
          </Link>
          <ThemeToggle />
          <a
            href="#signup"
            className="text-sm font-semibold bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors"
          >
            Get the Newsletter
          </a>
        </div>

        {/* Mobile hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            className="p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-text"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-border bg-card px-4 py-4 space-y-3">
          <Link
            href="/glossary"
            className="block text-sm font-medium text-text-muted hover:text-primary"
            onClick={() => setMenuOpen(false)}
          >
            Glossary
          </Link>
          <Link
            href="/story"
            className="block text-sm font-medium text-text-muted hover:text-primary"
            onClick={() => setMenuOpen(false)}
          >
            My Story
          </Link>
          <Link
            href="/products"
            className="block text-sm font-medium text-text-muted hover:text-primary"
            onClick={() => setMenuOpen(false)}
          >
            Products
          </Link>
          <a
            href="#signup"
            className="block text-sm font-semibold bg-primary text-white px-4 py-2 rounded-lg text-center hover:bg-primary-dark"
            onClick={() => setMenuOpen(false)}
          >
            Get the Newsletter
          </a>
        </div>
      )}
    </nav>
  );
}
