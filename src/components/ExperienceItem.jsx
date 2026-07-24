export default function ExperienceItem({ item }) {
  return (
    <li className="timeline-item">
      <div>
        <h3 className="text-xl font-semibold leading-tight text-ink">{item.organization}</h3>
        <p className="mt-1 font-semibold text-accent-dark">{item.role}</p>
        <p className="mt-3 leading-7 text-muted">{item.description}</p>
      </div>
    </li>
  );
}
