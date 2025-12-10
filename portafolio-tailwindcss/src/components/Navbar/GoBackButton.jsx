import { Link } from "react-router-dom";
import ArrowLeftIcon from "../../icons/ArrowLeftIcon";

export default function GoBackButton() {
  return (
    <Link
      to="/"
      // Estilo 'Pill' (Píldora), ancho automático (w-fit) y efectos Glassmorphism
      className="group inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/80 dark:bg-slate-900/60 backdrop-blur-md border border-gray-200 dark:border-white-light/10 hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 w-fit"
    >
      {/* Contenedor del icono para animarlo independientemente */}
      <span className="transition-transform duration-300 group-hover:-translate-x-1 text-primary">
        {/* Pasamos 'currentColor' para que herede el color del texto (text-primary) */}
        <ArrowLeftIcon width={24} height={24} stroke="currentColor" />
      </span>

      <span className="text-base font-bold font-jetbrains text-gray-700 dark:text-white group-hover:text-primary transition-colors">
        Volver
      </span>
    </Link>
  );
}
