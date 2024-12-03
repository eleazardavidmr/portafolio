import styles from "../componentsCSS/main.module.css";
import fotoPrueba from "../img/fotopruebaRecortada.jpg";
import { Typewriter } from "react-simple-typewriter";
export function Main() {
  return (
    <>
      <div className={styles.main_container} id="main">
        <div className={styles.main_imgContainer}>
          <img
            src={fotoPrueba}
            alt="Eleazar Muñoz"
            className={styles.main_img}
          />
        </div>

        <div className={styles.main_info}>
          <h1 className={styles.title}>
            <span className={styles.main_span}>
              <Typewriter
                words={["Eleazar Muñoz"]}
                loop={5}
                cursor={true}
                cursorStyle={"_"}
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h1>
          <p>Un desarrollador web fronted de 17 años nacido en Venezuela.</p>
        </div>
      </div>
    </>
  );
}
