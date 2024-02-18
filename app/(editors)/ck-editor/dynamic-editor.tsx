import dynamic from "next/dynamic";

const CKEditor = dynamic(
  () => {
    return import("@/components/editors/ck-editor");
  },
  { ssr: false }
);

export { CKEditor };
