"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects, siteConfig } from "@/lib/constants";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import Link from "next/link";

export function ProjectsSection() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 sm:py-32 relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-4 font-mono text-xs border-primary/30 text-primary"
          >
            Projects
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Featured <span className="gradient-text">work</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            A selection of projects that showcase my engineering capabilities
            across the stack.
          </p>
        </FadeIn>

        {/* Featured Projects */}
        <StaggerContainer className="space-y-8 mb-12">
          {featured.map((project, index) => (
            <StaggerItem key={project.title}>
              <div
                className={`group relative rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 ${
                  index % 2 === 0 ? "" : "md:flex-row-reverse"
                }`}
              >
                {/* Image Placeholder */}
                <div className="relative h-48 sm:h-56 bg-gradient-to-br from-primary/10 via-accent/5 to-neon/10 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 grid-background opacity-60" />
                  <div className="relative z-10 font-mono text-sm text-muted-foreground/60">
                    {`<${project.title.split(" ")[0]} />`}
                  </div>
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-xs rounded-md border border-border/50 bg-muted/50 px-2.5 py-0.5 text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="h-4 w-4" />
                      Source
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Other Projects Grid */}
        {others.length > 0 && (
          <>
            <FadeIn className="mb-8">
              <h3 className="font-mono text-sm font-semibold text-primary">
                Other Projects
              </h3>
            </FadeIn>
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {others.map((project) => (
                <StaggerItem key={project.title}>
                  <div className="group rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 h-full flex flex-col">
                    <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[10px] rounded border border-border/50 bg-muted/50 px-2 py-0.5 text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                      >
                        <Github className="h-3 w-3" /> Code
                      </a>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                        >
                          <ExternalLink className="h-3 w-3" /> Demo
                        </a>
                      )}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </>
        )}

        {/* CTA */}
        <FadeIn className="mt-12 text-center">
          <Button
            asChild
            variant="outline"
            className="font-mono text-sm cursor-pointer"
          >
            <Link href={siteConfig.links.github} target="_blank">
              View All on GitHub <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
