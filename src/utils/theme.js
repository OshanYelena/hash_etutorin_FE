import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#2E72B3",
      darkBlue: "#280C9B",
      dark: "#000000",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#280C9B",
      // light: "#137E67",
      dark: "#909090",
      // contrastText: "#FFB84D",
      semiDark: "#D9D9D9",
    },
    transparent: {
      main: "transparent",
    },
    inherit: {
      main: "#ffffff",
    },
    info: {
      main: "#0284c7",
    },
    error: {
      main: "#FF1010",
    },
    warning: {
      main: "#b91c1c",
    },
    success: {
      main: "#21125B",
    },
  },
});
