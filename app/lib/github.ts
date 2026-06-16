export type GitHubRepo = {
  name: string;
  description: string | null;
  html_url: string;
  topics: string[];
  language: string | null;
  homepage: string | null;
  created_at: string;
  pushed_at: string;
};

export async function fetchGitHubRepos(username: string): Promise<GitHubRepo[]> {
  const url = `https://api.github.com/users/${username}/repos?per_page=100&sort=updated&direction=desc&type=public`;

  const res = await fetch(url, {
    headers: { Accept: "application/vnd.github.mercy-preview+json" },
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    console.warn(`GitHub API responded with ${res.status}. Using fallback data.`);
    return [];
  }

  const repos: GitHubRepo[] = await res.json();

  return repos
    .filter((repo) => !repo.name.startsWith("."))
    .map((repo) => ({
      name: repo.name,
      description: repo.description,
      html_url: repo.html_url,
      topics: repo.topics ?? [],
      language: repo.language,
      homepage: repo.homepage,
      created_at: repo.created_at,
      pushed_at: repo.pushed_at,
    }));
}

export async function fetchReadme(owner: string, repo: string): Promise<string | null> {
  const url = `https://api.github.com/repos/${owner}/${repo}/readme`;

  const res = await fetch(url, {
    headers: {
      Accept: "application/vnd.github.raw+json",
    },
    next: { revalidate: 3600 },
  });

  if (!res.ok) return null;

  return res.text();
}

export type Commit = {
  sha: string;
  date: string;
  message: string;
  author: string;
};

export async function fetchCommits(owner: string, repo: string): Promise<Commit[]> {
  const url = `https://api.github.com/repos/${owner}/${repo}/commits?per_page=50`;

  const res = await fetch(url, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) return [];

  const data: {
    sha: string;
    commit: { author: { date: string; name: string }; message: string };
  }[] = await res.json();

  return data.map((c) => ({
    sha: c.sha,
    date: c.commit.author.date,
    message: c.commit.message.split("\n")[0],
    author: c.commit.author.name,
  }));
}
