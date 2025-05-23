import jorgevalbuena from "/img/projects/immunotec.jpg";
import dydcrochet from "/img/projects/dydcrochet.png";
import knockoutspizzas from "/img/projects/knockoutspizzas.png";
import stizzo_planet from "/img/projects/stizzo-planet.png";
import atelierdeldulce from "/img/projects/atelierdeldulce.png";

import Project from "./Project";
export default function Projects() {
  const PROJECTS = [
    {
      id: 4,
      name: "Atelier del Dulce",
      url: "https://atelierdeldulce.surge.sh",
      urlName: "atelierdeldulce.surge.sh",
      img: atelierdeldulce,
    },
    {
      id: 3,
      name: "Stizzo Planet",
      url: "https://stizzoplanet.surge.sh",
      urlName: "stizzoplanet.surge.sh",
      img: stizzo_planet,
    },
    {
      id: 2,
      name: "Dyd Crochet",
      url: "https://dydcrochet.surge.sh",
      urlName: "dydcrochet.surge.sh",
      img: dydcrochet,
    },
    {
      id: 1,
      name: "Immunotec - Jorge Valbuena",
      url: "https://jorgevalbuena.surge.sh",
      urlName: "jorgevalbuena.surge.sh",
      img: jorgevalbuena,
    },
  ];
  return (
    <>
      <h1 className="font-bold text-primary text-2xl self-start mt-20 ml-5">
        Proyectos 📈
      </h1>
      <section className="mt-5 " id="proyectos">
        <div className="flex items-center justify-center flex-col gap-8 mt-5">
          {PROJECTS.map((project, index) => {
            return <Project key={index} data={project} />;
          })}
        </div>
      </section>
    </>
  );
}
