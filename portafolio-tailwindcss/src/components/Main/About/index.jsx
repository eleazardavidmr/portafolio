import SectionTitle from "../../SectionTitle";
import Card2 from "./Card2";
export default function About() {
  return (
    <section className="flex items-center justify-between flex-col md:flex-row">
      <div className="md:w-[50%]">
        <SectionTitle title="Sobre mí 👋" />
        <p className="mt-5">
          Descubrí el mundo de la programación en el año 2020 durante la
          pandemia. Desde ese momento mi pasión por la programación y la
          tecnología ha venido en crecimiento hasta el día de hoy. Mis primeros
          proyectos fueron muy básicos y a lo largo del tiempo me he ido
          perfeccionando.
        </p>
      </div>
      <Card2 />
    </section>
  );
}
