import Link from "next/link";
import Image from "next/image";

const timeline = [
  {
    year: "2022",
    title: "Universidad Catolica de Santa Maria",
    subtitle: "Ingenieria de Sistemas",
    description:
      "Inicio de Ingenieria de Sistemas en la Universidad Catolica de Santa Maria.",
    image: "/timeline/ucsm.jpg",
  },
  {
    year: "2023 - 2025",
    title: "Freelance TI",
    subtitle: "Soporte tecnico",
    description:
      "Trabajo freelance en soporte tecnico, mantenimiento y configuracion de equipos.",
    image: "/timeline/freelance.png",
  },
  {
    year: "2025 - 2026",
    title: "Rematazo.pe",
    subtitle: "Auxiliar administrador TI",
    description:
      "Auxiliar administrador de equipos de TI en Rematazo.pe.",
    image: "/timeline/rematazo.jpg",
  },
  {
    year: "2026",
    title: "Poder Judicial",
    subtitle: "Voluntariado TI",
    description:
      "Voluntariado de soporte TI en el Poder Judicial - CSJA Arequipa.",
    image: "/timeline/poderjudicial.png",
  },
];

const certifications = [
  {
    category: "Desarrollo",
    items: [
      {
        name: "AWS Academy Cloud Foundations",
        image: "/certifications/GestiónProyectosMetodologíasÁgilesYLean.png",
      },
      {
        name: "IBM COBOL Programming with VSCode",
        image: "/certifications/GestiónProyectosMetodologíasÁgilesYLean.png",
      },
      {
        name: "Gestion de Proyectos con Metodologias Agiles y Lean",
        image: "/certifications/GestiónProyectosMetodologíasÁgilesYLean.png",
      },
    ],
  },

  {
    category: "Redes",
    items: [
      {
        name: "Cisco CCNA: Introduction to Networks",
        image: "/certifications/GestiónProyectosMetodologíasÁgilesYLean.png",
      },
      {
        name: "Cisco CCNA: Switching, Routing, and Wireless Essentials",
        image: "/certifications/GestiónProyectosMetodologíasÁgilesYLean.png",
      },
      {
        name: "Cisco CCNA: Redes Empresariales, Seguridad y Automatizacion",
        image: "/certifications/GestiónProyectosMetodologíasÁgilesYLean.png",
      },
    ],
  },

  {
    category: "Procesos y Gestion",
    items: [
      {
        name: "Celonis Process Management Foundations",
        image: "/certifications/GestiónProyectosMetodologíasÁgilesYLean.png",
      },
    ],
  },
];

const skills = [
  { name: "HTML", icon: "/tech/html.svg", percent: 32 },
  { name: "PHP", icon: "/tech/php.svg", percent: 24 },
  { name: "CSS", icon: "/tech/css.svg", percent: 18 },
  { name: "Java", icon: "/tech/java.svg", percent: 14 },
  { name: "JavaScript", icon: "/tech/javascript.svg", percent: 5 },
  { name: "React JS", icon: "/tech/react.svg", percent: 3 },
  { name: "Next.js", icon: "/tech/nextjs.svg", percent: 2 },
  { name: "Python", icon: "/tech/python.svg", percent: 1 },
  { name: "C/C++", icon: "/tech/cpp.svg", percent: 1 },
  { name: "COBOL", icon: "/tech/cobol.svg", percent: 1 },
  { name: "MySQL", icon: "/tech/mysql.svg", percent: 1 },
  { name: "PostgreSQL", icon: "/tech/postgresql.svg", percent: 1 },
  { name: "Oracle SQL", icon: "/tech/oracle.svg", percent: 1 },
  { name: "Windows", icon: "/tech/windows.svg", percent: 1 },
  { name: "Linux", icon: "/tech/linux.svg", percent: 1 },
];

const experience = [
  "Instalacion y configuracion de sistemas operativos y aplicaciones.",
  "Mantenimiento preventivo y correctivo de equipos de computo.",
  "Registro, clasificacion e inventario de laptops, PCs, switches y routers.",
  "Soporte presencial y remoto para incidencias de hardware, software y conectividad.",
];

