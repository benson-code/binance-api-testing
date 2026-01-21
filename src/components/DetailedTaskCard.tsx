import React, { useState } from 'react';
import { Task } from '../types';
import { ProgressRing } from './ProgressRing';

interface DetailedTaskCardProps {
  task: Task;
  onStatusChange: (taskId: string, newStatus: 'backlog' | 'in-progress' | 'completed') => void;
  onProgressChange: (taskId: string, progress: number) => void;
  onOpenDetail?: (task: Task) => void;
}

export const DetailedTaskCard: React.FC<DetailedTaskCardProps> = ({
  task,
  onStatusChange,
  onProgressChange,
  onOpenDetail,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'knowledge' | 'code' | 'exercises' | 'interview'>('overview');

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
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-3" onClick={handleCardClick}>
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
        onClick={handleCardClick}
      >
        {task.title}
      </h3>

      {/* Description */}
      {!isCompleted && (
        <p className="text-[13px] text-app-gray-text mb-3 leading-relaxed" onClick={handleCardClick}>
          {task.description}
        </p>
      )}

      {/* Action Buttons */}
      {!isCompleted && (
        <div className="flex gap-2 mb-3">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(!isExpanded);
            }}
            className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 transition-colors text-[12px] text-app-gray-text hover:text-white"
          >
            <span className="material-symbols-outlined text-[16px]">
              {isExpanded ? 'expand_less' : 'expand_more'}
            </span>
            <span className="hidden sm:inline">{isExpanded ? '收起' : '預覽'}</span>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenDetail?.(task);
            }}
            className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-gradient-to-r from-app-blue/20 to-app-indigo/20 hover:from-app-blue/30 hover:to-app-indigo/30 border border-app-blue/30 transition-all text-[12px] text-app-blue hover:text-white font-medium"
          >
            <span className="material-symbols-outlined text-[16px]">open_in_full</span>
            <span className="hidden sm:inline">全屏查看</span>
          </button>
        </div>
      )}

      {/* Expanded Content */}
      {isExpanded && !isCompleted && (
        <div className="mb-4 rounded-xl bg-black/20 border border-white/5 overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b border-white/5 bg-white/5">
            <button
              onClick={() => setActiveTab('overview')}
              className={`flex-1 px-3 py-2 text-[11px] font-medium transition-colors ${
                activeTab === 'overview'
                  ? 'text-app-blue bg-app-blue/10 border-b-2 border-app-blue'
                  : 'text-app-gray-text hover:text-white'
              }`}
            >
              概覽
            </button>
            <button
              onClick={() => setActiveTab('knowledge')}
              className={`flex-1 px-3 py-2 text-[11px] font-medium transition-colors ${
                activeTab === 'knowledge'
                  ? 'text-app-blue bg-app-blue/10 border-b-2 border-app-blue'
                  : 'text-app-gray-text hover:text-white'
              }`}
            >
              知識點 ({task.knowledgePoints?.length || 0})
            </button>
            <button
              onClick={() => setActiveTab('code')}
              className={`flex-1 px-3 py-2 text-[11px] font-medium transition-colors ${
                activeTab === 'code'
                  ? 'text-app-blue bg-app-blue/10 border-b-2 border-app-blue'
                  : 'text-app-gray-text hover:text-white'
              }`}
            >
              程式碼 ({task.codeExamples?.length || 0})
            </button>
            <button
              onClick={() => setActiveTab('exercises')}
              className={`flex-1 px-3 py-2 text-[11px] font-medium transition-colors ${
                activeTab === 'exercises'
                  ? 'text-app-blue bg-app-blue/10 border-b-2 border-app-blue'
                  : 'text-app-gray-text hover:text-white'
              }`}
            >
              練習 ({task.exercises?.length || 0})
            </button>
            <button
              onClick={() => setActiveTab('interview')}
              className={`flex-1 px-3 py-2 text-[11px] font-medium transition-colors ${
                activeTab === 'interview'
                  ? 'text-app-blue bg-app-blue/10 border-b-2 border-app-blue'
                  : 'text-app-gray-text hover:text-white'
              }`}
            >
              面試 ({task.interviewTips?.length || 0})
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-4 max-h-96 overflow-y-auto">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-4">
                {/* Learning Objectives */}
                <div>
                  <h4 className="text-[12px] font-semibold text-white mb-2">🎯 學習目標</h4>
                  <ul className="space-y-1">
                    {task.learningObjectives?.map((obj, i) => (
                      <li key={i} className="text-[11px] text-app-gray-text leading-relaxed">
                        {obj}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Core Concepts */}
                {task.coreConcepts && task.coreConcepts.length > 0 && (
                  <div>
                    <h4 className="text-[12px] font-semibold text-white mb-2">💡 核心概念</h4>
                    <div className="space-y-2">
                      {task.coreConcepts.map((concept, i) => (
                        <div key={i} className="bg-white/5 rounded-lg p-2">
                          <div className="flex items-center gap-2 mb-1">
                            <span
                              className={`text-[9px] px-1.5 py-0.5 rounded ${
                                concept.importance === 'critical'
                                  ? 'bg-app-red/20 text-app-red'
                                  : concept.importance === 'important'
                                  ? 'bg-app-orange/20 text-app-orange'
                                  : 'bg-white/10 text-app-gray-text'
                              }`}
                            >
                              {concept.importance === 'critical' ? '必學' : concept.importance === 'important' ? '重要' : '加分'}
                            </span>
                            <h5 className="text-[11px] font-semibold text-white">{concept.term}</h5>
                          </div>
                          <p className="text-[10px] text-app-gray-text leading-relaxed">{concept.definition}</p>
                          {concept.example && (
                            <pre className="mt-1 text-[9px] text-app-blue bg-black/30 rounded p-1 overflow-x-auto">
                              {concept.example}
                            </pre>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Knowledge Points Tab */}
            {activeTab === 'knowledge' && (
              <div className="space-y-3">
                {task.knowledgePoints?.map((kp, i) => (
                  <div key={i} className="bg-white/5 rounded-lg p-3">
                    <h4 className="text-[12px] font-semibold text-white mb-2">{kp.title}</h4>
                    <p className="text-[11px] text-app-gray-text leading-relaxed whitespace-pre-line mb-2">
                      {kp.content}
                    </p>
                    {kp.codeExample && (
                      <pre className="text-[10px] text-app-blue bg-black/50 rounded-lg p-2 overflow-x-auto">
                        {kp.codeExample}
                      </pre>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Code Examples Tab */}
            {activeTab === 'code' && (
              <div className="space-y-3">
                {task.codeExamples?.map((example, i) => (
                  <div key={i} className="bg-white/5 rounded-lg p-3">
                    <h4 className="text-[12px] font-semibold text-white mb-2">{example.title}</h4>
                    <pre className="text-[10px] text-app-green bg-black/50 rounded-lg p-2 overflow-x-auto mb-2">
                      {example.code}
                    </pre>
                    <p className="text-[10px] text-app-gray-text leading-relaxed">{example.explanation}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Exercises Tab */}
            {activeTab === 'exercises' && (
              <div className="space-y-2">
                {task.exercises?.map((ex, i) => (
                  <div key={i} className="bg-white/5 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-[11px] font-semibold text-white">{ex.title}</h4>
                      <span
                        className={`text-[9px] px-2 py-0.5 rounded ${
                          ex.difficulty === 'hard'
                            ? 'bg-app-red/20 text-app-red'
                            : ex.difficulty === 'medium'
                            ? 'bg-app-orange/20 text-app-orange'
                            : 'bg-app-green/20 text-app-green'
                        }`}
                      >
                        {ex.difficulty === 'hard' ? '困難' : ex.difficulty === 'medium' ? '中等' : '簡單'}
                      </span>
                    </div>
                    <p className="text-[10px] text-app-gray-text">{ex.description}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Interview Tips Tab */}
            {activeTab === 'interview' && (
              <div className="space-y-3">
                {task.interviewTips?.map((tip, i) => (
                  <div key={i} className="bg-white/5 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className={`text-[9px] px-2 py-0.5 rounded ${
                          tip.priority === 'high'
                            ? 'bg-app-red/20 text-app-red'
                            : tip.priority === 'medium'
                            ? 'bg-app-orange/20 text-app-orange'
                            : 'bg-white/10 text-app-gray-text'
                        }`}
                      >
                        {tip.priority === 'high' ? '高頻' : tip.priority === 'medium' ? '常見' : '加分'}
                      </span>
                      <h4 className="text-[11px] font-semibold text-white">{tip.question}</h4>
                    </div>
                    <p className="text-[10px] text-app-gray-text leading-relaxed">{tip.answer}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between mt-3">
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
              {task.estimatedHours}h estimated • {task.learningObjectives?.length || 0} 個目標
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
