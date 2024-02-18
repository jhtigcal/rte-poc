"use client";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import * as Build from "@ckeditor/ckeditor5-build-classic";

function CustomEditor(props: { initialData?: string }) {
  return <CKEditor editor={Build.default} data={props.initialData} />;
}

export default CustomEditor;
