import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <span className="text-lg font-bold text-primary">
              Speak<span className="text-text">Nerd</span>
              <span className="text-primary-light">.ai</span>
            </span>
            <p className="mt-2 text-sm text-text-muted">
              Learn to speak nerd (without becoming one).
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-text mb-3">Explore</h3>
            <div className="space-y-2">
              <Link
                href="/glossary"
                className="block text-sm text-text-muted hover:text-primary transition-colors"
              >
                AI Glossary
              </Link>
              <Link
                href="/story"
                className="block text-sm text-text-muted hover:text-primary transition-colors"
              >
                My Story
              </Link>
              <Link
                href="/products"
                className="block text-sm text-text-muted hover:text-primary transition-colors"
              >
                Products
              </Link>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold text-text mb-3">Connect</h3>
            <div className="space-y-2">
              <a
                href="https://x.com/SteveBuilds_AI"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-text-muted hover:text-primary transition-colors"
              >
                @SteveBuilds_AI on X
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-xs text-text-light">
          &copy; {new Date().getFullYear()} SpeakNerd.ai. Built by a guy who
          learned this stuff the hard way.
        </div>
      </div>
    </footer>
  );
}
