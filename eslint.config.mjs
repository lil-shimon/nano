// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format

import nextVitals from "eslint-config-next/core-web-vitals";
import storybook from "eslint-plugin-storybook";

const eslintConfig = [
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
  ...nextVitals,
  ...storybook.configs["flat/recommended"],
];

export default eslintConfig;
