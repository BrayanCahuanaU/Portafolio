import Link from "next/link";
import { projects } from "../data/projects";

export default function WorksPage() {
  return (
    <main>
      <section className="section hero compact">
        <div className="container stack">
          <p className="eyebrow">Work</p>
          <h1>Casos seleccionados con resultados por plataforma.</h1>
          <p className="lead">
            Una coleccion de proyectos presentados como puertas de entrada a una
            pagina individual con contexto, tecnologias, resultados y previews por
            dispositivo.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container work-grid">
          {projects.map((project) => (
            <Link className="work-card large" href={`/works/${project.slug}`} key={project.slug}>
              <div className="work-preview" />
              <span>{project.category}</span>
              <h2>{project.title}</h2>
              <p>{project.summary}</p>
              <small>{project.period}</small>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
