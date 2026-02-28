import { getAllPosts } from "@/lib/blog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Link from "next/link";

export function BlogPreview() {
  const posts = getAllPosts().slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <section className="py-24 sm:py-32 relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-4 font-mono text-xs border-primary/30 text-primary"
          >
            Blog
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Latest <span className="gradient-text">articles</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Thoughts on engineering, architecture, and the technologies I use.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 flex flex-col"
            >
              {/* Card Header */}
              <div className="h-32 bg-gradient-to-br from-primary/10 via-accent/5 to-neon/10 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 grid-background opacity-60" />
                <div className="relative z-10 flex gap-1.5">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] rounded border border-border/30 bg-background/50 px-2 py-0.5 text-muted-foreground backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-1">
                  {post.description}
                </p>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {format(new Date(post.date), "MMM d")}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readingTime}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* See All CTA */}
        <div className="mt-12 text-center">
          <Button
            asChild
            variant="outline"
            className="font-mono text-sm cursor-pointer"
          >
            <Link href="/blog">
              All Articles <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
