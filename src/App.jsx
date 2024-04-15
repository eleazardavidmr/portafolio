import "./App.css";
import { AboutMe } from "./components/AboutMe";
import { Experience } from "./components/Exprecience";
import { Goals } from "./components/Goals";
import { Main } from "./components/Main";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Socials } from "./components/Socials";
import { Navbar } from "./components/Navbar";
import { useState } from "react";
function App() {
  return (
    <>
      <Navbar />
      <div className="app">
        <Main />
        <Experience />
        <AboutMe />
        <Goals />
        <Projects />
        <Skills />
        <Socials />
      </div>
    </>
  );
}

export default App;
