import styles from "../componentsCSS/main.module.css";
import eleazarmunoz_photo from '../img/eleazarmunoz.jpg'
import { motion } from 'framer-motion'
export function Main() {
  return (
    <>
      <div className={styles.main_container}>
        <motion.div className={styles.main_imgContainer}>
          <motion.img
            src={eleazarmunoz_photo}
            alt="Eleazar Muñoz"
            className={styles.main_img}
          />
        </motion.div>
        <div className={styles.main_info}>
				<span className={styles.title}>Eleazar Muñoz</span>				
				<p>Soy un desarrollador web fronted de 16 años nacido en Venezuela.</p>
		</div>
      </div>
    </>
  );
}
