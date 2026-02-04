// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider, useTheme as useCustomTheme } from "./context/ThemeContext";
import { CssBaseline, ThemeProvider as MuiThemeProvider } from "@mui/material";
import { getAppTheme } from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root"));

function MuiThemeWrapper({ children }) {
  const { darkMode } = useCustomTheme();
  const theme = React.useMemo(() => getAppTheme(darkMode), [darkMode]);
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}

function ThemedApp() {
  return (
    <ThemeProvider>
      <MuiThemeWrapper>
        <App />
      </MuiThemeWrapper>
    </ThemeProvider>
  );
}

root.render(
  <React.StrictMode>
    <ThemedApp />
  </React.StrictMode>
);
