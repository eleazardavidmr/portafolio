import Hamburger from "hamburger-react";
import { useState } from "react";
import "./styles.css";
import XIcon from "../../icons/XIcon";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "/img/favicon.png";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <div className="navbar-main mb-5 sticky w-[95%] rounded-3xl top-2 mx-auto z-50 flex justify-between items-center p-5 md:py-8 backdrop-blur-[50px]">
        <div className="hidden md:flex items-center justify-between w-full mx-auto">
          <Link to="/">
            <span className="flex items-center gap-2 ">
              <img src={logo} alt="Logo" />
            </span>
          </Link>
          <div className="flex gap-5">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.8 }}
              className="transition-all text-sm font-medium navbar-button px-6 py-2 border border-white/20 rounded-full "
              href="#contacto"
            >
              Contactame
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.8 }}
              className="transition-all text-sm font-medium navbar-button px-6 py-2 border border-white/20 rounded-full "
            >
              <Link to="/certificados">Ver mis logros y certificados</Link>
            </motion.button>
          </div>
        </div>

        <div className="flex w-full items-center justify-between md:hidden">
          <Link to="/">
            <h1 className="text-xl font-bold">
              <img src={logo} alt="Logo" />
            </h1>
          </Link>
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
            <Link to="/certificados">
              <button className="transition-all navbar-button px-6 py-2 border border-white/20 rounded-full hover:bg-gray-800">
                Ver mis logros y certificados
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
