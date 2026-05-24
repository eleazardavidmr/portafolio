import { motion } from "framer-motion";
import SectionTitle from "@components/SectionTitle";

export default function Experience() {
  const experienceItems = [
    {
      id: 1,
      title: "Trayectoria",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-full h-full"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      ),
      content:
        "Llevo alrededor de 5 años desarrollando páginas web, combinando la práctica constante con una profunda pasión por la tecnología y la resolución de problemas.",
    },
    {
      id: 2,
      title: "Proyectos Destacados",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-full h-full"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
          />
        </svg>
      ),
      content: (
        <>
          Desarrollo de la web para{" "}
          <strong className="text-gray-900 dark:text-white font-semibold">
            Jorge Luis Valbuena
          </strong>{" "}
          (Immunotec) y el ecommerce{" "}
          <strong className="text-gray-900 dark:text-white font-semibold">
            Stizzo Planet
          </strong>
          .
        </>
      ),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="experiencia" className="w-full py-10 px-4">
      <SectionTitle title="Experiencia 🛠️" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-5xl mx-auto"
      >
        {experienceItems.map((item) => (
          <motion.div
            key={item.id}
            variants={itemVariants}
            // ESTILOS DE LA TARJETA:
            // 1. bg-white dark:bg-slate-900: Fondo sólido y limpio.
            // 2. border-white-light/10: Borde sutil en modo oscuro usando tu variable custom.
            // 3. hover:border-primary/40: Al pasar el mouse, el borde se pinta de tu color cyan.
            className="group flex flex-col sm:flex-row gap-5 p-6 rounded-3xl bg-white dark:bg-slate-900 border border-gray-100 dark:border-white-light/10 shadow-lg hover:shadow-xl hover:shadow-primary/5 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
          >
            {/* Contenedor del Icono */}
            {/* Flex-shrink-0 evita que el icono se aplaste si hay mucho texto */}
            <div className="flex-shrink-0">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <div className="w-7 h-7">{item.icon}</div>
              </div>
            </div>

            {/* Contenido de Texto */}
            <div className="flex flex-col">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 font-jetbrains group-hover:text-primary transition-colors">
                {item.title}
              </h3>

              <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-inter text-sm sm:text-base">
                {item.content}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
