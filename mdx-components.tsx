import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import { Pre, Code } from "./components/code";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
} from "./components/ui/table";

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
    table: (props) => {
      return (
        // @ts-ignore
        <Table {...props} />
      );
    },
    thead: (props) => {
      // @ts-ignore
      return <TableHeader {...props} />;
    },
    th: (props) => {
      // @ts-ignore
      return <TableHead {...props} />;
    },
    tbody: (props) => {
      // @ts-ignore
      return <TableBody {...props} />;
    },
    td: (props) => {
      // @ts-ignore
      return <TableCell {...props} />;
    },
  };
}
