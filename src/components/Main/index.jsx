import About from "@components/Main/About";
import Intro from "@components/Main/Intro";
import Experience from "@components/Main/Experience";
import Goals from "@components/Main/Goals";

export default function Main() {
  return (
    <main className="relative w-full overflow-hidden text-slate-800 dark:text-slate-100 ">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 flex flex-col items-center gap-24 md:gap-32">
        <Intro />
        <Experience />
        <About />
        <Goals />
      </div>
    </main>
  );
}
