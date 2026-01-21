import React, { useState } from 'react';
import { Task } from '../types';

interface HeaderProps {
  tasks: Task[];
}

export const Header: React.FC<HeaderProps> = ({ tasks }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const completedTasks = tasks.filter((t) => t.status === 'completed').length;
  const totalTasks = tasks.length;
  const completionRate = Math.round((completedTasks / totalTasks) * 100);

  return (
    <header className="flex items-center justify-between px-4 lg:px-6 py-3 z-10">
      {/* Search */}
      <div className="flex-1 max-w-sm lg:max-w-md">
        <label className="relative flex items-center w-full group">
          <span className="absolute left-3 text-app-gray-text material-symbols-outlined text-[18px]">
            search
          </span>
          <input
            className="w-full bg-app-surface/60 backdrop-blur-md border border-white/5 rounded-lg py-2 pl-9 pr-3 text-sm text-white placeholder-app-gray-text focus:ring-2 focus:ring-app-blue/50 focus:border-transparent focus:bg-app-surface transition-all shadow-lg"
            placeholder="Search tasks..."
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </label>
      </div>

      {/* Stats */}
      <div className="flex items-center gap-3 lg:gap-4">
        {/* Progress Stats */}
        <div className="hidden md:flex items-center gap-3 px-3 py-1.5 rounded-lg bg-white/5 border border-white/5">
          <div className="flex flex-col">
            <span className="text-[10px] text-app-gray-text">Progress</span>
            <span className="text-[13px] font-semibold text-white">
              {completedTasks}/{totalTasks}
            </span>
          </div>
          <div className="w-20 h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-app-blue to-app-green transition-all duration-500"
              style={{ width: `${completionRate}%` }}
            ></div>
          </div>
          <span className="text-[13px] font-semibold text-app-blue">{completionRate}%</span>
        </div>

        {/* Notifications */}
        <button className="relative p-2 rounded-full text-app-gray-text hover:text-white hover:bg-white/10 transition-colors">
          <span className="material-symbols-outlined text-[20px]">notifications</span>
          {completedTasks > 0 && (
            <span className="absolute top-1.5 right-1.5 size-2 bg-app-green rounded-full border border-black shadow-sm"></span>
          )}
        </button>
      </div>
    </header>
  );
};
