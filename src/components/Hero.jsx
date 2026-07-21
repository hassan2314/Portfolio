// components/Hero.jsx
import { Box, Typography, Button, Avatar, useTheme } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTheme as useCustomTheme } from "../context/ThemeContext";
import { monoFontFamily } from "../theme";

const terminalLines = [
  "> whoami",
  "Hassan Ahmed",
  "> role",
  "Full Stack Developer · Next.js · NestJS",
];

export default function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { darkMode } = useCustomTheme();
  const theme = useTheme();
  const accent = theme.palette.primary.main;

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
          ? "linear-gradient(135deg, #0d1117 0%, #161b22 50%, #0d1117 100%)"
          : "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
        color: darkMode ? "#c9d1d9" : "#e2e8f0",
        transition: "all 0.3s ease",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Grid / mesh background */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(0, 212, 170, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 170, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(0, 212, 170, 0.08), transparent)",
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
          gap: { xs: "32px", md: "48px" },
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
              width: { xs: 180, md: 260 },
              height: { xs: 180, md: 260 },
              border: `4px solid ${accent}`,
              boxShadow: `0 0 40px ${accent}40`,
              marginBottom: { xs: "24px", md: 0 },
            }}
          />
        </motion.div>

        <Box sx={{ textAlign: { xs: "center", md: "left" }, flex: 1 }}>
          {/* Terminal block */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            sx={{
              fontFamily: monoFontFamily,
              fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1rem" },
              textAlign: "left",
              maxWidth: "420px",
              margin: { xs: "0 auto 24px", md: "0 0 24px" },
              padding: "16px 20px",
              borderRadius: "8px",
              border: `1px solid ${darkMode ? "rgba(0, 212, 170, 0.25)" : "rgba(0, 212, 170, 0.4)"}`,
              backgroundColor: darkMode ? "rgba(0, 0, 0, 0.35)" : "rgba(0, 0, 0, 0.25)",
              boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
            }}
          >
            {terminalLines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.35, delay: 0.15 + i * 0.12 }}
                style={{
                  color: i % 2 === 0 ? accent : "inherit",
                  marginBottom: i < terminalLines.length - 1 ? 6 : 0,
                }}
              >
                {line}
                {i === terminalLines.length - 1 && (
                  <span className="terminal-cursor" aria-hidden="true" />
                )}
              </motion.div>
            ))}
          </Box>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Typography
              variant="h2"
              gutterBottom
              sx={{
                fontWeight: 700,
                fontSize: { xs: "2.25rem", md: "3.25rem" },
                color: "white",
                textShadow: `0 0 40px ${accent}50`,
                fontFamily: '"Plus Jakarta Sans", sans-serif',
              }}
            >
              Hassan Ahmed
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                color: "rgba(255,255,255,0.85)",
                mb: 2,
                fontSize: { xs: "1.1rem", md: "1.35rem" },
              }}
            >
              Full Stack Developer · Next.js · NestJS · PostgreSQL
            </Typography>
            <Typography
              variant="body1"
              sx={{
                maxWidth: "600px",
                margin: "0 auto 28px",
                fontSize: { xs: "0.95rem", md: "1.05rem" },
                color: "rgba(255,255,255,0.75)",
              }}
            >
              Building production platforms serving 50,000+ users — REST APIs,
              secure auth, AI service integration, and admin tooling with Next.js,
              NestJS, and PostgreSQL.
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "12px",
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              <Button
                variant="contained"
                color="primary"
                size="large"
                href="#contact"
                sx={{
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: `0 8px 24px ${accent}40`,
                  },
                  transition: "all 0.25s ease",
                  color: "#0d1117",
                  fontWeight: 600,
                }}
              >
                Contact Me
              </Button>
              <Button
                variant="outlined"
                size="large"
                href="#projects"
                sx={{
                  "&:hover": {
                    transform: "translateY(-2px)",
                    borderColor: accent,
                    backgroundColor: `${accent}15`,
                  },
                  transition: "all 0.25s ease",
                  borderColor: "rgba(255,255,255,0.4)",
                  color: "white",
                }}
              >
                View Projects
              </Button>
              <Button
                variant="outlined"
                size="large"
                href="/Hassan_Ahmed_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<DownloadIcon />}
                sx={{
                  "&:hover": {
                    transform: "translateY(-2px)",
                    borderColor: accent,
                    backgroundColor: `${accent}15`,
                  },
                  transition: "all 0.25s ease",
                  borderColor: "rgba(255,255,255,0.4)",
                  color: "white",
                }}
              >
                Download Resume
              </Button>
            </Box>
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
}
