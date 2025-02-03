import About from "./About";
import Intro from "./Intro";
import Experience from "./Experience";
import Goals from "./Goals";
export default function Main() {
  return (
    <section className="px-5 flex items-center justify-center gap-5 flex-col md:gap-y-20">
      <Intro />
      <Experience />
      <About />
      <Goals />
    </section>
  );
}
