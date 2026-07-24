import Tag from './Tag.jsx';
import StatusBadge from './StatusBadge.jsx';

export default function AISystemCard({ system, index }) {
  return (
    <article className="ai-card" tabIndex="0" aria-label={`${system.title}, ${system.status}`}>
      <div className="flex items-start justify-between gap-4">
        <span className="text-sm font-semibold text-accent-dark">{String(index + 1).padStart(2, '0')}</span>
        <StatusBadge status={system.status} />
      </div>

      <h3 className="mt-5 text-2xl font-semibold leading-tight text-ink">{system.title}</h3>
      <p className="mt-4 leading-7 text-muted">{system.description}</p>

      <div className="mt-6 grid gap-3">
        <div className="flow-box">
          <span>Input</span>
          <p>{system.input}</p>
        </div>
        <div className="flow-box">
          <span>Process</span>
          <ul className="mt-2 grid gap-1 text-sm leading-6 text-muted">
            {system.process.slice(0, 6).map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ul>
        </div>
        <div className="flow-box">
          <span>Output</span>
          <p>{system.output}</p>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {system.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>

      {system.link ? (
        <a className="mt-6 inline-flex font-semibold text-accent-dark hover:text-ink" href={system.link}>
          View system
        </a>
      ) : null}
    </article>
  );
}
