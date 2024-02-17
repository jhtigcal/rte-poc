"use client";

import { useEditor, EditorContent, BubbleMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";

import { NoNewLine } from "./no-newline-extension";
import { BubbleToolbar } from "./bubble-toolbar";
import Underline from "@tiptap/extension-underline";

const Editor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      NoNewLine,
      Document,
      Paragraph.configure({
        HTMLAttributes: {
          class: "my-0",
        },
      }),
      Text,
      Underline.configure({
        HTMLAttributes: {
          class: "underline",
        },
      }),
    ],
    editorProps: {
      attributes: {
        class:
          "rounded-md overflow-auto border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      },
    },
  });

  return (
    <>
      <BubbleToolbar editor={editor} />
      <EditorContent editor={editor} />
    </>
  );
};

export { Editor as TiptapEditor };
