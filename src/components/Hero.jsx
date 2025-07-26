// components/Hero.jsx
import { Box, Typography, Button, Avatar, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTheme as useCustomTheme } from "../context/ThemeContext";

export default function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { darkMode } = useCustomTheme();
  const theme = useTheme();

  return (
    <Box
      id="home"
      ref={ref}
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "0 20px",
        background: darkMode
          ? "linear-gradient(135deg, #1a1a2e, #16213e)" // Dark mode gradient
          : "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)", // New light mode gradient
        color: darkMode ? "white" : "#f8f9fa", // Slightly off-white text in light mode
        transition: "all 0.3s ease",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated background elements */}
      <motion.div
        style={{
          position: "absolute",
          top: "20%",
          left: "10%",
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          background: darkMode
            ? "rgba(255,255,255,0.1)"
            : "rgba(255,255,255,0.2)", // More visible in light mode
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        style={{
          position: "absolute",
          bottom: "15%",
          right: "10%",
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          background: darkMode
            ? "rgba(255,255,255,0.1)"
            : "rgba(255,255,255,0.2)", // More visible in light mode
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: "40px",
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Avatar
            src="/Profile.jpg"
            alt="Hassan Ahmed"
            sx={{
              width: { xs: 200, md: 300 },
              height: { xs: 200, md: 300 },
              border: darkMode
                ? "5px solid white"
                : "5px solid rgba(255,255,255,0.8)", // Slightly transparent in light mode
              boxShadow: theme.shadows[10],
              marginBottom: { xs: "30px", md: 0 },
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          sx={{ textAlign: { xs: "center", md: "left" } }}
        >
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              color: darkMode ? "white" : "#ffffff", // Pure white for name
              textShadow: darkMode ? "none" : "0 2px 4px rgba(0,0,0,0.2)", // Subtle shadow in light mode
            }}
          >
            Hassan Ahmed
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              color: darkMode
                ? theme.palette.secondary.light
                : "rgba(255,255,255,0.9)", // Slightly transparent in light mode
              mb: 3,
              fontSize: { xs: "1.2rem", md: "1.5rem" },
            }}
          >
            Computer Science Graduate & Software Developer
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: "600px",
              margin: "0 auto 30px",
              fontSize: { xs: "1rem", md: "1.1rem" },
              color: darkMode ? "white" : "rgba(255,255,255,0.85)",
            }}
          >
            Passionate about building impactful, scalable solutions through
            code.
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: "20px",
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            <Button
              variant="contained"
              color={darkMode ? "secondary" : "primary"}
              size="large"
              href="#contact"
              sx={{
                "&:hover": {
                  transform: "translateY(-3px)",
                  boxShadow: theme.shadows[6],
                  backgroundColor: darkMode
                    ? theme.palette.secondary.dark
                    : theme.palette.primary.dark,
                },
                transition: "all 0.3s ease",
                color: "white",
              }}
            >
              Contact Me
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              size="large"
              href="#projects"
              sx={{
                "&:hover": {
                  transform: "translateY(-3px)",
                  boxShadow: theme.shadows[6],
                  backgroundColor: "rgba(255,255,255,0.15)",
                  borderColor: "rgba(255,255,255,0.8)",
                },
                transition: "all 0.3s ease",
                borderColor: "rgba(255,255,255,0.5)",
                color: "white",
              }}
            >
              View Projects
            </Button>
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
}
