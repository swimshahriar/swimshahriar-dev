import { getAllPosts } from "@/lib/blog";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { format } from "date-fns";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BlogList, type BlogListItem } from "@/components/blog-list";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Swim Shahriar",
  description:
    "Thoughts on software engineering, React, TypeScript, Go, and building great products.",
};

export default function BlogPage() {
  // Strip `content` before handing posts to the client component — the full
  // MDX body of every post would otherwise ship in the page payload. Dates are
  // formatted here so date-fns stays out of the client bundle.
  const posts: BlogListItem[] = getAllPosts().map((post) => ({
    slug: post.slug,
    title: post.title,
    description: post.description,
    dateLabel: format(new Date(post.date), "MMM d, yyyy"),
    dateISO: new Date(post.date).toISOString(),
    readingTime: post.readingTime,
    tags: post.tags,
  }));

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="mb-6 font-mono text-xs cursor-pointer"
          >
            <Link href="/">
              <ArrowLeft className="h-3 w-3 mr-1" /> Back Home
            </Link>
          </Button>

          <Badge
            variant="outline"
            className="mb-4 font-mono text-xs border-primary/30 text-primary"
          >
            Blog
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Thoughts &amp; <span className="gradient-text">insights</span>
          </h1>
          <p className="mt-4 text-muted-foreground max-w-xl">
            Writing about software engineering, system design, and the
            technologies I work with daily.
          </p>
        </div>

        <BlogList posts={posts} />
      </div>
    </main>
  );
}
