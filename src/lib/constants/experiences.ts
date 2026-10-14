export interface Experience {
  company: string;
  companyUrl: string;
  location: string;
  period: string;
  roles: readonly { title: string; period: string }[];
  highlights: readonly string[];
  tags: readonly string[];
}

export const experiences: Experience[] = [
  {
    company: "Strativ",
    companyUrl: "https://strativ.se",
    location: "Stockholm, Sweden & Dhaka, Bangladesh (Hybrid)",
    period: "May 2024 — Present",
    roles: [
      { title: "Senior Software Engineer (L5)", period: "Jan 2026 — Present" },
      { title: "Software Engineer (L4)", period: "May 2024 — Dec 2025" },
    ],
    highlights: [
      "Own delivery of a multi-tenant e-commerce ERP handling 300K+ products on an event-driven Go backend.",
      "Work directly with Scandinavian clients from requirements through architecture, implementation, and release.",
      "Built analytics dashboards and real-time monitoring UIs for energy and industrial IoT platforms.",
      "Growth Coordinator for 4 engineers; maintain a shared RBAC package used across company projects.",
    ],
    tags: [
      "TypeScript",
      "React",
      "Zustand",
      "TanStack Query",
      "Material UI",
      "Ant Design",
      "Recharts",
      "Go",
      "Gin",
      "NATS JetStream",
      "MongoDB",
    ],
  },
  {
    company: "Ollyo",
    companyUrl: "https://ollyo.com",
    location: "Dhaka, Bangladesh",
    period: "Dec 2021 — May 2024",
    roles: [{ title: "Associate Software Engineer", period: "Dec 2021 — May 2024" }],
    highlights: [
      "Core team member on SP Page Builder 5; built its design system, Media Manager, Color Library, and OpenAI-powered generation features.",
      "Led a team of 3 engineers; recognized as Outstanding Contributor of 2023.",
    ],
    tags: ["JavaScript", "TypeScript", "React", "Redux", "TanStack Query", "DnD Kit"],
  },
];
