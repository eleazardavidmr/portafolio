import styles from "../componentsCSS/experience.module.css";
export function Experience() {
  return (
    <>
      <div className={styles.xp_main} id="experience">
        <h2 className={styles.title}>Experiencia 🛠️</h2>
        <ul>
          <li>
            Llevo alrededor de 4 años desarrollando páginas web, por practica y
            por pasión.
          </li>
          <li>
            He hecho varios cursos de desarrollo web en plataformas como
            freeCodeCamp y Platzi, pero la mayoría de mis conocimientos son
            gracias a Youtube.
          </li>
        </ul>
      </div>
    </>
  );
}
