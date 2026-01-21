import React from 'react';
import { Task } from '../types';
import { DetailedTaskCard } from './DetailedTaskCard';

interface KanbanColumnProps {
  title: string;
  tasks: Task[];
  count: number;
  color?: string;
  onStatusChange: (taskId: string, newStatus: 'backlog' | 'in-progress' | 'completed') => void;
  onProgressChange: (taskId: string, progress: number) => void;
  onOpenDetail?: (task: Task) => void;
}

export const KanbanColumn: React.FC<KanbanColumnProps> = ({
  title,
  tasks,
  count,
  onStatusChange,
  onProgressChange,
  onOpenDetail,
}) => {
  const isInProgress = title === 'In Learning';
  const isMastered = title === 'Completed';

  return (
    <div className="w-72 lg:w-80 flex flex-col gap-3 flex-shrink-0">
      {/* Column Header */}
      <div className="flex items-center justify-between px-2">
        <div className="flex items-center gap-2">
          <span
            className={`text-sm font-semibold ${
              isMastered ? 'text-app-gray-text' : isInProgress ? 'text-white' : 'text-app-gray-text'
            }`}
          >
            {title}
          </span>
          <span
            className={`px-2 py-0.5 rounded-full text-[11px] font-medium border ${
              isMastered
                ? 'bg-app-green/10 text-app-green border-app-green/10'
                : isInProgress
                ? 'bg-app-blue/20 text-app-blue border-app-blue/20'
                : 'bg-white/5 text-app-gray-text border-white/5'
            }`}
          >
            {count}
          </span>
        </div>
      </div>

      {/* Column Content */}
      <div
        className={`flex-1 rounded-3xl glass-panel p-3 flex flex-col gap-3 overflow-y-auto ${
          isInProgress ? 'ring-1 ring-app-blue/10 bg-app-blue/5' : ''
        }`}
      >
        {tasks.length === 0 ? (
          <div className="flex items-center justify-center h-32 text-app-gray-text text-sm">
            No tasks yet
          </div>
        ) : (
          tasks.map((task) => (
            <DetailedTaskCard
              key={task.id}
              task={task}
              onStatusChange={onStatusChange}
              onProgressChange={onProgressChange}
              onOpenDetail={onOpenDetail}
            />
          ))
        )}
      </div>
    </div>
  );
};
