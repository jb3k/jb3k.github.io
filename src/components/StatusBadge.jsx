const statusStyles = {
  Active: 'bg-accent text-white',
  Pilot: 'bg-amber-100 text-amber-900 ring-1 ring-amber-200',
  'In Development': 'bg-blue-100 text-blue-900 ring-1 ring-blue-200',
  Planned: 'bg-stone-200 text-stone-800 ring-1 ring-stone-300',
  Prototype: 'bg-teal-100 text-teal-900 ring-1 ring-teal-200',
  Archived: 'bg-zinc-200 text-zinc-700 ring-1 ring-zinc-300',
};

export default function StatusBadge({ status }) {
  return (
    <span className={`status-badge ${statusStyles[status] ?? statusStyles.Planned}`}>
      {status}
    </span>
  );
}
