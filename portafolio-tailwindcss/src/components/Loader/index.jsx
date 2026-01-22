import { motion } from "framer-motion";
import PropTypes from "prop-types";

export default function Loader({ fullScreen = false }) {
  const loaderContent = (
    <div className="flex flex-col items-center justify-center gap-6">
      <div className="relative flex items-center justify-center">
        {/* Outer rotating ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-20 h-20 rounded-full border-2 border-transparent border-t-primary/40 border-r-primary/40"
        />

        {/* Middle pulsing ring */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-14 h-14 rounded-full bg-primary/20"
        />

        {/* Inner Logo/Symbol */}
        <div className="absolute text-primary font-black text-xl font-jetbrains">
          <img src="/logo.webp" className="w-10 h-10" />
        </div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="text-[10px] font-black uppercase tracking-[0.4em] text-primary"
      >
        Cargando
      </motion.p>
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-[999] bg-slate-50/80 dark:bg-slate-950/80 backdrop-blur-xl flex items-center justify-center">
        {loaderContent}
      </div>
    );
  }

  return (
    <div className="w-full py-12 flex items-center justify-center">
      {loaderContent}
    </div>
  );
}

Loader.propTypes = {
  fullScreen: PropTypes.bool,
};
