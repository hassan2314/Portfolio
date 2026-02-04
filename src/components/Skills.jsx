import { Box, Typography, Grid, Chip, useTheme } from "@mui/material";
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
        { name: "TypeScript", level: 88 },
        { name: "PHP", level: 70 },
        { name: "C++", level: 50 },
      ],
      icon: "💻",
    },
    {
      name: "Web Development",
      skills: [
        { name: "React", level: 85 },
        { name: "Next.js", level: 80 },
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 70 },
        { name: "Nest.js", level: 75 },
        { name: "Laravel", level: 50 },
        { name: "Material-UI", level: 70 },
        { name: "Tailwind CSS", level: 80 },
      ],
      icon: "🌐",
    },
    {
      name: "Databases & ORM",
      skills: [
        { name: "PostgreSQL", level: 80 },
        { name: "MySQL", level: 70 },
        { name: "MongoDB", level: 80 },
        { name: "Prisma", level: 75 },
      ],
      icon: "🗃️",
    },
    {
      name: "APIs & Integration",
      skills: [
        { name: "REST APIs", level: 80 },
        { name: "JWT / NextAuth", level: 80 },
        { name: "FastAPI Integration", level: 60 },
        { name: "Stripe", level: 60 },
        { name: "Redux Toolkit", level: 60 },
      ],
      icon: "🔌",
    },
    {
      name: "Tools",
      skills: [
        { name: "Git", level: 80 },
        { name: "GitHub", level: 80 },
        { name: "VSCode", level: 80 },
      ],
      icon: "🛠️",
    },
  ];

  return (
    <Box
      id="skills"
      ref={ref}
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 2, sm: 3, md: 4 },
        backgroundColor: darkMode
          ? theme.palette.grey[900]
          : theme.palette.grey[50],
        transition: "background-color 0.3s ease",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: 56,
              height: 56,
              borderRadius: "50%",
              backgroundColor: darkMode
                ? theme.palette.primary.dark
                : theme.palette.primary.main,
              color: "white",
              mb: 2,
            }}
          >
            <BuildIcon sx={{ fontSize: 28 }} />
          </Box>
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontWeight: 700,
              color: darkMode
                ? theme.palette.primary.light
                : theme.palette.primary.dark,
              fontSize: { xs: "1.75rem", md: "2rem" },
            }}
          >
            Skills & Expertise
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mt: 1,
              color: darkMode
                ? theme.palette.text.secondary
                : theme.palette.grey[600],
              maxWidth: 480,
              mx: "auto",
            }}
          >
            Technologies and tools I work with
          </Typography>
        </Box>

        <Grid container spacing={3} justifyContent="center" sx={{ maxWidth: 1200, mx: "auto" }}>
          {skillCategories.map((category, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <Box
                  sx={{
                    height: "100%",
                    p: 3,
                    borderRadius: 3,
                    border: "1px solid",
                    borderColor: darkMode
                      ? theme.palette.grey[700]
                      : theme.palette.grey[200],
                    backgroundColor: darkMode
                      ? theme.palette.grey[800]
                      : "white",
                    transition: "all 0.25s ease",
                    "&:hover": {
                      borderColor: darkMode
                        ? theme.palette.primary.dark
                        : theme.palette.primary.light,
                      boxShadow: darkMode
                        ? `0 8px 32px rgba(0,0,0,0.24)`
                        : `0 8px 32px ${theme.palette.primary.main}14`,
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                      mb: 2,
                      pb: 1.5,
                      borderBottom: "1px solid",
                      borderColor: darkMode
                        ? theme.palette.grey[700]
                        : theme.palette.grey[200],
                    }}
                  >
                    <Box
                      component="span"
                      sx={{
                        fontSize: "1.5rem",
                        lineHeight: 1,
                      }}
                    >
                      {category.icon}
                    </Box>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: 600,
                        color: darkMode
                          ? theme.palette.text.primary
                          : theme.palette.grey[800],
                        letterSpacing: "0.02em",
                      }}
                    >
                      {category.name}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 1,
                    }}
                  >
                    {category.skills.map((skill, i) => (
                      <Chip
                        key={i}
                        label={skill.name}
                        size="small"
                        sx={{
                          fontWeight: 500,
                          fontSize: "0.8rem",
                          height: 28,
                          backgroundColor: darkMode
                            ? theme.palette.grey[700]
                            : theme.palette.grey[100],
                          color: darkMode
                            ? theme.palette.text.primary
                            : theme.palette.grey[800],
                          border: "1px solid",
                          borderColor: darkMode
                            ? theme.palette.grey[600]
                            : theme.palette.grey[300],
                          "&:hover": {
                            backgroundColor: darkMode
                              ? theme.palette.primary.dark
                              : theme.palette.primary.light,
                            color: "white",
                            borderColor: "transparent",
                          },
                          transition: "all 0.2s ease",
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Box>
  );
}
