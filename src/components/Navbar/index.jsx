import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";
import { NavLink, Link, useLocation } from "react-router-dom";
import { springFast } from "@constants/motion";
import { whatsappLink } from "@constants/contact";

const LINKS = [
  { name: "Proyectos", href: "/proyectos" },
  { name: "Servicios", href: "/servicios" },
  { name: "Contacto", href: "/contacto" },
];

function getInitialTheme() {
  try {
    const stored = localStorage.getItem("theme");
    if (stored === "dark" || stored === "light") return stored;
  } catch {
    // Almacenamiento bloqueado: seguimos con la preferencia del sistema
  }
  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState(getInitialTheme);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cerrar el menú al cambiar de página
  useEffect(() => setIsOpen(false), [pathname]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => e.key === "Escape" && setIsOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    try {
      localStorage.setItem("theme", theme);
    } catch {
      // Sin almacenamiento el tema simplemente no se recuerda
    }
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");
  const themeLabel =
    theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro";

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 md:pt-4">
      {/* Borde de scroll: el contenido se desvanece al pasar bajo la barra */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-x-0 top-0 -z-10 h-24 bg-gradient-to-b from-canvas via-canvas/80 to-transparent transition-opacity duration-300 ${
          isScrolled ? "opacity-100" : "opacity-0"
        }`}
      />
      <nav
        aria-label="Principal"
        className={`relative mx-auto flex h-14 max-w-content items-center justify-between rounded-full pl-3 pr-2 transition-[background-color,box-shadow] duration-300 ${
          isScrolled || isOpen ? "glass" : ""
        }`}
      >
        <Link
          to="/"
          className="flex items-center gap-2.5 rounded-full pr-2"
          aria-label="Eleazar Muñoz, inicio"
        >
          <img
            src="/logo.webp"
            alt=""
            width={32}
            height={32}
            className="h-8 w-8 rounded-full invert dark:invert-0"
          />
          <span className="hidden text-[0.9375rem] font-semibold tracking-tight sm:inline">
            Eleazar Muñoz
          </span>
        </Link>

        {/* Escritorio */}
        <div className="hidden items-center gap-1 md:flex">
          {LINKS.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-label/[0.07] text-label"
                    : "text-label-2 hover:text-label"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={themeLabel}
            title={themeLabel}
            className="grid h-10 w-10 place-items-center rounded-full text-label-2 transition-[color,background-color,transform] duration-150 hover:bg-label/[0.06] hover:text-label active:scale-90"
          >
            {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>

          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary hidden !px-5 !py-2 text-sm md:inline-flex"
          >
            Hablemos
          </a>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
            aria-controls="menu-movil"
            className="grid h-10 w-10 place-items-center rounded-full text-label transition-transform duration-150 active:scale-90 md:hidden"
          >
            <span className="relative block h-3 w-[18px]" aria-hidden="true">
              <motion.span
                className="absolute left-0 top-0 h-[1.5px] w-full rounded-full bg-current"
                animate={isOpen ? { y: 5.25, rotate: 45 } : { y: 0, rotate: 0 }}
                transition={springFast}
              />
              <motion.span
                className="absolute bottom-0 left-0 h-[1.5px] w-full rounded-full bg-current"
                animate={
                  isOpen ? { y: -5.25, rotate: -45 } : { y: 0, rotate: 0 }
                }
                transition={springFast}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Móvil: el panel nace del botón que lo abre (esquina superior derecha).
          Vive fuera del <nav> porque su backdrop-filter confinaría el
          scrim fijo y el desenfoque del panel a la barra. */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              key="scrim"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 -z-10 bg-black/30 backdrop-blur-[2px] md:hidden"
            />
            <motion.div
              key="menu"
              id="menu-movil"
              initial={{ opacity: 0, scale: 0.94, y: -8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: -8 }}
              transition={springFast}
              style={{ transformOrigin: "top right" }}
              className="glass absolute right-4 top-[4.75rem] w-[min(20rem,calc(100vw-2rem))] rounded-3xl p-2 md:hidden"
            >
              <ul className="flex list-none flex-col p-0">
                {LINKS.map((link) => (
                  <li key={link.href}>
                    <NavLink
                      to={link.href}
                      className={({ isActive }) =>
                        `block rounded-2xl px-4 py-3 text-lg font-semibold tracking-tight transition-colors active:bg-label/[0.08] ${
                          isActive ? "text-primary" : "text-label"
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-2 w-full"
              >
                Hablemos por WhatsApp
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
