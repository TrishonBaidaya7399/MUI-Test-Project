import type { Preview } from "@storybook/nextjs-vite";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { theme } from "../src/theme/theme";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/material-icons";

const preview: Preview = {
  parameters: {
    controls: {
      expanded: true, 
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};
export const decorators = [
  withThemeFromJSXProvider({
   themes: { dark: theme },
    defaultTheme: "light",
    Provider: ThemeProvider,
    GlobalStyles: CssBaseline,
  }),
];

export default preview;
