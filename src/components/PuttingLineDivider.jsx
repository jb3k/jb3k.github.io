export default function PuttingLineDivider({ reverse = false, compact = false }) {
  return (
    <div
      className={`putting-divider ${reverse ? 'is-reversed' : ''} ${compact ? 'is-compact' : ''}`}
      aria-hidden="true"
    >
      <svg className="putting-divider-art" viewBox="0 0 1000 72" preserveAspectRatio="none">
        <path
          className="putting-divider-path"
          d="M 38 41 C 218 7, 330 66, 492 38 S 754 11, 958 36"
          pathLength="100"
        />
        <circle className="putting-divider-ball" cx="31" cy="42" r="7" />
        <g className="putting-divider-flag" transform="translate(949 13)">
          <line x1="0" x2="0" y1="0" y2="28" />
          <path d="M 1 1 L 18 7 L 1 13 Z" />
        </g>
      </svg>
    </div>
  );
}
