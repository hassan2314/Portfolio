import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  useTheme,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";
import { GitHub, LinkedIn, LightMode, DarkMode } from "@mui/icons-material";
import { useTheme as useCustomTheme } from "../context/ThemeContext";

export default function Header() {
  const { darkMode, toggleTheme } = useCustomTheme();
  const theme = useTheme();
  const navItems = [
    "Home",
    "Education",
    "Experience",
    "Projects",
    "Skills",
    "Contact",
  ];

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: darkMode
          ? theme.palette.grey[900] // Dark mode color
          : "#ffffff", // Light mode color - pure white
        color: darkMode ? theme.palette.common.white : theme.palette.grey[900], // Dark text in light mode
        transition: "all 0.3s ease",
        boxShadow: darkMode ? "none" : "0 2px 4px rgba(0,0,0,0.1)", // Subtle shadow in light mode
        borderBottom: darkMode ? "none" : "1px solid rgba(0, 0, 0, 0.12)", // Subtle border in light mode
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontWeight: 700,
              color: darkMode
                ? theme.palette.common.white
                : theme.palette.primary.main, // Primary color for name in light mode
            }}
          >
            Hassan Ahmed
          </Typography>
        </motion.div>

        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          {navItems.map((item) => (
            <Button
              key={item}
              href={`#${item.toLowerCase()}`}
              sx={{
                color: darkMode
                  ? theme.palette.common.white
                  : theme.palette.grey[700], // Darker text for nav items
                "&:hover": {
                  color: theme.palette.primary.main, // Primary color on hover
                  backgroundColor: "transparent",
                },
                fontWeight: 500,
              }}
            >
              {item}
            </Button>
          ))}
        </Box>

        <motion.div
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          style={{ display: "flex", alignItems: "center" }}
        >
          <IconButton
            onClick={toggleTheme}
            sx={{
              color: darkMode
                ? theme.palette.common.white
                : theme.palette.grey[700],
            }}
          >
            {darkMode ? <LightMode /> : <DarkMode />}
          </IconButton>
          <IconButton
            href="https://github.com/hassan2314"
            target="_blank"
            sx={{
              color: darkMode
                ? theme.palette.common.white
                : theme.palette.grey[700],
            }}
          >
            <GitHub />
          </IconButton>
          <IconButton
            href="https://www.linkedin.com/in/hassan-ahmed-1595b12a6/"
            target="_blank"
            sx={{
              color: darkMode
                ? theme.palette.common.white
                : theme.palette.grey[700],
            }}
          >
            <LinkedIn />
          </IconButton>
        </motion.div>
      </Toolbar>
    </AppBar>
  );
}
