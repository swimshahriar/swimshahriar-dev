"use client";

import { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { navItems, siteConfig } from "@/lib/constants";
import { cn } from "@/lib/utils";

function subscribeToScroll(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  window.addEventListener("resize", onChange);
  return () => {
    window.removeEventListener("scroll", onChange);
    window.removeEventListener("resize", onChange);
  };
}

/** id of the homepage section under the navbar, or "" above the first one. */
function getCurrentSection() {
  const sections = document.querySelectorAll<HTMLElement>("main section[id]");
  if (sections.length === 0) return "";

  // Short last sections never reach the top; treat the page bottom as them.
  const { scrollHeight } = document.documentElement;
  if (window.innerHeight + window.scrollY >= scrollHeight - 2) {
    return sections[sections.length - 1].id;
  }

  // A section is current once its top passes the upper third of the viewport.
  const line = window.innerHeight / 3;
  let current = "";
  for (const section of sections) {
    if (section.getBoundingClientRect().top <= line) current = section.id;
  }
  return current;
}

function useActiveHref() {
  const pathname = usePathname();
  const section = useSyncExternalStore(subscribeToScroll, getCurrentSection, () => "");

  if (pathname.startsWith("/blog")) return "/blog";
  if (pathname !== "/") return null;
  if (!section) return "/";
  // The homepage blog preview links out to /blog rather than to an anchor.
  return section === "blog" ? "/blog" : `/#${section}`;
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const activeHref = useActiveHref();

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-divider bg-background/80 backdrop-blur-[8px]"
    >
      <nav className="mx-auto max-w-280 px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex h-8 w-8 items-center justify-center rounded-control border border-border-strong bg-surface-2 group-hover:border-accent transition-colors">
              <Terminal className="h-4 w-4 text-accent" />
            </div>
            <span className="font-mono text-sm font-semibold tracking-tight">
              <span className="text-foreground">swimshahriar</span>
              <span className="text-accent">.dev</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const active = item.href === activeHref;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative px-3 py-2 text-sm transition-colors group",
                    active ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      "absolute inset-x-3 -bottom-px h-0.5 bg-accent transition-transform origin-left",
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                    )}
                  />
                </Link>
              );
            })}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button
              asChild
              size="sm"
              className="hidden md:inline-flex font-mono text-xs"
            >
              <a href={`mailto:${siteConfig.links.email}`}>
                <span className="opacity-60">$</span> hire_me
              </a>
            </Button>

            {/* Mobile Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden h-9 w-9 cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-divider bg-background"
          >
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) => {
                const active = item.href === activeHref;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "block px-3 py-2 text-sm rounded-control transition-colors",
                      active
                        ? "bg-surface-2 text-accent"
                        : "text-muted-foreground hover:text-foreground hover:bg-surface-2",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="pt-2">
                <Button asChild size="sm" className="w-full font-mono text-xs">
                  <a href={`mailto:${siteConfig.links.email}`}>
                    <span className="opacity-60">$</span> hire_me
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
