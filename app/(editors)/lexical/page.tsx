import { LexicalEditor } from "@/components/editors/lexical-editor";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

function LexicalPage() {
  return (
    <div>
      <h1>Lexical</h1>
      <p>
        Lexical is an extensible JavaScript web text-editor framework with an
        emphasis on reliability, accessibility, and performance. Lexical aims to
        provide a best-in-class developer experience, so you can easily
        prototype and build features with confidence. Combined with a highly
        extensible architecture, Lexical allows developers to create unique text
        editing experiences that scale in size and functionality.
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
          <LexicalEditor variant="single-line" />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Full</CardTitle>
          <CardDescription>
            A multiline editor with dedicated toolbar.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <LexicalEditor />
        </CardContent>
      </Card>

      <br />

      <h2>Documentation</h2>

      <p>
        You can find the documentation for Lexical{" "}
        <a
          href="https://lexical.dev/docs/intro"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          here
        </a>
        .
      </p>
    </div>
  );
}

export default LexicalPage;
