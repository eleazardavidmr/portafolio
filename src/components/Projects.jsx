import styles from "../componentsCSS/projects.module.css";
import knockoutsimg from "../img/knockoutspizzas_screenshot.webp";
import todoapimg from "../img/todoapp_screenshot.jpg";
import alarmAppImg from "../img/alarmapp_screenshot.webp";
import weatherappImg from "../img/weatherapp_screenshot.jpg";
export function Projects() {
  return (
    <>
      <span className={styles.title}>Proyectos 📈</span>
      <div className={styles.projects_main} id="projects">
        <section className={styles.projects_container}>
          <div className={styles.project}>
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
          </div>

          <div className={styles.project}>
            <div className={styles.project_image_container}>
              <img
                src={todoapimg}
                alt="ToDo App"
                className={styles.project_image}
              />
            </div>
            <div className={styles.project_info}>
              <span className={styles.project_title}>ToDo App</span>
              <div>
                <p className={styles.project_p}>
                  Guarda todas tus tareas pendientes. 
                </p>
                <a
                  className={styles.project_a}
                  target="_blank"
                  href="https://edmr-todoapp.surge.sh"
                >
                  edmr-todoapp.surge.sh
                </a>
              </div>
            </div>
          </div>

          <div className={styles.project}>
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
          </div>

          <div className={styles.project}>
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
          </div>
        </section>
      </div>
    </>
  );
}
