export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  period: string;
  duration: string;
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
    slug: "portfolio-once-ui",
    title: "Portfolio personal",
    category: "Web",
    summary: "Sitio profesional para presentar perfil, trabajos y casos individuales.",
    description:
      "Portfolio construido con Next.js y Once UI como base visual, preparado para crecer con nuevos trabajos sin rehacer la navegacion.",
    period: "Enero 2026 - Junio 2026",
    duration: "5 meses desde inicio hasta ultimo commit",
    technologies: ["Next.js", "React", "TypeScript", "Once UI", "Tailwind CSS"],
    outcomes: [
      "Navegacion principal con Home, Acerca de mi y Trabajos.",
      "Paginas individuales generadas desde datos estructurados.",
      "Secciones por dispositivo con scroll responsivo.",
    ],
    results: [
      {
        device: "Escritorio",
        title: "Vista amplia para lectura y comparacion",
        detail:
          "La informacion principal mantiene jerarquia clara y usa columnas para aprovechar pantallas grandes.",
        kind: "desktop",
      },
      {
        device: "Tablet",
        title: "Bloques compactos sin perder contexto",
        detail:
          "Las secciones reducen ancho y conservan el flujo visual para navegacion tactil.",
        kind: "tablet",
      },
      {
        device: "Movil",
        title: "Contenido vertical y facil de escanear",
        detail:
          "Cada bloque se apila para evitar solapamientos y mantener botones faciles de tocar.",
        kind: "mobile",
      },
    ],
  },
  {
    slug: "dashboard-operativo",
    title: "Dashboard operativo",
    category: "Aplicacion web",
    summary: "Panel para revisar metricas, estados y acciones frecuentes en una sola vista.",
    description:
      "Interfaz tipo SaaS pensada para consulta diaria, con tarjetas de estado, listas accionables y estructura densa pero legible.",
    period: "Marzo 2025 - Mayo 2025",
    duration: "2 meses desde prototipo hasta entrega",
    technologies: ["React", "TypeScript", "CSS Modules", "REST API"],
    outcomes: [
      "Resumen de indicadores clave en primera pantalla.",
      "Patrones visuales consistentes para estados y prioridades.",
      "Responsive adaptado a equipos de escritorio y revision movil.",
    ],
    results: [
      {
        device: "Escritorio",
        title: "Panel principal de alta densidad",
        detail: "Metricas, tablas y acciones permanecen visibles sin saturar el layout.",
        kind: "desktop",
      },
      {
        device: "Tablet",
        title: "Gestion intermedia",
        detail: "Los modulos se redistribuyen para mantener lectura horizontal controlada.",
        kind: "tablet",
      },
      {
        device: "Movil",
        title: "Revision rapida",
        detail: "La informacion se prioriza en tarjetas verticales con acciones claras.",
        kind: "mobile",
      },
    ],
  },
  {
    slug: "landing-producto",
    title: "Landing de producto",
    category: "Marketing web",
    summary: "Pagina de conversion con propuesta clara, beneficios y llamados a la accion.",
    description:
      "Landing responsive orientada a comunicar valor rapidamente y guiar al usuario hacia una accion principal.",
    period: "Agosto 2025 - Septiembre 2025",
    duration: "4 semanas de iteracion",
    technologies: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    outcomes: [
      "Mensaje principal visible en el primer viewport.",
      "Secciones claras para beneficios, prueba social y contacto.",
      "Carga rapida y estructura preparada para SEO.",
    ],
    results: [
      {
        device: "Escritorio",
        title: "Presentacion comercial completa",
        detail: "La propuesta de valor y el CTA se muestran con espacio para explorar detalles.",
        kind: "desktop",
      },
      {
        device: "Tablet",
        title: "Lectura fluida",
        detail: "Los bloques se acomodan para mantener ritmo sin columnas demasiado estrechas.",
        kind: "tablet",
      },
      {
        device: "Movil",
        title: "Conversion directa",
        detail: "El contenido prioriza CTA, beneficios y contacto en un flujo corto.",
        kind: "mobile",
      },
    ],
  },
];
