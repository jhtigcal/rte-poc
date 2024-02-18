import withMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
  env: {
    SURVEY_JS_LICENSE_KEY: process.env.SURVEY_JS_LICENSE_KEY,
    TINYMCE_API_KEY: process.env.TINYMCE_API_KEY,
  },
};

export default withMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeHighlight],
  },
})(nextConfig);
