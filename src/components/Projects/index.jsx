import jorgevalbuena from "/img/projects/immunotec/immunotec.jpg";
import dydcrochet from "/img/projects/dydcrochet/dydcrochet.webp";
import stizzo_planet from "/img/projects/stizzoplanet/stizzo-planet.webp";
import atelierdeldulce from "/img/projects/atelierdeldulce/atelierdeldulce.webp";
import arrozConLeche from "/img/projects/arroz-con-leche/arroz-con-leche.jpg";
import retroStack from "/img/projects/retro-stack/retro-stack.webp";
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
    slug: "retro-stack",
    url: "https://retro-stack.vercel.app/",
    urlName: "retro-stack.vercel.app",
    img: retroStack,
    description:
      "Un IDE visual de alto rendimiento diseñado para manipulación de código de baja latencia. Construido durante un sprint de 48 horas, desafía los límites tradicionales de la edición basada en terminal al introducir una capa visual espacial sobre comandos de shell estándar.",
    longDescription:
      "El desafío principal fue gestionar la sincronización de estado en tiempo real entre el árbol de sintaxis abstracta y el gráfico visual del nodo sin introducir lag detectable. A través de algoritmos de diferencia personalizados, logramos tiempos de renderizado sub-5ms incluso en estructuras de archivos complejas. El resultado final es una herramienta utilizada por desarrolladores para visualizar arquitecturas de código.",
    technologies: ["React", "Tailwind CSS", "Vercel", "TypeScript"],
    screenshots: [
      "/img/projects/retro-stack/screenshot1.jpg", // Reemplaza con captura de pantalla real
      "/img/projects/retro-stack/screenshot2.jpg", // Reemplaza con captura de pantalla real
    ],
    branch: "main",
    status: "DESPLEGADO",
    client: "Proyecto Personal",
  },
  {
    id: 5,
    name: "Arroz con Leche",
    slug: "arroz-con-leche",
    url: "https://arroces.vercel.app/",
    urlName: "arroces.vercel.app",
    img: arrozConLeche,
    description:
      "Una aplicación web moderna para un proyecto culinario. Cuenta con una interfaz elegante para mostrar recetas y contenido de alimentos con animaciones suaves y diseño responsivo.",
    longDescription:
      "Construida con React y Tailwind CSS, este proyecto demuestra principios limpios de diseño UI/UX y desarrollo web responsivo. La aplicación proporciona una experiencia de usuario atractiva para los entusiastas de la comida.",
    technologies: ["React", "Tailwind CSS", "Vercel", "JavaScript"],
    screenshots: [
      "/img/projects/arroz-con-leche/screenshot1.jpg", // Reemplaza con captura de pantalla real
      "/img/projects/arroz-con-leche/screenshot2.jpg", // Reemplaza con captura de pantalla real
    ],
    branch: "main",
    status: "DESPLEGADO",
    client: "Proyecto Culinario",
  },
  {
    id: 4,
    name: "Immunotec - Jorge Valbuena",
    slug: "immunotec-jorge-valbuena",
    url: "https://jorgevalbuena.surge.sh",
    urlName: "jorgevalbuena.surge.sh",
    img: jorgevalbuena,
    description:
      "Un sitio web de cartera profesional para el Dr. Jorge Valbuena que muestra experiencia en inmunología e investigación médica. Presenta un diseño limpio y profesional con énfasis en credibilidad y experiencia.",
    longDescription:
      "Este proyecto demuestra principios profesionales de diseño web con enfoque en credibilidad médica. El sitio incluye secciones de investigación, publicaciones e información de contacto con un diseño elegante y minimalista.",
    technologies: ["React", "HTML5", "CSS3", "JavaScript"],
    screenshots: [
      "/img/projects/immunotec/screenshot1.jpg", // Reemplaza con captura de pantalla real
      "/img/projects/immunotec/screenshot2.jpg", // Reemplaza con captura de pantalla real
    ],
    branch: "main",
    status: "DESPLEGADO",
    client: "Dr. Jorge Valbuena",
  },
  {
    id: 3,
    name: "Dyd Crochet",
    slug: "dyd-crochet",
    url: "https://dydcrochet.surge.sh",
    urlName: "dydcrochet.surge.sh",
    img: dydcrochet,
    description:
      "Una plataforma de comercio electrónico para un negocio de crochet. Presenta vitrinas de productos, funcionalidad de carrito de compras y una hermosa galería de artículos de crochet hechos a mano.",
    longDescription:
      "Este proyecto combina prácticas modernas de comercio electrónico con las necesidades de negocios artesanales. Construido con diseño responsivo para mostrar la belleza de productos de crochet elaborados a mano en todos los dispositivos.",
    technologies: ["React", "Tailwind CSS", "JavaScript", "E-commerce"],
    screenshots: [
      "/img/projects/dydcrochet/screenshot1.jpg", // Reemplaza con captura de pantalla real
      "/img/projects/dydcrochet/screenshot2.jpg", // Reemplaza con captura de pantalla real
    ],
    branch: "main",
    status: "DESPLEGADO",
    client: "Tienda Dyd Crochet",
  },
  {
    id: 2,
    name: "Stizzo Planet",
    slug: "stizzo-planet",
    url: "https://stizzoplanet.surge.sh",
    urlName: "stizzoplanet.surge.sh",
    img: stizzo_planet,
    description:
      "Una experiencia web interactiva para la marca Stizzo. Presenta animaciones atractivas, vitrinas de productos y un enfoque de diseño moderno para la narración de marca.",
    longDescription:
      "Este proyecto muestra técnicas de animación avanzadas y elementos interactivos para crear una experiencia de marca inmersiva. El diseño enfatiza la creatividad e innovación en la presencia digital.",
    technologies: ["React", "JavaScript", "CSS3", "Animations"],
    screenshots: [
      "/img/projects/stizzoplanet/screenshot1.jpg", // Reemplaza con captura de pantalla real
      "/img/projects/stizzoplanet/screenshot2.jpg", // Reemplaza con captura de pantalla real
    ],
    branch: "main",
    status: "DESPLEGADO",
    client: "Marca Stizzo",
  },
  {
    id: 1,
    name: "Atelier del Dulce",
    slug: "atelier-del-dulce",
    url: "https://atelierdeldulce.surge.sh",
    urlName: "atelierdeldulce.surge.sh",
    img: atelierdeldulce,
    description:
      "Un sitio web hermosamente diseñado para un negocio de pasteles y postres. Presenta galerías de productos, información de pedidos e una interfaz elegante que refleja el arte de la confitería.",
    longDescription:
      "Este proyecto combina diseño estético con experiencia de usuario funcional para mostrar creaciones de postres artesanales. El sitio incluye galerías, sección acerca de e información de contacto para una presencia en línea completa.",
    technologies: ["React", "Tailwind CSS", "JavaScript", "Responsive Design"],
    screenshots: [
      "/img/projects/atelierdeldulce/screenshot1.jpg", // Reemplaza con captura de pantalla real
      "/img/projects/atelierdeldulce/screenshot2.jpg", // Reemplaza con captura de pantalla real
    ],
    branch: "main",
    status: "DESPLEGADO",
    client: "Panadería Atelier del Dulce",
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
