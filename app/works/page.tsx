import Link from "next/link";
import { projects } from "../data/projects";

export default function WorksPage() {
  return (
    <main>
      <section className="section hero compact">
        <div className="container stack">
          <p className="eyebrow">Proyectos</p>
          <h1>Repositorios y practicas que muestran mi avance tecnico.</h1>
          <p className="lead">
            Seleccion de proyectos publicados en GitHub, con enfasis en desarrollo
            web, programacion academica, seguridad informatica y uso de control de
            versiones.
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
