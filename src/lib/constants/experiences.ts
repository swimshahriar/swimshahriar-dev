export interface Experience {
  role: string;
  company: string;
  companyUrl: string;
  period: string;
  description: string;
  tags?: readonly string[];
}

export const experiences: Experience[] = [
  {
    role: "Senior Software Engineer L5",
    company: "Strativ",
    companyUrl: "https://strativ.se",
    period: "Jan 2026 — Present",
    description: "",
  },
  {
    role: "Software Engineer L4",
    company: "Strativ",
    companyUrl: "https://strativ.se",
    period: "May 2024 — Dec 2025",
    description:
      "Led frontend development for multiple high-impact projects while managing and mentoring a team of 5 engineers. Developed a custom RBAC package now standardized across many projects, improving security consistency. Optimized build performance and resolved critical caching issues, improving deployment pipelines. Served as Growth Coordinator, aligning team development with company objectives.",
    tags: [
      "React.js",
      "TypeScript",
      "JavaScript",
      "Golang",
      "React Query",
      "Zustand",
      "Ant Design",
      "Leadership",
    ],
  },
  {
    role: "Associate Software Engineer",
    company: "Ollyo",
    companyUrl: "https://ollyo.com",
    period: "Dec 2021 — Apr 2024",
    description:
      'Integrated OpenAI for text/image generation with variations and generative fill. Built a Media Manager and Color Library for a page builder app, improving visual coherence and UX. Managed a team of 3, fostering collaboration and knowledge sharing. Recognized as "Outstanding Contributor of 2023" for exceptional impact across projects.',
    tags: [
      "React.js",
      "TypeScript",
      "JavaScript",
      "Redux",
      "Zustand",
      "React Query",
      "DnD Kit",
      "Leadership",
    ],
  },
];
