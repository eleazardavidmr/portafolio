import styles from "../componentsCSS/projects.module.css";
import knockoutsimg from "../img/projectsImg/knockoutspizzas.png";
import dydcrochet from "../img/projectsImg/dydcrochet.png";
import roraimaTravel from "../img/projectsImg/roraimaTravel.png";
import jorgevalbuenaImg from "../img/projectsImg/jorgevalbuena.jpg";
import { motion } from "framer-motion";
export function Projects() {
  return (
    <>
      <div className={styles.projects_main} id="projects">
        <h2 className={styles.title}>Proyectos 📈</h2>
        <section className={styles.projects_container}>
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
