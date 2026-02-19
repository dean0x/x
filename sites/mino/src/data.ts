import { FolderLock, KeyRound, Link, HardDrive, Shield, Container, Beer, Package } from 'lucide-react';

export const meta = {
  name: 'mino',
  version: 'v1.0.0',
  runtime: 'Rust',
  github: 'https://github.com/dean0x/mino',
} as const;

export const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Why Mino', href: '#comparison' },
  { label: 'Commands', href: '#commands' },
] as const;

export const heroData = {
  badge: 'v1.0.0 — Rust',
  title: 'Secure Sandbox for',
  titleAccent: 'AI Agents',
  subtitle:
    'Defense-in-depth isolation for AI coding agents. Temp credentials, project-only mounts, network controls. No more permanent keys in containers.',
  actions: [
    { label: 'Get Started', href: '#commands', variant: 'primary' as const },
    { label: 'GitHub', href: 'https://github.com/dean0x/mino', variant: 'secondary' as const },
  ],
};

export const features = [
  {
    icon: FolderLock,
    title: 'Project-Only Mount',
    desc: 'Only your project directory is mounted — no home folder, no dotfiles, no credentials leaking into the container.',
  },
  {
    icon: KeyRound,
    title: 'Temporary Credentials',
    desc: 'Short-lived AWS, GCP, and Azure tokens (1-12 hours) replace permanent ~/.aws/credentials. Auto-expire, auto-rotate.',
  },
  {
    icon: Link,
    title: 'SSH Agent Forwarding',
    desc: 'Git operations work via SSH agent forwarding — private keys never leave your host machine.',
  },
  {
    icon: HardDrive,
    title: 'Content-Addressed Cache',
    desc: 'Persistent build cache that survives container crashes. Content-addressed for deduplication and integrity.',
  },
  {
    icon: Shield,
    title: 'Network Isolation',
    desc: 'Three modes: host (full access), none (air-gapped), or iptables allowlist for specific domains only.',
  },
  {
    icon: Container,
    title: 'Rootless Podman',
    desc: 'No Docker daemon, no root access. OrbStack + Podman gives you fast, secure, rootless containers on macOS.',
  },
];

export const comparison = [
  { aspect: 'Credentials', devContainers: 'Mounts ~/.aws, ~/.ssh permanently', mino: 'Temp tokens (1-12h), SSH forwarding only' },
  { aspect: 'Filesystem', devContainers: 'Mounts entire home directory', mino: 'Project directory only — nothing else' },
  { aspect: 'Network', devContainers: 'Full network access always', mino: 'Configurable: host, none, or allowlist' },
  { aspect: 'Runtime', devContainers: 'Docker daemon (root)', mino: 'Rootless Podman via OrbStack' },
  { aspect: 'Persistence', devContainers: 'Volume mounts', mino: 'Content-addressed cache (crash-safe)' },
  { aspect: 'Setup', devContainers: 'devcontainer.json + Dockerfile', mino: 'Zero config — mino run' },
];

export const commands = [
  { cmd: 'mino run', desc: 'Launch sandboxed shell in current project' },
  { cmd: 'mino run --network none', desc: 'Air-gapped sandbox with no network' },
  { cmd: 'mino run --aws', desc: 'Include temporary AWS credentials (STS)' },
  { cmd: 'mino cache list', desc: 'Show cached layers and sizes' },
  { cmd: 'mino config', desc: 'Show/edit sandbox configuration' },
];

export const installMethods = [
  { icon: Beer, label: 'Homebrew', command: 'brew install dean0x/tap/mino' },
  { icon: Package, label: 'npm', command: 'npm install -g @dean0x/mino' },
];

export const workflowSteps = [
  {
    title: 'Start a sandbox',
    desc: 'One command launches an isolated environment with only your project mounted',
    code: 'cd my-project\nmino run',
    codeTitle: 'terminal',
  },
  {
    title: 'Add cloud credentials',
    desc: 'Inject temporary tokens that auto-expire — no permanent credentials exposed',
    code: 'mino run --aws --gcp\n# Tokens expire in 1 hour by default',
    codeTitle: 'terminal',
  },
  {
    title: 'Lock down the network',
    desc: 'Restrict network access to only the domains your project needs',
    code: 'mino run --network allowlist \\\n  --allow github.com \\\n  --allow registry.npmjs.org',
    codeTitle: 'terminal',
  },
];
