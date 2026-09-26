import { motion } from "framer-motion";
import { fadeUp, stagger, revealOnView } from "@constants/motion";
import { whatsappLink, EMAIL } from "@constants/contact";

export default function ContactCTA() {
  return (
    <section className="mx-auto w-full max-w-content px-6">
      <motion.div
        variants={stagger(0.08)}
        {...revealOnView}
        className="card relative overflow-hidden px-6 py-16 text-center md:px-16 md:py-24"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-64 w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[90px] dark:bg-primary/15"
        />
        <motion.h2
          variants={fadeUp}
          className="text-headline relative mx-auto max-w-2xl text-balance"
        >
          ¿Listo para tener presencia online?
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="text-lead relative mx-auto mt-5 max-w-xl text-label-2"
        >
          Cuéntame en qué está tu negocio y te respondo en menos de 24 horas.
        </motion.p>
        <motion.div
          variants={fadeUp}
          className="relative mt-9 flex flex-wrap justify-center gap-3"
        >
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Escríbeme por WhatsApp
          </a>
          <a href={`mailto:${EMAIL}`} className="btn-secondary">
            Enviar un correo
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
