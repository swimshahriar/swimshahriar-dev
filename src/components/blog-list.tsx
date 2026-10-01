"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * Dates arrive preformatted from the server so this component doesn't pull
 * date-fns into the client bundle just to render a label.
 */
export interface BlogListItem {
  slug: string;
  title: string;
  description: string;
  dateLabel: string;
  dateISO: string;
  readingTime: string;
  tags: string[];
}

const TAGS_PARAM = "tags";
const TAGS_CHANGE_EVENT = "blog-tags-change";

function matchesQuery(post: BlogListItem, terms: string[]) {
  if (terms.length === 0) return true;
  const haystack =
    `${post.title} ${post.description} ${post.tags.join(" ")}`.toLowerCase();
  return terms.every((term) => haystack.includes(term));
}

/**
 * The `tags` query param is the single source of truth for the topic filter,
 * read through useSyncExternalStore so a deep-linked filter hydrates without a
 * mismatch: the server snapshot is empty (the static HTML lists every post,
 * which is also what a reader without JS gets), and React re-renders with the
 * real URL immediately after hydration.
 *
 * The search box is deliberately *not* in the URL — a half-typed query isn't
 * worth sharing, and keeping it in local state means typing never touches
 * history or the router.
 */
function subscribeToTags(onChange: () => void) {
  window.addEventListener("popstate", onChange);
  window.addEventListener(TAGS_CHANGE_EVENT, onChange);
  return () => {
    window.removeEventListener("popstate", onChange);
    window.removeEventListener(TAGS_CHANGE_EVENT, onChange);
  };
}

function getTagsSnapshot() {
  return new URLSearchParams(window.location.search).get(TAGS_PARAM) ?? "";
}

function getServerTagsSnapshot() {
  return "";
}

function writeTags(next: string[]) {
  const params = new URLSearchParams(window.location.search);
  if (next.length) params.set(TAGS_PARAM, next.join(","));
  else params.delete(TAGS_PARAM);

  const search = params.toString();
  // replaceState keeps filtering out of the back-button history, so Back still
  // leaves the page instead of stepping through every pill the reader tapped.
  window.history.replaceState(
    null,
    "",
    search ? `?${search}` : window.location.pathname,
  );
  window.dispatchEvent(new Event(TAGS_CHANGE_EVENT));
}

