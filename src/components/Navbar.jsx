import styles from "../componentsCSS/navbar.module.css"
export function Navbar() {
  return (
    <>
<section className={styles.navbar_main_sect}>
      <div className={styles.navbar_main}>

        <div className={`${styles.sect} ${styles.first}`} >
            <a href="#main">
              🌐
            </a>
        </div>

        <div className={styles.sect}>
            <a href="#experience">
              🛠️
            </a>
        </div>

        <div className={styles.sect}>
            <a href="#about">
              👨‍💻
            </a>
        </div>

        <div className={styles.sect}>
            <a href="#goals">
              🌟
            </a>
        </div>

        <div className={styles.sect}>
            <a href="#projects">
              📈
            </a>
        </div>

        <div className={styles.sect}>
            <a href="#skills">
              💻
            </a>
        </div>

        <div className={`${styles.sect} ${styles.last}`}>
            <a href="#contact">
              📞
            </a>
        </div>
      </div>
      </section>
    </>
  )
}
