import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

export default function Project({ data }) {
  return (
    <motion.a
      href={data.url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="group relative flex flex-col h-full bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-[2rem] overflow-hidden border border-slate-200 dark:border-slate-700/50 shadow-xl hover:shadow-2xl hover:shadow-primary/10 transition-shadow duration-300"
    >
      {/* Image Container with Overlay */}
      <div className="relative w-full h-52 overflow-hidden bg-slate-100 dark:bg-slate-900 flex items-center justify-center group">
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300 z-10" />

        <img
          src={data.img}
          alt={data.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Floating Tag */}
        <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="p-2 bg-white dark:bg-slate-800 rounded-full shadow-lg text-primary">
            <FiExternalLink size={20} />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col p-6 space-y-3">
        <h3 className="text-xl font-bold text-slate-800 dark:text-white group-hover:text-primary transition-colors font-jetbrains">
          {data.name}
        </h3>

        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400">
            Web App
          </span>
          <span className="text-sm text-slate-500 dark:text-slate-400 font-medium truncate">
            {data.urlName}
          </span>
        </div>
      </div>

      {/* Modern Hover Accent */}
      <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