export function BlogList({ posts }: { posts: BlogListItem[] }) {
  const [query, setQuery] = useState("");
  const [showAllTags, setShowAllTags] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const tagsParam = useSyncExternalStore(
    subscribeToTags,
    getTagsSnapshot,
    getServerTagsSnapshot,
  );

  // Most-used tags first; ties break alphabetically so the row order is stable.
  const tags = useMemo(() => {
    const counts = new Map<string, number>();
    for (const post of posts) {
      for (const tag of post.tags) {
        counts.set(tag, (counts.get(tag) ?? 0) + 1);
      }
    }
    return [...counts.entries()]
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .map(([name, count]) => ({ name, count }));
  }, [posts]);

  // Unknown tags in the URL are dropped, so a stale link can't select a pill
  // that isn't rendered and leave the reader staring at zero results.
  const activeTags = useMemo(() => {
    if (!tagsParam) return [];
    const known = new Set(posts.flatMap((post) => post.tags));
    return tagsParam.split(",").filter((tag) => known.has(tag));
  }, [tagsParam, posts]);

  // Single-use tags are the long tail: each one filters down to exactly one
  // post, so they'd triple the height of the filter row to little purpose.
  // Collapse them behind a toggle, but never hide a tag that's currently on.
  const visibleTags = useMemo(
    () =>
      showAllTags
        ? tags
        : tags.filter((tag) => tag.count > 1 || activeTags.includes(tag.name)),
    [tags, showAllTags, activeTags],
  );
  const hiddenTagCount = tags.length - visibleTags.length;

  const toggleTag = (tag: string) => {
    writeTags(
      activeTags.includes(tag)
        ? activeTags.filter((t) => t !== tag)
        : [...activeTags, tag],
    );
  };

  const clearAll = () => {
    setQuery("");
    writeTags([]);
  };

  // "/" focuses search the way it does in most docs sites; Escape backs out.
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      const typing =
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        target?.isContentEditable;

      if (event.key === "/" && !typing) {
        event.preventDefault();
        inputRef.current?.focus();
      } else if (event.key === "Escape" && target === inputRef.current) {
        inputRef.current?.blur();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const terms = useMemo(
    () => query.toLowerCase().split(/\s+/).filter(Boolean),
    [query],
  );

  // Tags are OR'd (any match) — AND across topics is too narrow to be useful.
  const filtered = useMemo(
    () =>
      posts.filter(
        (post) =>
          matchesQuery(post, terms) &&
          (activeTags.length === 0 ||
            post.tags.some((tag) => activeTags.includes(tag))),
      ),
    [posts, terms, activeTags],
  );

  const isFiltered = query.length > 0 || activeTags.length > 0;

  return (
    <div>
      {/* Search */}
      <div role="search" className="relative mb-4">
        <label htmlFor="blog-search" className="sr-only">
          Search posts
        </label>
        <Search
          aria-hidden
          className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
        />
        <Input
          id="blog-search"
          ref={inputRef}
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search posts by title, description, or tag..."
          className="h-11 pl-9 pr-20 [&::-webkit-search-cancel-button]:hidden"
        />
        {query ? (
          <button
            type="button"
            onClick={() => setQuery("")}
            aria-label="Clear search"
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded p-1 text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
          >
            <X className="h-4 w-4" />
          </button>
        ) : (
          <kbd
            aria-hidden
            className="absolute right-3 top-1/2 hidden -translate-y-1/2 rounded border border-border/50 bg-muted/50 px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground sm:block"
          >
            /
          </kbd>
        )}
      </div>

      {/* Topic filter */}
      <div className="mb-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => writeTags([])}
          aria-pressed={activeTags.length === 0}
          className={cn(
            "rounded-full border px-3 py-1 font-mono text-xs transition-colors cursor-pointer",
            activeTags.length === 0
              ? "border-primary/30 bg-primary/10 text-primary"
              : "border-border/50 text-muted-foreground hover:border-primary/20 hover:text-foreground",
          )}
        >
          All
        </button>
        {visibleTags.map((tag) => {
          const active = activeTags.includes(tag.name);
          return (
            <button
              key={tag.name}
              type="button"
              onClick={() => toggleTag(tag.name)}
              aria-pressed={active}
              className={cn(
                "rounded-full border px-3 py-1 font-mono text-xs transition-colors cursor-pointer",
                active
                  ? "border-primary/30 bg-primary/10 text-primary"
                  : "border-border/50 text-muted-foreground hover:border-primary/20 hover:text-foreground",
              )}
            >
              {tag.name}
              <span className="ml-1.5 opacity-60">{tag.count}</span>
            </button>
          );
        })}
        {hiddenTagCount > 0 || showAllTags ? (
          <button
            type="button"
            onClick={() => setShowAllTags((shown) => !shown)}
            aria-expanded={showAllTags}
            className="rounded-full px-3 py-1 font-mono text-xs text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground cursor-pointer"
          >
            {showAllTags ? "Show fewer" : `+${hiddenTagCount} more`}
          </button>
        ) : null}
      </div>

      {/* Result count */}
      <div className="mb-6 flex items-center justify-between gap-4">
        <p aria-live="polite" className="font-mono text-xs text-muted-foreground">
          {filtered.length === posts.length
            ? `${posts.length} ${posts.length === 1 ? "post" : "posts"}`
            : `${filtered.length} of ${posts.length} posts`}
        </p>
        {isFiltered ? (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearAll}
            className="h-auto py-1 font-mono text-xs cursor-pointer"
          >
            Clear filters
          </Button>
        ) : null}
      </div>

      {/* Posts */}
      {filtered.length === 0 ? (
        <div className="rounded-xl border border-border/50 bg-card/50 py-20 text-center">
          <p className="font-mono text-sm text-muted-foreground">
            {posts.length === 0
              ? "No posts yet. Check back soon!"
              : "No posts match those filters."}
          </p>
          {isFiltered ? (
            <Button
              variant="outline"
              size="sm"
              onClick={clearAll}
              className="mt-4 font-mono text-xs cursor-pointer"
            >
              Clear filters
            </Button>
          ) : null}
        </div>
      ) : (
        <div className="space-y-4">
          {filtered.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <h2 className="text-lg font-semibold group-hover:text-primary transition-colors mb-2 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                    {post.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <time dateTime={post.dateISO}>{post.dateLabel}</time>
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readingTime}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className={cn(
                            "rounded border px-2 py-0.5 font-mono",
                            activeTags.includes(tag)
                              ? "border-primary/30 bg-primary/10 text-primary"
                              : "border-border/50 bg-muted/50",
                          )}
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
  );
}
