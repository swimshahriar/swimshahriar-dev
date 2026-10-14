"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";
import { skills } from "@/lib/constants";

export function SkillsSection() {
  return (
    <section className="border-y border-divider bg-surface/40 py-16 sm:py-24">
      <div className="mx-auto max-w-280 px-6 lg:px-8">
        <FadeIn className="mb-12">
          <p className="section-label mb-4">Tech Stack</p>
          <h2 className="text-h2 sm:text-h1 max-w-3xl">
            Technologies I <span className="text-accent">work with.</span>
          </h2>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <StaggerItem key={group.category} className="h-full">
              <div className="card h-full p-6">
                <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.12em] text-subtle">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span key={skill} className="tag">
                      {skill}
                    </span>
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
