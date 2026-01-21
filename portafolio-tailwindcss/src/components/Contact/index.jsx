import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionTitle from "../SectionTitle";
import { FiArrowUp } from "react-icons/fi";

// Iconos (Asegúrate de que las rutas sean correctas en tu proyecto)
import InstagarmIcon from "../../icons/InstagarmIcon";
import MailIcon from "../../icons/MailIcon";
import WhatsAppIcon from "../../icons/WhatsAppIcon";
import GitHubIcon from "../../icons/GitHubIcon";

import Social from "./Social";

export default function Contact() {
  const [alertMessage, setAlertMessage] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const copyEmail = () => {
    const text = "eleazardavidmr@gmail.com";
    navigator.clipboard.writeText(text).then(() => {
      showAlert("¡Email copiado al portapapeles! 📋");
    });
  };

  const showAlert = (message) => {
    setAlertMessage(message);
    setTimeout(() => setAlertMessage(null), 3000); // 3 segundos
  };

  // Configuración de animación para el Grid
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="w-full py-20 mb-10 relative" id="contacto">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <SectionTitle title="Hablemos" />
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-lg md:text-xl font-inter max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente o simplemente quieres saludar? Mis
            redes están siempre abiertas para nuevas oportunidades.
          </p>
        </div>

        {/* GRID LAYOUT: Responsive y ordenado */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-3 gap-6"
        >
          {/* Item 1: Instagram */}
          <motion.div variants={itemVariants}>
            <Social
              name="Instagram"
              icon={<InstagarmIcon width={32} height={32} />}
              to="https://www.instagram.com/edmr.dev"
            />
          </motion.div>

          {/* Item 2: WhatsApp */}
          <motion.div variants={itemVariants}>
            <Social
              name="WhatsApp"
              icon={
                <WhatsAppIcon width={32} height={32} stroke="currentColor" />
              }
              to="https://wa.me/3155614748?text=Hola%20Eleazar,%20quiero%20una%20página%20web."
            />
          </motion.div>

          {/* Item 3: GitHub */}
          <motion.div variants={itemVariants}>
            <Social
              name="GitHub"
              icon={<GitHubIcon width={32} height={32} />}
              to="https://github.com/eleazardavidmr"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-4 bg-primary text-white rounded-full shadow-2xl shadow-primary/40 hover:scale-110 transition-transform z-40"
            aria-label="Volver arriba"
          >
            <FiArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* ALERTA FLOTANTE (TOAST) ESTILIZADA */}
      <AnimatePresence>
        {alertMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="fixed bottom-8 right-0 left-0 mx-auto w-max z-50 pointer-events-none"
          >
            <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-slate-900/95 dark:bg-white/95 backdrop-blur-md border border-primary/30 shadow-2xl">
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-sm font-bold font-jetbrains text-white dark:text-slate-900">
                {alertMessage}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
