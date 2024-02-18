import { SiteHeader } from "@/components/site-header";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./mdx.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "POC | Rich Text Editors",
  description: "Just another POC for rich text editors",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SiteHeader />
          <main className="my-12">
            <div className="container max-w-screen-xl">{children}</div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
