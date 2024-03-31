import "./App.css";
import { AboutMe } from "./components/AboutMe";
import { Experience } from "./components/Exprecience";
import { Form } from "./components/Form";
import { Goals } from "./components/Goals";
import { Main } from "./components/Main";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Socials } from "./components/Socials";
import { useState } from "react";
function App() {
  return (
    <>
      <div className="app">
        <Main />
        <hr />
        <Experience />
        <hr />
        <AboutMe />
        <hr />
        <Goals />
        <hr />
        <Projects />
        <hr />
        <Skills />
        <hr />
        <Socials />
        <Form />
      </div>
    </>
  );
}

export default App;
