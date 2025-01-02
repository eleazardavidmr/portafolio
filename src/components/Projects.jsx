import styles from "../componentsCSS/projects.module.css";
import knockoutsimg from "../img/projectsImg/knockoutspizzas.png";
import dydcrochet from "../img/projectsImg/dydcrochet.png";
import jorgevalbuenaImg from "../img/projectsImg/jorgevalbuena.jpg";
import { Project } from "./Project";
export function Projects() {
  return (
    <>
      <div className={styles.projects_main} id="projects">
        <h2 className={styles.title}>Proyectos 📈</h2>
        <section className={styles.projects_container}>
          <Project
            img={jorgevalbuenaImg}
            title="Immunotec - Jorge Valbuena"
            url="https://jorgevalbuena.surge.sh"
            urlName="jorgevalbuena.surge.sh"
          />

          <Project
            img={dydcrochet}
            title="Dyd Crochet"
            url="https://dydcrochet.surge.sh"
            urlName="dydcrochet.surge.sh"
          />

          <Project
            img={knockoutsimg}
            title="Knockouts Pizzas"
            url="https://knockoutspizas.surge.sh"
            urlName="knockoutspizzas.surge.sh"
          />
        </section>
      </div>
    </>
  );
}
