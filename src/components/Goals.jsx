import styles from "../componentsCSS/goals.module.css";
export function Goals() {
  return (
    <>
      <div className={styles.goals_main}>
        <span className={styles.title}>Metas y Objetivos 🌟</span>
        <div className={styles.goals_info_main}>
          <p>
            ¡Hola! Mi viaje en el mundo del desarrollo web está impulsado por
            una pasión inquebrantable por la creación y la innovación. Aquí te
            comparto algunas de mis metas y objetivos:
          </p>
        </div>
        <ul className={styles.goals_ul}>
          <li>
            <span>1. Aprendizaje Perpetuo 🚀</span>
            <p>
              Siempre estoy buscando expandir mis conocimientos y habilidades en
              el vasto mundo del desarrollo web. Mis metas incluyen explorar
              nuevas tecnologías, técnicas de desarrollo, y mantenerme al tanto
              de las últimas tendencias del sector.
            </p>
          </li>
          <li>
            <span>2. Contribuir a Proyectos Significativos 🌐</span>
            <p>
              Aspiro a trabajar en proyectos que no solo desafíen mis
              habilidades, sino que también tengan un impacto positivo en la
              comunidad. Quiero contribuir al desarrollo de soluciones
              innovadoras que mejoren la experiencia digital y hagan la
              diferencia en la vida de las personas.
            </p>
          </li>
          <li>
            <span>3. Creación de Proyectos Personales 🚧</span>
            <p>
              Exploraré la creación de proyectos personales que reflejen mi
              creatividad y resuelvan problemas reales. Estos proyectos serán
              oportunidades para aplicar mis habilidades de manera práctica y
              continuar aprendiendo a través de la experiencia.
            </p>
          </li>
        </ul>
      </div>
    </>
  );
}
