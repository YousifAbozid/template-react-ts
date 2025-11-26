# Copilot Instructions for React TypeScript Template

## Architecture Overview

This is a **feature-based React 19 + TypeScript + Vite template** with a scalable architecture designed for production apps. The codebase follows separation of concerns with distinct layers:

- **`src/app/`**: Application bootstrapping (providers, routing, main app component)
- **`src/components/`**: Reusable UI organized by type (`ui/`, `layout/`, global components)
- **`src/features/`**: Self-contained feature modules (currently empty, ready for features like auth, dashboard)
- **`src/types/`**: Centralized TypeScript definitions with semantic naming
- **`src/utils/`**: Pure functions and constants with structured organization

## Critical Patterns & Conventions

### Path Mapping & Imports

- **ALWAYS use `@/*` imports** instead of relative paths. Examples:
  ```tsx
  import { Toast } from '@/components/ui'; // ✅ Clean
  import Toast from '../../components/ui/Toast'; // ❌ Don't use
  ```
- **Follow barrel exports**: Import from index files when available (`@/components/ui` not `@/components/ui/Toast`)

### Theme System Architecture

- **Semantic CSS variables** in `src/styles/globals.css` using Tailwind v4 `@theme` directive
- Light/dark mode with `l-*`/`d-*` prefixes: `bg-l-bg-1 dark:bg-d-bg-1`
- Mode-independent accents: `bg-accent-1` (no light/dark variants needed)
- **Never use arbitrary values** - extend theme variables instead

### Component Organization

```tsx
// UI components (src/components/ui/): Basic, reusable elements
import { Toast, ToastContainer } from '@/components/ui';

// Layout components (src/components/layout/): Navigation, headers, layout structure
import { Layout, ThemeToggle } from '@/components/layout';

// Global components (src/components/): App-wide utilities like ErrorBoundary
import { ErrorBoundary } from '@/components';
```

### Feature Module Pattern

New features should follow `src/features/feature-name/` structure:

```
features/auth/
├── components/    # Feature-specific UI
├── hooks/        # Feature-specific logic
├── types/        # Feature-specific types
├── api/          # Feature API calls
└── index.ts      # Clean exports
```

## Development Workflows

### Essential Commands

```bash
npm run dev              # Development server (port 3000)
npm run type-check       # Fast incremental TypeScript checking
npm run lint:fix         # Auto-fix ESLint issues (cached)
npm run fix-all          # Fix both linting and formatting
npm run build:analyze    # Build with bundle size analysis
```

### Performance-Optimized Tooling

- **ESLint caching** enabled (`.eslintcache`) - 70% faster on subsequent runs
- **TypeScript incremental compilation** (`.tsbuildinfo`) - 95% faster type checking
- **Smart git hooks**: Auto-fix issues in pre-push, conditional builds

### Form Development Pattern

Use React Hook Form + Zod validation with these established types:

```tsx
// Use existing form types from @/types
import type { FormState, FormFieldError } from '@/types';

// Follow Zod schema pattern:
const schema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(8, 'Min 8 characters'),
});

type FormData = z.infer<typeof schema>;
```

## Configuration Integration Points

### State Management Stack

- **React Query**: Pre-configured in `src/lib/query-client.ts` with optimized defaults
- **Toast system**: Global context in `src/contexts/ToastContext.tsx` with predefined types
- **Theme persistence**: Uses `use-local-storage` hook with `THEME_CONFIG` constants

### Environment & Build

- **Vite config**: Path alias `@` → `src/`, port 3000, Tailwind CSS v4 plugin
- **TypeScript**: Incremental compilation enabled, path mapping in `tsconfig.app.json`
- **ESLint**: React Query plugin rules active, caching enabled, TypeScript integration

### Constants Usage

Reference existing constants from `@/utils/constants`:

```tsx
import {
  API_CONFIG,
  TOAST_CONFIG,
  THEME_CONFIG,
  BREAKPOINTS,
} from '@/utils/constants';

// Don't hardcode values that exist in constants
const apiUrl = API_CONFIG.BASE_URL; // ✅ Use constants
const apiUrl = 'http://localhost:3001'; // ❌ Don't hardcode
```

## Key Files for Context

- `src/app/App.tsx`: Clean app structure with ErrorBoundary → Providers → Router
- `src/types/index.ts`: Comprehensive type definitions (API, UI, Theme, Toast)
- `src/utils/constants.ts`: Application-wide configuration values
- `STRUCTURE.md`: Detailed architecture documentation and principles
- `src/features/README.md`: Feature module guidelines and examples

When adding new components or features, follow the established patterns in these reference files and maintain the clean import/export structure throughout the codebase.
