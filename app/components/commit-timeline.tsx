"use client";

import { Timeline } from "@once-ui-system/core";
import type { Commit } from "../lib/github";

function formatDate(iso: string): string {
  try {
    const d = new Date(iso);
    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const year = String(d.getFullYear()).slice(-2);
    const hours = String(d.getHours()).padStart(2, "0");
    return `${day}/${month}/${year}, ${hours}`;
  } catch {
    return iso;
  }
}

function truncateMessage(msg: string, max = 60): string {
  return msg.length > max ? msg.slice(0, max) + "..." : msg;
}

function calculateTotalHours(commits: Commit[]): number {
  if (commits.length < 2) return 0;
  const dates = commits.map((c) => new Date(c.date).getTime());
  const oldest = Math.min(...dates);
  const newest = Math.max(...dates);
  return Math.round((newest - oldest) / (1000 * 60 * 60));
}

export function CommitTimeline({ commits }: { commits: Commit[] }) {
  if (commits.length === 0) {
    return <p style={{ color: "var(--ink-muted)" }}>No hay commits disponibles.</p>;
  }

  const items = commits.map((commit, i) => ({
    label: truncateMessage(commit.message),
    description: formatDate(commit.date),
    state: i === 0 ? ("active" as const) : ("default" as const),
  }));

  return (
    <>
      <Timeline
        size="s"
        items={items}
      />
      <p style={{ color: "var(--ink-muted)", marginTop: "var(--spacing-s)" }}>
        {calculateTotalHours(commits)} horas totales de desarrollo
      </p>
    </>
  );
}
