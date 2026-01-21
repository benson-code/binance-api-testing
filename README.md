# Binance QA Learning Tracker 🚀

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/react-18.2.0-61DAFB.svg)
![TypeScript](https://img.shields.io/badge/typescript-5.3.3-3178C6.svg)
![Vite](https://img.shields.io/badge/vite-5.0.8-646CFF.svg)
![Tailwind](https://img.shields.io/badge/tailwindcss-3.3.6-06B6D4.svg)

> **Interactive Roadmap for Binance QA Engineers**  
> 一個專為幣安 QA 工程師面試與入職準備打造的互動式學習追蹤系統。

這個專案是一個現代化的 Kanban 風格任務追蹤器，內建了 **28 天完整學習計畫**，涵蓋 Python/Java 自動化測試、支付系統領域知識、SQL 進階查詢、CI/CD 部署以及行為面試準備。

---

## ✨ 功能亮點 (Features)

### 1. 28 天全棧 QA 學習路徑
- **Week 1: Python 自動化基礎** (環境搭建、Requests、Pytest)
- **Week 2: 支付系統測試實戰** (冪等性、併發、Locust 效能測試)
- **Week 3: Java & DevOps** (RestAssured, TestNG, SQL, Jenkins, GitHub Actions)
- **Week 4: 面試衝刺** (LeetCode, OWASP 安全測試, 行為面試)

### 2. 沉浸式學習體驗
- **Kanban 看板管理**：直觀拖也就是管理學習進度 (Backlog / In Progress / Done)。
- **全屏知識卡片**：每個任務點擊後展開詳細內容，包含：
  - 🎯 **學習目標** (Learning Objectives)
  - 💡 **核心概念** (Core Concepts)
  - 💻 **代碼範例** (Live Code Examples)
  - 📝 **實戰練習** (Exercises)
  - ❓ **高頻面試題** (Interview Tips)

### 3. 現代化 UI/UX 設計
- **Glassmorphism**：採用類似 macOS 的毛玻璃質感設計。
- **Dark Mode**：深色主題，適合長時間閱讀與編程。
- **Responsive**：完美適配桌面與平板 (Surface/iPad) 操作。
- **Progress Tracking**：實時計算學習進度百分比。

---

## 🛠 技術棧 (Tech Stack)

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Material Symbols
- **State Persistence**: LocalStorage (自動保存進度)

---

## 🚀 快速開始 (Quick Start)

### 前置要求
- Node.js 16.0 或更高版本
- npm 或 yarn

### 安裝步驟

1. **克隆專案**
   ```bash
   git clone https://github.com/benson-code/binance-api-testing.git
   cd binance-api-testing
   ```

2. **安裝依賴**
   ```bash
   npm install
   ```

3. **啟動開發服務器**
   ```bash
   npm run dev
   ```
   瀏覽器訪問: `http://localhost:5173`

4. **構建生產版本**
   ```bash
   npm run build
   ```

---

## 📂 專案結構

```
src/
├── components/        # UI 組件 (KanbanColumn, TaskCard, DetailView...)
├── data/             # 學習數據 (detailedLearningPlan.ts - 核心內容)
├── hooks/            # 自定義 Hooks (useLocalStorage)
├── types/            # TypeScript 類型定義
├── App.tsx           # 主應用邏輯
└── index.css         # Tailwind 全局樣式
```

---

## 📚 學習內容預覽

### Day 11: 支付系統測試深度實戰
- 掌握支付狀態機 (Created -> Pending -> Success -> Refunded)
- 測試退款流程與精度損失問題
- Webhook 回調測試策略

### Day 12: 冪等性與併發測試
- 使用 ThreadPoolExecutor 模擬併發雙重支付
- 驗證 Redis 分佈式鎖與資料庫樂觀鎖
- 設計 Idempotency-Key 測試案例

### Day 20: GitHub Actions CI/CD
- 編寫 `.github/workflows/test.yml`
- 實現 Push 代碼自動觸發 Pytest
- 集成 Allure 測試報告

---

## 🤝 貢獻 (Contributing)

歡迎提交 PR 來完善學習內容或優化 UI 功能！

1. Fork 本倉庫
2. 創建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 開啟 Pull Request

---

## 📄 授權 (License)

Distributed under the MIT License. See `LICENSE` for more information.