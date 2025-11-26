# Features Directory

This directory follows a **feature-based architecture** where each feature is self-contained with its own components, hooks, types, and utilities.

## Structure

Each feature should follow this structure:

```
features/
└── feature-name/
    ├── index.ts              # Feature exports
    ├── components/           # Feature-specific components
    │   ├── FeatureComponent.tsx
    │   └── index.ts
    ├── hooks/               # Feature-specific hooks
    │   ├── useFeature.ts
    │   └── index.ts
    ├── types/               # Feature-specific types
    │   ├── feature.types.ts
    │   └── index.ts
    ├── utils/               # Feature-specific utilities
    │   ├── feature.utils.ts
    │   └── index.ts
    └── api/                 # Feature-specific API calls
        ├── feature.api.ts
        └── index.ts
```

## Example Feature Structure

```
features/
└── auth/
    ├── index.ts
    ├── components/
    │   ├── LoginForm.tsx
    │   ├── SignupForm.tsx
    │   ├── UserProfile.tsx
    │   └── index.ts
    ├── hooks/
    │   ├── useAuth.ts
    │   ├── useLogin.ts
    │   └── index.ts
    ├── types/
    │   ├── auth.types.ts
    │   └── index.ts
    ├── utils/
    │   ├── auth.utils.ts
    │   └── index.ts
    └── api/
        ├── auth.api.ts
        └── index.ts
```

## Benefits

- **Scalability**: Easy to add new features without affecting existing code
- **Maintainability**: Related code is co-located
- **Reusability**: Features can be easily extracted or shared
- **Team Development**: Different team members can work on different features
- **Testing**: Feature-specific tests can be isolated

## Usage

```typescript
// Import entire feature
import { AuthProvider, useAuth, LoginForm } from '@/features/auth';

// Import specific parts
import { LoginForm } from '@/features/auth/components';
import { useAuth } from '@/features/auth/hooks';
```

## Guidelines

1. Keep features focused and cohesive
2. Avoid dependencies between features (use shared utilities instead)
3. Export everything through the feature's main index.ts file
4. Use shared components from `@/components` for common UI elements
5. Use shared types from `@/types` for common interfaces
