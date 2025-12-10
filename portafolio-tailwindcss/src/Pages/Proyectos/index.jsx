import { motion } from "framer-motion";
import GoBackButton from "../../components/Navbar/GoBackButton";
import { PROJECTS } from "../../components/Projects"; // Asegúrate de que la ruta sea correcta
import Project from "../../components/Projects/Project";
import Background from "../../components/Background";

export default function Proyectos() {
  // Variantes para la animación escalonada (Stagger)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Efecto cascada rápido
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 50, damping: 20 },
    },
  };

  return (
    <>
      <Background />

      {/* Contenedor Principal: min-h-screen asegura que el fondo cubra todo */}
      <section className="min-h-screen w-full py-10 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* ENCABEZADO DE PÁGINA */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
            <div className="flex flex-col gap-4">
              <GoBackButton />

              <div className="ml-2">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white font-jetbrains">
                  <span className="text-primary mr-2">{">"}</span>
                  Portafolio Completo
                </h1>
                <p className="mt-2 text-gray-600 dark:text-gray-300 font-inter max-w-xl">
                  Una colección detallada de mis desarrollos, experimentos y
                  soluciones web.
                </p>
              </div>
            </div>
          </div>

          {/* GRID DE PROYECTOS */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            // CAMBIO CLAVE: Grid responsivo real
            // grid-cols-1 (móvil) -> grid-cols-2 (tablet) -> grid-cols-3 (desktop grande)
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {PROJECTS.map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                {/* Reutilizamos tu componente Project que ya mejoramos antes */}
                <Project data={project} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
