import {
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  Chip,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SchoolIcon from "@mui/icons-material/School";
import { useTheme as useCustomTheme } from "../context/ThemeContext";

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { darkMode } = useCustomTheme();
  const theme = useTheme();

  const educationData = {
    degree: "Bachelor of Science in Computer Science (BSCS)",
    university: "NUML University, Islamabad, Pakistan",
    duration: "2021 - 2025",
    description:
      "Comprehensive computer science program focusing on modern software development practices and theoretical foundations.",
    coursework: [
      "Data Structures and Algorithms",
      "Database Management Systems",
      "Web Development",
      "Operating Systems",
      "Computer Networks",
      "Software Engineering",
      "Artificial Intelligence",
    ],
    achievements: [
      "Graduated with Honors",
      "Participated in multiple IT Conferences",
      "Completed several Internships",
    ],
  };

  return (
    <Box
      id="education"
      ref={ref}
      sx={{
        py: 8,
        px: 3,
        backgroundColor: darkMode ? theme.palette.grey[900] : "#ffffff",
        transition: "background-color 0.3s ease",
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{
            fontWeight: "bold",
            mb: 6,
            color: darkMode
              ? theme.palette.primary.light
              : theme.palette.primary.dark,
          }}
        >
          <SchoolIcon
            sx={{
              verticalAlign: "middle",
              mr: 1,
              fontSize: "inherit",
              color: darkMode
                ? theme.palette.secondary.light
                : theme.palette.secondary.dark,
            }}
          />
          Education
        </Typography>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Paper
            elevation={3}
            sx={{
              maxWidth: "900px",
              margin: "0 auto",
              p: 4,
              backgroundColor: darkMode ? theme.palette.grey[800] : "white",
              transition: "background-color 0.3s ease",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: theme.shadows[8],
                transition: "all 0.3s ease",
              },
            }}
          >
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontWeight: "bold",
                color: darkMode
                  ? theme.palette.primary.light
                  : theme.palette.primary.dark,
              }}
            >
              {educationData.degree}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Chip
                label={educationData.duration}
                color="primary"
                size="small"
                sx={{ mr: 2 }}
              />
              <Typography
                variant="subtitle1"
                sx={{
                  color: darkMode
                    ? theme.palette.text.secondary
                    : theme.palette.text.primary,
                }}
              >
                {educationData.university}
              </Typography>
            </Box>
            <Typography
              variant="body1"
              paragraph
              sx={{
                color: darkMode
                  ? theme.palette.text.primary
                  : theme.palette.grey[800],
                mb: 3,
              }}
            >
              {educationData.description}
            </Typography>

            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
              <Paper
                elevation={2}
                sx={{
                  p: 2,
                  flex: 1,
                  minWidth: "250px",
                  backgroundColor: darkMode
                    ? theme.palette.grey[700]
                    : theme.palette.grey[100],
                }}
              >
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    fontWeight: "bold",
                    color: darkMode
                      ? theme.palette.secondary.light
                      : theme.palette.secondary.dark,
                  }}
                >
                  Coursework
                </Typography>
                <List dense>
                  {educationData.coursework.map((course, index) => (
                    <ListItem key={index} sx={{ py: 0 }}>
                      <ListItemText
                        primary={course}
                        sx={{
                          color: darkMode
                            ? theme.palette.text.primary
                            : theme.palette.grey[800],
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Paper>

              <Paper
                elevation={2}
                sx={{
                  p: 2,
                  flex: 1,
                  minWidth: "250px",
                  backgroundColor: darkMode
                    ? theme.palette.grey[700]
                    : theme.palette.grey[100],
                }}
              >
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    fontWeight: "bold",
                    color: darkMode
                      ? theme.palette.secondary.light
                      : theme.palette.secondary.dark,
                  }}
                >
                  Achievements
                </Typography>
                <List dense>
                  {educationData.achievements.map((achievement, index) => (
                    <ListItem key={index} sx={{ py: 0 }}>
                      <ListItemText
                        primary={achievement}
                        sx={{
                          color: darkMode
                            ? theme.palette.text.primary
                            : theme.palette.grey[800],
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Box>
          </Paper>
        </motion.div>
      </motion.div>
    </Box>
  );
}
