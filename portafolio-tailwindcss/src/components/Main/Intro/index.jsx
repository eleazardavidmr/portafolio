import { motion } from "framer-motion";
import Button from "./Button";
export default function Intro() {
  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        id="inicio"
        className="md:min-h-[60vh] min-h-[80vh] w-full px-3 flex flex-col items-center justify-center gap-10 md:flex-row mt-10"
      >
        <img
          src="/img/profile.jpg"
          alt="Eleazar Muñoz"
          className="rounded-full w-[90%] md:w-[50%]"
        />
        <div className="flex flex-col items-center justify-center mt-5 gap-5 text-center">
          <span className="text-4xl font-extrabold text-primary font-jetbrains">
            Eleazar Muñoz
          </span>
          <span className="w-[80%]">
            Un desarrollador web fronted de 17 años nacido en Venezuela.
          </span>
          <div className="w-full flex items-center justify-center">
            <Button
              to={"/certificados"}
              title="Mira mis logros y certificados"
            />
          </div>
        </div>
      </motion.section>
    </>
  );
}
