import fs from "fs";
import path from "path";

export interface TermFrontmatter {
  title: string;
  subtitle: string;
  category: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  tldr: string;
  related?: string[];
}

export interface Term extends TermFrontmatter {
  slug: string;
  content: string;
}

const TERMS_DIR = path.join(process.cwd(), "content", "terms");

function parseFrontmatter(fileContent: string): {
  frontmatter: Record<string, string | string[]>;
  content: string;
} {
  const match = fileContent.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) {
    return { frontmatter: {}, content: fileContent };
  }

  const frontmatterStr = match[1];
  const content = match[2].trim();

  const frontmatter: Record<string, string | string[]> = {};
  for (const line of frontmatterStr.split("\n")) {
    const colonIdx = line.indexOf(":");
    if (colonIdx === -1) continue;
    const key = line.slice(0, colonIdx).trim();
    let value = line.slice(colonIdx + 1).trim();
    // Remove surrounding quotes
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    // Handle arrays (simple comma-separated for related terms)
    if (value.startsWith("[") && value.endsWith("]")) {
      frontmatter[key] = value
        .slice(1, -1)
        .split(",")
        .map((s) => s.trim().replace(/['"]/g, ""));
    } else {
      frontmatter[key] = value;
    }
  }

  return { frontmatter, content };
}

export function getAllTerms(): Term[] {
  if (!fs.existsSync(TERMS_DIR)) {
    return [];
  }

  const files = fs.readdirSync(TERMS_DIR).filter((f) => f.endsWith(".mdx"));

  return files
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      const filePath = path.join(TERMS_DIR, filename);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { frontmatter, content } = parseFrontmatter(fileContent);

      return {
        slug,
        title: (frontmatter.title as string) || slug,
        subtitle: (frontmatter.subtitle as string) || "",
        category: (frontmatter.category as string) || "uncategorized",
        difficulty:
          (frontmatter.difficulty as Term["difficulty"]) || "beginner",
        tldr: (frontmatter.tldr as string) || "",
        related: (frontmatter.related as string[]) || [],
        content,
      };
    })
    .sort((a, b) => a.title.localeCompare(b.title));
}

export function getTermBySlug(slug: string): Term | undefined {
  const terms = getAllTerms();
  return terms.find((t) => t.slug === slug);
}

export function getTermsByCategory(category: string): Term[] {
  return getAllTerms().filter((t) => t.category === category);
}
