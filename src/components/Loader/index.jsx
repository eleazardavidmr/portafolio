import PropTypes from "prop-types";

// Indicador de actividad discreto, al estilo del sistema
export default function Loader({ fullScreen = false }) {
  const spinner = (
    <div
      role="status"
      aria-label="Cargando"
      className="h-7 w-7 animate-spin rounded-full border-2 border-label/15 border-t-label/60"
    />
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-[999] grid place-items-center bg-canvas">
        {spinner}
      </div>
    );
  }

  return <div className="grid w-full place-items-center py-16">{spinner}</div>;
}

Loader.propTypes = {
  fullScreen: PropTypes.bool,
};
