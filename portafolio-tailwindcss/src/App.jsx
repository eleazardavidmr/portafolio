import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Main from "./components/Main";
function App() {
  return (
    <>
      <div className="display flex items-center justify-center flex-col md:w-[48rem] mx-auto">
        <Main />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
