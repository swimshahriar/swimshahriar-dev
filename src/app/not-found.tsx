import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Terminal } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 grid-background" />
      <div className="relative z-10 text-center px-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-primary/20 bg-primary/5 mx-auto mb-6">
          <Terminal className="h-8 w-8 text-primary" />
        </div>
        <h1 className="font-mono text-6xl font-bold gradient-text mb-4">404</h1>
        <p className="font-mono text-lg text-muted-foreground mb-2">
          Page not found
        </p>
        <p className="text-sm text-muted-foreground mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Button asChild className="font-mono text-sm cursor-pointer">
          <Link href="/">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back Home
          </Link>
        </Button>
      </div>
    </main>
  );
}
