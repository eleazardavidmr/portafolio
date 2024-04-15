import styles from "../componentsCSS/projects.module.css";
import knockoutsimg from "../img/projectsImg/knockoutspizzas_screenshot.webp";
import dydcrochet from "../img/projectsImg/dydcrochet.png";
import roraimaTravel from "../img/projectsImg/roraimaTravel.png";
import jorgevalbuenaImg from "../img/projectsImg/jorgevalbuena.jpg";
import { motion } from "framer-motion";
export function Projects() {
  return (
    <>
      <div className={styles.projects_main} id="projects">
        <span className={styles.title}>Proyectos 📈</span>
        <section className={styles.projects_container}>
          <motion.div
            initial={{ opacity: 0, scale: 0.3 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className={styles.project}
          >
            <div className={styles.project_image_container}>
              <img
                src={roraimaTravel}
                alt="Roraima Travel"
                className={styles.project_image}
              />
            </div>

            <div className={styles.project_info}>
              <span className={styles.project_title}>Roraima Travel</span>
              <div>
                <p className={styles.project_p}>
                  Roraima Travel es una agencia de viajes a la que le propuse
                  diseñarle una página web. Aquí está:
                </p>
                <a
                  href="https://roraimatravel.netlify.app/"
                  className={styles.project_a}
                  target="_blank"
                >
                  roraimatravel.netlify.app
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.3 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className={styles.project}
          >
            <div className={styles.project_image_container}>
              <img
                src={jorgevalbuenaImg}
                alt="Jorge Valbuena - Immunotec"
                className={`${styles.project_image} ${styles.jorgevalbuena_img}`}
              />
            </div>

            <div className={styles.project_info}>
              <span className={styles.project_title}>
                Jorge Valbuena - Immunotec
              </span>
              <div>
                <p className={styles.project_p}>
                  Esta página web es de un Consultor Independiente de Immunotec.
                </p>
                <a
                  href="https://jorgevalbuena.surge.sh"
                  className={styles.project_a}
                  target="_blank"
                >
                  jorgevalbuena.surge.sh
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.3 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className={styles.project}
          >
            <div className={styles.project_image_container}>
              <img
                src={knockoutsimg}
                alt="KnockoutsPizzas"
                className={styles.project_image}
              />
            </div>
            <div className={styles.project_info}>
              <span className={styles.project_title}>Knockouts Pizzas</span>
              <div>
                <p className={styles.project_p}>
                  Es una página web que diseñe para la pizzeria de mi familia.
                </p>
                <a
                  className={styles.project_a}
                  target="_blank"
                  href="https://knockoutspizzas.surge.sh"
                >
                  knockoutspizzas.surge.sh
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.3 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className={styles.project}
          >
            <div className={styles.project_image_container}>
              <img
                src={dydcrochet}
                alt="DydCrochet"
                className={styles.project_image}
              />
            </div>

            <div className={styles.project_info}>
              <span className={styles.project_title}>Dyd Crochet</span>
              <div>
                <p className={styles.project_p}>
                  Página en la que puedes saber sobre Amigurumis.
                </p>
                <a
                  className={styles.project_a}
                  target="_blank"
                  href="https://dydcrochet.surge.sh"
                >
                  dydcrochet.surge.sh
                </a>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
}
