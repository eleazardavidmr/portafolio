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
        <h4 className={styles.send_mail_h4}>Mandame un correo electrónico!</h4>
        <div className={styles.mail_div}>
          <input type="mail" value="eleazardavidmr@gmail.com" />

          <svg
            className={styles.send_svg}
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-send-2"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#d1d5dc"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4.698 4.034l16.302 7.966l-16.302 7.966a.503 .503 0 0 1 -.546 -.124a.555 .555 0 0 1 -.12 -.568l2.468 -7.274l-2.468 -7.274a.555 .555 0 0 1 .12 -.568a.503 .503 0 0 1 .546 -.124z" />
            <path d="M6.5 12h14.5" />
          </svg>
        </div>
      </div>
    </>
  );
}
