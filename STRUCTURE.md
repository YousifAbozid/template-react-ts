# Project Structure Documentation

This project follows a **scalable, feature-based architecture** designed for maintainability and future growth.

## 🏗️ Directory Structure

```
src/
├── 📁 app/                    # Application configuration and setup
│   ├── App.tsx               # Main app component
│   ├── providers.tsx         # Global providers (React Query, Toast, etc.)
│   ├── router.tsx           # Application routing configuration
│   └── index.ts             # App exports
├── 📁 components/            # Reusable components organized by type
│   ├── 📁 ui/               # Basic UI components (buttons, inputs, toasts)
│   │   ├── Toast.tsx
│   │   ├── ToastContainer.tsx
│   │   └── index.ts
│   ├── 📁 layout/           # Layout-specific components
│   │   ├── Layout.tsx
│   │   ├── ThemeToggle.tsx
│   │   └── index.ts
│   ├── ErrorBoundary.tsx    # Global error boundary
│   └── index.ts             # Component exports
├── 📁 contexts/             # React contexts
│   └── ToastContext.tsx
├── 📁 features/             # Feature-based modules (see Features section)
│   └── README.md            # Feature architecture documentation
├── 📁 hooks/                # Custom React hooks
│   ├── useDebounce.ts
│   └── index.ts
├── 📁 lib/                  # Third-party library configurations
│   └── query-client.ts
├── 📁 pages/                # Page components
│   ├── HomePage.tsx
│   └── NotFoundPage.tsx
├── 📁 styles/               # Global styles and themes
│   └── globals.css
├── 📁 types/                # TypeScript type definitions
│   └── index.ts            # Common types (API, UI, Theme, etc.)
├── 📁 utils/                # Utility functions and constants
│   ├── constants.ts        # Application constants
│   ├── helpers.ts          # Utility functions
│   └── index.ts
├── main.tsx                # Application entry point
└── vite-env.d.ts          # Vite type definitions
```

## 🎯 Key Principles

### 1. **Separation of Concerns**

- **`app/`**: App-level configuration, providers, and routing
- **`components/`**: Reusable UI components organized by purpose
- **`features/`**: Self-contained feature modules
- **`utils/`**: Pure utility functions and constants

### 2. **Import Organization**

```typescript
// ✅ Clean imports with path mapping
import { Button } from '@/components/ui';
import { useAuth } from '@/features/auth';
import { API_CONFIG } from '@/utils/constants';

// ✅ Index files for clean exports
import { Toast, ToastContainer } from '@/components/ui';
```

### 3. **Scalable Architecture**

- Easy to add new features without affecting existing code
- Feature-based organization for team development
- Clear boundaries between different parts of the application

## 📁 Directory Guidelines

### **`app/` Directory**

Contains application-level configuration:

- **`App.tsx`**: Main app component (minimal, delegates to router)
- **`providers.tsx`**: Global providers (React Query, Context providers)
- **`router.tsx`**: Application routing configuration

### **`components/` Directory**

Organized by component type:

- **`ui/`**: Basic, reusable UI components
- **`layout/`**: Layout-specific components (header, footer, nav)
- **Root level**: Global components (ErrorBoundary)

### **`features/` Directory**

Self-contained feature modules. Each feature includes:

- Components specific to the feature
- Hooks for feature logic
- Types for feature data
- API calls related to the feature
- Utilities specific to the feature

### **`types/` Directory**

Centralized TypeScript definitions:

- API response/request types
- Common UI prop types
- Theme and configuration types
- Utility types

### **`utils/` Directory**

Pure utility functions:

- **`constants.ts`**: Application constants and configuration
- **`helpers.ts`**: Pure utility functions (formatters, validators)

## 🔧 Path Mapping

The project uses path mapping for clean imports:

```typescript
// tsconfig.app.json
{
  "paths": {
    "@/*": ["./src/*"]
  }
}
```

## 📦 Adding New Features

1. Create a new directory in `features/`
2. Follow the feature structure guidelines in `features/README.md`
3. Export from the feature's `index.ts` file
4. Import using the `@/features/feature-name` path

## 🎨 Styling Organization

- **Global styles**: `src/styles/globals.css`
- **Component-specific styles**: Tailwind CSS classes
- **Theme configuration**: Handled through CSS custom properties

## 🧪 Testing Structure

When adding tests, mirror the source structure:

```
tests/
├── components/
├── features/
├── hooks/
└── utils/
```

## 🚀 Benefits

- **Maintainability**: Related code is co-located
- **Scalability**: Easy to add features without affecting existing code
- **Developer Experience**: Clear structure and clean imports
- **Team Development**: Multiple developers can work on different features
- **Code Reusability**: Clear separation between reusable and feature-specific components

## 🔄 Migration from Old Structure

The previous flat structure has been reorganized:

- Components moved to appropriate subdirectories
- App logic separated into dedicated files
- Path mapping configured for clean imports
- Index files added for better exports

This structure is designed to grow with your application while maintaining clean code organization.
