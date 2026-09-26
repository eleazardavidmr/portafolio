import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import Layout from "@components/Layout";
import SectionTitle from "@components/SectionTitle";
import SEO from "@components/SEO";
import { fadeUp, stagger } from "@constants/motion";

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
    title: "Fundamentos de Ing. de Software",
    src: "/img/certificados/fundamentos-de-ingenieria-de-software.webp",
  },
  {
    id: 3,
    title: "Curso de Diseño",
    src: "/img/certificados/diseno.webp",
  },
  {
    id: 2,
    title: "ReactJS con Vite y TailwindCSS",
    src: "/img/certificados/curso-react-vite-tailwindcss.webp",
  },
  {
    id: 1,
    title: "Computación Básica",
    src: "/img/certificados/computacion-basica.webp",
  },
];

export default function Certificados() {
  return (
    <Layout>
      <SEO
        title="Certificaciones y Credenciales"
        description="Certificaciones oficiales de Eleazar Muñoz en desarrollo web, React, diseño UI, e inglés EF SET. Validación de conocimiento y trayectoria profesional."
        keywords="certificados, cursos, desarrollo web, React, Platzi, EF SET, inglés, frontend"
        url="/certificados"
      />

      <section className="mx-auto max-w-content px-6 pt-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionTitle
            as="h1"
            eyebrow="Certificados"
            title="Aprendizaje constante."
            description="Cursos y credenciales que respaldan mi formación en desarrollo web y diseño."
          />

          <a
            href="https://cert.efset.org/en/jX4kiV"
            target="_blank"
            rel="noopener noreferrer"
            className="group card flex shrink-0 items-center gap-4 p-5 transition-transform duration-150 active:scale-[0.98] md:mb-2"
          >
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary/10 text-sm font-semibold text-primary">
              EN
            </span>
            <span>
              <span className="block font-semibold text-label">
                EF SET English Certificate
              </span>
              <span className="mt-0.5 inline-flex items-center gap-1 text-sm text-label-2">
                Ver credencial oficial
                <FiArrowUpRight
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </span>
            </span>
          </a>
        </div>

        <motion.div
          variants={stagger(0.06)}
          initial="hidden"
          animate="visible"
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {CERTIFICADOS.map((certificado) => (
            <motion.figure
              key={certificado.id}
              variants={fadeUp}
              className="card overflow-hidden"
            >
              <div className="aspect-video overflow-hidden bg-surface-2">
                <img
                  src={certificado.src}
                  alt={`Certificado: ${certificado.title}`}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="p-5 font-medium text-label">
                {certificado.title}
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </section>
    </Layout>
  );
}
