import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowLeft, FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import Layout from "@components/Layout";
import SEO from "@components/SEO";
import NotFoundPage from "@components/NotFoundPage";
import { PROJECTS } from "./data";
import { fadeUp, stagger, spring, revealOnView } from "@constants/motion";

const formatStatus = (status = "") =>
  status.charAt(0).toUpperCase() + status.slice(1).toLowerCase();

export default function ProjectDetail() {
  const { slug } = useParams();
  const projectIndex = PROJECTS.findIndex((p) => p.slug === slug);
  const project = PROJECTS[projectIndex];

  if (!project) return <NotFoundPage />;

  const previousProject =
    PROJECTS[(projectIndex - 1 + PROJECTS.length) % PROJECTS.length];
  const nextProject = PROJECTS[(projectIndex + 1) % PROJECTS.length];

  const facts = [
    { label: "Cliente", value: project.client },
    { label: "Estado", value: formatStatus(project.status) },
    {
      label: "Sitio",
      value: (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline underline-offset-4"
        >
          {project.urlName}
        </a>
      ),
    },
  ];

  return (
    <Layout>
      <SEO
        title={project.name}
        description={
          project.description ||
          `Proyecto ${project.name}: ${project.technologies?.join(", ")} — Portafolio de Eleazar Muñoz.`
        }
        keywords={project.technologies?.join(", ")}
        url={`/proyectos/${project.slug}`}
        image={project.img}
      />

      <article key={project.slug}>
        {/* Encabezado */}
        <motion.header
          variants={stagger(0.07)}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-content px-6 pt-6"
        >
          <motion.div variants={fadeUp}>
            <Link
              to="/proyectos"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-label-2 transition-colors hover:text-label"
            >
              <FiArrowLeft aria-hidden="true" />
              Proyectos
            </Link>
          </motion.div>
          <motion.p variants={fadeUp} className="text-eyebrow mt-8 text-primary">
            {project.client}
          </motion.p>
          <motion.h1 variants={fadeUp} className="text-display mt-3 text-label">
            {project.name}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-lead mt-5 max-w-3xl text-pretty text-label-2"
          >
            {project.description}
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Visitar el sitio
              <FiArrowUpRight aria-hidden="true" />
            </a>
          </motion.div>
        </motion.header>

        {/* Imagen principal */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.2 }}
          className="mx-auto mt-14 max-w-content px-6"
        >
          <div className="overflow-hidden rounded-4xl bg-surface-2 shadow-[0_30px_80px_-30px_rgb(0_0_0/0.4)]">
            <img
              src={project.img}
              alt={`Vista principal de ${project.name}`}
              // eslint-disable-next-line react/no-unknown-property -- React 18 aún no reconoce fetchPriority
              fetchpriority="high"
              className="aspect-[16/9] w-full object-cover"
            />
          </div>
        </motion.div>

        {/* Contenido y ficha técnica */}
        <div className="mx-auto mt-20 grid max-w-content gap-14 px-6 lg:grid-cols-[1fr_20rem] lg:gap-20">
          <motion.div
            variants={stagger(0.08)}
            {...revealOnView}
            className="flex flex-col gap-12"
          >
            {project.context && (
              <motion.section variants={fadeUp}>
                <h2 className="text-title text-label">El reto</h2>
                <p className="mt-4 text-[1.0625rem] leading-[1.7] text-label-2">
                  {project.context}
                </p>
              </motion.section>
            )}
            {project.longDescription && (
              <motion.section variants={fadeUp}>
                <h2 className="text-title text-label">Cómo lo construí</h2>
                <p className="mt-4 text-[1.0625rem] leading-[1.7] text-label-2">
                  {project.longDescription}
                </p>
              </motion.section>
            )}
          </motion.div>

          <motion.aside
            variants={fadeUp}
            {...revealOnView}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <dl className="card divide-y divide-separator/10 px-6">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex items-baseline justify-between gap-4 py-4"
                >
                  <dt className="text-sm text-label-2">{fact.label}</dt>
                  <dd className="text-right text-sm font-medium text-label">
                    {fact.value}
                  </dd>
                </div>
              ))}
              <div className="py-5">
                <dt className="text-sm text-label-2">Tecnologías</dt>
                <dd className="mt-3 flex flex-wrap gap-2">
                  {project.technologies?.map((tech) => (
                    <span key={tech} className="chip">
                      {tech}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
          </motion.aside>
        </div>

        {/* Capturas */}
        {project.screenshots?.length > 0 && (
          <section className="mx-auto mt-24 max-w-content px-6">
            <h2 className="text-title text-label">Capturas</h2>
            <motion.div
              variants={stagger(0.1)}
              {...revealOnView}
              className="mt-8 grid gap-6 md:grid-cols-2"
            >
              {project.screenshots.map((screenshot, index) => (
                <motion.figure
                  key={screenshot}
                  variants={fadeUp}
                  className="card overflow-hidden"
                >
                  <img
                    src={screenshot}
                    alt={`${project.name}, captura ${index + 1}`}
                    loading="lazy"
                    decoding="async"
                    className="w-full object-cover"
                  />
                </motion.figure>
              ))}
            </motion.div>
          </section>
        )}

        {/* Navegación entre proyectos */}
        <nav
          aria-label="Más proyectos"
          className="mx-auto mt-28 grid max-w-content gap-4 px-6 sm:grid-cols-2"
        >
          <Link
            to={`/proyectos/${previousProject.slug}`}
            className="group card flex flex-col gap-2 p-6 transition-transform duration-150 active:scale-[0.985]"
          >
            <span className="inline-flex items-center gap-1.5 text-sm text-label-2">
              <FiArrowLeft
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:-translate-x-0.5"
              />
              Anterior
            </span>
            <span className="text-title text-label">{previousProject.name}</span>
          </Link>
          <Link
            to={`/proyectos/${nextProject.slug}`}
            className="group card flex flex-col items-end gap-2 p-6 text-right transition-transform duration-150 active:scale-[0.985]"
          >
            <span className="inline-flex items-center gap-1.5 text-sm text-label-2">
              Siguiente
              <FiArrowRight
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </span>
            <span className="text-title text-label">{nextProject.name}</span>
          </Link>
        </nav>
      </article>
    </Layout>
  );
}
