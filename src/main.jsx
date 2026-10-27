import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { MotionConfig } from "framer-motion";
import "@/index.css";
import App from "@/App.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "@components/Loader";
import ScrollToTop from "@components/ScrollToTop";

const Certificados = lazy(() => import("@pages/Certificados/index.jsx"));
const Proyectos = lazy(() => import("@pages/Proyectos/index.jsx"));
const NotFoundPage = lazy(() => import("@components/NotFoundPage/index.jsx"));
const ServicesPage = lazy(() => import("@pages/ServicesPage/index.jsx"));
const ContactPage = lazy(() => import("@pages/ContactPage/index.jsx"));
const ProjectDetail = lazy(
  () => import("@components/Projects/ProjectDetail.jsx"),
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      {/* "user": con movimiento reducido activo, se quitan los desplazamientos */}
      <MotionConfig reducedMotion="user">
        <Router>
          <ScrollToTop />
          <Suspense fallback={<Loader fullScreen />}>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/certificados" element={<Certificados />} />
              <Route path="/proyectos" element={<Proyectos />} />
              <Route path="/proyectos/:slug" element={<ProjectDetail />} />
              <Route path="/servicios" element={<ServicesPage />} />
              <Route path="/contacto" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </Router>
      </MotionConfig>
    </HelmetProvider>
  </StrictMode>,
);
