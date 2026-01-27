import jorgevalbuena from "/img/projects/immunotec.jpg";
import dydcrochet from "/img/projects/dydcrochet.webp";
import stizzo_planet from "/img/projects/stizzo-planet.webp";
import atelierdeldulce from "/img/projects/atelierdeldulce.webp";
import arrozConLeche from "/img/projects/arroz-con-leche.jpg";
import retroStack from "/img/projects/retro-stack.webp";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Project from "@components/Projects/Project";
import SectionTitle from "@components/SectionTitle";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiSupabase,
} from "react-icons/si";
import LogoLoop from "@components/react-bits/LogoLoop";
export const PROJECTS = [
  {
    id: 6,
    name: "Retro Stack",
    url: "https://retro-stack.vercel.app/",
    urlName: "retro-stack.vercel.app",
    img: retroStack,
  },
  {
    id: 5,
    name: "Arroz con Leche",
    url: "https://arroces.vercel.app/",
    urlName: "arroces.vercel.app",
    img: arrozConLeche,
  },
  {
    id: 4,
    name: "Immunotec - Jorge Valbuena",
    url: "https://jorgevalbuena.surge.sh",
    urlName: "jorgevalbuena.surge.sh",
    img: jorgevalbuena,
  },
  {
    id: 3,
    name: "Dyd Crochet",
    url: "https://dydcrochet.surge.sh",
    urlName: "dydcrochet.surge.sh",
    img: dydcrochet,
  },
  {
    id: 2,
    name: "Stizzo Planet",
    url: "https://stizzoplanet.surge.sh",
    urlName: "stizzoplanet.surge.sh",
    img: stizzo_planet,
  },
  {
    id: 1,
    name: "Atelier del Dulce",
    url: "https://atelierdeldulce.surge.sh",
    urlName: "atelierdeldulce.surge.sh",
    img: atelierdeldulce,
  },
];

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiSupabase />, title: "Supabase", href: "https://supabase.com" },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
];

export default function Projects() {
  // Configuración de animación para el contenedor
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Retraso entre cada tarjeta
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full py-10 px-4" id="proyectos">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Proyectos 💻" />
        <p className="mb-8 mt-4 text-center text-lg text-gray-600 dark:text-gray-300">
          Échale un vistazo a una selección de mis trabajos recientes:
        </p>

        {/* Grid Container */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Usamos .slice(0, 5) para mostrar solo los primeros 2 proyectos 
            como tenías antes, pero ahora es dinámico. Si quieres mostrar 4, 
            solo cambia el 2 por un 4.
          */}
          {PROJECTS.slice(0, 2).map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Project data={project} />
            </motion.div>
          ))}
        </motion.div>

        {/* Botón Ver Todos */}
        <div className="w-full flex justify-center mt-12">
          <Link to="/proyectos">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white transition-all duration-200 bg-gray-900 dark:bg-primary rounded-full hover:shadow-lg hover:shadow-primary/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              <span>Ver todos los proyectos</span>
              {/* Icono de flecha que se mueve al hacer hover */}
              <svg
                className="w-5 h-5 ml-2 -mr-1 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </motion.button>
          </Link>
        </div>
      </div>
      <div className="w-full flex justify-center mt-12">
        {/* <LogoLoop
          logos={techLogos}
          speed={100}
          direction="left"
          logoHeight={60}
          gap={60}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          ariaLabel="Technology partners"
        /> */}
      </div>
    </section>
  );
}
