import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { FiCheck, FiLayout, FiLayers, FiCalendar } from "react-icons/fi";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import SectionTitle from "@components/SectionTitle";
import Principles from "@components/Main/Principles";
import ContactCTA from "@components/Main/ContactCTA";
import { fadeUp, stagger, revealOnView } from "@constants/motion";
import { whatsappLink } from "@constants/contact";

const SERVICES = [
  {
    id: 1,
    title: "Landing Page",
    icon: FiLayout,
    description:
      "Ideal para captar clientes rápido. Todo el foco en la conversión, con botón de WhatsApp integrado y optimización móvil extrema.",
    details: [
      "Enfoque en conversión y tiempos de carga rápidos.",
      "Llamados a la acción claros (WhatsApp, formularios) listos para medir resultados.",
      "Diseño mobile-first con una base sólida de SEO técnico.",
    ],
    tags: ["Estéticas", "Consultores"],
  },
  {
    id: 2,
    title: "Sitio Web Profesional",
    icon: FiLayers,
    description:
      "Para construir una marca sólida y confiable. Estructura multipágina (inicio, servicios, nosotros y contacto) con diseño editorial.",
    details: [
      "Arquitectura multipágina alineada a tu marca.",
      "Sistema visual consistente: tipografía, color y componentes.",
      "Listo para crecer con blog, CRM o automatizaciones.",
    ],
    tags: ["Academias", "Empresas"],
  },
  {
    id: 3,
    title: "Sitio Web con Sistema de Citas",
    icon: FiCalendar,
    description:
      "Automatiza tu agenda. Disponibilidad en tiempo real y reserva de turnos integrada, sin fricciones.",
    details: [
      "Disponibilidad y reservas en tiempo real para tu equipo.",
      "Flujos que reducen las inasistencias y el trabajo administrativo.",
      "Integración con pagos o depósitos según tu modelo de negocio.",
    ],
    tags: ["Barberías", "Spas", "Psicólogos"],
  },
];

function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <motion.article variants={fadeUp} className="card flex h-full flex-col p-7 md:p-8">
      <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary/10 text-primary">
        <Icon size={20} aria-hidden="true" />
      </span>
      <h2 className="text-title mt-6 text-label">{service.title}</h2>
      <p className="mt-3 text-[0.9375rem] leading-relaxed text-label-2">
        {service.description}
      </p>

      <ul className="mt-6 flex list-none flex-col gap-3 p-0">
        {service.details.map((line) => (
          <li key={line} className="flex gap-3 text-sm leading-relaxed text-label">
            <FiCheck
              aria-hidden="true"
              className="mt-0.5 shrink-0 text-primary"
              size={16}
            />
            {line}
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-8">
        <p className="text-xs font-medium text-label-3">Ideal para</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {service.tags.map((tag) => (
            <span key={tag} className="chip">
              {tag}
            </span>
          ))}
        </div>
        <a
          href={whatsappLink(
            `Hola Eleazar, me interesa el servicio de ${service.title}.`,
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary mt-6 w-full"
        >
          Solicitar este servicio
        </a>
      </div>
    </motion.article>
  );
}

ServiceCard.propTypes = {
  service: PropTypes.shape({
    title: PropTypes.string.isRequired,
    icon: PropTypes.elementType.isRequired,
    description: PropTypes.string.isRequired,
    details: PropTypes.arrayOf(PropTypes.string).isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default function ServicesPage() {
  return (
    <Layout>
      <SEO
        title="Servicios de Desarrollo Web"
        description="Landing pages, sitios web profesionales y sistemas con reservas de citas. Desarrollo web frontend en Colombia con diseño 100% personalizado y enfoque en conversiones."
        keywords="servicios desarrollo web, landing page Colombia, sitio web profesional, sistema de citas, diseño web, integración WhatsApp"
        url="/servicios"
      />

      <div className="flex flex-col gap-28 md:gap-40">
        <section className="mx-auto w-full max-w-content px-6 pt-6">
          <SectionTitle
            as="h1"
            eyebrow="Servicios"
            title="Sitios web que trabajan por tu negocio."
            description="No se trata solo de tener una página web, sino de tener una herramienta que te ayude a conseguir más clientes y a organizar mejor tu negocio."
          />

          <motion.div
            variants={stagger(0.1)}
            {...revealOnView}
            className="mt-14 grid gap-6 lg:grid-cols-3"
          >
            {SERVICES.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </motion.div>
        </section>

        <Principles />
        <ContactCTA />
      </div>
    </Layout>
  );
}
