import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { ExperienceSection } from "@/components/sections/experience";
import { SkillsSection } from "@/components/sections/skills";
import { ProjectsSection } from "@/components/sections/projects";
import { BlogPreview } from "@/components/sections/blog-preview";
import { ContactSection } from "@/components/sections/contact";

export default function Home() {
  return (
    // overflow-x-clip: FadeIn slides cards in from ±40px; keep that from widening the page.
    <main className="overflow-x-clip">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <BlogPreview />
      <ContactSection />
    </main>
  );
}
