import * as React from "react";

import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { mergeRegister } from "@lexical/utils";
import { LineBreakNode, RootNode } from "lexical";

export function PreventNewlinePlugin() {
  const [editor] = useLexicalComposerContext();

  React.useEffect(
    () =>
      mergeRegister(
        editor.registerNodeTransform(RootNode, (rootNode: RootNode) => {
          if (rootNode.getChildrenSize() <= 1) return;
          rootNode.getLastChild()?.remove();
        }),
        editor.registerNodeTransform(LineBreakNode, (node) => {
          node.remove();
        })
      ),
    [editor]
  );

  return null;
}
