"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/constants";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
});

const SNIPPET = `// idea in, release out
func Ship(idea Idea) Release {
	spec := Listen(idea)
	plan := Architect(spec)
	for !plan.Tested() {
		plan = Iterate(plan)
	}
	return plan.Release()
}`;

// Just enough Go highlighting for the snippet above; reuses the hljs colours.
const GO_TOKENS =
  /(\/\/.*)|("[^"]*")|\b(func|go|defer|return|for|range|if|make|chan|close)\b|\b(\w+)(?=\()|\b([A-Z]\w*)\b/g;

function highlightGo(src: string) {
  const nodes: ReactNode[] = [];
  let last = 0;
  for (const m of src.matchAll(GO_TOKENS)) {
    const className = m[1]
      ? "hljs-comment"
      : m[2]
        ? "hljs-string"
        : m[3]
          ? "hljs-keyword"
          : m[4]
            ? "hljs-title function_"
            : "hljs-type";
    nodes.push(src.slice(last, m.index), <span key={m.index} className={className}>{m[0]}</span>);
    last = m.index + m[0].length;
  }
  nodes.push(src.slice(last));
  return nodes;
}

const highlighted = highlightGo(SNIPPET);

function CodeWindow() {
  return (
    <div className="code-block shadow-(--shadow-card) overflow-hidden">
      <div className="flex h-12 items-center gap-2 border-b border-divider px-4">
        <span className="window-dot" />
        <span className="window-dot" />
        <span className="window-dot" />
        <span className="ml-3 font-mono text-xs text-subtle">ship.go</span>
      </div>
      <pre className="overflow-x-auto p-4 font-mono text-code [tab-size:4] sm:p-5">
        <code>
          {highlighted} <span className="cursor-block" aria-hidden />
        </code>
      </pre>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-background grid-background pt-16">
      {/* Decorative rings */}
      <div aria-hidden className="pointer-events-none absolute inset-0 hidden lg:block">
        <div className="absolute -right-40 top-1/2 size-[720px] -translate-y-1/2 rounded-full border border-(--ring-1)" />
        <div className="absolute -right-10 top-1/2 size-[460px] -translate-y-1/2 rounded-full border border-(--ring-2)" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-280 grid-cols-1 items-center gap-12 px-6 py-16 lg:grid-cols-[1.1fr_1fr] lg:px-8">
        <div>
          <motion.p {...fadeUp(0.1)} className="section-label mb-8">
            Senior Software Engineer
          </motion.p>

          <motion.h1 {...fadeUp(0.2)} className="text-display">
            From requirements <span className="text-accent">to release.</span>
          </motion.h1>

          <motion.p {...fadeUp(0.35)} className="mt-6 max-w-xl text-muted-foreground">
            I&apos;m <span className="font-medium text-foreground">{siteConfig.name}</span>,
            a Senior Software Engineer with 5+ years building data-heavy web
            applications and e-commerce products with React, TypeScript, and Go.
            I work directly with clients, taking products from first
            requirement to release.
          </motion.p>

          <motion.div {...fadeUp(0.5)} className="mt-6 flex flex-wrap gap-2">
            {["React", "TypeScript", "Go", "NATS JetStream"].map((tech, i) => (
              <span key={tech} className={i === 0 ? "tag tag-featured" : "tag"}>
                {tech}
              </span>
            ))}
          </motion.div>

          <motion.div {...fadeUp(0.65)} className="mt-10 flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <a href="#experience">View Experience</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#contact">Get In Touch</a>
            </Button>
            <div className="ml-1 flex items-center gap-1">
              {[
                { icon: Github, href: siteConfig.links.github, label: "GitHub" },
                { icon: Linkedin, href: siteConfig.links.linkedin, label: "LinkedIn" },
                { icon: Twitter, href: siteConfig.links.twitter, label: "Twitter" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex size-10 items-center justify-center rounded-control text-muted-foreground transition-colors hover:text-accent"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="min-w-0"
        >
          <CodeWindow />
        </motion.div>
      </div>
    </section>
  );
}
