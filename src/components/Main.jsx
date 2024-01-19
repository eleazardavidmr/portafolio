import styles from "../componentsCSS/main.module.css";
import eleazarmunoz_photo from "../img/eleazarmunoz.jpg";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
export function Main() {
  return (
    <>
      <div className={styles.main_container} id="main">
        <div className={styles.main_imgContainer}>
          <img
            src={eleazarmunoz_photo}
            alt="Eleazar Muñoz"
            className={styles.main_img}
          />
        </div>
        <div className={styles.main_info}>
          <h1 className={styles.title}>
            <span className={styles.main_span}>
              <Typewriter
                words={[ "Soy Eleazar Muñoz", "Desarrollador Web", "Programador", "Entusiasta"]}
                loop={10}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
          <p>Un desarrollador web fronted de 16 años nacido en Venezuela.</p>
        </div>
      </div>
    </>
  );
}
