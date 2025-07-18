import GoBackButton from "../../components/Navbar/GoBackButton";
import { PROJECTS } from "../../components/Projects";
import Project from "../../components/Projects/Project";
import { motion } from "framer-motion";

export default function Proyectos() {
  return (
    <>
      <section className="md:w-[48rem] mx-auto mb-5">
        <GoBackButton />
        <div className="md:grid grid-rows-2 grid-cols-2 flex items-center justify-center flex-col gap-5 mx-5 md:m-0">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, type: "spring", delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Project data={project} />
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
