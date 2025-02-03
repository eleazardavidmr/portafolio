import Hamburger from "hamburger-react";
import { useState } from "react";
import "./styles.css";
import XIcon from "../../icons/XIcon";
import { motion } from "framer-motion";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <div className="navbar-main mb-5 sticky w-[95%] rounded-2xl top-2 z-50 flex justify-between items-center p-5 md:py-8 backdrop-blur-[50px]">
        <div className="hidden md:flex items-center justify-between w-full mx-auto">
          <h1 className="text-2xl font-bold">
            <span className="text-primary">Eleazar </span>Muñoz
          </h1>
          <div className="flex gap-5">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.8 }}
              className="transition-all text-sm font-medium navbar-button px-6 py-2 border border-white/20 rounded-full hover:bg-gray-800"
            >
              Ver más
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.8 }}
              className="transition-all text-sm font-medium navbar-button px-6 py-2 border border-white/20 rounded-full hover:bg-gray-800"
            >
              Ver mis logros y certificados
            </motion.button>
          </div>
        </div>

        <div className="flex w-full items-center justify-between md:hidden">
          <h1 className="text-xl font-bold">
            <span className="text-primary">Eleazar </span>Muñoz
          </h1>

          <Hamburger
            size={20}
            label="show menu"
            onToggle={handleToggle}
            rounded
          />
        </div>
      </div>
      {menuOpen && (
        <div className="navbar">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <XIcon width={24} height={24} />
          </button>

          <a className="font-bold" href="#inicio">
            ⬆️Inicio
          </a>
          <a className="font-bold" href="#experiencia">
            🛠️ Experiencia{" "}
          </a>
          <a className="font-bold" href="#sobre-mi">
            👨‍💻 Sobre mí
          </a>
          <a className="font-bold" href="#metas-y-objetivos">
            🌟 Metas y Objetivos
          </a>
          <a className="font-bold" href="#proyectos">
            📈 Proyectos
          </a>
          <a className="font-bold" href="#habilidades">
            💻 Habilidades
          </a>
          <a className="font-bold" href="#contacto">
            📞 Contacto
          </a>
          <div className="mx-auto flex gap-5 flex-col">
            <button className="transition-all navbar-button px-6 py-2 border border-white/20 rounded-full hover:bg-gray-800">
              Ver más
            </button>
            <button className="transition-all navbar-button px-6 py-2 border border-white/20 rounded-full hover:bg-gray-800">
              Ver mis logros y certificados
            </button>
          </div>
        </div>
      )}
    </>
  );
}
