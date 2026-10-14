"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";
import { experiences } from "@/lib/constants";
import { ArrowUpRight } from "lucide-react";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 sm:py-24">
      <div className="mx-auto max-w-280 px-6 lg:px-8">
        <FadeIn className="mb-12">
          <p className="section-label mb-4">Experience</p>
          <h2 className="text-h2 sm:text-h1 max-w-3xl">
            Leading delivery, <span className="text-accent">shipping products.</span>
          </h2>
        </FadeIn>

        <StaggerContainer className="space-y-8">
          {experiences.map((exp) => (
            <StaggerItem key={exp.company}>
              <article className="card overflow-hidden">
                {/* Company header */}
                <header className="flex flex-col gap-2 border-b border-divider p-6 sm:flex-row sm:items-start sm:justify-between sm:p-8">
                  <div>
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-h3 text-foreground transition-colors hover:text-accent"
                    >
                      {exp.company}
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                    <p className="mt-1 text-sm text-subtle">{exp.location}</p>
                  </div>
                  <p className="font-mono text-xs text-subtle sm:pt-2">{exp.period}</p>
                </header>

                <div className="space-y-8 p-6 sm:p-8">
                  {/* Roles */}
                  <ol className="space-y-2">
                    {exp.roles.map((role, i) => (
                      <li
                        key={role.title}
                        className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between"
                      >
                        <span className={i === 0 ? "font-medium text-foreground" : "text-muted-foreground"}>
                          {role.title}
                        </span>
                        <span className="font-mono text-xs text-subtle">{role.period}</span>
                      </li>
                    ))}
                  </ol>

                  <ul className="space-y-2 text-muted-foreground">
                    {exp.highlights.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span aria-hidden className="mt-[0.7em] h-px w-3 shrink-0 bg-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
