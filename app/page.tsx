import { DemoEditor } from "@/components/editors/demo-editor";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container max-w-screen-2xl">
      <h1>Welcome</h1>
      <p>
        Today, we are evaluating six rich text editor packages. We will be
        taking a look at their upsides, downsides, and how they fare overall in
        our ever-growing ecosystem.
      </p>
      <p>Here are the editors we will be evaluating:</p>
      <ul className="[&>li]:underline">
        <li>
          <Link href="/tiny-mce">TinyMCE</Link>
        </li>
        <li>
          <Link href="/tiptap">Tiptap</Link>
        </li>
        <li>
          <Link href="/lexical">Lexical</Link>
        </li>
        <li>
          <Link href="/froala">Froala</Link>
        </li>
        <li>
          <Link href="/ck-editor">CK Editor</Link>
        </li>
        <li>
          <Link href="/slate">Slate</Link>
        </li>
      </ul>
      <p>We will be looking at the following criteria for each editor:</p>
      <ul>
        <li>Ease of installation</li>
        <li>Styling and customization</li>
        <li>Documentation</li>
        <li>Features</li>
        <li>Integration with Survey JS</li>
      </ul>
      <p>
        We will also be looking into trying to mold the rich text editors as
        close to the following components as possible:
      </p>
      <DemoEditor />
    </div>
  );
}
