const localIcons: Record<string, string> = {
  cobol: "/tech/cobol.svg",
  cpp: "/tech/cpp.svg",
  css: "/tech/css.svg",
  html: "/tech/html.svg",
  javascript: "/tech/javascript.svg",
  java: "/tech/java.svg",
  linux: "/tech/linux.svg",
  mysql: "/tech/mysql.svg",
  nextjs: "/tech/nextjs.svg",
  oracle: "/tech/oracle.svg",
  php: "/tech/php.svg",
  postgresql: "/tech/postgresql.svg",
  python: "/tech/python.svg",
  react: "/tech/react.svg",
  windows: "/tech/windows.svg",
};

const alias: Record<string, string> = {
  "c++": "cpp",
  "cplusplus": "cpp",
  "c plus plus": "cpp",
  "c#": "csharp",
  "c sharp": "csharp",
  "js": "javascript",
  "ts": "typescript",
  "type script": "typescript",
  "node js": "nodejs",
  "node.js": "nodejs",
  "next.js": "nextjs",
  "react js": "react",
  "react.js": "react",
  "postgres": "postgresql",
  "pg": "postgresql",
};

export function getTechIcon(tech: string): string {
  const key = tech.toLowerCase().trim();
  const resolved = alias[key] ?? key;
  const local = localIcons[resolved];
  if (local) return local;
  return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${resolved}/${resolved}-original.svg`;
}
