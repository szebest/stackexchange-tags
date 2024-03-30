import { createTheme } from "@mui/material";

export const defaultTheme = createTheme({
  typography: {
    fontFamily: "Sora, sans-serif",
  },
  palette: {
    primary: {
      main: "#333333",
      dark: "#1a1a1a",
      light: "#666666",
    },
    secondary: {
      main: "#757575",
      dark: "#555555",
      light: "#a0a0a0",
    },
    error: {
      main: "#b71c1c",
      dark: "#7f0000",
      light: "#e57373",
    },
    warning: {
      main: "#ff9800",
      dark: "#f57c00",
      light: "#ffb74d",
    },
    info: {
      main: "#1a7ab8",
      dark: "#13548e",
      light: "#4a8fc9",
    },
    success: {
      main: "#4caf50",
      dark: "#388e3c",
      light: "#81c784",
    },
    background: {
      paper: "#ffffff",
      default: "#f5f5f5",
    },
    text: {
      primary: "#212121",
      secondary: "#888888",
      disabled: "#bdbdbd",
    },
  },
});
