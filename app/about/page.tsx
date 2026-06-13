const timeline = [
  ["2022", "Inicio de Ingenieria de Sistemas en la Universidad Catolica de Santa Maria."],
  ["2023 - 2025", "Trabajo freelance en soporte tecnico, mantenimiento y configuracion de equipos."],
  ["2025 - 2026", "Auxiliar administrador de equipos de TI en Rematazo.pe."],
  ["2026", "Voluntariado de soporte TI en el Poder Judicial - CSJA Arequipa."],
];

const certifications = [
  "AWS Academy Cloud Foundations",
  "IBM COBOL Programming with VSCode",
  "Cisco CCNA: Introduction to Networks",
  "Cisco CCNA: Switching, Routing, and Wireless Essentials",
  "Cisco CCNA: Redes Empresariales, Seguridad y Automatizacion",
  "Celonis Process Management Foundations",
  "Gestion de Proyectos con Metodologias Agiles y Lean",
];

const skills = [
  "Java",
  "Python",
  "C/C++",
  "JavaScript",
  "COBOL",
  "HTML",
  "CSS",
  "PHP",
  "React JS",
  "MySQL",
  "PostgreSQL",
  "Oracle SQL",
  "Windows",
  "Linux",
];

export default function AboutPage() {
  return (
    <main>
      <section className="section hero compact">
        <div className="container stack">
          <p className="eyebrow">Sobre mi</p>
          <h1>Estudiante de Ingenieria de Sistemas con foco en software, redes y soporte TI.</h1>
          <p className="lead">
            Soy Brayan Alexandro Cahuana Utani, estudiante de noveno ciclo en la
            Universidad Catolica de Santa Maria. Busco oportunidades para aplicar mis
            habilidades en desarrollo de software e infraestructura de redes.
          </p>
        </div>
      </section>

      <section className="section intro-band">
        <div className="container about-grid">
          <article>
            <h2>Quien soy</h2>
            <p>
              Profesional en formacion, versatil, proactivo y orientado a resolver
              problemas con pensamiento critico, aprendizaje continuo y atencion al
              detalle.
            </p>
          </article>
          <article>
            <h2>Que hago</h2>
            <p>
              Desarrollo soluciones web, programo en distintos lenguajes y brindo
              soporte tecnico en instalacion, mantenimiento, inventario y
              configuracion de equipos.
            </p>
          </article>
          <article>
            <h2>Contacto</h2>
            <p>
              Disponible en Arequipa para oportunidades de desarrollo de software,
              soporte tecnico e infraestructura de redes.
            </p>
            <a className="text-link" href="mailto:cahuanabrayan123@gmail.com">
              cahuanabrayan123@gmail.com
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
            <p className="eyebrow">Stack</p>
            <h2>Competencias tecnicas</h2>
            <div className="tag-list">
              {skills.map((item) => (
                <span className="tag" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section muted">
        <div className="container two-columns">
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
          <div>
            <p className="eyebrow">Experiencia</p>
            <h2>Soporte e infraestructura</h2>
            <ul className="clean-list">
              <li>Instalacion y configuracion de sistemas operativos y aplicaciones.</li>
              <li>Mantenimiento preventivo y correctivo de equipos de computo.</li>
              <li>Registro, clasificacion e inventario de laptops, PCs, switches y routers.</li>
              <li>
                Soporte presencial y remoto para incidencias de hardware, software y
                conectividad.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
