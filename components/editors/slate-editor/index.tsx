"use client";

import * as React from "react";

import isHotkey from "is-hotkey";
import { createEditor } from "slate";
import { withHistory } from "slate-history";
import {
  Editable,
  RenderElementProps,
  RenderLeafProps,
  Slate,
  withReact,
} from "slate-react";
import { Element, Leaf } from "./components";
import { HOTKEYS, Hotkey } from "./constants";
import { Toolbar } from "./toolbar";
import { toggleMark } from "./utils";

export default function SlateEditor() {
  const renderElement = React.useCallback(
    (props: RenderElementProps) => <Element {...props} />,
    []
  );
  const renderLeaf = React.useCallback(
    (props: RenderLeafProps) => <Leaf {...props} />,
    []
  );
  const editor = React.useMemo(
    () => withHistory(withReact(createEditor())),
    []
  );

  return (
    <Slate
      editor={editor}
      initialValue={[
        {
          type: "paragraph",
          children: [{ text: "" }],
        },
      ]}
    >
      <Toolbar />
      <Editable
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        className="rounded-md border border-input bg-background min-h-44 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        spellCheck
        onKeyDown={(event) => {
          for (const hotkey in HOTKEYS) {
            if (isHotkey(hotkey, event as any)) {
              event.preventDefault();
              const mark = HOTKEYS[hotkey as Hotkey];
              toggleMark(editor, mark);
            }
          }
        }}
      />
    </Slate>
  );
}
