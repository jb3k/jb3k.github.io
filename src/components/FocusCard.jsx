import Tag from './Tag.jsx';

export default function FocusCard({ item }) {
  return (
    <article className="card p-6">
      <p className="text-sm font-semibold text-accent-dark">{item.eyebrow}</p>
      <h3 className="mt-4 text-2xl font-semibold leading-tight text-ink">{item.title}</h3>
      <p className="mt-4 leading-7 text-muted">{item.description}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {item.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
    </article>
  );
}
