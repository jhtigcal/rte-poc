// TypeScript users only add this code
import { BaseEditor, Descendant } from "slate";
import { ReactEditor } from "slate-react";

type ParagraphElement = { type: "paragraph"; children: ParagraphText[] };
type ParagraphText = { text: string };

type CodeElement = { type: "code"; children: Descendant[] };
type CodeText = { text: string };

declare module "slate" {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor;
    Element: ParagraphElement | CodeElement;
    Text: ParagraphText | CodeText;
  }
}
