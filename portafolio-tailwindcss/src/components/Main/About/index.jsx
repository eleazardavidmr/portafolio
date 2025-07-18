import SectionTitle from "../../SectionTitle";
import Card2 from "./Card2";
import { motion } from "framer-motion";
export default function About() {
  return (
    <motion.section
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="flex items-center justify-between flex-col md:flex-row"
    >
      <div className="md:w-[50%]">
        <SectionTitle title="Sobre mí 👋" />
        <p className="mt-5">
          Descubrí el mundo de la programación en el año 2020 durante la
          pandemia. Desde ese momento mi pasión por la programación y la
          tecnología ha venido en crecimiento hasta el día de hoy. Mis primeros
          proyectos fueron muy básicos y a lo largo del tiempo me he ido
          perfeccionando.
        </p>
      </div>
      <Card2 />
    </motion.section>
  );
}
