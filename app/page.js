import Image from "next/image";
import Projects from "./components/projects";
import Hero from "./components/hero";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