export default function AboutPage() {
  return (
    <main className="about-page">
      <section className="section about-shell">
        <div className="container about-layout">
          <aside className="profile-column" aria-label="Resumen personal">
            <div className="profile-summary">
              <h1>Brayan Alexandro Cahuana Utani</h1>
              <p>Ingeniero de sistemas en formacion, Arequipa, Peru.</p>
            </div>
            <div className="profile-links">
              <a href="mailto:cahuanabrayan123@gmail.com">Email</a>
              <Link href="/works">Trabajos</Link>
            </div>
            <div className="profile-socials" aria-label="Redes de contacto">
              <a
                href="http://linkedin.com/in/brayan-cahuana"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src="/social-media/linkedin.svg" alt="LinkedIn" width={20} height={20} />
              </a>
              <a
                href="https://wa.me/51987654321"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src="/social-media/whatsapp.svg" alt="WhatsApp" width={20} height={20} />
              </a>
              <a
                href="https://t.me/brayancahuana"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src="/social-media/telegram.svg" alt="Telegram" width={20} height={20} />
              </a>
              <a
                href="https://facebook.com/brayancahuana"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src="/social-media/facebook.svg" alt="Facebook" width={20} height={20} />
              </a>
            </div>
          </aside>

          <div className="about-content">
            <section className="about-section hero-copy">
              <p className="eyebrow">Perfil</p>
              <h2>Ingenieria de sistemas</h2>
              <p className="lead">
                Estudiante de noveno ciclo en la Universidad Catolica de Santa Maria.
                Me apasiona la tecnologia, en especial el desarrollo de software.
                Tengo amplia experiencia en soporte de TI.
              </p>
            </section>

            <section className="about-section">
              <p className="eyebrow">Resumen</p>
              <div className="about-copy-grid">
                <article>
                  <h3>Quien soy</h3>
                  <p>
                    Profesional en formacion, versatil, proactivo y orientado a
                    resolver problemas con pensamiento critico, aprendizaje continuo
                    y atencion al detalle.
                  </p>
                </article>
                <article>
                  <h3>Que hago</h3>
                  <p>
                    Desarrollo soluciones web, programo en distintos lenguajes y
                    brindo soporte tecnico en instalacion, mantenimiento, inventario
                    y configuracion de equipos.
                  </p>
                </article>
              </div>
            </section>

            <section className="about-section one-columns flat">
              <div>
                <p className="eyebrow">Stack</p>
                <h2>Competencias tecnicas</h2>
                <p className="stack-note">
                  Segun mi codigo real en github
                </p>
                <div className="skill-list">
                  {skills.map((item) => (
                    <article className="skill-card" key={item.name}>
                      <div className="skill-header">
                        <Image src={item.icon} alt="" aria-hidden="true" width={44} height={44} />
                        <div>
                          <h3>{item.name}</h3>
                          <span>{item.percent}%</span>
                        </div>
                      </div>
                      <div
                        className="skill-meter"
                        aria-label={`${item.name}: ${item.percent}%`}
                      >
                        <span style={{ width: `${item.percent}%` }} />
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <section className="about-section">
              <p className="eyebrow">Certificaciones</p>
              <h2>Formacion complementaria</h2>

              <div className="certification-groups">
                {certifications.map((group) => (
                  <div className="certification-group" key={group.category}>

                    <div className="certification-group-header">
                      <h3>{group.category}</h3>
                    </div>

                    <div className="certification-flex">
                      {group.items.map((item) => (
                        <article className="cert-card" key={item.name}>
                          <div className="cert-image-wrapper">
                            <Image
                              src={item.image}
                              alt={item.name}
                              width={320}
                              height={180}
                              className="cert-image"
                            />
                          </div>

                          <div className="cert-content">
                            <h4>{item.name}</h4>
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="about-section">
              <p className="eyebrow">Timeline</p>
              <h2>Evolución</h2>

              <div className="timeline-modern">
                {timeline.map((item) => (
                  <article className="timeline-item" key={item.year}>
                    <div className="timeline-marker">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={56}
                        height={56}
                        className="timeline-logo"
                      />
                    </div>

                    <div className="timeline-content">
                      <span className="timeline-year">{item.year}</span>

                      <h3>{item.title}</h3>

                      <span className="timeline-role">
                        {item.subtitle}
                      </span>

                      <p>{item.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>

          </div>
        </div>
      </section>
    </main>
  );
}
