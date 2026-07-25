import { useEffect, useMemo, useRef, useState } from 'react';
import GolfBall from './GolfBall.jsx';

const VIEW_BOX = { width: 420, height: 620 };
const PATH_D = 'M 212 38 C 80 106, 90 214, 214 278 S 354 426, 196 570';

export default function PuttingPath({ activeIndex, itemCount, progress, reducedMotion }) {
  const pathRef = useRef(null);
  const [pathLength, setPathLength] = useState(0);
  const [ballPoint, setBallPoint] = useState({ x: 212, y: 38 });

  useEffect(() => {
    const path = pathRef.current;

    if (!path) return;

    setPathLength(path.getTotalLength());
  }, []);

  const markerPoints = useMemo(() => {
    const path = pathRef.current;

    if (!path || !pathLength || itemCount < 1) return [];

    return Array.from({ length: itemCount }, (_, index) => {
      const ratio = itemCount === 1 ? 0 : index / (itemCount - 1);
      return path.getPointAtLength(pathLength * ratio);
    });
  }, [itemCount, pathLength]);

  useEffect(() => {
    const path = pathRef.current;

    if (!path || !pathLength) return;

    const staticRatio = itemCount <= 1 ? 0 : activeIndex / (itemCount - 1);
    const ratio = reducedMotion ? staticRatio : progress;
    const point = path.getPointAtLength(pathLength * Math.min(Math.max(ratio, 0), 1));

    setBallPoint({ x: point.x, y: point.y });
  }, [activeIndex, itemCount, pathLength, progress, reducedMotion]);

  return (
    <div className="putting-path" aria-hidden="true">
      <svg viewBox={`0 0 ${VIEW_BOX.width} ${VIEW_BOX.height}`} role="img">
        <path className="putting-contour putting-contour-a" d="M 82 146 C 168 112, 272 126, 334 190" />
        <path className="putting-contour putting-contour-b" d="M 72 452 C 158 408, 260 424, 338 506" />
        <path ref={pathRef} className="putting-line" d={PATH_D} pathLength="1" />
        {markerPoints.map((point, index) => (
          <circle
            key={`${point.x}-${point.y}`}
            className={`putting-marker ${index === activeIndex ? 'is-active' : ''}`}
            cx={point.x}
            cy={point.y}
            r="8"
          />
        ))}
        <g className="putting-flag" transform="translate(190 536)">
          <line x1="20" x2="20" y1="0" y2="54" />
          <path d="M 21 2 L 68 14 L 21 27 Z" />
        </g>
      </svg>

      <GolfBall
        className={reducedMotion ? 'is-static' : ''}
        style={{
          left: `${(ballPoint.x / VIEW_BOX.width) * 100}%`,
          top: `${(ballPoint.y / VIEW_BOX.height) * 100}%`,
        }}
      />
    </div>
  );
}
