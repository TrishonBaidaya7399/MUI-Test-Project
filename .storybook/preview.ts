import type { Preview } from "@storybook/react";
import { theme } from "../src/theme/theme";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: { theme },
    a11y: { element: "#root" },
  },
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
};

export default preview;
