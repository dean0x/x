import type { BentoItemProps } from '@cli-pages/shared';
import { Rocket, Zap, Globe, Crosshair, FolderOpen, Waves } from 'lucide-react';

export const meta = {
  name: 'skim',
  version: 'v0.9.5',
  runtime: 'Rust',
  npm: 'rskim',
  github: 'https://github.com/dean0x/skim',
} as const;

export const brandTagline = 'Smart code reader for AI agents';

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
  { value: '9', label: 'Languages' },
];

export const heroData = {
  title: 'Strip Implementation,',
  titleAccent: 'Keep Structure',
  subtitle:
    'Smart code reader for AI agents. 60-90% token reduction while preserving architecture, signatures, and types. Built with tree-sitter.',
  actions: [
    { label: 'Get Started', href: '#commands', variant: 'primary' as const },
    { label: 'GitHub', href: 'https://github.com/dean0x/skim', variant: 'secondary' as const },
  ],
};

export const features: BentoItemProps[] = [
  {
    icon: Rocket,
    title: 'Blazing Fast',
    desc: '14.6ms for 3000-line files — 3x faster than the 50ms target. Built in Rust with tree-sitter.',
    size: 'sm',
  },
  {
    icon: Zap,
    title: '40-50x Cache Speedup',
    desc: 'SHA256-based caching enabled by default. First run 244ms, cached 5ms.',
    size: 'sm',
  },
  {
    icon: Globe,
    title: '9 Languages',
    desc: 'TypeScript, JavaScript, Python, Rust, Go, Java, Markdown, JSON, YAML — with auto-detection.',
    size: 'md',
  },
  {
    icon: Crosshair,
    title: '4 Transformation Modes',
    desc: 'Structure (60% reduction), Signatures (88%), Types (92%), or Full. Choose your context budget.',
    size: 'md',
  },
  {
    icon: FolderOpen,
    title: 'Directory & Glob Support',
    desc: 'Process entire directories recursively or use glob patterns with parallel processing.',
    size: 'sm',
  },
  {
    icon: Waves,
    title: 'Streaming Output',
    desc: 'Pipe-friendly stdout output. Works with bat, llm, less, or any Unix tool.',
    size: 'sm',
  },
];

export const terminalWalkthrough = [
  {
    cmd: 'skim src/auth.ts --mode signatures',
    output: [
      'export function login(user: User): Promise<Session>',
      'export function logout(): void',
      'export function refreshToken(token: string): Promise<Token>',
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
      '[skim] 24,192 tokens → 3,420 tokens (85.8% reduction)',
    ],
  },
];

export const modesComparison = [
  { mode: 'Full', tokens: '63,198', reduction: '0%', useCase: 'Original source — testing/comparison' },
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
  { cmd: '--show-stats', desc: 'Display token reduction statistics', example: 'skim src/ --show-stats' },
  { cmd: 'skim <glob>', desc: 'Match files by pattern', example: "skim '**/*.ts'" },
];

export const installMethods = [
  { label: 'npx', command: 'npx rskim src/app.ts' },
  { label: 'npm', command: 'npm install -g rskim' },
  { label: 'Cargo', command: 'cargo install rskim' },
];
