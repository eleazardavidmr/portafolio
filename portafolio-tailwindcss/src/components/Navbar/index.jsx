import { useState, useEffect, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import {
  FiSun,
  FiMoon,
  FiLogOut,
  FiUser,
  FiHome,
  FiBookOpen,
} from "react-icons/fi";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { session, logout } = useContext(AuthContext); // Consolidado
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // Control de scroll para el estilo del navbar
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Bloquear scroll cuando el menú móvil está abierto
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [isOpen]);

  // Manejo de Tema
  useEffect(() => {
    if (theme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  const handleLogOut = async () => {
    setIsOpen(false);
    await logout();
    toast.success("Sesión cerrada");
    navigate("/");
  };

  // Definición de links dinámicos
  const links = [
    { name: "Inicio", href: "/", icon: <FiHome />, show: true },
    { name: "Blog", href: "/blog", icon: <FiBookOpen />, show: true },
    { name: "Proyectos", href: "#proyectos", show: isHomePage, isAnchor: true },
    { name: "Contacto", href: "#contacto", show: isHomePage, isAnchor: true },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex justify-center p-4 ${
        isScrolled ? "pt-2" : "pt-6"
      }`}
    >
      <div
        className={`w-full max-w-5xl flex items-center justify-between px-6 py-3 transition-all duration-300 rounded-2xl ${
          isScrolled
            ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg shadow-lg border border-slate-200/50 dark:border-slate-700/50"
            : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-tighter text-primary font-jetbrains"
        >
          <img src="/logo.png" alt="logo" className="w-10 h-10 rounded-full" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {links
            .filter((l) => l.show)
            .map((link) =>
              link.isAnchor ? (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-bold text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-sm font-bold text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ),
            )}

          <div className="h-6 w-[1px] bg-slate-300 dark:bg-slate-700 mx-2" />

          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-700 dark:text-slate-300"
          >
            {theme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>

          {session ? (
            <Link
              to="/profile"
              className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-xl font-bold hover:bg-primary hover:text-white transition-all"
            >
              <FiUser /> Perfil
            </Link>
          ) : (
            <Link
              to="/login"
              className="bg-primary text-slate-950 px-5 py-2 rounded-xl font-bold hover:scale-105 transition-transform"
            >
              Entrar
            </Link>
          )}
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
          >
            {theme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2.5 rounded-lg bg-primary text-slate-950"
          >
            {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-[-1]"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] bg-white dark:bg-slate-900 shadow-2xl z-50 p-6 flex flex-col"
            >
              <div className="flex justify-between items-center mb-10">
                <span className="text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">
                  Menú
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                >
                  <HiX size={20} />
                </button>
              </div>

              {/* ... dentro del AnimatePresence del menú móvil ... */}

              <div className="flex flex-col gap-2">
                {links
                  .filter((l) => l.show)
                  .map((link, i) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      {/* Usamos un componente común para evitar repetir estilos */}
                      <Link
                        to={link.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center flex-row gap-4 p-3 w-full rounded-xl text-slate-800 dark:text-slate-100 hover:bg-primary/10 group transition-all"
                      >
                        {/* Contenedor del icono con tamaño fijo para que todo esté alineado */}
                        {link.icon && (
                          <div className="text-primary text-2xl flex items-center justify-center w-8">
                            {link.icon}
                          </div>
                        )}
                        <span className="text-lg font-bold">{link.name}</span>
                      </Link>
                    </motion.div>
                  ))}
              </div>

              {/* Sección de Usuario Corregida */}
              <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800">
                {session ? (
                  <div className="space-y-4">
                    <Link
                      to="/profile"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center flex-row gap-4 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700"
                    >
                      <div className="shrink-0 w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-slate-950 font-black shadow-lg shadow-primary/20">
                        EM
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="text-sm font-black truncate text-slate-900 dark:text-slate-100">
                          Mi Perfil
                        </span>
                        <span className="text-[10px] text-primary font-bold uppercase tracking-tighter">
                          Dashboard
                        </span>
                      </div>
                    </Link>

                    <button
                      onClick={handleLogOut}
                      className="flex items-center flex-row gap-3 w-full px-4 py-2 text-red-500 font-bold text-sm hover:bg-red-50 dark:hover:bg-red-500/10 rounded-xl transition-colors"
                    >
                      <FiLogOut size={18} />
                      <span>Cerrar Sesión</span>
                    </button>
                  </div>
                ) : (
                  <Link
                    to="/login"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-primary text-slate-950 font-black uppercase tracking-widest"
                  >
                    <span>Entrar</span>
                    <FiLogOut className="rotate-180" />
                  </Link>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
