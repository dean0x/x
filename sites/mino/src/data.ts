import type { BentoItemProps } from '@cli-pages/shared';
import { FolderLock, KeyRound, Link, HardDrive, Shield, Container, Beer, Package, ShieldCheck, Globe } from 'lucide-react';

export const meta = {
  name: 'mino',
  version: 'v1.2.0',
  runtime: 'Rust',
  github: 'https://github.com/dean0x/mino',
} as const;

export const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Why Mino', href: '#comparison' },
  { label: 'Commands', href: '#commands' },
] as const;

export const heroData = {
  title: 'Secure Sandbox for',
  titleAccent: 'AI Agents',
  subtitle:
    'Defense-in-depth isolation for AI coding agents. Temp credentials, project-only mounts, network controls. No more permanent keys in containers.',
  actions: [
    { label: 'Get Started', href: '#commands', variant: 'primary' as const },
    { label: 'GitHub', href: 'https://github.com/dean0x/mino', variant: 'secondary' as const },
  ],
};

export const features: BentoItemProps[] = [
  {
    icon: FolderLock,
    title: 'Project-Only Mount',
    desc: 'Only your project directory is mounted — no home folder, no dotfiles, no credentials leaking into the container.',
    size: 'md',
  },
  {
    icon: KeyRound,
    title: 'Temporary Credentials',
    desc: 'Short-lived AWS, GCP, and Azure tokens (1-12 hours) replace permanent ~/.aws/credentials. Auto-expire, auto-rotate.',
    size: 'sm',
  },
  {
    icon: Link,
    title: 'SSH Agent Forwarding',
    desc: 'Git operations work via SSH agent forwarding — private keys never leave your host machine.',
    size: 'sm',
  },
  {
    icon: HardDrive,
    title: 'Content-Addressed Cache',
    desc: 'Persistent build cache that survives container crashes. Content-addressed for deduplication and integrity.',
    size: 'sm',
  },
  {
    icon: Shield,
    title: 'Network Isolation',
    desc: 'Four modes: bridge (default), host, none, or iptables allowlist. Built-in presets for dev and registry services.',
    size: 'sm',
  },
  {
    icon: Container,
    title: 'Rootless Podman',
    desc: 'No Docker daemon, no root access. OrbStack + Podman gives you fast, secure, rootless containers on macOS.',
    size: 'md',
  },
  {
    icon: ShieldCheck,
    title: 'Defense-in-Depth',
    desc: 'Capability dropping, privilege escalation prevention, PID limits, and automatic container cleanup after exit.',
    size: 'sm',
  },
  {
    icon: Globe,
    title: 'Network Presets',
    desc: 'Built-in allowlists for common services — GitHub, npm, crates.io, PyPI, AI APIs. One flag: --network-preset dev.',
    size: 'md',
  },
];

export const terminalWalkthrough = [
  {
    cmd: 'mino run',
    output: [
      '◇  Image: fedora-toolbox (cached)',
      '◇  Network: bridge',
      '◇  Mounts: /workspace → project only',
      '✓  Session e7f2a1 ready',
    ],
  },
  {
    cmd: 'mino run --aws -- claude',
    output: [
      '◇  AWS: temporary credentials (12h)',
      '◇  Network: bridge',
      '◇  SSH: agent forwarding enabled',
      '✓  Session a3b8c2 ready — claude starting',
    ],
  },
];

export const comparison = [
  { aspect: 'Credentials', devContainers: 'Mounts ~/.aws, ~/.ssh permanently', mino: 'Temp tokens (1-12h), SSH forwarding only' },
  { aspect: 'Filesystem', devContainers: 'Mounts entire home directory', mino: 'Project directory only — nothing else' },
  { aspect: 'Network', devContainers: 'Full network access always', mino: 'Bridge default, host, none, allowlist, or presets' },
  { aspect: 'Runtime', devContainers: 'Docker daemon (root)', mino: 'Rootless Podman via OrbStack' },
  { aspect: 'Persistence', devContainers: 'Volume mounts', mino: 'Content-addressed cache (crash-safe)' },
  { aspect: 'Security', devContainers: 'Full Linux capabilities', mino: 'cap-drop ALL, no-new-privileges, PID limits' },
  { aspect: 'Setup', devContainers: 'devcontainer.json + Dockerfile', mino: 'Zero config — mino run' },
];

export const commandColumns = [
  { key: 'cmd', header: 'Command', highlight: 'accent' as const },
  { key: 'desc', header: 'Description' },
  { key: 'example', header: 'Example' },
];

export const commandRows = [
  { cmd: 'mino run', desc: 'Launch sandboxed shell in project', example: 'mino run' },
  { cmd: 'mino run --aws', desc: 'Include temporary cloud credentials', example: 'mino run --aws -- claude' },
  { cmd: 'mino run --network', desc: 'Control network isolation', example: 'mino run --network none' },
  { cmd: 'mino list', desc: 'List active and stopped sessions', example: 'mino list' },
  { cmd: 'mino stop', desc: 'Stop a running session', example: 'mino stop e7f2a1' },
  { cmd: 'mino config', desc: 'Show or edit sandbox configuration', example: 'mino config --edit' },
];

export const installMethods = [
  { icon: Beer, label: 'Homebrew', command: 'brew install dean0x/tap/mino' },
  { icon: Package, label: 'npm', command: 'npm install -g @dean0x/mino' },
];
