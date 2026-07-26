export default function SectionHeading({ eyebrow, title, children }) {
  return (
    <div className="mb-8 max-w-3xl md:mb-11">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="section-title">{title}</h2>
      {children ? <p className="section-copy">{children}</p> : null}
    </div>
  );
}
