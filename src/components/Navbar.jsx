import { useState } from "react";
import Hamburger from "hamburger-react";
import styles from "../componentsCSS/navbar.module.css";
import { Link } from "react-router-dom";
export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleToggle = (toggled) => {
    setMenuOpen(toggled);
  };
  return (
    <>
      <div className={`${styles.desktop_navbar_main} `}>
        <h2>
          <span className={styles.eleazar}>Eleazar </span>
          Muñoz
        </h2>

        <div className={styles.desktop_navbar}>
          <a href="#contact" className={styles.nav_btn}>
            Contáctame
          </a>
          <Link to="/certificates" className={styles.nav_btn}>
            Ver mis logros y certificados
          </Link>
        </div>
      </div>

      <div className={styles.burger_main}>
        <div className={styles.burger_container}>
          <div>
            <h2>
              <span className={styles.eleazar}>Eleazar </span>
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
        <div className={styles.navbar}>
          <a href="#experience" className={styles.nav_a}>
            🛠️ Experiencia
          </a>
          <a href="#about" className={styles.nav_a}>
            👨‍💻 Sobre mí
          </a>
          <a href="#goals" className={styles.nav_a}>
            🌟 Metas y Objetivos
          </a>
          <a href="#projects" className={styles.nav_a}>
            📈 Proyectos
          </a>
          <a href="#skills" className={styles.nav_a}>
            💻 Habilidades
          </a>
          <a href="#contact" className={styles.nav_a}>
            📞 Contacto
          </a>
          <Link to="/certificates" className={styles.see_more}>
            Ver mis logos y certificados
          </Link>
        </div>
      )}
    </>
  );
}
