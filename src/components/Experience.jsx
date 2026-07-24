import { experience } from '../data/experience.js';
import ExperienceItem from './ExperienceItem.jsx';
import SectionHeading from './SectionHeading.jsx';

export default function Experience() {
  return (
    <section id="experience" className="section-pad border-y border-line bg-panel">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <SectionHeading eyebrow="Experience" title="A background built across strategy, systems, and teams">
          The throughline is turning ambiguous problems into structured decisions, products, research, and measurable progress.
        </SectionHeading>
        <ol className="timeline">
          {experience.map((item) => (
            <ExperienceItem key={item.id} item={item} />
          ))}
        </ol>
      </div>
    </section>
  );
}
