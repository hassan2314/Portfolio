import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Link,
  IconButton,
  Paper,
} from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box id="contact" ref={ref} sx={{ py: 8, px: 3 }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold", mb: 4 }}
        >
          Get In Touch
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
            >
              <Paper elevation={3} sx={{ p: 4, height: "100%" }}>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontWeight: "bold", mb: 3 }}
                >
                  Contact Information
                </Typography>

                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <EmailIcon color="primary" sx={{ mr: 2 }} />
                  <Link href="mailto:hassan87691@gmail.com" underline="hover">
                    hassan87691@gmail.com
                  </Link>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <PhoneIcon color="primary" sx={{ mr: 2 }} />
                  <Typography>+92 342 004 2947</Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <LocationOnIcon color="primary" sx={{ mr: 2 }} />
                  <Typography>G-8/4, Islamabad, Pakistan</Typography>
                </Box>

                <Box sx={{ mt: 3 }}>
                  <IconButton
                    href="https://github.com/hassan2314"
                    target="_blank"
                    sx={{ mr: 1 }}
                  >
                    <GitHubIcon fontSize="large" />
                  </IconButton>
                  <IconButton
                    href="https://www.linkedin.com/in/hassan-ahmed-1595b12a6/"
                    target="_blank"
                  >
                    <LinkedInIcon fontSize="large" color="primary" />
                  </IconButton>
                </Box>
              </Paper>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Paper elevation={3} sx={{ p: 4 }}>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontWeight: "bold", mb: 3 }}
                >
                  Send Me a Message
                </Typography>

                <form>
                  <TextField
                    fullWidth
                    label="Name"
                    variant="outlined"
                    margin="normal"
                    required
                  />
                  <TextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    margin="normal"
                    required
                    type="email"
                  />
                  <TextField
                    fullWidth
                    label="Message"
                    variant="outlined"
                    margin="normal"
                    required
                    multiline
                    rows={4}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{ mt: 2 }}
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
  );
}
