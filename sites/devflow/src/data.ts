import type { BentoItemProps } from '@cli-pages/shared';
import { ClipboardList, Hammer, Search, Bug, CircleCheck, Sparkles, Wand2, Brain } from 'lucide-react';

export const meta = {
  name: 'devflow',
  version: 'v1.1.0',
  runtime: 'TypeScript + Markdown',
  github: 'https://github.com/dean0x/devflow',
} as const;

export const brandTagline = 'Agentic development toolkit';

export const projectLinks = [
  { label: 'GitHub', href: 'https://github.com/dean0x/devflow' },
  { label: 'npm', href: 'https://www.npmjs.com/package/devflow-kit' },
];

export const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Commands', href: '#commands' },
] as const;

export const stats = [
  { value: '9', label: 'Plugins' },
  { value: '26', label: 'Skills' },
  { value: '3', label: 'Clarification Gates' },
];

export const heroData = {
  title: 'Agentic Development',
  titleAccent: 'Toolkit',
  subtitle:
    'Structured workflows with agent teams for Claude Code. Specify, implement, review, debug — with adversarial quality, ambient skill loading, and persistent session memory.',
  actions: [
    { label: 'Get Started', href: '#commands', variant: 'primary' as const },
    { label: 'GitHub', href: 'https://github.com/dean0x/devflow', variant: 'secondary' as const },
  ],
};

export const features: BentoItemProps[] = [
  {
    icon: ClipboardList,
    title: '/specify',
    desc: 'Transform ideas into implementation-ready specs with 3 mandatory clarification gates.',
    size: 'md',
  },
  {
    icon: Hammer,
    title: '/implement',
    desc: 'Full lifecycle: explore, plan, code, validate, and PR. Agent teams debate before coding.',
    size: 'sm',
  },
  {
    icon: Search,
    title: '/code-review',
    desc: '7-11 specialist reviewers (security, architecture, performance) challenge each other.',
    size: 'sm',
  },
  {
    icon: Bug,
    title: '/debug',
    desc: '3-5 agents generate hypotheses, investigate in parallel, and debate to converge on root cause.',
    size: 'sm',
  },
  {
    icon: CircleCheck,
    title: '/resolve',
    desc: 'Validates review issues, fixes low-risk immediately, defers high-risk to tech debt backlog.',
    size: 'sm',
  },
  {
    icon: Sparkles,
    title: '/self-review',
    desc: 'Post-implementation refinement: Simplifier reduces complexity, Scrutinizer catches edge cases.',
    size: 'md',
  },
  {
    icon: Wand2,
    title: '/ambient',
    desc: 'Auto-loads relevant skills based on prompt intent. Always-on mode classifies every prompt — zero ceremony.',
    size: 'sm',
  },
  {
    icon: Brain,
    title: 'Working Memory',
    desc: 'Session context survives restarts, /clear, and compaction. Automatic — no manual steps needed.',
    size: 'sm',
  },
];

export const terminalWalkthrough = [
  {
    cmd: 'npx devflow-kit init',
    output: [
      '◇  Scope: user (all projects)',
      '◇  Installed 9 plugins',
      '◇  Enabled 26 skills (12 auto-activating)',
      '✔  DevFlow ready — use /specify, /implement, /code-review in Claude Code',
    ],
  },
  {
    cmd: 'npx devflow-kit list',
    output: [
      '  specify        Feature specification with 3 gates',
      '  implement      Full lifecycle: explore → plan → code → validate',
      '  code-review    8 specialized reviewers in parallel',
      '  debug          Competing hypothesis investigation',
      '  resolve        Fix review issues or defer to backlog',
      '  self-review    Simplifier + Scrutinizer quality gate',
    ],
  },
];

export const commandColumns = [
  { key: 'cmd', header: 'Command', highlight: 'accent' as const },
  { key: 'desc', header: 'Description' },
  { key: 'example', header: 'Example', hideOnMobile: true },
];

export const commandRows = [
  { cmd: '/specify', desc: 'Transform idea into implementation-ready spec', example: '/specify Add OAuth2 login' },
  { cmd: '/implement', desc: 'Full lifecycle: explore, plan, code, validate', example: '/implement Build auth module' },
  { cmd: '/code-review', desc: 'Adversarial review with specialist perspectives', example: '/code-review' },
  { cmd: '/debug', desc: 'Competing hypotheses to find root cause', example: '/debug Login fails after refresh' },
  { cmd: '/resolve', desc: 'Fix review issues or defer to backlog', example: '/resolve' },
  { cmd: '/self-review', desc: 'Quick quality refinement post-implementation', example: '/self-review' },
  { cmd: '/ambient', desc: 'Auto-load skills based on prompt intent', example: '/ambient Add a login form' },
  { cmd: '/audit-claude', desc: 'Audit CLAUDE.md for issues and improvements', example: '/audit-claude' },
];

export const installMethods = [
  { label: 'npx', command: 'npx devflow-kit init' },
];
