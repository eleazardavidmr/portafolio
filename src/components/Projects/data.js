import jorgevalbuena from "/img/projects/immunotec/immunotec.jpg";
import dydcrochet from "/img/projects/dydcrochet/dydcrochet.webp";
import stizzo_planet from "/img/projects/stizzoplanet/stizzo-planet.webp";
import atelierdeldulce from "/img/projects/atelierdeldulce/atelierdeldulce.webp";
import mineroz from "/img/projects/mineroz/mineroz.jpg";
import retroStack from "/img/projects/retro-stack/retro-stack.webp";
import mineTableau from "/img/projects/mine-tableau/mine-tableau.png";
import streak from "/img/projects/streak/streak.jpg";
import excon from "/img/projects/excon/excon.jpg";

// Los proyectos con `hidden: true` se conservan aquí pero no se muestran en el sitio
const ALL_PROJECTS = [
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
    id: 3,
    name: "Dyd Crochet",
    slug: "dyd-crochet",
    url: "https://dydcrochet.surge.sh",
    urlName: "dydcrochet.surge.sh",
    img: dydcrochet,
    context:
      "Sitio para tienda de artesanías — necesitaban un catálogo digital vistoso para vender sus productos hechos a mano.",
    description:
      "Una plataforma de comercio electrónico para un negocio de crochet. Presenta vitrinas de productos, funcionalidad de carrito de compras y una hermosa galería de artículos de crochet hechos a mano.",
    longDescription:
      "Este proyecto combina prácticas modernas de comercio electrónico con las necesidades de negocios artesanales. Construido con diseño responsivo para mostrar la belleza de productos de crochet elaborados a mano en todos los dispositivos.",
    technologies: ["React", "Tailwind CSS", "JavaScript", "E-commerce"],
    screenshots: [
      "/img/projects/dydcrochet/screenshot1.jpg", // Reemplaza con captura de pantalla real
      "/img/projects/dydcrochet/screenshot2.jpg", // Reemplaza con captura de pantalla real
    ],
    branch: "main",
    status: "DESPLEGADO",
    client: "Tienda Dyd Crochet",
    hidden: true,
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
