import { ArrowDown, Github, Linkedin } from 'lucide-react';
import { site } from '../data/site.js';

export default function Hero() {
  return (
    <section id="top" className="section-pad relative overflow-hidden border-b border-line">
      <div className="absolute inset-0 subtle-grid" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div className="max-w-4xl">
          <p className="eyebrow">Product builder · Research systems · Applied AI</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-tight tracking-normal text-ink sm:text-6xl lg:text-7xl">
            {site.hero.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
            {site.hero.summary}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="button-primary" href="#ai-systems">
              View AI Systems
            </a>
            <a className="button-secondary" href="#current-focus">
              <ArrowDown size={18} aria-hidden="true" />
              View Current Work
            </a>
            <a className="button-quiet" href={site.githubUrl} target="_blank" rel="noreferrer">
              <Github size={18} aria-hidden="true" />
              GitHub
            </a>
            <a className="button-quiet" href={site.linkedinUrl} target="_blank" rel="noreferrer">
              <Linkedin size={18} aria-hidden="true" />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="system-map" aria-hidden="true">
          <div className="map-node map-node-a">Research</div>
          <div className="map-node map-node-b">Agents</div>
          <div className="map-node map-node-c">Simulation</div>
          <div className="map-node map-node-d">Decision Support</div>
          <div className="map-line map-line-a" />
          <div className="map-line map-line-b" />
          <div className="map-line map-line-c" />
        </div>
      </div>
    </section>
  );
}
