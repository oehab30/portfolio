import Hero from "../components/hero/Hero";
import Stack from "../components/stack/Stack";
import Projects from "../components/projects/Projects";
import About from "@/components/about/About";

function Home() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="stack">
        <Stack />
      </section>
      <section id="projects">
        <Projects />
      </section>
      
    </>
  );
}

export default Home;


