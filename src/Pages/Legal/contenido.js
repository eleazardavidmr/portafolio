import { EMAIL, LOCATION } from "@constants/contact";

// Nombre de la app registrada en TikTok for Developers
export const APP_NAME = "EDMR Studio";
const ACTUALIZADO = "27 de octubre de 2026";

// Cada sección: título, párrafos y, si hace falta, una lista
export const TERMINOS = {
  url: "/terminos",
  titulo: "Términos del servicio",
  descripcion: `Términos de uso de ${APP_NAME}, la herramienta de Eleazar Muñoz para analizar y crear contenido en TikTok.`,
  actualizado: ACTUALIZADO,
  intro: `Estos términos regulan el uso de ${APP_NAME}, una herramienta desarrollada y operada por Eleazar Muñoz (${LOCATION}) para analizar el rendimiento de cuentas de TikTok y producir videos para ellas. Al conectar una cuenta de TikTok a ${APP_NAME}, aceptas estos términos.`,
  secciones: [
    {
      titulo: "1. Qué hace el servicio",
      parrafos: [
        `${APP_NAME} se conecta a una cuenta de TikTok mediante las APIs oficiales de TikTok (Login Kit, Display API y Content Posting API) para:`,
      ],
      lista: [
        "Leer la información básica del perfil y las estadísticas públicas de sus videos (vistas, me gusta, comentarios y compartidos).",
        "Analizar qué videos funcionan mejor para proponer y producir videos nuevos.",
        "Subir los videos producidos a la bandeja de borradores de la cuenta. Nada se publica automáticamente: el titular de la cuenta revisa, edita y decide si publica cada video desde la app de TikTok.",
      ],
    },
    {
      titulo: "2. Quién puede usarlo",
      parrafos: [
        `${APP_NAME} es una herramienta de uso interno. Solo pueden conectarse cuentas de TikTok de Eleazar Muñoz o de clientes que lo hayan autorizado expresamente. Debes ser el titular de la cuenta que conectas, o tener permiso de su titular, y cumplir los requisitos de edad de TikTok.`,
      ],
    },
    {
      titulo: "3. Tus responsabilidades",
      parrafos: [
        "Al usar el servicio te comprometes a cumplir los Términos de servicio y las Normas de la comunidad de TikTok. Eres responsable del contenido que decidas publicar desde tu cuenta, incluidos los sonidos, textos y hashtags que agregues antes de publicarlo.",
      ],
    },
    {
      titulo: "4. Contenido generado",
      parrafos: [
        `Los videos que produce ${APP_NAME} se crean con animaciones propias y voces sintéticas, y pueden apoyarse en herramientas de inteligencia artificial para el guion y el análisis. Aunque se revisan los datos que se presentan, debes verificar cada video antes de publicarlo. La propiedad de los videos producidos para tu cuenta es tuya.`,
      ],
    },
    {
      titulo: "5. Relación con TikTok",
      parrafos: [
        `${APP_NAME} no está afiliado, patrocinado ni respaldado por TikTok ni por ByteDance. TikTok es una marca de sus respectivos dueños. El funcionamiento del servicio depende de la disponibilidad de las APIs de TikTok, que pueden cambiar o limitarse sin previo aviso.`,
      ],
    },
    {
      titulo: "6. Desconexión",
      parrafos: [
        `Puedes dejar de usar el servicio cuando quieras: revoca el acceso desde la app de TikTok (Configuración y privacidad → Seguridad → Permisos de apps) o escríbenos a ${EMAIL}. También podemos suspender el acceso de una cuenta si se usa de forma contraria a estos términos.`,
      ],
    },
    {
      titulo: "7. Garantías y responsabilidad",
      parrafos: [
        "El servicio se ofrece «tal cual». No garantizamos un número de vistas, seguidores ni resultados concretos en TikTok. En la medida en que la ley lo permita, no somos responsables de daños indirectos derivados del uso del servicio o de decisiones tomadas por TikTok sobre tu cuenta o tu contenido.",
      ],
    },
    {
      titulo: "8. Cambios y ley aplicable",
      parrafos: [
        "Podemos actualizar estos términos; la fecha de la última actualización aparece arriba. Estos términos se rigen por las leyes de la República de Colombia.",
      ],
    },
    {
      titulo: "9. Contacto",
      parrafos: [`Para cualquier pregunta sobre estos términos, escribe a ${EMAIL}.`],
    },
  ],
};

