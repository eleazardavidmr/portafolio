import { lazy, Suspense } from "react";
import Intro from "@components/Main/Intro";

const Experience = lazy(() => import("@components/Main/Experience"));
const About = lazy(() => import("@components/Main/About"));
const Goals = lazy(() => import("@components/Main/Goals"));

export default function Main() {
  return (
    <main className="relative w-full overflow-hidden text-slate-800 dark:text-slate-100 ">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 flex flex-col items-center gap-24 md:gap-32">
        <Intro />
        <Suspense fallback={null}>
          <Experience />
          <About />
          <Goals />
        </Suspense>
      </div>
    </main>
  );
}
