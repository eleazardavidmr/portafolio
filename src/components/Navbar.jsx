import { useState, useEffect } from "react";
import Hamburger from "hamburger-react";
import "../componentsCSS/navbar.css";
import { Link } from "react-router-dom";
export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleToggle = (toggled) => {
    setMenuOpen(toggled);
  };

  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`${"desktop_navbar_main"} ${isScrolled ? "scrolled" : ""} `}
      >
        <h2>
          <span className="eleazar">Eleazar </span>
          Muñoz
        </h2>

        <div className="desktop_navbar">
          <a href="#contact" className="nav_btn">
            Contáctame
          </a>
          <Link to="/certificates" className="nav_btn">
            Ver mis logros y certificados
          </Link>
        </div>
      </div>

      <div className={`burger_main ${isScrolled ? "scrolled" : ""}`}>
        <div className="burger_container">
          <div>
            <h2>
              <span className="eleazar">Eleazar </span>
              Muñoz
            </h2>
          </div>
          <Hamburger
            size={25}
            label="show menu"
            onToggle={handleToggle}
            rounded
          />
        </div>
      </div>
      {menuOpen && (
        <div className="navbar">
          <a href="#experience" className="nav_a">
            🛠️ Experiencia
          </a>
          <a href="#about" className="nav_a">
            👨‍💻 Sobre mí
          </a>
          <a href="#goals" className="nav_a">
            🌟 Metas y Objetivos
          </a>
          <a href="#projects" className="nav_a">
            📈 Proyectos
          </a>
          <a href="#skills" className="nav_a">
            💻 Habilidades
          </a>
          <a href="#contact" className="nav_a">
            📞 Contacto
          </a>
          <Link to="/certificates" className="see_more">
            Ver mis logos y certificados
          </Link>
        </div>
      )}
    </>
  );
}
