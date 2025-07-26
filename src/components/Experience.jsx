import {
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  Chip,
  Avatar,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import WorkIcon from "@mui/icons-material/Work";
import { useTheme as useCustomTheme } from "../context/ThemeContext";

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { darkMode } = useCustomTheme();
  const theme = useTheme();

  const experiences = [
    {
      title: "Web Developer Intern",
      company: "Elites Digital Marketing",
      location: "Islamabad, Pakistan",
      duration: "3 Months",
      date: "Summer 2023",
      responsibilities: [
        "Developed and maintained client websites using Wordpress Themes",
        "Participated in code reviews and team meetings",
        "Fixed bugs and implemented new features",
      ],
      skills: ["HTML", "CSS", "PHP", "Wordpress"],
    },
    {
      title: "Software Developer Intern",
      company: "Pakistan Post Office",
      location: "Islamabad, Pakistan",
      duration: "6 Weeks",
      date: "Summer 2024",
      responsibilities: [
        "Worked on internal software systems for Digitization",
        "Participated in code reviews and team meetings",
        "Fixed bugs and implemented new features",
      ],
      skills: ["Node", "Express", "MongoDB"],
    },
    {
      title: "Full Stack Intern",
      company: "Red Buffer",
      location: "Islamabad, Pakistan",
      duration: "6 Weeks",
      date: "Summer  2025",
      responsibilities: [
        "Built RESTful APIs for client applications",
        "Developed frontend components with React",
        "Developed backend services with Node.js and Express",
      ],
      skills: [
        "JavaScript",
        "React",
        "AI Integration",
        "Express",
        "PostgreSql",
      ],
    },
  ];

  return (
    <Box
      id="experience"
      ref={ref}
      sx={{
        py: 8,
        px: 3,
        backgroundColor: darkMode
          ? theme.palette.grey[900]
          : theme.palette.grey[100],
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
          <WorkIcon
            sx={{
              verticalAlign: "middle",
              mr: 1,
              fontSize: "inherit",
              color: darkMode
                ? theme.palette.secondary.light
                : theme.palette.secondary.dark,
            }}
          />
          Professional Experience
        </Typography>

        <Box sx={{ maxWidth: "1000px", margin: "0 auto" }}>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  mb: 4,
                  backgroundColor: darkMode ? theme.palette.grey[800] : "white",
                  transition: "background-color 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: theme.shadows[6],
                    transition: "all 0.3s ease",
                  },
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <Avatar
                    sx={{
                      bgcolor: darkMode
                        ? theme.palette.primary.dark
                        : theme.palette.primary.main,
                      mr: 2,
                      width: 56,
                      height: 56,
                    }}
                  >
                    <WorkIcon fontSize="large" />
                  </Avatar>
                  <Box>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: "bold",
                        color: darkMode
                          ? theme.palette.primary.light
                          : theme.palette.primary.dark,
                      }}
                    >
                      {exp.title}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: darkMode
                          ? theme.palette.text.secondary
                          : theme.palette.text.primary,
                      }}
                    >
                      {exp.company} • {exp.location}
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
                  <Chip
                    label={exp.duration}
                    color="primary"
                    size="small"
                    variant="outlined"
                  />
                  <Chip
                    label={exp.date}
                    color="secondary"
                    size="small"
                    variant="outlined"
                  />
                </Box>

                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    mt: 2,
                    color: darkMode
                      ? theme.palette.secondary.light
                      : theme.palette.secondary.dark,
                  }}
                >
                  Key Responsibilities:
                </Typography>
                <List dense>
                  {exp.responsibilities.map((resp, i) => (
                    <ListItem key={i} sx={{ py: 0.5 }}>
                      <ListItemText
                        primary={resp}
                        sx={{
                          color: darkMode
                            ? theme.palette.text.primary
                            : theme.palette.grey[800],
                        }}
                      />
                    </ListItem>
                  ))}
                </List>

                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    mt: 2,
                    color: darkMode
                      ? theme.palette.secondary.light
                      : theme.palette.secondary.dark,
                  }}
                >
                  Technologies Used:
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {exp.skills.map((skill, i) => (
                    <Chip
                      key={i}
                      label={skill}
                      size="small"
                      sx={{
                        backgroundColor: darkMode
                          ? theme.palette.grey[700]
                          : theme.palette.grey[200],
                        color: darkMode
                          ? theme.palette.text.primary
                          : theme.palette.grey[800],
                      }}
                    />
                  ))}
                </Box>
              </Paper>
            </motion.div>
          ))}
        </Box>
      </motion.div>
    </Box>
  );
}
