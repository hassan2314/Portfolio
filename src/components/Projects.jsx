import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  useTheme,
  Avatar,
} from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CodeIcon from "@mui/icons-material/Code";
import VisibilityIcon from "@mui/icons-material/Visibility";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useTheme as useCustomTheme } from "../context/ThemeContext";
import { monoFontFamily } from "../theme";

const projectIcons = ["📚", "🌐", "🧵", "🎥", "📝", "✍️", "💬", "🏫"];

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const { darkMode } = useCustomTheme();
  const theme = useTheme();

  const projects = [
    {
      title: "ReadMaududi",
      subtitle: "Digital Library · 50,000+ readers",
      description:
        "Own the NestJS backend and Next.js admin panel for a digital library serving 50,000+ readers. Built REST APIs, JWT auth, OCR/content pipelines (Google Document AI, AWS S3), Apple & Google Play subscriptions, and AI chat/search/summarization by integrating external LLM services into production APIs.",
      technologies: [
        "NestJS",
        "Next.js",
        "PostgreSQL",
        "Prisma",
        "JWT",
        "Document AI",
        "AWS S3",
        "AI APIs",
      ],
      githubLink: "https://github.com/hassan2314",
      demoLink: "https://www.readmaududi.com/",
    },
    {
      title: "National Non-Profit Web Platform",
      subtitle: "Bilingual CMS · Next.js + NestJS",
      description:
        "Official bilingual (English/Urdu, RTL) web platform for a large national non-profit. Architected 25+ NestJS modules — CMS with revisions, dynamic page builder, events, campaigns, donations, membership — plus AWS S3 media, Sharp image optimization, d3-geo maps, Docker, and PM2 deployments.",
      technologies: [
        "Next.js 15",
        "React 19",
        "NestJS",
        "Sequelize",
        "PostgreSQL",
        "AWS S3",
        "Docker",
        "Swagger",
      ],
      githubLink: "https://github.com/hassan2314",
      demoLink: null,
    },
    {
      title: "Stitch and Style",
      subtitle: "3D Custom Fabric Design Studio (FYP)",
      description:
        "3D clothing customization platform with real-time previews, dynamic fabric selection, designer commission calculation, order placement, and Three.js visualization.",
      technologies: ["React", "Node.js", "MongoDB", "Three.js"],
      githubLink: "https://github.com/Has41/FYP-Project-Fabric",
      demoLink: null,
    },
    {
      title: "Next Video",
      subtitle: "Video Sharing Platform",
      description:
        "Video-sharing platform with channel-based video management, NextAuth session-based access control, and optimized media upload and delivery via ImageKit.",
      technologies: [
        "Next.js 15",
        "React 19",
        "TypeScript",
        "MongoDB",
        "NextAuth.js",
        "ImageKit",
      ],
      githubLink: "https://github.com/hassan2314/next-video",
      demoLink: "https://next-video-2hm2.vercel.app/",
    },
    {
      title: "MegaBlog",
      subtitle: "Modern Blog Platform",
      description:
        "Blogging platform with user authentication, rich-text editing, image uploads, and post management on Appwrite backend services.",
      technologies: ["React", "Vite", "Appwrite", "TinyMCE", "Tailwind CSS"],
      githubLink: "https://github.com/hassan2314/Blog",
      demoLink: "https://timely-gaufre-3a882a.netlify.app/",
    },
    {
      title: "AI Text Summarizer",
      subtitle: "NLP Application",
      description:
        "Full-stack summarization tool converting long text into concise bullet points. FastAPI backend with Gemini and Groq LLM endpoints, plus JWT-secured React client for real-time summaries.",
      technologies: ["React", "Node.js", "FastAPI", "Gemini", "Groq"],
      githubLink: "https://github.com/hassan2314/Summarizer_Frontend",
      demoLink: "https://github.com/hassan2314/Summarizer-AI",
    },
    {
      title: "ChatAI",
      subtitle: "AI Chat Application",
      description:
        "Lightweight AI chat app using Next.js 15 + React 19 with Groq API integration, Markdown rendering, and syntax highlighting.",
      technologies: ["Next.js", "Groq", "React", "MUI"],
      githubLink: "https://github.com/hassan2314/chatai",
      demoLink: "https://chat-ai-nu-topaz.vercel.app/",
    },
    {
      title: "Next School",
      subtitle: "Educational Platform",
      description:
        "Modern educational platform using Next.js 15 and React 19 with Tailwind CSS v4 and Framer Motion for smooth UI animations and responsive layouts.",
      technologies: [
        "Next.js 15",
        "React 19",
        "Tailwind CSS v4",
        "Framer Motion",
        "TypeScript",
      ],
      githubLink: "https://github.com/hassan2314/next-school",
      demoLink: "https://next-school-pi.vercel.app/",
    },
  ];

  return (
    <Box
      id="projects"
      ref={ref}
      sx={{
        py: 8,
        px: { xs: 2, sm: 4, md: 6 },
        backgroundColor: darkMode ? theme.palette.grey[900] : theme.palette.grey[50],
        transition: "background-color 0.3s ease",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(0, 212, 170, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 170, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
        }}
      />
      <Box sx={{ maxWidth: "1400px", mx: "auto", position: "relative", zIndex: 1 }}>
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
            // projects
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
            <CodeIcon
              sx={{
                verticalAlign: "middle",
                mr: 1,
                fontSize: "inherit",
                color: darkMode
                  ? theme.palette.secondary.light
                  : theme.palette.secondary.dark,
              }}
            />
            Featured Work
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
              fontSize: { xs: "1rem", sm: "1.1rem" },
            }}
          >
            Production platforms and selected projects — from digital libraries
            and CMS systems to AI-integrated full-stack apps.
          </Typography>

          <Grid container spacing={3} justifyContent="center">
            {projects.map((project, index) => {
              const isFeatured = index < 2;
              return (
                <Grid item key={index} xs={12} sm={6} md={isFeatured ? 6 : 4}>
                  <Box sx={{ height: "100%" }}>
                    <motion.div
                      initial={{ scale: 0.95, opacity: 0, y: 20 }}
                      animate={inView ? { scale: 1, opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{
                        y: -6,
                        transition: { duration: 0.2 },
                      }}
                      style={{ height: "100%" }}
                    >
                      <Card
                        sx={{
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                          backgroundColor: darkMode
                            ? theme.palette.grey[800]
                            : "white",
                          transition: "all 0.3s ease",
                          border: "2px solid",
                          borderColor: darkMode
                            ? theme.palette.grey[700]
                            : theme.palette.grey[200],
                          borderRadius: "8px",
                          overflow: "hidden",
                          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.06)",
                          "&:hover": {
                            boxShadow: `0 12px 28px ${theme.palette.primary.main}25`,
                            borderColor: theme.palette.primary.main,
                          },
                        }}
                      >
                        <Box
                          sx={{
                            p: 3,
                            backgroundColor: darkMode
                              ? theme.palette.grey[700]
                              : theme.palette.grey[100],
                            borderBottom: "1px solid",
                            borderColor: darkMode
                              ? theme.palette.grey[600]
                              : theme.palette.grey[200],
                            textAlign: "center",
                          }}
                        >
                          <Avatar
                            sx={{
                              width: 80,
                              height: 80,
                              mx: "auto",
                              mb: 2,
                              fontSize: "2.5rem",
                              backgroundColor: darkMode
                                ? theme.palette.primary.dark
                                : theme.palette.primary.light,
                              color: "white",
                            }}
                          >
                            {projectIcons[index]}
                          </Avatar>
                          <Typography
                            variant="h5"
                            component="h2"
                            sx={{
                              fontWeight: "bold",
                              color: darkMode
                                ? theme.palette.primary.light
                                : theme.palette.primary.dark,
                              fontFamily: monoFontFamily,
                              fontSize: "1.1rem",
                            }}
                          >
                            ./ {project.title}
                          </Typography>
                          <Typography
                            variant="subtitle1"
                            sx={{
                              color: darkMode
                                ? theme.palette.text.secondary
                                : theme.palette.text.primary,
                              mb: 1,
                            }}
                          >
                            {project.subtitle}
                          </Typography>
                        </Box>

                        <CardContent sx={{ flexGrow: 1, p: 3 }}>
                          <Typography
                            variant="body1"
                            sx={{
                              mb: 3,
                              color: darkMode
                                ? theme.palette.text.primary
                                : theme.palette.grey[800],
                              lineHeight: 1.6,
                              fontSize: "1.05rem",
                            }}
                          >
                            {project.description}
                          </Typography>

                          <Box sx={{ mb: 3 }}>
                            <Typography
                              variant="subtitle2"
                              sx={{
                                mb: 1,
                                fontFamily: monoFontFamily,
                                fontSize: "0.75rem",
                                color: theme.palette.primary.main,
                              }}
                            >
                              # tech
                            </Typography>
                            <Box
                              sx={{
                                display: "flex",
                                flexWrap: "wrap",
                                flexDirection: "row",
                                gap: 1,
                              }}
                            >
                              {project.technologies.map((tech, i) => (
                                <Chip
                                  key={i}
                                  label={tech}
                                  size="small"
                                  sx={{
                                    fontFamily: monoFontFamily,
                                    fontSize: "0.75rem",
                                    backgroundColor: darkMode
                                      ? theme.palette.grey[700]
                                      : theme.palette.grey[200],
                                    color: darkMode
                                      ? theme.palette.text.primary
                                      : theme.palette.grey[800],
                                    border: "1px solid",
                                    borderColor: darkMode
                                      ? theme.palette.grey[600]
                                      : theme.palette.grey[300],
                                    fontWeight: 500,
                                  }}
                                />
                              ))}
                            </Box>
                          </Box>
                        </CardContent>

                        <CardActions
                          sx={{
                            p: 2,
                            borderTop: "1px solid",
                            borderColor: darkMode
                              ? theme.palette.grey[600]
                              : theme.palette.grey[200],
                            justifyContent: "space-between",
                          }}
                        >
                          {project.demoLink ? (
                            <Button
                              variant="outlined"
                              size="medium"
                              color="primary"
                              startIcon={<VisibilityIcon />}
                              href={project.demoLink}
                              target="_blank"
                              sx={{
                                textTransform: "none",
                                borderRadius: "8px",
                                px: 2,
                                "&:hover": {
                                  backgroundColor: darkMode
                                    ? theme.palette.primary.dark
                                    : theme.palette.primary.light,
                                  color: "white",
                                },
                              }}
                            >
                              Live Demo
                            </Button>
                          ) : (
                            <Box />
                          )}
                          <Button
                            variant="outlined"
                            size="medium"
                            color="secondary"
                            startIcon={<GitHubIcon />}
                            href={project.githubLink}
                            target="_blank"
                            sx={{
                              textTransform: "none",
                              borderRadius: "8px",
                              px: 2,
                              "&:hover": {
                                backgroundColor: darkMode
                                  ? theme.palette.secondary.dark
                                  : theme.palette.secondary.light,
                                color: "white",
                              },
                            }}
                          >
                            View Code
                          </Button>
                        </CardActions>
                      </Card>
                    </motion.div>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </motion.div>
      </Box>
    </Box>
  );
}
