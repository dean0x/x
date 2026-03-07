import { useEffect } from 'react';
import { IllustrationCard } from './components/IllustrationCard';
import * as MarsIcons from './illustrations/mars';
import * as SkimIcons from './illustrations/skim';
import * as MinoIcons from './illustrations/mino';
import * as SiloIcons from './illustrations/silo';
import * as DevFlowIcons from './illustrations/devflow';
import * as BackbeatIcons from './illustrations/backbeat';
import './illustrations.css';

// MARS FEATURES
const marsFeatures = [
  {
    title: 'Unified Workspace',
    desc: 'Manage multiple Git repositories as a single coordinated workspace with a simple mars.yaml config',
    icon: <MarsIcons.UnifiedWorkspace />,
    accent: '#f97316'
  },
  {
    title: 'Shared Claude Config',
    desc: 'One claude.md and .claude/ folder shared across all repos — consistent AI behavior everywhere',
    icon: <MarsIcons.SharedClaudeConfig />,
    accent: '#f97316'
  },
  {
    title: 'Parallel Cloning',
    desc: 'Clone all workspace repos in parallel with automatic rate limiting — 4 concurrent jobs',
    icon: <MarsIcons.ParallelCloning />,
    accent: '#f97316'
  },
  {
    title: 'Tag-Based Filtering',
    desc: 'Tag repos by role (frontend, backend, shared) and run commands against specific groups',
    icon: <MarsIcons.TagBasedFiltering />,
    accent: '#f97316'
  },
  {
    title: 'Status Overview',
    desc: 'See git status across all repos at a glance — dirty files, branch info, sync state',
    icon: <MarsIcons.StatusOverview />,
    accent: '#f97316'
  },
  {
    title: 'Branch Management',
    desc: 'Create and checkout branches across multiple repos simultaneously',
    icon: <MarsIcons.BranchManagement />,
    accent: '#f97316'
  },
  {
    title: 'Sync with Rebase',
    desc: 'Pull latest changes across all repos with optional rebase — keep histories clean',
    icon: <MarsIcons.SyncRebase />,
    accent: '#f97316'
  },
  {
    title: 'Exec Across Repos',
    desc: 'Run any shell command across all (or tagged) repos — npm install, tests, builds',
    icon: <MarsIcons.ExecAcrossRepos />,
    accent: '#f97316'
  }
];

// SKIM FEATURES
const skimFeatures = [
  {
    title: 'Blazing Fast',
    desc: '14.6ms for 3000-line files — 3x faster than the 50ms target. Built in Rust with tree-sitter.',
    icon: <SkimIcons.BlazingFast />,
    accent: '#3b82f6'
  },
  {
    title: '40-50x Cache Speedup',
    desc: 'SHA256-based caching enabled by default. First run 244ms, cached 5ms.',
    icon: <SkimIcons.CacheSpeedup />,
    accent: '#3b82f6'
  },
  {
    title: '9 Languages',
    desc: 'TypeScript, JavaScript, Python, Rust, Go, Java, Markdown, JSON, YAML — with auto-detection.',
    icon: <SkimIcons.NineLanguages />,
    accent: '#3b82f6'
  },
  {
    title: '4 Transformation Modes',
    desc: 'Structure (60% reduction), Signatures (88%), Types (92%), or Full. Choose your context budget.',
    icon: <SkimIcons.TransformationModes />,
    accent: '#3b82f6'
  },
  {
    title: 'Directory & Glob Support',
    desc: 'Process entire directories recursively or use glob patterns with parallel processing.',
    icon: <SkimIcons.DirectorySupport />,
    accent: '#3b82f6'
  },
  {
    title: 'Streaming Output',
    desc: 'Pipe-friendly stdout output. Works with bat, llm, less, or any Unix tool.',
    icon: <SkimIcons.StreamingOutput />,
    accent: '#3b82f6'
  }
];

