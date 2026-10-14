"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";
import { Button } from "@/components/ui/button";
import { projects, siteConfig } from "@/lib/constants";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 sm:py-24">
      <div className="mx-auto max-w-280 px-6 lg:px-8">
        <FadeIn className="mb-12">
          <p className="section-label mb-4">Open Source</p>
          <h2 className="text-h2 sm:text-h1 max-w-3xl">
            Things I build <span className="text-accent">in the open.</span>
          </h2>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <StaggerItem key={project.title} className="h-full">
              <div className="group card card-lift flex h-full flex-col overflow-hidden hover:border-border-strong">
                {/* Header art: grid + a soft amber wash */}
                <div className="relative flex h-40 items-center justify-center overflow-hidden border-b border-divider bg-linear-to-br from-accent/10 via-transparent to-transparent">
                  <div className="absolute inset-0 grid-background" />
                  <span className="relative font-mono text-sm text-subtle">
                    {`<${project.title.split(/[\s-]/)[0]} />`}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <h3 className="mb-2 text-h3 transition-colors group-hover:text-accent">
                    {project.title}
                  </h3>
                  <p className="mb-6 flex-1 text-muted-foreground">{project.description}</p>

                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-5 text-sm">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-accent hover:underline underline-offset-4"
                    >
                      <Github className="h-4 w-4" />
                      Source
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-accent hover:underline underline-offset-4"
                      >
                        <ExternalLink className="h-4 w-4" />
                        {project.live.includes("npmjs.com") ? "NPM" : "Live"}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn className="mt-12">
          <Button asChild variant="outline">
            <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer">
              View All on GitHub <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
