import React from "react";

function EditorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="container max-w-screen-2xl">{children}</div>;
}

export default EditorLayout;
