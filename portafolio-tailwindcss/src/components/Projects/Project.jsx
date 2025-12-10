import PropTypes from "prop-types";
import { motion } from "framer-motion";
// Nota: He removido "./styles.css" porque usaremos Tailwind puro para todo.

export default function Project({ data }) {
  return (
    <motion.a
      href={data.url}
      target="_blank"
      rel="noopener noreferrer"
      // group: permite animar los hijos cuando haces hover en el padre
      className="group relative flex flex-col h-full bg-white dark:bg-slate-800 rounded-3xl overflow-hidden border border-gray-100 dark:border-slate-700 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
    >
      {/* Contenedor de la Imagen con efecto Overflow */}
      <div className="relative w-full h-56 overflow-hidden bg-gray-100 dark:bg-slate-900 flex items-center justify-center p-6">
        {/* Círculo decorativo de fondo */}
        <div className="absolute inset-0 bg-gradient-to-tr from-gray-50 to-gray-200 dark:from-slate-800 dark:to-slate-900 opacity-50" />

        <img
          src={data.img}
          alt={data.name}
          // object-contain: asegura que se vea toda la imagen sin cortarse
          // group-hover:scale-105: zoom suave al pasar el mouse
          className="relative z-10 w-full h-full object-contain drop-shadow-md transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Contenido de Texto */}
      <div className="flex flex-col flex-grow p-6 text-center">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-primary transition-colors">
          {data.name}
        </h3>

        {/* Mostramos la URL limpia visualmente */}
        <span className="text-sm text-gray-500 dark:text-gray-400 font-medium group-hover:text-primary/80 transition-colors">
          🔗 {data.urlName}
        </span>
      </div>

      {/* Botón "falso" que aparece o cambia al hacer hover (Opcional, detalle visual) */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </motion.a>
  );
}

Project.propTypes = {
  data: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    urlName: PropTypes.string.isRequired,
  }).isRequired,
};
