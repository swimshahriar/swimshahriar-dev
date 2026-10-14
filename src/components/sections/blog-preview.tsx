import { getAllPosts } from "@/lib/blog";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Link from "next/link";

export function BlogPreview() {
  const posts = getAllPosts().slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <section id="blog" className="py-16 sm:py-24">
      <div className="mx-auto max-w-280 px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <p className="section-label mb-4">Blog</p>
          <h2 className="text-h2 sm:text-h1">
            Latest <span className="text-accent">articles.</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl">
            Thoughts on engineering, architecture, and the technologies I use.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group card card-lift overflow-hidden hover:border-border-strong flex flex-col"
            >
              {/* Card Header */}
              <div className="h-32 border-b border-divider bg-linear-to-br from-accent/10 via-transparent to-transparent flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 grid-background" />
                <div className="relative z-10 flex gap-1.5">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="tag"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-[1.125rem] font-medium leading-snug mb-2 group-hover:text-accent transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-1">
                  {post.description}
                </p>
                <div className="flex items-center gap-3 font-mono text-xs text-subtle">
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
        <div className="mt-12">
          <Button
            asChild
            variant="outline"
          >
            <Link href="/blog">
              All Articles <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
