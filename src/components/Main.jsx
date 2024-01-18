import styles from "../componentsCSS/main.module.css";
import eleazarmunoz_photo from '../img/eleazarmunoz.jpg'
import React from "react";
import { useTypewriter, Cursor, Typewriter } from "react-simple-typewriter";
export function Main() {
  const {text} = useTypewriter({
    words: ["Eleazar", "Programador", "Desarrollador"],
    loop: {},
    typeSpeed: 120,
  })
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
            words={['Desarrollador Web', 'Programador', 'Eleazar Muñoz']}
            loop={10}
            cursor
            cursorStyle='_'
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
