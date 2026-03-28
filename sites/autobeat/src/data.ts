import type { BentoItemProps } from '@cli-pages/shared';
import { Send, Cpu, GitBranch, Clock, Database, RotateCcw, Zap, Repeat, Target } from 'lucide-react';

export const meta = {
  name: 'autobeat',
  version: 'v1.0.0',
  runtime: 'TypeScript',
  github: 'https://github.com/dean0x/autobeat',
} as const;

export const brandTagline = 'Autonomous orchestration framework for coding agents';

export const projectLinks = [
  { label: 'GitHub', href: 'https://github.com/dean0x/autobeat' },
  { label: 'npm', href: 'https://www.npmjs.com/package/autobeat' },
];

export const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Commands', href: '#commands' },
  { label: 'MCP Tools', href: '#mcp-tools' },
] as const;

export const stats = [
  { value: '4', label: 'Composable Primitives' },
  { value: '3', label: 'Agent Backends' },
  { value: '1 cmd', label: 'Full Orchestration' },
];

export const ctaTitle = 'Ready for autonomous orchestration?';

export const heroData = {
  badge: 'Open Source · MIT License',
  title: 'Framework.',
  titleAccent: 'Autonomous Orchestration',
  accentFirst: true,
  subtitle:
    'Loops all the way down. The orchestrator runs in a continuous loop, breaking goals into tasks, spawning workers, evaluating results, iterating until done. Each worker runs its own eval loop, retrying until tests pass or metrics converge.',
  actions: [
    { label: 'Get Started', href: '#commands', variant: 'primary' as const },
    { label: 'GitHub', href: 'https://github.com/dean0x/autobeat', variant: 'secondary' as const },
  ],
};

export const features: BentoItemProps[] = [
  {
    icon: Target,
    title: 'Orchestrate Mode',
    desc: 'One command, autonomous execution. A meta-agent that uses Autobeat\'s own tools recursively to break down goals, spawn workers, and iterate until done.',
    size: 'md',
  },
  {
    icon: Repeat,
    title: 'Eval Loops',
    desc: 'The Karpathy loop for coding agents. Retry until a command passes, or optimize iteratively until evaluation scores converge.',
    size: 'md',
  },
  {
    icon: Send,
    title: 'Task Delegation',
    desc: 'Spawn background coding agents with dependency ordering. Fire-and-forget or foreground streaming.',
    size: 'sm',
  },
  {
    icon: Cpu,
    title: 'Resource Management',
    desc: 'Autoscaling workers based on CPU and memory. Maintains 20% headroom automatically.',
    size: 'sm',
  },
  {
    icon: GitBranch,
    title: 'DAG Dependencies',
    desc: 'Chain tasks with dependency graphs, cycle detection, and session continuation through the chain.',
    size: 'sm',
  },
  {
    icon: Clock,
    title: 'Scheduling & Pipelines',
    desc: 'Cron schedules, one-time runs, multi-step pipelines across different agents. Chain steps with per-step config.',
    size: 'sm',
  },
  {
    icon: Database,
    title: 'Crash-Proof Persistence',
    desc: 'SQLite-backed state that survives restarts. The orchestrator reads its state file each iteration and continues where it left off.',
    size: 'md',
  },
  {
    icon: RotateCcw,
    title: 'Checkpoint & Resume',
    desc: 'Workers checkpoint on completion or failure. Resume with enriched context from logs. Retry chains with full history.',
    size: 'sm',
  },
  {
    icon: Zap,
    title: 'Multi-Agent Support',
    desc: 'Claude, Codex, or Gemini per task. The framework provides the primitives, the agent does the rest.',
    size: 'sm',
  },
];

export const mcpToolColumns = [
  { key: 'tool', header: 'MCP Tool', highlight: 'accent' as const },
  { key: 'desc', header: 'Description' },
];

