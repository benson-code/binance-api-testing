export type TaskStatus = 'backlog' | 'in-progress' | 'completed';

// 知識點項目
export interface KnowledgePoint {
  title: string;
  content: string;
  codeExample?: string;
  language?: string;
}

// 面試重點
export interface InterviewTip {
  question: string;
  answer: string;
  priority: 'high' | 'medium' | 'low';
}

// 實戰練習
export interface Exercise {
  title: string;
  description: string;
  solution?: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

// 核心概念
export interface CoreConcept {
  term: string;
  definition: string;
  example?: string;
  importance: 'critical' | 'important' | 'nice-to-know';
}

export interface Task {
  id: string;
  title: string;
  description: string;
  week: number;
  day: string;
  category: string;
  icon: string;
  status: TaskStatus;
  progress: number;
  color: string;
  estimatedHours: number;              // 預估時數

  // 詳細學習內容（可選）
  details?: string[];                   // 簡化版詳情列表
  learningObjectives?: string[];        // 學習目標
  knowledgePoints?: KnowledgePoint[];   // 知識點
  coreConcepts?: CoreConcept[];         // 核心概念
  codeExamples?: {                      // 程式碼範例
    title: string;
    code: string;
    language: string;
    explanation: string;
  }[];
  exercises?: Exercise[];                // 實戰練習
  interviewTips?: InterviewTip[];       // 面試重點
  resources?: {                          // 學習資源
    type: 'doc' | 'video' | 'article' | 'practice';
    title: string;
    url?: string;
    description: string;
  }[];
  prerequisites?: string[];             // 先修要求
  nextSteps?: string[];                 // 後續學習
}

export interface Column {
  id: TaskStatus;
  title: string;
  tasks: Task[];
  color?: string;
  count: number;
}

export interface ProgressState {
  [taskId: string]: {
    status: TaskStatus;
    progress: number;
    completedDate?: string;
    notes?: string;                    // 學習筆記
    completedExercises?: string[];    // 完成的練習
  };
}
