import type { BentoItemProps } from '@cli-pages/shared';
import { Rocket, Zap, Globe, Crosshair, FolderOpen, Waves, Target, Scissors, Terminal, BarChart3, Search, BookOpen } from 'lucide-react';

export const meta = {
  name: 'skim',
  version: 'v2.0.0',
  runtime: 'Rust',
  npm: 'rskim',
  github: 'https://github.com/dean0x/skim',
} as const;

export const brandTagline = 'Context optimization engine for coding agents';

export const projectLinks = [
  { label: 'GitHub', href: 'https://github.com/dean0x/skim' },
  { label: 'npm', href: 'https://www.npmjs.com/package/rskim' },
  { label: 'Crates.io', href: 'https://crates.io/crates/rskim' },
];

export const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Modes', href: '#modes' },
  { label: 'Commands', href: '#commands' },
] as const;

export const stats = [
  { value: '88%', label: 'Token Reduction' },
  { value: '14.6ms', label: 'Per 3,000-Line File' },
  { value: '12', label: 'Languages' },
];

export const ctaTitle = 'Ready to optimize your token budget?';

export const heroData = {
  badge: 'Open Source · MIT License',
  title: 'The Most Intelligent',
  titleAccent: 'Context Optimization Engine',
  subtitle:
    'Code skimming, command rewriting, test/build/git output compression. 12 languages, 14ms for 3,000 lines. Parses ASTs, strips implementation, preserves architecture. 60-90% token reduction.',
  actions: [
    { label: 'Get Started', href: '#commands', variant: 'primary' as const },
    { label: 'GitHub', href: 'https://github.com/dean0x/skim', variant: 'secondary' as const },
  ],
};

export const features: BentoItemProps[] = [
  {
    icon: Rocket,
    title: 'Blazing Fast',
    desc: '14.6ms for 3000-line files, 3x faster than the 50ms target. Built in Rust with tree-sitter.',
    size: 'sm',
  },
  {
    icon: Zap,
    title: '48x Cache Speedup',
    desc: 'SHA256-based caching enabled by default. First run 244ms, cached 5ms. 48x faster on cache hits.',
    size: 'sm',
  },
  {
    icon: Globe,
    title: '12 Languages',
    desc: 'TypeScript, JavaScript, Python, Rust, Go, Java, C, C++, Markdown, JSON, YAML, TOML, with auto-detection.',
    size: 'md',
  },
  {
    icon: Crosshair,
    title: '6 Transformation Modes',
    desc: 'Full, Minimal, Pseudo, Structure (60%), Signatures (88%), Types (92%). Choose your context budget.',
    size: 'md',
  },
  {
    icon: Terminal,
    title: 'Command Rewriting',
    desc: 'PreToolUse hook rewrites cat, head, tail, cargo test, npm test, git diff into skim equivalents. One command installs it.',
    size: 'md',
  },
  {
    icon: Waves,
    title: 'Output Compression',
    desc: 'Parses and compresses test output (cargo, pytest, vitest, jest), build output (cargo, tsc), and git (status, diff, log).',
    size: 'md',
  },
  {
    icon: Search,
    title: 'Discover & Learn',
    desc: 'skim discover finds optimization opportunities in agent sessions. skim learn detects CLI error-retry patterns and generates correction rules.',
    size: 'sm',
  },
  {
    icon: BarChart3,
    title: 'Token Analytics',
    desc: 'Persistent SQLite dashboard tracking token savings, cost estimates, and optimization trends over time.',
    size: 'sm',
  },
  {
    icon: Target,
    title: 'Token Budget Cascading',
    desc: '--tokens N automatically selects the most aggressive mode that fits your budget. Smart mode selection.',
    size: 'sm',
  },
  {
    icon: FolderOpen,
    title: 'Directory & Glob Support',
    desc: 'Process entire directories recursively or use glob patterns with parallel processing via rayon.',
    size: 'sm',
  },
  {
    icon: BookOpen,
    title: 'Claude Code Plugin',
    desc: 'Skimmer agent maps project structure, finds task-relevant code, and generates integration plans. /skim to orient.',
    size: 'sm',
  },
  {
    icon: Scissors,
    title: 'Smart Truncation',
    desc: '--max-lines N AST-aware truncation that respects code structure. --last-lines N for tail-aware output.',
    size: 'sm',
  },
];

