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
          // CAMBIO 2: Estilizado de imagen.
          // object-cover: asegura que no se deforme.
          // shadow-2xl: da profundidad.
          // hover:scale: interacción sutil al pasar el mouse.
          className="rounded-3xl w-[80%] md:w-[70%] max-w-[400px] shadow-2xl border-4 border-white/10 transition-transform duration-300 hover:scale-105 object-cover"
        />
      </motion.div>

      {/* --- COLUMNA TEXTO --- */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, type: "spring" }} // Delay ligero para efecto cascada
        // CAMBIO 3: Alineación.
        // En móvil (default) centrado, en escritorio (md:) alineado a la izquierda. Se ve más profesional.
        className="flex flex-col items-center md:items-start justify-center gap-6 text-center md:text-left w-full md:w-1/2"
      >
        <div className="space-y-2">
          <span className="text-sm font-medium tracking-widest text-primary/80 uppercase">
            Hola, yo soy
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold font-jetbrains text-primary tracking-tight leading-tight">
            {/* Si quieres un efecto degradado en el texto, usa estas clases en lugar de text-primary:
                bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent */}
            Eleazar Muñoz
          </h1>
        </div>

        <p className="w-[90%] md:w-[80%] text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
          Un desarrollador web frontend de 17 años nacido en Venezuela,
          apasionado por crear experiencias digitales únicas.
        </p>

        <div className="pt-4">
          <Button to={"/certificados"} title="Mira mis logros y certificados" />
        </div>
      </motion.div>
    </section>
  );
}
