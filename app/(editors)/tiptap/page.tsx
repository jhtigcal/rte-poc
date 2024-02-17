import {
  MultilineTiptapEditor,
  SingleLineTiptapEditor,
} from "@/components/editors/tiptap-editor";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function TiptapPage() {
  return (
    <div>
      <h1>Tiptap</h1>
      <p>
        Tiptap is a headless wrapper around ProseMirror – a toolkit for building
        rich text WYSIWYG editors, which is already in use at many well-known
        companies such as New York Times, The Guardian or Atlassian.
      </p>

      <br />

      <h2 className="mb-2">Demo</h2>

      <Card className="mb-2">
        <CardHeader>
          <CardTitle>Collapsed</CardTitle>
          <CardDescription>
            A single line editor with basic markdown support.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SingleLineTiptapEditor />
        </CardContent>
      </Card>

      <Card className="mb-2">
        <CardHeader>
          <CardTitle>Full</CardTitle>
          <CardDescription>
            A multiline editor with dedicated toolbar.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <MultilineTiptapEditor />
        </CardContent>
      </Card>
    </div>
  );
}
