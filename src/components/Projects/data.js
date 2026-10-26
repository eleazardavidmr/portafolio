import jorgevalbuena from "/img/projects/immunotec/immunotec.jpg";
import dydcrochet from "/img/projects/dydcrochet/dydcrochet.webp";
import stizzo_planet from "/img/projects/stizzoplanet/stizzo-planet.webp";
import atelierdeldulce from "/img/projects/atelierdeldulce/atelierdeldulce.webp";
import mineroz from "/img/projects/mineroz/mineroz.jpg";
import retroStack from "/img/projects/retro-stack/retro-stack.webp";
import mineTableau from "/img/projects/mine-tableau/mine-tableau.png";
import streak from "/img/projects/streak/streak.jpg";
import excon from "/img/projects/excon/excon.jpg";
import tallerNucleo from "/img/projects/taller-nucleo/taller-nucleo.webp";
import brisaNocturna from "/img/projects/brisa-nocturna/brisa-nocturna.webp";
import filoRojo from "/img/projects/filo-rojo/filo-rojo.webp";
import tallerNogal from "/img/projects/taller-nogal/taller-nogal.webp";
import filoNorte from "/img/projects/filo-norte/filo-norte.webp";
import migaBrasa from "/img/projects/miga-brasa/miga-brasa.webp";
import rumboEsmeralda from "/img/projects/rumbo-esmeralda/rumbo-esmeralda.webp";

