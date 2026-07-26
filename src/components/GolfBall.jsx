export default function GolfBall({ className = '', style }) {
  return (
    <span className={`golf-ball ${className}`} style={style} aria-hidden="true">
      <span />
    </span>
  );
}
