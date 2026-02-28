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
    email: "shahriarswim01@gmail.com",
  },
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
] as const;
