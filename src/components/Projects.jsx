import styles from "../componentsCSS/projects.module.css";
import knockoutsimg from "../img/knockoutspizzas_screenshot.png";
import todoapimg from "../img/todoapp_screenshot.png";
export function Projects() {
  return (
    <>
      <span className={styles.title}>Proyectos 📈</span>
      <div className={styles.projects_main}>
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
                  Aplicacion para anotar tareas pendientes.
                </p>
                <a
                  className={styles.project_a}
                  href="https://edmr-todoapp.surge.sh"
                >
                  edmr-todoapp.surge.sh
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
