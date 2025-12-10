import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Main from "./components/Main";
import Background from "./components/Background";
function App() {
  return (
    <>
      <div className="display flex items-center justify-center flex-col mx-auto">
        <Background />
        <Main />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
