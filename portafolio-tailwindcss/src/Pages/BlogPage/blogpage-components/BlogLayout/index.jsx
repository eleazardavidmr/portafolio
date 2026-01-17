import { Outlet } from "react-router-dom";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";

const BlogLayout = () => {
  return (
    <div className="min-h-screen flex flex-col font-pixel bg-slate-50 dark:bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.1),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] transition-colors duration-300">
      <Navbar />
      <main className="flex-grow pt-24 pb-12 px-4 md:px-8 relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default BlogLayout;
