import { useState, useEffect, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FiSun, FiMoon, FiLogOut } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const navLinks = [
  { name: "Inicio", href: "/" },
  { name: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const { session } = useContext(AuthContext);

  const handleLogOut = async () => {
    await logout();
    navigate("/");
  };
  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md py-3 px-6 rounded-2xl shadow-xl border border-white/20 dark:border-slate-800/50"
          : "bg-transparent py-5 px-6"
      }`}
    >
      <div className="flex items-center justify-between">
        <Link to="/" className="text-xl font-bold font-jetbrains text-primary">
          {"<EDMR />"}
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="#proyectos"
            className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors"
          >
            Proyectos
          </a>
          <a
            href="#contacto"
            className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors"
          >
            Contacto
          </a>

          {!session ? (
            <Link
              to="/login"
              className="px-5 py-2 text-sm font-semibold rounded-lg border border-primary text-primary hover:bg-primary/10 transition-all"
            >
              Login / Register
            </Link>
          ) : (
            <button
              onClick={handleLogOut}
              className="px-5 py-2 text-sm font-semibold rounded-lg border border-red-500/20 text-red-500 bg-red-500/5 hover:bg-red-500/10 hover:border-red-500/40 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 hover:shadow-lg hover:shadow-red-500/10 backdrop-blur-sm"
            >
              <FiLogOut className="text-lg" />
              <span>Log Out</span>
            </button>
          )}

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-primary/10 hover:text-primary transition-all shadow-sm"
          >
            {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
          >
            {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-600 dark:text-slate-300"
          >
            {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 left-0 right-0 bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-2xl border border-slate-100 dark:border-slate-800 md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-slate-600 dark:text-slate-300 hover:text-primary"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#proyectos"
              className="text-lg font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors"
            >
              Proyectos
            </a>
            <a
              href="#contacto"
              className="text-lg font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors"
            >
              Contacto
            </a>
            {!session ? (
              <Link
                to="/login"
                className="px-5 py-2 text-sm font-semibold rounded-lg border border-primary text-primary hover:bg-primary/10 transition-all"
              >
                Login / Register
              </Link>
            ) : (
              <button
                onClick={handleLogOut}
                className="px-5 py-2 text-sm font-semibold rounded-lg border border-red-500/20 text-red-500 bg-red-500/5 hover:bg-red-500/10 hover:border-red-500/40 transition-all duration-300 flex items-center justify-center gap-2 w-full hover:shadow-lg hover:shadow-red-500/10"
              >
                <FiLogOut className="text-lg" />
                <span>Log Out</span>
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
