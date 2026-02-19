import { Rocket, Zap, Globe, Crosshair, FolderOpen, Waves, Package, Cog } from 'lucide-react';

export const meta = {
  name: 'skim',
  version: 'v0.9.5',
  runtime: 'Rust',
  npm: 'rskim',
  github: 'https://github.com/dean0x/skim',
} as const;

export const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Modes', href: '#modes' },
  { label: 'Commands', href: '#commands' },
] as const;

export const heroData = {
  badge: 'v0.9.5 — Rust',
  title: 'Strip Implementation,',
  titleAccent: 'Keep Structure',
  subtitle:
    'Smart code reader for AI agents. 60-90% token reduction while preserving architecture, signatures, and types. Built with tree-sitter.',
  actions: [
    { label: 'Get Started', href: '#commands', variant: 'primary' as const },
    { label: 'GitHub', href: 'https://github.com/dean0x/skim', variant: 'secondary' as const },
  ],
};

export const features = [
  {
    icon: Rocket,
    title: 'Blazing Fast',
    desc: '14.6ms for 3000-line files — 3x faster than the 50ms target. Built in Rust with tree-sitter.',
  },
  {
    icon: Zap,
    title: '40-50x Cache Speedup',
    desc: 'SHA256-based caching enabled by default. First run 244ms, cached 5ms.',
  },
  {
    icon: Globe,
    title: '9 Languages',
    desc: 'TypeScript, JavaScript, Python, Rust, Go, Java, Markdown, JSON, YAML — with auto-detection.',
  },
  {
    icon: Crosshair,
    title: '4 Transformation Modes',
    desc: 'Structure (60% reduction), Signatures (88%), Types (92%), or Full. Choose your context budget.',
  },
  {
    icon: FolderOpen,
    title: 'Directory & Glob Support',
    desc: 'Process entire directories recursively or use glob patterns with parallel processing.',
  },
  {
    icon: Waves,
    title: 'Streaming Output',
    desc: 'Pipe-friendly stdout output. Works with bat, llm, less, or any Unix tool.',
  },
];

export const modesComparison = [
  { mode: 'Full', tokens: '63,198', reduction: '0%', useCase: 'Original source — testing/comparison' },
  { mode: 'Structure', tokens: '25,119', reduction: '60.3%', useCase: 'Understanding architecture' },
  { mode: 'Signatures', tokens: '7,328', reduction: '88.4%', useCase: 'API documentation' },
  { mode: 'Types', tokens: '5,181', reduction: '91.8%', useCase: 'Type system analysis' },
];

export const commands = [
  { cmd: 'skim src/app.ts', desc: 'Transform a single file (auto-detects language)' },
  { cmd: 'skim src/', desc: 'Process entire directory recursively' },
  { cmd: "skim '*.ts' --mode signatures", desc: 'Extract only function signatures' },
  { cmd: 'skim file.ts --mode types', desc: 'Extract only type definitions' },
  { cmd: 'skim file.ts --show-stats', desc: 'Show token reduction statistics' },
  { cmd: 'skim - --language=typescript', desc: 'Read from stdin with language hint' },
];

export const installMethods = [
  { icon: Zap, label: 'npx', command: 'npx rskim src/app.ts' },
  { icon: Package, label: 'npm', command: 'npm install -g rskim' },
  { icon: Cog, label: 'Cargo', command: 'cargo install rskim' },
];

export const workflowSteps = [
  {
    title: 'Point at code',
    desc: 'Single file, directory, or glob pattern — Skim auto-detects the language',
    code: 'skim src/',
    codeTitle: 'terminal',
  },
  {
    title: 'Choose reduction level',
    desc: 'Structure keeps signatures. Signatures extracts callables. Types extracts definitions only.',
    code: 'skim src/ --mode signatures',
    codeTitle: 'terminal',
  },
  {
    title: 'Feed to your LLM',
    desc: 'Pipe the reduced output directly to your AI tool for analysis',
    code: 'skim src/ --no-header | llm "Analyze this codebase"',
    codeTitle: 'terminal',
  },
  {
    title: 'Repeat instantly',
    desc: 'Built-in caching makes subsequent runs 40-50x faster',
    code: 'skim src/ --show-stats\n# [skim] 63,198 → 7,328 tokens (88.4% reduction)',
    codeTitle: 'terminal',
  },
];
