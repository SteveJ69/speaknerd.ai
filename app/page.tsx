import Link from "next/link";
import { EmailCapture } from "@/components/EmailCapture";

export default function Home() {
  return (
    <>
      {/* ─── SECTION 1: THE HOOK ─── */}
      <section className="relative overflow-hidden bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-20 pb-16 sm:pt-28 sm:pb-24 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-text leading-tight">
            Everyone&apos;s talking about AI.
            <br />
            <span className="text-primary">
              You have no idea what they&apos;re saying.
            </span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-text-muted max-w-2xl mx-auto leading-relaxed">
            That&apos;s okay. Neither did I.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#the-story"
              className="px-8 py-3.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors text-base"
            >
              Tell me more
            </a>
            <Link
              href="/glossary"
              className="px-8 py-3.5 border border-border text-text font-medium rounded-lg hover:bg-surface transition-colors text-base"
            >
              Browse the glossary
            </Link>
          </div>
        </div>
        {/* Subtle gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-surface" />
      </section>

      {/* ─── SECTION 2: THE PROBLEM ─── */}
      <section className="bg-surface py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-text">
            You&apos;ve tried to learn this stuff.
          </h2>
          <div className="mt-8 space-y-6 text-left text-text-muted text-base sm:text-lg leading-relaxed">
            <p>
              You watched a YouTube video titled &ldquo;AI Explained in 10
              Minutes.&rdquo; Twenty minutes later, you were more confused than
              when you started. The comments said it was &ldquo;so clear.&rdquo;
              You wondered if you watched the same video.
            </p>
            <p>
              You asked ChatGPT to explain itself. It responded with a wall of
              text that used the word &ldquo;parameters&rdquo; eleven times. You
              nodded like you understood. You did not understand.
            </p>
            <p>
              Every article assumes you already know the basics. Every tutorial
              skips the part where they explain what the words mean. Every door
              has a password you don&apos;t know.
            </p>
            <p className="text-text font-medium">
              It&apos;s not that you&apos;re not smart enough. It&apos;s that
              nobody&apos;s explaining it for people like us.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: THE BRIDGE (Steve's Story) ─── */}
      <section id="the-story" className="bg-white py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-text text-center">
            A year ago, I was you.
          </h2>
          <div className="mt-8 space-y-6 text-text-muted text-base sm:text-lg leading-relaxed">
            <p>
              I&apos;m Steve. A year
              ago, I didn&apos;t know what an LLM was, couldn&apos;t tell you
              the difference between a prompt and a parameter, and thought
              &ldquo;fine-tuning&rdquo; was something you did to a guitar.
            </p>
            <p>
              Then I watched one video that got me hooked. And I went down the rabbit
              hole. I started learning about AI tools, then using them, then
              building with them. I taught myself to code using AI assistants. I
              built real, working applications — from scratch — using nothing but
              AI and stubborn curiosity.
            </p>
            <p>
              I didn&apos;t go back to school. I didn&apos;t get a certificate.
              I just kept going until the jargon stopped being scary and started
              being a language I could actually speak.
            </p>
            <p className="text-text font-medium text-lg sm:text-xl">
              Now I want to help you do the same thing. Faster. Without all the
              confusion I went through.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: THE PROMISE ─── */}
      <section className="bg-surface py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-text">
            SpeakNerd is the guide I wish I had.
          </h2>
          <p className="mt-6 text-text-muted text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            No textbook definitions. No &ldquo;well, technically...&rdquo;
            explanations. Just plain English breakdowns of the AI terms and
            concepts everyone throws around — written by someone who had to
            learn them the hard way.
          </p>
          <p className="mt-4 text-text-muted text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            If you can understand a bar conversation, you can understand this.
          </p>
        </div>
      </section>

      {/* ─── SECTION 5: THE PATH ─── */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-text text-center">
            Here&apos;s the path.
          </h2>
          <p className="mt-4 text-text-muted text-center text-base sm:text-lg">
            Three steps. No PhD required.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-surface rounded-xl p-8 text-center">
              <div className="w-14 h-14 bg-violet-100 rounded-xl flex items-center justify-center mx-auto">
                <svg
                  className="w-7 h-7 text-violet-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="mt-5 text-lg font-bold text-text">
                Learn the Language
              </h3>
              <p className="mt-3 text-sm text-text-muted leading-relaxed">
                Browse 50+ AI terms explained like a human wrote them. Because
                one did. No Wikipedia energy here.
              </p>
              <Link
                href="/glossary"
                className="mt-5 inline-block text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
              >
                Explore the glossary &rarr;
              </Link>
            </div>

            {/* Step 2 */}
            <div className="bg-surface rounded-xl p-8 text-center">
              <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mx-auto">
                <svg
                  className="w-7 h-7 text-amber-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <h3 className="mt-5 text-lg font-bold text-text">
                Know the Tools
              </h3>
              <p className="mt-3 text-sm text-text-muted leading-relaxed">
                Understand what ChatGPT, Claude, Cursor, and the rest actually
                do — and when to use each one.
              </p>
              <Link
                href="/glossary"
                className="mt-5 inline-block text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
              >
                See the tools &rarr;
              </Link>
            </div>

            {/* Step 3 */}
            <div className="bg-surface rounded-xl p-8 text-center">
              <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto">
                <svg
                  className="w-7 h-7 text-emerald-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="mt-5 text-lg font-bold text-text">
                Build Something
              </h3>
              <p className="mt-3 text-sm text-text-muted leading-relaxed">
                Go from &ldquo;I don&apos;t know code&rdquo; to shipping a real
                app. I did it. You can too.
              </p>
              <Link
                href="/products"
                className="mt-5 inline-block text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
              >
                Get the bootcamp &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 6: THE CTA (Email Capture) ─── */}
      <section id="signup" className="bg-surface-alt py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <EmailCapture />
        </div>
      </section>

      {/* ─── SECTION 7: FEATURED TERMS PREVIEW ─── */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-text text-center">
            Start with these.
          </h2>
          <p className="mt-4 text-text-muted text-center text-base sm:text-lg">
            A few AI terms you&apos;ve definitely heard — finally explained.
          </p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTerms.map((term) => (
              <Link
                key={term.slug}
                href={`/terms/${term.slug}`}
                className="group block bg-surface rounded-xl p-6 hover:shadow-md transition-shadow border border-transparent hover:border-primary/20"
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-full ${term.categoryColor}`}
                  >
                    {term.category}
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
          <div className="mt-10 text-center">
            <Link
              href="/glossary"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
            >
              See all terms &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="bg-primary py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Ready to speak nerd?
          </h2>
          <p className="mt-4 text-primary-light text-base sm:text-lg">
            Start with the glossary. Or grab the cheat sheet. Either way,
            you&apos;ll finally know what people are talking about.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/glossary"
              className="px-8 py-3.5 bg-white text-primary font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              Browse the glossary
            </Link>
            <Link
              href="/products"
              className="px-8 py-3.5 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Get the cheat sheet — $9
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

const featuredTerms = [
  {
    slug: "llm",
    title: "LLM",
    subtitle: "Large Language Model",
    category: "AI Basics",
    categoryColor: "bg-violet-100 text-violet-700",
    tldr: "The brain behind ChatGPT. It read the entire internet and now it guesses what word comes next. Really, really well.",
  },
  {
    slug: "prompt",
    title: "Prompt",
    subtitle: "The thing you type into AI",
    category: "AI Basics",
    categoryColor: "bg-violet-100 text-violet-700",
    tldr: "The instruction you give an AI. Better prompts = better answers. It's like asking good questions at a bar.",
  },
  {
    slug: "vibe-coding",
    title: "Vibe Coding",
    subtitle: "Building apps with AI assistance",
    category: "Vibe Coding",
    categoryColor: "bg-emerald-100 text-emerald-700",
    tldr: "Writing code by describing what you want to an AI, then letting it write the actual code. It's how I built my first app.",
  },
  {
    slug: "hallucination",
    title: "Hallucination",
    subtitle: "When AI makes stuff up",
    category: "AI Basics",
    categoryColor: "bg-violet-100 text-violet-700",
    tldr: "When AI confidently tells you something that's completely wrong. Like that friend who never admits they don't know.",
  },
  {
    slug: "api",
    title: "API",
    subtitle: "Application Programming Interface",
    category: "Building Blocks",
    categoryColor: "bg-blue-100 text-blue-700",
    tldr: "A menu that lets apps order from other apps. Your weather app uses an API to ask a weather service for the forecast.",
  },
  {
    slug: "saas",
    title: "SaaS",
    subtitle: "Software as a Service",
    category: "Money & Business",
    categoryColor: "bg-amber-100 text-amber-700",
    tldr: "Software you pay for monthly instead of buying once. Netflix for apps. The holy grail of tech businesses.",
  },
];
