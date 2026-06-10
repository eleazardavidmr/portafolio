import Layout from "@/components/Layout";
import {
  MdOutlineRocketLaunch,
  MdCorporateFare,
  MdEventAvailable,
  MdDevices,
} from "react-icons/md";
import { FaPaintBrush, FaTerminal } from "react-icons/fa";
import { IoIosTrendingUp } from "react-icons/io";
import { CiChat1 } from "react-icons/ci";
import SectionTile from "@/components/SectionTitle";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SERVICES = [
  {
    id: 1,
    contactSlug: "landing",
    title: "Landing Page",
    icon: MdOutlineRocketLaunch,
    description:
      "Ideal para captar clientes rápidamente. Enfoque total en conversión, integración de botón de WhatsApp y optimización móvil extrema.",
    details: [
      "Enfoque en conversión y tiempos de carga rápidos.",
      "CTAs claros (WhatsApp, formularios) listos para medir resultados.",
      "Diseño mobile-first con base SEO técnica sólida.",
    ],
    tags: ["Estéticas", "Consultores"],
  },
  {
    id: 2,
    contactSlug: "sitio-profesional",
    title: "Sitio Web Profesional",
    icon: MdCorporateFare,
    description:
      "Para construir una marca sólida y confiable. Estructura multipágina: Home, Servicios, Nosotros y Contacto con diseño editorial.",
    details: [
      "Arquitectura multipágina alineada a tu marca.",
      "Sistema visual consistente: tipografía, color y componentes.",
      "Listo para escalar con blog, CRM o automatizaciones.",
    ],
    tags: ["Academias", "Empresas"],
  },
  {
    id: 3,
    contactSlug: "citas",
    title: "Sitio Web con Sistema de Citas",
    icon: MdEventAvailable,
    description:
      "Automatiza tu negocio por completo. Gestión de disponibilidad en tiempo real y reserva de turnos integrada sin fricciones.",
    details: [
      "Disponibilidad y reservas en tiempo real para tu equipo.",
      "Flujos que reducen inasistencias y trabajo administrativo.",
      "Encaje con pagos o depósitos según tu modelo de negocio.",
    ],
    tags: ["Barberías", "Spas", "Psicólogos"],
  },
];

const FEATURES = [
  {
    id: 1,
    title: "100% Custom Design",
    icon: FaPaintBrush,
    description:
      "Sin plantillas genéricas. Cada pixel es diseñado específicamente para la identidad y necesidades de tu marca.",
  },
  {
    id: 2,
    title: "Focus on Results",
    icon: IoIosTrendingUp,
    description:
      "No solo diseño estética, diseño herramientas de negocio orientadas a captar clientes reales.",
  },
  {
    id: 3,
    title: "Mobile Optimized",
    icon: MdDevices,
    description:
      "Tu sitio se verá y funcionará perfecto en cualquier pantalla, priorizando la experiencia móvil.",
  },
  {
    id: 4,
    title: "WhatsApp Integration",
    icon: CiChat1,
    description:
      "Conversión directa. Facilitamos el contacto inmediato de tus clientes a través de su canal favorito.",
  },
];

function ServiceCard({ service }) {
  const IconComponent = service.icon;
  const isN8nAccent = service.detailsVariant === "n8n";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
      className="group bg-surface-container-highest p-8 rounded-2xl transition-all duration-300 hover:bg-surface-bright flex flex-col h-full border border-transparent shadow-sm shadow-black/[0.04] dark:shadow-black/25 hover:border-primary/35 hover:shadow-md hover:shadow-black/[0.07] dark:hover:shadow-black/45"
    >
      <motion.div
        className="mb-8"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.3 }}
      >
        <span
          className={`material-symbols-outlined text-4xl ${
            isN8nAccent ? "text-[#EA4B71]" : "text-primary"
          }`}
        >
          <IconComponent />
        </span>
      </motion.div>
      <h3 className="font-body text-xl font-bold text-on-surface mb-2">
        {service.title}
      </h3>
      <p className="font-body text-on-surface-variant text-sm mb-6 leading-relaxed">
        {service.description}
      </p>
      <ul
        className={`list-disc pl-4 space-y-2 text-xs leading-relaxed mb-6 ${
          isN8nAccent
            ? "text-[#EA4B71] marker:text-[#EA4B71]/80"
            : "text-on-surface-variant marker:text-on-surface-variant/60"
        }`}
      >
        {service.details.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
      <div className="mt-auto">
        <p className="text-xs font-label uppercase tracking-widest text-primary/60 mb-4">
          Perfecto para:
        </p>
        <div className="flex flex-wrap gap-2">
          {service.tags.map((tag, index) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="font-label text-[10px] uppercase tracking-wider bg-secondary-container text-on-secondary-container px-2 py-1 rounded-sm"
            >
              {tag}
            </motion.span>
          ))}
        </div>
        <Link
          to={`/contacto?servicio=${service.contactSlug}`}
          className="mt-6 inline-flex w-full items-center justify-center rounded-xl border border-primary/40 bg-primary/10 px-4 py-3 text-center text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          Solicitar este servicio
        </Link>
      </div>
    </motion.div>
  );
}

