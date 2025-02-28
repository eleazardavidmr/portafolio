import { Link } from "react-router-dom";
import CssIcon from "../../icons/CssIcon";
import HtmlIcon from "../../icons/HtmlIcon";
import JavaScriptIcon from "../../icons/JavaScriptIcon";
import ReactIcon from "../../icons/ReactIcon";
import Skill from "./Skill";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <>
      <h1
        id="habilidades"
        className="text-primary font-bold text-2xl self-start mx-5 mt-5 md:mt-20"
      >
        Habilidades 💻
      </h1>
      <section className="">
        <div className="grid gap-3 mt-5 md:grid-cols-2 px-5">
          <Skill name="React" icon={<ReactIcon width={20} height={20} />} />
          <Skill name="CSS" icon={<CssIcon width={20} height={20} />} />
          <Skill name="HTML" icon={<HtmlIcon width={20} height={20} />} />
          <Skill
            name="JavaScript"
            icon={<JavaScriptIcon width={20} height={20} />}
          />
        </div>
        <div className="mt-5 mx-auto flex items-center justify-center mb-5">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 1 }}
            type="button"
            className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            <Link to="/certificados">Ver mis logros y certificados</Link>
          </motion.button>
        </div>
      </section>
    </>
  );
}
