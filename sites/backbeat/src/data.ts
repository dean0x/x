import type { BentoItemProps } from '@cli-pages/shared';
import { Send, Cpu, GitBranch, Clock, Database, RotateCcw, Zap, Users } from 'lucide-react';

export const meta = {
  name: 'backbeat',
  version: 'v0.6.0',
  runtime: 'TypeScript',
  github: 'https://github.com/dean0x/backbeat',
} as const;

export const brandTagline = 'Multi-agent task orchestration';

export const projectLinks = [
  { label: 'GitHub', href: 'https://github.com/dean0x/backbeat' },
  { label: 'npm', href: 'https://www.npmjs.com/package/backbeat' },
];

export const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Commands', href: '#commands' },
  { label: 'MCP Tools', href: '#mcp-tools' },
] as const;

export const stats = [
  { value: 'DAG', label: 'Dependencies' },
  { value: '3', label: 'Agents' },
  { value: '0 config', label: 'Zero Setup' },
];

export const ctaTitle = 'Ready to orchestrate your agents?';

export const heroData = {
  badge: 'Open Source · MIT License',
  title: 'Background agents,',
  titleAccent: 'orchestrated.',
  subtitle:
    'Delegate tasks to Claude, Codex, or Gemini in parallel — manage dependencies, schedule work, and resume from checkpoints.',
  actions: [
    { label: 'Get Started', href: '#commands', variant: 'primary' as const },
    { label: 'GitHub', href: 'https://github.com/dean0x/backbeat', variant: 'secondary' as const },
  ],
};

export const features: BentoItemProps[] = [
  {
    icon: Send,
    title: 'Task Delegation',
    desc: 'Submit tasks to background AI agent instances — fire-and-forget or foreground streaming',
    size: 'md',
  },
  {
    icon: Cpu,
    title: 'Autoscaling',
    desc: 'Workers spawn based on CPU and memory — maintains 20% headroom automatically',
    size: 'sm',
  },
  {
    icon: GitBranch,
    title: 'DAG Dependencies',
    desc: 'Chain tasks with dependency graphs, cycle detection, and diamond pattern support',
    size: 'sm',
  },
  {
    icon: Clock,
    title: 'Task Scheduling',
    desc: 'Cron schedules, one-time runs, multi-step pipelines, timezone support, and missed-run policies',
    size: 'sm',
  },
  {
    icon: Database,
    title: 'Persistence & Recovery',
    desc: 'SQLite-backed task storage with WAL mode — auto-recovers queued tasks on startup',
    size: 'sm',
  },
  {
    icon: RotateCcw,
    title: 'Task Resumption',
    desc: 'Checkpoint on completion/failure — resume with enriched context and retry chains',
    size: 'md',
  },
  {
    icon: Zap,
    title: 'Event-Driven Core',
    desc: 'Zero direct state management — all coordination through a centralized EventBus',
    size: 'sm',
  },
  {
    icon: Users,
    title: 'Multi-Agent Support',
    desc: 'Choose Claude, Codex, or Gemini per task — or set a default agent globally',
    size: 'md',
  },
];

export const mcpToolColumns = [
  { key: 'tool', header: 'MCP Tool', highlight: 'accent' as const },
  { key: 'desc', header: 'Description' },
];

export const mcpToolRows = [
  { tool: 'DelegateTask', desc: 'Submit tasks to background instances with prompt, priority, and dependencies' },
  { tool: 'TaskStatus', desc: 'Get real-time task status, priority, and timing' },
  { tool: 'TaskLogs', desc: 'Stream or retrieve execution logs with optional tail' },
  { tool: 'CancelTask', desc: 'Cancel a running task with resource cleanup' },
  { tool: 'RetryTask', desc: 'Retry a failed or completed task' },
  { tool: 'ResumeTask', desc: 'Resume a task from its checkpoint with optional additional context' },
  { tool: 'ScheduleTask', desc: 'Schedule recurring (cron) or one-time tasks with timezone support' },
  { tool: 'ListSchedules', desc: 'List schedules with optional status filter' },
  { tool: 'GetSchedule', desc: 'Get schedule details and execution history' },
  { tool: 'PauseSchedule', desc: 'Pause an active schedule (resumable)' },
  { tool: 'ResumeSchedule', desc: 'Resume a paused schedule' },
  { tool: 'CancelSchedule', desc: 'Cancel an active schedule with optional reason' },
  { tool: 'CreatePipeline', desc: 'Create sequential task pipelines (2-20 steps) with per-step configuration' },
  { tool: 'SchedulePipeline', desc: 'Create recurring or one-time scheduled pipelines with dependency cascade' },
];

export const terminalWalkthrough = [
  {
    cmd: 'beat run "Build the authentication module" --agent claude --priority P1',
    output: [
      '┌  BackBeat - Task Created',
      '│',
      '│  ID:       task_a1b2c3',
      '│  Priority: P1',
      '│  Worker:   worker-01',
      '│',
      '└  Task delegated — streaming output',
    ],
  },
  {
    cmd: 'beat list',
    output: [
      '┌  BackBeat - Task List',
      '│',
      '│  ID          Status      Priority  Prompt',
      '│  ──────────────────────────────────────────────────',
      '│  task_a1b2c3 running     P1        Build the authentication module',
      '│  task_d4e5f6 completed   P2        Add unit tests for auth',
      '│  task_g7h8i9 queued      P3        Update API documentation',
      '│',
      '└  3 tasks (1 running, 1 completed, 1 queued)',
    ],
  },
];

export const commandColumns = [
  { key: 'cmd', header: 'Command', highlight: 'accent' as const },
  { key: 'desc', header: 'Description' },
  { key: 'example', header: 'Example', hideOnMobile: true },
];

export const commandRows = [
  { cmd: 'beat run', desc: 'Submit a task to a background instance', example: 'beat run "Add auth" --agent codex' },
  { cmd: 'beat list', desc: 'List tasks with status and priority', example: 'beat list --status running' },
  { cmd: 'beat logs', desc: 'View task output and execution logs', example: 'beat logs task_a1b2 --tail 50' },
  { cmd: 'beat cancel', desc: 'Cancel a running task', example: 'beat cancel task_a1b2' },
  { cmd: 'beat resume', desc: 'Resume a failed task from checkpoint', example: 'beat resume task_a1b2' },
  { cmd: 'beat retry', desc: 'Retry a failed or completed task', example: 'beat retry task_a1b2' },
  { cmd: 'beat status', desc: 'Check task or global status', example: 'beat status task_a1b2' },
  { cmd: 'beat schedule', desc: 'Create cron or one-time scheduled tasks', example: 'beat schedule create --cron "0 9 * * 1"' },
  { cmd: 'beat init', desc: 'Interactive setup wizard', example: 'beat init --agent codex' },
  { cmd: 'beat pipeline', desc: 'Create chained sequential pipeline', example: 'beat pipeline "lint" "test" "deploy"' },
  { cmd: 'beat agents', desc: 'List registered agents and status', example: 'beat agents list' },
  { cmd: 'beat config', desc: 'Show or set configuration', example: 'beat config show' },
];

export const installMethods = [
  { label: 'npx', command: 'npx -y backbeat mcp start' },
  { label: 'npm', command: 'npm install -g backbeat' },
];
