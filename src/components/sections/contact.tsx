"use client";

import { useState } from "react";
import { FadeIn } from "@/components/motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/lib/constants";
import { Mail, MapPin, Send, ArrowUpRight, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

type FormState = "idle" | "loading" | "success" | "error";

export function ContactSection() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = {
      access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "",
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (json.success) {
        setFormState("success");
        form.reset();
      } else {
        setErrorMessage(json.message ?? "Something went wrong. Please try again.");
        setFormState("error");
      }
    } catch {
      setErrorMessage("Network error. Please check your connection and try again.");
      setFormState("error");
    }
  }

  return (
    <section id="contact" className="relative border-t border-divider py-16 sm:py-24 grid-background">
      <div className="relative z-10 mx-auto max-w-280 px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn className="mb-12">
          <p className="section-label mb-4">Contact</p>
          <h2 className="text-h2 sm:text-h1">
            Let&apos;s <span className="text-accent">work together.</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl">
            Have a project in mind or want to discuss opportunities? I&apos;d
            love to hear from you.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Contact Info */}
          <FadeIn direction="right" className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-control border border-border-strong bg-surface-2">
                  <Mail className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Email</h3>
                  <a
                    href={`mailto:${siteConfig.links.email}`}
                    className="text-accent hover:underline underline-offset-4"
                  >
                    {siteConfig.links.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-control border border-border-strong bg-surface-2">
                  <MapPin className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Location</h3>
                  <p className="text-muted-foreground">
                    {siteConfig.location} · Open to remote
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                variant="outline"
                size="sm"
                className="cursor-pointer"
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
                className="cursor-pointer"
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
                className="cursor-pointer"
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
              onSubmit={handleSubmit}
              className="card space-y-5 p-6 sm:p-8"
            >
              {formState === "success" && (
                <div className="flex items-center gap-3 rounded-lg border border-green-500/30 bg-green-500/10 p-4 text-sm text-green-600 dark:text-green-400">
                  <CheckCircle className="h-4 w-4 shrink-0" />
                  <span>Message sent! I&apos;ll get back to you soon.</span>
                </div>
              )}

              {formState === "error" && (
                <div className="flex items-center gap-3 rounded-lg border border-destructive/30 bg-destructive/10 p-4 text-sm text-destructive">
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="font-mono text-xs uppercase tracking-[0.12em] text-subtle"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="font-mono text-xs uppercase tracking-[0.12em] text-subtle"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="font-mono text-xs uppercase tracking-[0.12em] text-subtle"
                >
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Project collaboration"
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="font-mono text-xs uppercase tracking-[0.12em] text-subtle"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  required
                  className="resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={formState === "loading"}
                className="w-full cursor-pointer"
              >
                {formState === "loading" ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
