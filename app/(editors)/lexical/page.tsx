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

      <h2>Demo</h2>

      <ul>
        <li>Highly extensible</li>
        <li>Reliable and performant</li>
        <li>Accessible</li>
        <li>Best-in-class developer experience</li>
      </ul>

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
