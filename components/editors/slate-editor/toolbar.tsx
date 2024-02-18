import * as React from "react";

import { Card } from "@/components/ui/card";
import { Toggle } from "@/components/ui/toggle";
import {
  Bold,
  Code,
  Heading1,
  Heading2,
  Heading3,
  Italic,
  List,
  ListOrdered,
  Strikethrough,
  TextQuote,
  Type,
  Underline,
} from "lucide-react";
import { Element } from "slate";
import { useSlate } from "slate-react";
import { Mark, TEXT_ALIGN_TYPES } from "./constants";
import { isBlockActive, isMarkActive, toggleBlock, toggleMark } from "./utils";

export function Toolbar() {
  return (
    <Card className="mb-2">
      {/* <BlockButton format="paragraph">
        <Type size={20} />
      </BlockButton> */}
      <BlockButton format="heading-one">
        <Heading1 size={20} />
      </BlockButton>
      <BlockButton format="heading-two">
        <Heading2 size={20} />
      </BlockButton>
      <BlockButton format="heading-three">
        <Heading3 size={20} />
      </BlockButton>
      <BlockButton format="block-quote">
        <TextQuote size={20} />
      </BlockButton>
      <BlockButton format="bulleted-list">
        <List size={20} />
      </BlockButton>
      <BlockButton format="numbered-list">
        <ListOrdered size={20} />
      </BlockButton>
      <MarkButton format="bold">
        <Bold size={20} />
      </MarkButton>
      <MarkButton format="italic">
        <Italic size={20} />
      </MarkButton>
      <MarkButton format="underline">
        <Underline size={20} />
      </MarkButton>
      <MarkButton format="strikethrough">
        <Strikethrough size={20} />
      </MarkButton>
      <MarkButton format="code">
        <Code size={20} />
      </MarkButton>
    </Card>
  );
}

const MarkButton: React.FC<{
  format: Mark;
  children: React.ReactNode;
}> = ({ format, children }) => {
  const editor = useSlate();
  return (
    <Toggle
      pressed={isMarkActive(editor, format)}
      onPressedChange={(event) => {
        toggleMark(editor, format);
      }}
    >
      {children}
    </Toggle>
  );
};

const BlockButton: React.FC<{
  format: Element["type"];
  children: React.ReactNode;
}> = ({ format, children }) => {
  const editor = useSlate();
  return (
    <Toggle
      pressed={isBlockActive(
        editor,
        format,
        TEXT_ALIGN_TYPES.includes(format) ? "align" : "type"
      )}
      onPressedChange={() => {
        toggleBlock(editor, format);
      }}
    >
      {children}
    </Toggle>
  );
};
