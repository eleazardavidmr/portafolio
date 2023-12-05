import styles from "../componentsCSS/main.module.css";
import eleazarmunoz_photo from '../img/EleazarMunoz.jpg'
import { motion } from 'framer-motion'
export function Main() {
  return (
    <>
      <div className={styles.main_container}>
        <motion.div className={styles.main_imgContainer}>
          <motion.img
            initial={{scale: 0.5, opacity: 0}}
            animate={{scale: 1, opacity: 1}}
            transition={{duration: 0.3}}
            src={eleazarmunoz_photo}
            alt="Eleazar Muñoz"
            className={styles.main_img}
          />
        </motion.div>
        <div className={styles.main_info}>
				<span className={styles.title}>Eleazar Muñoz</span>				
				<p>Un frontend developer de 16 años nacido en Venezuela.</p>
		</div>
      </div>
    </>
  );
}
