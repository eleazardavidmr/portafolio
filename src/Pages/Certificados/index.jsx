import { motion } from "framer-motion";
import Background from "@components/Background";
import GoBackButton from "@components/Navbar/GoBackButton";

export default function Certificados() {
  const CERTIFICADOS = [
    {
      id: 7,
      title: "Programación Básica",
      src: "/img/certificados/programacion-basica.webp",
    },
    {
      id: 6,
      title: "Maquetación Mobile-First",
      src: "/img/certificados/mobile-first.webp",
    },
    {
      id: 5,
      title: "Historia de la Web",
      src: "/img/certificados/historia-de-la-web.webp",
    },
    {
      id: 4,
      title: "Fundamentos de Ing. de Software",
      src: "/img/certificados/fundamentos-de-ingenieria-de-software.webp",
    },
    {
      id: 3,
      title: "Curso de Diseño",
      src: "/img/certificados/diseno.webp",
    },
    {
      id: 2,
      title: "ReactJS con Vite y TailwindCSS",
      src: "/img/certificados/curso-react-vite-tailwindcss.webp",
    },
    {
      id: 1,
      title: "Computación Básica",
      src: "/img/certificados/computacion-basica.webp",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 50 },
    },
  };

  return (
    <>
      <Background />

      <section className="min-h-screen w-full py-10 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* ENCABEZADO */}
          <div className="flex flex-col md:flex-row items-start justify-between gap-6 mb-12">
            <div className="flex flex-col gap-4">
              <GoBackButton />
              <div className="ml-2">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white font-jetbrains">
                  <span className="text-primary mr-2">{">"}</span>
                  Certificaciones
                </h1>
                <p className="mt-2 text-gray-600 dark:text-gray-300 font-inter">
                  Validación de mis conocimientos y trayectoria de aprendizaje.
                </p>
              </div>
            </div>

            {/* BANNER DESTACADO: INGLÉS EF SET */}
            <motion.a
              href="https://cert.efset.org/en/jX4kiV"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="group relative flex items-center gap-4 p-5 rounded-2xl bg-white/50 dark:bg-slate-800/50 border border-primary/30 shadow-lg backdrop-blur-sm md:max-w-xs cursor-pointer hover:bg-primary/5 transition-colors"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 text-2xl">
                🇺🇸
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-800 dark:text-white font-jetbrains group-hover:text-primary transition-colors">
                  EF SET English Certificate
                </h3>
                <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mt-1 font-inter">
                  <span>Ver credencial oficial</span>
                  <svg
                    className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    ></path>
                  </svg>
                </div>
              </div>
            </motion.a>
          </div>

          {/* GRID DE CERTIFICADOS */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {CERTIFICADOS.map((certificado) => (
              <motion.div
                key={certificado.id}
                variants={itemVariants}
                className="group flex flex-col h-full bg-white dark:bg-slate-900 border border-gray-100 dark:border-white-light/10 rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Contenedor de Imagen */}
                <div className="relative overflow-hidden aspect-video bg-gray-100 dark:bg-slate-800">
                  <img
                    src={certificado.src}
                    alt={certificado.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Overlay sutil al hacer hover */}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
                </div>

                {/* Título del certificado */}
                <div className="p-5 border-t border-gray-100 dark:border-white-light/5">
                  <h3 className="text-base font-bold text-gray-800 dark:text-gray-200 font-jetbrains group-hover:text-primary transition-colors">
                    {certificado.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
