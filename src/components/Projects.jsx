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

const projectIcons = ["🎥", "🧵", "📝", "✍️", "🎥", "🛒"];

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const { darkMode } = useCustomTheme();
  const theme = useTheme();

  const projects = [
    {
      title: "Next Video",
      subtitle: "Video Sharing Platform",
      description:
        "A modern video sharing platform built with Next.js 15 featuring user authentication, video upload, channel management, and secure APIs.",
      technologies: [
        "Next.js 15",
        "React 19",
        "TypeScript",
        "MongoDB",
        "NextAuth.js",
        "Tailwind CSS v4",
        "ImageKit",
      ],
      githubLink: "https://github.com/hassan2314/next-video",
      demoLink: "https://next-video-2hm2.vercel.app/",
    },
    {
      title: "Stitch and Style",
      subtitle: "3D E-commerce Platform",
      description:
        "Custom fabric design studio with real-time 3D previews using Three.js. Features user authentication, dynamic customization, and order management.",
      technologies: ["React", "Node.js", "MongoDB", "Three.js"],
      githubLink: "https://github.com/Has41/FYP-Project-Fabric",
      demoLink: "#",
    },
    {
      title: "AI Text Summarizer",
      subtitle: "NLP Application",
      description:
        "Transforms long articles into concise summaries using HuggingFace Transformers. Full-stack implementation with JWT authentication.",
      technologies: ["React", "FastAPI", "Python", "Transformers"],
      githubLink: "https://github.com/hassan2314/Summarizer_Frontend",
      demoLink: "https://github.com/hassan2314/Summarizer-AI",
    },
    {
      title: "MegaBlog",
      subtitle: "Modern Blog Platform",
      description:
        "Feature-rich blogging platform with rich text editing, image uploads, and user management using Appwrite backend.",
      technologies: ["React", "Appwrite", "Tailwind CSS", "TinyMCE"],
      githubLink: "https://github.com/hassan2314/Blog",
      demoLink: "https://timely-gaufre-3a882a.netlify.app/",
    },
    {
      title: "YouTube Backend",
      subtitle: "API Clone",
      description:
        "Complete backend system replicating YouTube's core features including video uploads, comments, and user profiles.",
      technologies: ["Node.js", "Express", "MongoDB", "JWT"],
      githubLink: "https://github.com/hassan2314/Youtube",
      demoLink: "#",
    },
    {
      title: "Mart",
      subtitle: "Full-Stack Web Application",
      description:
        "Modern e-commerce system with modular architecture. Built using React (Vite), Express, and MongoDB with full REST API integration.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      githubLink: "https://github.com/hassan2314/Mart",
      demoLink: "#",
    },
    {
      title: "E-commerce App",
      subtitle: "Online Store",
      description:
        "Full-featured shopping platform with product management, cart functionality, and Stripe payment integration.",
      technologies: ["Laravel", "Bootstrap", "MySQL", "Stripe"],
      githubLink: "https://github.com/hassan2314/Bezzey",
      demoLink: "#",
    },
  ];

  return (
    <Box
      id="projects"
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
            My Projects
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
            Here are some of my featured projects. Each one represents unique
            challenges and learning opportunities.
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {projects.map((project, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Box sx={{ height: "100%" }}>
                  <motion.div
                    initial={{ scale: 0.95, opacity: 0, y: 20 }}
                    animate={inView ? { scale: 1, opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    whileHover={{
                      y: -5,
                      transition: { duration: 0.2 },
                    }}
                    style={{ height: "100%", width: "80vw" }}
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
                        border: "1px solid",
                        borderColor: darkMode
                          ? theme.palette.grey[700]
                          : theme.palette.grey[200],
                        borderRadius: "12px",
                        overflow: "hidden",
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
                        "&:hover": {
                          boxShadow: darkMode
                            ? "0 10px 25px rgba(0, 0, 0, 0.2)"
                            : "0 10px 25px rgba(0, 0, 0, 0.1)",
                          borderColor: darkMode
                            ? theme.palette.primary.dark
                            : theme.palette.primary.light,
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
                          }}
                        >
                          {project.title}
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
                            fontSize: "1.1rem",
                          }}
                        >
                          {project.description}
                        </Typography>

                        <Box sx={{ mb: 3 }}>
                          <Typography
                            variant="subtitle2"
                            sx={{
                              mb: 1,
                              color: darkMode
                                ? theme.palette.text.secondary
                                : theme.palette.text.primary,
                              fontWeight: "bold",
                            }}
                          >
                            Technologies Used:
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
                                  fontWeight: "medium",
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
            ))}
          </Grid>
        </motion.div>
      </Box>
    </Box>
  );
}
