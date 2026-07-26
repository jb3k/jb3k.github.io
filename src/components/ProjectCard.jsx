import { ExternalLink, Github } from 'lucide-react';
import StatusBadge from './StatusBadge.jsx';
import Tag from './Tag.jsx';

export default function ProjectCard({ project }) {
  return (
    <article className={`card overflow-hidden ${project.featured ? 'lg:col-span-2' : ''}`}>
      {project.image ? (
        <img className="h-56 w-full object-cover" src={project.image} alt={`${project.title} project screenshot`} />
      ) : (
        <div className="project-placeholder" aria-hidden="true">
          <span>{project.title}</span>
        </div>
      )}

      <div className="p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <StatusBadge status={project.status} />
          <p className="text-sm font-semibold text-accent-dark">{project.role}</p>
        </div>
        <h3 className="mt-4 text-2xl font-semibold leading-tight text-ink">{project.title}</h3>
        <p className="mt-3 text-base font-medium text-ink">{project.summary}</p>
        <p className="mt-3 leading-7 text-muted">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        {project.githubUrl || project.liveUrl ? (
          <div className="mt-6 flex flex-wrap gap-3">
            {project.liveUrl ? (
              <a className="button-secondary" href={project.liveUrl} target="_blank" rel="noreferrer">
                <ExternalLink size={18} aria-hidden="true" />
                Live
              </a>
            ) : null}
            {project.githubUrl ? (
              <a className="button-quiet" href={project.githubUrl} target="_blank" rel="noreferrer">
                <Github size={18} aria-hidden="true" />
                GitHub
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  );
}
