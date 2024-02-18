"use client";

import FroalaEditor from "react-froala-wysiwyg";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";

function Editor() {
  return <FroalaEditor tag="textarea" />;
}

export { Editor as FroalaEditor };
