import React, { useEffect, useState } from "react";
import styles from "../componentsCSS/navbar.module.css";
import navbarImg from "../img/img_nobakcground_100x100.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
export function Navbar() {
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      setVisible(prevScrollPos > currentScrollPos);

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const ArrowLeft = () => {
    return (
      <>
        <svg
          className={styles.arrow_left}
          xmlns="http://www.w3.org/2000/svg"
          height="15"
          width="14"
          viewBox="0 0 448 512"
        >
          <path
            fill="#26cad0"
            d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
          />
        </svg>
      </>
    );
  };
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: .05 }}
        className={`navbar ${
          visible ? styles.visible : ""
        } ${styles.navbar_main}`}
      >
        <span onClick={scrollToTop} className={styles.title}>
          <ArrowLeft />
          Eleazar Muñoz
        </span>
        <img
          src={navbarImg}
          alt="Eleazar Muñoz"
          className={styles.navbar_img}
        />
      </motion.div>
    </>
  );
}
