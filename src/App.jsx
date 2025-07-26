// App.js
import { Box } from "@mui/material";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <Box sx={{ backgroundColor: "#f8f9fa" }}>
      <Header />
      <Hero />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </Box>
  );
}

export default App;
