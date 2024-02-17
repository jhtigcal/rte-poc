"use client";

import {
  InitialConfigType,
  LexicalComposer,
} from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";

import { CheckListPlugin } from "@lexical/react/LexicalCheckListPlugin";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { MarkdownShortcutPlugin } from "@lexical/react/LexicalMarkdownShortcutPlugin";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";

import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { AutoLinkNode, LinkNode } from "@lexical/link";
import { ListItemNode, ListNode } from "@lexical/list";
import { CHECK_LIST, TRANSFORMERS } from "@lexical/markdown";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { TableCellNode, TableNode, TableRowNode } from "@lexical/table";

import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { ToolbarPlugin } from "./toolbar-plugin";
import { PreventNewlinePlugin } from "./prevent-newline-plugin";

const lexicalEditorVariants = cva(
  "rounded-md overflow-auto border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        "single-line": "h-11 overflow-hidden",
        "multi-line": "min-h-44",
      },
    },
    defaultVariants: {
      variant: "multi-line",
    },
  }
);

const getTheme = (className?: string) => {
  return {
    root: cn("p-0 focus:outline-none relative", className),
    link: "cursor-pointer",
    text: {
      bold: "font-semibold",
      underline: "underline",
      italic: "italic",
      strikethrough: "line-through",
      underlineStrikethrough: "underlined-line-through",
    },
    paragraph: "!my-0",
    heading: {
      h1: "text-2xl font-bold",
      h2: "text-xl font-bold",
      h3: "text-lg font-bold",
      h4: "text-base font-bold",
      h5: "text-sm font-bold",
      h6: "text-xs font-bold",
    },
    list: {
      ul: "list-disc",
      ol: "list-decimal",
      listitem: "ml-2 list-inside",
      listitemUnchecked:
        "relative list-none before:checkbox before:checkbox-sm before:absolute before:-left-2 before:top-0.5 list-inside px-6 outline-none before:focus:outline-none",
      listitemChecked:
        "relative list-none before:checkbox before:checkbox-sm before:absolute before:-left-2 before:top-0.5 list-inside px-6 outline-none before:focus:outline-none",
    },
    image: "rounded-lg max-w-[90%] h-auto shadow shadow-md my-2 mx-auto",
  } satisfies InitialConfigType["theme"];
};

type EditorProps = {
  className?: string;
} & VariantProps<typeof lexicalEditorVariants>;

function Editor({ className, variant }: EditorProps) {
  return (
    <LexicalComposer
      initialConfig={{
        namespace: "CxLexicalEditor",
        theme: getTheme(className),
        onError: (error) => {
          console.error(error);
        },
        nodes: [
          HeadingNode,
          ListNode,
          ListItemNode,
          QuoteNode,
          CodeNode,
          CodeHighlightNode,
          TableNode,
          TableCellNode,
          TableRowNode,
          AutoLinkNode,
          LinkNode,
        ],
      }}
    >
      {variant !== "single-line" && <ToolbarPlugin />}
      <RichTextPlugin
        contentEditable={
          <ContentEditable
            className={cn(lexicalEditorVariants({ variant, className }))}
          />
        }
        ErrorBoundary={LexicalErrorBoundary}
        placeholder={null}
      />
      <HistoryPlugin />
      <CheckListPlugin />
      <MarkdownShortcutPlugin transformers={[...TRANSFORMERS, CHECK_LIST]} />
      {variant === "single-line" && <PreventNewlinePlugin />}
    </LexicalComposer>
  );
}

export { Editor as LexicalEditor };
