import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { site } from '../data/site.js';

const links = [
  { href: '#current-focus', label: 'Current Focus' },
  { href: '#ai-systems', label: 'AI Systems' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-paper/92 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8" aria-label="Primary navigation">
        <a href="#top" className="font-semibold text-ink transition hover:text-accent-dark">
          {site.name}
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-md border border-line bg-panel text-ink md:hidden"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </nav>

      {isOpen ? (
        <div className="border-t border-line bg-paper px-4 py-3 md:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="nav-link py-2" onClick={() => setIsOpen(false)}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
