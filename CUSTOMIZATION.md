# 🎨 Customization Guide

## 📝 Adding Your Own Tasks

Edit `src/data/learningPlan.ts`:

```typescript
export const learningTasks: Task[] = [
  // ... existing tasks
  {
    id: 'my-custom-task',           // Unique ID
    title: 'My Custom Learning Task', // Display title
    description: 'What I will learn',  // Short description
    week: 1,                          // Week number (1-4)
    day: 'Day X',                     // Day label
    category: 'Python',               // Category name
    icon: 'code',                     // Material icon name
    status: 'backlog',                // Initial status
    progress: 0,                      // Initial progress (0-100)
    color: '#0A84FF',                 // Hex color
    details: [                        // Task details (shown on card)
      'Learn concept A',
      'Practice with B',
      'Build project C'
    ],
    estimatedHours: 10                // Time estimate
  }
];
```

## 🎨 Color Palette

Available colors (in `tailwind.config.js`):

```javascript
colors: {
  "app-blue": "#0A84FF",     // Primary blue
  "app-green": "#30D158",    // Success green
  "app-indigo": "#5E5CE6",   // Purple/Indigo
  "app-orange": "#FF9F0A",   // Warning orange
  "app-red": "#FF453A",      // Error red
  "app-gray-text": "#8E8E93" // Secondary text
}
```

## 🔤 Material Icons

Choose from [Material Symbols](https://fonts.google.com/icons):

Popular icons for learning tasks:
- `code` - Programming
- `science` - Testing
- `storage` - Database
- `http` - API
- `terminal` - Command line
- `school` - Learning
- `quiz` - Assessment
- `build` - DevOps
- `psychology` - Advanced topics
- `integration_instructions` - Integration

## 📂 Categories

Default categories with colors:

```typescript
{
  'Python': '#0A84FF',       // Blue
  'API Testing': '#30D158',  // Green
  'Testing': '#FF9F0A',      // Orange
  'Payment': '#30D158',      // Green
  'Java': '#FF453A',         // Red
  'Database': '#5E5CE6',     // Indigo
  'DevOps': '#30D158',       // Green
  'Interview': '#FF9F0A',    // Orange
  'Project': '#0A84FF'       // Blue
}
```

Add your own in `src/data/learningPlan.ts`:

```typescript
export const getCategoryColor = (category: string): string => {
  const colors: { [key: string]: string } = {
    // ... existing colors
    'MyCategory': '#FF00FF', // Your custom color
  };
  return colors[category] || '#8E8E93';
};
```

## 📅 Changing Week Names

Edit `src/components/Sidebar.tsx`:

```typescript
const weeks = [
  { id: 1, name: 'Week 1', color: '#0A84FF', subtitle: 'Your Topic' },
  { id: 2, name: 'Week 2', color: '#FF9F0A', subtitle: 'Another Topic' },
  // ... more weeks
];
```

## 🎯 Modifying Progress Increments

Default is 25% per click. To change, edit `src/components/TaskCard.tsx`:

```typescript
const handleProgressClick = () => {
  if (task.status === 'completed') return;

  const newProgress = task.progress + 25;  // Change this number!
  // ...
};
```

## 🔄 Adding More Status Columns

1. Update `src/types.ts`:
```typescript
export type TaskStatus = 'backlog' | 'in-progress' | 'review' | 'completed' | 'on-hold';
```

2. Update `src/App.tsx`:
```typescript
const columns = useMemo(() => {
  // ... existing columns
  const onHold = filteredTasks.filter((t) => t.status === 'on-hold');

  return [
    // ... existing columns
    { id: 'on-hold', title: 'On Hold', tasks: onHold, count: onHold.length }
  ];
}, [filteredTasks]);
```

## 🌈 Custom Theme Colors

Edit `tailwind.config.js` to change the entire color scheme:

```javascript
extend: {
  colors: {
    "app-bg": "#YOUR_BG_COLOR",
    "app-surface": "#YOUR_SURFACE_COLOR",
    "app-blue": "#YOUR_PRIMARY_COLOR",
    // ... etc
  }
}
```

## 📱 Changing App Name

1. **Browser Title**: Edit `index.html`
```html
<title>Your App Name</title>
```

2. **Sidebar Logo**: Edit `src/components/Sidebar.tsx`
```tsx
<h1 className="text-base font-semibold tracking-tight text-white">
  Your App Name
</h1>
```

## 💾 LocalStorage Key

Change where progress is saved (in `src/App.tsx`):

```typescript
const [progressState, setProgressState] = useLocalStorage(
  'your-custom-key',  // Change this!
  {}
);
```

## 🎨 Custom Styling

Add custom styles in `src/index.css`:

```css
/* Your custom styles */
.my-custom-class {
  /* ... */
}
```

## 📊 Adding Task Metadata

Extend the `Task` type in `src/types.ts`:

```typescript
export interface Task {
  // ... existing fields
  priority?: 'high' | 'medium' | 'low';
  tags?: string[];
  resources?: string[];
  notes?: string;
}
```

Then update task cards to display new fields!

## 🔧 Advanced: Changing Layout

- **Column Width**: Edit `src/components/KanbanColumn.tsx`
  ```tsx
  <div className="w-80"> // Change w-80 to w-96, w-72, etc.
  ```

- **Sidebar Width**: Edit `src/components/Sidebar.tsx`
  ```tsx
  <aside className="w-20 lg:w-64"> // Change these values
  ```

## 📝 Example: Adding a Priority Field

1. Update type:
```typescript
// src/types.ts
export interface Task {
  // ... existing fields
  priority: 'high' | 'medium' | 'low';
}
```

2. Add to tasks:
```typescript
// src/data/learningPlan.ts
{
  id: 'day1',
  // ... existing fields
  priority: 'high',
}
```

3. Display in card:
```tsx
// src/components/TaskCard.tsx
<span className={`priority-badge ${task.priority}`}>
  {task.priority}
</span>
```

## 🎉 That's It!

Feel free to customize this app to match your learning style and preferences!

For questions or issues, refer to the main README.md or React documentation.
