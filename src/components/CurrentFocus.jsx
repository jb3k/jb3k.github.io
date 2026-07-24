import { currentFocus } from '../data/currentFocus.js';
import FocusCard from './FocusCard.jsx';
import SectionHeading from './SectionHeading.jsx';

export default function CurrentFocus() {
  return (
    <section id="current-focus" className="section-pad">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Current Focus" title="What I am building now">
          A small set of connected products and research systems centered on leadership, measurement, and practical AI workflows.
        </SectionHeading>
        <div className="grid gap-5 lg:grid-cols-3">
          {currentFocus.map((item) => (
            <FocusCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
