import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { fadeUp, stagger, spring } from "@constants/motion";
import { whatsappLink, LOCATION } from "@constants/contact";
import { PROJECTS } from "@components/Projects/data";

const STATS = [
  { value: "5 años", label: "diseñando y desarrollando sitios web" },
  { value: `${PROJECTS.length} proyectos`, label: "publicados y en línea" },
  { value: "< 2 semanas", label: "para lanzar tu sitio" },
];

export default function Intro() {
  return (
    <section
      id="inicio"
      className="mx-auto grid w-full max-w-content items-center gap-8 px-6 pb-8 pt-4 md:grid-cols-[1.25fr_1fr] md:gap-16 md:pt-12"
    >
      <motion.div
        variants={stagger(0.08)}
        initial="hidden"
        animate="visible"
        className="order-2 flex flex-col items-start md:order-1"
      >
        <motion.p variants={fadeUp} className="text-eyebrow text-primary">
          Eleazar Muñoz · Desarrollador web en {LOCATION}
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="text-display mt-4 text-balance text-label"
        >
          ¿Tu negocio no aparece en internet?
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-lead mt-6 max-w-xl text-pretty text-label-2"
        >
          Te construyo un sitio web profesional en menos de 2 semanas, para que
          tus clientes te encuentren antes que a la competencia.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Cuéntame tu proyecto
          </a>
          <a href="#proyectos" className="btn-secondary group">
            Ver proyectos
            <FiArrowRight
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ ...spring, duration: 0.9 }}
        className="order-1 w-full max-w-[8.5rem] md:order-2 md:max-w-none"
      >
        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-surface-2 md:rounded-4xl shadow-[0_30px_80px_-20px_rgb(0_0_0/0.35)]">
          <img
            src="/img/profile.jpg"
            alt="Retrato de Eleazar Muñoz"
            width={800}
            height={1000}
            // eslint-disable-next-line react/no-unknown-property -- React 18 aún no reconoce fetchPriority
            fetchpriority="high"
            className="h-full w-full object-cover object-top"
          />
        </div>
      </motion.div>

      <motion.dl
        variants={stagger(0.08)}
        initial="hidden"
        animate="visible"
        className="order-3 grid gap-6 border-t border-separator/10 pt-8 sm:grid-cols-3 md:col-span-2"
      >
        {STATS.map((stat) => (
          <motion.div
            key={stat.value}
            variants={fadeUp}
            className="flex flex-col-reverse gap-1"
          >
            <dt className="text-sm text-label-2">{stat.label}</dt>
            <dd className="text-title text-label">{stat.value}</dd>
          </motion.div>
        ))}
      </motion.dl>
    </section>
  );
}
