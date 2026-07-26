import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';
import { aiSystems } from '../data/aiSystems.js';
import AISystemCard from './AISystemCard.jsx';
import SectionHeading from './SectionHeading.jsx';

export default function AISystems() {
  const scrollerRef = useRef(null);

  const scrollCards = (direction) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    scroller.scrollBy({
      left: direction * Math.min(scroller.clientWidth * 0.9, 620),
      behavior: 'smooth',
    });
  };

  return (
    <section id="ai-systems" className="section-pad border-y border-line bg-panel">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <SectionHeading eyebrow="Applied AI Systems" title="Applied AI Systems">
            Reusable AI workflows, agents, and structured processes designed to complete complex knowledge work reliably.
          </SectionHeading>
          <div className="flex gap-2 pb-3">
            <button className="icon-button" type="button" aria-label="Previous AI systems" onClick={() => scrollCards(-1)}>
              <ChevronLeft size={20} aria-hidden="true" />
            </button>
            <button className="icon-button" type="button" aria-label="Next AI systems" onClick={() => scrollCards(1)}>
              <ChevronRight size={20} aria-hidden="true" />
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="ai-scroller"
          tabIndex="0"
          role="region"
          aria-label="Horizontally scrollable AI systems"
        >
          {aiSystems.map((system, index) => (
            <AISystemCard key={system.id} system={system} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
