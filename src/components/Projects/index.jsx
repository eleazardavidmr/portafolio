import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import Project from "@components/Projects/Project";
import SectionTitle from "@components/SectionTitle";
import { stagger, revealOnView } from "@constants/motion";
import { PROJECTS } from "./data";

// Se re-exporta para no romper los imports existentes
export { PROJECTS };

const FEATURED_COUNT = 4;

export default function Projects() {
  return (
    <section
      id="proyectos"
      className="mx-auto w-full max-w-content scroll-mt-24 px-6"
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionTitle
          eyebrow="Proyectos"
          title="Trabajo reciente."
          description="Una selección de sitios y aplicaciones que diseñé y desarrollé de principio a fin."
        />
        <Link to="/proyectos" className="link-arrow shrink-0 md:mb-2">
          Ver los {PROJECTS.length} proyectos
          <FiArrowRight aria-hidden="true" />
        </Link>
      </div>

      <motion.div
        variants={stagger(0.1)}
        {...revealOnView}
        className="mt-12 grid gap-6 md:grid-cols-2 md:gap-8"
      >
        {PROJECTS.slice(0, FEATURED_COUNT).map((project, index) => (
          <Project key={project.id} data={project} priority={index < 2} />
        ))}
      </motion.div>
    </section>
  );
}
