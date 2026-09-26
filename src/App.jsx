import Main from "@components/Main";
import Layout from "@components/Layout";
import SEO from "@components/SEO";

function App() {
  return (
    <Layout>
      <SEO
        title="Desarrollador Web Frontend en Colombia"
        description="Eleazar Muñoz: construyo sitios web profesionales y modernos para empresas y emprendedores en Colombia. Contacta hoy y ten tu web en menos de 2 semanas."
        keywords="desarrollador web Colombia, frontend developer, React, landing page profesional, portafolio web, sitio web para negocios"
        url="/"
        image="https://edmr.dev/img/profile.jpg"
      />
      <Main />
    </Layout>
  );
}

export default App;
