"use client";

import { FadeIn } from "@/components/motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/lib/constants";
import { Mail, MapPin, Send, ArrowUpRight } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 sm:py-32 relative bg-muted/30">
      <div className="absolute inset-0 grid-background opacity-50" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-4 font-mono text-xs border-primary/30 text-primary"
          >
            Contact
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Let&apos;s <span className="gradient-text">work together</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Have a project in mind or want to discuss opportunities? I&apos;d
            love to hear from you.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Contact Info */}
          <FadeIn direction="right" className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/5">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a
                    href={`mailto:${siteConfig.links.email}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {siteConfig.links.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/5">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-sm text-muted-foreground">
                    Available Worldwide · Remote First
                  </p>
                </div>
              </div>
            </div>

            {/* Terminal-style message */}
            <div className="rounded-xl border border-border/50 bg-card/80 backdrop-blur-sm p-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-3 w-3 rounded-full bg-destructive/60" />
                <div className="h-3 w-3 rounded-full bg-chart-4/60" />
                <div className="h-3 w-3 rounded-full bg-neon/60" />
              </div>
              <pre className="font-mono text-xs text-muted-foreground leading-relaxed">
                <code>
                  {`const developer = {
  name: "Swim Shahriar",
  role: "Senior Software Engineer",
  stack: ["React", "TypeScript", "Next.js", "Go"],
  available: true,
  coffee: "always ☕"
};

// Let's build something amazing!`}
                </code>
              </pre>
            </div>

            <div className="flex gap-3">
              <Button
                asChild
                variant="outline"
                size="sm"
                className="font-mono text-xs cursor-pointer"
              >
                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub <ArrowUpRight className="h-3 w-3 ml-1" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="font-mono text-xs cursor-pointer"
              >
                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn <ArrowUpRight className="h-3 w-3 ml-1" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="font-mono text-xs cursor-pointer"
              >
                <a
                  href={siteConfig.links.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter <ArrowUpRight className="h-3 w-3 ml-1" />
                </a>
              </Button>
            </div>
          </FadeIn>

          {/* Right: Contact Form */}
          <FadeIn direction="left" delay={0.2}>
            <form
              action={`mailto:${siteConfig.links.email}`}
              method="POST"
              encType="text/plain"
              className="space-y-5 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 sm:p-8"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium font-mono"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    className="bg-background/50"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium font-mono"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    className="bg-background/50"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium font-mono"
                >
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Project collaboration"
                  className="bg-background/50"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium font-mono"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="bg-background/50 resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full font-mono text-sm glow cursor-pointer"
              >
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
