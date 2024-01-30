import styles from "../componentsCSS/projects.module.css";
import knockoutsimg from "../img/projectsImg/knockoutspizzas_screenshot.webp";
import todoapimg from "../img/projectsImg/todoapp_screenshot.jpg";
import alarmAppImg from "../img/projectsImg/alarmapp_screenshot.webp";
import weatherappImg from "../img/projectsImg/weatherapp_screenshot.jpg";
import roraimaTravel from "../img/projectsImg/roraimaTravel.png";
import { motion } from "framer-motion";
export function Projects() {
  return (
    <>
      <span className={styles.title}>Proyectos 📈</span>
      <div className={styles.projects_main} id="projects">
        <section className={styles.projects_container}>
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
                src={alarmAppImg}
                alt="Alarm App"
                className={styles.project_image}
              />
            </div>
            <div className={styles.project_info}>
              <span className={styles.project_title}>Alarm App</span>
              <div>
                <p className={styles.project_p}>
                  Aplicacion para que crear alarmas.
                </p>
                <a
                  className={styles.project_a}
                  target="_blank"
                  href="https://edmr-alarmapp.surge.sh"
                >
                  edmr-alarmapp.surge.sh
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
                src={weatherappImg}
                alt="Weather App"
                className={styles.project_image}
              />
            </div>

            <div className={styles.project_info}>
              <span className={styles.project_title}>Weather App</span>
              <div>
                <p className={styles.project_p}>
                  Puedes ver el clima de cualquier ciudad del mundo.
                </p>
                <a
                  className={styles.project_a}
                  target="_blank"
                  href="https://edmr-weatherapp.surge.sh"
                >
                  edmr-weatherapp.surge.sh
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
        </section>
      </div>
    </>
  );
}
