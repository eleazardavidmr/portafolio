import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Main from "./components/Main";
function App() {
  return (
    <>
      <div className=" display flex items-center justify-center flex-col md:w-[48rem] mx-auto">
        <Navbar />
        <Main />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </>
  );
}

export default App;
