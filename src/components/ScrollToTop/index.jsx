import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

// Al cambiar de ruta, empezar arriba (o en el ancla si la URL trae #)
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
      return;
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash]);

  return null;
}
