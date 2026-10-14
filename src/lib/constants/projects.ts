export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  github: string;
  live?: string;
}

export const projects: Project[] = [
  {
    title: "Locademy",
    description:
      "An offline video course library for macOS, Windows, and Linux. Turns any folder of videos into modules, with progress tracking, auto-advance, and a built-in player. A Rust backend handles folder scanning and local persistence, and GitHub Actions builds installers for every release tag.",
    tags: ["Tauri v2", "Rust", "React 19", "TypeScript", "Tailwind CSS", "GitHub Actions"],
    image: "/projects/locademy.png",
    github: "https://github.com/swimshahriar/locademy",
    live: "https://locademy.swimshahriar.dev",
  },
  {
    title: "react-access-boundary-v2",
    description:
      "An NPM package for permission-based UI and route protection in React. RouteGuard protects routes, components check single or multiple permissions with AND/OR logic, and an AccessProvider with a useAccessContext hook manages permissions globally. Suspense-compatible, with full TypeScript support.",
    tags: ["React", "TypeScript", "RBAC", "NPM"],
    image: "/projects/react-access-boundary.png",
    github: "https://github.com/swimshahriar/react-access-boundary-v2",
    live: "https://www.npmjs.com/package/react-access-boundary-v2",
  },
];
