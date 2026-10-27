import { motion } from "framer-motion";
import PropTypes from "prop-types";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { fadeUp, stagger } from "@constants/motion";
import { PRIVACIDAD, TERMINOS } from "./contenido";

// Página de texto legal (términos y privacidad de la app de TikTok)
function LegalPage({ doc }) {
  return (
    <Layout>
      <SEO title={doc.titulo} description={doc.descripcion} url={doc.url} />

      <motion.article
        variants={stagger(0.06)}
        initial="hidden"
        animate="visible"
        className="mx-auto max-w-3xl px-6 pt-6"
      >
        <motion.p variants={fadeUp} className="text-eyebrow text-primary">
          Legal
        </motion.p>
        <motion.h1
          variants={fadeUp}
          className="text-display mt-4 text-balance text-label"
        >
          {doc.titulo}
        </motion.h1>
        <motion.p variants={fadeUp} className="mt-4 text-sm text-label-3">
          Última actualización: {doc.actualizado}
        </motion.p>
        <motion.p variants={fadeUp} className="text-lead mt-8 text-label-2">
          {doc.intro}
        </motion.p>

        {doc.secciones.map((seccion) => (
          <motion.section key={seccion.titulo} variants={fadeUp} className="mt-12">
            <h2 className="text-title text-label">{seccion.titulo}</h2>
            {seccion.parrafos.map((parrafo) => (
              <p key={parrafo} className="mt-4 leading-relaxed text-label-2">
                {parrafo}
              </p>
            ))}
            {seccion.lista && (
              <ul className="mt-4 flex list-disc flex-col gap-3 pl-6 leading-relaxed text-label-2 marker:text-primary">
                {seccion.lista.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </motion.section>
        ))}
      </motion.article>
    </Layout>
  );
}

LegalPage.propTypes = {
  doc: PropTypes.shape({
    url: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    actualizado: PropTypes.string.isRequired,
    intro: PropTypes.string.isRequired,
    secciones: PropTypes.arrayOf(
      PropTypes.shape({
        titulo: PropTypes.string.isRequired,
        parrafos: PropTypes.arrayOf(PropTypes.string).isRequired,
        lista: PropTypes.arrayOf(PropTypes.string),
      }),
    ).isRequired,
  }).isRequired,
};

export const Terminos = () => <LegalPage doc={TERMINOS} />;
export const Privacidad = () => <LegalPage doc={PRIVACIDAD} />;
