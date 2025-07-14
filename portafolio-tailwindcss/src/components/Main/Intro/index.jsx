import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
export default function Intro() {
  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        id="inicio"
        className="md:min-h-[60vh] min-h-[80vh] w-full px-3 flex flex-col items-center justify-center gap-10 md:flex-row"
      >
        <img
          src="/img/profile.jpg"
          alt="Eleazar Muñoz"
          className="rounded-full w-[90%] md:w-[50%]"
        />
        <div className="flex flex-col items-center justify-center mt-5 gap-5 text-center">
          <span className="text-3xl font-extrabold text-primary font-jetbrains">
            <Typewriter
              words={["Eleazar Muñoz"]}
              loop={5}
              cursor={true}
              cursorStyle={"_"}
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
          <span className=" w-[80%]">
            Un desarrollador web fronted de 17 años nacido en Venezuela.
          </span>
        </div>
      </motion.section>
    </>
  );
}
