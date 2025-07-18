import GoBackButton from "../../components/Navbar/GoBackButton";
import { motion } from "framer-motion";

export default function Certificados() {
  const CERTIFICADOS = [
    {
      id: 7,
      title: "Programación Básica",
      src: "/img/certificados/programacion-basica.webp",
    },
    {
      id: 6,
      title: "Maquetación Mobile-First",
      src: "/img/certificados/mobile-first.webp",
    },
    {
      id: 5,
      title: "Historia de la Web",
      src: "/img/certificados/historia-de-la-web.webp",
    },
    {
      id: 4,
      title: "Fundamentos de ingeniería de software",
      src: "/img/certificados/fundamentos-de-ingenieria-de-software.webp",
    },
    {
      id: 3,
      title: "Curso de Diseño",
      src: "/img/certificados/diseno.webp",
    },
    {
      id: 2,
      title: "Curso de ReactJS con Vite y TailwindCSS",
      src: "/img/certificados/curso-react-vite-tailwindcss.webp",
    },
    {
      id: 1,
      title: "Computación Básica",
      src: "/img/certificados/computacion-basica.webp",
    },
  ];
  return (
    <>
      <div className="mx-auto flex flex-col items-center justify-center md:w-[48rem]">
        <GoBackButton />
        <div className="md:grid grid-cols-2 gap-5 mx-auto flex items-center justify-center flex-col md:flex-row flex-wrap mt-10 w-fit ">
          {CERTIFICADOS.map((certificado, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  type: "spring",
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="w-auto text-center"
              >
                <img
                  className="w-[300px] rounded-xl mx-auto"
                  src={certificado.src}
                  alt={certificado.title}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
}
