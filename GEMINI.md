# GEMINI.md - Project Context & Instructions

This monorepo manages five high-performance, single-page landing sites for CLI tools. It is built for visual consistency and high performance using a shared component library and a data-driven content model.

## Project Overview

- **Purpose**: Fast, accessible, and beautiful landing pages for the `mars`, `skim`, `mino`, `silo`, and `devflow` CLI tools.
- **Tech Stack**:
  - **Runtime/Build**: Node.js, pnpm (workspaces), Vite 6.
  - **Frontend**: React 19, TypeScript.
  - **Styling**: Vanilla CSS with CSS Custom Properties (Variables). No Tailwind, CSS-in-JS, or external CSS frameworks.
  - **Shared UI**: Centralized component library in `packages/shared`.
- **Architecture**:
  - `packages/shared`: The "Design System" containing React components and `global.css`.
  - `sites/*`: Individual static sites. Content is decoupled from layout via `src/data.ts`.

## Building and Running

### Development Commands
Use root-level scripts to run specific sites:

| Command | Action |
|---------|--------|
| `pnpm dev:mars` | Start Mars landing page (Port 5173+) |
| `pnpm dev:skim` | Start Skim landing page |
| `pnpm dev:mino` | Start Mino landing page |
| `pnpm dev:silo` | Start Silo landing page |
| `pnpm dev:devflow` | Start DevFlow landing page |

### Build & Preview
| Command | Action |
|---------|--------|
| `pnpm build` | Build all sites and the shared package |
| `pnpm preview` | Preview all built sites |
| `pnpm --filter {name}-site build` | Build a specific site (e.g., `mars-site`) |

## Development Conventions

### 1. Data-Driven Architecture
- **Content**: All text, links, and feature lists MUST reside in `src/data.ts`.
- **Composition**: `src/App.tsx` should only contain component composition and accent color setup.
- **Strict Typing**: Data exports in `data.ts` must exactly match the prop types of the shared components.

### 2. Styling & Design System
- **Accents**: Each site defines its own identity using `--accent` and `--accent-secondary` in `App.tsx`:
  ```tsx
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--accent', '#HEX_COLOR');
    root.style.setProperty('--accent-secondary', '#HEX_COLOR');
  }, []);
  ```
- **Global Styles**: Global typography and shared component styles are in `packages/shared/src/styles/global.css`.
- **Custom CSS**: If a site requires unique styling (like `devflow`), use a local `src/{site}.css` file.

### 3. Component Usage
- Always import components from `@cli-pages/shared`.
- **Required Imports**:
  - Logic: `import { ... } from '@cli-pages/shared'`
  - Styles: `import '@cli-pages/shared/styles'` (Only in `main.tsx`)

### 4. Adding a New Site
1. **Scaffold**: `cp -r sites/mars sites/new-site`
2. **Configure**: Update `name` in `sites/new-site/package.json` to `new-site-site`.
3. **Content**: Rewrite `src/data.ts`.
4. **Identity**: Update accent colors in `src/App.tsx`.
5. **Root Script**: Add `"dev:new-site": "pnpm --filter new-site-site dev"` to the root `package.json`.

## Key Files
- `package.json`: Root scripts and workspace definition.
- `packages/shared/src/components/`: Source of truth for all UI components.
- `sites/{name}/src/data.ts`: Source of truth for all site content.
- `CLAUDE.md`: Detailed technical reference for components and styles.
