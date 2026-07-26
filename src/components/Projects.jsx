import { projects } from '../data/projects.js';
import ProjectCard from './ProjectCard.jsx';
import SectionHeading from './SectionHeading.jsx';

export default function Projects() {
  return (
    <section id="projects" className="section-pad">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Selected Projects" title="Products, studies, and systems">
          A practical portfolio of leadership tools, research workflows, learning agents, and archived engineering work.
        </SectionHeading>
        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
