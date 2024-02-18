import { Editor, Transforms, Element as SlateElement } from "slate";
import { LIST_TYPES, Mark, TEXT_ALIGN_TYPES } from "./constants";
import { CustomText } from "./slate";

export const isBlockActive = (
  editor: Editor,
  format: SlateElement["type"],
  blockType: "align" | "type" = "type"
) => {
  const { selection } = editor;
  if (!selection) return false;

  const [match] = Array.from(
    Editor.nodes(editor, {
      at: Editor.unhangRange(editor, selection),
      match: (n) =>
        !Editor.isEditor(n) &&
        SlateElement.isElement(n) &&
        // @ts-expect-error
        n[blockType] === format,
    })
  );

  return !!match;
};

export const toggleBlock = (editor: Editor, format: SlateElement["type"]) => {
  const isActive = isBlockActive(
    editor,
    format,
    TEXT_ALIGN_TYPES.includes(format) ? "align" : "type"
  );
  const isList = LIST_TYPES.includes(format);

  Transforms.unwrapNodes(editor, {
    match: (n) =>
      !Editor.isEditor(n) &&
      SlateElement.isElement(n) &&
      LIST_TYPES.includes(n.type) &&
      !TEXT_ALIGN_TYPES.includes(format),
    split: true,
  });
  let newProperties: Partial<SlateElement>;
  if (TEXT_ALIGN_TYPES.includes(format)) {
    newProperties = {
      align: isActive ? undefined : format,
    };
  } else {
    newProperties = {
      type: isActive ? "paragraph" : isList ? "list-item" : format,
    };
    Transforms.setNodes<SlateElement>(editor, newProperties);

    if (!isActive && isList) {
      const block: {
        type: "code-line";
        children: SlateElement["children"];
      } = { type: format as "code-line", children: [] };

      Transforms.wrapNodes(editor, block);
    }
  }
};

export const toggleMark = (editor: Editor, format: Mark) => {
  const isActive = isMarkActive(editor, format);

  if (isActive) {
    Editor.removeMark(editor, format);
  } else {
    Editor.addMark(editor, format, true);
  }
};

export const isMarkActive = (editor: Editor, format: Mark) => {
  const marks = Editor.marks(editor) as CustomText;

  return marks ? marks[format] === true : false;
};
