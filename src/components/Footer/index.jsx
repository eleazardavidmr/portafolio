import { Link } from "react-router-dom";
import { EMAIL, LOCATION, SOCIALS } from "@constants/contact";

const NAV = [
  { label: "Proyectos", to: "/proyectos" },
  { label: "Servicios", to: "/servicios" },
  { label: "Certificados", to: "/certificados" },
  { label: "Contacto", to: "/contacto" },
];

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-separator/10">
      <div className="mx-auto grid max-w-content grid-cols-2 gap-10 px-6 py-14 md:grid-cols-[1.5fr_1fr_1fr]">
        <div className="col-span-2 flex flex-col gap-4 md:col-span-1">
          <Link to="/" className="flex w-fit items-center gap-3">
            <img
              src="/logo.webp"
              alt=""
              width={36}
              height={36}
              className="h-9 w-9 rounded-full invert dark:invert-0"
            />
            <span className="font-semibold tracking-tight">Eleazar Muñoz</span>
          </Link>
          <p className="max-w-xs text-sm leading-relaxed text-label-2">
            Diseño y desarrollo web desde {LOCATION}.
          </p>
          <a
            href={`mailto:${EMAIL}`}
            className="w-fit text-sm font-medium text-primary hover:underline underline-offset-4"
          >
            {EMAIL}
          </a>
        </div>

        <nav aria-label="Pie de página">
          <p className="mb-4 text-xs font-semibold text-label">Explorar</p>
          <ul className="flex list-none flex-col gap-3 p-0">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-sm text-label-2 transition-colors hover:text-label"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="mb-4 text-xs font-semibold text-label">Redes</p>
          <ul className="flex list-none flex-col gap-3 p-0">
            {SOCIALS.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-label-2 transition-colors hover:text-label"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-content border-t border-separator/10 px-6 py-6 text-xs text-label-3">
        © {new Date().getFullYear()} Eleazar Muñoz. Todos los derechos
        reservados.
      </div>
    </footer>
  );
}
