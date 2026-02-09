import Link from "next/link";
import { EmailCapture } from "@/components/EmailCapture";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products — Cheat Sheets, Guides & Courses | SpeakNerd.ai",
  description:
    "AI learning resources for normal people. From a $9 cheat sheet to a full bootcamp — everything you need to go from confused to confident.",
};

export default function ProductsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
      <div className="text-center mb-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-text">
          Go from confused to confident.
        </h1>
        <p className="mt-4 text-text-muted text-lg max-w-2xl mx-auto">
          The glossary is free. These are for people who want to accelerate.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Tier 1: Cheat Sheet */}
        <div className="bg-card border-2 border-border rounded-2xl p-8 flex flex-col">
          <div className="text-xs font-semibold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/30 px-3 py-1 rounded-full w-fit">
            Most Popular
          </div>
          <h2 className="mt-4 text-2xl font-bold text-text">
            The SpeakNerd Cheat Sheet
          </h2>
          <p className="mt-2 text-text-muted text-sm leading-relaxed flex-1">
            75 AI terms explained in plain English. One PDF, zero jargon.
            Never nod along pretending to understand again.
          </p>
          <div className="mt-6">
            <span className="text-3xl font-bold text-text">$9</span>
            <span className="text-text-muted ml-1">one-time</span>
          </div>
          <ul className="mt-6 space-y-2 text-sm text-text-muted">
            <li className="flex items-start gap-2">
              <span className="text-emerald-500 dark:text-emerald-400 mt-0.5">&#10003;</span>
              75 terms with plain English explanations
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-500 dark:text-emerald-400 mt-0.5">&#10003;</span>
              Visual category map
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-500 dark:text-emerald-400 mt-0.5">&#10003;</span>
              Printable PDF (looks great on your wall)
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-500 dark:text-emerald-400 mt-0.5">&#10003;</span>
              Instant download
            </li>
          </ul>
          <a
            href="https://speaknerdai.gumroad.com/l/mvircb"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 block w-full text-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
          >
            Get the Cheat Sheet
          </a>
        </div>

        {/* Tier 2: Kickstart Kit */}
        <div className="bg-card border-2 border-primary rounded-2xl p-8 flex flex-col relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold text-white bg-primary px-4 py-1 rounded-full">
            Best Value
          </div>
          <div className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full w-fit">
            Complete Guide
          </div>
          <h2 className="mt-4 text-2xl font-bold text-text">
            The AI Kickstart Kit
          </h2>
          <p className="mt-2 text-text-muted text-sm leading-relaxed flex-1">
            My complete &ldquo;first 30 days with AI&rdquo; action plan. The
            exact path I&apos;d follow if I started over today. Plus 20
            ready-to-use prompts.
          </p>
          <div className="mt-6">
            <span className="text-3xl font-bold text-text">$27</span>
            <span className="text-text-muted ml-1">one-time</span>
          </div>
          <ul className="mt-6 space-y-2 text-sm text-text-muted">
            <li className="flex items-start gap-2">
              <span className="text-emerald-500 dark:text-emerald-400 mt-0.5">&#10003;</span>
              Everything in the Cheat Sheet
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-500 dark:text-emerald-400 mt-0.5">&#10003;</span>
              40-60 page ebook (Steve&apos;s full journey)
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-500 dark:text-emerald-400 mt-0.5">&#10003;</span>
              30-day action plan with daily tasks
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-500 dark:text-emerald-400 mt-0.5">&#10003;</span>
              20 copy-paste prompts that actually work
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-500 dark:text-emerald-400 mt-0.5">&#10003;</span>
              Tool recommendations with honest reviews
            </li>
          </ul>
          <a
            href="#"
            className="mt-8 block w-full text-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
          >
            Get the Kickstart Kit
          </a>
        </div>

        {/* Tier 3: Bootcamp */}
        <div className="bg-card border-2 border-border rounded-2xl p-8 flex flex-col">
          <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 px-3 py-1 rounded-full w-fit">
            Coming Soon
          </div>
          <h2 className="mt-4 text-2xl font-bold text-text">
            Vibe Coding Bootcamp
          </h2>
          <p className="mt-2 text-text-muted text-sm leading-relaxed flex-1">
            Build your first real app using AI. Step by step. No coding
            experience needed. I&apos;ll walk you through exactly what I did.
          </p>
          <div className="mt-6">
            <span className="text-3xl font-bold text-text">$97</span>
            <span className="text-text-muted ml-1">one-time</span>
          </div>
          <ul className="mt-6 space-y-2 text-sm text-text-muted">
            <li className="flex items-start gap-2">
              <span className="text-emerald-500 dark:text-emerald-400 mt-0.5">&#10003;</span>
              Everything in the Kickstart Kit
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-500 dark:text-emerald-400 mt-0.5">&#10003;</span>
              Full video course (build a real app)
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-500 dark:text-emerald-400 mt-0.5">&#10003;</span>
              Screen recordings with narration
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-500 dark:text-emerald-400 mt-0.5">&#10003;</span>
              Private community access
            </li>
            <li className="flex items-start gap-2">
              <span className="text-text-light mt-0.5">&#8987;</span>
              <span className="text-text-light">Launching soon — get on the waitlist</span>
            </li>
          </ul>
          <a
            href="#waitlist"
            className="mt-8 block w-full text-center px-6 py-3 bg-surface text-text font-semibold rounded-lg hover:bg-surface-alt transition-colors border border-border"
          >
            Join the Waitlist
          </a>
        </div>
      </div>

      {/* FAQ-ish section */}
      <div className="mt-20 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-text text-center mb-8">
          &ldquo;But I&apos;m not technical...&rdquo;
        </h2>
        <div className="space-y-6 text-text-muted text-base leading-relaxed">
          <p>
            That&apos;s literally the point. I made these for people who aren&apos;t
            technical. I wasn&apos;t technical a year ago. These products are
            written by someone who had to figure it all out from scratch — not
            by someone who&apos;s been coding since they were 12.
          </p>
          <p>
            If you can read a recipe, you can follow these guides. If you can
            describe what you want, you can build with AI. I promise.
          </p>
        </div>
      </div>

      {/* Email capture */}
      <div id="waitlist" className="mt-16 bg-surface-alt rounded-xl p-8">
        <EmailCapture
          heading="Not ready to buy? No problem."
          subheading="Join the free newsletter and learn one AI term a week. When you're ready, the products will be here."
          buttonText="Join free"
        />
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/glossary"
          className="text-sm text-text-muted hover:text-primary transition-colors"
        >
          &larr; Or just browse the free glossary
        </Link>
      </div>
    </div>
  );
}
