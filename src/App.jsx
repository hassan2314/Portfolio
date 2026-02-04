// App.jsx
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useTheme as useCustomTheme } from "./context/ThemeContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SectionDivider from "./components/SectionDivider";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  const { darkMode } = useCustomTheme();
  const theme = useTheme();
  const bg = darkMode ? theme.palette.grey[900] : theme.palette.grey[50];

  return (
    <Box sx={{ backgroundColor: bg, minHeight: "100vh" }}>
      <Header />
      <Hero />
      <SectionDivider label="education" />
      <Education />
      <SectionDivider label="experience" />
      <Experience />
      <SectionDivider label="projects" />
      <Projects />
      <SectionDivider label="skills" />
      <Skills />
      <SectionDivider label="contact" />
      <Contact />
    </Box>
  );
}

export default App;
