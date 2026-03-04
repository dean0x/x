import type { BentoItemProps } from '@cli-pages/shared';
import { Orbit, Bot, Tags, Zap, BarChart3, GitBranch, RefreshCw, Terminal, Package, Beer, Download } from 'lucide-react';

export const meta = {
  name: 'mars',
  version: 'v0.1.2',
  runtime: 'Bash',
  github: 'https://github.com/dean0x/mars',
} as const;

export const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Commands', href: '#commands' },
] as const;

export const heroData = {
  title: 'Polyrepos,',
  titleAccent: 'one command.',
  subtitle:
    'Mars is a multi-repo workspace manager built for teams that run multiple git repositories. Tag repos, run parallel operations, and share Claude configuration across every project — all from a single CLI.',
  actions: [
    { label: 'Get Started', href: '#commands', variant: 'primary' as const },
    { label: 'View on GitHub', href: 'https://github.com/dean0x/mars', variant: 'secondary' as const },
  ],
};

export const features: BentoItemProps[] = [
  {
    icon: Orbit,
    title: 'Unified Workspace',
    desc: 'Manage multiple Git repositories as a single coordinated workspace with a simple mars.yaml config',
    size: 'md',
  },
  {
    icon: Bot,
    title: 'Shared Claude Config',
    desc: 'One claude.md and .claude/ folder shared across all repos — consistent AI behavior everywhere',
    size: 'sm',
  },
  {
    icon: Zap,
    title: 'Parallel Cloning',
    desc: 'Clone all workspace repos in parallel with automatic rate limiting — 4 concurrent jobs',
    size: 'sm',
  },
  {
    icon: Tags,
    title: 'Tag-Based Filtering',
    desc: 'Tag repos by role (frontend, backend, shared) and run commands against specific groups',
    size: 'sm',
  },
  {
    icon: BarChart3,
    title: 'Status Overview',
    desc: 'See git status across all repos at a glance — dirty files, branch info, sync state',
    size: 'sm',
  },
  {
    icon: GitBranch,
    title: 'Branch Management',
    desc: 'Create and checkout branches across multiple repos simultaneously',
    size: 'md',
  },
  {
    icon: RefreshCw,
    title: 'Sync with Rebase',
    desc: 'Pull latest changes across all repos with optional rebase — keep histories clean',
    size: 'sm',
  },
  {
    icon: Terminal,
    title: 'Exec Across Repos',
    desc: 'Run any shell command across all (or tagged) repos — npm install, tests, builds',
    size: 'md',
  },
];

export const terminalWalkthrough = [
  {
    cmd: 'mars clone',
    output: [
      '┌  Mars - Clone Repositories',
      '│',
      '◇  Cloned: org/frontend (2.1s)',
      '◇  Cloned: org/api (2.4s)',
      '◇  Cloned: org/shared (1.2s)',
      '│',
      '└  Cloned 3 repositories successfully',
    ],
  },
  {
    cmd: 'mars status',
    output: [
      '┌  Mars - Repository Status',
      '│',
      '│  Repository      Branch    Status   Sync',
      '│  ─────────────────────────────────────────',
      '│  org/frontend    main      clean    synced',
      '│  org/api         develop   dirty    ↑3 ↓1',
      '│  org/shared      main      clean    ↓2',
      '│',
      '└  Status complete',
    ],
  },
];

export const commandColumns = [
  { key: 'cmd', header: 'Command', highlight: 'accent' as const },
  { key: 'desc', header: 'Description' },
  { key: 'example', header: 'Example' },
];

export const commandRows = [
  { cmd: 'mars init', desc: 'Initialize a new workspace', example: 'mars init --claude' },
  { cmd: 'mars add', desc: 'Register a repo with tags', example: 'mars add git@org/api --tag backend' },
  { cmd: 'mars clone', desc: 'Clone all repos in parallel', example: 'mars clone --tag frontend' },
  { cmd: 'mars status', desc: 'Git status across all repos', example: 'mars status' },
  { cmd: 'mars branch', desc: 'Create or switch branches across repos', example: 'mars branch feat/auth' },
  { cmd: 'mars sync', desc: 'Pull latest with optional rebase', example: 'mars sync --rebase' },
  { cmd: 'mars exec', desc: 'Run a command in each repo', example: 'mars exec "npm test"' },
];

export const installMethods = [
  { icon: Package, label: 'npm', command: 'npm install -g @dean0x/mars' },
  { icon: Beer, label: 'Homebrew', command: 'brew install dean0x/tap/mars' },
  {
    icon: Download,
    label: 'Shell',
    command: 'curl -fsSL https://raw.githubusercontent.com/dean0x/mars/main/install.sh | bash',
  },
];
