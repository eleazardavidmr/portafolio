import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { IoSend } from "react-icons/io5";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import BlurText from "@components/react-bits/BlurText";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Error states
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const form = useRef();

  // Validation functions
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };

    let isValid = true;

    // Validate name
    if (!name || name.trim().length === 0) {
      newErrors.name = "El nombre es requerido";
      isValid = false;
    } else if (name.trim().length < 2) {
      newErrors.name = "El nombre debe tener al menos 2 caracteres";
      isValid = false;
    }

    // Validate email
    if (!email || email.trim().length === 0) {
      newErrors.email = "El email es requerido";
      isValid = false;
    } else if (!validateEmail(email)) {
      newErrors.email = "Por favor ingresa un email válido";
      isValid = false;
    }

    // Validate subject
    if (!subject || subject.trim().length === 0) {
      newErrors.subject = "El asunto es requerido";
      isValid = false;
    } else if (subject.trim().length < 3) {
      newErrors.subject = "El asunto debe tener al menos 3 caracteres";
      isValid = false;
    }

    // Validate message
    if (!message || message.trim().length === 0) {
      newErrors.message = "El mensaje es requerido";
      isValid = false;
    } else if (message.trim().length < 10) {
      newErrors.message = "El mensaje debe tener al menos 10 caracteres";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      toast.error("Por favor completa todos los campos correctamente");
      return;
    }

    setIsLoading(true);

    emailjs
      .sendForm("edmr", "template_3gmkzum", form.current, {
        publicKey: "T1y7QUsFSDy6xYQni",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success(
            "Email enviado con éxito! Pronto te estaré contactando.",
          );
          // Reset form
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
          setErrors({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Error al enviar el email. Por favor intenta de nuevo.");
        },
      )
      .finally(() => {
        setIsLoading(false);
      });
  };
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
    <main className="flex-grow pt-32 pb-20 px-6 relative overflow-hidden">
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
        className="container mx-auto max-w-6xl relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Info */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <motion.div variants={itemVariants}>
              <span className="inline-block text-primary font-bold tracking-widest text-sm uppercase mb-4 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                Hablemos
              </span>
              <h1 className="text-2xl md:text-6xl font-display font-extrabold text-slate-900 dark:text-white leading-tight mt-4">
                <BlurText
                  text="¿Tienes un proyecto en mente?"
                  delay={200}
                  animateBy="words"
                  direction="top"
                  className="text-2xl md:text-6xl font-extrabold font-jetbrains tracking-tighter leading-[0.9]"
                />
              </h1>
              <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 max-w-md leading-relaxed">
                Estoy disponible para proyectos freelance y oportunidades de
                tiempo completo. Escríbeme y responderé lo antes posible.
              </p>
            </motion.div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.02, x: 5 }}
                className="flex items-center group p-4 rounded-2xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-blue-500/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <MdEmail className="text-2xl" />
                </div>
                <div className="ml-4">
                  <p className="text-xs text-slate-500 dark:text-slate-400 uppercase font-bold tracking-wider">
                    Email
                  </p>
                  <a
                    className="text-lg font-medium text-slate-900 dark:text-white hover:text-primary transition-colors"
                    href="mailto:eleazardavidmr@gmail.com"
                  >
                    eleazardavidmr@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.02, x: 5 }}
                className="flex items-center group p-4 rounded-2xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-blue-500/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <FaLocationDot className="text-2xl" />
                </div>
                <div className="ml-4">
                  <p className="text-xs text-slate-500 dark:text-slate-400 uppercase font-bold tracking-wider">
                    Ubicación
                  </p>
                  <p className="text-lg font-medium text-slate-900 dark:text-white">
                    Cali, Colombia
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="pt-8">
              <p className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-6">
                Sígueme
              </p>
              <div className="flex space-x-4">
                {[
                  {
                    href: "https://github.com/eleazardavidmr",
                    icon: FaGithub,
                    label: "GitHub",
                  },
                  {
                    href: "www.linkedin.com/in/eleazarmunoz-4101542a2",
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
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    href={social.href}
                    aria-label={social.label}
                    className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 text-slate-700 dark:text-slate-300 hover:bg-primary hover:text-white hover:border-primary hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
                  >
                    <social.icon className="text-xl" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div variants={itemVariants} className="relative group">
            {/* Glow effect on hover */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-500 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>

            <div className="relative bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-2xl border border-slate-200/50 dark:border-slate-700/50">
              <form
                ref={form}
                className="space-y-6"
                onSubmit={(e) => handleSubmit(e)}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      className="text-sm font-semibold text-slate-700 dark:text-slate-300"
                      htmlFor="name"
                    >
                      Nombre <span className="text-red-500">*</span>
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      className={`w-full px-5 py-4 bg-white/50 dark:bg-slate-900/50 border rounded-xl focus:outline-none focus:ring-2 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 transition-all duration-300 backdrop-blur-sm ${
                        errors.name
                          ? "border-red-500 dark:border-red-500 focus:ring-red-500/50 focus:border-red-500"
                          : "border-slate-300/50 dark:border-slate-600/50 focus:ring-primary/50 focus:border-primary focus:shadow-lg focus:shadow-primary/20"
                      }`}
                      name="name"
                      placeholder="Tu nombre completo"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <AnimatePresence>
                      {errors.name && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="text-sm text-red-500 dark:text-red-400 flex items-center gap-1"
                        >
                          <span>⚠</span> {errors.name}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                  <div className="space-y-2">
                    <label
                      className="text-sm font-semibold text-slate-700 dark:text-slate-300"
                      htmlFor="email"
                    >
                      Email <span className="text-red-500">*</span>
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      className={`w-full px-5 py-4 bg-white/50 dark:bg-slate-900/50 border rounded-xl focus:outline-none focus:ring-2 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 transition-all duration-300 backdrop-blur-sm ${
                        errors.email
                          ? "border-red-500 dark:border-red-500 focus:ring-red-500/50 focus:border-red-500"
                          : "border-slate-300/50 dark:border-slate-600/50 focus:ring-primary/50 focus:border-primary focus:shadow-lg focus:shadow-primary/20"
                      }`}
                      name="email"
                      placeholder="hola@ejemplo.com"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <AnimatePresence>
                      {errors.email && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="text-sm text-red-500 dark:text-red-400 flex items-center gap-1"
                        >
                          <span>⚠</span> {errors.email}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    className="text-sm font-semibold text-slate-700 dark:text-slate-300"
                    htmlFor="subject"
                  >
                    Asunto <span className="text-red-500">*</span>
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    className={`w-full px-5 py-4 bg-white/50 dark:bg-slate-900/50 border rounded-xl focus:outline-none focus:ring-2 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 transition-all duration-300 backdrop-blur-sm ${
                      errors.subject
                        ? "border-red-500 dark:border-red-500 focus:ring-red-500/50 focus:border-red-500"
                        : "border-slate-300/50 dark:border-slate-600/50 focus:ring-primary/50 focus:border-primary focus:shadow-lg focus:shadow-primary/20"
                    }`}
                    name="subject"
                    placeholder="¿En qué puedo ayudarte?"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                  <AnimatePresence>
                    {errors.subject && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-sm text-red-500 dark:text-red-400 flex items-center gap-1"
                      >
                        <span>⚠</span> {errors.subject}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
                <div className="space-y-2">
                  <label
                    className="text-sm font-semibold text-slate-700 dark:text-slate-300"
                    htmlFor="message"
                  >
                    Mensaje <span className="text-red-500">*</span>
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.02 }}
                    className={`w-full px-5 py-4 bg-white/50 dark:bg-slate-900/50 border rounded-xl focus:outline-none focus:ring-2 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 transition-all duration-300 resize-none backdrop-blur-sm ${
                      errors.message
                        ? "border-red-500 dark:border-red-500 focus:ring-red-500/50 focus:border-red-500"
                        : "border-slate-300/50 dark:border-slate-600/50 focus:ring-primary/50 focus:border-primary focus:shadow-lg focus:shadow-primary/20"
                    }`}
                    name="message"
                    placeholder="Cuéntame sobre tu proyecto o idea..."
                    rows="5"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></motion.textarea>
                  <AnimatePresence>
                    {errors.message && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-sm text-red-500 dark:text-red-400 flex items-center gap-1"
                      >
                        <span>⚠</span> {errors.message}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-primary to-blue-500 text-white font-bold text-lg rounded-xl hover:shadow-2xl hover:shadow-primary/40 transform transition-all duration-300 flex items-center justify-center gap-2 group relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  type="submit"
                  disabled={isLoading}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative">
                    {isLoading ? "Enviando..." : "Enviar Mensaje"}
                  </span>
                  {isLoading ? (
                    <svg
                      className="relative animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  ) : (
                    <IoSend className="relative text-xl group-hover:translate-x-1 transition-transform duration-300" />
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </main>
  );
}
