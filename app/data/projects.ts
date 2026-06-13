export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  period: string;
  duration: string;
  repository?: string;
  technologies: string[];
  outcomes: string[];
  results: {
    device: string;
    title: string;
    detail: string;
    kind: "desktop" | "tablet" | "mobile";
  }[];
};

export const projects: Project[] = [
  {
    slug: "vint",
    title: "VINT",
    category: "Startup web",
    summary: "Proyecto web tipo startup construido con HTML, CSS y PHP.",
    description:
      "Repositorio orientado a una propuesta startup llamada VINT, desarrollado con herramientas web base y PHP para estructurar una experiencia funcional.",
    period: "Proyecto academico",
    duration: "Desarrollo web con enfoque practico",
    repository: "https://github.com/BrayanCahuanaU/VINT",
    technologies: ["HTML", "CSS", "PHP", "Git", "GitHub"],
    outcomes: [
      "Construccion de paginas web con estructura HTML y estilos CSS.",
      "Uso de PHP para organizar logica de una aplicacion web inicial.",
      "Versionado publico del codigo en GitHub.",
    ],
    results: [
      {
        device: "Escritorio",
        title: "Presentacion amplia del producto",
        detail:
          "La interfaz permite mostrar secciones principales del proyecto con jerarquia clara para navegacion en pantalla grande.",
        kind: "desktop",
      },
      {
        device: "Tablet",
        title: "Lectura por modulos",
        detail:
          "El contenido se organiza en bloques faciles de recorrer desde dispositivos intermedios.",
        kind: "tablet",
      },
      {
        device: "Movil",
        title: "Flujo vertical",
        detail:
          "La experiencia prioriza contenido apilado y lectura rapida desde telefonos.",
        kind: "mobile",
      },
    ],
  },
  {
    slug: "fsi",
    title: "FSI",
    category: "Seguridad informatica",
    summary: "Repositorio de practicas y laboratorios de fundamentos de seguridad informatica.",
    description:
      "Coleccion de actividades, ejercicios y laboratorios de seguridad informatica con material web y documentacion academica.",
    period: "Proyecto academico",
    duration: "Practicas y laboratorios por entregas",
    repository: "https://github.com/BrayanCahuanaU/FSI",
    technologies: ["PHP", "HTML", "CSS", "Documentacion tecnica", "GitHub"],
    outcomes: [
      "Organizacion de ejercicios y laboratorios por carpetas.",
      "Aplicacion de conceptos de seguridad en ejemplos web.",
      "Documentacion de practicas y evidencias del aprendizaje.",
    ],
    results: [
      {
        device: "Escritorio",
        title: "Revision de laboratorios",
        detail:
          "Los archivos y ejercicios se pueden explorar con contexto completo desde una pantalla amplia.",
        kind: "desktop",
      },
      {
        device: "Tablet",
        title: "Consulta academica",
        detail: "La estructura del repositorio permite revisar material y avances por actividades.",
        kind: "tablet",
      },
      {
        device: "Movil",
        title: "Acceso rapido",
        detail: "Los contenidos principales quedan disponibles para revision puntual desde GitHub.",
        kind: "mobile",
      },
    ],
  },
  {
    slug: "lp-ii",
    title: "LP-II",
    category: "Programacion en Java",
    summary: "Repositorio de Lenguaje de Programacion II con ejercicios desarrollados en Java.",
    description:
      "Practicas de programacion orientadas al dominio de Java, control de versiones y resolucion de ejercicios academicos.",
    period: "Proyecto academico",
    duration: "Ejercicios por laboratorio",
    repository: "https://github.com/BrayanCahuanaU/LP-II",
    technologies: ["Java", "Programacion orientada a objetos", "Git", "GitHub"],
    outcomes: [
      "Resolucion de ejercicios de programacion en Java.",
      "Practica constante de estructuras, clases y logica aplicada.",
      "Repositorio publico para seguimiento del aprendizaje.",
    ],
    results: [
      {
        device: "Escritorio",
        title: "Lectura de codigo",
        detail: "La vista amplia facilita analizar archivos, commits y estructura de ejercicios.",
        kind: "desktop",
      },
      {
        device: "Tablet",
        title: "Seguimiento de practicas",
        detail: "Los laboratorios se pueden revisar de forma ordenada durante el aprendizaje.",
        kind: "tablet",
      },
      {
        device: "Movil",
        title: "Consulta rapida",
        detail: "El repositorio permite ubicar ejercicios especificos desde dispositivos moviles.",
        kind: "mobile",
      },
    ],
  },
];
