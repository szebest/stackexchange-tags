import React from "react";
import type { Preview } from "@storybook/react";
import { ThemeProvider } from "@mui/material";

import { defaultTheme } from "../src/theme";

import "../src/index.scss";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const withMuiTheme = (Story) => (
  <ThemeProvider theme={defaultTheme}>
    <Story />
  </ThemeProvider>
);

export const decorators = [withMuiTheme];

export default preview;