export const terminalWalkthrough = [
  {
    cmd: 'skim init',
    output: [
      '  skim init \u2014 Claude Code integration setup',
      '',
      '  Checking current state...',
      '  \u2713 skim binary: /usr/local/bin/skim',
      '  \u2713 Hook: not installed',
      '',
      '  \u2713 Created: ~/.claude/hooks/skim-rewrite.sh',
      '  \u2713 Patched: settings.json (PreToolUse hook added)',
      '  \u2713 Registered: skim marketplace',
      '',
      '  Done! skim is now active in Claude Code.',
    ],
  },
  {
    cmd: 'skim src/ --mode structure --show-stats',
    output: [
      '// === src/auth.ts ===',
      'export function login(user: User): Promise<Session> { /* ... */ }',
      'export function logout(): void { /* ... */ }',
      '',
      '// === src/db.rs ===',
      'pub fn connect(url: &str) -> Result<Connection> { /* ... */ }',
      '',
      '[skim] 24,192 tokens \u2192 3,420 tokens (85.8% reduction)',
    ],
  },
  {
    cmd: 'skim discover',
    output: [
      '  skim discover \u2014 optimization opportunities',
      '',
      '  Sessions scanned: found 84 tool invocations',
      '',
      '  Code Reads: 52 total (41 skimmable, 11 non-code)',
      '    Tokens consumed: 156,000',
      '    Estimated savings with skim: ~109,200 tokens (~70.0%)',
      '',
      '  Commands: 32 total (18 rewritable)',
      '',
      '  hint: run `skim init` to install the PreToolUse hook',
    ],
  },
  {
    cmd: 'skim stats --since 7d',
    output: [
      '  Token Analytics (last 7 days)',
      '',
      '  Summary',
      '    Invocations:    142',
      '    Tokens saved:   284,000',
      '    Avg reduction:  72.3%',
      '    [\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2591\u2591\u2591\u2591\u2591\u2591] 72.3%',
    ],
  },
];

export const modesComparison = [
  { mode: 'Full', tokens: '63,198', reduction: '0%', useCase: 'Original source, testing/comparison' },
  { mode: 'Minimal', tokens: '~50,000', reduction: '15-30%', useCase: 'Light cleanup, doc comments stripped' },
  { mode: 'Pseudo', tokens: '~35,000', reduction: '30-50%', useCase: 'Logic flow with simplified syntax' },
  { mode: 'Structure', tokens: '25,119', reduction: '60.3%', useCase: 'Understanding architecture' },
  { mode: 'Signatures', tokens: '7,328', reduction: '88.4%', useCase: 'API documentation' },
  { mode: 'Types', tokens: '5,181', reduction: '91.8%', useCase: 'Type system analysis' },
];

export const commandColumns = [
  { key: 'cmd', header: 'Command', highlight: 'accent' as const },
  { key: 'desc', header: 'Description' },
  { key: 'example', header: 'Example', hideOnMobile: true },
];

export const commandRows = [
  { cmd: 'skim <path>', desc: 'Transform a single file', example: 'skim src/auth.ts' },
  { cmd: 'skim <dir>', desc: 'Process directory recursively', example: 'skim src/' },
  { cmd: '--mode', desc: 'Set transformation depth', example: 'skim src/ --mode signatures' },
  { cmd: 'skim init', desc: 'Install command rewriting hooks', example: 'skim init' },
  { cmd: 'skim test', desc: 'Compress test runner output', example: 'skim test -- cargo test' },
  { cmd: 'skim build', desc: 'Compress build tool output', example: 'skim build -- tsc' },
  { cmd: 'skim git', desc: 'Compress git output', example: 'skim git -- git diff' },
  { cmd: 'skim stats', desc: 'Token savings dashboard', example: 'skim stats --since 7d' },
  { cmd: 'skim discover', desc: 'Find optimization opportunities', example: 'skim discover' },
  { cmd: 'skim learn', desc: 'Detect error-retry patterns', example: 'skim learn' },
  { cmd: '--tokens N', desc: 'Cascade modes to fit token budget', example: 'skim src/ --tokens 5000' },
  { cmd: '--show-stats', desc: 'Display token reduction statistics', example: 'skim src/ --show-stats' },
];

export const installMethods = [
  { label: 'npx', command: 'npx rskim src/app.ts' },
  { label: 'npm', command: 'npm install -g rskim' },
  { label: 'Cargo', command: 'cargo install rskim' },
  { label: 'Homebrew', command: 'brew install dean0x/tap/skim' },
];
