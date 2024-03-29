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
      main: "#2196f3",
      dark: "#1976d2",
      light: "#64b5f6",
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
      secondary: "#757575",
      disabled: "#bdbdbd",
    },
  },
});
