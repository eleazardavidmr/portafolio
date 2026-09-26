// Resortes críticamente amortiguados (sin rebote): llegan suave y se pueden
// interrumpir en cualquier momento. El rebote se reserva para gestos con inercia.
export const spring = { type: "spring", bounce: 0, duration: 0.6 };
export const springFast = { type: "spring", bounce: 0, duration: 0.35 };

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: spring },
};

export const stagger = (step = 0.08) => ({
  hidden: {},
  visible: { transition: { staggerChildren: step } },
});

// Props comunes para revelar una sección al entrar en pantalla
export const revealOnView = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, margin: "-80px" },
};
