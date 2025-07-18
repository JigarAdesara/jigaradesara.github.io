import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Blog } from "@/components/Blog";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}
