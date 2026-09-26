import Intro from "@components/Main/Intro";
import About from "@components/Main/About";
import Principles from "@components/Main/Principles";
import ContactCTA from "@components/Main/ContactCTA";
import Projects from "@components/Projects";

// Orden pensado para quien revisa el portafolio: primero el trabajo,
// luego quién está detrás, cómo trabaja y cómo contactarlo.
export default function Main() {
  return (
    <div className="flex flex-col gap-28 md:gap-40">
      <Intro />
      <Projects />
      <About />
      <Principles />
      <ContactCTA />
    </div>
  );
}
