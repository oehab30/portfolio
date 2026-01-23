import { lazy, Suspense } from "react";
import Hero from "../components/hero/Hero";

const Stack = lazy(() => import("../components/stack/Stack"));
const Projects = lazy(() => import("../components/projects/Projects"));
const About = lazy(() => import("@/components/about/About"));
const ContactSection = lazy(() => import("@/components/contact/contactsection"));

function Home() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>
      
      <Suspense fallback={null}>
        <section id="about">
          <About />
        </section>
        <section id="stack">
          <Stack />
        </section>
        <section id="projects">
          <Projects />
        </section>
        
        <ContactSection />
      </Suspense>
    </>
  );
}

export default Home;


