import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { site } from '../data/site.js';

const heroBackground = '/images/hero-golf-course.png';

export default function Hero() {
  const heroLinks = site.hero.links
    .map((link) => ({ ...link, url: site[link.urlKey] }))
    .filter((link) => link.url);

  return (
    <section id="top" className="hero" style={{ backgroundImage: `url(${heroBackground})` }}>
      <div className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 sm:pt-24 lg:px-8 lg:pt-28">
        <div className="hero-copy">
          <p className="eyebrow">{site.hero.eyebrow}</p>
          <h1 className="mx-auto mt-5 max-w-5xl text-4xl font-semibold leading-[1.06] sm:text-6xl lg:text-7xl">
            {site.hero.headline}
          </h1>
          <p className="hero-summary mx-auto mt-7 max-w-3xl text-lg leading-8 sm:text-xl">
            {site.hero.summary}
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a className="button-primary" href="#ai-systems">
              View AI Systems
            </a>
            <a className="button-secondary" href="#current-focus">
              <ArrowDown size={18} aria-hidden="true" />
              View Current Work
            </a>
          </div>
        </div>

        <div className="hero-link-grid" aria-label="Featured links">
          {heroLinks.map((link) => {
            const isExternal = link.url.startsWith('http');

            return (
              <a
                key={link.id}
                className="hero-link-card"
                href={link.url}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noreferrer' : undefined}
                aria-label={`${link.label}: ${link.description}${isExternal ? ' (opens in a new tab)' : ''}`}
              >
                <span>
                  <strong>{link.label}</strong>
                  <small>{link.description}</small>
                </span>
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
