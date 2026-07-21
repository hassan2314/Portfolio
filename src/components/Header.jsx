import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  useTheme,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { motion } from "framer-motion";
import { GitHub, LinkedIn, LightMode, DarkMode, Menu } from "@mui/icons-material";
import { useTheme as useCustomTheme } from "../context/ThemeContext";

const navItems = [
  "Home",
  "Experience",
  "Projects",
  "Skills",
  "Education",
  "Contact",
];

export default function Header() {
  const { darkMode, toggleTheme } = useCustomTheme();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDrawerToggle = () => setMobileOpen((v) => !v);
  const closeDrawer = () => setMobileOpen(false);

  const navButtons = (
    <>
      {navItems.map((item) => (
        <Button
          key={item}
          href={`#${item.toLowerCase()}`}
          onClick={closeDrawer}
          sx={{
            color: darkMode ? theme.palette.common.white : theme.palette.grey[700],
            "&:hover": {
              color: theme.palette.primary.main,
              backgroundColor: "transparent",
            },
            fontWeight: 500,
          }}
        >
          {item}
        </Button>
      ))}
    </>
  );

  const iconGroup = (
    <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
      <IconButton onClick={toggleTheme} sx={{ color: "inherit" }} aria-label="Toggle theme">
        {darkMode ? <LightMode /> : <DarkMode />}
      </IconButton>
      <IconButton href="https://github.com/hassan2314" target="_blank" sx={{ color: "inherit" }} aria-label="GitHub">
        <GitHub />
      </IconButton>
      <IconButton href="https://www.linkedin.com/in/hassan-ahmed-1595b12a6/" target="_blank" sx={{ color: "inherit" }} aria-label="LinkedIn">
        <LinkedIn />
      </IconButton>
    </Box>
  );

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backgroundColor: scrolled
            ? (darkMode ? "rgba(13, 17, 23, 0.92)" : "rgba(255, 255, 255, 0.92)")
            : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          color: scrolled ? (darkMode ? theme.palette.common.white : theme.palette.grey[900]) : "rgba(255,255,255,0.95)",
          transition: "background-color 0.3s ease, backdrop-filter 0.3s ease",
          borderBottom: scrolled
            ? `1px solid ${darkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"}`
            : "none",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between", minHeight: { xs: 56, sm: 64 } }}>
          <motion.div initial={{ x: -20 }} animate={{ x: 0 }} transition={{ duration: 0.4 }}>
            <Typography
              variant="h6"
              component="a"
              href="#home"
              sx={{
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
                "&:hover": { color: theme.palette.primary.main },
              }}
            >
              Hassan Ahmed
            </Typography>
          </motion.div>

          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 0.5 }}>
            {navButtons}
          </Box>

          <Box sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center" }}>
            {iconGroup}
          </Box>

          <IconButton
            sx={{ display: { xs: "flex", md: "none" }, color: "inherit" }}
            onClick={handleDrawerToggle}
            aria-label="Open menu"
          >
            <Menu />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            width: 280,
            boxSizing: "border-box",
            backgroundColor: darkMode ? theme.palette.grey[900] : theme.palette.background.paper,
            borderLeft: `1px solid ${darkMode ? theme.palette.grey[700] : theme.palette.grey[200]}`,
          },
        }}
      >
        <Box sx={{ pt: 2, pb: 2, px: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
            Menu
          </Typography>
          <List disablePadding>
            {navItems.map((item) => (
              <ListItem key={item} disablePadding sx={{ mb: 0.5 }}>
                <ListItemButton
                  component="a"
                  href={`#${item.toLowerCase()}`}
                  onClick={closeDrawer}
                  sx={{
                    borderRadius: 1,
                    "&:hover": { backgroundColor: theme.palette.primary.main + "20" },
                  }}
                >
                  <ListItemText primary={item} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Box sx={{ display: "flex", gap: 1, mt: 3 }}>
            <IconButton onClick={toggleTheme} sx={{ color: "inherit" }}>
              {darkMode ? <LightMode /> : <DarkMode />}
            </IconButton>
            <IconButton href="https://github.com/hassan2314" target="_blank" sx={{ color: "inherit" }}>
              <GitHub />
            </IconButton>
            <IconButton href="https://www.linkedin.com/in/hassan-ahmed-1595b12a6/" target="_blank" sx={{ color: "inherit" }}>
              <LinkedIn />
            </IconButton>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