export const PRIVACIDAD = {
  url: "/privacidad",
  titulo: "Política de privacidad",
  descripcion: `Qué datos de TikTok usa ${APP_NAME}, para qué y cómo puedes eliminarlos.`,
  actualizado: ACTUALIZADO,
  intro: `Esta política explica qué datos trata ${APP_NAME}, la herramienta de Eleazar Muñoz (${LOCATION}) para analizar y crear contenido en TikTok, y cómo puedes controlarlos. El responsable del tratamiento es Eleazar Muñoz, contacto: ${EMAIL}.`,
  secciones: [
    {
      titulo: "1. Datos que recibimos de TikTok",
      parrafos: [
        "Solo recibimos los datos que autorizas en la pantalla de permisos de TikTok:",
      ],
      lista: [
        "Perfil básico: identificador de la app (open_id), nombre visible y nombre de usuario (permisos user.info.basic y user.info.profile).",
        "Estadísticas del perfil: número de seguidores, me gusta y videos (permiso user.info.stats).",
        "Tus videos públicos: título o descripción, fecha, duración, portada, enlace y sus cifras de vistas, me gusta, comentarios y compartidos (permiso video.list).",
        "Permiso para subir videos a tus borradores (video.upload). No leemos tus borradores ni publicamos nada por ti.",
      ],
    },
    {
      titulo: "2. Datos que no recibimos",
      parrafos: [
        "No tenemos acceso a tu contraseña, correo, número de teléfono, mensajes directos, lista de seguidores, datos de pago ni a los datos personales de las personas que ven o comentan tus videos.",
      ],
    },
    {
      titulo: "3. Para qué los usamos",
      parrafos: [
        "Usamos estos datos únicamente para medir qué videos de tu cuenta funcionan mejor, proponer y producir videos nuevos en esa línea, y subirlos a tus borradores. No los usamos para publicidad, no creamos perfiles de terceros y no vendemos ni alquilamos ningún dato.",
      ],
    },
    {
      titulo: "4. Dónde se guardan",
      parrafos: [
        "Los tokens de acceso y las estadísticas descargadas se guardan en el equipo de trabajo de Eleazar Muñoz, protegido con contraseña, y no se suben a repositorios ni a servidores públicos. Las portadas de los videos se guardan junto con las estadísticas porque los enlaces de TikTok caducan.",
      ],
    },
    {
      titulo: "5. Con quién se comparten",
      parrafos: ["Solo con los proveedores necesarios para prestar el servicio:"],
      lista: [
        "TikTok, para leer tus datos y subir los videos a tus borradores.",
        "Anthropic (Claude), el asistente de inteligencia artificial que analiza las estadísticas de tus videos para encontrar patrones y proponer ideas. Recibe las cifras y los textos de tus videos, no tus credenciales.",
        "Microsoft (Edge Text-to-Speech), que genera la voz en off a partir del guion. Solo recibe el texto del guion, ningún dato de tu cuenta.",
      ],
    },
    {
      titulo: "6. Cuánto tiempo los conservamos",
      parrafos: [
        "Conservamos los datos mientras tu cuenta esté conectada. El acceso de TikTok vence solo a los 365 días si no se renueva. Si desconectas la cuenta o lo pides, eliminamos los tokens y las estadísticas guardadas en un plazo máximo de 30 días.",
      ],
    },
    {
      titulo: "7. Tus derechos",
      parrafos: [
        `De acuerdo con la Ley 1581 de 2012 de Colombia, puedes conocer, actualizar, rectificar y pedir la eliminación de tus datos, y revocar la autorización en cualquier momento. Para revocar el acceso, entra a la app de TikTok → Configuración y privacidad → Seguridad → Permisos de apps y quita ${APP_NAME}. Para cualquier otra solicitud, escribe a ${EMAIL}; respondemos en un máximo de 15 días hábiles.`,
      ],
    },
    {
      titulo: "8. Menores de edad",
      parrafos: [
        "El servicio no está dirigido a menores de 18 años y no tratamos a sabiendas datos de menores.",
      ],
    },
    {
      titulo: "9. Cambios",
      parrafos: [
        "Si cambiamos esta política, actualizaremos la fecha de arriba. Si el cambio afecta qué datos usamos, te lo informaremos antes de aplicarlo.",
      ],
    },
  ],
};
