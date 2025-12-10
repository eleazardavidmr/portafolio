import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-50 h-full w-full overflow-hidden">
      {/* 1. CAPA BASE: Color Sólido Profundo */}
      {/* Dark Mode: Slate 950 | Light Mode: Slate 50 */}
      <div className="absolute inset-0 bg-slate-50 dark:bg-[#020617]" />

      {/* 2. ORBES DE LUZ (Efecto Mesh Gradient) */}

      {/* Orbe 1: Tu color Primary (#26acd0) - Arriba Izquierda */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-[#26acd0] blur-[100px] md:blur-[120px] opacity-30 dark:opacity-20 mix-blend-multiply dark:mix-blend-screen"
      />

      {/* Orbe 2: Un Azul más profundo o Violeta para contraste - Abajo Derecha */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.4, 0.3],
          x: [0, -30, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 12, // Duración diferente para que no se sincronicen perfecto (se ve más natural)
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute -bottom-[10%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-blue-400 dark:bg-indigo-900 blur-[100px] md:blur-[140px] opacity-30 dark:opacity-20 mix-blend-multiply dark:mix-blend-screen"
      />

      {/* Orbe 3: Un toque central sutil */}
      <motion.div
        animate={{
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[30%] left-[30%] w-[30vw] h-[30vw] rounded-full bg-cyan-300 dark:bg-[#26acd0] blur-[150px] opacity-20 dark:opacity-10"
      />

      {/* 3. CAPA DE RUIDO (NOISE TEXTURE) */}
      {/* Esto es clave para que no se vea como un degradado CSS barato */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />

      {/* 4. VIGNETTE (Opcional: Oscurece las esquinas para centrar la atención) */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/50 via-transparent to-white/50 dark:from-slate-950/80 dark:via-transparent dark:to-slate-950/80 pointer-events-none" />
    </div>
  );
}
