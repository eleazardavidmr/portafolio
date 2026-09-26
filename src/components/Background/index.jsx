// Fondo sereno: el color del lienzo fijo y un halo sutil del acento que vive
// solo en la parte superior de la página (se va con el scroll). Nada se mueve.
export default function Background() {
  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-50 bg-canvas"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-40 h-[80vh] overflow-hidden"
      >
        <div className="absolute left-1/2 top-[-45vh] h-[80vh] w-[110vw] -translate-x-1/2 rounded-[100%] bg-primary/[0.06] blur-[120px] dark:bg-primary/[0.1]" />
      </div>
    </>
  );
}
