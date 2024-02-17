import { cn } from "@/lib/utils";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";

export type PreProps = React.HTMLAttributes<HTMLPreElement>;

export const Pre: React.FC<PreProps> = ({ className, ...props }) => {
  return (
    <ScrollArea
      className={cn(
        "mb-4 mt-6 overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900 p-4",
        className
      )}
    >
      <pre {...props} className="overflow-y-hidden" />
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};

export type CodeProps = React.HTMLAttributes<HTMLElement>;

export const Code: React.FC<CodeProps> = ({ className, ...props }) => {
  return (
    <code
      className={cn(
        "relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm",
        className
      )}
      {...props}
    />
  );
};
