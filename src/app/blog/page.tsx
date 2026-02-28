import { getAllPosts } from "@/lib/blog";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { format } from "date-fns";
import { ArrowLeft, ArrowRight, Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Swim Shahriar",
  description:
    "Thoughts on software engineering, React, TypeScript, Go, and building great products.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
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

        {/* Posts */}
        {posts.length === 0 ? (
          <div className="text-center py-20 rounded-xl border border-border/50 bg-card/50">
            <p className="font-mono text-sm text-muted-foreground">
              No posts yet. Check back soon!
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <h2 className="text-lg font-semibold group-hover:text-primary transition-colors mb-2 truncate">
                      {post.title}
                    </h2>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                      {post.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {format(new Date(post.date), "MMM d, yyyy")}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readingTime}
                      </span>
                      <div className="flex gap-1.5">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="rounded border border-border/50 bg-muted/50 px-2 py-0.5 font-mono"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0 mt-1" />
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
