# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `pnpm dev` - Start Next.js development server with Turbopack (http://localhost:3000)
- `pnpm build` - Build production bundles with Turbopack
- `pnpm start` - Serve production build
- `pnpm lint` - Run ESLint checks
- `pnpm test` - Run Vitest tests
- `pnpm exec vitest --watch` - Run tests in watch mode
- `pnpm exec vitest --ui` - Open Vitest UI
- `pnpm exec vitest run <pattern>` - Run specific test file/pattern

## Architecture

### Next.js App Router (v15.5.3)
- **App Directory**: `src/app/` contains the App Router structure
  - `layout.tsx` - Root layout with metadata
  - `page.tsx` - Page components
  - `globals.css` - Global styles
- **Components**: `src/components/` for reusable components
- **Path Alias**: `@/*` maps to `src/*` for clean imports

### Technology Stack
- **Framework**: Next.js 15.5.3 with React 19.1.0
- **Language**: TypeScript with strict mode enabled
- **Package Manager**: pnpm (uses pnpm-lock.yaml and pnpm-workspace.yaml)
- **Testing**: Vitest with React Testing Library and jest-dom matchers
- **Linting**: ESLint with Next.js core-web-vitals and TypeScript rules

### Testing Setup
- **Configuration**: `vitest.config.mts` with jsdom environment
- **Setup File**: `test-setup.ts` imports jest-dom matchers
- **Test Files**: Co-locate as `*.spec.ts[x]` or `*.test.ts[x]`
- **Path Resolution**: Vitest uses vite-tsconfig-paths plugin for `@/` imports

## Key Configuration Files
- `next.config.ts` - Next.js configuration with Turbopack enabled
- `tsconfig.json` - TypeScript config with strict mode and path aliases
- `eslint.config.mjs` - ESLint flat config extending Next.js rules
- `vitest.config.mts` - Vitest configuration with React plugin