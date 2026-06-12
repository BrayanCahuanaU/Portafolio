const timeline = [
  ["2024", "Inicio de proyectos frontend con React, Next.js y diseño responsive."],
  ["2025", "Construccion de flujos web completos, integraciones y despliegues."],
  ["2026", "Portfolio consolidado para presentar trabajos y casos individuales."],
];

const certifications = [
  "Desarrollo frontend moderno",
  "React y arquitectura de componentes",
  "Buenas practicas de UI responsive",
];

export default function AboutPage() {
  return (
    <main>
      <section className="section hero compact">
        <div className="container stack">
          <p className="eyebrow">About</p>
          <h1>Desarrollador enfocado en interfaces funcionales, precisas y usables.</h1>
          <p className="lead">
            Soy un desarrollador que transforma ideas en experiencias digitales
            mantenibles, con atencion al detalle visual, estructura tecnica y
            experiencia de usuario.
          </p>
        </div>
      </section>

      <section className="section intro-band">
        <div className="container about-grid">
          <article>
            <h2>Quien soy</h2>
            <p>
              Trabajo con tecnologias web modernas para crear sitios, aplicaciones
              y herramientas que puedan crecer sin volverse dificiles de mantener.
            </p>
          </article>
          <article>
            <h2>Que hago</h2>
            <p>
              Desarrollo frontends, organizo componentes, conecto datos y preparo
              experiencias responsive para escritorio, tablet y movil.
            </p>
          </article>
          <article>
            <h2>Contacto</h2>
            <p>
              Disponible para colaboraciones, proyectos freelance y mejoras de
              productos existentes.
            </p>
            <a className="text-link" href="mailto:hola@portfolio.dev">
              hola@portfolio.dev
            </a>
          </article>
        </div>
      </section>

      <section className="section muted">
        <div className="container two-columns">
          <div>
            <p className="eyebrow">Certificaciones</p>
            <h2>Formacion y practica</h2>
            <div className="tag-list">
              {certifications.map((item) => (
                <span className="tag" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="eyebrow">Timeline</p>
            <h2>Evolucion</h2>
            <ol className="timeline">
              {timeline.map(([year, text]) => (
                <li key={year}>
                  <strong>{year}</strong>
                  <span>{text}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </main>
  );
}
