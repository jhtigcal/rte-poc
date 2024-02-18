"use client";

import { usePathname } from "next/navigation";
import { NavLink } from "./navlink";

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-6 text-sm">
      <NavLink href="/ck-editor" active={pathname === "/ck-editor"}>
        CKEditor
      </NavLink>
      <NavLink href="/tiny-mce" active={pathname === "/tiny-mce"}>
        TinyMCE
      </NavLink>
      <NavLink href="/froala" active={pathname === "/froala"}>
        Froala
      </NavLink>
      <NavLink href="/tiptap" active={pathname === "/tiptap"}>
        Tiptap
      </NavLink>
      <NavLink href="/lexical" active={pathname === "/lexical"}>
        Lexical
      </NavLink>
      <NavLink href="/slate" active={pathname === "/slate"}>
        Slate
      </NavLink>
    </nav>
  );
}
