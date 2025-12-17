import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Certificados from "./Pages/Certificados/index.jsx";
import Proyectos from "./Pages/Proyectos/index.jsx";
import NotFoundPage from "./components/NotFoundPage/index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/certificados" element={<Certificados />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  </StrictMode>
);
