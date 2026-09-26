import { motion } from "framer-motion";
import Layout from "@components/Layout";
import Project from "@components/Projects/Project";
import SectionTitle from "@components/SectionTitle";
import SEO from "@components/SEO";
import { PROJECTS } from "@components/Projects/data";
import { stagger } from "@constants/motion";

export default function Proyectos() {
  return (
    <Layout>
      <SEO
        title="Portafolio Completo de Proyectos"
        description="Explora todos los proyectos web de Eleazar Muñoz: landing pages, sitios corporativos, sistemas con React y más. Desarrollo frontend profesional en Colombia."
        keywords="proyectos web, portafolio frontend, React, landing pages, sitios web Colombia"
        url="/proyectos"
      />
      <section className="mx-auto max-w-content px-6 pt-6">
        <SectionTitle
          as="h1"
          eyebrow="Proyectos"
          title="Todo mi trabajo."
          description="Sitios corporativos, tiendas en línea y aplicaciones web, desde la idea hasta el despliegue."
        />

        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          animate="visible"
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {PROJECTS.map((project, index) => (
            <Project key={project.id} data={project} priority={index < 3} />
          ))}
        </motion.div>
      </section>
    </Layout>
  );
}
