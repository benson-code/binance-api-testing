import React, { useState } from 'react';
import { Task } from '../types';

interface DetailViewProps {
  task: Task;
  onClose: () => void;
  onProgressChange: (taskId: string, progress: number) => void;
  onStatusChange: (taskId: string, newStatus: 'backlog' | 'in-progress' | 'completed') => void;
}

export const DetailView: React.FC<DetailViewProps> = ({ task, onClose, onProgressChange, onStatusChange }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'code' | 'exercises' | 'tips'>('overview');

  const handleProgressUpdate = () => {
    const newProgress = (task.progress + 25) % 125;
    onProgressChange(task.id, newProgress);

    if (newProgress === 100 && task.status !== 'completed') {
      onStatusChange(task.id, 'completed');
    } else if (newProgress > 0 && task.status === 'backlog') {
      onStatusChange(task.id, 'in-progress');
    }
  };

  const handleStartLearning = () => {
    if (task.status === 'backlog') {
      onStatusChange(task.id, 'in-progress');
      onProgressChange(task.id, 25);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fadeIn">
      {/* Main Content Container */}
      <div className="w-full h-full max-w-5xl mx-auto flex flex-col bg-app-bg/95 backdrop-blur-xl shadow-2xl animate-slideUp overflow-hidden">

        {/* Header */}
        <div className="flex-shrink-0 border-b border-white/10 bg-black/20">
          <div className="px-4 lg:px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <button
                onClick={onClose}
                className="flex items-center justify-center size-9 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-105 active:scale-95"
              >
                <span className="material-symbols-outlined text-xl">close</span>
              </button>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-medium text-app-gray-text">{task.day}</span>
                  <span className="w-1 h-1 rounded-full bg-app-gray-text/50"></span>
                  <span className="text-xs font-medium" style={{ color: task.color }}>{task.category}</span>
                </div>
                <h2 className="text-xl lg:text-2xl font-bold text-white truncate">{task.title}</h2>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-2 ml-4">
              <button
                onClick={handleProgressUpdate}
                className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg bg-app-blue/20 text-app-blue hover:bg-app-blue/30 transition-all"
              >
                <span className="material-symbols-outlined text-lg">check_circle</span>
                <span className="text-sm font-medium">{task.progress}%</span>
              </button>

              {task.status === 'backlog' && (
                <button
                  onClick={handleStartLearning}
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-app-blue to-app-indigo text-white font-medium text-sm hover:scale-105 transition-all shadow-lg"
                >
                  Start Learning
                </button>
              )}
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="px-4 lg:px-6 flex gap-1 overflow-x-auto scrollbar-hide">
            {[
              { id: 'overview', label: 'Overview', icon: 'overview' },
              { id: 'code', label: 'Code Examples', icon: 'code' },
              { id: 'exercises', label: 'Exercises', icon: 'fitness_center' },
              { id: 'tips', label: 'Interview Tips', icon: 'lightbulb' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'text-white border-b-2 border-app-blue'
                    : 'text-app-gray-text hover:text-white'
                }`}
              >
                <span className="material-symbols-outlined text-lg">{tab.icon}</span>
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto px-4 lg:px-6 py-6">
          {activeTab === 'overview' && (
            <div className="max-w-4xl mx-auto space-y-6">
              {/* Description */}
              <div className="glass-panel p-5 rounded-2xl">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <span className="material-symbols-outlined text-app-blue">description</span>
                  Description
                </h3>
                <p className="text-app-gray-text leading-relaxed">{task.description}</p>
              </div>

              {/* Learning Objectives */}
              {task.learningObjectives && task.learningObjectives.length > 0 && (
                <div className="glass-panel p-5 rounded-2xl">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-app-green">task_alt</span>
                    Learning Objectives
                  </h3>
                  <ul className="space-y-2">
                    {task.learningObjectives.map((objective, index) => (
                      <li key={index} className="flex items-start gap-3 text-app-gray-text">
                        <span className="material-symbols-outlined text-app-green text-lg mt-0.5">check_circle</span>
                        <span className="flex-1">{objective}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Core Concepts */}
              {task.coreConcepts && task.coreConcepts.length > 0 && (
                <div className="glass-panel p-5 rounded-2xl">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-app-yellow">school</span>
                    Core Concepts
                  </h3>
                  <div className="space-y-4">
                    {task.coreConcepts.map((concept, index) => (
                      <div key={index} className="border-l-2 border-app-blue/50 pl-4">
                        <h4 className="text-white font-semibold mb-1">{concept.term}</h4>
                        <p className="text-app-gray-text text-sm mb-2">{concept.definition}</p>
                        {concept.example && (
                          <div className="bg-black/30 rounded-lg p-3 mt-2">
                            <p className="text-xs text-app-gray-text mb-1">Example:</p>
                            <code className="text-app-blue text-sm">{concept.example}</code>
                          </div>
                        )}
                        <span className={`inline-block mt-2 px-2 py-1 rounded text-xs ${
                          concept.importance === 'critical' ? 'bg-app-red/20 text-app-red' :
                          concept.importance === 'important' ? 'bg-app-yellow/20 text-app-yellow' :
                          'bg-app-gray-text/20 text-app-gray-text'
                        }`}>
                          {concept.importance}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Knowledge Points */}
              {task.knowledgePoints && task.knowledgePoints.length > 0 && (
                <div className="glass-panel p-5 rounded-2xl">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-app-indigo">menu_book</span>
                    Knowledge Points
                  </h3>
                  <div className="space-y-5">
                    {task.knowledgePoints.map((point, index) => (
                      <div key={index} className="space-y-2">
                        <h4 className="text-white font-medium">{point.title}</h4>
                        <p className="text-app-gray-text text-sm whitespace-pre-line">{point.content}</p>
                        {point.codeExample && (
                          <div className="bg-black/40 rounded-lg p-4 mt-3 overflow-x-auto">
                            <pre className="text-sm text-app-green font-mono">{point.codeExample}</pre>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Estimated Hours */}
              <div className="glass-panel p-5 rounded-2xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-app-blue text-2xl">schedule</span>
                  <div>
                    <p className="text-white font-semibold">Estimated Time</p>
                    <p className="text-app-gray-text text-sm">Dedicated learning time</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-app-blue">{task.estimatedHours}</p>
                  <p className="text-app-gray-text text-sm">hours</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'code' && (
            <div className="max-w-4xl mx-auto space-y-5">
              {task.codeExamples && task.codeExamples.length > 0 ? (
                task.codeExamples.map((example, index) => (
                  <div key={index} className="glass-panel p-5 rounded-2xl">
                    <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="material-symbols-outlined text-app-blue">code</span>
                      {example.title}
                    </h3>
                    <p className="text-app-gray-text text-sm mb-4">{example.explanation}</p>
                    <div className="bg-black/60 rounded-lg p-4 overflow-x-auto">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-app-gray-text uppercase">{example.language}</span>
                      </div>
                      <pre className="text-sm text-app-green font-mono leading-relaxed">{example.code}</pre>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-12 text-app-gray-text">
                  <span className="material-symbols-outlined text-5xl mb-3">code_off</span>
                  <p>No code examples available for this task</p>
                </div>
              )}
            </div>
          )}

          {activeTab === 'exercises' && (
            <div className="max-w-4xl mx-auto space-y-4">
              {task.exercises && task.exercises.length > 0 ? (
                task.exercises.map((exercise, index) => (
                  <div key={index} className="glass-panel p-5 rounded-2xl">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-white font-semibold flex items-center gap-2">
                        <span className="material-symbols-outlined text-app-yellow">fitness_center</span>
                        Exercise {index + 1}: {exercise.title}
                      </h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        exercise.difficulty === 'easy' ? 'bg-app-green/20 text-app-green' :
                        exercise.difficulty === 'medium' ? 'bg-app-yellow/20 text-app-yellow' :
                        'bg-app-red/20 text-app-red'
                      }`}>
                        {exercise.difficulty}
                      </span>
                    </div>
                    <p className="text-app-gray-text mb-4">{exercise.description}</p>
                    {exercise.solution && (
                      <details className="mt-3">
                        <summary className="cursor-pointer text-app-blue hover:text-app-blue/80 text-sm font-medium">
                          View Solution
                        </summary>
                        <div className="bg-black/40 rounded-lg p-4 mt-2">
                          <pre className="text-sm text-app-green font-mono whitespace-pre-wrap">{exercise.solution}</pre>
                        </div>
                      </details>
                    )}
                  </div>
                ))
              ) : (
                <div className="text-center py-12 text-app-gray-text">
                  <span className="material-symbols-outlined text-5xl mb-3">assignment</span>
                  <p>No exercises available for this task</p>
                </div>
              )}
            </div>
          )}

          {activeTab === 'tips' && (
            <div className="max-w-4xl mx-auto space-y-4">
              {task.interviewTips && task.interviewTips.length > 0 ? (
                task.interviewTips.map((tip, index) => (
                  <div key={index} className="glass-panel p-5 rounded-2xl">
                    <div className="flex items-start gap-3 mb-3">
                      <span className={`material-symbols-outlined text-2xl ${
                        tip.priority === 'high' ? 'text-app-red' :
                        tip.priority === 'medium' ? 'text-app-yellow' :
                        'text-app-gray-text'
                      }`}>
                        {tip.priority === 'high' ? 'priority_high' : 'lightbulb'}
                      </span>
                      <div className="flex-1">
                        <h3 className="text-white font-semibold mb-2">{tip.question}</h3>
                        <p className="text-app-gray-text leading-relaxed">{tip.answer}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                        tip.priority === 'high' ? 'bg-app-red/20 text-app-red' :
                        tip.priority === 'medium' ? 'bg-app-yellow/20 text-app-yellow' :
                        'bg-app-gray-text/20 text-app-gray-text'
                      }`}>
                        {tip.priority}
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-12 text-app-gray-text">
                  <span className="material-symbols-outlined text-5xl mb-3">tips_and_updates</span>
                  <p>No interview tips available for this task</p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex-shrink-0 border-t border-white/10 bg-black/20 px-4 lg:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={handleProgressUpdate}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-app-blue/20 text-app-blue hover:bg-app-blue hover:text-white transition-all"
              >
                <span className="material-symbols-outlined">add_task</span>
                <span className="font-medium">Mark Progress ({task.progress}%)</span>
              </button>
            </div>

            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-all font-medium"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
