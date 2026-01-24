import Projects from "@components/Projects";
import Contact from "@components/Contact";
import Main from "@components/Main";
import Layout from "@components/Layout";
import SEO from "@components/SEO";
import ContactForm from "@components/Contact/ContactForm";
function App() {
  return (
    <>
      <Layout>
        <SEO
          title="Eleazar Muñoz | Web Portfolio & Blog"
          description="Explora artículos sobre desarrollo frontend, tutoriales de React, y recursos para desarrolladores. Aprende y mejora tus habilidades de programación."
          keywords="blog programacion, desarrollo web, frontend, react, javascript, tutoriales"
        />
        <Main />
        <Projects />
        <ContactForm />
        {/* <Contact /> */}
      </Layout>
    </>
  );
}

export default App;
