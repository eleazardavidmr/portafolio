export const WHATSAPP_NUMBER = "573155614748";
export const EMAIL = "eleazardavidmr@gmail.com";
export const LOCATION = "Cali, Colombia";

export const whatsappLink = (
  message = "Hola Eleazar, vi tu portafolio y quiero contarte sobre mi proyecto.",
) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const SOCIALS = [
  { label: "GitHub", href: "https://github.com/eleazardavidmr" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/eleazarmunoz-4101542a2",
  },
  { label: "Instagram", href: "https://www.instagram.com/edmr.dev" },
];
