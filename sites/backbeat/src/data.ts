import type { BentoItemProps } from '@cli-pages/shared';
import { Send, Cpu, GitBranch, Clock, Database, RotateCcw, Zap, ArrowRightLeft, Package, Download } from 'lucide-react';

export const meta = {
  name: 'backbeat',
  version: 'v0.4.0',
  runtime: 'TypeScript',
  github: 'https://github.com/dean0x/backbeat',
} as const;

export const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'MCP Tools', href: '#mcp-tools' },
  { label: 'Commands', href: '#commands' },
] as const;

export const heroData = {
  title: 'Orchestrate Claude Code,',
  titleAccent: 'at scale.',
  subtitle:
    'Delegate tasks to background Claude Code instances, manage dependencies, schedule work, and resume from checkpoints — all from one session.',
  actions: [
    { label: 'Get Started', href: '#commands', variant: 'primary' as const },
    { label: 'GitHub', href: 'https://github.com/dean0x/backbeat', variant: 'secondary' as const },
  ],
};

export const features: BentoItemProps[] = [
  {
    icon: Send,
    title: 'Task Delegation',
    desc: 'Submit tasks to background Claude Code instances — fire-and-forget or foreground streaming',
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
    desc: 'Cron schedules, one-time runs, timezone support, and missed-run policies',
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
    icon: ArrowRightLeft,
    title: 'Session Continuation',
    desc: 'Dependent tasks receive checkpoint context — git state, output summary flow downstream',
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
];

export const terminalWalkthrough = [
  {
    cmd: 'beat run "Build the authentication module" --priority P1',
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

export const commands = [
  { cmd: 'beat run <prompt>', desc: 'Submit a new task (add -f for foreground streaming)' },
  { cmd: 'beat list', desc: 'List all tasks with status and priority' },
  { cmd: 'beat status [id]', desc: 'Check task status (all tasks if no ID given)' },
  { cmd: 'beat logs <id>', desc: 'View task output and execution logs' },
  { cmd: 'beat cancel <id>', desc: 'Cancel a running task with optional reason' },
  { cmd: 'beat resume <id>', desc: 'Resume a failed task from its checkpoint' },
  { cmd: 'beat schedule create', desc: 'Create a cron or one-time scheduled task' },
  { cmd: 'beat pipeline', desc: 'Chain tasks with delays between them' },
  { cmd: 'beat config show', desc: 'Show resolved configuration' },
];

export const installMethods = [
  { icon: Package, label: 'npx', command: 'npx -y backbeat mcp start' },
  { icon: Download, label: 'npm', command: 'npm install -g backbeat' },
];
