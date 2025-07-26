// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";
import {
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById("root"));

function ThemedApp() {
  return (
    <ThemeProvider>
      <MuiThemeProvider theme={createTheme()}>
        <CssBaseline />
        <App />
      </MuiThemeProvider>
    </ThemeProvider>
  );
}

root.render(
  <React.StrictMode>
    <ThemedApp />
  </React.StrictMode>
);
