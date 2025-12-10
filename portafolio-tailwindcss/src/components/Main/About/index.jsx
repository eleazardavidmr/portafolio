import SectionTitle from "../../SectionTitle";
import DeveloperCard from "./DeveloperCard";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      id="sobre-mi"
      // CAMBIOS DE LAYOUT:
      // items-center: Alinea verticalmente el texto con la tarjeta (se ve más ordenado).
      // py-10 px-4: Padding estándar para que respire igual que las otras secciones.
      className="w-full flex flex-col md:flex-row items-center justify-between gap-12 py-10 px-4"
    >
      {/* Bloque de Texto */}
      <div className="md:w-1/2 lg:w-[55%]">
        <SectionTitle title="Sobre mí 👋" />

        <div className="font-inter space-y-6">
          <p className="mt-8 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Descubrí el mundo de la programación en el año{" "}
            {/* Resaltado con Primary y fuente técnica */}
            <span className="font-bold text-primary font-jetbrains text-xl">
              2020
            </span>{" "}
            durante la pandemia. Desde ese momento, mi pasión por el desarrollo
            web y la tecnología ha crecido exponencialmente, convirtiéndose en
            mi estilo de vida.
          </p>

          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Mis primeros proyectos fueron básicos, pero con dedicación y
            práctica constante me he ido perfeccionando. Hoy me especializo en{" "}
            <span className="font-bold text-primary font-jetbrains">
              Frontend Development
            </span>
            , transformando diseños complejos en experiencias de usuario
            fluidas, rápidas y accesibles.
          </p>
        </div>
      </div>

      {/* Bloque de Tarjeta */}
      {/* Añadimos relative para poder poner efectos decorativos detrás si quisieras luego */}
      <div className="w-full md:w-1/2 lg:w-[40%] flex justify-center md:justify-end relative">
        {/* Un brillo sutil detrás de la tarjeta para darle profundidad */}
        <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full opacity-0 md:opacity-50 pointer-events-none transform translate-x-10 translate-y-10" />

        <div className="relative z-10 w-full max-w-sm">
          <DeveloperCard />
        </div>
      </div>
    </motion.section>
  );
}
