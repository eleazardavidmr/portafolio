import { motion } from "framer-motion";
import PropTypes from "prop-types";
import styles from "../componentsCSS/projects.module.css";

export function Project({ img, title, url, urlName }) {
  return (
    <>
      <motion.div
        initial={{ x: -100, opacity: 0, scale: 1 }}
        whileInView={{ x: 0, opacity: 1, scale: 1.1 }}
        transition={{ duration: 0.3 }}
        className={styles.project}
      >
        <img src={img} alt={title} className={styles.project_img} />
        <div className={styles.info}>
          <p>{title}</p>
          <a href={url} className={styles.project_a}>
            {urlName}
          </a>
        </div>
      </motion.div>
    </>
  );
}

Project.propTypes = {
  img: PropTypes.shape({
    src: PropTypes.string.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  urlName: PropTypes.string.isRequired,
};
