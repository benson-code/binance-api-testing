import { Task } from '../types';

export const learningTasks: Task[] = [
  // Week 1: Python 從零到自動化
  {
    id: 'day1',
    title: 'Day 1: Python 環境 + 基礎',
    description: '完成 Python 環境設置、基礎語法學習，完成 20 個編程練習',
    week: 1,
    day: 'Day 1',
    category: 'Python',
    icon: 'code',
    status: 'backlog',
    progress: 0,
    color: '#0A84FF',
    details: [
      '安裝 Python、VSCode、pytest',
      '學習變量、數據類型、輸入輸出',
      '掌握字串操作、列表、字典',
      '完成 20 個編程練習'
    ],
    estimatedHours: 10
  },
  {
    id: 'day2',
    title: 'Day 2: Python 進階語法',
    description: '條件判斷進階、異常處理、HTTP 基礎概念，完成 15 個練習',
    week: 1,
    day: 'Day 2',
    category: 'Python',
    icon: 'psychology',
    status: 'backlog',
    progress: 0,
    color: '#0A84FF',
    details: [
      '條件判斷進階 (if-elif-else)',
      '異常處理 (try-except)',
      'HTTP 基礎概念',
      '完成 15 個進階練習'
    ],
    estimatedHours: 10
  },
  {
    id: 'day3',
    title: 'Day 3: 類別 + 支付概念',
    description: '學習 Python 類別、物件導向、支付系統核心概念',
    week: 1,
    day: 'Day 3',
    category: 'Python',
    icon: 'account_tree',
    status: 'backlog',
    progress: 0,
    color: '#0A84FF',
    details: [
      '類別 (Class) 定義',
      '物件導向概念',
      '支付系統核心概念 (冪等性)',
      '完成 10 個練習'
    ],
    estimatedHours: 10
  },
  {
    id: 'day4',
    title: 'Day 4: HTTP + Requests',
    description: '理解 REST API，使用 Requests 庫發送請求',
    week: 1,
    day: 'Day 4',
    category: 'API Testing',
    icon: 'http',
    status: 'backlog',
    progress: 0,
    color: '#30D158',
    details: [
      '理解 REST API',
      '使用 Requests 發送 GET/POST',
      '解析 JSON 響應',
      '編寫第一個 API 測試'
    ],
    estimatedHours: 10
  },
  {
    id: 'day5',
    title: 'Day 5: pytest 框架',
    description: 'pytest 基本用法、測試函數與斷言、參數化測試',
    week: 1,
    day: 'Day 5',
    category: 'Testing',
    icon: 'science',
    status: 'backlog',
    progress: 0,
    color: '#FF9F0A',
    details: [
      'pytest 基本用法',
      '測試函數與斷言',
      '參數化測試',
      'fixture 基礎'
    ],
    estimatedHours: 10
  },
  {
    id: 'day6',
    title: 'Day 6: 建立測試框架',
    description: '建立完整的測試框架結構，配置 conftest.py',
    week: 1,
    day: 'Day 6',
    category: 'Testing',
    icon: 'folder_open',
    status: 'backlog',
    progress: 0,
    color: '#FF9F0A',
    details: [
      'conftest.py 配置',
      '測試數據管理',
      '測試報告生成',
      '建立 GitHub 專案'
    ],
    estimatedHours: 10
  },
  {
    id: 'day7',
    title: 'Day 7: 完善測試專案',
    description: '增加測試覆蓋率、代碼重構、文檔撰寫',
    week: 1,
    day: 'Day 7',
    category: 'Testing',
    icon: 'task_alt',
    status: 'backlog',
    progress: 0,
    color: '#FF9F0A',
    details: [
      '增加測試覆蓋率',
      '代碼重構',
      '文檔撰寫',
      '準備展示'
    ],
    estimatedHours: 10
  },

  // Week 2: 深化 Python + 完整專案
  {
    id: 'day8-10',
    title: 'Day 8-10: pytest 進階',
    description: 'Fixtures 作用域、參數化 fixtures、Markers 使用',
    week: 2,
    day: 'Day 8-10',
    category: 'Testing',
    icon: 'extension',
    status: 'backlog',
    progress: 0,
    color: '#FF9F0A',
    details: [
      'Fixtures 作用域',
      '參數化 fixtures',
      'Markers 使用',
      '測試組織與管理'
    ],
    estimatedHours: 30
  },
  {
    id: 'day11-14',
    title: 'Day 11-14: 支付系統測試',
    description: '完整的支付系統 API 測試專案',
    week: 2,
    day: 'Day 11-14',
    category: 'Payment',
    icon: 'payments',
    status: 'backlog',
    progress: 0,
    color: '#30D158',
    details: [
      '支付流程測試',
      '冪等性測試',
      '併發測試',
      '性能測試基礎'
    ],
    estimatedHours: 40
  },

  // Week 3: Java + SQL + CI/CD
  {
    id: 'day15-17',
    title: 'Day 15-17: Java + RestAssured',
    description: 'Java 基礎語法、RestAssured given-when-then',
    week: 3,
    day: 'Day 15-17',
    category: 'Java',
    icon: 'coffee',
    status: 'backlog',
    progress: 0,
    color: '#FF453A',
    details: [
      'Java 基礎語法',
      'RestAssured given-when-then',
      'JSON 驗證',
      'TestNG 框架'
    ],
    estimatedHours: 30
  },
  {
    id: 'day18-19',
    title: 'Day 18-19: SQL 進階',
    description: '複雜查詢、數據驗證、性能優化基礎',
    week: 3,
    day: 'Day 18-19',
    category: 'Database',
    icon: 'storage',
    status: 'backlog',
    progress: 0,
    color: '#5E5CE6',
    details: [
      '複雜查詢 (JOIN、GROUP BY)',
      '數據驗證',
      '性能優化基礎',
      'LeetCode SQL 題'
    ],
    estimatedHours: 20
  },
  {
    id: 'day20-21',
    title: 'Day 20-21: CI/CD 實戰',
    description: 'Git 基礎、GitHub Actions、Jenkins 配置',
    week: 3,
    day: 'Day 20-21',
    category: 'DevOps',
    icon: 'build',
    status: 'backlog',
    progress: 0,
    color: '#30D158',
    details: [
      'Git 基礎',
      'GitHub Actions',
      'Jenkins 配置',
      '自動化測試集成'
    ],
    estimatedHours: 20
  },

  // Week 4: 面試衝刺
  {
    id: 'day22-24',
    title: 'Day 22-24: 編程題實戰',
    description: 'LeetCode Python 基礎題 + SQL 查詢題',
    week: 4,
    day: 'Day 22-24',
    category: 'Interview',
    icon: 'terminal',
    status: 'backlog',
    progress: 0,
    color: '#FF9F0A',
    details: [
      'Python 題目 (Two Sum, Contains Duplicate)',
      'SQL 題目 (JOIN, GROUP BY)',
      'API 場景題',
      '編寫測試案例'
    ],
    estimatedHours: 30
  },
  {
    id: 'day25-26',
    title: 'Day 25-26: 專案優化',
    description: '完善 GitHub 專案、準備專案演示',
    week: 4,
    day: 'Day 25-26',
    category: 'Project',
    icon: 'folder_managed',
    status: 'backlog',
    progress: 0,
    color: '#0A84FF',
    details: [
      '完善 GitHub 專案文檔',
      '準備專案演示',
      '優化代碼質量',
      '撰寫 README'
    ],
    estimatedHours: 20
  },
  {
    id: 'day27-28',
    title: 'Day 27-28: Mock 面試',
    description: '模擬面試、面試技巧、最終準備',
    week: 4,
    day: 'Day 27-28',
    category: 'Interview',
    icon: 'quiz',
    status: 'backlog',
    progress: 0,
    color: '#FF453A',
    details: [
      '第一輪模擬 (專案討論)',
      '第二輪模擬 (現場編程)',
      '面試技巧',
      '最終準備'
    ],
    estimatedHours: 20
  }
];

export const getCategoryColor = (category: string): string => {
  const colors: { [key: string]: string } = {
    'Python': '#0A84FF',
    'API Testing': '#30D158',
    'Testing': '#FF9F0A',
    'Payment': '#30D158',
    'Java': '#FF453A',
    'Database': '#5E5CE6',
    'DevOps': '#30D158',
    'Interview': '#FF9F0A',
    'Project': '#0A84FF'
  };
  return colors[category] || '#8E8E93';
};
