import { motion } from "framer-motion";
import SectionTitle from "@components/SectionTitle";
import { fadeUp, stagger, revealOnView } from "@constants/motion";

const STACK = [
  "React",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Framer Motion",
  "Vite",
  "Supabase",
  "Vercel",
];

const CLIENTS = ["Jorge Luis Valbuena (Immunotec)", "Stizzo Planet"];

export default function About() {
  return (
    <section id="sobre-mi" className="mx-auto w-full max-w-content scroll-mt-24 px-6">
      <SectionTitle
        eyebrow="Sobre mí"
        title="Sitios que se ven bien y trabajan para tu negocio."
        description="Soy Eleazar, desarrollador web con experiencia en React y tecnologías modernas. Llevo alrededor de 5 años construyendo páginas web, combinando práctica constante con una pasión real por la tecnología y la resolución de problemas."
      />

      <motion.div
        variants={stagger(0.08)}
        {...revealOnView}
        className="mt-12 grid gap-6 md:grid-cols-2"
      >
        <motion.div variants={fadeUp} className="card p-7">
          <p className="text-sm text-label-2">Clientes destacados</p>
          <ul className="mt-4 flex list-none flex-col gap-3 p-0">
            {CLIENTS.map((client) => (
              <li
                key={client}
                className="border-b border-separator/10 pb-3 text-[0.9375rem] font-medium text-label last:border-0 last:pb-0"
              >
                {client}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div variants={fadeUp} className="card p-7">
          <p className="text-sm text-label-2">Herramientas</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {STACK.map((tech) => (
              <span key={tech} className="chip">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
