import React from 'react';

interface M3ProgressBarProps {
  progress: number; // 0 to 100
  showLabel?: boolean;
  height?: string;
  className?: string;
}

export const M3ProgressBar: React.FC<M3ProgressBarProps> = ({
  progress,
  showLabel = false,
  height = 'h-2',
  className = '',
}) => {
  const clamped = Math.min(Math.max(progress, 0), 100);

  return (
    <div className={`w-full ${className}`}>
      {showLabel && (
        <div className="flex justify-between items-center text-xs text-on-surface-variant font-medium mb-1.5">
          <span>Progress</span>
          <span>{Math.round(clamped)}%</span>
        </div>
      )}
      <div className={`w-full bg-surface-container-highest rounded-full overflow-hidden ${height}`}>
        <div
          className="bg-primary h-full rounded-full transition-all duration-300 ease-out"
          style={{ width: `${clamped}%` }}
        />
      </div>
    </div>
  );
};
