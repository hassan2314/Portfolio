import { Box, Typography, Grid, Chip, LinearProgress, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import BuildIcon from "@mui/icons-material/Build";
import { useTheme as useCustomTheme } from "../context/ThemeContext";
import { monoFontFamily } from "../theme";

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
          ? theme.palette.grey[800]
          : theme.palette.grey[100],
        transition: "background-color 0.3s ease",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0, 212, 170, 0.04) 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        style={{ position: "relative", zIndex: 1 }}
      >
        <Typography
          component="span"
          sx={{
            display: "block",
            textAlign: "center",
            fontFamily: monoFontFamily,
            fontSize: "0.8rem",
            color: theme.palette.primary.main,
            mb: 2,
          }}
        >
          // skills
        </Typography>
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

        {/* Bento: first 2 categories span 2 cols (md=6), rest md=4 */}
        <Grid container spacing={3} justifyContent="center" sx={{ maxWidth: 1200, mx: "auto" }}>
          {skillCategories.map((category, index) => {
            const isWide = index < 2;
            return (
              <Grid item key={index} xs={12} sm={6} md={isWide ? 6 : 4}>
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  <Box
                    sx={{
                      height: "100%",
                      p: 3,
                      borderRadius: 2,
                      border: "1px solid",
                      borderColor: darkMode
                        ? theme.palette.grey[700]
                        : theme.palette.grey[200],
                      backgroundColor: darkMode
                        ? theme.palette.grey[800]
                        : "white",
                      transition: "all 0.25s ease",
                      "&:hover": {
                        borderColor: theme.palette.primary.main,
                        boxShadow: `0 8px 24px ${theme.palette.primary.main}20`,
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
                      <Box component="span" sx={{ fontSize: "1.25rem", lineHeight: 1 }}>
                        {category.icon}
                      </Box>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontFamily: monoFontFamily,
                          fontWeight: 600,
                          fontSize: "0.9rem",
                          color: darkMode
                            ? theme.palette.text.primary
                            : theme.palette.grey[800],
                        }}
                      >
                        {category.name}
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                      {category.skills.map((skill, i) => (
                        <Box key={i}>
                          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 0.5 }}>
                            <Typography
                              component="span"
                              sx={{
                                fontFamily: monoFontFamily,
                                fontSize: "0.8rem",
                                color: theme.palette.primary.main,
                              }}
                            >
                              #{skill.name.toLowerCase().replace(/\s+/g, "_")}
                            </Typography>
                            <Typography
                              component="span"
                              sx={{
                                fontFamily: monoFontFamily,
                                fontSize: "0.75rem",
                                color: darkMode ? theme.palette.text.secondary : theme.palette.grey[600],
                              }}
                            >
                              {skill.level}%
                            </Typography>
                          </Box>
                          <LinearProgress
                            variant="determinate"
                            value={skill.level}
                            sx={{
                              height: 6,
                              borderRadius: 1,
                              backgroundColor: darkMode ? theme.palette.grey[700] : theme.palette.grey[200],
                              "& .MuiLinearProgress-bar": {
                                backgroundColor: theme.palette.primary.main,
                              },
                            }}
                          />
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            );
          })}
        </Grid>
      </motion.div>
    </Box>
  );
}
