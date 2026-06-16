import Link from "next/link";
import { getProjects } from "../data/projects";

export default async function WorksPage() {
  const projects = await getProjects();
  return (
    <main>
      <section className="section hero compact">
        <div className="container stack">
          <p className="eyebrow">Proyectos</p>
          <h1>Repositorios y practicas que puedes visualizar.</h1>
          <p className="lead">
            Puedes ingresar a cada proyecto para ver más detalles y el código fuente.
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
