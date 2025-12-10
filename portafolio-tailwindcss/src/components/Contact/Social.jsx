import PropTypes from "prop-types";
import { motion } from "framer-motion";

export default function Social({ name, icon, to, onClick }) {
  // Definimos las clases base para compartir estilos entre el <a> y el <button>
  const baseClasses =
    "group relative flex flex-col items-center justify-center gap-4 p-6 rounded-3xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-white-light/10 shadow-lg hover:shadow-xl hover:shadow-primary/10 hover:border-primary/50 transition-all duration-300 w-full aspect-square md:aspect-auto md:h-48 cursor-pointer";

  const content = (
    <>
      {/* Fondo decorativo al hacer hover */}
      <div className="absolute inset-0 bg-primary/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Icono con animación */}
      <div className="relative z-10 text-gray-700 dark:text-gray-300 group-hover:text-primary group-hover:scale-110 transition-all duration-300">
        {icon}
      </div>

      {/* Texto */}
      <p className="relative z-10 text-sm font-bold font-jetbrains text-gray-500 dark:text-gray-400 group-hover:text-primary transition-colors">
        {name}
      </p>
    </>
  );

  // Si hay 'onClick', renderizamos un motion.button (para el email)
  if (onClick) {
    return (
      <motion.button
        className={baseClasses}
        onClick={onClick}
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.95 }}
      >
        {content}
      </motion.button>
    );
  }

  // Si hay 'to', renderizamos un motion.a (para enlaces externos)
  return (
    <motion.a
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      className={baseClasses}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.95 }}
    >
      {content}
    </motion.a>
  );
}

Social.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  to: PropTypes.string, // Ya no es required porque puede ser un botón
  onClick: PropTypes.func, // Nuevo prop opcional
};
