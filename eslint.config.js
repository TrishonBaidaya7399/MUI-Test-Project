import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    ignores: [".config/*", "node_modules"],
  },
  {
    plugins: ["regexp"],
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "no-unused-vars": "off",
      "no-console": "off",
      "react/prop-types": "off",
      "no-case-declarations": "off",
      "react/no-unknown-property": "off",
      curly: "error",
      "react/jsx-uses-react": "off", 
      "react/react-in-jsx-scope": "off", 
      "@typescript-eslint/no-require-imports": "warn",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "react/no-children-prop": "off",
      "@typescript-eslint/no-unnecessary-type-constraint": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      eqeqeq: "warn",

      // Prevent hard-coded colors in sx
      "no-restricted-syntax": [
        "error",
        {
          selector:
            "JSXAttribute[name.name='sx'] Literal[value=/(#[0-9a-fA-F]{3,8}|rgba\\(|hsl\\(|var\\(--)/]",
          message: "No hard-coded color in sx; use theme.palette",
        },
        {
          selector: "JSXAttribute[name.name='sx'] Literal[value=/[0-9]+px/]",
          message: "No px in sx; use numeric theme spacing",
        },
      ],

      // Prevent dangerous HTML
      "react/no-danger": "error",

      // Prevent heavy imports / enforce tree-shaking
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            "@mui/icons-material",
            "@mui/icons-material/*/*/*",
            "@mui/material/*/*/*",
          ],
        },
      ],
    },
  },
];
