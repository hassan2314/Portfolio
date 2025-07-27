import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Link,
  IconButton,
  Paper,
  useTheme,
  Divider,
  Alert,
} from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Email,
  Phone,
  LocationOn,
  GitHub,
  LinkedIn,
  Send,
} from "@mui/icons-material";
import { useTheme as useCustomTheme } from "../context/ThemeContext";
import { useState } from "react";

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { darkMode } = useCustomTheme();
  const theme = useTheme();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formState);
    setSubmitStatus({ type: "success", message: "Message sent successfully!" });
    setFormState({ name: "", email: "", message: "" });

    // Simulate form submission
    setTimeout(() => setSubmitStatus(null), 5000);
  };

  return (
    <Box
      id="contact"
      ref={ref}
      sx={{
        py: 8,
        px: { xs: 2, sm: 4, md: 6 },
        backgroundColor: darkMode ? theme.palette.grey[900] : "#f8fafc",
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
            {/* Contact Information Column */}
            <Grid item xs={12} md={5}>
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
                style={{ height: "100%" }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    height: "100%",
                    backgroundColor: darkMode
                      ? theme.palette.grey[800]
                      : "white",
                    transition: "all 0.3s ease",
                    border: "1px solid",
                    borderColor: darkMode
                      ? theme.palette.grey[700]
                      : theme.palette.grey[200],
                    borderRadius: "12px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{
                      fontWeight: "bold",
                      mb: 3,
                      color: darkMode
                        ? theme.palette.primary.light
                        : theme.palette.primary.dark,
                    }}
                  >
                    Contact Information
                  </Typography>

                  <Box sx={{ mb: 3, flex: 1 }}>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                      <Email
                        color="primary"
                        sx={{
                          mr: 2,
                          color: darkMode
                            ? theme.palette.secondary.light
                            : theme.palette.secondary.dark,
                        }}
                      />
                      <Link
                        href="mailto:hassan87691@gmail.com"
                        underline="hover"
                        sx={{
                          color: darkMode
                            ? theme.palette.text.primary
                            : theme.palette.grey[800],
                        }}
                      >
                        hassan87691@gmail.com
                      </Link>
                    </Box>

                    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                      <Phone
                        color="primary"
                        sx={{
                          mr: 2,
                          color: darkMode
                            ? theme.palette.secondary.light
                            : theme.palette.secondary.dark,
                        }}
                      />
                      <Typography
                        sx={{
                          color: darkMode
                            ? theme.palette.text.primary
                            : theme.palette.grey[800],
                        }}
                      >
                        +92 342 004 2947
                      </Typography>
                    </Box>

                    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                      <LocationOn
                        color="primary"
                        sx={{
                          mr: 2,
                          color: darkMode
                            ? theme.palette.secondary.light
                            : theme.palette.secondary.dark,
                        }}
                      />
                      <Typography
                        sx={{
                          color: darkMode
                            ? theme.palette.text.primary
                            : theme.palette.grey[800],
                        }}
                      >
                        G-8/4, Islamabad, Pakistan
                      </Typography>
                    </Box>
                  </Box>

                  <Divider sx={{ my: 3 }} />

                  <Box>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        mb: 2,
                        color: darkMode
                          ? theme.palette.text.secondary
                          : theme.palette.text.primary,
                      }}
                    >
                      Find me on:
                    </Typography>
                    <Box>
                      <IconButton
                        href="https://github.com/hassan2314"
                        target="_blank"
                        sx={{
                          mr: 1,
                          color: darkMode
                            ? theme.palette.text.primary
                            : theme.palette.grey[800],
                          "&:hover": {
                            color: theme.palette.primary.main,
                          },
                        }}
                      >
                        <GitHub fontSize="large" />
                      </IconButton>
                      <IconButton
                        href="https://www.linkedin.com/in/hassan-ahmed-1595b12a6/"
                        target="_blank"
                        sx={{
                          color: darkMode
                            ? theme.palette.text.primary
                            : theme.palette.grey[800],
                          "&:hover": {
                            color: theme.palette.primary.main,
                          },
                        }}
                      >
                        <LinkedIn fontSize="large" />
                      </IconButton>
                    </Box>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>

            {/* Contact Form Column */}
            <Grid item xs={12} md={7}>
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                style={{ height: "100%" }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    height: "100%",
                    backgroundColor: darkMode
                      ? theme.palette.grey[800]
                      : "white",
                    transition: "all 0.3s ease",
                    border: "1px solid",
                    borderColor: darkMode
                      ? theme.palette.grey[700]
                      : theme.palette.grey[200],
                    borderRadius: "12px",
                  }}
                >
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{
                      fontWeight: "bold",
                      mb: 3,
                      color: darkMode
                        ? theme.palette.primary.light
                        : theme.palette.primary.dark,
                    }}
                  >
                    Send Me a Message
                  </Typography>

                  {submitStatus && (
                    <Alert severity={submitStatus.type} sx={{ mb: 3 }}>
                      {submitStatus.message}
                    </Alert>
                  )}

                  <form onSubmit={handleSubmit}>
                    <TextField
                      fullWidth
                      name="name"
                      label="Your Name"
                      variant="outlined"
                      margin="normal"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      sx={{ mb: 2 }}
                    />
                    <TextField
                      fullWidth
                      name="email"
                      label="Your Email"
                      variant="outlined"
                      margin="normal"
                      required
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      sx={{ mb: 2 }}
                    />
                    <TextField
                      fullWidth
                      name="message"
                      label="Your Message"
                      variant="outlined"
                      margin="normal"
                      required
                      multiline
                      rows={6}
                      value={formState.message}
                      onChange={handleChange}
                      sx={{ mb: 3 }}
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                      endIcon={<Send />}
                      sx={{
                        px: 4,
                        py: 1.5,
                        borderRadius: "8px",
                        textTransform: "none",
                        fontSize: "1rem",
                        "&:hover": {
                          transform: "translateY(-2px)",
                          boxShadow: 3,
                        },
                        transition: "all 0.3s ease",
                      }}
                    >
                      Send Message
                    </Button>
                  </form>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Box>
    </Box>
  );
}
