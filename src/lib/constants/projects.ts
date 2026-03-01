export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  github: string;
  live?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: "Locademy",
    description:
      "An offline desktop app that creates a structured video library from your own folders, turning scattered local videos into a focused learning experience. Features auto-organized modules, per-video and overall progress tracking, a clean built-in player, auto-advance to the next lesson, and system light/dark theme support — no logins, no uploads, no cloud.",
    tags: ["Tauri v2", "React", "Rust", "Tailwind CSS"],
    image: "/projects/locademy.png",
    github: "https://github.com/swimshahriar/locademy",
    live: "https://locademy.swimshahriar.dev",
    featured: true,
  },
  {
    title: "react-access-boundary-v2",
    description:
      "A React library for managing access control in UI components and routes. Features RouteGuard for route protection, single and multiple permission checks with AND/OR logic, customizable fallback UI, an AccessProvider for global permissions management, a useAccessContext hook, React Suspense compatibility, and full TypeScript support.",
    tags: ["React", "TypeScript", "Access Control", "Open Source"],
    image: "/projects/react-access-boundary.png",
    github: "https://github.com/swimshahriar/react-access-boundary-v2",
    live: "https://www.npmjs.com/package/react-access-boundary-v2",
    featured: true,
  },
];
