import historiaYFuncionamientoDeInternet from "../img/certificados/historiaDeLaWeb.png";
import computacionBasica from "../img/certificados/computacionBasica.png";
import fundamentosDeIngenieria from "../img/certificados/fundamentosDeIngenieria.png";
import programacionBasica from "../img/certificados/programacionBasica.png";
import styles from "../componentsPages/PagesCSS/certificates.module.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function Certificates() {
  const diplomas = [
    {
      src: historiaYFuncionamientoDeInternet,
      title: "Historia y Funcionamiento de Internet",
    },
    {
      src: computacionBasica,
      title: "Computación Básica",
    },
    {
      src: fundamentosDeIngenieria,
      title: "Fundamentos de Ingeniería de Software",
    },
    {
      src: programacionBasica,
      title: "Programación Básica",
    },
  ];

  return (
    <>
      <Link to="/" className={styles.link}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="#00bfff"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-left"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5 12l14 0" />
          <path d="M5 12l6 6" />
          <path d="M5 12l6 -6" />
        </svg>
        <h2 className={styles.title}>Certificados</h2>
      </Link>
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className={styles.main}
      >
        {diplomas.map((diploma) => (
          <div key={diploma.title} className={styles.certificate}>
            <img
              src={diploma.src}
              alt={`Curso de ${diploma.title}`}
              className={styles.image}
            />
            <h3 className={styles.subtitle}>{diploma.title}</h3>
          </div>
        ))}
      </motion.div>
    </>
  );
}
