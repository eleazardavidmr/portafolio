import { motion } from "framer-motion";
import { FiPenTool, FiTrendingUp, FiSmartphone, FiMessageCircle } from "react-icons/fi";
import SectionTitle from "@components/SectionTitle";
import { fadeUp, stagger, revealOnView } from "@constants/motion";

const PRINCIPLES = [
  {
    title: "Diseño 100% a medida",
    icon: FiPenTool,
    description:
      "Sin plantillas genéricas. Cada detalle se diseña para la identidad y las necesidades de tu marca.",
  },
  {
    title: "Enfocado en resultados",
    icon: FiTrendingUp,
    description:
      "No solo diseño algo bonito: construyo herramientas de negocio pensadas para conseguir clientes reales.",
  },
  {
    title: "Primero en móvil",
    icon: FiSmartphone,
    description:
      "Tu sitio se ve y funciona perfecto en cualquier pantalla, empezando por el teléfono de tus clientes.",
  },
  {
    title: "Integración con WhatsApp",
    icon: FiMessageCircle,
    description:
      "Contacto inmediato: tus clientes te escriben por el canal que ya usan todos los días.",
  },
];

export default function Principles() {
  return (
    <section id="como-trabajo" className="mx-auto w-full max-w-content scroll-mt-24 px-6">
      <SectionTitle
        eyebrow="Cómo trabajo"
        title="Cada detalle, pensado para tu negocio."
      />

      <motion.ul
        variants={stagger(0.08)}
        {...revealOnView}
        className="mt-12 grid list-none gap-x-8 gap-y-10 p-0 sm:grid-cols-2 lg:grid-cols-4"
      >
        {PRINCIPLES.map(({ title, icon: Icon, description }) => (
          <motion.li key={title} variants={fadeUp} className="flex flex-col gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary/10 text-primary">
              <Icon size={20} aria-hidden="true" />
            </span>
            <h3 className="mt-2 text-[1.0625rem] font-semibold tracking-tight text-label">
              {title}
            </h3>
            <p className="text-[0.9375rem] leading-relaxed text-label-2">
              {description}
            </p>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
