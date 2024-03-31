import styles from "../componentsCSS/navbar.module.css";
export function Navbar() {
  return (
    <>
      <section className={styles.navbar_main_sect}>
        <div className={styles.navbar_main}>
          <div className={`${styles.sect} ${styles.first}`}>
            <a href="#main" className={styles.emojie_container}>
              <span className={styles.emoji_span}>🌐</span>
              <span className={`${styles.emojiTitle} ${styles.d_none}`}>
                Inicio
              </span>
            </a>
          </div>

          <div className={styles.sect}>
            <a href="#experience" className={styles.emoji_container}>
              <span className={styles.emoji_span}>🛠️</span>
              <span className={`${styles.emojiTitle} ${styles.d_none}`}>
                Experiencia
              </span>
            </a>
          </div>

          <div className={styles.sect}>
            <a href="#about" className={styles.emoji_container}>
              👨‍💻
            </a>
          </div>

          <div className={styles.sect}>
            <a href="#goals">🌟</a>
          </div>

          <div className={styles.sect}>
            <a href="#projects">📈</a>
          </div>

          <div className={styles.sect}>
            <a href="#skills">💻</a>
          </div>

          <div className={`${styles.sect} ${styles.last}`}>
            <a href="#contact">📞</a>
          </div>
        </div>
      </section>
    </>
  );
}