// Los proyectos con `hidden: true` se conservan aquí pero no se muestran en el sitio
const ALL_PROJECTS = [
  {
    id: 17,
    name: "Rumbo Esmeralda",
    slug: "rumbo-esmeralda",
    url: "https://rumbo-esmeralda.demo.edmr.dev",
    urlName: "rumbo-esmeralda.demo.edmr.dev",
    img: rumboEsmeralda,
    context:
      "Concepto para el sector de agencias de viajes: que el viajero explore destinos y reciba un itinerario a su medida sin esperar una cotización manual.",
    description:
      "Sitio de una agencia de viajes boutique con catálogo de destinos, planificador de itinerarios con IA y una asesora virtual que responde dudas sobre planes y precios. Está hecho con React, Vite y Tailwind CSS v4, con animaciones de Motion y funciones serverless en Vercel que consultan a Gemini.",
    longDescription:
      "El objetivo era reemplazar el ida y vuelta de mensajes por una primera propuesta inmediata: el viajero elige un destino, responde unas preguntas y recibe un itinerario por días con recomendaciones y un presupuesto de referencia. Un asistente conversacional resuelve preguntas frecuentes y lleva a WhatsApp cuando la persona quiere cerrar el plan. La interfaz usa transiciones con resorte, menú adaptable y un acordeón de preguntas que respeta prefers-reduced-motion. Las rutas del servidor viven en funciones serverless que usan Gemini con salida estructurada, y sin clave de API responden en modo demostración con un itinerario de ejemplo. La marca, los precios, los testimonios y los datos de contacto son ficticios, y las fotos son de stock o generadas.",
    technologies: ["React", "Vite", "Tailwind CSS", "Motion", "Gemini", "Vercel"],
    screenshots: [
      "/img/projects/rumbo-esmeralda/screenshot1.webp",
      "/img/projects/rumbo-esmeralda/screenshot2.webp",
    ],
    branch: "main",
    status: "DESPLEGADO",
    client: "Concepto · Agencia de viajes",
  },
  {
    id: 16,
    name: "Miga & Brasa",
    slug: "miga-brasa",
    url: "https://miga-brasa.demo.edmr.dev",
    urlName: "miga-brasa.demo.edmr.dev",
    img: migaBrasa,
    context:
      "Concepto para el sector de restaurantes: una carta digital donde el cliente arma su pedido, elige cuándo recogerlo y sigue su estado.",
    description:
      "Sitio para una hamburguesería con panadería propia, con carta por categorías, un carrito en hoja inferior que se arrastra con el dedo y una sección de pedidos con el estado de cada uno. Está hecho con Astro, React y Tailwind CSS v4, con GSAP para las secuencias de scroll y Motion para la interfaz.",
    longDescription:
      "El objetivo era pasar de ver la carta a tener un pedido confirmado sin llamar ni escribir. El cliente agrega productos desde cada tarjeta, elige recoger o domicilio y una hora dentro del horario de cocina, y al confirmar llega a la página de su pedido con un código para caja. La hoja del carrito sigue el dedo 1:1, opone resistencia en los bordes, proyecta la velocidad al soltar para elegir dónde se detiene y se puede interrumpir a mitad de una animación. En Tus pedidos aparecen los pedidos en curso y los anteriores; cada uno tiene su página con el seguimiento paso a paso (horas reales y estimadas), la opción de cancelar mientras no esté listo y la de volver a pedir lo mismo, que pasa los productos al carrito. Los pedidos viven detrás de una interfaz de repositorio: hoy la implementa localStorage, simulando el avance con el reloj, y conectar un backend es reemplazar un solo archivo. La portada usa tipografía de cartel a gran escala, y GSAP con ScrollTrigger y SplitText anima titulares y piezas al hacer scroll, dentro de matchMedia para respetar prefers-reduced-motion. Las fuentes son autoalojadas y en dispositivos Apple se usa la del sistema; la navegación entre páginas usa View Transitions. La marca, la dirección, los precios y los textos son ficticios, y las imágenes son ilustraciones de marcador.",
    technologies: ["Astro", "React", "TypeScript", "Tailwind CSS", "Motion", "GSAP", "Vercel"],
    screenshots: [
      "/img/projects/miga-brasa/screenshot1.webp",
      "/img/projects/miga-brasa/screenshot2.webp",
    ],
    branch: "main",
    status: "DESPLEGADO",
    client: "Concepto · Restaurante",
  },
  {
    id: 15,
    name: "Filo Norte Barber Club",
    slug: "filo-norte",
    url: "https://filo-norte.demo.edmr.dev",
    urlName: "filo-norte.demo.edmr.dev",
    img: filoNorte,
    context:
      "Concepto para el sector de barberías: una página oscura y tranquila donde la reserva se resuelve con un toque a WhatsApp.",
    description:
      "Sitio de una página para una barbería de autor, con servicios presentados como experiencias, una galería que se desliza con el dedo y un botón flotante de WhatsApp para reservar. Está hecho con Astro, React y Tailwind CSS v4, y solo hidrata las piezas que se tocan: el encabezado, la galería y el botón.",
    longDescription:
      "La idea era que reservar no pidiera más de un toque. Cada llamada a la acción abre WhatsApp con el mensaje ya escrito, y el botón flotante aparece cuando el usuario pasó la portada. La galería sigue el dedo uno a uno al arrastrar y, al soltar, proyecta la velocidad para elegir a qué foto llega, con un pequeño rebote solo ahí; el resto de las transiciones usan resortes sin rebote. El encabezado se vuelve translúcido con desenfoque al hacer scroll y el menú móvil se abre con un resorte. Los botones responden al presionar, sin esperar a que se suelte. Respeta prefers-reduced-motion cambiando resortes por fundidos simples. La marca, los datos de contacto, la dirección y el equipo son ficticios y las imágenes son marcadores de posición generados en CSS.",
    technologies: ["Astro", "React", "TypeScript", "Tailwind CSS", "Motion", "Vercel"],
    screenshots: [
      "/img/projects/filo-norte/screenshot1.webp",
      "/img/projects/filo-norte/screenshot2.webp",
    ],
    branch: "main",
    status: "DESPLEGADO",
    client: "Concepto · Barbería",
  },
  {
    id: 14,
    name: "Taller Nogal",
    slug: "taller-nogal",
    url: "https://taller-nogal.demo.edmr.dev",
    urlName: "taller-nogal.demo.edmr.dev",
    img: tallerNogal,
    context:
      "Concepto para el sector de ebanistería: que el cliente pida su cotización completa desde la web, con medidas y fotos del espacio.",
    description:
      "Sitio de una página para una ebanistería de muebles a medida, con portafolio filtrable y un formulario de cotización que recoge el tipo de mueble, las medidas, fotos del lugar y el medio de contacto preferido. Está hecho con Astro y Tailwind CSS v4, con las imágenes optimizadas a AVIF y WebP en el build.",
    longDescription:
      "El objetivo era sacar la cotización de WhatsApp: el cliente elige el mueble, escribe las medidas, adjunta hasta cinco fotos de su espacio y deja sus datos, todo en la misma página, y al enviar ve un número de solicitud y un resumen. Las tarjetas de servicios llevan al formulario con el mueble ya elegido. La validación marca solo el campo con error y se limpia en cuanto se corrige, y el correo pasa a ser obligatorio únicamente si se elige como medio de contacto. El portafolio arma sus filtros a partir de las fotos que existen y abre un visor que responde al deslizamiento con el dedo. Otras piezas: una frase que se ilumina palabra por palabra con el scroll, tarjetas que se apilan al bajar, CSS en línea para no bloquear el primer pintado en celular y un script que genera favicon e imagen Open Graph a partir del logo. Respeta prefers-reduced-motion y prefers-reduced-transparency. La marca, los datos de contacto y la dirección son ficticios, las fotos son de stock y el formulario funciona en modo demostración, sin enviar datos.",
    technologies: ["Astro", "Tailwind CSS", "TypeScript", "Vercel"],
    screenshots: [
      "/img/projects/taller-nogal/screenshot1.webp",
      "/img/projects/taller-nogal/screenshot2.webp",
    ],
    branch: "main",
    status: "DESPLEGADO",
    client: "Concepto · Ebanistería",
  },
  {
    id: 13,
    name: "Filo Rojo",
    slug: "filo-rojo",
    url: "https://filo-rojo.demo.edmr.dev",
    urlName: "filo-rojo.demo.edmr.dev",
    img: filoRojo,
    context:
      "Concepto para el sector de barberías: mostrar los servicios y llevar al cliente a reservar por WhatsApp desde el celular.",
    description:
      "Sitio de una página para una barbería, con servicios, galería y una hoja de reservas que arma el mensaje de WhatsApp con el servicio y el día elegidos. Está hecho con React 19, Tailwind CSS v4 y Motion, sobre un sistema de diseño en el que todo el color sale de seis variables.",
    longDescription:
      "El objetivo era que quien llega desde el celular pase de ver los servicios a pedir su turno sin salir de la página. Cualquier botón de reserva abre una hoja inferior con los servicios y los próximos días, y al final abre WhatsApp con el mensaje ya redactado. La hoja y el visor de fotos responden al dedo: siguen el arrastre 1:1, deciden al soltar según la velocidad proyectada, oponen resistencia en los bordes y se pueden interrumpir a mitad de una animación, todo con resortes de Motion. La foto abierta vuelve a su miniatura aunque se haya pasado a otra, y la vitrina queda fija mientras tres fotos se abren en abanico con el scroll. El color sale de seis variables en el @theme de Tailwind v4 (tres tonos, el núcleo del tubo LED, el color de los halos y su intensidad), así que cambiar de marca es cambiar esas líneas. Los datos del negocio viven en un solo archivo y lo que falta (horario, precios, barberos, fotos) se deja vacío y la interfaz lo oculta. Respeta prefers-reduced-motion, prefers-reduced-transparency y prefers-contrast. La marca, los datos de contacto y la dirección son ficticios, y las fotos son marcadores.",
    technologies: ["React", "Tailwind CSS", "Motion", "Vite", "Vercel"],
    screenshots: [
      "/img/projects/filo-rojo/screenshot1.webp",
      "/img/projects/filo-rojo/screenshot2.webp",
    ],
    branch: "main",
    status: "DESPLEGADO",
    client: "Concepto · Barbería",
  },
  {
    id: 12,
    name: "Brisa Nocturna",
    slug: "brisa-nocturna",
    url: "https://brisa-nocturna.demo.edmr.dev",
    urlName: "brisa-nocturna.demo.edmr.dev",
    img: brisaNocturna,
    context:
      "Concepto para el sector de bienestar y sueño: una tienda de un solo producto con checkout propio para pagos colombianos.",
    description:
      "Tienda en línea para una marca de cinta bucal para dormir, con home, página de producto con selector de packs y una hoja de compra propia. El pago va por PayU: tarjeta en su WebCheckout y PSE, Nequi, Efecty y Bre-B QR por API directa. Está hecha con Astro, Tailwind CSS v4 y funciones de Supabase.",
    longDescription:
      "El objetivo era vender un solo producto con la menor fricción posible para un comprador colombiano. Cada botón de compra abre la misma hoja de pago: en móvil es una hoja desde abajo y en desktop un modal de dos columnas que no necesita scroll. La tarjeta se cobra en el WebCheckout de PayU, así el número nunca pasa por el sitio. PSE, Nequi, Efecty y Bre-B QR usan la API directa de PayU desde Edge Functions de Supabase, y la hoja muestra cada estado: número de pago de Efecty, QR con cuenta regresiva y espera de la aprobación en Nequi. El monto nunca lo pone el navegador: las funciones leen el precio de la base de datos, firman la transacción y un webhook confirma el pago contra la firma de PayU. El diseño se armó como sistema de tokens en Tailwind v4 (color, tipografía fluida, radios, materiales translúcidos y resortes convertidos a linear()), con imágenes responsivas en WebP generadas con sharp. Respeta prefers-reduced-motion, prefers-reduced-transparency y prefers-contrast. La marca, los textos, las cifras y las personas del sitio son ficticios; los pagos corren en el sandbox de PayU.",
    technologies: ["Astro", "Tailwind CSS", "TypeScript", "Supabase", "PayU", "Vercel"],
    screenshots: [
      "/img/projects/brisa-nocturna/screenshot1.webp",
      "/img/projects/brisa-nocturna/screenshot2.webp",
    ],
    branch: "main",
    status: "DESPLEGADO",
    client: "Concepto · Bienestar y sueño",
  },
  {
    id: 11,
    name: "Taller Núcleo",
    slug: "taller-nucleo",
    url: "https://taller-nucleo.demo.edmr.dev",
    urlName: "taller-nucleo.demo.edmr.dev",
    img: tallerNucleo,
    context:
      "Concepto para el sector de servicio técnico de computadores: llevar a quien tiene un equipo con fallas a una cotización por WhatsApp.",
    description:
      "Sitio de una página para un taller de reparación y mantenimiento de computadores. Un diagnóstico guiado convierte los síntomas que marca el visitante en servicios recomendados y en un mensaje de WhatsApp listo para enviar. Está hecho en HTML, CSS y JavaScript sin dependencias.",
    longDescription:
      "La mayoría de clientes de un servicio técnico no sabe describir la falla de su equipo, así que el sitio gira alrededor de un diagnóstico guiado: eliges el tipo de equipo y los síntomas, y un mapa de síntomas a servicios arma la recomendación y el enlace de WhatsApp con el mensaje ya escrito. Todo vive en un único index.html, sin build ni librerías. Las animaciones (la tarjeta del hero que se inclina con el puntero, el control segmentado, el botón flotante y la entrada de las recomendaciones) usan un resorte propio con parámetros de amortiguación y respuesta que parte del valor actual y conserva la velocidad, así que cada movimiento se puede interrumpir. El estado de abierto o cerrado se calcula con la hora de Colombia mediante Intl.DateTimeFormat. Respeta prefers-reduced-motion, prefers-reduced-transparency y prefers-contrast. Las imágenes van en WebP y la ubicación usa un mapa ilustrativo en SVG en lugar de un iframe, para no cargar scripts de terceros. La marca, los datos de contacto y las cifras del sitio son ficticios.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Vercel"],
    screenshots: [
      "/img/projects/taller-nucleo/screenshot1.webp",
      "/img/projects/taller-nucleo/screenshot2.webp",
    ],
    branch: "main",
    status: "DESPLEGADO",
    client: "Concepto · Servicio técnico",
  },
  {
    id: 10,
    name: "DydCrochet",
    slug: "dyd-crochet",
    url: "https://dydcrochet.edmr.dev",
    urlName: "dydcrochet.edmr.dev",
    img: dydcrochet,
    context:
      "Claudia teje amigurumis a mano desde 2015 y los vendía solo por redes sociales. Necesitaba un catálogo propio, cálido y fácil de compartir, donde la gente pudiera ver cada pieza y pedirla sin fricción.",
    description:
      "Sitio y catálogo para DydCrochet, un emprendimiento de amigurumis tejidos a mano. Muestra cada personaje en una ficha detallada y lleva al visitante directo a pedirlo por formulario o Instagram.",
    longDescription:
      "Es un sitio estático hecho con Astro y TypeScript, sin frameworks de UI, con un sistema de diseño propio inspirado en las interfaces fluidas de Apple: tipografía del sistema con tracking según el tamaño, materiales translúcidos y modo claro y oscuro con design tokens. Las animaciones no usan duraciones fijas: escribí un resorte físico con los parámetros damping y response que siempre parte del valor actual y conserva la velocidad, así que cualquier transición se puede interrumpir o invertir a mitad de camino. La ficha de cada amigurumi es un sheet que se arrastra con el dedo, con inercia proyectada como el scroll de iOS y resistencia tipo rubber-band al pasar los límites, y todo respeta prefers-reduced-motion. El catálogo vive en un archivo de datos tipado, se filtra por categoría con un control segmentado y Astro genera imágenes WebP responsivas en el build. Los enlaces son compartibles: /products?p=moana abre directamente la ficha de un amigurumi y /contact?producto=Moana precarga el formulario de pedido, que se envía con FormSubmit. La navegación entre páginas usa View Transitions.",
    technologies: [
      "Astro",
      "TypeScript",
      "CSS",
      "View Transitions",
      "FormSubmit",
      "Responsive Design",
    ],
    screenshots: [
      "/img/projects/dydcrochet/screenshot1.jpg",
      "/img/projects/dydcrochet/screenshot2.jpg",
    ],
    branch: "main",
    status: "DESPLEGADO",
    client: "DydCrochet",
  },
  {
    id: 9,
    name: "ex-con",
    slug: "excon",
    url: "https://excon.edmr.dev",
    urlName: "excon.edmr.dev",
    img: excon,
    context:
      "Nació para tener una forma sencilla y privada de registrar ingresos y gastos personales y saber de verdad a dónde se va el dinero cada mes.",
    description:
      "App web instalable (PWA) para controlar tus finanzas personales: registras ingresos y gastos por categoría y ves tu balance del mes de un vistazo.",
    longDescription:
      "excon es una SPA hecha con React 19 y Vite. Usa Supabase para la autenticación (registro, inicio de sesión, recuperación de contraseña y edición del perfil) y como base de datos en Postgres. La privacidad se resuelve en la base de datos: la tabla transactions tiene Row Level Security, así que cada usuario solo puede leer y modificar sus propios movimientos, y además tiene un índice por (user_id, date) para que las consultas sigan siendo rápidas. En el cliente, el estado está repartido en contextos de React (auth, transacciones, filtros y tema). Las rutas públicas y protegidas se manejan con React Router, que redirige según haya o no sesión. Las altas, ediciones y borrados se reflejan en la UI apenas Supabase los confirma, sin volver a cargar toda la lista. La interfaz está hecha con Tailwind CSS v4 usando design tokens propios, tiene modo claro y oscuro, animaciones con Framer Motion, un selector de fecha propio y montos en formato COP compacto. Está pensada primero para móvil y se puede instalar como PWA con vite-plugin-pwa, con un service worker que se actualiza solo. Está desplegada en Vercel con reescrituras al index.html para que funcione el enrutado del lado del cliente.",
    technologies: [
      "React 19",
      "Vite",
      "Tailwind CSS v4",
      "Supabase",
      "React Router 7",
      "Framer Motion",
      "Tabler Icons",
      "PWA",
      "Vercel",
    ],
    screenshots: [
      "/img/projects/excon/screenshot1.jpg",
      "/img/projects/excon/screenshot2.jpg",
    ],
    branch: "main",
    status: "DESPLEGADO",
    client: "Proyecto Personal",
  },
  {
    id: 8,
    name: "Streak",
    slug: "streak",
    url: "https://streak.edmr.dev",
    urlName: "streak.edmr.dev",
    img: streak,
    context:
      "PWA personal de seguimiento de hábitos y prevención de recaídas — necesitaba una herramienta privada, sin juicios, para sostener una racha de disciplina diaria.",
    description:
      "Streak es una PWA de seguimiento de hábitos centrada en la recuperación de una adicción sensible. Permite marcar el día como limpio, visualizar la racha en un calendario tipo GitHub, y responde a una recaída con un ritual de 'reset' guiado en vez de castigo. Cada usuario puede además crear sus propios hábitos personalizados junto al principal.",
    longDescription:
      "Construida con React, Tailwind CSS y Framer Motion sobre un backend de Supabase (Postgres + Auth + Row Level Security), instalable como PWA con nombre e ícono discretos. El reto técnico central fue migrar el modelo de datos de un hábito hardcodeado a una tabla unificada de hábitos (por defecto + personalizados), con un trigger de base de datos que impide borrar o archivar el hábito principal incluso saltándose la UI, migrando en el camino todo el historial de usuarios existentes sin pérdida de datos. También incluye un heatmap de actividad con los meses alineados exactamente a su semana real (corrigiendo un bug de posicionamiento), un flujo de onboarding completo para cuentas nuevas, navegación adaptativa (barra inferior en móvil, sidebar tipo macOS en escritorio), y pasó por una auditoría de seguridad adversarial completa que detectó y corrigió un riesgo real de fuga de datos entre usuarios en el service worker de la PWA en dispositivos compartidos.",
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "Supabase",
      "PWA",
      "Vercel",
    ],
    screenshots: [
      "/img/projects/streak/screenshot1.jpg",
      "/img/projects/streak/screenshot2.jpg",
    ],
    branch: "main",
    status: "DESPLEGADO",
    client: "Proyecto Personal",
  },
  {
    id: 7,
    name: "Mine Tableau",
    slug: "mine-tableau",
    url: "https://mine-tableau.edmr.dev",
    urlName: "mine-tableau.edmr.dev",
    img: mineTableau,
    context:
      "Dashboard de métricas de call center — construido para entender y recrear los cálculos de rendimiento que uso diariamente en mi trabajo.",
    description:
      "Un dashboard oscuro que replica las métricas de CSAT y decline rate de mi trabajo en call center, construido con HTML, CSS y JavaScript vanilla para entender a fondo la matemática detrás de los números.",
    longDescription:
      "MineTableau nació de mi experiencia diaria como agente de call center. Cada día reviso mis métricas en un dashboard corporativo — CSAT, decline rate, encuestas — pero nunca entendí del todo los cálculos detrás. Este proyecto es mi intento de reingeniería inversa de esas fórmulas, entendiéndolas a fondo y reconstruyéndolas desde cero. Calcula el target CSAT por agente, el STT (encuestas necesarias para neutralizar DSATs) y el decline rate, visualizando los resultados con badges de color que indican de un vistazo quién está en meta y quién no. Una barra de resumen en la parte superior agrega estadísticas del equipo como CSAT promedio y cantidad de agentes en meta.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    screenshots: ["/img/projects/mine-tableau/screenshot1.png"],
    branch: "main",
    status: "DESPLEGADO",
    client: "Proyecto Personal",
  },
  {
    id: 6,
    name: "Atelier del Dulce",
    slug: "atelier-del-dulce",
    url: "https://atelierdeldulce.online",
    urlName: "atelierdeldulce.online",
    img: atelierdeldulce,
    context:
      "Sitio para repostería artesanal — necesitaban mostrar su catálogo de forma elegante y captar clientes directamente.",
    description:
      "Un sitio web hermosamente diseñado para un negocio de pasteles y postres. Presenta galerías de productos, información de pedidos e una interfaz elegante que refleja el arte de la confitería.",
    longDescription:
      "Este proyecto combina diseño estético con experiencia de usuario funcional para mostrar creaciones de postres artesanales. El sitio incluye galerías, sección acerca de e información de contacto para una presencia en línea completa.",
    technologies: ["React", "Tailwind CSS", "JavaScript", "Responsive Design"],
    screenshots: [
      "/img/projects/atelierdeldulce/screenshot1.jpg", // Reemplaza con captura de pantalla real
      "/img/projects/atelierdeldulce/screenshot2.jpg", // Reemplaza con captura de pantalla real
    ],
    branch: "main",
    status: "DESPLEGADO",
    client: "Panadería Atelier del Dulce",
  },

  {
    id: 5,
    name: "Mineroz",
    slug: "mineroz",
    url: "https://mineroz.online",
    urlName: "mineroz.online",
    img: mineroz,
    context:
      "Sitio para proyecto culinario — necesitaban una presencia profesional en línea para compartir recetas y conectar con entusiastas de la comida.",
    description:
      "Una aplicación web moderna para un proyecto culinario. Cuenta con una interfaz elegante para mostrar recetas y contenido de alimentos con animaciones suaves y diseño responsivo.",
    longDescription:
      "Construida con React y Tailwind CSS, este proyecto demuestra principios limpios de diseño UI/UX y desarrollo web responsivo. La aplicación proporciona una experiencia de usuario activa para los entusiastas de la comida.",
    technologies: ["React", "Tailwind CSS", "Vercel", "JavaScript"],
    screenshots: [
      "/img/projects/mineroz/screenshot1.jpg", // Reemplaza con captura de pantalla real
      "/img/projects/mineroz/screenshot2.jpg", // Reemplaza con captura de pantalla real
    ],
    branch: "main",
    status: "DESPLEGADO",
    client: "Proyecto Culinario",
  },
  {
    id: 4,
    name: "Immunotec - Jorge Valbuena",
    slug: "immunotec-jorge-valbuena",
    url: "https://jorgevalbuena.surge.sh",
    urlName: "jorgevalbuena.surge.sh",
    img: jorgevalbuena,
    context:
      "Sitio para consultor independiente de salud — necesitaba credibilidad médica online y canalizar interesados.",
    description:
      "Un sitio web de cartera profesional para el Dr. Jorge Valbuena que muestra experiencia en inmunología e investigación médica. Presenta un diseño limpio y profesional con énfasis en credibilidad y experiencia.",
    longDescription:
      "Este proyecto demuestra principios profesionales de diseño web con enfoque en credibilidad médica. El sitio incluye secciones de investigación, publicaciones e información de contacto con un diseño elegante y minimalista.",
    technologies: ["React", "HTML5", "CSS3", "JavaScript"],
    screenshots: [
      "/img/projects/immunotec/screenshot1.jpg", // Reemplaza con captura de pantalla real
      "/img/projects/immunotec/screenshot2.jpg", // Reemplaza con captura de pantalla real
    ],
    branch: "main",
    status: "DESPLEGADO",
    client: "Dr. Jorge Valbuena",
  },
  {
    id: 2,
    name: "Stizzo Planet",
    slug: "stizzo-planet",
    url: "https://stizzoplanet.surge.sh",
    urlName: "stizzoplanet.surge.sh",
    img: stizzo_planet,
    context:
      "Sitio para marca de indumentaria — necesitaban una experiencia interactiva y moderna para destacar su identidad digital.",
    description:
      "Una experiencia web interactiva para la marca Stizzo. Presenta animaciones atractivas, vitrinas de productos y un enfoque de diseño moderno para la narración de marca.",
    longDescription:
      "Este proyecto muestra técnicas de animación avanzadas y elementos interactivos para crear una experiencia de marca inmersiva. El diseño enfatiza la creatividad e innovación en la presencia digital.",
    technologies: ["React", "JavaScript", "CSS3", "Animations"],
    screenshots: [
      "/img/projects/stizzoplanet/screenshot1.jpg", // Reemplaza con captura de pantalla real
      "/img/projects/stizzoplanet/screenshot2.jpg", // Reemplaza con captura de pantalla real
    ],
    branch: "main",
    status: "DESPLEGADO",
    client: "Marca Stizzo",
  },

  {
    id: 1,
    name: "Retro Stack",
    slug: "retro-stack",
    url: "https://retrostack.edmr.dev/",
    urlName: "retrostack.edmr.dev",
    img: retroStack,
    context:
      "IDE visual para desarrolladores — necesitaba una interfaz espacial para simplificar el flujo de trabajo de programación.",
    description:
      "Un IDE visual de alto rendimiento diseñado para manipulación de código de baja latencia. Construido durante un sprint de 48 horas, desafía los límites tradicionales de la edición basada en terminal al introducir una capa visual espacial sobre comandos de shell estándar.",
    longDescription:
      "El desafío principal fue gestionar la sincronización de estado en tiempo real entre el árbol de sintaxis abstracta y el gráfico visual del nodo sin introducir lag detectable. A través de algoritmos de diferencia personalizados, logramos tiempos de renderizado sub-5ms incluso en estructuras de archivos complejas. El resultado final es una herramienta utilizada por desarrolladores para visualizar arquitecturas de código.",
    technologies: ["React", "Tailwind CSS", "Vercel", "TypeScript"],
    screenshots: [
      "/img/projects/retro-stack/screenshot1.jpg", // Reemplaza con captura de pantalla real
      "/img/projects/retro-stack/screenshot2.jpg", // Reemplaza con captura de pantalla real
    ],
    branch: "main",
    status: "DESPLEGADO",
    client: "Proyecto Personal",
  },
];

export const PROJECTS = ALL_PROJECTS.filter((project) => !project.hidden);
