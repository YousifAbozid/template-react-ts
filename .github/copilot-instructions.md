# Copilot Instructions

This project is a modern React TypeScript template with strict architectural patterns and coding conventions. Follow these guidelines to maintain consistency and quality.

## 🏗️ Architecture Overview

**Feature-Based Architecture**: Each feature is self-contained in `src/features/` with its own components, hooks, types, and utilities. The `src/shared/` directory contains reusable components and utilities used across features.

**Provider Pattern**: App initialization follows this order:

```tsx
<ThemeProvider> → <ToastProvider> → <QueryClientProvider> → <App />
```

**Path Mapping**: Use path aliases for clean imports:

- `@/` → `src/`
- `@/shared/` → `src/shared/`
- `@/features/` → `src/features/`
- `@/app/` → `src/app/`

## 📁 Strict Naming Conventions

**All files and folders MUST use PascalCase**:

- Components: `LoginForm.tsx`, `UserProfile.tsx`
- Hooks: `UseAuth.ts`, `UseDatabase.ts`
- Types: `Auth.types.ts`, `User.types.ts`
- Utils: `Validation.utils.ts`, `Database.utils.ts`
- Folders: `UserManagement/`, `ProductCatalog/`

**Export Pattern**: Always use explicit named re-exports in index files:

```typescript
// ✅ Correct
export { LoginForm } from './LoginForm';
export { UserProfile } from './UserProfile';

// ❌ Never use
export * from './LoginForm';
```

## 🎨 Styling System

**Tailwind CSS v4**: Uses CSS custom properties for theming in `src/shared/styles/globals.css`

**Semantic Color Variables**:

- Background: `bg-background-primary`, `bg-background-secondary`
- Text: `text-text-primary`, `text-text-secondary`
- Accents: `text-accent-primary`, `border-border-primary`

**Dark Mode**: Handled via ThemeProvider context with `light`/`dark`/`system` modes.

## ⚛️ React Patterns

**Component Style**: All components MUST be arrow functions:

```tsx
// ✅ Correct
const ComponentName = () => {
  return <div>Content</div>;
};

// ❌ Never use function declarations
function ComponentName() { ... }
```

**Form Handling**: Use React Hook Form + Zod validation:

```tsx
const form = useForm<FormData>({
  resolver: zodResolver(schema)
});
```

## 🔧 Development Workflows

**Quality Scripts**:

- `npm run dev` - Development server on port 3000
- `npm run test` - Runs format check, lint, and type check
- `npm run fix-all` - Auto-fixes linting and formatting issues
- `npm run build:analyze` - Build with bundle analysis

**Pre-commit**: Husky runs lint-staged on commit to ensure code quality.

## 🗂️ Feature Implementation

When adding a new feature to `src/features/`:

1. **Create folder structure**:

   ```
   features/FeatureName/
   ├── index.ts              # Named exports only
   ├── Components/
   │   ├── ComponentName.tsx
   │   └── index.ts
   ├── Hooks/
   │   ├── UseFeatureName.ts
   │   └── index.ts
   └── Types/
       ├── FeatureName.types.ts
       └── index.ts
   ```

2. **Export from feature index**: Add to `src/features/index.ts`
3. **Import pattern**: `import { FeatureName } from '@/features';`

## 🧩 Component Library

**UI Components**: Located in `src/shared/components/ui/` with consistent props interfaces.

**Theme Integration**: Components use semantic color variables and respond to theme changes automatically.

**Animation**: Framer Motion is integrated for smooth transitions and micro-interactions.

## 🔄 State Management

**Server State**: TanStack Query with devtools enabled in development.
**Client State**: React hooks and Context API (ThemeProvider, ToastProvider).
**Forms**: React Hook Form with Zod validation schemas.

## ❌ Common Pitfalls

- Don't use `export *` - always use named exports
- Don't use function declarations - only arrow functions
- Don't skip the PascalCase convention for any files/folders
- Don't import from nested paths - use the index file exports
- Don't bypass the theme system - always use semantic color variables
