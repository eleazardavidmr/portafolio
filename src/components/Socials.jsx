import styles from "../componentsCSS/socials.module.css";
import githubIcon from "../img/githubIcon.png";
import linkedinIcon from "../img/linkedinIcon.png";
import instagramIcon from "../img/instagramIcon.png";
import { motion } from "framer-motion";
export function Socials() {
  return (
    <>
      <div className={styles.socials_main} id="contact">
        <h1>Contacto 📞</h1>
        <div className={styles.socials}>
          <motion.a
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className={styles.social_container}
            target="_blank"
            href="https://github.com/eleazardavidmr"
          >
            <img
              src={githubIcon}
              alt="GitHub"
              className={styles.socials_icon}
            />
            GitHub
          </motion.a>
          <motion.a
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            target="_blank"
            className={`${styles.social_container} ${styles.linkedin_social}`}
            href="https://www.linkedin.com/in/eleazarmunoz-4101542a2"
          >
            <img
              src={linkedinIcon}
              alt="LinkedIn"
              className={styles.socials_icon}
            />
            LinkedIn
          </motion.a>
          <motion.a
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            target="_blank"
            className={styles.social_container}
            href="https://www.instagram.com/davidd.720"
          >
            <img
              src={instagramIcon}
              alt="Instagram"
              className={styles.socials_icon}
            />
            Instagram
          </motion.a>
        </div>
      </div>
    </>
  );
}
