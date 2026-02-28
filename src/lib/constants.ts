export const siteConfig = {
  name: "Swim Shahriar",
  title: "Swim Shahriar — Senior Software Engineer",
  description:
    "Senior Software Engineer specializing in React, TypeScript, Next.js, and Go. Building performant, scalable web applications.",
  url: "https://swimshahriar.dev",
  ogImage: "/og.png",
  links: {
    github: "https://github.com/swimshahriar",
    linkedin: "https://linkedin.com/in/swimshahriar",
    twitter: "https://x.com/swimshahriar",
    email: "hello@swimshahriar.dev",
  },
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
] as const;

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", primary: true },
      { name: "Next.js", primary: true },
      { name: "TypeScript", primary: true },
      { name: "Tailwind CSS", primary: true },
      { name: "React Native" },
      { name: "HTML/CSS" },
      { name: "Redux" },
      { name: "Zustand" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Go", primary: true },
      { name: "Node.js", primary: true },
      { name: "REST APIs", primary: true },
      { name: "gRPC" },
      { name: "GraphQL" },
      { name: "WebSockets" },
      { name: "Microservices" },
    ],
  },
  {
    category: "DevOps & Tools",
    items: [
      { name: "Docker", primary: true },
      { name: "Git", primary: true },
      { name: "CI/CD", primary: true },
      { name: "AWS" },
      { name: "Kubernetes" },
      { name: "GitHub Actions" },
      { name: "Terraform" },
      { name: "Linux" },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "PostgreSQL", primary: true },
      { name: "MongoDB" },
      { name: "Redis", primary: true },
      { name: "Prisma" },
      { name: "Drizzle" },
      { name: "ClickHouse" },
    ],
  },
];

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
    title: "Cloud-Native Microservices Platform",
    description:
      "Designed and built a production-grade microservices platform using Go and gRPC, serving 100K+ requests/minute with sub-50ms latency.",
    tags: ["Go", "gRPC", "Kubernetes", "PostgreSQL", "Redis"],
    image: "/projects/microservices.png",
    github: "https://github.com/swimshahriar/microservices-platform",
    live: "https://platform-demo.swimshahriar.dev",
    featured: true,
  },
  {
    title: "Real-Time Collaboration Suite",
    description:
      "Full-stack real-time collaboration app with live cursors, document editing, and video conferencing built with Next.js and WebSockets.",
    tags: ["Next.js", "TypeScript", "WebSocket", "Redis", "PostgreSQL"],
    image: "/projects/collab.png",
    github: "https://github.com/swimshahriar/collab-suite",
    live: "https://collab.swimshahriar.dev",
    featured: true,
  },
  {
    title: "AI-Powered Code Review Tool",
    description:
      "Intelligent code review assistant that analyzes PRs, suggests improvements, and auto-fixes common patterns using LLM integration.",
    tags: ["TypeScript", "React", "Go", "OpenAI", "GitHub API"],
    image: "/projects/code-review.png",
    github: "https://github.com/swimshahriar/ai-code-review",
    live: "https://review.swimshahriar.dev",
    featured: true,
  },
  {
    title: "Developer Analytics Dashboard",
    description:
      "Comprehensive analytics dashboard for developer productivity metrics with beautiful charts and real-time data streaming.",
    tags: ["Next.js", "TypeScript", "D3.js", "Go", "ClickHouse"],
    image: "/projects/analytics.png",
    github: "https://github.com/swimshahriar/dev-analytics",
    featured: false,
  },
  {
    title: "Open Source CLI Framework",
    description:
      "Extensible CLI framework in Go with built-in plugin system, auto-completion, and interactive prompts.",
    tags: ["Go", "CLI", "Open Source"],
    image: "/projects/cli.png",
    github: "https://github.com/swimshahriar/go-cli-framework",
    featured: false,
  },
  {
    title: "E-Commerce Storefront",
    description:
      "High-performance headless e-commerce storefront with ISR, edge caching, and Stripe integration.",
    tags: ["Next.js", "TypeScript", "Stripe", "Prisma", "Tailwind"],
    image: "/projects/ecommerce.png",
    github: "https://github.com/swimshahriar/storefront",
    live: "https://store.swimshahriar.dev",
    featured: false,
  },
];

export const experiences = [
  {
    role: "Senior Software Engineer L5",
    company: "Strativ",
    period: "Jan 2026 — Present",
    description:
      "",
  },
  {
    role: "Software Engineer L4",
    company: "Strativ",
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
    period: "Dec 2021 — Apr 2024",
    description:
      "Integrated OpenAI for text/image generation with variations and generative fill. Built a Media Manager and Color Library for a page builder app, improving visual coherence and UX. Managed a team of 3, fostering collaboration and knowledge sharing. Recognized as \"Outstanding Contributor of 2023\" for exceptional impact across projects.",
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
] as const;
