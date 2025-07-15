import GoBackButton from "../../components/Navbar/GoBackButton";

export default function Certificados() {
  const CERTIFICADOS = [
    {
      id: 7,
      title: "Programación Básica",
      src: "/img/certificados/programacion-basica.png",
    },
    {
      id: 6,
      title: "Maquetación Mobile-First",
      src: "/img/certificados/mobile-first.png",
    },
    {
      id: 5,
      title: "Historia de la Web",
      src: "/img/certificados/historia-de-la-web.png",
    },
    {
      id: 4,
      title: "Fundamentos de ingeniería de software",
      src: "/img/certificados/fundamentos-de-ingenieria-de-software.png",
    },
    {
      id: 3,
      title: "Curso de Diseño",
      src: "/img/certificados/diseno.png",
    },
    {
      id: 2,
      title: "Curso de ReactJS con Vite y TailwindCSS",
      src: "/img/certificados/curso-react-vite-tailwindcss.png",
    },
    {
      id: 1,
      title: "Computación Básica",
      src: "/img/certificados/computacion-basica.png",
    },
  ];
  return (
    <>
      <div className="mx-auto md:flex-row md:w-[48rem]">
        <GoBackButton />
        <div className="flex items-center justify-center flex-col md:flex-row flex-wrap mt-10 w-full gap-5">
          {CERTIFICADOS.map((certificado, index) => {
            return (
              <div key={index} className="w-auto text-center mb-5">
                <div className="">
                  <img
                    className="w-[300px]"
                    src={certificado.src}
                    alt={certificado.title}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