export const mcpToolRows = [
  { tool: 'Orchestrate', desc: 'Autonomous goal execution. Breaks down goals, spawns workers, iterates until done' },
  { tool: 'OrchestrationStatus', desc: 'Orchestration plan, steps, and iteration state' },
  { tool: 'ListOrchestrations', desc: 'List orchestrations with status filter' },
  { tool: 'CancelOrchestration', desc: 'Cancel an orchestration and its workers' },
  { tool: 'DelegateTask', desc: 'Spawn a background coding agent with prompt, priority, and dependencies' },
  { tool: 'TaskStatus', desc: 'Real-time task status, priority, and timing' },
  { tool: 'TaskLogs', desc: 'Execution logs with optional tail' },
  { tool: 'CancelTask', desc: 'Cancel a running task with resource cleanup' },
  { tool: 'RetryTask', desc: 'Retry a failed or completed task' },
  { tool: 'ResumeTask', desc: 'Resume a task from its checkpoint with optional additional context' },
  { tool: 'CreateLoop', desc: 'Iterative eval loop. Retry until pass, or optimize until convergence' },
  { tool: 'LoopStatus', desc: 'Loop details and iteration history' },
  { tool: 'ListLoops', desc: 'List loops with status filter' },
  { tool: 'CancelLoop', desc: 'Cancel an active loop' },
  { tool: 'PauseLoop / ResumeLoop', desc: 'Pause and resume loops' },
  { tool: 'CreatePipeline', desc: 'Sequential multi-step pipeline with per-step configuration' },
  { tool: 'ScheduleTask', desc: 'Cron or one-time task schedule with timezone support' },
  { tool: 'SchedulePipeline', desc: 'Scheduled pipeline with dependency cascade' },
];

export const terminalWalkthrough = [
  {
    cmd: 'beat orchestrate "Migrate the payment module to a standalone microservice"',
    output: [
      '\u250c  Autobeat \u2014 Orchestration Started',
      '\u2502',
      '\u2502  Goal:    Migrate the payment module to a standalone microservice',
      '\u2502  Workers: 0/5 (autoscaling)',
      '\u2502',
      '\u2514  Orchestrator running \u2014 iteration 1',
    ],
  },
  {
    cmd: 'beat loop "Fix the failing tests" --until "npm test"',
    output: [
      '\u250c  Autobeat \u2014 Eval Loop',
      '\u2502',
      '\u2502  Strategy:  retry',
      '\u2502  Exit:      npm test (pass)',
      '\u2502  Iteration: 1/10',
      '\u2502',
      '\u2514  Loop running \u2014 agent working',
    ],
  },
];

export const commandColumns = [
  { key: 'cmd', header: 'Command', highlight: 'accent' as const },
  { key: 'desc', header: 'Description' },
  { key: 'example', header: 'Example', hideOnMobile: true },
];

export const commandRows = [
  { cmd: 'beat orchestrate', desc: 'Autonomous goal execution with worker management', example: 'beat orchestrate "Add OAuth2 login"' },
  { cmd: 'beat run', desc: 'Submit a task to a background agent', example: 'beat run "Add auth" --agent codex' },
  { cmd: 'beat loop', desc: 'Iterative eval loop (retry or optimize)', example: 'beat loop "Fix tests" --until "npm test"' },
  { cmd: 'beat pipeline', desc: 'Sequential multi-step pipeline', example: 'beat pipeline --step "test" --step "deploy"' },
  { cmd: 'beat list', desc: 'List tasks with status and priority', example: 'beat list --status running' },
  { cmd: 'beat logs', desc: 'View task output and execution logs', example: 'beat logs task_a1b2 --tail 50' },
  { cmd: 'beat cancel', desc: 'Cancel a running task', example: 'beat cancel task_a1b2' },
  { cmd: 'beat resume', desc: 'Resume a failed task from checkpoint', example: 'beat resume task_a1b2' },
  { cmd: 'beat schedule', desc: 'Create cron or one-time scheduled tasks', example: 'beat schedule create --cron "0 2 * * *"' },
  { cmd: 'beat init', desc: 'Interactive setup, detects installed agents', example: 'beat init' },
  { cmd: 'beat config', desc: 'Show or set configuration', example: 'beat config show' },
];

export const installMethods = [
  { label: 'npx', command: 'npx -y autobeat mcp start' },
  { label: 'npm', command: 'npm install -g autobeat' },
];
