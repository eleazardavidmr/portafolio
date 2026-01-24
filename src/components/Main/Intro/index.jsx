import { motion } from "framer-motion";
import Button from "@components/Main/Intro/Button";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";

export default function Intro() {
  return (
    <section
      id="inicio"
      className="min-h-[60vh] w-full px-6 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 overflow-hidden py-20"
    >
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        className="w-full md:w-1/2 flex justify-center md:justify-end relative"
      >
        <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-75 -z-10" />

        <img
          src="/img/profile.jpg"
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
        <div className="space-y-4 flex flex-col items-center md:items-start">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 hover:bg-primary/20 transition-all group"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-xs font-bold text-primary tracking-wide uppercase">
              Nuevo Blog Disponible
            </span>
            <IoMdArrowForward className="text-xs text-primary group-hover:translate-x-1 transition-transform" />
          </Link>

          <span className="text-sm font-bold tracking-[0.3em] text-cyan-700 dark:text-cyan-400 uppercase">
            Frontend Developer
          </span>
          <h1 className="text-5xl md:text-8xl font-extrabold font-jetbrains tracking-tighter leading-[0.9]">
            <span className="block text-slate-800 dark:text-white">
              Eleazar
            </span>
            <span className="block bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
              Muñoz
            </span>
          </h1>
        </div>

        <p className="w-[90%] md:w-[85%] text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed font-inter">
          Desarrollador web frontend apasionado por el diseño minimalista y las
          experiencias digitales fluidas. Especializado en React y ecosistemas
          modernos.
        </p>

        <div className="pt-6 flex flex-wrap gap-4 justify-center md:justify-start">
          <Button to={"/certificados"} title="Ver Certificados" />
          <a
            href="#proyectos"
            className="px-8 py-3 rounded-full border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center justify-center min-w-[180px]"
          >
            Ver Proyectos
          </a>
        </div>
      </motion.div>
    </section>
  );
}
