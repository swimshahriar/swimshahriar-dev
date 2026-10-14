import Link from "next/link";
import { Github, Linkedin, Twitter, Terminal, Heart } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { navItems, siteConfig } from "@/lib/constants";

const socialLinks = [
  { icon: Github, href: siteConfig.links.github, label: "GitHub" },
  { icon: Linkedin, href: siteConfig.links.linkedin, label: "LinkedIn" },
  { icon: Twitter, href: siteConfig.links.twitter, label: "Twitter" },
];

export function Footer() {
  return (
    <footer className="border-t border-divider">
      <div className="mx-auto max-w-280 px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="flex h-8 w-8 items-center justify-center rounded-control border border-border-strong bg-surface-2">
                <Terminal className="h-4 w-4 text-accent" />
              </div>
              <span className="font-mono text-sm font-semibold">
                <span className="text-foreground">swimshahriar</span>
                <span className="text-accent">.dev</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Senior Software Engineer building data-heavy web
              apps and e-commerce products with React, TypeScript, and Go.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-[0.12em] text-subtle">
              Navigation
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-[0.12em] text-subtle">
              Connect
            </h3>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-control border border-border-strong text-muted-foreground hover:text-accent hover:border-accent transition-colors"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              <a
                href={`mailto:${siteConfig.links.email}`}
                className="text-accent hover:underline underline-offset-4"
              >
                {siteConfig.links.email}
              </a>
            </p>
          </div>
        </div>

        <Separator className="my-8 bg-divider" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-subtle font-mono">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-subtle flex items-center gap-1">
            Built with <Heart className="h-3 w-3 text-accent" /> using Next.js &amp; TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}
