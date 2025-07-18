import { motion } from "framer-motion";
import SectionTitle from "../../SectionTitle";

export default function Experience() {
  return (
    <motion.section
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      id="experiencia"
    >
      <SectionTitle title="Experiencia 🛠️" />
      <ul className="ml-5 mt-5">
        <li>
          Llevo alrededor de 5 años desarrollando páginas web, por practica y
          por pasión.
        </li>
        <li>
          He hecho varios cursos de desarrollo web en plataformas como
          freeCodeCamp y Platzi, pero la mayoría de mis conocimientos son
          gracias a Youtube.
        </li>
        <li>
          Mis más grandes proyectos son la página web de Jorge Luis Valbuena,
          para Immunotec; y Stizzo Planet, un ecommerce de zapatillas
        </li>
        <li>
          Actual estudiante de:{" "}
          <a
            href="https://polisuperior.edu.co/"
            className="underline underline-offset-2 decoration-red-700 hover:decoration-2 text-red-500 font-medium"
            target="_blank"
          >
            Politénico Superior
          </a>{" "}
          en Técnico Laboral en Auxiliar en Sistemas Informáticos
        </li>
      </ul>
    </motion.section>
  );
}
