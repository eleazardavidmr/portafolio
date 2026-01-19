import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-hot-toast";
export default function ShareModal({ isOpen, onClose, postTitle, slug }) {
  const postUrl = `https://edmr.dev/blog/${slug}`;

  function SocialButton({ icon, name, color }) {
    return (
      <button
        className={`flex flex-col items-center gap-2 p-3 rounded-2xl border border-slate-100 dark:border-slate-800 transition-all ${color} group`}
      >
        <span className="material-symbols-outlined text-xl">{icon}</span>
        <span className="text-[10px] font-bold uppercase tracking-widest">
          {name}
        </span>
      </button>
    );
  }
  if (!isOpen) return null;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(postUrl);
    toast.success("¡Enlace copiado!");
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Overlay con desenfoque */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
        />

        {/* Contenido del Modal */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative w-full max-w-sm bg-white dark:bg-neutral-900 rounded-3xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800"
        >
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold">Compartir post</h3>
              <button
                onClick={onClose}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-white"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            {/* Input para copiar link */}
            <div className="">
              <p className="text-xs font-mono text-slate-500 uppercase mb-2">
                Enlace directo
              </p>
              <div className="flex gap-2 p-2 bg-slate-50 dark:bg-zinc-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
                <input
                  readOnly
                  value={postUrl}
                  className="bg-transparent text-sm flex-1 outline-none px-2 text-slate-600 dark:text-slate-300"
                />
                <button
                  onClick={copyToClipboard}
                  className="bg-primary text-white p-2 rounded-lg hover:opacity-90 transition-opacity flex items-center"
                >
                  <span className="material-symbols-outlined text-sm">
                    content_copy
                  </span>
                </button>
              </div>
            </div>

            {/* Redes Sociales
            
  <div className="grid grid-cols-3 gap-4">
              <SocialButton
                icon="hub"
                name="X"
                color="hover:bg-black hover:text-white"
              />
              <SocialButton
                icon="facebook"
                name="FB"
                color="hover:bg-blue-600 hover:text-white"
              />
              <SocialButton
                icon="send"
                name="WA"
                color="hover:bg-green-500 hover:text-white"
              />
            </div>
            */}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

// Sub-componente para botones sociales
