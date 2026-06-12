import Link from "next/link";
import { projects } from "./data/projects";

export default function Home() {
  const featured = projects.slice(0, 3);

  return (
    <main>
      <section className="section hero">
        <div className="container hero-grid editorial">
          <div className="stack hero-copy">
            <p className="eyebrow">Designer / Developer</p>
            <h1>Interfaces digitales con estructura, ritmo visual y ejecucion tecnica.</h1>
            <p className="lead">
              Portfolio construido con Next.js y Once UI para presentar trabajos,
              procesos y resultados en una experiencia sobria, responsiva y facil de
              recorrer.
            </p>
            <div className="actions">
              <Link className="button primary" href="/works">
                Work
              </Link>
              <Link className="button secondary" href="/about">
                About
              </Link>
            </div>
          </div>
          <div className="portrait-panel" aria-label="Identidad visual del portfolio">
            <div className="portrait-orbit">
              <span>UI</span>
              <span>UX</span>
              <span>CODE</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section intro-band">
        <div className="container split">
          <div>
            <p className="eyebrow">Overview</p>
            <h2>Una base limpia para contar quien eres, que haces y que has construido.</h2>
          </div>
          <div className="hero-panel" aria-label="Resumen del portfolio">
            <div>
              <span className="metric">3</span>
              <p>paginas principales en la navegacion</p>
            </div>
            <div>
              <span className="metric">{projects.length}</span>
              <p>casos cargados desde datos editables</p>
            </div>
            <div>
              <span className="metric">SSG</span>
              <p>paginas individuales generadas por slug</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section muted">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Selected work</p>
            <h2>Trabajos destacados</h2>
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
