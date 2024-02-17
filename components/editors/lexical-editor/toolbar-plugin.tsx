import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Toggle } from "@/components/ui/toggle";
import {
  INSERT_ORDERED_LIST_COMMAND,
  INSERT_UNORDERED_LIST_COMMAND,
} from "@lexical/list";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $createHeadingNode } from "@lexical/rich-text";
import { $setBlocksType } from "@lexical/selection";
import {
  $createParagraphNode,
  $getSelection,
  $isLineBreakNode,
  $isRangeSelection,
  $isTextNode,
  FORMAT_TEXT_COMMAND,
  REDO_COMMAND,
  UNDO_COMMAND,
} from "lexical";
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

export const eventTypes = {
  paragraph: "paragraph",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  ul: "ul",
  ol: "ol",
  formatCode: "formatCode",
  formatUndo: "formatUndo",
  formatRedo: "formatRedo",
  formatBold: "formatBold",
  formatItalic: "formatItalic",
  formatUnderline: "formatUnderline",
  formatStrikethrough: "formatStrikethrough",
};

export const useOnClickListener = () => {
  const [editor] = useLexicalComposerContext();

  // for heading tags
  const formatHeading = (tag: "h1" | "h2" | "h3") => {
    editor.update(() => {
      const selection = $getSelection();

      if ($isRangeSelection(selection)) {
        $setBlocksType(selection, () => $createHeadingNode(tag));
      }
    });
  };

  const formatParagraph = () => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        selection.getNodes().forEach((node) => {
          if ($isTextNode(node)) {
            node.setFormat(0);
            node.setStyle("");
          } else if ($isLineBreakNode(node)) {
            node.remove();
          }
        });
        $setBlocksType(selection, () => $createParagraphNode());
      }
    });
  };

  const onClick = (event: string) => {
    switch (event) {
      case eventTypes.paragraph:
        formatParagraph();
        break;

      case eventTypes.h1:
        formatHeading("h1");
        break;

      case eventTypes.h2:
        formatHeading("h2");
        break;

      case eventTypes.h3:
        formatHeading("h3");
        break;

      case eventTypes.ol:
        editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined);
        break;

      case eventTypes.ul:
        editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined);
        break;

      case eventTypes.formatCode:
        editor.dispatchCommand(FORMAT_TEXT_COMMAND, "code");
        break;

      case eventTypes.formatBold:
        editor.dispatchCommand(FORMAT_TEXT_COMMAND, "bold");
        break;

      case eventTypes.formatItalic:
        editor.dispatchCommand(FORMAT_TEXT_COMMAND, "italic");
        break;

      case eventTypes.formatUnderline:
        editor.dispatchCommand(FORMAT_TEXT_COMMAND, "underline");
        break;

      case eventTypes.formatUndo:
        editor.dispatchCommand(UNDO_COMMAND, undefined);
        break;

      case eventTypes.formatRedo:
        editor.dispatchCommand(REDO_COMMAND, undefined);
        break;

      case eventTypes.formatStrikethrough:
        editor.dispatchCommand(FORMAT_TEXT_COMMAND, "strikethrough");
        break;

      default:
        break;
    }
  };

  return { onClick };
};

export function ToolbarPlugin() {
  return (
    <Card className="mb-2">
      <LexicalToolbar />
    </Card>
  );
}

export function LexicalToolbar() {
  const { onClick } = useOnClickListener();

  return (
    <>
      <Button
        type="button"
        size="icon"
        variant="ghost"
        onClick={() => onClick(eventTypes.paragraph)}
      >
        <Type size={20} />
      </Button>
      <Button
        type="button"
        size="icon"
        variant="ghost"
        onClick={() => onClick(eventTypes.h1)}
      >
        <Heading1 size={20} />
      </Button>
      <Button
        type="button"
        size="icon"
        variant="ghost"
        onClick={() => onClick(eventTypes.h2)}
      >
        <Heading2 size={20} />
      </Button>
      <Button
        type="button"
        size="icon"
        variant="ghost"
        onClick={() => onClick(eventTypes.h3)}
      >
        <Heading3 size={20} />
      </Button>
      <Button
        type="button"
        size="icon"
        variant="ghost"
        onClick={() => onClick(eventTypes.ul)}
      >
        <List size={20} />
      </Button>
      <Button
        type="button"
        size="icon"
        variant="ghost"
        onClick={() => onClick(eventTypes.ol)}
      >
        <ListOrdered size={20} />
      </Button>
      <Toggle onClick={() => onClick(eventTypes.formatCode)}>
        <Code size={20} />
      </Toggle>
      <Button
        type="button"
        size="icon"
        variant="ghost"
        onClick={() => onClick(eventTypes.formatUndo)}
      >
        <Undo size={20} />
      </Button>
      <Button
        type="button"
        size="icon"
        variant="ghost"
        onClick={() => onClick(eventTypes.formatRedo)}
      >
        <Redo size={20} />
      </Button>
      <Toggle onClick={() => onClick(eventTypes.formatBold)}>
        <Bold size={20} />
      </Toggle>
      <Toggle onClick={() => onClick(eventTypes.formatItalic)}>
        <Italic size={20} />
      </Toggle>
      <Toggle onClick={() => onClick(eventTypes.formatUnderline)}>
        <Underline size={20} />
      </Toggle>
      <Toggle onClick={() => onClick(eventTypes.formatStrikethrough)}>
        <Strikethrough size={20} />
      </Toggle>
    </>
  );
}
