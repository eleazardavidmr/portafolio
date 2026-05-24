import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { motion } from "framer-motion";
import BlurText from "@components/react-bits/BlurText";

export default function ContactForm() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section
      className="flex-grow pt-32 pb-20 px-6 relative overflow-hidden min-h-[70vh] flex items-center"
      id="contacto"
    >
      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto max-w-5xl relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column - Headline & Main CTA */}
          <motion.div className="lg:col-span-7 space-y-8" variants={itemVariants}>
            <motion.div variants={itemVariants} className="space-y-6">
              <span className="inline-block text-primary font-bold tracking-widest text-sm uppercase px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                Contacto Directo
              </span>
              <h1 className="text-4xl md:text-6xl font-display font-extrabold text-slate-900 dark:text-white leading-tight tracking-tighter">
                <BlurText
                  text="¿Listo para tener presencia online?"
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="text-4xl md:text-6xl font-extrabold font-jetbrains tracking-tighter leading-tight"
                />
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed font-inter">
                Cuéntame en qué está tu negocio y te respondo en menos de 24 horas.
              </p>
            </motion.div>

            {/* Premium WhatsApp Button */}
            <motion.div variants={itemVariants} className="pt-2">
              <motion.a
                href="https://wa.me/573155614748?text=Hola%20Eleazar,%20vi%20tu%20sitio%20web%20y%20quiero%20que%20hablemos%20sobre%20mi%20negocio."
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-8 py-5 bg-gradient-to-r from-primary to-blue-500 text-white font-bold text-lg rounded-2xl hover:shadow-2xl hover:shadow-primary/30 transform transition-all duration-300 group relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <FaWhatsapp className="relative text-2xl group-hover:rotate-12 transition-transform duration-300" />
                <span className="relative">Cuéntame tu proyecto</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column - Secondary Info Card */}
          <motion.div variants={itemVariants} className="lg:col-span-5 relative group">
            {/* Glow effect on hover */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>

            <div className="relative bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-2xl border border-slate-200/50 dark:border-slate-700/50 space-y-8">
              <h3 className="text-xl font-bold font-jetbrains text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-700/50 pb-4">
                Otros medios de contacto
              </h3>

              {/* Contact Info Cards */}
              <div className="space-y-4">
                <motion.div
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-center group p-4 rounded-2xl bg-white/50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-blue-500/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <MdEmail className="text-xl" />
                  </div>
                  <div className="ml-4">
                    <p className="text-xs text-slate-500 dark:text-slate-400 uppercase font-bold tracking-wider">
                      Email
                    </p>
                    <a
                      className="text-base font-medium text-slate-900 dark:text-white hover:text-primary transition-colors break-all"
                      href="mailto:eleazardavidmr@gmail.com"
                    >
                      eleazardavidmr@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-center group p-4 rounded-2xl bg-white/50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-blue-500/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <FaLocationDot className="text-xl" />
                  </div>
                  <div className="ml-4">
                    <p className="text-xs text-slate-500 dark:text-slate-400 uppercase font-bold tracking-wider">
                      Ubicación
                    </p>
                    <p className="text-base font-medium text-slate-900 dark:text-white">
                      Cali, Colombia
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Social Links */}
              <div className="pt-4 space-y-4">
                <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                  Redes Sociales
                </p>
                <div className="flex space-x-3">
                  {[
                    {
                      href: "https://github.com/eleazardavidmr",
                      icon: FaGithub,
                      label: "GitHub",
                    },
                    {
                      href: "https://www.linkedin.com/in/eleazarmunoz-4101542a2",
                      icon: FaLinkedin,
                      label: "LinkedIn",
                    },
                    {
                      href: "https://instagram.com/edmr.dev",
                      icon: AiFillInstagram,
                      label: "Instagram",
                    },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      whileHover={{ y: -4 }}
                      whileTap={{ scale: 0.95 }}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-11 h-11 flex items-center justify-center rounded-xl bg-white/50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50 text-slate-700 dark:text-slate-300 hover:bg-primary hover:text-white hover:border-primary hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
                    >
                      <social.icon className="text-lg" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
