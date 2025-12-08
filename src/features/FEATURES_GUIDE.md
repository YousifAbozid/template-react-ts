# Features Implementation Guide

This guide provides comprehensive instructions for AI assistants to implement features correctly in this React TypeScript template. The project follows a **feature-based architecture** with strict naming conventions and coding patterns.

## 🎯 Critical Implementation Rules

### 1. **PascalCase Naming Convention**

- **ALL** files and folders must use PascalCase
- Components: `LoginForm.tsx`, `UserProfile.tsx`
- Hooks: `UseAuth.ts`, `UseLogin.ts`
- Types: `Auth.types.ts`, `User.types.ts`
- Utils: `Auth.utils.ts`, `Validation.utils.ts`
- API: `Auth.api.ts`, `Users.api.ts`
- Folders: `Auth/`, `UserManagement/`, `ProductCatalog/`

### 2. **Named Re-Exports Pattern**

- **NEVER** use `export * from './Component'`
- **ALWAYS** use explicit named re-exports
- This improves tree-shaking and IDE support

### 3. **Arrow Function Components**

- **ALL** React components must be arrow functions
- Use `const ComponentName = () => { ... }`
- **NEVER** use function declarations

## 📁 Feature Structure Template

```
features/
└── FeatureName/
    ├── index.ts              # Named re-exports only
    ├── Components/           # PascalCase folder
    │   ├── ComponentName.tsx # PascalCase file + arrow function
    │   └── index.ts          # Named re-exports
    ├── Hooks/               # PascalCase folder
    │   ├── UseFeatureName.ts # PascalCase file + arrow function
    │   └── index.ts          # Named re-exports
    ├── Types/               # PascalCase folder
    │   ├── FeatureName.types.ts
    │   └── index.ts          # Named re-exports
    ├── Utils/               # PascalCase folder
    │   ├── FeatureName.utils.ts
    │   └── index.ts          # Named re-exports
    └── Api/                 # PascalCase folder
        ├── FeatureName.api.ts
        └── index.ts          # Named re-exports
```

## 🔧 Implementation Templates

### Component Template

```typescript
// features/Auth/Components/LoginForm.tsx
import { useState } from 'react';
import type { LoginCredentials } from '../Types';

interface LoginFormProps {
  onSubmit: (credentials: LoginCredentials) => void;
  isLoading?: boolean;
}

export const LoginForm = ({ onSubmit, isLoading = false }: LoginFormProps) => {
  const [credentials, setCredentials] = useState<LoginCredentials>({
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(credentials);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Component JSX */}
    </form>
  );
};
```

### Hook Template

```typescript
// features/Auth/Hooks/UseAuth.ts
import { useState, useCallback } from 'react';
import type { User, LoginCredentials } from '../Types';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = useCallback(async (credentials: LoginCredentials) => {
    setIsLoading(true);
    try {
      // Login logic
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    user,
    isLoading,
    login
  };
};
```

### Named Re-Export Index Templates

```typescript
// features/Auth/Components/index.ts
export { LoginForm } from './LoginForm';
export { SignupForm } from './SignupForm';
export { UserProfile } from './UserProfile';

// features/Auth/Hooks/index.ts
export { useAuth } from './UseAuth';
export { useLogin } from './UseLogin';
export { useLogout } from './UseLogout';

// features/Auth/Types/index.ts
export type { User, LoginCredentials, AuthState } from './Auth.types';

// features/Auth/index.ts (Main feature export)
export { LoginForm, SignupForm, UserProfile } from './Components';
export { useAuth, useLogin, useLogout } from './Hooks';
export type { User, LoginCredentials, AuthState } from './Types';
export { validateEmail, hashPassword } from './Utils';
export { loginUser, logoutUser, refreshToken } from './Api';
```

## 🎨 Real-World Example: UserManagement Feature

```
features/
└── UserManagement/
    ├── index.ts
    ├── Components/
    │   ├── UserList.tsx
    │   ├── UserCard.tsx
    │   ├── UserForm.tsx
    │   ├── UserModal.tsx
    │   └── index.ts
    ├── Hooks/
    │   ├── UseUsers.ts
    │   ├── UseUserForm.ts
    │   ├── UseUserPermissions.ts
    │   └── index.ts
    ├── Types/
    │   ├── User.types.ts
    │   ├── Permission.types.ts
    │   └── index.ts
    ├── Utils/
    │   ├── UserValidation.utils.ts
    │   ├── PermissionHelpers.utils.ts
    │   └── index.ts
    └── Api/
        ├── Users.api.ts
        ├── Permissions.api.ts
        └── index.ts
```

## ⚠️ Common Mistakes to Avoid

1. **❌ Wrong Naming**: `userList.tsx`, `use-auth.ts`, `auth-utils.ts`
   **✅ Correct**: `UserList.tsx`, `UseAuth.ts`, `Auth.utils.ts`

2. **❌ Wildcard Exports**: `export * from './LoginForm'`
   **✅ Named Exports**: `export { LoginForm } from './LoginForm'`

3. **❌ Function Declaration**: `function LoginForm() { ... }`
   **✅ Arrow Function**: `const LoginForm = () => { ... }`

4. **❌ Mixed Exports**: Some named, some wildcard
   **✅ Consistent**: All named re-exports throughout

## 📊 Import Usage Examples

```typescript
// ✅ Correct imports from features
import { LoginForm, UserProfile } from '@/features/Auth';
import { useAuth, useLogin } from '@/features/Auth/Hooks';
import type { User, LoginCredentials } from '@/features/Auth/Types';

// ✅ Specific component imports
import { LoginForm } from '@/features/Auth/Components';
import { useAuth } from '@/features/Auth/Hooks';

// ✅ Shared components (from src/shared)
import { Button, Input, Card } from '@/shared/components/ui';
import { useTheme } from '@/shared/contexts';
```

## 🏗️ Architecture Benefits

- **🎯 Predictable**: Consistent naming and structure
- **🔍 Discoverable**: Easy to find and understand code
- **🌳 Tree-shakable**: Named exports enable better bundling
- **🔧 Maintainable**: Clear separation of concerns
- **🤖 AI-Friendly**: Explicit patterns for automated implementation
- **👥 Team-Ready**: Scalable for multiple developers

## 🚀 Getting Started

When implementing a new feature:

1. Create PascalCase folder: `features/NewFeature/`
2. Add subfolders: `Components/`, `Hooks/`, `Types/`, `Utils/`, `Api/`
3. Use arrow functions for all components and hooks
4. Implement named re-exports in all index.ts files
5. Follow the templates provided above
6. Test imports to ensure proper tree-shaking

This guide ensures consistent, maintainable, and AI-implementable code across the entire project.
