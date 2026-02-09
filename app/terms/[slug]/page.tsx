import { getAllTerms, getTermBySlug } from "@/lib/terms";
import { getCategoryBySlug } from "@/lib/categories";
import { EmailCapture } from "@/components/EmailCapture";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface TermPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const terms = getAllTerms();
  return terms.map((term) => ({ slug: term.slug }));
}

export async function generateMetadata({
  params,
}: TermPageProps): Promise<Metadata> {
  const { slug } = await params;
  const term = getTermBySlug(slug);
  if (!term) return {};

  return {
    title: `WTF is ${term.title}? | SpeakNerd.ai`,
    description: term.tldr,
    openGraph: {
      title: `WTF is ${term.title}? | SpeakNerd.ai`,
      description: term.tldr,
      url: `https://speaknerd.ai/terms/${slug}`,
    },
  };
}

export default async function TermPage({ params }: TermPageProps) {
  const { slug } = await params;
  const term = getTermBySlug(slug);
  if (!term) notFound();

  const category = getCategoryBySlug(term.category);
  const allTerms = getAllTerms();
  const relatedTerms = term.related
    ? allTerms.filter((t) => term.related?.includes(t.slug))
    : [];

  // Split content into sections by ## headings
  const sections = term.content.split(/^## /m).filter(Boolean);

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-text-muted">
        <Link href="/glossary" className="hover:text-primary transition-colors">
          Glossary
        </Link>
        <span className="mx-2">/</span>
        <span className="text-text">{term.title}</span>
      </nav>

      {/* Header */}
      <header className="mb-10">
        {category && (
          <span
            className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${category.bgColor} ${category.color} mb-4`}
          >
            {category.name}
          </span>
        )}
        <h1 className="text-3xl sm:text-4xl font-bold text-text">
          {term.title}
        </h1>
        {term.subtitle && (
          <p className="mt-2 text-lg text-text-muted">{term.subtitle}</p>
        )}
        <div className="mt-6 bg-surface rounded-xl p-5 border border-border">
          <p className="text-sm font-semibold text-text-muted uppercase tracking-wide mb-1">
            TL;DR
          </p>
          <p className="text-text text-base sm:text-lg leading-relaxed">
            {term.tldr}
          </p>
        </div>
      </header>

      {/* Content */}
      <div className="prose-custom space-y-8">
        {sections.map((section, i) => {
          const lines = section.split("\n");
          const heading = lines[0].trim();
          const body = lines.slice(1).join("\n").trim();
          return (
            <section key={i}>
              <h2 className="text-xl sm:text-2xl font-bold text-text mb-4">
                {heading}
              </h2>
              <div className="text-text-muted text-base sm:text-lg leading-relaxed space-y-4">
                {body.split("\n\n").map((paragraph, j) => (
                  <p key={j}>{paragraph}</p>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* Related terms */}
      {relatedTerms.length > 0 && (
        <div className="mt-12 pt-8 border-t border-border">
          <h3 className="text-lg font-bold text-text mb-4">Related terms</h3>
          <div className="flex flex-wrap gap-3">
            {relatedTerms.map((rt) => (
              <Link
                key={rt.slug}
                href={`/terms/${rt.slug}`}
                className="px-4 py-2 bg-surface rounded-lg text-sm font-medium text-text-muted hover:text-primary hover:bg-primary/5 transition-colors border border-border"
              >
                {rt.title}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* CTA */}
      <div className="mt-12 pt-8 border-t border-border bg-surface-alt rounded-xl p-8">
        <EmailCapture
          heading="Like this? Get one every week."
          subheading="Every Tuesday, one AI concept explained in plain English. Free forever."
          buttonText="Subscribe"
        />
      </div>

      {/* Product nudge */}
      <div className="mt-8 text-center">
        <p className="text-sm text-text-muted">
          Want all 75 terms in one PDF?{" "}
          <a
            href="https://speaknerdai.gumroad.com/l/mvircb"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-semibold hover:text-primary-dark transition-colors"
          >
            Grab the SpeakNerd Cheat Sheet — $9
          </a>
        </p>
      </div>
    </article>
  );
}
