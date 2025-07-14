import SectionTitle from "../../SectionTitle";

export default function Goals() {
  return (
    <section id="metas-y-objetivos" className="mb-5">
      <SectionTitle title="Metas y Objetivos 🎯" />
      <div className=" mt-5">
        <p>
          ¡Hola! Mi viaje en el mundo del desarrollo web está impulsado por una
          pasión inquebrantable por la creación y la innovación. Aquí te
          comparto algunas de mis metas y objetivos:
        </p>

        <ul className="list-none mt-5 flex items-center justify-center flex-col gap-3">
          <li>
            <p className="text-primary font-semibold ">
              1. Aprendizaje Perpetuo 🚀
            </p>
            <p className="px-5 mt-2">
              Siempre estoy buscando expandir mis conocimientos y habilidades en
              el vasto mundo del desarrollo web. Mis metas incluyen explorar
              nuevas tecnologías, técnicas de desarrollo, y mantenerme al tanto
              de las últimas tendencias del sector.
            </p>
          </li>
          <li>
            <p className="text-primary font-semibold ">
              2. Contribuir a Proyectos Significativos 🌐
            </p>
            <p className="px-5 mt-2">
              Aspiro a trabajar en proyectos que no solo desafíen mis
              habilidades, sino que también tengan un impacto positivo en la
              comunidad. Quiero contribuir al desarrollo de soluciones
              innovadoras que mejoren la experiencia digital y hagan la
              diferencia en la vida de las personas.
            </p>
          </li>
          <li>
            <p className="text-primary font-semibold ">
              3. Creación de Proyectos Personales 🚧
            </p>
            <p className="px-5 mt-2">
              Exploraré la creación de proyectos personales que reflejen mi
              creatividad y resuelvan problemas reales. Estos proyectos serán
              oportunidades para aplicar mis habilidades de manera práctica y
              continuar aprendiendo a través de la experiencia.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
