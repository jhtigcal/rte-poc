import {
  Bold,
  BoldIcon,
  Code,
  Heading1,
  Heading2,
  Heading3,
  Italic,
  List,
  ListOrdered,
  Redo,
  Strikethrough,
  Type,
  Underline,
  Undo,
} from "lucide-react";
import { Input } from "../ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Toggle } from "../ui/toggle";
import { Textarea } from "../ui/textarea";
import { Card, CardContent } from "../ui/card";

export function DemoEditor() {
  return (
    <div className="mt-8">
      <h3>Single-line editor with basic markdown support</h3>
      <small>For titles that need formatting.</small>
      <div className="mt-4 mb-8">
        <Input />
      </div>
      <h3>Rich text editor with dedicated toolbar</h3>
      <small>For ultra long description.</small>
      <div className="mt-4">
        <Card className="mb-2">
          <CardContent className="p-0 flex items-center justify-start">
            <Toolbar />
          </CardContent>
        </Card>
        <Textarea className="mb-8" rows={20} />
      </div>
    </div>
  );
}

function Toolbar() {
  return (
    <>
      <Toggle>
        <Type size={20} />
      </Toggle>
      <Toggle>
        <Heading1 size={20} />
      </Toggle>
      <Toggle>
        <Heading2 size={20} />
      </Toggle>
      <Toggle>
        <Heading3 size={20} />
      </Toggle>
      <Toggle>
        <List size={20} />
      </Toggle>
      <Toggle>
        <ListOrdered size={20} />
      </Toggle>
      <Toggle>
        <Code size={20} />
      </Toggle>
      <Toggle>
        <Undo size={20} />
      </Toggle>
      <Toggle>
        <Redo size={20} />
      </Toggle>
      <Toggle>
        <Bold size={20} />
      </Toggle>
      <Toggle>
        <Italic size={20} />
      </Toggle>
      <Toggle>
        <Underline size={20} />
      </Toggle>
      <Toggle>
        <Strikethrough size={20} />
      </Toggle>
    </>
  );
}
