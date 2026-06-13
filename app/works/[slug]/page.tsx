import { notFound } from "next/navigation";
import { projects } from "../../data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main>
      <section className="section hero compact">
        <div className="container stack">
          <p className="eyebrow">{project.category}</p>
          <h1>{project.title}</h1>
          <p className="lead">{project.description}</p>
          <div className="meta-row">
            <span>{project.period}</span>
            <span>{project.duration}</span>
            {project.repository ? (
              <a href={project.repository} target="_blank" rel="noopener noreferrer">
                Ver repositorio
              </a>
            ) : null}
          </div>
        </div>
      </section>

      <section className="device-scroll" aria-label="Resultados por dispositivo">
        {project.results.map((result) => (
          <article className="device-section" key={result.device}>
            <div className="device-copy">
              <p className="eyebrow">{result.device}</p>
              <h2>{result.title}</h2>
              <p>{result.detail}</p>
            </div>
            <div className={`device-frame ${result.kind}`}>
              <div className="device-screen">
                <span>{project.title}</span>
                <strong>{result.device}</strong>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="section">
        <div className="container two-columns">
          <div>
            <p className="eyebrow">Tecnologias</p>
            <h2>Stack usado</h2>
            <div className="tag-list">
              {project.technologies.map((tech) => (
                <span className="tag" key={tech}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="eyebrow">Resultados</p>
            <h2>Impacto visible</h2>
            <ul className="clean-list">
              {project.outcomes.map((outcome) => (
                <li key={outcome}>{outcome}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
