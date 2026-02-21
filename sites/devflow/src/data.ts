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
  badge: 'v1.0.0 — Claude Code Plugins',
  title: 'Agentic Development',
  titleAccent: 'Toolkit',
  subtitle:
    'Structured workflows with agent teams for Claude Code. Specify, implement, review, debug — with adversarial quality at every step.',
  actions: [
    { label: 'Get Started', href: '#commands', variant: 'primary' as const },
    { label: 'GitHub', href: 'https://github.com/dean0x/devflow', variant: 'secondary' as const },
  ],
};

export const features = [
  {
    icon: ClipboardList,
    title: '/specify — Feature Specs',
    desc: 'Transform rough ideas into implementation-ready GitHub issues with 3 mandatory clarification gates.',
  },
  {
    icon: Hammer,
    title: '/implement — Full Lifecycle',
    desc: 'Explore, plan, code, validate, and create PRs. Agent teams debate the approach before writing code.',
  },
  {
    icon: Search,
    title: '/review — Adversarial Review',
    desc: '7-11 specialist reviewers (security, architecture, performance) challenge each other\u2019s findings.',
  },
  {
    icon: Bug,
    title: '/debug — Competing Hypotheses',
    desc: '3-5 agents generate hypotheses, investigate in parallel, and debate to converge on root cause.',
  },
  {
    icon: CircleCheck,
    title: '/resolve — Smart Fix/Defer',
    desc: 'Validates review issues, fixes low-risk immediately, defers high-risk to tech debt backlog.',
  },
  {
    icon: Sparkles,
    title: '/self-review — Quality Check',
    desc: 'Post-implementation refinement: Simplifier reduces complexity, Scrutinizer catches edge cases.',
  },
];

export const architecture = {
  plugins: [
    { name: 'devflow-specify', desc: 'Feature specification with clarification gates' },
    { name: 'devflow-implement', desc: 'Complete task lifecycle orchestration' },
    { name: 'devflow-review', desc: 'Adversarial multi-perspective code review' },
    { name: 'devflow-resolve', desc: 'Review issue resolution and tech debt' },
    { name: 'devflow-debug', desc: 'Competing hypothesis debugging' },
    { name: 'devflow-self-review', desc: 'Post-implementation quality check' },
    { name: 'devflow-core-skills', desc: '24 auto-activating quality skills' },
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
  { cmd: '/review', desc: 'Adversarial code review with 7-11 specialist perspectives' },
  { cmd: '/debug', desc: 'Investigate bugs with competing hypotheses and debate' },
  { cmd: '/resolve', desc: 'Fix low-risk review issues, defer high-risk to backlog' },
  { cmd: '/self-review', desc: 'Quick quality refinement after implementation' },
];

export const installMethods = [
  { icon: Package, label: 'All Plugins', command: 'npx devflow-kit init' },
  { icon: Crosshair, label: 'Selective', command: 'npx devflow-kit init --plugin=implement,review' },
];

export const workflowSteps = [
  {
    title: 'Install DevFlow',
    desc: 'One command installs all plugins into your Claude Code environment',
    code: 'npx devflow-kit init',
    codeTitle: 'terminal',
  },
  {
    title: 'Specify your feature',
    desc: 'Three clarification gates ensure the spec is crystal clear before any code',
    code: '/specify User authentication with social login',
    codeTitle: 'claude code',
  },
  {
    title: 'Implement with agent teams',
    desc: 'Agents explore, plan, and code — with adversarial challenge at each phase',
    code: '/implement #42',
    codeTitle: 'claude code',
  },
  {
    title: 'Review and refine',
    desc: 'Multi-perspective review finds issues. Resolve fixes them or defers to tech debt.',
    code: '/review\n/resolve',
    codeTitle: 'claude code',
  },
];
