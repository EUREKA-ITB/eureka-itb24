// import withMDX from "@next/mdx";

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   // Configure `pageExtensions` to include MDX files
//   pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],

//   output: "export",
//   images: { unoptimized: true },
// };

// export default withMDX(nextConfig);

const withMDX = require("@next/mdx")();

module.exports = (phase, { defaultConfig }) => {
  return withMDX({
    output: "export",
    images: { unoptimized: true },
    pageExtensions: ["ts", "tsx", "js", "jsx", "mdx"],
  });
};
