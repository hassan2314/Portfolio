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
import { monoFontFamily } from "../theme";

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { darkMode } = useCustomTheme();
  const theme = useTheme();

  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Digital Matters",
      location: "Islamabad, Pakistan",
      duration: "Sep 2025 – Present",
      date: "Current",
      projects: [
        {
          name: "ReadMaududi — Digital Library Platform (50,000+ readers)",
          link: "https://readmaududi.com/",
          bullets: [
            "Build and own the backend (NestJS, PostgreSQL, Prisma, JWT auth) and Next.js admin panel of a digital library serving 50,000+ readers, with REST APIs and full content management for books, authors, categories, and publishers.",
            "Developed content ingestion and OCR pipelines (Google Document AI, AWS S3) to digitize and publish book content, and implemented in-app subscriptions with Apple App Store and Google Play billing.",
            "Integrated external AI services into production APIs and admin tools to power AI chat, search, and summarization features.",
            "Optimized browsing with server-side pagination, multi-criteria filtering, and database indexing on frequently queried columns.",
          ],
        },
        {
          name: "Official Web Platform — National Non-Profit Organization",
          link: null,
          bullets: [
            "Building the official bilingual (English/Urdu with RTL support) web platform of a large national non-profit organization using Next.js 15, React 19, NestJS, Sequelize, and PostgreSQL.",
            "Architected a modular backend of 25+ NestJS modules — custom CMS with post revisions, dynamic page builder, events, campaigns, donations, and membership registration — secured with JWT and role-based access control.",
            "Implemented a media pipeline with AWS S3 presigned uploads and on-the-fly image optimization (Sharp), plus response caching and compression for high-traffic performance.",
            "Built interactive frontend features including a d3-geo regional map, rich-text editing, localized routing, and SEO with dynamic sitemaps; containerized with Docker and deployed with PM2.",
          ],
        },
      ],
      skills: [
        "Next.js",
        "NestJS",
        "PostgreSQL",
        "Prisma",
        "Sequelize",
        "JWT",
        "AWS S3",
        "Document AI",
        "Docker",
      ],
    },
    {
      title: "Full Stack Intern",
      company: "Red Buffer",
      location: "Islamabad, Pakistan",
      duration: "Jun 2025 – Aug 2025",
      date: "2025",
      projects: [
        {
          name: null,
          link: null,
          bullets: [
            "Built an AI text summarization tool (React, Node.js, FastAPI) integrating Hugging Face transformer models with Gemini and Groq LLM endpoints, secured with JWT authentication and real-time response handling.",
          ],
        },
      ],
      skills: ["React", "Node.js", "FastAPI", "Gemini", "Groq", "Hugging Face"],
    },
    {
      title: "Web Developer Intern",
      company: "Elites Digital Marketing",
      location: "Islamabad, Pakistan",
      duration: "Sep 2024 – Feb 2025",
      date: "2024–2025",
      projects: [
        {
          name: null,
          link: null,
          bullets: [
            "Developed responsive landing pages and marketing microsites (HTML, CSS, JavaScript) with SEO-driven UI improvements, and handled production deployments.",
          ],
        },
      ],
      skills: ["HTML", "CSS", "JavaScript", "SEO"],
    },
    {
      title: "Software Developer Intern",
      company: "Pakistan Post",
      location: "Islamabad, Pakistan",
      duration: "Jun 2023 – Aug 2023",
      date: "2023",
      projects: [
        {
          name: null,
          link: null,
          bullets: [
            "Contributed to digitizing branch operations (parcel records, staff screens) with React, Node.js, and MongoDB, implementing CRUD workflows with authentication and role-based access.",
          ],
        },
      ],
      skills: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
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
          ? theme.palette.grey[800]
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
          // experience
        </Typography>
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

                {exp.projects.map((project, pIndex) => (
                  <Box key={pIndex} sx={{ mb: project.name ? 2.5 : 1 }}>
                    {project.name && (
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontWeight: 700,
                          mt: 1.5,
                          mb: 0.5,
                          color: darkMode
                            ? theme.palette.secondary.light
                            : theme.palette.secondary.dark,
                        }}
                      >
                        {project.name}
                        {project.link && (
                          <>
                            {" · "}
                            <Typography
                              component="a"
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              sx={{
                                color: theme.palette.primary.main,
                                textDecoration: "none",
                                fontWeight: 600,
                                "&:hover": { textDecoration: "underline" },
                              }}
                            >
                              Live
                            </Typography>
                          </>
                        )}
                      </Typography>
                    )}
                    <List dense>
                      {project.bullets.map((resp, i) => (
                        <ListItem key={i} sx={{ py: 0.5, alignItems: "flex-start" }}>
                          <ListItemText
                            primary={resp}
                            sx={{
                              color: darkMode
                                ? theme.palette.text.primary
                                : theme.palette.grey[800],
                              "& .MuiListItemText-primary": {
                                fontSize: "0.95rem",
                                lineHeight: 1.55,
                              },
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                ))}

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
