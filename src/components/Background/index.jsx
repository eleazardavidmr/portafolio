import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-50 h-full w-full overflow-hidden bg-white dark:bg-[#020617]">
      {/* Mesh Gradient Base - Less blurs, more performant */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40 dark:opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[70vw] h-[70vw] rounded-full bg-primary/30 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-blue-500/20 blur-[100px]" />
        <div className="absolute top-[20%] right-[10%] w-[40vw] h-[40vw] rounded-full bg-cyan-400/10 blur-[80px]" />
      </div>

      {/* Static Noise Overlay - Subtle grain for premium feel */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Vignette effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/30 dark:to-slate-900/20 pointer-events-none" />
    </div>
  );
}
