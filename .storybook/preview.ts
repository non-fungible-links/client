import type { Preview } from "@storybook/react";

import { createGlobalStyle, ThemeProvider } from "styled-components";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";

/* TODO: update import for your custom theme configurations */
import { lightTheme, darkTheme } from "../components/theme";

/* TODO: replace with your own global styles, or remove */
const GlobalStyles = createGlobalStyle`
    html,
    body {
      padding: 0;
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }

    * {
      font-family: "Quicksand";
    }

    p {
      margin: 0;
      padding: 0;
      border: 0;
      vertical-align: baseline;
    }
  `;

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  decorators: [
    withThemeFromJSXProvider({
      themes: {
        light: lightTheme,
        dark: darkTheme,
      },
      defaultTheme: "light",
      Provider: ThemeProvider,
      GlobalStyles,
    }),
  ],
};

export default preview;
