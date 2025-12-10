import SectionTitle from "../../SectionTitle";
import { motion } from "framer-motion";

export default function Goals() {
  const goalsData = [
    {
      id: 1,
      icon: "🚀",
      title: "Aprendizaje Perpetuo",
      description:
        "Siempre estoy buscando expandir mis conocimientos. Mis metas incluyen explorar nuevas tecnologías como Next.js o TypeScript y mantenerme al tanto de las últimas tendencias.",
    },
    {
      id: 2,
      icon: "🌐",
      title: "Impacto Significativo",
      description:
        "Aspiro a trabajar en proyectos que desafíen mis habilidades y tengan un impacto positivo, creando soluciones innovadoras que mejoren la experiencia digital.",
    },
    {
      id: 3,
      icon: "🚧",
      title: "Proyectos Personales",
      description:
        "Exploraré la creación de proyectos que reflejen mi creatividad y resuelvan problemas reales. Oportunidades esenciales para aplicar mis habilidades.",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80 },
    },
  };

  return (
    <section id="metas-y-objetivos" className="w-full py-10">
      <SectionTitle title="Metas y Objetivos 🎯" />

      <div className="mt-8 max-w-3xl mx-auto text-center px-4">
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-inter">
          Mi viaje está impulsado por la{" "}
          <span className="font-semibold text-primary">creación</span> y la{" "}
          <span className="font-semibold text-primary">innovación</span>. Estos
          son mis pilares:
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4"
      >
        {goalsData.map((goal) => (
          <motion.div
            key={goal.id}
            variants={itemVariants}
            // Uso de border-primary/20 para un borde sutil coloreado en dark mode
            className="group relative p-8 rounded-3xl bg-white dark:bg-slate-900 border border-gray-100 dark:border-white-light/10 shadow-xl dark:shadow-none hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2 overflow-hidden"
          >
            {/* Decoración de fondo con tu color primary */}
            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors duration-500 blur-2xl" />

            {/* Icono: Fondo primary transparente y texto primary */}
            <div className="relative mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-3xl text-primary group-hover:scale-110 transition-transform duration-300">
              {goal.icon}
            </div>

            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-primary transition-colors font-jetbrains">
              {goal.title}
            </h3>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-inter">
              {goal.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
