import { useEffect } from "react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import ContactForm from "@/components/Contact/ContactForm";

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout containerClassName="max-w-7xl flex mx-auto flex-col w-full pt-0 pb-0 px-6">
      <SEO
        title="Contacto"
        description="Contáctame para proyectos de desarrollo web, landing pages o automatización. Respondo en menos de 24 horas. Desarrollador web en Colombia."
        keywords="contacto, desarrollo web, freelance, automatización, n8n, Colombia, landing page"
        url="/contacto"
      />
      <ContactForm />
    </Layout>
  );
}
