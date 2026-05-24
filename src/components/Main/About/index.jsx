import SectionTitle from "@components/SectionTitle";
import DeveloperCard from "@components/Main/About/DeveloperCard";
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
            Soy Eleazar, desarrollador web con experiencia en React y tecnologías modernas. Mi enfoque es simple: sitios que se vean bien y que trabajen para tu negocio.
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
