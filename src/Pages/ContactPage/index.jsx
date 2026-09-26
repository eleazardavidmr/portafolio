import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiArrowUpRight } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { fadeUp, stagger } from "@constants/motion";
import { whatsappLink, EMAIL, LOCATION, SOCIALS } from "@constants/contact";

export default function ContactPage() {
  return (
    <Layout>
      <SEO
        title="Contacto"
        description="Contáctame para proyectos de desarrollo web, landing pages o automatización. Respondo en menos de 24 horas. Desarrollador web en Colombia."
        keywords="contacto, desarrollo web, freelance, automatización, Colombia, landing page"
        url="/contacto"
      />

      <motion.section
        variants={stagger(0.08)}
        initial="hidden"
        animate="visible"
        className="mx-auto grid max-w-content gap-14 px-6 pt-6 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-20"
      >
        <div>
          <motion.p variants={fadeUp} className="text-eyebrow text-primary">
            Contacto
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="text-display mt-4 text-balance text-label"
          >
            ¿Listo para tener presencia online?
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-lead mt-6 max-w-xl text-label-2"
          >
            Cuéntame en qué está tu negocio y te respondo en menos de 24 horas.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-9">
            <a
              href={whatsappLink(
                "Hola Eleazar, vi tu sitio web y quiero que hablemos sobre mi negocio.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary !px-7 !py-3.5 text-base"
            >
              <FaWhatsapp size={20} aria-hidden="true" />
              Escríbeme por WhatsApp
            </a>
          </motion.div>
        </div>

        <motion.div variants={fadeUp} className="card divide-y divide-separator/10">
          <a
            href={`mailto:${EMAIL}`}
            className="group flex items-center gap-4 p-6 transition-colors hover:bg-label/[0.03]"
          >
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary">
              <FiMail size={20} aria-hidden="true" />
            </span>
            <span className="min-w-0">
              <span className="block text-sm text-label-2">Correo</span>
              <span className="block break-all font-medium text-label">
                {EMAIL}
              </span>
            </span>
          </a>

          <div className="flex items-center gap-4 p-6">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary">
              <FiMapPin size={20} aria-hidden="true" />
            </span>
            <span>
              <span className="block text-sm text-label-2">Ubicación</span>
              <span className="block font-medium text-label">{LOCATION}</span>
            </span>
          </div>

          <div className="p-6">
            <p className="text-sm text-label-2">Redes</p>
            <ul className="mt-3 flex list-none flex-col gap-1 p-0">
              {SOCIALS.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group -mx-2 flex items-center justify-between rounded-xl px-2 py-2 font-medium text-label transition-colors hover:bg-label/[0.04]"
                  >
                    {social.label}
                    <FiArrowUpRight
                      aria-hidden="true"
                      className="text-label-3 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </motion.section>
    </Layout>
  );
}
