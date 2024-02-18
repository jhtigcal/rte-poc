import { ClipboardPen, Github } from "lucide-react";
import Link from "next/link";
import { Navigation } from "./navigation";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <ClipboardPen className="h-6 w-6" />
          <div className="hidden font-bold sm:inline-block">
            rte.<span className="text-muted-foreground">poc</span>
          </div>
        </Link>
        <Navigation />
        <div className="flex gap-2">
          <a
            href="https://github.com/jhtigcal/rte-poc"
            target="_blank"
            rel="noopener noreferrer"
            title="Open in GitHub"
          >
            <Button
              type="button"
              variant="outline"
              size="icon"
              aria-label="GitHub repository"
            >
              <Github size={20} />
            </Button>
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
