import PropTypes from "prop-types";
import { motion } from "framer-motion";

export default function Social({ name, icon, to, onClick }) {
  const content = (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
      className="flex flex-col items-center justify-center p-6 gap-4 bg-white/40 dark:bg-slate-800/40 backdrop-blur-md border border-slate-200/50 dark:border-slate-700/50 rounded-3xl shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 w-full group cursor-pointer"
    >
      <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-400 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
        {icon}
      </div>
      <span className="text-sm font-bold font-jetbrains text-slate-700 dark:text-slate-200 group-hover:text-primary transition-colors">
        {name}
      </span>
    </motion.div>
  );

  if (onClick) {
    return (
      <button onClick={onClick} className="w-full">
        {content}
      </button>
    );
  }

  return (
    <a
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full"
    >
      {content}
    </a>
  );
}

Social.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  to: PropTypes.string,
  onClick: PropTypes.func,
};
