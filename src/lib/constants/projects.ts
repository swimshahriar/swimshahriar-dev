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
