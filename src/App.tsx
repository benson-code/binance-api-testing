import { useState, useMemo } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { KanbanColumn } from './components/KanbanColumn';
import { DetailView } from './components/DetailView';
import { detailedLearningTasks as learningTasks } from './data/detailedLearningPlan';
import { useLocalStorage } from './hooks/useLocalStorage';
import { Task, TaskStatus } from './types';

function App() {
  const [progressState, setProgressState] = useLocalStorage('binance-qa-progress', {});
  const [selectedWeek, setSelectedWeek] = useState<number | null>(null);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  // Merge tasks with saved progress
  const tasks: Task[] = useMemo(() => {
    return learningTasks.map((task) => {
      const savedProgress = progressState[task.id];
      if (savedProgress) {
        return {
          ...task,
          status: savedProgress.status,
          progress: savedProgress.progress,
        };
      }
      return task;
    });
  }, [progressState]);

  // Filter tasks by selected week
  const filteredTasks = useMemo(() => {
    if (selectedWeek === null) return tasks;
    return tasks.filter((task) => task.week === selectedWeek);
  }, [tasks, selectedWeek]);

  // Group tasks by status (移除 Review 區塊)
  const columns = useMemo(() => {
    const backlog = filteredTasks.filter((t) => t.status === 'backlog');
    const inProgress = filteredTasks.filter((t) => t.status === 'in-progress');
    const completed = filteredTasks.filter((t) => t.status === 'completed');

    return [
      { id: 'backlog', title: 'Backlog', tasks: backlog, count: backlog.length },
      {
        id: 'in-progress',
        title: 'In Learning',
        tasks: inProgress,
        count: inProgress.length,
        color: '#0A84FF',
      },
      {
        id: 'completed',
        title: 'Completed',
        tasks: completed,
        count: completed.length,
        color: '#30D158',
      },
    ];
  }, [filteredTasks]);

  const handleStatusChange = (taskId: string, newStatus: TaskStatus) => {
    // Find current task to get its actual progress
    const currentTask = tasks.find(t => t.id === taskId);

    setProgressState({
      ...progressState,
      [taskId]: {
        status: newStatus,
        progress: progressState[taskId]?.progress ?? currentTask?.progress ?? 0,
        completedDate: newStatus === 'completed' ? new Date().toISOString() : undefined,
      },
    });
  };

  const handleProgressChange = (taskId: string, progress: number) => {
    // Find current task to get its actual status
    const currentTask = tasks.find(t => t.id === taskId);

    setProgressState({
      ...progressState,
      [taskId]: {
        status: progressState[taskId]?.status ?? currentTask?.status ?? 'backlog',
        progress,
      },
    });
  };

  const handleResetProgress = () => {
    if (window.confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
      setProgressState({});
    }
  };

  return (
    <div className="text-white font-display h-screen flex overflow-hidden selection:bg-app-blue/30 selection:text-white">
      <Sidebar selectedWeek={selectedWeek} onWeekSelect={setSelectedWeek} />

      <main className="flex-1 flex flex-col relative overflow-hidden bg-app-bg">
        <Header tasks={tasks} />

        {/* Kanban Board */}
        <div className="flex-1 overflow-x-auto overflow-y-hidden p-4 lg:p-6 pt-2">
          <div className="flex h-full gap-4 lg:gap-5 min-w-max pb-4">
            {columns.map((column) => (
              <KanbanColumn
                key={column.id}
                title={column.title}
                tasks={column.tasks}
                count={column.count}
                color={column.color}
                onStatusChange={handleStatusChange}
                onProgressChange={handleProgressChange}
                onOpenDetail={setSelectedTask}
              />
            ))}
          </div>
        </div>

        {/* Floating Action Buttons */}
        <div className="absolute bottom-4 right-4 lg:bottom-6 lg:right-6 z-20 flex flex-col gap-3">
          {/* Reset Button */}
          <button
            onClick={handleResetProgress}
            className="flex items-center justify-center size-10 lg:size-11 bg-app-red/20 text-app-red rounded-full shadow-glass hover:scale-110 active:scale-95 transition-all duration-300 group border border-app-red/30"
            title="Reset all progress"
          >
            <span className="material-symbols-outlined text-xl lg:text-2xl">restart_alt</span>
          </button>

          {/* Info Button */}
          <button
            onClick={() =>
              alert(
                `🎯 Binance QA Learning Tracker\n\n` +
                  `📊 Total Tasks: ${tasks.length}\n` +
                  `✅ Completed: ${tasks.filter((t) => t.status === 'completed').length}\n` +
                  `🔄 In Progress: ${tasks.filter((t) => t.status === 'in-progress').length}\n\n` +
                  `💡 Tips:\n` +
                  `- Click a card to start learning\n` +
                  `- Click the progress ring to update progress\n` +
                  `- Filter by week using the sidebar\n` +
                  `- Your progress is saved automatically`
              )
            }
            className="flex items-center justify-center size-12 lg:size-13 bg-white text-black rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-110 active:scale-95 transition-all duration-300 group"
            title="Help & Info"
          >
            <span className="material-symbols-outlined text-2xl lg:text-3xl">help</span>
          </button>
        </div>
      </main>

      {/* Detail View Modal */}
      {selectedTask && (
        <DetailView
          task={selectedTask}
          onClose={() => setSelectedTask(null)}
          onProgressChange={handleProgressChange}
          onStatusChange={handleStatusChange}
        />
      )}
    </div>
  );
}

export default App;
