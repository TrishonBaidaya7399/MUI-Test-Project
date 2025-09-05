import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    "@storybook/addon-links",
    "@storybook/addon-controls",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
     defaultName: 'Documentation',
  },
  webpackFinal: async (config) => {
    config.resolve = config.resolve || {};
    config.resolve.alias = config.resolve.alias || {};
    config.resolve.alias["@mui/styled-engine"] = "@mui/styled-engine-sc";
    return config;
  },
};

export default config;
