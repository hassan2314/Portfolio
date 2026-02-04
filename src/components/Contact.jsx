import {
  Box,
  Typography,
  Button,
  Grid,
  Link,
  IconButton,
  Paper,
  useTheme,
  Divider,
} from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GitHub, LinkedIn, Download } from "@mui/icons-material";
import { useTheme as useCustomTheme } from "../context/ThemeContext";
import { monoFontFamily } from "../theme";

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { darkMode } = useCustomTheme();
  const theme = useTheme();

  return (
    <Box
      id="contact"
      ref={ref}
      sx={{
        py: 8,
        px: { xs: 2, sm: 4, md: 6 },
        backgroundColor: darkMode ? theme.palette.grey[900] : theme.palette.grey[50],
        transition: "background-color 0.3s ease",
      }}
    >
      <Box sx={{ maxWidth: "1400px", mx: "auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Typography
            component="span"
            sx={{
              display: "block",
              textAlign: "center",
              fontFamily: monoFontFamily,
              fontSize: "0.8rem",
              color: theme.palette.primary.main,
              mb: 1,
            }}
          >
            // contact
          </Typography>
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            sx={{
              fontWeight: "bold",
              mb: 2,
              color: darkMode
                ? theme.palette.primary.light
                : theme.palette.primary.dark,
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            }}
          >
            Let's Connect
          </Typography>

          <Typography
            variant="subtitle1"
            align="center"
            sx={{
              mb: 6,
              color: darkMode
                ? theme.palette.text.secondary
                : theme.palette.text.primary,
              maxWidth: "700px",
              mx: "auto",
            }}
          >
            Have a question or want to work together? Feel free to reach out!
          </Typography>

          <Grid
            container
            spacing={4}
            justifyContent="center"
            alignItems="stretch"
          >
            {/* Contact Information */}
            <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center" }}>
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
                style={{ height: "100%" }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    height: "100%",
                    backgroundColor: darkMode
                      ? theme.palette.grey[800]
                      : "white",
                    transition: "all 0.3s ease",
                    border: "2px solid",
                    borderColor: darkMode
                      ? theme.palette.grey[700]
                      : theme.palette.grey[200],
                    borderRadius: "8px",
                    display: "flex",
                    flexDirection: "column",
                    fontFamily: monoFontFamily,
                    fontSize: "0.9rem",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: monoFontFamily,
                      fontSize: "0.75rem",
                      color: theme.palette.text.secondary,
                      mb: 2,
                    }}
                  >
                    // contact.env
                  </Typography>
                  <Box sx={{ "& > div": { mb: 1.5 } }}>
                    <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: 0.5 }}>
                      <Typography component="span" sx={{ fontFamily: monoFontFamily, color: theme.palette.text.secondary }}>
                        EMAIL
                      </Typography>
                      <Typography component="span" sx={{ fontFamily: monoFontFamily, color: theme.palette.grey[500] }}>=</Typography>
                      <Link
                        href="mailto:hassan87691@gmail.com"
                        underline="hover"
                        sx={{ fontFamily: monoFontFamily, color: theme.palette.primary.main, fontWeight: 500 }}
                      >
                        "hassan87691@gmail.com"
                      </Link>
                    </Box>
                    <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: 0.5 }}>
                      <Typography component="span" sx={{ fontFamily: monoFontFamily, color: theme.palette.text.secondary }}>
                        PHONE
                      </Typography>
                      <Typography component="span" sx={{ fontFamily: monoFontFamily, color: theme.palette.grey[500] }}>=</Typography>
                      <Typography component="span" sx={{ fontFamily: monoFontFamily, color: theme.palette.primary.main }}>
                        "+92 342 004 2947"
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: 0.5 }}>
                      <Typography component="span" sx={{ fontFamily: monoFontFamily, color: theme.palette.text.secondary }}>
                        LOCATION
                      </Typography>
                      <Typography component="span" sx={{ fontFamily: monoFontFamily, color: theme.palette.grey[500] }}>=</Typography>
                      <Typography component="span" sx={{ fontFamily: monoFontFamily, color: theme.palette.primary.main }}>
                        "G-8/4, Islamabad, Pakistan"
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ mt: 3 }}>
                    <Button
                      variant="outlined"
                      color="primary"
                      size="medium"
                      href="/Hassan_Ahmed_Resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      startIcon={<Download />}
                      sx={{
                        textTransform: "none",
                        borderRadius: "8px",
                        fontFamily: monoFontFamily,
                      }}
                    >
                      Download Resume
                    </Button>
                  </Box>

                  <Divider sx={{ my: 3 }} />

                  <Box>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        mb: 1.5,
                        fontFamily: monoFontFamily,
                        fontSize: "0.75rem",
                        color: theme.palette.text.secondary,
                      }}
                    >
                      // find me on
                    </Typography>
                    <Box>
                      <IconButton
                        href="https://github.com/hassan2314"
                        target="_blank"
                        sx={{
                          mr: 1,
                          color: darkMode ? theme.palette.text.primary : theme.palette.grey[800],
                          "&:hover": { color: theme.palette.primary.main },
                        }}
                      >
                        <GitHub fontSize="large" />
                      </IconButton>
                      <IconButton
                        href="https://www.linkedin.com/in/hassan-ahmed-1595b12a6/"
                        target="_blank"
                        sx={{
                          color: darkMode ? theme.palette.text.primary : theme.palette.grey[800],
                          "&:hover": { color: theme.palette.primary.main },
                        }}
                      >
                        <LinkedIn fontSize="large" />
                      </IconButton>
                    </Box>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Box>
    </Box>
  );
}
