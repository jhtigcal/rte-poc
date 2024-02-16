import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container max-w-screen-2xl flex items-center justify-center h-[calc(100vh-4rem)]">
      <div className="flex items-center space-x-4">
        <div className="border-r-[1px] border-foreground pr-8 mr-4">
          <h1>404</h1>
        </div>
        <div>
          <p className="!mt-0">Requested resource not found.</p>
          <Button
            asChild
            variant="link"
            className="p-0 font-normal text-base !h-fit m-0"
          >
            <Link href="/" className="flex items-center hover:underline">
              Return to home.
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
