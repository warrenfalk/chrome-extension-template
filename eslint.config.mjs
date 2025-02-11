import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";


export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      "array-element-newline": ["error", { "ArrayExpression": "consistent", "ArrayPattern": { "minItems": 1 } }],
      "object-curly-newline": ["error", { "ObjectExpression": { "multiline": true, "consistent": true }, "ObjectPattern": { "multiline": true, "consistent": true } }],
    }
  }
];