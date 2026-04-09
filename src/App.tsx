import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navigation />
      <Hero
        onViewProjects={() => {
          document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
        }}
        onContact={() => {
          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        }}
      />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
