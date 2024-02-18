import dynamic from "next/dynamic";

export const FroalaEditor = dynamic(
  () => {
    return import("@/components/editors/froala-editor");
  },
  { ssr: false }
);
