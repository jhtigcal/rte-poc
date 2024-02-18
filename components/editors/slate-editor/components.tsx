import { RenderElementProps, RenderLeafProps } from "slate-react";

export const Element = ({
  attributes,
  children,
  element,
}: RenderElementProps) => {
  switch (element.type) {
    case "block-quote":
      return <blockquote {...attributes}>{children}</blockquote>;
    case "bulleted-list":
      return <ul {...attributes}>{children}</ul>;
    case "heading-one":
      return <h1 {...attributes}>{children}</h1>;
    case "heading-two":
      return <h2 {...attributes}>{children}</h2>;
    case "heading-three":
      return <h3 {...attributes}>{children}</h3>;
    case "list-item":
      return <li {...attributes}>{children}</li>;
    case "numbered-list":
      return <ol {...attributes}>{children}</ol>;
    default:
      return <p {...attributes}>{children}</p>;
  }
};

export const Leaf = ({ attributes, children, leaf }: RenderLeafProps) => {
  if ("bold" in leaf && leaf.bold) {
    children = <strong>{children}</strong>;
  }

  if ("code" in leaf && leaf.code) {
    children = <code>{children}</code>;
  }

  if ("italic" in leaf && leaf.italic) {
    children = <em>{children}</em>;
  }

  if ("underline" in leaf && leaf.underline) {
    children = <u>{children}</u>;
  }

  if ("strikethrough" in leaf && leaf.strikethrough) {
    children = <s>{children}</s>;
  }

  return <span {...attributes}>{children}</span>;
};
