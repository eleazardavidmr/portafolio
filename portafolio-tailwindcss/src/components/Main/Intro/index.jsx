import { motion } from "framer-motion";
import Button from "./Button";

export default function Intro() {
  return (
    <section
      id="inicio"
      // CAMBIO 1: Altura y fondo. Usamos min-h-screen para llenar la pantalla en móviles de forma inmersiva.
      // Añadimos overflow-hidden para evitar scroll horizontal por las animaciones.
      className="min-h-[90vh] w-full px-6 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 overflow-hidden py-20"
    >
      {/* --- COLUMNA IMAGEN --- */}
      <motion.div
        initial={{ x: -50, opacity: 0 }} // Reduje la distancia (-100 a -50) para que sea más sutil
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }} // Animación más rápida y con rebote orgánico
        className="w-full md:w-1/2 flex justify-center md:justify-end relative"
      >
        {/* Elemento decorativo detrás de la imagen (Glow) */}
        <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-75 -z-10" />

        <img
          src="/img/profile.png"
          alt="Eleazar Muñoz"
          className="rounded-3xl w-[80%] md:w-[70%] max-w-[400px] shadow-2xl border-4 border-white/10 transition-transform duration-300 hover:scale-105 object-cover"
        />
      </motion.div>

      {/* --- COLUMNA TEXTO --- */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
        className="flex flex-col items-center md:items-start justify-center gap-6 text-center md:text-left w-full md:w-1/2"
      >
        <div className="space-y-4">
          <span className="text-sm font-bold tracking-[0.3em] text-primary uppercase">
            Frontend Developer
          </span>
          <h1 className="text-5xl md:text-8xl font-black font-jetbrains tracking-tighter leading-[0.9]">
            <span className="block text-slate-800 dark:text-white">
              Eleazar
            </span>
            <span className="block bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
              Muñoz
            </span>
          </h1>
        </div>

        <p className="w-[90%] md:w-[85%] text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-inter">
          Desarrollador web frontend apasionado por el diseño minimalista y las
          experiencias digitales fluidas. Especializado en React y ecosistemas
          modernos.
        </p>

        <div className="pt-6 flex flex-wrap gap-4 justify-center md:justify-start">
          <Button to={"/certificados"} title="Ver Certificados" />
          <a
            href="#proyectos"
            className="px-8 py-3 rounded-full border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
          >
            Ver Proyectos
          </a>
        </div>
      </motion.div>
    </section>
  );
}
