import React from 'react';

interface ProgressRingProps {
  progress: number;
  color: string;
  showPercentage?: boolean;
}

export const ProgressRing: React.FC<ProgressRingProps> = ({
  progress,
  color,
  showPercentage = false
}) => {
  return (
    <div
      className="progress-ring"
      style={{
        '--progress': `${progress}%`,
        '--ring-color': color,
      } as React.CSSProperties}
    >
      {showPercentage && progress > 0 && (
        <span className="text-[8px] font-bold text-white absolute">
          {progress}
        </span>
      )}
    </div>
  );
};
