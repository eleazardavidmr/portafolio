import Footer from "@/components/Footer";
import Navbar from "../Navbar";
import Background from "@/components/Background";
import PropTypes from "prop-types";

export default function Layout({ children }) {
  return (
    <>
      <Background />
      <Navbar />
      <main className="max-w-7xl flex mx-auto flex-col pt-32 pb-20 px-6">
        {children}
      </main>
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
