import jorgevalbuena from "/img/projects/immunotec.jpg";
import dydcrochet from "/img/projects/dydcrochet.png";
import stizzo_planet from "/img/projects/stizzo-planet.png";
import atelierdeldulce from "/img/projects/atelierdeldulce.png";
import { Link } from "react-router-dom";

import Project from "./Project";
import SectionTitle from "../SectionTitle";

import { motion } from "framer-motion";
export const PROJECTS = [
  {
    id: 1,
    name: "Atelier del Dulce",
    url: "https://atelierdeldulce.surge.sh",
    urlName: "atelierdeldulce.surge.sh",
    img: atelierdeldulce,
  },
  {
    id: 2,
    name: "Stizzo Planet",
    url: "https://stizzoplanet.surge.sh",
    urlName: "stizzoplanet.surge.sh",
    img: stizzo_planet,
  },
  {
    id: 3,
    name: "Dyd Crochet",
    url: "https://dydcrochet.surge.sh",
    urlName: "dydcrochet.surge.sh",
    img: dydcrochet,
  },
  {
    id: 4,
    name: "Immunotec - Jorge Valbuena",
    url: "https://jorgevalbuena.surge.sh",
    urlName: "jorgevalbuena.surge.sh",
    img: jorgevalbuena,
  },
];
export default function Projects() {
  return (
    <>
      <section className="mt-5 w-full p-5" id="proyectos">
        <SectionTitle title="Proyectos 💻" />
        <p className="mb-5 mt-5 mx-5">
          Échale un vistazo a mis mejores proyectos:
        </p>
        <div className="md:grid grid-cols-2 grid-rows-1 flex flex-column flex-wrap md:w-full mx-auto gap-5">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
            viewport={{ once: true }}
          >
            <Project key={PROJECTS[0].id} data={PROJECTS[0]} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, type: "spring", delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Project key={PROJECTS[1].id} data={PROJECTS[1]} />
          </motion.div>
        </div>
        <Link to="/proyectos" className="w-full flex justify-center mt-5">
          <motion.button
            whileHover={{ scale: 1.03 }}
            className=" bg-red-900 text-red-300 focus:outline-none focus:ring-4 focus:ring-red-400 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 hover:shadow-lg transition-shadow"
          >
            Ver todos
          </motion.button>
        </Link>
      </section>
    </>
  );
}
