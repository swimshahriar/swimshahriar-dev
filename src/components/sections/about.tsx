"use client";

import { FadeIn } from "@/components/motion";
import { education, languages, siteConfig } from "@/lib/constants";
import { GraduationCap, Languages, MapPin } from "lucide-react";

const stats = [
  { value: "5+", label: "Years experience" },
  { value: "300K+", label: "Products managed" },
  { value: "4", label: "Engineers coordinated" },
  { value: "2023", label: "Outstanding Contributor" },
];

export function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24">
      <div className="mx-auto max-w-280 px-6 lg:px-8">
        <FadeIn className="mb-12">
          <p className="section-label mb-4">About</p>
          <h2 className="text-h2 sm:text-h1 max-w-3xl">
            Data-heavy products, <span className="text-accent">built end to end.</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <FadeIn direction="right" className="space-y-4 text-muted-foreground">
            <p>
              I&apos;m a Senior Software Engineer at{" "}
              <span className="font-medium text-foreground">Strativ</span>,
              building data-heavy web applications and e-commerce products with{" "}
              <span className="font-medium text-foreground">React</span>,{" "}
              <span className="font-medium text-foreground">TypeScript</span>, and{" "}
              <span className="font-medium text-foreground">Go</span>.
            </p>
            <p>
              Most recently I&apos;ve been building a multi-tenant e-commerce ERP
              that handles 300K+ products on an event-driven backend. I work
              directly with clients to gather requirements, then own delivery
              through architecture, implementation, and release.
            </p>
            <p>
              I coordinate the growth of a team of 4 engineers and work daily
              with Claude Code, Codex, and GitHub Copilot. Outside work I build
              open-source tools and write about Go, frontend performance, and AI.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-6 sm:grid-cols-4">
              {stats.map(({ value, label }) => (
                <div key={label} className="card p-4">
                  <p className="text-h3 font-semibold text-foreground">{value}</p>
                  <p className="mt-1 font-mono text-xs text-subtle">{label}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.15} className="card divide-y divide-divider">
            <div className="flex gap-4 p-6">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-accent" />
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.12em] text-subtle">Based in</p>
                <p className="mt-1 text-foreground">{siteConfig.location}</p>
              </div>
            </div>
            <div className="flex gap-4 p-6">
              <GraduationCap className="mt-1 h-4 w-4 shrink-0 text-accent" />
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.12em] text-subtle">Education</p>
                <p className="mt-1 text-foreground">{education.degree}</p>
                <p className="text-sm text-muted-foreground">{education.school}</p>
                <p className="font-mono text-xs text-subtle">{education.period}</p>
              </div>
            </div>
            <div className="flex gap-4 p-6">
              <Languages className="mt-1 h-4 w-4 shrink-0 text-accent" />
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.12em] text-subtle">Languages</p>
                <ul className="mt-1 space-y-0.5">
                  {languages.map(({ name, level }) => (
                    <li key={name} className="text-sm text-muted-foreground">
                      <span className="text-foreground">{name}</span> · {level}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
