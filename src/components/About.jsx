import { site } from '../data/site.js';
import SectionHeading from './SectionHeading.jsx';

export default function About() {
  return (
    <section id="about" className="section-pad">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <SectionHeading eyebrow="About" title="A coherent path into AI-enabled product work" />
        <div className="card p-6 sm:p-8">
          <div className="grid gap-6 text-lg leading-8 text-muted">
            {site.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
