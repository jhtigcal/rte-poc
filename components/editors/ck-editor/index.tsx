"use client";

import { CKEditor } from "@ckeditor/ckeditor5-react";
// @ts-ignore
import { Editor } from "ckeditor5-custom-build";

function CustomEditor(props: { initialData?: string }) {
  return <CKEditor editor={Editor} data={props.initialData} />;
}

export default CustomEditor;
