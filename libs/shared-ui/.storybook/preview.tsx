import React from "react";
import type { Preview } from "@storybook/react";
// import { ThemeProvider } from "@mui/material";
import { muiTheme } from "../src/theme/muiTheme";
import { ThemeProvider } from "@mui/material";


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
  <ThemeProvider theme={muiTheme}>
    <Story />
  </ThemeProvider>
);


export const decorators = [withMuiTheme];

export default preview;
