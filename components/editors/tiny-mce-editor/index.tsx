"use client";

import { Editor } from "@tinymce/tinymce-react";

const API_KEY = process.env.NEXT_PUBLIC_TINYMCE_API_KEY;

export function TinyMceEditor() {
  return (
    <div className="mt-4">
      <Editor
        apiKey={API_KEY}
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
        apiKey={API_KEY}
        inline
        tagName="div"
        initialValue="Welcome to TinyMCE!"
      />
    </div>
  );
}
