import type { BentoItemProps } from '@cli-pages/shared';
import { Lock, Timer, Terminal, SquareTerminal, Package } from 'lucide-react';

export const meta = {
  name: 'silo',
  version: 'v1.0.0',
  language: 'TypeScript',
  github: 'https://github.com/dean0x/silo',
  npm: '@dean0x/silo',
};

export const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Threat Model', href: '#threat-model' },
  { label: 'Commands', href: '#commands' },
];

export const heroData = {
  title: 'OS-Enforced Secret',
  titleAccent: 'Protection',
  subtitle:
    'Stop AI agents from silently stealing production credentials. A separate locked macOS keychain with a system-level password dialog that no code can bypass.',
  actions: [
    { label: 'Get Started', href: '#commands', variant: 'primary' as const },
    { label: 'GitHub', href: 'https://github.com/dean0x/silo', variant: 'secondary' as const },
  ],
};

export const features: BentoItemProps[] = [
  {
    icon: Lock,
    title: 'Separate Locked Keychain',
    desc: 'Production secrets live in their own keychain, not your login keychain. macOS password dialog required for every access.',
    size: 'md',
  },
  {
    icon: Timer,
    title: 'Auto-Lock After Every Op',
    desc: 'The protected keychain locks immediately after each read, write, or delete operation.',
    size: 'sm',
  },
  {
    icon: Terminal,
    title: 'CLI + SDK',
    desc: 'Use the silo command for quick operations, or import the TypeScript SDK with Result types for programmatic access.',
    size: 'sm',
  },
  {
    icon: SquareTerminal,
    title: 'Pipe-Friendly Output',
    desc: 'silo get outputs raw values to stdout — perfect for shell scripts and automation pipelines.',
    size: 'md',
  },
];

export const terminalWalkthrough = [
  {
    cmd: 'silo init my-app',
    output: [
      '🔒 Created locked keychain: my-app-protected',
      '   Locks automatically after every access',
    ],
  },
  {
    cmd: 'silo store my-app db-production "postgres://prod:s3cret@host/db"',
    output: [
      '✅ Stored "db-production" → locked keychain (my-app)',
    ],
  },
  {
    cmd: 'silo get my-app db-production',
    output: [
      '🔐 Keychain locked — macOS password dialog required',
      '   [agent cannot bypass this prompt]',
    ],
  },
];

export const commands = [
  { cmd: 'silo init <service>', desc: 'Create a locked keychain for a service' },
  { cmd: 'silo store <service> <account> <value>', desc: 'Store a secret (auto-routes production to locked keychain)' },
  { cmd: 'silo get <service> <account>', desc: 'Retrieve a secret (password dialog if production)' },
  { cmd: 'silo remove <service> <account>', desc: 'Delete a secret from the keychain' },
  { cmd: 'silo status <service>', desc: 'Check if keychain exists and its lock state' },
];

export const installMethods = [
  { icon: Package, label: 'npm', command: 'npm install -g @dean0x/silo' },
];

export const threatComparison = [
  { aspect: 'Secret access', without: 'Returned silently — no prompt', with: 'macOS password dialog appears' },
  { aspect: 'Audit trail', without: 'None — no record of access', with: 'Human must approve each access' },
  { aspect: 'Prompt injection', without: 'Silent exfiltration possible', with: 'Blocked — agent cannot type password' },
  { aspect: 'Credential scope', without: 'All keychain items accessible', with: 'Locked keychain — isolated per service' },
];
