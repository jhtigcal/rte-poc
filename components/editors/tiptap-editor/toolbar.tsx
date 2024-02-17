import { Card } from "@/components/ui/card";
import { Toggle } from "@/components/ui/toggle";
import { Editor } from "@tiptap/core";
import {
  Bold,
  Code,
  Heading1,
  Heading2,
  Heading3,
  Italic,
  List,
  ListOrdered,
  Redo,
  Strikethrough,
  Type,
  Underline,
  Undo,
} from "lucide-react";

export function TiptapToolbar({ editor }: { editor: Editor | null }) {
  if (!editor) return null;

  return (
    <Card className="mb-2">
      <Toggle
        pressed={editor.isActive("paragraph")}
        onPressedChange={() => {
          editor.chain().focus().setParagraph().run();
        }}
      >
        <Type size={20} />
      </Toggle>
      <Toggle
        pressed={editor.isActive("heading", { level: 1 })}
        onPressedChange={() => {
          editor.chain().focus().toggleHeading({ level: 1 }).run();
        }}
      >
        <Heading1 size={20} />
      </Toggle>
      <Toggle
        pressed={editor.isActive("heading", { level: 2 })}
        onPressedChange={() => {
          editor.chain().focus().toggleHeading({ level: 2 }).run();
        }}
      >
        <Heading2 size={20} />
      </Toggle>
      <Toggle
        pressed={editor.isActive("heading", { level: 3 })}
        onPressedChange={() => {
          editor.chain().focus().toggleHeading({ level: 3 }).run();
        }}
      >
        <Heading3 size={20} />
      </Toggle>
      <Toggle
        pressed={editor.isActive("bulletList")}
        onPressedChange={() => {
          editor.chain().focus().toggleBulletList().run();
        }}
      >
        <List size={20} />
      </Toggle>
      <Toggle
        pressed={editor.isActive("orderedList")}
        onPressedChange={() => {
          editor.chain().focus().toggleOrderedList().run();
        }}
      >
        <ListOrdered size={20} />
      </Toggle>
      <Toggle
        pressed={editor.isActive("codeBlock")}
        onPressedChange={() => {
          editor.chain().focus().toggleCodeBlock().run();
        }}
      >
        <Code size={20} />
      </Toggle>
      <Toggle
        onPressedChange={() => {
          editor.chain().focus().undo().run();
        }}
      >
        <Undo size={20} />
      </Toggle>
      <Toggle
        onPressedChange={() => {
          editor.chain().focus().redo().run();
        }}
      >
        <Redo size={20} />
      </Toggle>
      <Toggle
        pressed={editor.isActive("bold")}
        onPressedChange={() => {
          editor.chain().focus().toggleBold().run();
        }}
      >
        <Bold size={20} />
      </Toggle>
      <Toggle
        pressed={editor.isActive("italic")}
        onPressedChange={() => {
          editor.chain().focus().toggleItalic().run();
        }}
      >
        <Italic size={20} />
      </Toggle>
      <Toggle
        pressed={editor.isActive("underline")}
        onPressedChange={() => {
          editor.chain().focus().toggleUnderline().run();
        }}
      >
        <Underline size={20} />
      </Toggle>
      <Toggle
        pressed={editor.isActive("strike")}
        onPressedChange={() => {
          editor.chain().focus().toggleStrike().run();
        }}
      >
        <Strikethrough size={20} />
      </Toggle>
    </Card>
  );
}
