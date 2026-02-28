"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/lib/constants";
import { motion } from "framer-motion";

export function SkillsSection() {
  return (
    <section className="py-24 sm:py-32 relative bg-muted/30">
      {/* Subtle grid */}
      <div className="absolute inset-0 grid-background opacity-50" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-4 font-mono text-xs border-primary/30 text-primary"
          >
            Tech Stack
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Technologies I{" "}
            <span className="gradient-text">work with</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            A curated set of technologies I use daily to build scalable,
            maintainable software.
          </p>
        </FadeIn>

        {/* Skills Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((category) => (
            <StaggerItem key={category.category}>
              <div className="rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 h-full">
                <h3 className="font-mono text-sm font-semibold text-primary mb-4">
                  {`// ${category.category}`}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill, i) => (
                    <motion.span
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      className={`inline-flex items-center rounded-lg px-3 py-1.5 font-mono text-xs transition-all duration-200 cursor-default ${
                        skill.primary
                          ? "border border-primary/40 bg-primary/10 text-primary glow hover:bg-primary/15"
                          : "border border-border/50 bg-background/60 text-foreground hover:border-primary/40 hover:text-primary hover:bg-primary/5"
                      }`}
                    >
                      {skill.name}
                    </motion.span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
