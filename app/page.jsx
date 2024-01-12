import styles from "./page.module.css";
import Hero from "@/components/hero/hero";
import About from "@/components/about/about";
import Skills from "@/components/skill/skills";
import Projects from "@/components/projects/projects";
import Triangle from "@/components/triangle/Triangle";
import Contact from "@/components/contact/Contact";

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <Hero />
      </header>

      <main className={styles.main}>
        <About />

        <Skills />

        <Projects />

        <Triangle />

        <Contact />

      </main>
    </>
  );
}