// MINO FEATURES
const minoFeatures = [
  {
    title: 'Project-Only Mount',
    desc: 'Only your project directory is mounted — no home folder, no dotfiles, no credentials leaking into the container.',
    icon: <MinoIcons.ProjectOnlyMount />,
    accent: '#10b981'
  },
  {
    title: 'Temporary Credentials',
    desc: 'Short-lived AWS, GCP, and Azure tokens (1-12 hours) replace permanent ~/.aws/credentials. Auto-expire, auto-rotate.',
    icon: <MinoIcons.TemporaryCredentials />,
    accent: '#10b981'
  },
  {
    title: 'SSH Agent Forwarding',
    desc: 'Git operations work via SSH agent forwarding — private keys never leave your host machine.',
    icon: <MinoIcons.SshAgentForwarding />,
    accent: '#10b981'
  },
  {
    title: 'Content-Addressed Cache',
    desc: 'Persistent build cache that survives container crashes. Content-addressed for deduplication and integrity.',
    icon: <MinoIcons.ContentAddressedCache />,
    accent: '#10b981'
  },
  {
    title: 'Network Isolation',
    desc: 'Four modes: bridge (default), host, none, or iptables allowlist. Built-in presets for dev and registry services.',
    icon: <MinoIcons.NetworkIsolation />,
    accent: '#10b981'
  },
  {
    title: 'Rootless Podman',
    desc: 'No Docker daemon, no root access. OrbStack + Podman gives you fast, secure, rootless containers on macOS.',
    icon: <MinoIcons.RootlessPodman />,
    accent: '#10b981'
  },
  {
    title: 'Defense-in-Depth',
    desc: 'Capability dropping, privilege escalation prevention, PID limits, and automatic container cleanup after exit.',
    icon: <MinoIcons.DefenseInDepth />,
    accent: '#10b981'
  },
  {
    title: 'Network Presets',
    desc: 'Built-in allowlists for common services — GitHub, npm, crates.io, PyPI, AI APIs. One flag: --network-preset dev.',
    icon: <MinoIcons.NetworkPresets />,
    accent: '#10b981'
  }
];

// SILO FEATURES
const siloFeatures = [
  {
    title: 'Separate Locked Keychain',
    desc: 'Production secrets live in their own keychain, not your login keychain. macOS password dialog required for every access.',
    icon: <SiloIcons.SeparateLockedKeychain />,
    accent: '#ec4899'
  },
  {
    title: 'Auto-Lock After Every Op',
    desc: 'The protected keychain locks immediately after each read, write, or delete operation.',
    icon: <SiloIcons.AutoLockAfterOp />,
    accent: '#ec4899'
  },
  {
    title: 'CLI + SDK',
    desc: 'Use the silo command for quick operations, or import the TypeScript SDK with Result types for programmatic access.',
    icon: <SiloIcons.CliSdk />,
    accent: '#ec4899'
  },
  {
    title: 'Pipe-Friendly Output',
    desc: 'silo get outputs raw values to stdout — perfect for shell scripts and automation pipelines.',
    icon: <SiloIcons.PipeFriendlyOutput />,
    accent: '#ec4899'
  }
];

// DEVFLOW FEATURES
const devflowFeatures = [
  {
    title: '/specify',
    desc: 'Transform ideas into implementation-ready specs with 3 mandatory clarification gates.',
    icon: <DevFlowIcons.Specify />,
    accent: '#8b5cf6'
  },
  {
    title: '/implement',
    desc: 'Full lifecycle: explore, plan, code, validate, and PR. Agent teams debate before coding.',
    icon: <DevFlowIcons.Implement />,
    accent: '#8b5cf6'
  },
  {
    title: '/code-review',
    desc: '7-11 specialist reviewers (security, architecture, performance) challenge each other.',
    icon: <DevFlowIcons.CodeReview />,
    accent: '#8b5cf6'
  },
  {
    title: '/debug',
    desc: '3-5 agents generate hypotheses, investigate in parallel, and debate to converge on root cause.',
    icon: <DevFlowIcons.Debug />,
    accent: '#8b5cf6'
  },
  {
    title: '/resolve',
    desc: 'Validates review issues, fixes low-risk immediately, defers high-risk to tech debt backlog.',
    icon: <DevFlowIcons.Resolve />,
    accent: '#8b5cf6'
  },
  {
    title: '/self-review',
    desc: 'Post-implementation refinement: Simplifier reduces complexity, Scrutinizer catches edge cases.',
    icon: <DevFlowIcons.SelfReview />,
    accent: '#8b5cf6'
  },
  {
    title: '/ambient',
    desc: 'Auto-loads relevant skills based on prompt intent. Always-on mode classifies every prompt — zero ceremony.',
    icon: <DevFlowIcons.Ambient />,
    accent: '#8b5cf6'
  },
  {
    title: 'Working Memory',
    desc: 'Session context survives restarts, /clear, and compaction. Automatic — no manual steps needed.',
    icon: <DevFlowIcons.WorkingMemory />,
    accent: '#8b5cf6'
  }
];

