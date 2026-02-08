import { EmailCapture } from "@/components/EmailCapture";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Story — How a 50-year-old robotics guy learned AI | SpeakNerd.ai",
  description:
    "I'm Steve. I'm in my 50s. A year ago I didn't know what an LLM was. Now I build apps with AI. Here's how.",
};

export default function StoryPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
      <header className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-text">
          A year ago, I didn&apos;t know any of this.
        </h1>
        <p className="mt-4 text-text-muted text-lg">
          Now I build apps with AI. Here&apos;s the whole story.
        </p>
      </header>

      <div className="space-y-6 text-text-muted text-base sm:text-lg leading-relaxed">
        <p>
          I&apos;m Steve. I&apos;m in my 50s. For decades, I&apos;ve worked in
          industrial robotics — programming real, physical robots that weld car
          parts and move things on assembly lines. Not exactly Silicon Valley.
        </p>

        <p>
          In the spring of 2025, I watched a YouTube video about building apps
          with AI. I don&apos;t remember who recommended it. I just remember
          thinking: <em>&ldquo;Wait... I could build software? Me?&rdquo;</em>
        </p>

        <p>
          I&apos;d never written a line of code in my life. I didn&apos;t know
          what JavaScript was. I thought &ldquo;frontend&rdquo; and
          &ldquo;backend&rdquo; were parts of a house. When someone mentioned an
          API, I nodded like I understood. I did not understand.
        </p>

        <h2 className="text-2xl font-bold text-text mt-12 mb-4">
          The rabbit hole
        </h2>

        <p>
          But I went down the rabbit hole anyway. I started using ChatGPT. Then
          Claude. Then I discovered tools like Windsurf and Cursor that could
          actually write code for me — I just had to describe what I wanted.
        </p>

        <p>
          The first month was rough. I broke things constantly. I didn&apos;t
          know what error messages meant. I spent entire evenings debugging
          something that turned out to be a missing comma. But I kept going,
          because every time something actually worked, it felt like magic.
        </p>

        <p>
          Within six months, I&apos;d built a full web application — a recipe
          platform with user accounts, image uploads, a smart grocery list, and
          an AI-powered recipe scanner. From scratch. By myself. Using AI tools
          to write most of the code.
        </p>

        <h2 className="text-2xl font-bold text-text mt-12 mb-4">
          The moment it clicked
        </h2>

        <p>
          The breakthrough wasn&apos;t technical. It was realizing that I
          didn&apos;t need to understand <em>everything</em> — I just needed to
          understand enough to ask the right questions. Once I learned the
          language, the tools did the heavy lifting.
        </p>

        <p>
          That&apos;s what this site is about.{" "}
          <span className="text-text font-medium">
            You don&apos;t need to become a nerd. You just need to learn to
            speak nerd.
          </span>
        </p>

        <p>
          I built SpeakNerd.ai because I wish it existed a year ago. When I was
          drowning in jargon, feeling like everyone else got the memo I missed —
          I needed someone to just explain things in plain English. No academic
          papers. No 45-minute YouTube videos. Just: &ldquo;Here&apos;s what
          this word means, here&apos;s why you should care, and here&apos;s a
          one-liner you can use at dinner parties.&rdquo;
        </p>

        <h2 className="text-2xl font-bold text-text mt-12 mb-4">
          What I believe
        </h2>

        <ul className="space-y-3 list-disc list-inside">
          <li>
            You don&apos;t need a CS degree to build with AI. You need curiosity
            and stubbornness.
          </li>
          <li>
            Age is an advantage, not a limitation. Life experience makes you a
            better problem-solver.
          </li>
          <li>
            The best way to learn is by doing, not by watching someone else do
            it.
          </li>
          <li>
            If I can figure this out at 50+, anyone can. I&apos;m living proof.
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-text mt-12 mb-4">
          Want to follow along?
        </h2>

        <p>
          I&apos;m building in public. Follow me on{" "}
          <a
            href="https://x.com/SteveBuilds_AI"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-semibold hover:text-primary-dark transition-colors"
          >
            X (@SteveBuilds_AI)
          </a>{" "}
          to see what I&apos;m working on, the mistakes I make, and the things I
          learn along the way. No polished highlight reel — just real
          building.
        </p>
      </div>

      {/* CTA */}
      <div className="mt-16 bg-surface-alt rounded-xl p-8">
        <EmailCapture
          heading="Get one AI term explained every week."
          subheading="Plain English. 60 seconds to read. Free forever."
          buttonText="I'm in"
        />
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/glossary"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
        >
          Start learning &rarr;
        </Link>
      </div>
    </article>
  );
}
