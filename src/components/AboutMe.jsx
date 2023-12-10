import styles from "../componentsCSS/aboutme.module.css";
export function AboutMe() {
  return (
    <>
      <div className={styles.aboutme_main}>
        <h1 className={styles.aboutme_title}>
          Sobre mí

          👨‍💻
        </h1>
        <div className={styles.aboutme_info}>
          <p className={styles.p}>
            Descubrí el mundo de la programación en el año 2020 durante la
            pandemia. Desde ese momento mi pasión por la programación y la
            tecnología ha venido en crecimiento hasta el día de hoy. Mis
            primeros proyectos fueron muy básicos y a lo largo del tiempo me
            heido perfeccionando.
          </p>
        </div>
      </div>
    </>
  );
}
