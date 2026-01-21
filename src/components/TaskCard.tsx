import React from 'react';
import { Task } from '../types';
import { ProgressRing } from './ProgressRing';

interface TaskCardProps {
  task: Task;
  onStatusChange: (taskId: string, newStatus: 'backlog' | 'in-progress' | 'review' | 'completed') => void;
  onProgressChange: (taskId: string, progress: number) => void;
}

export const TaskCard: React.FC<TaskCardProps> = ({ task, onStatusChange, onProgressChange }) => {
  const isCompleted = task.status === 'completed';
  const isInProgress = task.status === 'in-progress';

  const handleProgressClick = () => {
    if (task.status === 'completed') return;

    const newProgress = task.progress + 25;
    if (newProgress >= 100) {
      onProgressChange(task.id, 100);
      onStatusChange(task.id, 'completed');
    } else {
      onProgressChange(task.id, newProgress);
      if (task.status === 'backlog') {
        onStatusChange(task.id, 'in-progress');
      }
    }
  };

  const handleCardClick = () => {
    if (task.status === 'backlog') {
      onStatusChange(task.id, 'in-progress');
      // 不自動設置進度，從 0% 開始
    }
  };

  return (
    <div
      className={`bg-app-surface rounded-2xl p-4 border cursor-pointer card-hover group relative ${
        isCompleted
          ? 'bg-app-surface/50 border-white/5'
          : isInProgress
          ? 'border-app-blue/30 shadow-[0_0_15px_rgba(10,132,255,0.05)]'
          : 'border-white/5'
      }`}
      onClick={handleCardClick}
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-3">
        <div
          className={`p-2 rounded-xl bg-gradient-to-br border border-white/5 ${
            isCompleted ? 'from-app-green to-emerald-600' : 'from-gray-700 to-gray-800'
          }`}
          style={
            !isCompleted && task.color
              ? {
                  background: `linear-gradient(to bottom right, ${task.color}, ${task.color}dd)`,
                }
              : {}
          }
        >
          <span className="material-symbols-outlined text-white/80 text-[20px]">
            {task.icon}
          </span>
        </div>
        {isCompleted && (
          <span className="material-symbols-outlined text-app-green text-[18px]">
            check_circle
          </span>
        )}
      </div>

      {/* Title */}
      <h3
        className={`text-[15px] font-semibold mb-1 ${
          isCompleted
            ? 'text-white/80 line-through decoration-white/30'
            : 'text-white'
        }`}
      >
        {task.title}
      </h3>

      {/* Description */}
      {!isCompleted && (
        <p className="text-[13px] text-app-gray-text mb-4 leading-relaxed">
          {task.description}
        </p>
      )}

      {/* Details */}
      {!isCompleted && task.details && task.details.length > 0 && (
        <div className="mb-4 space-y-1">
          {task.details.slice(0, 3).map((detail, index) => (
            <div key={index} className="flex items-start gap-2">
              <span className="text-app-gray-text text-[10px] mt-0.5">•</span>
              <span className="text-[11px] text-app-gray-text">{detail}</span>
            </div>
          ))}
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between mt-4">
        <span
          className="inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-medium border backdrop-blur-sm"
          style={{
            backgroundColor: `${task.color}10`,
            color: task.color,
            borderColor: `${task.color}20`,
          }}
        >
          {task.category}
        </span>
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleProgressClick();
          }}
          className="hover:scale-110 transition-transform"
          disabled={isCompleted}
        >
          <ProgressRing
            progress={task.progress}
            color={task.color}
            showPercentage={task.progress > 0 && !isCompleted}
          />
        </button>
      </div>

      {/* Estimated Hours */}
      {!isCompleted && (
        <div className="mt-3 pt-3 border-t border-white/5">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-app-gray-text text-[14px]">
              schedule
            </span>
            <span className="text-[11px] text-app-gray-text">
              {task.estimatedHours}h estimated
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
