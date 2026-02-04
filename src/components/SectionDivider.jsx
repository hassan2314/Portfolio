import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useTheme as useCustomTheme } from "../context/ThemeContext";
import { monoFontFamily } from "../theme";

export default function SectionDivider({ label }) {
  const theme = useTheme();
  const { darkMode } = useCustomTheme();
  const color = darkMode ? theme.palette.grey[600] : theme.palette.grey[400];

  return (
    <Box
      sx={{
        py: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent",
      }}
    >
      <Typography
        component="span"
        sx={{
          fontFamily: monoFontFamily,
          fontSize: "0.75rem",
          color,
          letterSpacing: "0.1em",
        }}
      >
        // --- {label} ---
      </Typography>
    </Box>
  );
}
