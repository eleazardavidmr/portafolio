// Puedes renombrar el archivo a DeveloperCard.jsx para claridad
import React from "react";

const DeveloperCard = () => {
  return (
    // CONTENEDOR PRINCIPAL
    // Reduje la rotación inicial y simplifiqué el hover a solo un movimiento
    <div
      className="
        md:w-[40%] mt-5 mb-10 
        transform rotate-2 
        hover:rotate-0 hover:scale-105 
        transition-all duration-500 ease-in-out 
        cursor-pointer
    "
    >
      {/* TARJETA VISIBLE */}
      <div
        className="
          relative rounded-3xl w-72 h-40 md:w-80 md:h-44 
          bg-slate-900 dark:bg-slate-800 
          text-gray-50 flex flex-col justify-center items-center gap-1 
          shadow-xl border border-primary/20
      "
      >
        {/* TEXTO GRANDE Y JERARQUÍA */}
        <span className="text-6xl font-extrabold text-white">JR.</span>
        <p className="text-lg font-medium text-primary tracking-wider">
          FRONTEND DEVELOPER
        </p>

        {/* DETALLE DE FONDO (Glow sutil) */}
        <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full scale-50 opacity-50 -z-10" />
      </div>

      {/* DETALLE DE CAPA INFERIOR (Para dar un efecto de profundidad) */}
      <div
        className="
        absolute w-72 h-40 md:w-80 md:h-44 top-3 left-3 -z-20 
        bg-gray-700 dark:bg-gray-900 
        rounded-3xl 
        opacity-70 group-hover:opacity-100 transition-opacity duration-300
      "
      />
    </div>
  );
};

export default DeveloperCard;