// BACKBEAT FEATURES
const backbeatFeatures = [
  {
    title: 'Task Delegation',
    desc: 'Submit tasks to background Claude Code instances — fire-and-forget or foreground streaming',
    icon: <BackbeatIcons.TaskDelegation />,
    accent: '#f43f5e'
  },
  {
    title: 'Autoscaling',
    desc: 'Workers spawn based on CPU and memory — maintains 20% headroom automatically',
    icon: <BackbeatIcons.Autoscaling />,
    accent: '#f43f5e'
  },
  {
    title: 'DAG Dependencies',
    desc: 'Chain tasks with dependency graphs, cycle detection, and diamond pattern support',
    icon: <BackbeatIcons.DagDependencies />,
    accent: '#f43f5e'
  },
  {
    title: 'Task Scheduling',
    desc: 'Cron schedules, one-time runs, timezone support, and missed-run policies',
    icon: <BackbeatIcons.TaskScheduling />,
    accent: '#f43f5e'
  },
  {
    title: 'Persistence & Recovery',
    desc: 'SQLite-backed task storage with WAL mode — auto-recovers queued tasks on startup',
    icon: <BackbeatIcons.PersistenceRecovery />,
    accent: '#f43f5e'
  },
  {
    title: 'Task Resumption',
    desc: 'Checkpoint on completion/failure — resume with enriched context and retry chains',
    icon: <BackbeatIcons.TaskResumption />,
    accent: '#f43f5e'
  },
  {
    title: 'Event-Driven Core',
    desc: 'Zero direct state management — all coordination through a centralized EventBus',
    icon: <BackbeatIcons.EventDrivenCore />,
    accent: '#f43f5e'
  },
  {
    title: 'Session Continuation',
    desc: 'Dependent tasks receive checkpoint context — git state, output summary flow downstream',
    icon: <BackbeatIcons.SessionContinuation />,
    accent: '#f43f5e'
  }
];

function App() {
  useEffect(() => {
    // Default global accent (Mars)
    const root = document.documentElement;
    root.style.setProperty('--accent', '#f97316');
  }, []);

  return (
    <div className="min-h-screen bg-[var(--color-bg-base)] p-8 md:p-12 font-sans text-[var(--color-text-primary)]">
      <header className="mb-12 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight mb-4 text-white">Illustration Review</h1>
        <p className="text-xl text-[var(--color-text-secondary)]">
          Supabase-style animated SVG feature cards.
        </p>
      </header>

      <main className="max-w-7xl mx-auto space-y-20 pb-20">
        
        {/* MARS */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-semibold text-white">Mars</h2>
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-orange-500/10 text-orange-500 border border-orange-500/20">
              Workspace Manager
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {marsFeatures.map((feature, idx) => (
              <IllustrationCard key={idx} title={feature.title} description={feature.desc} accent={feature.accent}>
                {feature.icon}
              </IllustrationCard>
            ))}
          </div>
        </section>

        {/* SKIM */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-semibold text-white">Skim</h2>
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-blue-500/10 text-blue-500 border border-blue-500/20">
              Code Reader
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skimFeatures.map((feature, idx) => (
              <IllustrationCard key={idx} title={feature.title} description={feature.desc} accent={feature.accent}>
                {feature.icon}
              </IllustrationCard>
            ))}
          </div>
        </section>

        {/* MINO */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-semibold text-white">Mino</h2>
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
              Secure Sandbox
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {minoFeatures.map((feature, idx) => (
              <IllustrationCard key={idx} title={feature.title} description={feature.desc} accent={feature.accent}>
                {feature.icon}
              </IllustrationCard>
            ))}
          </div>
        </section>

        {/* SILO */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-semibold text-white">Silo</h2>
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-pink-500/10 text-pink-500 border border-pink-500/20">
              Secret Management
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siloFeatures.map((feature, idx) => (
              <IllustrationCard key={idx} title={feature.title} description={feature.desc} accent={feature.accent}>
                {feature.icon}
              </IllustrationCard>
            ))}
          </div>
        </section>

        {/* DEVFLOW */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-semibold text-white">DevFlow</h2>
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-violet-500/10 text-violet-500 border border-violet-500/20">
              Agent Toolkit
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {devflowFeatures.map((feature, idx) => (
              <IllustrationCard key={idx} title={feature.title} description={feature.desc} accent={feature.accent}>
                {feature.icon}
              </IllustrationCard>
            ))}
          </div>
        </section>

        {/* BACKBEAT */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-semibold text-white">Backbeat</h2>
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-rose-500/10 text-rose-500 border border-rose-500/20">
              Task Orchestration
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {backbeatFeatures.map((feature, idx) => (
              <IllustrationCard key={idx} title={feature.title} description={feature.desc} accent={feature.accent}>
                {feature.icon}
              </IllustrationCard>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}

export default App;
