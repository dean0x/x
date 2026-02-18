# cli-landing-pages

Monorepo of 5 single-page landing sites for CLI tools, built with shared components.

- **Stack**: pnpm workspaces, Vite 6, React 19, TypeScript, CSS custom properties
- **No router, no Tailwind, no CSS-in-JS** — intentional. Each site is one static page.
- **Pattern**: Data-driven. Content lives in `data.ts`, composition in `App.tsx`, shared components render everything.
- **Sites**: Mars (multi-repo CLI), Skim (code transformer), Mino (secure sandbox), Silo (keychain protection), DevFlow (agent workflows)

## Commands

```bash
pnpm install                        # Install all deps
pnpm dev:mars                       # Dev server for mars (also: dev:skim, dev:mino, dev:silo, dev:devflow)
pnpm build                          # Build all sites (alias: pnpm -r build)
pnpm preview                        # Preview all built sites
pnpm --filter mars-site dev         # Target a specific site by package name
pnpm --filter mars-site build       # Build only mars
pnpm -r build                       # Recursive build across all packages
```

- Each site's build command is `tsc -b && vite build`
- Build output: `sites/{name}/dist/` (~212KB each, deployable static site)

## Workspace Structure

```
cli-landing-pages/
├── package.json                    # Root scripts (dev:{site}, build, preview)
├── pnpm-workspace.yaml             # Declares packages/ and sites/ globs
├── tsconfig.base.json              # Shared TS config (ES2022, React JSX, strict)
├── packages/
│   └── shared/                     # @cli-pages/shared — component library + design system
│       ├── package.json            # Exports: "." → src/index.ts, "./styles" → src/styles/global.css
│       └── src/
│           ├── index.ts            # Re-exports all components
│           ├── components/         # Layout, Hero, Section, FeatureGrid, etc.
│           └── styles/
│               └── global.css      # Design system: CSS custom properties + component styles
└── sites/
    └── {name}/                     # mars | skim | mino | silo | devflow
        ├── package.json            # Name: {name}-site, deps: react, react-dom, @cli-pages/shared
        ├── index.html              # Entry HTML
        ├── vite.config.ts          # Minimal: defineConfig({ plugins: [react()] })
        └── src/
            ├── main.tsx            # ReactDOM.createRoot + import '@cli-pages/shared/styles'
            ├── App.tsx             # Composition: accent colors + shared components + data
            └── data.ts             # All content: heroData, features, commands, etc.
```

## Design System

### CSS Custom Properties (set in `packages/shared/src/styles/global.css`)

| Property | Value | Purpose |
|----------|-------|---------|
| `--accent` | _(per-site)_ | Primary brand color |
| `--accent-secondary` | _(per-site)_ | Gradient endpoint |
| `--bg-primary` | `#0a0a0f` | Page background |
| `--bg-secondary` | `#12121a` | Section alt background |
| `--bg-tertiary` | `#1a1a25` | Elevated surfaces |
| `--bg-card` | `#14141f` | Card background |
| `--bg-code` | `#0d0d14` | Code block background |
| `--text-primary` | `#e8e8f0` | Body text |
| `--text-secondary` | `#a0a0b8` | Supporting text |
| `--text-muted` | `#606078` | Disabled/hint text |
| `--border` | `#1e1e2e` | Default border |
| `--border-hover` | `#2a2a3e` | Hover border |
| `--radius-sm/md/lg/xl` | `6/10/16/20px` | Border radii |
| `--font-mono` | SF Mono, Fira Code, JetBrains Mono | Code font |
| `--font-sans` | System font stack | UI font |

### Per-Site Accent Colors

| Site | `--accent` | `--accent-secondary` |
|------|-----------|---------------------|
| Mars | `#e04040` | `#e87040` |
| Skim | `#e87040` | `#f0a030` |
| Mino | `#30b878` | `#20a0a0` |
| Silo | `#8060e0` | `#6040c0` |
| DevFlow | `#3080e0` | `#20b0e0` |

Sites set accents in `App.tsx` via `useEffect`:
```tsx
useEffect(() => {
  document.documentElement.style.setProperty('--accent', '#e04040');
  document.documentElement.style.setProperty('--accent-secondary', '#e87040');
}, []);
```

### Key CSS Classes

| Class | Usage |
|-------|-------|
| `.gradient-text` | Text gradient using `--accent` → `--accent-secondary` |
| `.btn-primary` | Gradient button with accent shadow |
| `.btn-secondary` | Bordered secondary button |
| `.feature-card` | Card with hover transform |
| `.command-table` | CLI command reference table |
| `.install-block` | Hero install block with package manager tabs |
| `.code-block` | Terminal-style code display |
| `.workflow-step` | Numbered step with 2-column layout |

## Shared Component API

Import: `import { Component } from '@cli-pages/shared'`
Styles: `import '@cli-pages/shared/styles'` (in main.tsx only)

