/** Options for contact form & ?servicio=… links from service cards */
export const CONTACT_SERVICE_SELECT_OPTIONS = [
  { value: "landing", label: "Landing Page" },
  { value: "sitio-profesional", label: "Sitio Web Profesional" },
  { value: "citas", label: "Sitio Web con Sistema de Citas" },
  { value: "web-automatizacion", label: "Desarrollo Web con Automatización Integrada" },
];

export const CONTACT_SERVICE_SLUG_TO_LABEL = Object.fromEntries(
  CONTACT_SERVICE_SELECT_OPTIONS.map((o) => [o.value, o.label]),
);