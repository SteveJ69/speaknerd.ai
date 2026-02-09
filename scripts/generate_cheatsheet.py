#!/usr/bin/env python3
"""Generate the SpeakNerd.ai 75-Term AI Cheat Sheet PDF."""

import re
from pathlib import Path
from fpdf import FPDF

TERMS_DIR = Path(__file__).parent.parent / "content" / "terms"
LOGO_PATH = Path(__file__).parent.parent / "public" / "logo2.webp"
OUTPUT_PATH = Path(__file__).parent.parent / "products" / "speaknerd-cheatsheet.pdf"

# Brand colors
INDIGO = (99, 102, 241)       # #6366f1
INDIGO_DARK = (79, 70, 229)   # #4f46e5
SLATE_900 = (30, 41, 59)      # #1e293b
SLATE_600 = (71, 85, 105)     # #475569
SLATE_400 = (148, 163, 184)   # #94a3b8
WHITE = (255, 255, 255)
SURFACE = (248, 250, 252)     # #f8fafc

# Category ordering and display names
CATEGORIES = [
    ("ai-basics", "AI Basics"),
    ("vibe-coding", "Vibe Coding"),
    ("building-blocks", "Building Blocks"),
    ("buzzwords", "Buzzwords"),
    ("money-business", "Money & Business"),
    ("tools-platforms", "Tools & Platforms"),
]

CATEGORY_COLORS = {
    "ai-basics": (139, 92, 246),       # violet
    "vibe-coding": (16, 185, 129),     # emerald
    "building-blocks": (59, 130, 246), # blue
    "buzzwords": (244, 63, 94),        # rose
    "money-business": (245, 158, 11),  # amber
    "tools-platforms": (6, 182, 212),  # cyan
}


def parse_frontmatter(text: str) -> dict:
    """Extract YAML frontmatter from MDX file."""
    match = re.match(r"^---\s*\n(.*?)\n---", text, re.DOTALL)
    if not match:
        return {}
    fm = {}
    for line in match.group(1).splitlines():
        if ":" in line:
            key, val = line.split(":", 1)
            key = key.strip()
            val = val.strip().strip('"').strip("'")
            fm[key] = val
    return fm


def extract_section(text: str, heading: str) -> str:
    """Extract content under a ## heading."""
    pattern = rf"## {re.escape(heading)}\s*\n(.*?)(?=\n## |\Z)"
    match = re.search(pattern, text, re.DOTALL)
    if not match:
        return ""
    content = match.group(1).strip()
    # Clean markdown formatting
    content = re.sub(r"\*\*(.*?)\*\*", r"\1", content)  # bold
    content = re.sub(r"\*(.*?)\*", r"\1", content)       # italic
    content = re.sub(r"\[([^\]]+)\]\([^)]+\)", r"\1", content)  # links
    content = re.sub(r"[❌✅🔗📖🎥]", "", content)  # emoji
    content = sanitize_text(content)
    return content.strip()


def sanitize_text(text: str) -> str:
    """Replace Unicode characters that built-in PDF fonts can't handle."""
    replacements = {
        "\u2014": " -- ",   # em dash
        "\u2013": " - ",    # en dash
        "\u2018": "'",      # left single quote
        "\u2019": "'",      # right single quote
        "\u201c": '"',      # left double quote
        "\u201d": '"',      # right double quote
        "\u2026": "...",    # ellipsis
        "\u2022": "-",      # bullet
        "\u00a0": " ",      # non-breaking space
        "\u2192": "->",     # right arrow
    }
    for char, replacement in replacements.items():
        text = text.replace(char, replacement)
    # Strip any remaining non-latin-1 chars
    return text.encode("latin-1", errors="replace").decode("latin-1")


def load_terms() -> dict[str, list[dict]]:
    """Load all terms grouped by category."""
    by_category: dict[str, list[dict]] = {slug: [] for slug, _ in CATEGORIES}

    for f in sorted(TERMS_DIR.glob("*.mdx")):
        text = f.read_text(encoding="utf-8")
        fm = parse_frontmatter(text)
        if not fm.get("title"):
            continue

        term = {
            "title": sanitize_text(fm["title"]),
            "subtitle": sanitize_text(fm.get("subtitle", "")),
            "tldr": sanitize_text(fm.get("tldr", "")),
            "category": fm.get("category", "ai-basics"),
            "plain": extract_section(text, "The Plain English Version"),
            "why": extract_section(text, "Why Should You Care?"),
        }

        cat = term["category"]
        if cat in by_category:
            by_category[cat].append(term)

    return by_category


