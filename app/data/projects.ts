import { fetchGitHubRepos, fetchReadme, fetchCommits, type Commit } from "../lib/github";
import { enrichment, type GalleryItem } from "./projects-enrichment";

export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  period: string;
  duration: string;
  repository?: string;
  homepage?: string;
  technologies: string[];
  outcomes: string[];
  highlights: string[];
  gallery: GalleryItem[];
  commits: Commit[];
  developmentPeriod: { start: string; end: string };
  results: {
    device: string;
    title: string;
    detail: string;
    kind: "desktop" | "tablet" | "mobile";
  }[];
};

function formatDate(iso: string): string {
  try {
    const d = new Date(iso);
    return d.toLocaleDateString("es-PE", { year: "numeric", month: "short", day: "numeric" });
  } catch {
    return iso;
  }
}

function parseHighlightsFromReadme(readme: string): string[] {
  const lines = readme.split("\n");
  const highlights: string[] = [];

  for (const line of lines) {
    const trimmed = line.replace(/^[#*\s-]+/, "").trim();
    if (
      trimmed.length > 30 &&
      !trimmed.startsWith("[") &&
      !trimmed.startsWith("!") &&
      !trimmed.startsWith("http")
    ) {
      highlights.push(trimmed);
    }
    if (highlights.length >= 5) break;
  }

  return highlights;
}

function buildProject(
  repo: {
    name: string;
    description: string | null;
    html_url: string;
    topics: string[];
    language: string | null;
    homepage: string | null;
    created_at: string;
    pushed_at: string;
  },
  readme: string | null,
  commits: Commit[],
): Project {
  const enriched = enrichment[repo.name];
  const slug = repo.name.toLowerCase().replace(/[^a-z0-9-]/g, "-");
  const title = repo.name;

  const languages = enriched?.technologies ?? [
    ...repo.topics,
    ...(repo.language ? [repo.language] : []),
  ];

  const highlights =
    enriched?.highlights ??
    (readme ? parseHighlightsFromReadme(readme) : []);

  return {
    slug,
    title,
    category: enriched?.category ?? "Proyecto",
    summary: repo.description ?? enriched?.category ?? "Repositorio en GitHub",
    description: repo.description ?? enriched?.category ?? "Repositorio en GitHub",
    period: enriched?.period ?? "Proyecto",
    duration: enriched?.duration ?? "",
    repository: repo.html_url,
    homepage: repo.homepage ?? undefined,
    technologies: languages,
    outcomes: enriched?.outcomes ?? [],
    highlights,
    gallery: enriched?.gallery ?? [],
    commits,
    developmentPeriod: {
      start: formatDate(repo.created_at),
      end: formatDate(repo.pushed_at),
    },
    results: enriched?.results ?? [],
  };
}

function buildFromEnrichmentOnly(): Project[] {
  return Object.entries(enrichment).map(([name, data]) => {
    const slug = name.toLowerCase().replace(/[^a-z0-9-]/g, "-");
    return {
      slug,
      title: name,
      category: data.category ?? "Proyecto",
      summary: data.outcomes?.[0] ?? "Repositorio en GitHub",
      description: data.outcomes?.join(". ") ?? "Repositorio en GitHub",
      period: data.period ?? "Proyecto",
      duration: data.duration ?? "",
      technologies: data.technologies ?? [],
      outcomes: data.outcomes ?? [],
      highlights: data.highlights ?? [],
      gallery: data.gallery ?? [],
      commits: [],
      developmentPeriod: { start: "", end: "" },
      results: data.results ?? [],
    };
  });
}

export async function getProjects(): Promise<Project[]> {
  try {
    const repos = await fetchGitHubRepos("BrayanCahuanaU");
    if (repos.length === 0) {
      return buildFromEnrichmentOnly();
    }

    const projects: Project[] = [];
    const owner = "BrayanCahuanaU";

    for (const repo of repos) {
      let readme: string | null = null;
      if (!enrichment[repo.name]?.highlights) {
        readme = await fetchReadme(owner, repo.name).catch(() => null);
      }
      const commits = await fetchCommits(owner, repo.name);
      projects.push(buildProject(repo, readme, commits));
    }

    return projects;
  } catch {
    console.warn("Failed to fetch GitHub repos. Using enrichment data only.");
    return buildFromEnrichmentOnly();
  }
}

export async function getProject(slug: string): Promise<Project | null> {
  const projects = await getProjects();
  return projects.find((p) => p.slug === slug) ?? null;
}
