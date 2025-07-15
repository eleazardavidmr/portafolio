import jorgevalbuena from "/img/projects/immunotec.jpg";
import dydcrochet from "/img/projects/dydcrochet.png";
import stizzo_planet from "/img/projects/stizzo-planet.png";
import atelierdeldulce from "/img/projects/atelierdeldulce.png";
import { Link } from "react-router-dom";

import Project from "./Project";
import SectionTitle from "../SectionTitle";
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
        <div className="flex items-center justify-center flex-col md:flex-row w-full">
          <Project key={PROJECTS[0].id} data={PROJECTS[0]} />
          <Project key={PROJECTS[1].id} data={PROJECTS[1]} />
        </div>
        <Link to="/proyectos" className="w-full flex justify-center mt-5">
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">
            Ver todos
          </button>
        </Link>
      </section>
    </>
  );
}