class CheatSheetPDF(FPDF):
    """Custom PDF for the SpeakNerd Cheat Sheet."""

    def __init__(self):
        super().__init__("P", "mm", "Letter")
        self.set_auto_page_break(auto=True, margin=20)
        # Use built-in fonts only (Helvetica = Arial equivalent)

    def cover_page(self):
        """Generate the cover page."""
        self.add_page()
        self.set_fill_color(*INDIGO_DARK)
        self.rect(0, 0, 216, 279, "F")

        # Logo
        if LOGO_PATH.exists():
            self.image(str(LOGO_PATH), x=48, y=30, w=120)

        # Title
        self.set_y(155)
        self.set_font("Helvetica", "B", 28)
        self.set_text_color(*WHITE)
        self.cell(0, 12, "The AI Cheat Sheet", align="C", new_x="LMARGIN", new_y="NEXT")

        self.ln(4)
        self.set_font("Helvetica", "", 16)
        self.set_text_color(200, 200, 230)
        self.cell(0, 8, "75 Tech Terms Explained in Plain English", align="C", new_x="LMARGIN", new_y="NEXT")

        self.ln(20)
        self.set_font("Helvetica", "I", 12)
        self.set_text_color(180, 180, 210)
        self.cell(0, 7, "No jargon. No BS. Just plain English.", align="C", new_x="LMARGIN", new_y="NEXT")

        self.ln(30)
        self.set_font("Helvetica", "", 11)
        self.set_text_color(180, 180, 210)
        self.cell(0, 7, "by Steve @ SpeakNerd.ai", align="C", new_x="LMARGIN", new_y="NEXT")

    def toc_page(self, terms_by_cat: dict[str, list[dict]]):
        """Generate table of contents."""
        self.add_page()
        self.set_fill_color(*WHITE)
        self.rect(0, 0, 216, 279, "F")

        self.set_y(20)
        self.set_font("Helvetica", "B", 22)
        self.set_text_color(*SLATE_900)
        self.cell(0, 12, "What's Inside", align="C", new_x="LMARGIN", new_y="NEXT")
        self.ln(5)

        self.set_font("Helvetica", "", 11)
        self.set_text_color(*SLATE_600)
        self.multi_cell(0, 6,
            "75 terms organized into 6 categories. Each term includes a "
            "plain English explanation and why it matters to you.",
            align="C")
        self.ln(8)

        for cat_slug, cat_name in CATEGORIES:
            terms = terms_by_cat.get(cat_slug, [])
            if not terms:
                continue

            color = CATEGORY_COLORS.get(cat_slug, INDIGO)

            # Category header
            self.set_font("Helvetica", "B", 13)
            self.set_text_color(*color)
            self.cell(0, 8, f"{cat_name} ({len(terms)} terms)", new_x="LMARGIN", new_y="NEXT")

            # Term list
            self.set_font("Helvetica", "", 9)
            self.set_text_color(*SLATE_600)
            names = [t["title"] for t in terms]
            # Wrap terms in rows
            line = ""
            for i, name in enumerate(names):
                sep = "  |  " if line else ""
                test = line + sep + name
                if len(test) > 90 and line:
                    self.cell(0, 5, line, new_x="LMARGIN", new_y="NEXT")
                    line = name
                else:
                    line = test
            if line:
                self.cell(0, 5, line, new_x="LMARGIN", new_y="NEXT")
            self.ln(4)

    def category_header(self, cat_name: str, cat_slug: str):
        """Add a category divider."""
        color = CATEGORY_COLORS.get(cat_slug, INDIGO)

        # Check if we need a new page (need at least 60mm for header + first term)
        if self.get_y() > 220:
            self.add_page()

        self.ln(6)
        self.set_fill_color(*color)
        self.rect(15, self.get_y(), 186, 0.8, "F")
        self.ln(3)

        self.set_font("Helvetica", "B", 18)
        self.set_text_color(*color)
        self.cell(0, 10, cat_name, new_x="LMARGIN", new_y="NEXT")
        self.ln(2)

    def term_entry(self, term: dict):
        """Render a single term entry."""
        # Check if we need a new page (estimate: title + tldr + plain ~50mm min)
        if self.get_y() > 210:
            self.add_page()

        y_start = self.get_y()

        # Term title
        self.set_font("Helvetica", "B", 13)
        self.set_text_color(*SLATE_900)
        self.cell(0, 7, term["title"], new_x="LMARGIN", new_y="NEXT")

        # Subtitle
        if term["subtitle"]:
            self.set_font("Helvetica", "I", 9)
            self.set_text_color(*SLATE_400)
            self.cell(0, 5, term["subtitle"], new_x="LMARGIN", new_y="NEXT")

        self.ln(1)

        # TL;DR
        if term["tldr"]:
            self.set_font("Helvetica", "B", 9)
            self.set_text_color(*INDIGO)
            self.cell(15, 5, "TL;DR: ", new_x="RIGHT")
            self.set_font("Helvetica", "", 9)
            self.set_text_color(*SLATE_600)
            # Multi-cell for wrapping, but we need to handle the indent
            tldr = term["tldr"]
            self.multi_cell(0, 5, tldr)

        # Plain English (trimmed to first 2-3 sentences for cheat sheet)
        if term["plain"]:
            self.ln(1)
            self.set_font("Helvetica", "", 9)
            self.set_text_color(*SLATE_900)
            # Get first paragraph (up to ~300 chars)
            plain = term["plain"]
            paragraphs = plain.split("\n\n")
            first_para = paragraphs[0][:350]
            if len(paragraphs[0]) > 350:
                # Cut at last sentence boundary
                last_period = first_para.rfind(".")
                if last_period > 100:
                    first_para = first_para[:last_period + 1]
            self.multi_cell(0, 4.5, first_para)

        # Why it matters (condensed)
        if term["why"]:
            self.ln(1)
            self.set_font("Helvetica", "B", 8)
            self.set_text_color(*INDIGO)
            self.cell(0, 4, "Why it matters:", new_x="LMARGIN", new_y="NEXT")
            self.set_font("Helvetica", "", 8)
            self.set_text_color(*SLATE_600)
            why = term["why"]
            # First 2 sentences
            sentences = re.split(r'(?<=[.!?])\s+', why)
            short_why = " ".join(sentences[:2])
            if len(short_why) > 250:
                short_why = short_why[:250].rsplit(" ", 1)[0] + "..."
            self.multi_cell(0, 4, short_why)

        # Separator
        self.ln(3)
        self.set_draw_color(226, 232, 240)  # slate-200
        self.line(20, self.get_y(), 196, self.get_y())
        self.ln(3)

    def back_page(self):
        """Generate the back cover with CTA."""
        self.add_page()
        self.set_fill_color(*INDIGO_DARK)
        self.rect(0, 0, 216, 279, "F")

        self.set_y(60)
        self.set_font("Helvetica", "B", 24)
        self.set_text_color(*WHITE)
        self.cell(0, 12, "You now speak nerd.", align="C", new_x="LMARGIN", new_y="NEXT")

        self.ln(10)
        self.set_font("Helvetica", "", 13)
        self.set_text_color(200, 200, 230)
        self.multi_cell(0, 7,
            "But this is just the beginning. These 75 terms are your "
            "foundation. Now it's time to start building.",
            align="C")

        self.ln(15)
        self.set_font("Helvetica", "B", 14)
        self.set_text_color(*WHITE)
        self.cell(0, 8, "Keep learning at speaknerd.ai", align="C", new_x="LMARGIN", new_y="NEXT")

        self.ln(6)
        self.set_font("Helvetica", "", 11)
        self.set_text_color(180, 180, 210)
        self.cell(0, 7, "Free weekly newsletter  |  AI glossary  |  Courses", align="C", new_x="LMARGIN", new_y="NEXT")

        self.ln(40)
        self.set_font("Helvetica", "I", 10)
        self.set_text_color(150, 150, 180)
        self.multi_cell(0, 6,
            "\"I woke up with an idea. By that night I had a live site.\"\n"
            "- Steve, building in public",
            align="C")

    def header(self):
        """Page header (skip on cover and back)."""
        if self.page_no() <= 2:
            return
        self.set_font("Helvetica", "", 7)
        self.set_text_color(*SLATE_400)
        self.cell(0, 8, "SpeakNerd.ai  |  The AI Cheat Sheet", align="L")
        self.set_x(-50)
        self.cell(40, 8, f"Page {self.page_no() - 2}", align="R")
        self.ln(10)

    def footer(self):
        """Page footer."""
        if self.page_no() <= 1:
            return
        self.set_y(-15)
        self.set_font("Helvetica", "I", 7)
        self.set_text_color(*SLATE_400)
        self.cell(0, 5, "speaknerd.ai  -  Learn to speak nerd (without becoming one)", align="C")


def main():
    print("Loading terms...")
    terms_by_cat = load_terms()

    total = sum(len(t) for t in terms_by_cat.values())
    print(f"Found {total} terms across {len(CATEGORIES)} categories")

    for cat_slug, cat_name in CATEGORIES:
        terms = terms_by_cat.get(cat_slug, [])
        print(f"  {cat_name}: {len(terms)} terms")

    pdf = CheatSheetPDF()

    # Cover
    print("Generating cover page...")
    pdf.cover_page()

    # Table of contents
    print("Generating table of contents...")
    pdf.toc_page(terms_by_cat)

    # Term pages by category
    for cat_slug, cat_name in CATEGORIES:
        terms = terms_by_cat.get(cat_slug, [])
        if not terms:
            continue

        print(f"Adding {cat_name} ({len(terms)} terms)...")
        pdf.add_page()
        pdf.category_header(cat_name, cat_slug)

        for term in terms:
            pdf.term_entry(term)

    # Back cover
    print("Generating back cover...")
    pdf.back_page()

    # Save
    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    pdf.output(str(OUTPUT_PATH))
    print(f"\nDone! Saved to: {OUTPUT_PATH}")
    print(f"Pages: {pdf.page_no()}")


if __name__ == "__main__":
    main()
