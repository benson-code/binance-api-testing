import React from 'react';

interface SidebarProps {
  selectedWeek: number | null;
  onWeekSelect: (week: number | null) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ selectedWeek, onWeekSelect }) => {
  const weeks = [
    { id: 1, name: 'Week 1', color: '#0A84FF', subtitle: 'Python Basics' },
    { id: 2, name: 'Week 2', color: '#FF9F0A', subtitle: 'Testing' },
    { id: 3, name: 'Week 3', color: '#FF453A', subtitle: 'Java & SQL' },
    { id: 4, name: 'Week 4', color: '#30D158', subtitle: 'Interview' },
  ];

  return (
    <aside className="w-16 lg:w-48 flex-shrink-0 glass-sidebar flex flex-col z-20">
      {/* Logo */}
      <div className="h-16 flex items-center px-3 lg:px-4 gap-2">
        <div className="bg-gradient-to-br from-app-blue to-app-indigo rounded-lg p-1.5 shadow-glow">
          <span className="material-symbols-outlined text-white text-lg">school</span>
        </div>
        <div className="hidden lg:flex flex-col">
          <h1 className="text-sm font-semibold tracking-tight text-white">Binance QA</h1>
          <p className="text-[10px] text-app-gray-text">Learning Tracker</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-2 lg:px-3 py-4 flex flex-col gap-1 overflow-y-auto">
        <p className="hidden lg:block px-2 mb-1 text-[10px] font-semibold uppercase tracking-wider text-app-gray-text opacity-60">
          My Space
        </p>
        <button
          onClick={() => onWeekSelect(null)}
          className={`flex items-center justify-center lg:justify-start gap-2 px-2 py-2 rounded-lg transition-colors ${
            selectedWeek === null
              ? 'bg-white/10 text-white backdrop-blur-sm shadow-sm border border-white/5'
              : 'text-app-gray-text hover:text-white hover:bg-white/5'
          }`}
        >
          <span
            className="material-symbols-outlined text-[18px]"
            style={{ fontVariationSettings: selectedWeek === null ? "'FILL' 1" : "'FILL' 0" }}
          >
            view_kanban
          </span>
          <span className="hidden lg:block text-[13px] font-medium">All Tasks</span>
        </button>

        {/* Week Filters */}
        <div className="hidden lg:block mt-6 px-2 mb-1">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-app-gray-text opacity-60">
            Weeks
          </p>
        </div>
        <div className="lg:hidden mt-4 h-px bg-white/10"></div>
        {weeks.map((week) => (
          <button
            key={week.id}
            onClick={() => onWeekSelect(week.id)}
            className={`flex items-center justify-center lg:justify-start gap-2 px-2 py-2 rounded-lg transition-colors w-full ${
              selectedWeek === week.id
                ? 'bg-white/10 text-white'
                : 'text-app-gray-text hover:text-white hover:bg-white/5'
            }`}
          >
            <span
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{
                backgroundColor: week.color,
                boxShadow: `0 0 8px ${week.color}80`,
              }}
            ></span>
            <div className="hidden lg:flex flex-col items-start flex-1">
              <span className="text-[13px] font-medium">{week.name}</span>
              <span className="text-[10px] text-app-gray-text">{week.subtitle}</span>
            </div>
          </button>
        ))}
      </nav>

      {/* User Profile */}
      <div className="p-2 lg:p-3 border-t border-white/5 bg-black/20">
        <div className="flex items-center justify-center lg:justify-start gap-2">
          <div className="size-8 rounded-full bg-gradient-to-br from-app-blue to-app-indigo flex items-center justify-center border border-white/10">
            <span className="material-symbols-outlined text-white text-[18px]">person</span>
          </div>
          <div className="hidden lg:flex flex-col">
            <p className="text-[12px] font-medium text-white">QA Learner</p>
            <p className="text-[10px] text-app-gray-text">4 Week Sprint</p>
          </div>
        </div>
      </div>
    </aside>
  );
};
