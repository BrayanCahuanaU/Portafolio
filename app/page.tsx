import Link from "next/link";
import { getProjects } from "./data/projects";

export default async function Home() {
  const projects = await getProjects();
  const featured = projects.slice(0, 3);

  return (
    <main>
      <section className="section hero">
        <div className="container hero-grid editorial">
          <div className="stack hero-copy">
            <p className="eyebrow">Ingenieria de Sistemas / Desarrollo web / Soporte TI</p>
            <h1>Brayan Alexandro Cahuana Utani.</h1>
            <p className="lead">
              Estudiante de Ingenieria de Sistemas en la UCSM, con experiencia en
              soporte tecnico, administracion de equipos de TI y desarrollo web con
              Java, Python, PHP, JavaScript y React.
            </p>
            <div className="actions">
              <Link className="button primary" href="/works">
                Proyectos
              </Link>
              <Link className="button secondary" href="/about">
                Sobre mi
              </Link>
            </div>
          </div>
          <div className="portrait-panel" aria-label="Identidad visual del portfolio">
            <div className="portrait-orbit">
              <span>TI</span>
              <span>WEB</span>
              <span>REDES</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section intro-band">
        <div className="container split">
          <div>
            <p className="eyebrow">Perfil</p>
            <h2>Formacion tecnica, soporte a usuarios y desarrollo de software.</h2>
          </div>
          <div className="hero-panel" aria-label="Resumen del portfolio">
            <div>
              <span className="metric">9no</span>
              <p>ciclo de Ingenieria de Sistemas en la Universidad Catolica de Santa Maria</p>
            </div>
            <div>
              <span className="metric">10</span>
              <p>repositorios publicos en GitHub con practicas y proyectos academicos</p>
            </div>
            <div>
              <span className="metric">TI</span>
              <p>experiencia en soporte, mantenimiento, inventario y configuracion de equipos</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section muted">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">GitHub</p>
            <h2>Proyectos destacados</h2>
          </div>
          <div className="work-grid">
            {featured.map((project) => (
              <Link className="work-card" href={`/works/${project.slug}`} key={project.slug}>
                <div className="work-preview" />
                <span>{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
