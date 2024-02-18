"use client";

import * as React from "react";

import { Descendant, createEditor, Editor, Transforms, Element } from "slate";
import { Slate, Editable, withReact, RenderElementProps } from "slate-react";

const initialValue: Descendant[] = [
  {
    type: "paragraph",
    children: [{ text: "A line of text in a paragraph." }],
  },
];

const EditorComponent = () => {
  // Create a Slate editor object that won't change across renders.
  const [editor] = React.useState(() => withReact(createEditor()));

  const renderElement = React.useCallback((props: RenderElementProps) => {
    switch (props.element.type) {
      case "code":
        return <CodeElement {...props} />;
      default:
        return <DefaultElement {...props} />;
    }
  }, []);

  return (
    <Slate editor={editor} initialValue={initialValue}>
      <Editable
        renderElement={renderElement}
        onKeyDown={(event) => {
          if (!event.ctrlKey) {
            return;
          }

          switch (event.key) {
            // When "`" is pressed, keep our existing code block logic.
            case "`": {
              event.preventDefault();
              // @ts-ignore
              const [match] = Editor.nodes(editor, {
                // @ts-ignore
                match: (n) => n.type === "code",
              });
              Transforms.setNodes(
                editor,
                { type: match ? "paragraph" : "code" },
                // @ts-ignore
                { match: (n) => Editor.isBlock(editor, n) }
              );
              break;
            }

            // When "B" is pressed, bold the text in the selection.
            case "b": {
              event.preventDefault();
              Editor.addMark(editor, "bold", true);
              break;
            }
          }
        }}
      />
    </Slate>
  );
};

const CodeElement = (props: {
  attributes: React.HTMLAttributes<HTMLPreElement>;
  children: React.ReactNode;
}) => {
  return (
    <pre {...props.attributes}>
      <code>{props.children}</code>
    </pre>
  );
};

const DefaultElement = (props: {
  attributes: React.HTMLAttributes<HTMLParagraphElement>;
  children: React.ReactNode;
}) => {
  return <p {...props.attributes}>{props.children}</p>;
};

export { EditorComponent as SlateEditor };
