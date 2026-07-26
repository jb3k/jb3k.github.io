import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import { site } from '../data/site.js';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-line bg-ink text-paper">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-12 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <p className="text-sm uppercase tracking-[0.18em] text-paper/70">Contact</p>
          <h2 className="mt-3 text-3xl font-semibold">{site.name}</h2>
          <p className="mt-3 max-w-xl text-paper/75">{site.footerNote}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a className="footer-link" href={site.email}>
            <Mail size={18} aria-hidden="true" />
            Email
          </a>
          <a className="footer-link" href={site.githubUrl} target="_blank" rel="noreferrer">
            <Github size={18} aria-hidden="true" />
            GitHub
          </a>
          <a className="footer-link" href={site.linkedinUrl} target="_blank" rel="noreferrer">
            <Linkedin size={18} aria-hidden="true" />
            LinkedIn
          </a>
          <a className="footer-link" href={site.resumeUrl} target="_blank" rel="noreferrer">
            <FileText size={18} aria-hidden="true" />
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
}
