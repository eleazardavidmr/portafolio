import Layout from "../Layout";
import { IoRocketOutline } from "react-icons/io5";
import { useParams, Link } from "react-router-dom";
import { PROJECTS } from "./index";
import { motion } from "framer-motion";
import SEO from "../SEO";

export default function ProjectDetail() {
  const { slug } = useParams();
  const projectIndex = PROJECTS.findIndex((p) => p.slug === slug);
  const project = PROJECTS[projectIndex];

  if (!project) {
    return (
      <Layout>
        <main className="pt-24 pb-20 px-8 max-w-screen-2xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-on-surface mb-4">
              Proyecto no encontrado
            </h1>
            <p className="text-on-surface-variant">
              Lo sentimos, no pudimos encontrar el proyecto que buscas.
            </p>
          </div>
        </main>
      </Layout>
    );
  }

  // Get previous and next projects
  const previousProject =
    projectIndex > 0
      ? PROJECTS[projectIndex - 1]
      : PROJECTS[PROJECTS.length - 1];
  const nextProject =
    projectIndex < PROJECTS.length - 1
      ? PROJECTS[projectIndex + 1]
      : PROJECTS[0];

  return (
    <Layout>
      <SEO
        title={project.name}
        description={project.description || `Proyecto ${project.name}: ${project.technologies?.join(", ")} — Portafolio de Eleazar Muñoz.`}
        keywords={project.technologies ? project.technologies.join(", ") : "proyecto web, frontend"}
        url={`/proyectos/${project.slug}`}
        image={project.img}
      />
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="px-8 max-w-screen-2xl mx-auto mb-20"
        >
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full aspect-[21/9] rounded-xl overflow-hidden mb-12 group"
          >
            <img
              alt={project.name}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              src={project.img}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
            <div className="absolute bottom-12 left-12 right-12 flex flex-col md:flex-row justify-between items-end gap-8">
              <div>
                <div className="inline-flex items-center px-3 py-1 bg-primary/10 border border-primary/20 rounded-sm mb-4">
                  <span className="text-[10px] font-headline font-bold text-primary tracking-[0.2em] uppercase">
                    SYSTEM // 0{project.id}-{project.slug.toUpperCase()}
                  </span>
                </div>
                <h1 className="text-6xl md:text-8xl font-headline font-extrabold tracking-tighter text-on-surface">
                  {project.name.toUpperCase()}
                </h1>
              </div>
              <div className="flex gap-4">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-gradient-to-br from-primary to-primary-container text-on-primary font-headline font-bold rounded-xl flex items-center gap-2 hover:scale-[0.98] transition-transform cursor-pointer"
                >
                  <IoRocketOutline className="w-5 h-5" />
                  LIVE DEMO
                </a>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Content Grid: About & Stack */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="px-8 max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32"
        >
          {/* About Section */}
          <div className="lg:col-span-8 space-y-12">
            <div className="space-y-6">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl font-jetbrains font-bold text-primary tracking-tight"
              >
                DESCRIPCIÓN DEL PROYECTO
              </motion.h2>
              <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed max-w-3xl">
                <p>{project.description}</p>
                <p>{project.longDescription}</p>
              </div>
            </div>

            {/* Gallery Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6 pt-12"
            >
              <h2 className="text-3xl font-jetbrains font-bold text-primary tracking-tight">
                CAPTURAS DEL SISTEMA
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.screenshots.map((screenshot, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="rounded-xl overflow-hidden bg-surface-container-low aspect-video"
                  >
                    <img
                      alt={`${project.name} screenshot ${index + 1}`}
                      className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                      src={screenshot}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Tech Stack Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <div className="sticky top-32 p-8 rounded-xl bg-surface-container-low border border-outline-variant/10">
              <h3 className="text-sm font-jetbrains font-bold text-on-surface tracking-[0.2em] uppercase mb-8 pb-4 border-b border-outline-variant/20">
                STACK DE INGENIERÍA
              </h3>
              <div className="flex flex-wrap gap-3 mb-12">
                {project.technologies.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="px-4 py-2 bg-secondary-container text-on-secondary-container rounded-sm font-jetbrains text-xs font-bold tracking-wider uppercase cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
              <div className="space-y-6">
                <div className="flex justify-between items-center py-4 border-b border-outline-variant/10">
                  <span className="text-xs font-jetbrains text-on-surface-variant font-bold tracking-widest uppercase">
                    RAMA
                  </span>
                  <span className="text-xs font-jetbrains text-primary font-bold">
                    {project.branch}
                  </span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-outline-variant/10">
                  <span className="text-xs font-jetbrains text-on-surface-variant font-bold tracking-widest uppercase">
                    ESTADO
                  </span>
                  <span className="text-xs font-jetbrains text-primary font-bold">
                    {project.status}
                  </span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-outline-variant/10">
                  <span className="text-xs font-jetbrains text-on-surface-variant font-bold tracking-widest uppercase">
                    CLIENTE
                  </span>
                  <span className="text-xs font-jetbrains text-on-surface font-bold uppercase tracking-tighter">
                    {project.client}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Navigation Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-outline-variant/10"
        >
          <div className="max-w-screen-2xl mx-auto flex divide-x divide-outline-variant/10 h-64">
            <motion.div
              whileHover={{ backgroundColor: "rgba(0,0,0,0.05)" }}
              className="flex-1"
            >
              <Link
                to={`/proyectos/${previousProject.slug}`}
                className="flex-1 group flex flex-col justify-center px-12 hover:bg-surface-container transition-colors h-full"
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="text-[10px] font-jetbrains font-bold text-on-surface-variant tracking-[0.2em] uppercase mb-2"
                >
                  PROYECTO ANTERIOR
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ x: -5, color: "#26acd0" }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-3xl font-headline font-bold group-hover:text-primary transition-colors tracking-tight"
                >
                  {previousProject.name.toUpperCase()}
                </motion.span>
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ backgroundColor: "rgba(0,0,0,0.05)" }}
              className="flex-1"
            >
              <Link
                to={`/proyectos/${nextProject.slug}`}
                className="flex-1 group flex flex-col justify-center items-end px-12 hover:bg-surface-container transition-colors h-full"
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="text-[10px] font-jetbrains font-bold text-on-surface-variant tracking-[0.2em] uppercase mb-2 text-right"
                >
                  SIGUIENTE PROYECTO
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ x: 5, color: "#26acd0" }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-3xl font-headline font-bold group-hover:text-primary transition-colors tracking-tight text-right"
                >
                  {nextProject.name.toUpperCase()}
                </motion.span>
              </Link>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </Layout>
  );
}
