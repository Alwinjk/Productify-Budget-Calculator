import prettier from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default [
  {
    ignores: ["node_modules/", "dist/"], // Ignore files and directories
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
    },
    rules: {
      // Equivalent to `eslint:recommended` rules
      "no-unused-vars": "warn",
      "no-undef": "error",
      "eqeqeq": "warn",
      "no-console": "off", // Example of turning off a recommended rule
    },
    plugins: {
      prettier,
    },
  },
  {
    // Prettier configuration to avoid conflicts
    ...prettierConfig,
  },
];
