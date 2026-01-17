import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Main from "./components/Main";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Layout>
        <Main />
        <Projects />
        <Contact />
      </Layout>
    </>
  );
}

export default App;
