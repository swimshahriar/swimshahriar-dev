export const siteConfig = {
  name: "S. M. Shahriar",
  title: "S. M. Shahriar — Senior Software Engineer",
  description:
    "Senior Software Engineer with 5+ years building data-heavy web applications and e-commerce products with React, TypeScript, and Go.",
  url: "https://swimshahriar.dev",
  location: "Dhaka, Bangladesh",
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
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
] as const;

export const education = {
  degree: "B.Sc. in Computer Science and Engineering",
  school: "North South University, Dhaka",
  period: "2017 — 2021",
};

export const languages = [
  { name: "Bangla", level: "Native" },
  { name: "English", level: "Professional working" },
  { name: "Hindi", level: "Conversational" },
];
