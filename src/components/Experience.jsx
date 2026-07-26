import { useEffect, useMemo, useRef, useState } from 'react';
import { experience } from '../data/experience.js';
import ExperienceItem from './ExperienceItem.jsx';
import PuttingPath from './PuttingPath.jsx';
import SectionHeading from './SectionHeading.jsx';

function clamp(value, min = 0, max = 1) {
  return Math.min(Math.max(value, min), max);
}

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setPrefersReducedMotion(query.matches);

    updatePreference();
    query.addEventListener('change', updatePreference);

    return () => query.removeEventListener('change', updatePreference);
  }, []);

  return prefersReducedMotion;
}

export default function Experience() {
  const sectionRef = useRef(null);
  const frameRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [previewIndex, setPreviewIndex] = useState(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const orderedExperience = useMemo(() => [...experience].reverse(), []);
  const displayIndex = previewIndex ?? activeIndex;
  const pathProgress = orderedExperience.length <= 1 ? 0 : displayIndex / (orderedExperience.length - 1);

  useEffect(() => {
    const updateProgress = () => {
      const section = sectionRef.current;

      if (!section) return;

      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const sectionHeight = section.offsetHeight;
      const scrollStart = sectionTop - window.innerHeight;
      const scrollEnd = sectionTop + sectionHeight - window.innerHeight;
      const scrollDistance = Math.max(scrollEnd - scrollStart, 1);
      const nextProgress = clamp((window.scrollY - scrollStart) / scrollDistance);
      const nextIndex = Math.min(Math.floor(nextProgress * orderedExperience.length), orderedExperience.length - 1);

      setActiveIndex(nextIndex);
    };

    const onScroll = () => {
      if (frameRef.current) return;

      frameRef.current = window.requestAnimationFrame(() => {
        updateProgress();
        frameRef.current = null;
      });
    };

    updateProgress();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', updateProgress);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', updateProgress);

      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, [orderedExperience]);

  return (
    <section id="experience" ref={sectionRef} className="section-pad experience-section border-y border-line bg-panel">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.86fr_1.14fr] lg:px-8">
        <div className="experience-sticky">
          <div className="experience-intro">
            <SectionHeading eyebrow="Experience" title="A background built across strategy, systems, and teams">
              The throughline is turning ambiguous problems into structured decisions, products, research, and measurable progress.
            </SectionHeading>
          </div>
          <PuttingPath
            activeIndex={displayIndex}
            itemCount={orderedExperience.length}
            progress={pathProgress}
            reducedMotion={prefersReducedMotion}
          />
        </div>

        <ol className="timeline experience-timeline" aria-label="Experience timeline">
          {orderedExperience.map((item, index) => (
            <ExperienceItem
              key={item.id}
              index={index}
              isActive={index === displayIndex}
              item={item}
              onBlur={() => setPreviewIndex(null)}
              onFocus={() => setPreviewIndex(index)}
              onMouseEnter={() => setPreviewIndex(index)}
              onMouseLeave={() => setPreviewIndex(null)}
            />
          ))}
        </ol>
      </div>
    </section>
  );
}
