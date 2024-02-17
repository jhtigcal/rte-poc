import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import { Pre, Code } from "./components/code";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    a: (props) => {
      // @ts-ignore
      return <Link {...props} className="underline" />;
    },
    pre: (props) => {
      return <Pre {...props} />;
    },
    code: (props) => {
      return <Code {...props} />;
    },
  };
}
