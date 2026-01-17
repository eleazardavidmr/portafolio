import Footer from "@/components/Footer";
import Navbar from "../Navbar";
import Background from "@/components/Background";
import { Toaster } from "react-hot-toast";
export default function Layout({ children }) {
  return (
    <>
      <Toaster />
      <Background />
      <Navbar />
      <main className="min-h-screen pt-32 pb-20 px-6">{children}</main>
      <Footer />
    </>
  );
}
