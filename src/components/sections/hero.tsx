"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/constants";

function FloatingOrb({
  className,
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -20, 0],
        opacity: [0.3, 0.6, 0.3],
      }}
      transition={{
        duration: 6,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-background" />
      <FloatingOrb
        className="absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
        delay={0}
      />
      <FloatingOrb
        className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-accent/10 blur-3xl"
        delay={2}
      />
      <FloatingOrb
        className="absolute top-1/2 right-1/3 h-48 w-48 rounded-full bg-neon/10 blur-3xl"
        delay={4}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-neon" />
          </span>
          <span className="font-mono text-xs text-muted-foreground">
            Available for opportunities
          </span>
        </motion.div>

        {/* Name / Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight"
        >
          <span className="block">Hi, I&apos;m</span>
          <span className="block gradient-text text-glow mt-2">
            S. M. Shahriar
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-6 space-y-2"
        >
          <p className="font-mono text-lg sm:text-xl text-muted-foreground">
            Senior Software Engineer
          </p>
          <div className="flex flex-wrap justify-center gap-2 font-mono text-sm">
            {["React", "TypeScript", "Next.js", "Go"].map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.7 + i * 0.1 }}
                className="rounded-md border border-border/50 bg-card/50 px-3 py-1 text-muted-foreground backdrop-blur-sm"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-8 max-w-2xl mx-auto text-muted-foreground leading-relaxed"
        >
          I build performant, scalable web applications and backend systems.
          Passionate about clean architecture, developer experience, and pushing
          the boundaries of what&apos;s possible on the web.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            asChild
            size="lg"
            className="font-mono text-sm glow cursor-pointer"
          >
            <a href="#projects">View My Work</a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="font-mono text-sm cursor-pointer"
          >
            <a href="#contact">Get In Touch</a>
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mt-12 mb-16 flex items-center justify-center gap-3"
        >
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
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all"
              aria-label={label}
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator — outside the content container, pinned to section bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="h-5 w-5 text-muted-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
