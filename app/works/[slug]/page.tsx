import Image from "next/image";
import { notFound } from "next/navigation";
import { getProjects, getProject } from "../../data/projects";
import { getTechIcon } from "../../lib/tech-icons";
import { CommitTimeline } from "../../components/commit-timeline";

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProject(slug);

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
          <div className="actions">
            {project.repository ? (
              <a
                className="button primary"
                href={project.repository}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/actions/ver.svg"
                  alt="ver repositorio"
                  width={16}
                  height={16}
                  className="button-icon"
                />
                Ver repositorio
              </a>
            ) : null}
            {project.homepage ? (
              <a
                className="button secondary"
                href={project.homepage}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver en produccion
              </a>
            ) : null}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container stack">
          <p className="eyebrow">Commits</p>
          <h2>Linea de tiempo del desarrollo</h2>
          <CommitTimeline commits={project.commits} />
        </div>
      </section>

      {project.technologies.length > 0 ? (
        <section className="section">
          <div className="container stack">
            <p className="eyebrow">Stack tecnologico</p>
            <h2>Tecnologias usadas</h2>
            <div className="tech-grid">
              {project.technologies.map((tech) => (
                <div className="tech-chip" key={tech}>
                  <img
                    className="tech-icon"
                    src={getTechIcon(tech)}
                    alt={tech}
                    width={28}
                    height={28}
                  />
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {project.highlights.length > 0 ? (
        <section className="section muted">
          <div className="container stack">
            <p className="eyebrow">Puntos interesantes</p>
            <h2>¿Que hace especial a este proyecto?</h2>
            <ul className="clean-list">
              {project.highlights.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {project.outcomes.length > 0 ? (
        <section className="section">
          <div className="container stack">
            <p className="eyebrow">Resultados</p>
            <h2>Impacto visible</h2>
            <ul className="clean-list">
              {project.outcomes.map((outcome) => (
                <li key={outcome}>{outcome}</li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {project.gallery.length > 0 ? (
        <section className="section muted">
          <div className="container stack">
            <p className="eyebrow">Galeria</p>
            <h2>Capturas del proyecto</h2>
            <div className="work-grid">
              {project.gallery.map((img, i) => (
                <div className="card" key={i}>
                  <Image
                    className="gallery-image"
                    src={img.src}
                    alt={img.alt}
                    width={640}
                    height={440}
                    style={{ width: "100%", height: "auto", borderRadius: "6px" }}
                  />
                  <p style={{ marginTop: "8px", color: "var(--ink-muted)", fontSize: "0.85rem" }}>
                    {img.alt}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {project.results.length > 0 ? (
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
      ) : null}
    </main>
  );
}
