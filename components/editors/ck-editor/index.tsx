"use client";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import * as CKEditor5CustomBuild from "ckeditor5-custom-build";

function CustomEditor(props: { initialData?: string }) {
  return (
    <CKEditor
      editor={CKEditor5CustomBuild.default.Editor}
      data={props.initialData}
    />
  );
}

export default CustomEditor;
