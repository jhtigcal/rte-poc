import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export const EditorCard = ({
  type = "full",
  children,
}: {
  type: "collapsed" | "full";
  children: React.ReactNode;
}) => {
  return (
    <Card className="mb-2">
      <CardHeader>
        <CardTitle>{type === "collapsed" ? "Collapsed" : "Full"}</CardTitle>
        <CardDescription>
          {type === "collapsed"
            ? "A single line editor with basic markdown support."
            : "A full fledged rich text editor."}
        </CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};