### Layout
```ts
{ brand: string; brandIcon?: string; navLinks: NavLink[]; githubUrl: string; children: ReactNode }
// NavLink = { label: string; href: string }
```

### Hero
```ts
{ badge: string; title: string; titleAccent: string; subtitle: string; actions: HeroAction[] }
// HeroAction = { label: string; href: string; variant: 'primary' | 'secondary' }
```

### Section
```ts
{ id?: string; title: string; children: ReactNode }
```

### FeatureGrid
```ts
{ features: Feature[] }
// Feature = { icon: string; title: string; desc: string }
```

### CodeBlock
```ts
{ title: string; children: ReactNode }
```

### CommandTable
```ts
{ commands: Command[] }
// Command = { cmd: string; desc: string }
```

### InstallBlock
```ts
{ methods: InstallOption[] }
// InstallOption = { label: string; command: string }
// Pill tabs for 2+ methods, single command row for 1 method
// Persists selected tab in localStorage
```

### WorkflowSteps
```ts
{ steps: WorkflowStep[] }
// WorkflowStep = { title: string; desc: string; code?: string; codeTitle?: string }
```

## Data Layer

Every site's `data.ts` must export these standard shapes:

```ts
export const meta: { name: string; version: string; github: string; ... }
export const navLinks: NavLink[]
export const heroData: HeroProps
export const features: Feature[]
export const commands: Command[]
export const installMethods: InstallMethod[]
export const workflowSteps: WorkflowStep[]
```

Data types match component props exactly — no transformation layer between `data.ts` and components.

### Site-Specific Exports

| Site | Extra Exports |
|------|---------------|
| Mars | _(standard only)_ |
| Skim | `modesComparison: { mode, tokens, reduction, useCase }[]` |
| Mino | `comparison: { aspect, devContainers, mino }[]` |
| Silo | `threatModelBefore: string`, `threatModelAfter: string` |
| DevFlow | `architecture: { plugins, agents, skillCategories }` |

## Adding a New Site

1. Copy any existing site directory: `cp -r sites/mars sites/newcli`
2. Update `sites/newcli/package.json`: set `name` to `newcli-site`
3. Write `src/data.ts` with all required exports (heroData, features, commands, installMethods, workflowSteps, navLinks)
4. Update `src/App.tsx`: set accent colors in useEffect, import data, compose components
5. Add dev script to root `package.json`: `"dev:newcli": "pnpm --filter newcli-site dev"`
6. Run `pnpm install` to link workspace deps

**Required files**: `package.json`, `index.html`, `vite.config.ts`, `src/main.tsx`, `src/App.tsx`, `src/data.ts`

## Rules

### Always
- Use shared components from `@cli-pages/shared` — never duplicate component code per site
- Set `--accent` and `--accent-secondary` in `App.tsx` useEffect
- Put content in `data.ts`, composition in `App.tsx` — keep them separate
- Data exports must match component prop types exactly
- Import styles via `import '@cli-pages/shared/styles'` in `main.tsx`

### Never
- Add runtime dependencies beyond `react` and `react-dom`
- Add CSS-in-JS or Tailwind — use CSS custom properties
- Add client-side routing — each site is a single page
- Add a bundled CSS framework — the design system is in `global.css`

### Allowed
- Per-site custom CSS files for unique sections (like `devflow.css` for architecture layout)
- Per-site custom components for sections that don't fit shared patterns
- New shared components when 2+ sites need the same pattern

## Site-Specific Notes

- **DevFlow** is the only site with a custom CSS file (`src/devflow.css`) — adds `.arch-grid`, `.arch-card`, `.arch-plugins`, `.arch-agents`, `.arch-skills` classes for its architecture section
- **Skim** renders a modes comparison table (not a shared component — inline JSX)
- **Mino** renders a comparison table vs dev containers (inline JSX)
- **Silo** renders before/after threat model code blocks
- **Mars** is the simplest site — standard components only, good reference template

## Deployment (GitHub Pages)

Sites deploy to GitHub Pages under repo `x` via `.github/workflows/deploy.yml`.

- **Trigger**: push to `main`
- **URLs**: `username.github.io/x/mars/`, `username.github.io/x/skim/`, etc.
- **Base path**: Each `vite.config.ts` uses a conditional `base`:
  ```ts
  base: process.env.GITHUB_ACTIONS ? '/x/{name}/' : '/',
  ```
  Local dev stays on `/`, CI builds get the correct path prefix.
- **Root index**: The workflow generates `_site/index.html` listing all sites.
- **Requirement**: GitHub Pages must be enabled in repo settings → Pages → Source: GitHub Actions.

## Verification

```bash
pnpm -r build              # Must pass with zero errors
pnpm dev:{site}             # Visual check: accent colors, responsive layout, real content
```

- Each `dist/` should be ~212KB
- All sites must render with correct accent colors
- Responsive breakpoint at 768px: grids collapse to single column
