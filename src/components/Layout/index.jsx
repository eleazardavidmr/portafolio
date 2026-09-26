import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import Background from "@components/Background";
import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";

export default function Layout({ children, showBackground = true }) {
  return (
    <div className="relative flex min-h-screen flex-col">
      {showBackground && <Background />}
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-surface focus:px-4 focus:py-2 focus:text-sm focus:font-semibold"
      >
        Saltar al contenido
      </a>
      <Navbar />
      <main id="contenido" className="flex-1 pt-28 md:pt-32">
        {children || <Outlet />}
      </main>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
  showBackground: PropTypes.bool,
};
