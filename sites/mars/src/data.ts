import { Orbit, Bot, Tags, Zap, BarChart3, GitBranch, RefreshCw, Terminal, Package, Beer, Download } from 'lucide-react';

export const meta = {
  name: 'mars',
  version: 'v0.1.0',
  runtime: 'Bash',
  github: 'https://github.com/dean0x/mars',
} as const;

export const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Commands', href: '#commands' },
] as const;

export const heroData = {
  badge: 'v0.1.0 — now available via npm, brew, and curl',
  title: 'Polyrepos,',
  titleAccent: 'one command.',
  subtitle:
    'Mars is a multi-repo workspace manager built for teams that run multiple git repositories. Tag repos, run parallel operations, and share Claude configuration across every project — all from a single CLI.',
  actions: [
    { label: 'Get Started', href: '#commands', variant: 'primary' as const },
    { label: 'View on GitHub', href: 'https://github.com/dean0x/mars', variant: 'secondary' as const },
  ],
};

export const features = [
  {
    icon: Orbit,
    title: 'Unified Workspace',
    desc: 'Manage multiple Git repositories as a single coordinated workspace with a simple mars.yaml config',
  },
  {
    icon: Bot,
    title: 'Shared Claude Config',
    desc: 'One claude.md and .claude/ folder shared across all repos — consistent AI behavior everywhere',
  },
  {
    icon: Tags,
    title: 'Tag-Based Filtering',
    desc: 'Tag repos by role (frontend, backend, shared) and run commands against specific groups',
  },
  {
    icon: Zap,
    title: 'Parallel Cloning',
    desc: 'Clone all workspace repos in parallel with automatic rate limiting — 4 concurrent jobs',
  },
  {
    icon: BarChart3,
    title: 'Status Overview',
    desc: 'See git status across all repos at a glance — dirty files, branch info, sync state',
  },
  {
    icon: GitBranch,
    title: 'Branch Management',
    desc: 'Create and checkout branches across multiple repos simultaneously',
  },
  {
    icon: RefreshCw,
    title: 'Sync with Rebase',
    desc: 'Pull latest changes across all repos with optional rebase — keep histories clean',
  },
  {
    icon: Terminal,
    title: 'Exec Across Repos',
    desc: 'Run any shell command across all (or tagged) repos — npm install, tests, builds',
  },
];

export const commands = [
  { cmd: 'mars init', desc: 'Initialize a new workspace with optional Claude config' },
  { cmd: 'mars add <url>', desc: 'Add a repository with optional tags and path' },
  { cmd: 'mars clone', desc: 'Clone all configured repos (parallel, rate-limited)' },
  { cmd: 'mars status', desc: 'Show git status across all workspace repos' },
  { cmd: 'mars branch <name>', desc: 'Create a branch on all (or tagged) repos' },
  { cmd: 'mars checkout <branch>', desc: 'Checkout a branch across repos' },
  { cmd: 'mars sync', desc: 'Pull latest with optional --rebase flag' },
  { cmd: 'mars exec "<cmd>"', desc: 'Run shell command in each repo directory' },
  { cmd: 'mars list', desc: 'List configured repos with tags and paths' },
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

export const workflowSteps = [
  {
    title: 'Initialize workspace',
    desc: 'Create a mars.yaml and optionally set up shared Claude configuration',
    code: 'mars init',
    codeTitle: 'terminal',
  },
  {
    title: 'Add repositories',
    desc: 'Add repos with tags for organized multi-repo management',
    code: 'mars add git@github.com:org/frontend.git --tags frontend,web\nmars add git@github.com:org/backend.git --tags backend,api',
    codeTitle: 'terminal',
  },
  {
    title: 'Clone everything',
    desc: 'Clone all repos in parallel with automatic rate limiting',
    code: 'mars clone',
    codeTitle: 'terminal',
  },
  {
    title: 'Work across repos',
    desc: 'Branch, sync, and execute commands across your entire workspace',
    code: 'mars branch feature-auth --tag backend\nmars exec "npm test" --tag frontend',
    codeTitle: 'terminal',
  },
];
