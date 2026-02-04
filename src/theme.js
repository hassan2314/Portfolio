import { createTheme } from "@mui/material/styles";

const accent = {
  main: "#00d4aa",
  light: "#5effd4",
  dark: "#00a080",
};

export function getAppTheme(darkMode) {
  return createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: darkMode ? "#00d4aa" : "#00997a",
        light: darkMode ? "#5effd4" : "#00b386",
        dark: darkMode ? "#00a080" : "#006b52",
      },
      secondary: {
        main: darkMode ? "#7c4dff" : "#5e35b1",
        light: darkMode ? "#b47cff" : "#9162e4",
        dark: darkMode ? "#3d1eb8" : "#4527a0",
      },
      background: {
        default: darkMode ? "#0d1117" : "#f6f8fa",
        paper: darkMode ? "#161b22" : "#ffffff",
      },
      grey: darkMode
        ? {
            50: "#f0f6fc",
            100: "#c9d1d9",
            200: "#b1bac4",
            300: "#8b949e",
            400: "#6e7681",
            500: "#484f58",
            600: "#30363d",
            700: "#21262d",
            800: "#161b22",
            900: "#0d1117",
          }
        : undefined,
    },
    typography: {
      fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif',
      h1: { fontFamily: '"Plus Jakarta Sans", sans-serif' },
      h2: { fontFamily: '"Plus Jakarta Sans", sans-serif' },
      h3: { fontFamily: '"Plus Jakarta Sans", sans-serif' },
      h4: { fontFamily: '"Plus Jakarta Sans", sans-serif' },
      h5: { fontFamily: '"Plus Jakarta Sans", sans-serif' },
      h6: { fontFamily: '"Plus Jakarta Sans", sans-serif' },
      body1: { fontFamily: '"Plus Jakarta Sans", sans-serif' },
      body2: { fontFamily: '"Plus Jakarta Sans", sans-serif' },
      button: { fontFamily: '"Plus Jakarta Sans", sans-serif' },
    },
    shape: {
      borderRadius: 8,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          "@global": {
            "@font-face": [],
          },
        },
      },
    },
  });
}

export const monoFontFamily = '"JetBrains Mono", "Fira Code", monospace';
export const accentColor = accent;
