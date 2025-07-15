import GoBackButton from "../../components/Navbar/GoBackButton";
import { PROJECTS } from "../../components/Projects";
import Project from "../../components/Projects/Project";
export default function Proyectos() {
  return (
    <>
      <section className="md:w-[48rem] mx-auto mb-5">
        <GoBackButton />
        <div className=" md:grid grid-rows-2 grid-cols-2 flex items-center justify-center flex-col ">
          {PROJECTS.map((project, index) => {
            return <Project key={index} data={project} />;
          })}
        </div>
      </section>
    </>
  );
}
