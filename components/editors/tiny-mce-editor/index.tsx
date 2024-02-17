"use client";

import { Editor } from "@tinymce/tinymce-react";

export function TinyMceEditor() {
  return (
    <div className="mt-4">
      <Editor
        apiKey="yeyinuqe6xjo3vyr4am0mm79f1j1vsbh9nmywr9vko6j2c2s"
        tagName="textarea"
        initialValue="Welcome to TinyMCE!"
      />
    </div>
  );
}

export function TinyMceInlineEditor() {
  return (
    <div className="mt-4">
      <Editor
        apiKey="yeyinuqe6xjo3vyr4am0mm79f1j1vsbh9nmywr9vko6j2c2s"
        inline
        tagName="div"
        initialValue="Welcome to TinyMCE!"
      />
    </div>
  );
}
