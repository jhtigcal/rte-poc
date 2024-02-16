import { cn } from "@/lib/utils";
import Link from "next/link";

export function NavLink({
  href,
  active,
  children,
  className,
}: Readonly<{
  href: string;
  active: boolean;
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <Link
      href={href}
      className={cn(
        "transition-colors hover:text-foreground/80",
        active ? "text-foreground" : "text-foreground/60",
        className
      )}
    >
      {children}
    </Link>
  );
}
