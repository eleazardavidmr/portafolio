import styles from "../componentsCSS/aboutme.module.css";
//import { Link } from 'react-router-dom'
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
            Descubrí el mundo de la programación en el año 2020, durante la pandemia. Desde ahi, cada día más intentaba aprender y aprender
            más mientras mi pasión por la programación y la tecnología en
            general iba creciendo.
          </p>
        </div>
      </div>
    </>
  );
}
