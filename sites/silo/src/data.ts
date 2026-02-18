import { Lock, Timer, Terminal, SquareTerminal, Package } from 'lucide-react';

export const meta = {
  name: 'Silo',
  version: 'v1.0.0',
  language: 'TypeScript',
  github: 'https://github.com/dean0x/silo',
  npm: '@dean0x/silo',
};

export const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Threat Model', href: '#threat-model' },
  { label: 'Install', href: '#install' },
];

export const heroData = {
  badge: 'v1.0.0 — TypeScript / macOS',
  title: 'OS-Enforced Secret',
  titleAccent: 'Protection',
  subtitle:
    'Stop AI agents from silently stealing production credentials. A separate locked macOS keychain with a system-level password dialog that no code can bypass.',
  actions: [
    { label: 'Get Started', href: '#install', variant: 'primary' as const },
    { label: 'GitHub', href: 'https://github.com/dean0x/silo', variant: 'secondary' as const },
  ],
};

export const features = [
  {
    icon: Lock,
    title: 'Separate Locked Keychain',
    desc: 'Production secrets live in their own keychain \u2014 not your login keychain. macOS password dialog required for every access.',
  },
  {
    icon: Timer,
    title: 'Auto-Lock After Every Op',
    desc: 'The protected keychain locks immediately after each read, write, or delete. No window of vulnerability.',
  },
  {
    icon: Terminal,
    title: 'CLI + SDK',
    desc: 'Use the silo command for quick operations, or import the TypeScript SDK for programmatic access with Result types.',
  },
  {
    icon: SquareTerminal,
    title: 'Pipe-Friendly Output',
    desc: 'silo get outputs raw values to stdout \u2014 perfect for shell scripts, .env generation, and automation pipelines.',
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

export const threatModelBefore = `# Without Silo \u2014 Login Keychain
Agent runs: security find-generic-password -w -s "myapp" -a "db-production"
\u2192 Secret returned silently \u2717
\u2192 No dialog, no audit trail
\u2192 Prompt injection \u2192 silent exfiltration`;

export const threatModelAfter = `# With Silo \u2014 Locked Keychain
Agent runs: security find-generic-password -w -s "myapp" -a "db-production"
\u2192 macOS password dialog appears \u2713
\u2192 Agent cannot type the password
\u2192 Human must approve each access`;

export const workflowSteps = [
  {
    title: 'Create a locked keychain',
    desc: 'One command creates a separate keychain with auto-lock settings for your service',
    code: 'silo init my-app',
    codeTitle: 'terminal',
  },
  {
    title: 'Store production secrets',
    desc: 'Accounts containing \'production\' are automatically routed to the locked keychain',
    code: 'silo store my-app db-production "postgres://prod:secret@host/db"\nsilo store my-app db-staging "postgres://staging:pass@host/db"',
    codeTitle: 'terminal',
  },
  {
    title: 'Access with OS protection',
    desc: 'Production reads trigger a macOS password dialog. Staging reads are silent.',
    code: 'silo get my-app db-production  # \u2192 macOS dialog\nsilo get my-app db-staging      # \u2192 silent',
    codeTitle: 'terminal',
  },
];
