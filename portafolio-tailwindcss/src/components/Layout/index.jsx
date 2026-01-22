import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import Background from "@components/Background";
import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";

export default function Layout({
  children,
  showBackground = true,
  containerClassName = "max-w-7xl flex mx-auto flex-col pt-32 pb-20 px-6",
  fullHeight = false,
}) {
  return (
    <div className={`flex flex-col ${fullHeight ? "min-h-screen" : ""}`}>
      {showBackground && <Background />}
      <Navbar />
      <main className={containerClassName}>{children || <Outlet />}</main>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  showBackground: PropTypes.bool,
  containerClassName: PropTypes.string,
  fullHeight: PropTypes.bool,
};
