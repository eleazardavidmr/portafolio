import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Main from "./components/Main";
import Background from "./components/Background";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="display flex items-center justify-center flex-col mx-auto">
        <Background />
        <Navbar />
        <Main />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
