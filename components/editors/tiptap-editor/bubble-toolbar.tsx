import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Editor } from "@tiptap/core";
import { BubbleMenu } from "@tiptap/react";
import { Bold, Italic, Strikethrough, Underline } from "lucide-react";

export function BubbleToolbar({ editor }: { editor: Editor | null }) {
  if (!editor) return null;

  return (
    <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
      <Card>
        <Button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          size="icon"
          variant="ghost"
        >
          <Bold size={20} />
        </Button>

        <Button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          size="icon"
          variant="ghost"
        >
          <Italic size={20} />
        </Button>

        <Button
          type="button"
          onClick={() => editor.chain().focus().toggleStrike().run()}
          size="icon"
          variant="ghost"
        >
          <Strikethrough size={20} />
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          size="icon"
          variant="ghost"
        >
          <Underline size={20} />
        </Button>
      </Card>
    </BubbleMenu>
  );
}
