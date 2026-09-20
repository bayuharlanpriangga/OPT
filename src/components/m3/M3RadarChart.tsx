import React from 'react';

export interface RadarPoint {
  label: string;
  value: number; // typically 0 to 100
  subLabel?: string;
}

interface M3RadarChartProps {
  data: RadarPoint[];
  size?: number;
  maxValue?: number;
  className?: string;
  color?: string; // hex or css color
}

export const M3RadarChart: React.FC<M3RadarChartProps> = ({
  data,
  size = 360,
  maxValue = 100,
  className = '',
  color = 'var(--color-primary, #6750A4)',
}) => {
  if (!data || data.length < 3) return null;

  const center = size / 2;
  const radius = size * 0.36;
  const count = data.length;
  const angleStep = (Math.PI * 2) / count;

  // Concentric levels (25%, 50%, 75%, 100%)
  const levels = [0.25, 0.5, 0.75, 1.0];

  // Helper to calculate coordinates
  const getCoordinates = (index: number, factor: number) => {
    const angle = index * angleStep - Math.PI / 2;
    return {
      x: center + radius * factor * Math.cos(angle),
      y: center + radius * factor * Math.sin(angle),
    };
  };

  // Build polygon path string for a given level
  const getPolygonPoints = (factor: number) => {
    return Array.from({ length: count })
      .map((_, i) => {
        const { x, y } = getCoordinates(i, factor);
        return `${x.toFixed(1)},${y.toFixed(1)}`;
      })
      .join(' ');
  };

  // Build polygon points for data values
  const dataPoints = data.map((d, i) => {
    const clampedVal = Math.max(0, Math.min(maxValue, d.value));
    const factor = clampedVal / maxValue;
    return getCoordinates(i, factor);
  });

  const dataPolygonString = dataPoints
    .map((p) => `${p.x.toFixed(1)},${p.y.toFixed(1)}`)
    .join(' ');

  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      <svg
        viewBox={`0 0 ${size} ${size}`}
        className="w-full max-w-95 h-auto overflow-visible"
      >
        {/* Background Grid Lines & Polygons */}
        {levels.map((lvl) => (
          <polygon
            key={lvl}
            points={getPolygonPoints(lvl)}
            fill={lvl === 1.0 ? 'transparent' : 'none'}
            stroke="currentColor"
            className="text-outline-variant/60"
            strokeWidth={lvl === 1.0 ? '1.5' : '1'}
            strokeDasharray={lvl < 1.0 ? '3 3' : undefined}
          />
        ))}

        {/* Radiating Axis Lines */}
        {data.map((_, i) => {
          const { x, y } = getCoordinates(i, 1.0);
          return (
            <line
              key={i}
              x1={center}
              y1={center}
              x2={x}
              y2={y}
              stroke="currentColor"
              className="text-outline-variant/40"
              strokeWidth="1"
            />
          );
        })}

        {/* Data Area Polygon */}
        <polygon
          points={dataPolygonString}
          fill={color}
          fillOpacity={0.25}
          stroke={color}
          strokeWidth="2.5"
          strokeLinejoin="round"
          className="transition-all duration-300"
        />

        {/* Points & Values */}
        {dataPoints.map((p, i) => (
          <circle
            key={i}
            cx={p.x}
            cy={p.y}
            r="4.5"
            fill={color}
            className="stroke-surface transition-all duration-300"
            strokeWidth="2"
          />
        ))}

        {/* Outer Labels */}
        {data.map((d, i) => {
          const angle = i * angleStep - Math.PI / 2;
          const labelDist = radius + 28;
          const lx = center + labelDist * Math.cos(angle);
          const ly = center + labelDist * Math.sin(angle);

          return (
            <g key={i} className="text-center">
              <text
                x={lx}
                y={ly}
                textAnchor="middle"
                dominantBaseline="central"
                className="text-[12px] font-bold fill-on-surface"
              >
                {d.label}
              </text>
              <text
                x={lx}
                y={ly + 13}
                textAnchor="middle"
                dominantBaseline="central"
                className="text-[10px] font-medium fill-primary"
              >
                {Math.round(d.value)}%
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};