ServiceCard.propTypes = {
  service: PropTypes.shape({
    id: PropTypes.number.isRequired,
    contactSlug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.elementType.isRequired,
    description: PropTypes.string.isRequired,
    details: PropTypes.arrayOf(PropTypes.string).isRequired,
    detailsVariant: PropTypes.oneOf(["n8n"]),
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

function FeatureItem({ feature, index }) {
  const IconComponent = feature.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      whileHover={{ x: 5 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="flex gap-4"
    >
      <motion.span
        className="material-symbols-outlined text-primary flex-shrink-0"
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.3 }}
      >
        <IconComponent />
      </motion.span>
      <div>
        <h4 className="font-body font-bold text-on-surface mb-2">
          {feature.title}
        </h4>
        <p className="text-on-surface-variant text-sm">{feature.description}</p>
      </div>
    </motion.div>
  );
}

FeatureItem.propTypes = {
  feature: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.elementType.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default function ServicesPage() {
  return (
    <Layout>
      <main className="pb-16">
        {/* Hero/Header Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="px-8 py-20 max-w-screen-2xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            {/* <h2 className="font-headline text-primary text-4xl md:text-6xl font-bold tracking-tight mb-6 text-glow">
              &gt; Servicios Especializados
            </h2> */}
            <SectionTile
              title="Servicios Especializados"
              className={"md:text-4xl"}
            />
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="font-body text-on-surface-variant text-xl md:text-2xl leading-relaxed max-w-3xl border-l-2 border-primary/20 pl-8 ml-1"
            >
              Diseño y desarrollo de ecosistemas digitales de alto rendimiento.
              Soluciones técnicas pensadas para escalar su negocio con precisión
              arquitectónica.
            </motion.p>
          </motion.div>
        </motion.section>

        {/* Services Grid Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="px-8 py-12 bg-surface-container-low"
        >
          <div className="max-w-screen-2xl mx-auto">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.15,
                    delayChildren: 0.1,
                  },
                },
              }}
            >
              {SERVICES.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Why Work With Me Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="px-8 py-24 max-w-screen-2xl mx-auto"
        >
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:w-1/3"
            >
              <h2 className="font-headline text-3xl font-bold text-on-surface mb-4 tracking-tight">
                ¿Por qué trabajar conmigo?
              </h2>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="h-1 bg-primary"
              ></motion.div>
            </motion.div>
            <motion.div
              className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-12"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.12,
                    delayChildren: 0.1,
                  },
                },
              }}
            >
              {FEATURES.map((feature, index) => (
                <FeatureItem key={feature.id} feature={feature} index={index} />
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* High Impact Enfoque Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="px-8 py-32 bg-surface-container-lowest overflow-hidden relative border-t border-outline-variant/20"
        >
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_#99f7ff22_0%,_transparent_50%)]"></div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center relative z-10"
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="font-label text-[10px] tracking-[0.4em] uppercase text-primary mb-8"
            >
              NUESTRO ENFOQUE // CORE PHILOSOPHY
            </motion.div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="font-headline text-3xl md:text-5xl font-bold text-on-surface leading-tight mb-8"
            >
              "No se trata solo de tener una página web… Se trata de tener una{" "}
              <span className="text-primary text-glow">herramienta</span> que te
              ayude a conseguir más clientes y organizar mejor tu negocio."
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex justify-center gap-4"
            >
              <div className="h-[1px] w-12 bg-outline-variant self-center"></div>
              <span className="material-symbols-outlined text-primary/50 text-sm">
                <FaTerminal />
              </span>
              <div className="h-[1px] w-12 bg-outline-variant self-center"></div>
            </motion.div>
          </motion.div>
        </motion.section>
      </main>
    </Layout>
  );
}
