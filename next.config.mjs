// import withMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  // pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],

  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;

// const withMDX = require("@next/mdx")();

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   // Configure `pageExtensions` to include MDX files
//   pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
//   // Optionally, add any other Next.js config below
// };

// module.exports = withMDX(nextConfig);
