# Repository Guidelines

## Project Structure & Module Organization
- **Source:** Next.js App Router lives in `src/app/` (`layout.tsx`, `page.tsx`).
- **Styles:** Global CSS in `src/app/globals.css`.
- **Assets:** Public, versioned files in `public/`.
- **Config:** `next.config.ts`, `eslint.config.mjs`, `tsconfig.json` (path alias `@/*` → `src/*`).

## Build, Test, and Development Commands
- **Install:** `pnpm install` (project uses `pnpm-lock.yaml`).
- **Dev server:** `pnpm dev` — starts Next.js with Turbopack.
- **Build:** `pnpm build` — production bundles.
- **Start:** `pnpm start` — serves the production build.
- **Lint:** `pnpm lint` — ESLint (Next + TypeScript rules).
- **Tests:** `pnpm exec vitest` (or `pnpm exec vitest --ui` / `--watch`).

## Coding Style & Naming Conventions
- **Language:** TypeScript (strict). Use 2‑space indentation.
- **Modules:** Prefer `@/…` imports over relative chains (e.g., `@/app/page`).
- **Components:** PascalCase component names in `.tsx`. App Router files follow Next patterns (`page.tsx`, `layout.tsx`).
- **CSS:** Keep global styles minimal in `globals.css`; prefer component‑scoped styles when added.
- **Linting:** Repo extends `next/core-web-vitals` and `next/typescript`. Fix warnings before opening a PR.

## Testing Guidelines
- **Framework:** Vitest.
- **Locations:** Co‑locate tests as `*.test.ts[x]` or use `src/__tests__/`.
- **Scope:** Cover utilities, hooks, and critical component behavior (props, accessibility, rendering states).
- **Run:** `pnpm exec vitest --watch` during development.

## Commit & Pull Request Guidelines
- **Commits:** Imperative, present tense, one change per commit. Examples from history: “Add Vitest as development dependency”, “Remove default favicon”.
- **PRs:** Provide a clear summary, linked issues (`Fixes #123`), screenshots/GIFs for UI, and verification notes. Ensure `pnpm build` and `pnpm lint` pass.

## Security & Configuration Tips
- **Secrets:** Never commit secrets. Use `.env.local` for local overrides (git‑ignored).
- **Assets:** Keep large binaries out of git; place static files in `public/`.
- **Deps:** Prefer small, well‑maintained packages; run `pnpm install` to update the lockfile consistently.

