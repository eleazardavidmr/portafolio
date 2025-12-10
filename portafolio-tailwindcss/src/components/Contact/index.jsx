import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionTitle from "../SectionTitle";

// Iconos (Asegúrate de que las rutas sean correctas en tu proyecto)
import InstagarmIcon from "../../icons/InstagarmIcon";
import MailIcon from "../../icons/MailIcon";
import WhatsAppIcon from "../../icons/WhatsAppIcon";
import GitHubIcon from "../../icons/GitHubIcon";

import Social from "./Social";

export default function Contact() {
  const [alertMessage, setAlertMessage] = useState(null);

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
    <section className="w-full py-10  mb-10" id="contacto">
      <div className="max-w-4xl mx-auto mt-8">
        <SectionTitle title="Contacto 📫" />
        <p className="text-center text-gray-600 dark:text-gray-300 font-inter mb-8 text-lg">
          ¿Tienes una idea en mente o simplemente quieres saludar? <br />
          ¡Mis redes están siempre abiertas!
        </p>

        {/* GRID LAYOUT: Responsive y ordenado */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {/* Item 1: Instagram */}
          <motion.div variants={itemVariants}>
            <Social
              name="Instagram"
              icon={<InstagarmIcon width={40} height={40} />}
              to="https://www.instagram.com/edmr.dev"
            />
          </motion.div>

          {/* Item 2: WhatsApp */}
          <motion.div variants={itemVariants}>
            <Social
              name="WhatsApp"
              icon={
                <WhatsAppIcon width={40} height={40} stroke="currentColor" />
              }
              to="https://wa.me/3155614748?text=Hola%20Eleazar,%20quiero%20una%20página%20web."
            />
          </motion.div>

          {/* Item 3: GitHub */}
          <motion.div variants={itemVariants}>
            <Social
              name="GitHub"
              icon={<GitHubIcon width={40} height={40} />}
              to="https://github.com/eleazardavidmr"
            />
          </motion.div>

          {/* Item 4: Email (Acción de Copiar) */}
          <motion.div variants={itemVariants}>
            <Social
              name="Copiar Email"
              icon={<MailIcon width={40} height={40} stroke="currentColor" />}
              onClick={copyEmail} // Pasamos la función en lugar del link
            />
          </motion.div>
        </motion.div>
      </div>

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
            <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-slate-900/90 dark:bg-white/90 backdrop-blur-md border border-primary/50 shadow-2xl shadow-primary/20">
              {/* Icono de Check */}
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
