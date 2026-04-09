import PropTypes from "prop-types";
import { Typewriter } from "react-simple-typewriter";

export default function SectionTitle({ title, className }) {
  return (
    // Usamos 'group' por si quieres añadir efectos hover al contenedor en el futuro
    <div className="w-fit mb-6">
      <h2
        className={`flex items-center text-xl md:text-2xl font-bold px-5 py-2 rounded-xl bg-primary/10 text-primary font-jetbrains border border-primary/20 shadow-sm ${className}`}
      >
        {/* Decoración estilo Terminal (Prompt) */}
        <span className="mr-3 text-primary/50 select-none">{">"}</span>

        {/* Componente Typewriter */}
        <span>
          <Typewriter
            words={[title]}
            loop={0} // 0 = Infinito (si quieres que pare, pon 1)
            cursor
            cursorStyle={"_"}
            typeSpeed={80} // Un poco más lento para que se lea mejor
            deleteSpeed={50}
            delaySpeed={2500} // Espera más tiempo antes de borrar
          />
        </span>
      </h2>
    </div>
  );
}

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
