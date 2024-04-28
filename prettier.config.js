// prettier.config.js, .prettierrc.js, prettier.config.mjs, or .prettierrc.mjs

/** @type {import("prettier").Config} */
const config = {
  "plugins": [
    require("@trivago/prettier-plugin-sort-imports"),
    require("prettier-plugin-tailwindcss")
  ],
  "singleAttributePerLine": true,
  "semi": true,
  "importOrder": ["^components/(.*)$", "^[./]"],
  "importOrderSeparation": true,
  "importOrderSortSpecifiers": true
};

export default config;