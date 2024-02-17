import { TinyMceEditor } from "@/components/editors/tiny-mce-editor";

export default function TinyMcePage() {
  return (
    <div>
      <h1>TinyMCE</h1>
      <p>
        TinyMCE is a platform-independent web-based JavaScript HTML WYSIWYG
        editor control released as open-source software.
      </p>

      <br />

      <h2 className="mb-2">Demo</h2>
      <TinyMceEditor />
    </div>
  );
}
