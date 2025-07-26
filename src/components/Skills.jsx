import { Box, Typography, Grid, Paper, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import BuildIcon from "@mui/icons-material/Build";
import { useTheme as useCustomTheme } from "../context/ThemeContext";

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { darkMode } = useCustomTheme();
  const theme = useTheme();

  const skillCategories = [
    {
      name: "Programming Languages",
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "PHP", level: 85 },
        { name: "C++", level: 80 },
        { name: "Java", level: 75 },
      ],
      icon: "💻",
    },
    {
      name: "Web Development",
      skills: [
        { name: "React", level: 95 },
        { name: "Node.js", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Laravel", level: 80 },
        { name: "Material-UI", level: 90 },
        { name: "Tailwind CSS", level: 85 },
      ],
      icon: "🌐",
    },
    {
      name: "Databases",
      skills: [
        { name: "MySQL", level: 85 },
        { name: "MongoDB", level: 90 },
        { name: "PostgreSQL", level: 80 },
      ],
      icon: "🗃️",
    },
    {
      name: "Tools",
      skills: [
        { name: "Git", level: 90 },
        { name: "GitHub", level: 95 },
        { name: "VSCode", level: 95 },
      ],
      icon: "🛠️",
    },
  ];

  return (
    <Box
      id="skills"
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
          <BuildIcon
            sx={{
              verticalAlign: "middle",
              mr: 1,
              fontSize: "inherit",
              color: darkMode
                ? theme.palette.secondary.light
                : theme.palette.secondary.dark,
            }}
          />
          Skills & Expertise
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {skillCategories.map((category, index) => (
            <Grid item key={index} xs={12} sm={6} md={3}>
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                    height: "100%",
                    backgroundColor: darkMode
                      ? theme.palette.grey[800]
                      : "white",
                    transition: "background-color 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: theme.shadows[6],
                      transition: "all 0.3s ease",
                    },
                  }}
                >
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                      fontWeight: "bold",
                      color: darkMode
                        ? theme.palette.primary.light
                        : theme.palette.primary.dark,
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <span style={{ fontSize: "1.5rem" }}>{category.icon}</span>
                    {category.name}
                  </Typography>
                  {category.skills.map((skill, i) => (
                    <Box key={i} sx={{ mb: 3 }}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          mb: 1,
                        }}
                      >
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: "medium",
                            color: darkMode
                              ? theme.palette.text.primary
                              : theme.palette.grey[800],
                          }}
                        >
                          {skill.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: darkMode
                              ? theme.palette.secondary.light
                              : theme.palette.secondary.dark,
                          }}
                        >
                          {skill.level}%
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          width: "100%",
                          height: "8px",
                          backgroundColor: darkMode
                            ? theme.palette.grey[700]
                            : theme.palette.grey[300],
                          borderRadius: "4px",
                          overflow: "hidden",
                        }}
                      >
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{
                            duration: 1,
                            delay: i * 0.1 + index * 0.2,
                          }}
                          style={{
                            height: "100%",
                            background: darkMode
                              ? "linear-gradient(90deg, #4facfe 0%, #00f2fe 100%)"
                              : "linear-gradient(90deg, #3a7bd5 0%, #00d2ff 100%)",
                            borderRadius: "4px",
                          }}
                        />
                      </Box>
                    </Box>
                  ))}
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Box>
  );
}
