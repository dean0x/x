import type { BentoItemProps } from '@cli-pages/shared';
import { ClipboardList, Hammer, Search, Bug, CircleCheck, Sparkles, Package, Crosshair } from 'lucide-react';

export const meta = {
  name: 'devflow',
  version: 'v1.0.0',
  runtime: 'TypeScript + Markdown',
  github: 'https://github.com/dean0x/devflow',
} as const;

export const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Commands', href: '#commands' },
] as const;

export const heroData = {
  title: 'Agentic Development',
  titleAccent: 'Toolkit',
  subtitle:
    'Structured workflows with agent teams for Claude Code. Specify, implement, review, debug — with adversarial quality at every step.',
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
];

export const terminalWalkthrough = [
  {
    cmd: 'npx devflow-kit init',
    output: [
      '◇  Scope: user (all projects)',
      '◇  Installed 7 plugins',
      '◇  Enabled 24 skills (11 auto-activating)',
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

export const architecture = {
  plugins: [
    { name: 'devflow-specify', desc: 'Feature specification with clarification gates' },
    { name: 'devflow-implement', desc: 'Complete task lifecycle orchestration' },
    { name: 'devflow-code-review', desc: 'Adversarial multi-perspective code review' },
    { name: 'devflow-resolve', desc: 'Review issue resolution and tech debt' },
    { name: 'devflow-debug', desc: 'Competing hypothesis debugging' },
    { name: 'devflow-self-review', desc: 'Post-implementation quality check' },
    { name: 'devflow-core-skills', desc: '24 quality skills — 11 auto-activating' },
  ],
  agents: [
    'Git',
    'Skimmer',
    'Synthesizer',
    'Coder',
    'Simplifier',
    'Scrutinizer',
    'Reviewer',
    'Shepherd',
    'Validator',
    'Resolver',
  ],
  skillCategories: [
    'Core Patterns',
    'Architecture',
    'Security',
    'Performance',
    'TypeScript',
    'React',
    'Testing',
    'Git Safety',
    'Code Review',
    'Dependencies',
    'Accessibility',
    'Documentation',
  ],
} as const;

export const commands = [
  { cmd: '/specify', desc: 'Transform ideas into implementation-ready specs with gates' },
  { cmd: '/implement', desc: 'Explore, plan, code, validate — complete task lifecycle' },
  { cmd: '/code-review', desc: 'Adversarial code review with 7-11 specialist perspectives' },
  { cmd: '/debug', desc: 'Investigate bugs with competing hypotheses and debate' },
  { cmd: '/resolve', desc: 'Fix low-risk review issues, defer high-risk to backlog' },
  { cmd: '/self-review', desc: 'Quick quality refinement after implementation' },
];

export const installMethods = [
  { icon: Package, label: 'All Plugins', command: 'npx devflow-kit init' },
  { icon: Crosshair, label: 'Selective', command: 'npx devflow-kit init --plugin=implement,code-review' },
];
