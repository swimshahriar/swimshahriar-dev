"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";
import { Badge } from "@/components/ui/badge";
import { experiences } from "@/lib/constants";
import { ExternalLink, Code2, Briefcase, GraduationCap, Zap } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32 relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-4 font-mono text-xs border-primary/30 text-primary"
          >
            About Me
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Turning <span className="gradient-text">complex problems</span> into
            elegant solutions
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Bio */}
          <FadeIn direction="right" className="space-y-6">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I&apos;m a Senior Software Engineer with deep expertise in building
                modern web applications and distributed systems. My core stack
                revolves around <span className="text-foreground font-medium">React</span>,{" "}
                <span className="text-foreground font-medium">TypeScript</span>,{" "}
                <span className="text-foreground font-medium">Next.js</span>, and{" "}
                <span className="text-foreground font-medium">Go</span>.
              </p>
              <p>
                I thrive at the intersection of frontend craft and backend
                architecture. Whether it&apos;s optimizing a React rendering pipeline,
                designing a high-throughput Go microservice, or setting up a CI/CD
                pipeline, I bring the same attention to detail and passion for
                quality code.
              </p>
              <p>
                When I&apos;m not coding, you&apos;ll find me contributing to open source,
                writing technical articles, or exploring the latest in web
                technologies and system design.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {[
                { icon: Code2, value: "5+", label: "Years Exp" },
                { icon: Briefcase, value: "50+", label: "Projects" },
                { icon: GraduationCap, value: "10+", label: "Open Source" },
                { icon: Zap, value: "100K+", label: "Lines of Code" },
              ].map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="rounded-lg border border-border/50 bg-card/50 p-4 text-center backdrop-blur-sm"
                >
                  <Icon className="h-4 w-4 text-primary mx-auto mb-2" />
                  <p className="text-xl font-bold font-mono">{value}</p>
                  <p className="text-xs text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Right: Experience Timeline */}
          <FadeIn direction="left" delay={0.2}>
            <div className="space-y-2 mb-6">
              <h3 className="font-mono text-sm font-semibold text-primary">
                Experience
              </h3>
            </div>
            <StaggerContainer className="space-y-6" delay={0.3}>
              {experiences.map((exp, index) => (
                <StaggerItem key={index}>
                  <div className="relative pl-6 border-l-2 border-border/50 hover:border-primary/50 transition-colors group">
                    <div className="absolute -left-1.75 top-1 h-3 w-3 rounded-full border-2 border-border bg-background group-hover:border-primary transition-colors" />
                    <div className="space-y-1">
                      <p className="font-mono text-xs text-primary">
                        {exp.period}
                      </p>
                      <h4 className="font-semibold">{exp.role}</h4>
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {exp.company}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                      <p className="text-sm text-muted-foreground leading-relaxed pt-1">
                        {exp.description}
                      </p>
                      {exp.tags && (
                        <div className="flex flex-wrap gap-1.5 pt-2">
                          {exp.tags.map((tag) => (
                            <span
                              key={tag}
                              className="inline-flex items-center rounded-full border border-border/50 bg-muted/50 px-2 py-0.5 text-[10px] font-mono text-muted-foreground"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
