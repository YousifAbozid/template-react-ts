# React 19, TypeScript, Vite, Tailwind CSS v4, React Router, React Query, Forms Template

A modern, production-ready template for building web applications with React 19, TypeScript, Vite, Tailwind CSS v4, React Router for navigation, React Query for server state management, React Hook Form with Zod validation, and a comprehensive theming system with dark mode support.

## 📋 Table of Contents

| Section                                               | Description                      |
| ----------------------------------------------------- | -------------------------------- |
| [✨ What's New](#-whats-new-in-this-template)         | Latest features and improvements |
| [🚀 Features](#features)                              | Core capabilities and tech stack |
| [🌐 Technologies](#technologies-used)                 | Complete tech stack overview     |
| [🏗️ Getting Started](#getting-started)                | Installation and setup           |
| [📁 Project Structure](#-project-structure)           | File organization                |
| [⚡ Scripts](#available-scripts)                      | Development commands             |
| [🎯 App Features](#-application-features--demos)      | Comprehensive single page demos  |
| [🧭 Routing](#-react-router-integration)              | React Router setup               |
| [🔄 State Management](#-react-query-setup)            | React Query integration          |
| [📝 Forms](#-form-handling-with-react-hook-form--zod) | Form validation with Zod         |
| [🎨 Theme System](#theme-system)                      | Comprehensive theming guide      |
| [🌓 Dark Mode](#dark-mode-implementation)             | Dark mode setup                  |
| [🛠️ Dev Tools](#development-tools)                    | ESLint, Prettier, git hooks      |
| [⚡ Performance](#-performance-optimizations)         | Speed optimizations              |
| [💾 Storage](#-storage-hooks)                         | Local and secure storage hooks   |
| [🚀 Deployment](#deployment)                          | Deploy guides                    |
| [📦 Dependencies](#adding-dependencies)               | Package management               |
| [🧪 Testing](#testing-setup)                          | Testing setup                    |
| [🤝 Contributing](#contributing)                      | Development workflow             |
| [🆘 Troubleshooting](#troubleshooting)                | Common issues and solutions      |
| [📄 License](#license)                                | Project license                  |
| [🙏 Acknowledgments](#acknowledgments)                | Credits and thanks               |

## ✨ What's New in This Template

[↑ Back to Table of Contents](#-table-of-contents)

This template features a comprehensive single-page application structure with:

- 🏠 **Consolidated HomePage** - All features, forms, and demos in one comprehensive page
- 🎯 **Complete Feature Showcase** - Theme system, form validation, and interactive examples
- 📝 **Integrated Form Demos** - Login and registration forms with real-time validation
- 🔄 **Enhanced Error Boundary** - Improved UI with better button alignment and styling
- 🚀 **Advanced Pre-Push Hooks** - Auto-fix capabilities for ESLint and Prettier with change staging
- ⚡ **Performance Optimizations** - Smart caching and conditional builds
- 🛠️ **Streamlined Navigation** - Simplified single-page structure for focused development
- 🎨 **Enhanced Developer Experience** - Automated code quality checks with auto-fixing

## Features

[↑ Back to Table of Contents](#-table-of-contents)

### 🎯 Core Application Features

- 🧭 **React Router v7**: Full client-side routing with nested routes and layouts
- 🔄 **React Query**: Powerful server state management with caching and background updates
- 📝 **React Hook Form**: Performant forms with minimal re-renders
- ✅ **Zod Validation**: Type-safe schema validation for forms and APIs
- 🎨 **Lucide React**: Beautiful, customizable icon library with 1000+ icons
- 📱 **Responsive Pages**: Pre-built pages showcasing all features
- 🏗️ **Scalable Architecture**: Feature-based organization with clean imports
- 📦 **Path Mapping**: Clean imports with `@/*` aliases (e.g., `@/components/ui`)

### 🎨 Design System

- 🎨 Complete theming system with semantic color variables
- 🌓 Dark mode support out of the box
- 📱 Responsive design ready
- 🚀 Optimized for Tailwind CSS v4

### 📦 Clean Import System

This template includes a configured path mapping system for clean, maintainable imports:

```tsx
// ✅ Clean imports with path mapping
import { Button } from '@/components/ui';
import { Layout } from '@/components/layout';
import { useAuth } from '@/features/auth';
import { API_CONFIG } from '@/utils/constants';
import { formatDate } from '@/utils/helpers';

// ✅ Barrel exports for organized imports
import { Toast, ToastContainer } from '@/components/ui';
import { ErrorBoundary } from '@/components';

// ❌ Instead of messy relative imports
import Button from '../../../components/ui/Button';
import Layout from '../../components/layout/Layout';
```

**Path Mapping Configuration:**

- `@/*` maps to `src/*` (configured in `tsconfig.app.json` and `vite.config.ts`)
- Index files provide clean barrel exports
- IntelliSense and auto-imports work seamlessly

### ⚛️ Modern React Stack

- ⚛️ React 19 with TypeScript
- ⚡️ Vite for fast development and builds
- 🧹 ESLint and Prettier for code quality
- 🪝 Husky and lint-staged for pre-commit hooks
- ⚡ **Performance optimizations** with intelligent caching

## Technologies Used

[↑ Back to Table of Contents](#-table-of-contents)

This template combines the following technologies to provide a modern development experience:

### Frontend Stack

- **React 19**: Latest version with improved performance and new features
- **TypeScript**: Static type checking for more robust code
- **React Router v7**: Modern client-side routing with data loading
- **React Query (TanStack Query)**: Server state management with intelligent caching
- **React Hook Form**: High-performance forms with minimal re-renders
- **Zod**: TypeScript-first schema validation
- **Lucide React**: Beautiful, customizable icon library

### Development Tools

- **Vite**: Next generation frontend tooling for fast development and optimized builds
- **Tailwind CSS v4**: Utility-first CSS framework with built-in dark mode support
- **ESLint**: Linting utility for identifying and fixing code problems (with caching)
- **Prettier**: Code formatter for consistent styling
- **Husky**: Git hooks to enforce code quality checks before commits
- **lint-staged**: Run linters on git staged files only

### Performance Features

- **ESLint caching**: 70% faster linting with intelligent cache
- **TypeScript incremental compilation**: 95% faster type checking
- **Smart git hooks**: Conditional builds and optimized pre-commit checks

## Getting Started

[↑ Back to Table of Contents](#-table-of-contents)

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/YousifAbozid/template-react-ts my-project
   cd my-project
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. Open your browser and visit http://localhost:3000

## 📁 Project Structure

[↑ Back to Table of Contents](#-table-of-contents)

This template follows a **scalable, feature-based architecture** designed for maintainability and future growth. See [STRUCTURE.md](STRUCTURE.md) for detailed documentation.

```
template-react-ts/
├── .husky/                # Git hooks configuration
│   ├── pre-commit         # Lint staged files before commit
│   └── pre-push           # Enhanced with auto-fix capabilities
├── src/
│   ├── 📁 app/            # Application configuration and setup
│   │   ├── App.tsx        # Main app component
│   │   ├── providers.tsx  # Global providers (React Query, Toast, etc.)
│   │   ├── router.tsx     # Application routing configuration
│   │   └── index.ts       # App exports
│   ├── 📁 components/     # Reusable components organized by type
│   │   ├── 📁 ui/         # Basic UI components
│   │   │   ├── Toast.tsx
│   │   │   ├── ToastContainer.tsx
│   │   │   └── index.ts
│   │   ├── 📁 layout/     # Layout-specific components
│   │   │   ├── Layout.tsx
│   │   │   ├── ThemeToggle.tsx
│   │   │   └── index.ts
│   │   ├── ErrorBoundary.tsx # Global error boundary
│   │   └── index.ts       # Component exports
│   ├── 📁 contexts/       # React contexts
│   │   └── ToastContext.tsx
│   ├── 📁 features/       # Feature-based modules (self-contained)
│   │   └── README.md      # Feature architecture documentation
│   ├── 📁 hooks/          # Custom React hooks
│   │   ├── useDebounce.ts
│   │   └── index.ts
│   ├── 📁 lib/            # Third-party library configurations
│   │   └── query-client.ts
│   ├── 📁 pages/          # Page components
│   │   ├── HomePage.tsx
│   │   └── NotFoundPage.tsx
│   ├── 📁 styles/         # Global styles and themes
│   │   └── globals.css    # Theme system & global styles
│   ├── 📁 types/          # TypeScript type definitions
│   │   └── index.ts       # Common types (API, UI, Theme, etc.)
│   ├── 📁 utils/          # Utility functions and constants
│   │   ├── constants.ts   # Application constants
│   │   ├── helpers.ts     # Utility functions
│   │   └── index.ts
│   ├── main.tsx           # Application entry point
│   └── vite-env.d.ts      # Vite type definitions
├── public/                # Static assets
├── index.html             # HTML template
├── vite.config.ts         # Vite configuration
├── tsconfig.json          # TypeScript configuration
├── eslint.config.js       # ESLint configuration
├── STRUCTURE.md           # Detailed architecture documentation
├── PERFORMANCE.md         # Performance optimization guide
└── package.json           # Project dependencies and scripts
```

### 🏗️ Architecture Highlights

- **🎯 Feature-Based**: Organized for scalability and team development
- **📦 Clean Imports**: Path mapping (`@/*`) for maintainable code
- **🎨 Component Organization**: UI, layout, and feature-specific separation
- **📚 Type Safety**: Centralized TypeScript definitions
- **⚡ Performance**: Optimized structure for build and runtime performance

> 📖 **Detailed Guide**: See [STRUCTURE.md](STRUCTURE.md) for comprehensive architecture documentation, migration guide, and best practices.

## Available Scripts

[↑ Back to Table of Contents](#-table-of-contents)

The template includes the following npm scripts organized by category:

### 🔧 Development

- **`npm run dev`**: Start the development server with HMR
- **`npm run preview`**: Preview the production build locally

### 🏗️ Build & Type Checking

- **`npm run build`**: Type-check and build the app for production
- **`npm run type-check`**: Run TypeScript type checking (incremental, cached)

### 🔍 Code Quality (Manual)

- **`npm run lint`**: Run ESLint to check for code issues (cached)
- **`npm run lint:fix`**: Run ESLint and automatically fix issues (cached)
- **`npm run format:all`**: Run Prettier to format all files
- **`npm run format:check`**: Check if files are properly formatted

### ⚡ Automated Fixes

- **`npm run fix-all`**: Run both lint:fix and format:all to fix all issues
- **`npm run fix-staged`**: Run lint-staged manually (same as pre-commit hook)

### 🔧 Maintenance

- **`npm run upgrade`**: Update all dependencies to their latest versions

### 🚀 Performance Benefits

- **ESLint caching**: 70% faster linting on subsequent runs
- **TypeScript incremental**: 95% faster type checking
- **Smart git hooks**: Conditional execution saves development time

> 📋 For detailed performance information, see [PERFORMANCE.md](PERFORMANCE.md)

## 🚀 Application Features & Demos

[↑ Back to Table of Contents](#-table-of-contents)

This template features a comprehensive single-page application that demonstrates real-world usage patterns:

### 🏠 Comprehensive HomePage (`/`)

A complete showcase including all features in one optimized page:

- **Hero Section**: Feature highlights with interactive badges
- **Technology Showcase**: Complete overview of included technologies
- **Theme System Demo**: Interactive examples of the complete theming system
- **Form Validation Demo**: Live React Hook Form + Zod examples
- **Getting Started Guide**: Step-by-step setup instructions
- **Code Examples**: Real implementation patterns and usage
- **Performance Features**: Browser support and optimization details

#### 📝 Integrated Form Demos

Built-in form demonstrations with React Hook Form + Zod:

- **Login Form**: Email validation, password requirements, real-time feedback
- **Registration Form**: Complex validation rules, password confirmation
- **Error Handling**: Form-level and field-level error display with styling
- **TypeScript Integration**: Fully typed form schemas and data

```tsx
// Example: Type-safe form with Zod validation
const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

type LoginFormData = z.infer<typeof loginSchema>;
```

#### 🎨 Complete Theme System

Interactive theme demonstrations:

- **Color Palette**: Visual representation of all theme variables
- **Component Examples**: Buttons, forms, alerts in different states
- **Code Snippets**: Real usage patterns for theming
- **Responsive Design**: Mobile-first examples and breakpoints

### 🧭 Navigation & Layout

- **Responsive Navigation**: Desktop and mobile-optimized navigation
- **Active States**: Visual indicators for current page
- **Theme Integration**: Navigation respects light/dark mode
- **Accessibility**: Keyboard navigation and screen reader support

### 🎨 Component Library

Reusable components demonstrated throughout the app:

- **Form Fields**: Input, Select, Textarea with validation states
- **Buttons**: Primary, secondary, outline variants
- **Cards**: Content containers with proper spacing
- **Alerts**: Success, warning, error message components
- **Code Blocks**: Syntax-highlighted code examples
- **Loading States**: Skeletons and spinners

## 🧭 React Router Integration

[↑ Back to Table of Contents](#-table-of-contents)

The template includes a complete routing setup with React Router v7:

### Route Structure

```tsx
// App.tsx - Clean, organized application setup
import App from './app';

export default App;
```

The app is now organized with a clear separation of concerns:

- **`app/App.tsx`**: Main application component
- **`app/providers.tsx`**: Global providers setup
- **`app/router.tsx`**: Application routing configuration

### Layout Component

Shared layout with navigation:

```tsx
// components/layout/Layout.tsx
import { Outlet, Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Layout = () => {
  const location = useLocation();

  return (
    <div>
      <nav>
        {/* Navigation with active states */}
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
          Home
        </Link>
        <ThemeToggle />
      </nav>
      <main>
        <Outlet /> {/* Child routes render here */}
      </main>
      <footer>{/* Shared footer */}</footer>
    </div>
  );
};

export default Layout;
```

### Navigation Features

- **Active States**: Visual feedback for current route
- **Mobile Responsive**: Collapsible navigation for mobile devices
- **Theme Integration**: Navigation respects light/dark mode
- **TypeScript**: Fully typed route parameters and navigation

## 🔄 React Query Setup

[↑ Back to Table of Contents](#-table-of-contents)

Complete server state management with TanStack Query:

### Query Client Configuration

```tsx
// App configuration with providers
// app/providers.tsx
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ToastProvider } from '@/contexts/ToastContext';
import ToastContainer from '@/components/ui/ToastContainer';
import { queryClient } from '@/lib/query-client';

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ToastProvider>
      <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
        <ToastContainer />
      </QueryClientProvider>
    </ToastProvider>
  );
}
```

### Example API Integration

```tsx
// Custom hooks for API calls
const usePosts = () => {
  return useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts'
      );
      if (!response.ok) throw new Error('Failed to fetch posts');
      return response.json();
    },
  });
};

const useCreatePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (newPost: CreatePostData) => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        {
          method: 'POST',
          body: JSON.stringify(newPost),
          headers: { 'Content-Type': 'application/json' },
        }
      );
      return response.json();
    },
    onSuccess: () => {
      // Invalidate and refetch posts
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
  });
};
```

## 📝 Form Handling with React Hook Form & Zod

[↑ Back to Table of Contents](#-table-of-contents)

Type-safe form validation with excellent performance:

### Form Schema Definition

```tsx
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

// Define validation schema
const registrationSchema = z
  .object({
    email: z.string().email('Invalid email address'),
    password: z
      .string()
      .min(8, 'Password must be at least 8 characters')
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        'Password must contain uppercase, lowercase, and number'
      ),
    confirmPassword: z.string(),
    name: z.string().min(2, 'Name must be at least 2 characters'),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

type RegistrationFormData = z.infer<typeof registrationSchema>;
```

### Form Component

```tsx
const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema),
  });

  const onSubmit = async (data: RegistrationFormData) => {
    // Handle form submission
    console.log('Form data:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <input
          {...register('email')}
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-500 text-white p-2 rounded"
      >
        {isSubmitting ? 'Submitting...' : 'Register'}
      </button>
    </form>
  );
};
```

### Form Features

- **Type Safety**: Full TypeScript integration
- **Real-time Validation**: Instant feedback on field changes
- **Error Handling**: Field-level and form-level error display
- **Performance**: Minimal re-renders with uncontrolled components
- **Accessibility**: Proper ARIA labels and error associations

## Theme System

[↑ Back to Table of Contents](#-table-of-contents)

This template includes a comprehensive theming system with semantic color variables designed for both light and dark modes. The system provides a foundation for consistent UI design and easy customization.

### Theming Architecture Overview

The theming system is built on these core principles:

1. **Semantic Color Variables**: Instead of using generic color names, colors are named by their purpose (e.g., `l-bg-1` for primary light background)
2. **Mode-Aware Design**: Each color has both light and dark mode variants
3. **Hierarchical Structure**: Colors follow a hierarchy (primary, secondary, tertiary) for consistent visual layering
4. **CSS Custom Properties**: Leverages modern CSS variables for dynamic theming
5. **Tailwind Integration**: Works seamlessly with Tailwind CSS v4's `@theme` directive

### Complete Color System Reference

The color system is organized into logical categories:

#### Background Colors

- **`l-bg-1` / `d-bg-1`**: Primary backgrounds (main content areas)
- **`l-bg-2` / `d-bg-2`**: Secondary backgrounds (cards, panels)
- **`l-bg-3` / `d-bg-3`**: Tertiary backgrounds (subtle sections)
- **`l-bg-hover` / `d-bg-hover`**: Hover state backgrounds

#### Text Colors

- **`l-text-1` / `d-text-1`**: Primary text (headings, main content)
- **`l-text-2` / `d-text-2`**: Secondary text (subheadings, descriptions)
- **`l-text-3` / `d-text-3`**: Tertiary text (muted, captions)
- **`l-text-inv` / `d-text-inv`**: Inverted text (text on contrasting backgrounds)

#### Accent Colors (Mode Independent)

- **`accent-1`**: Primary brand color
- **`accent-2`**: Secondary brand color
- **`accent-success`**: Success states and positive feedback
- **`accent-warning`**: Warning states and alerts
- **`accent-danger`**: Error states and destructive actions

#### Utility Colors

- **`border-l` / `border-d`**: Border colors for light/dark modes
- **`shadow-l` / `shadow-d`**: Box shadow colors for elevation effects

### Basic Usage Examples

Apply theme colors using Tailwind utility classes with automatic dark mode support:

```jsx
// Auto-switching backgrounds
<div className="bg-l-bg-1 dark:bg-d-bg-1">
  Main content area
</div>

// Auto-switching text
<h1 className="text-l-text-1 dark:text-d-text-1">
  Primary heading
</h1>

// Mode-independent accent colors
<button className="bg-accent-1 text-white">
  Primary Action
</button>

// Combined theme-aware styling
<div className="bg-l-bg-2 dark:bg-d-bg-2 border border-border-l dark:border-border-d rounded-lg p-4">
  <h3 className="text-l-text-1 dark:text-d-text-1">Card Title</h3>
  <p className="text-l-text-2 dark:text-d-text-2">Card description</p>
</div>
```

### Advanced Usage Patterns

#### Interactive Components

```jsx
// Button with hover states and theme awareness
<button className="
  bg-accent-1 hover:bg-accent-2
  text-l-text-inv dark:text-d-text-inv
  px-4 py-2 rounded-md
  transition-colors duration-200
  shadow-lg shadow-shadow-l dark:shadow-shadow-d
">
  Interactive Button
</button>

// Input field with theme support
<input className="
  bg-l-bg-1 dark:bg-d-bg-1
  text-l-text-1 dark:text-d-text-1
  border border-border-l dark:border-border-d
  focus:border-accent-1
  rounded px-3 py-2
  placeholder:text-l-text-3 dark:placeholder:text-d-text-3
"
placeholder="Enter your text..." />
```

#### Status and Feedback Components

```jsx
// Success alert
<div className="bg-l-bg-2 dark:bg-d-bg-2 border-l-4 border-accent-success p-4 rounded">
  <div className="flex items-center">
    <span className="text-accent-success">✓</span>
    <p className="ml-2 text-l-text-1 dark:text-d-text-1">Success message</p>
  </div>
</div>

// Warning alert
<div className="bg-l-bg-3 dark:bg-d-bg-3 border border-accent-warning rounded p-3">
  <p className="text-accent-warning font-medium">Warning:</p>
  <p className="text-l-text-2 dark:text-d-text-2">This action cannot be undone</p>
</div>

// Error state
<div className="bg-l-bg-1 dark:bg-d-bg-1 border border-accent-danger rounded p-3">
  <p className="text-accent-danger">Error: Something went wrong</p>
</div>
```

#### Navigation and Layout

```jsx
// Navigation bar
<nav className="bg-l-bg-2 dark:bg-d-bg-2 border-b border-border-l dark:border-border-d">
  <div className="px-4 py-3">
    <ul className="flex space-x-4">
      <li>
        <a href="#" className="text-l-text-1 dark:text-d-text-1 hover:text-accent-1">
          Home
        </a>
      </li>
      <li>
        <a href="#" className="text-l-text-2 dark:text-d-text-2 hover:text-l-text-1 dark:hover:text-d-text-1">
          About
        </a>
      </li>
    </ul>
  </div>
</nav>

// Sidebar
<aside className="bg-l-bg-3 dark:bg-d-bg-3 w-64 min-h-screen p-4">
  <h2 className="text-l-text-1 dark:text-d-text-1 font-bold mb-4">Sidebar</h2>
  <div className="space-y-2">
    <div className="p-2 rounded hover:bg-l-bg-hover dark:hover:bg-d-bg-hover">
      <span className="text-l-text-2 dark:text-d-text-2">Menu Item</span>
    </div>
  </div>
</aside>
```

## Customizing the Theming System

### Step-by-Step Theme Customization

#### 1. Understanding the Theme File Structure

The theme is defined in `src/styles/globals.css` using Tailwind CSS v4's `@theme` directive:

```css
@theme {
  /* Your color variables go here */
  --color-l-bg-1: #ffffff;
  --color-accent-1: #58a6ff;
  /* etc. */
}
```

#### 2. Modifying Existing Colors

To change existing colors, simply update the corresponding CSS custom property:

```css
@theme {
  /* Change primary brand color */
  --color-accent-1: #ff6b6b; /* Your new primary color */
  --color-accent-2: #ee5a52; /* Darker variant for hover states */

  /* Customize light mode backgrounds */
  --color-l-bg-1: #fafafa; /* Slightly off-white */
  --color-l-bg-2: #f0f0f0; /* Light gray */

  /* Customize dark mode backgrounds */
  --color-d-bg-1: #1a1a1a; /* Warmer dark */
  --color-d-bg-2: #2d2d2d; /* Medium dark */

  /* Update text colors for better contrast */
  --color-l-text-1: #1a1a1a; /* Softer black */
  --color-d-text-1: #f5f5f5; /* Softer white */
}
```

#### 3. Adding New Semantic Color Variables

You can extend the system with your own semantic colors:

```css
@theme {
  /* Existing colors... */

  /* Add new brand colors */
  --color-brand-primary: #3b82f6;
  --color-brand-secondary: #8b5cf6;
  --color-brand-tertiary: #06b6d4;

  /* Add specialized semantic colors */
  --color-info: #0ea5e9;
  --color-tip: #22c55e;
  --color-feature: #f59e0b;

  /* Add surface colors for different content types */
  --color-surface-code: #f8fafc;
  --color-surface-highlight: #fef3c7;
  --color-surface-muted: #f1f5f9;

  /* Add status-specific colors */
  --color-status-online: #10b981;
  --color-status-away: #f59e0b;
  --color-status-offline: #6b7280;
}
```

Then use them in your components:

```jsx
// Using new brand colors
<div className="bg-brand-primary text-white p-4">
  Primary brand section
</div>

// Using specialized semantic colors
<div className="bg-surface-code p-3 rounded border-l-4 border-info">
  <code className="text-info">console.log('Hello, world!');</code>
</div>

// Status indicators
<span className="inline-block w-3 h-3 rounded-full bg-status-online"></span>
<span className="ml-2 text-l-text-1 dark:text-d-text-1">Online</span>
```

#### 4. Creating Theme Variants

You can create multiple theme variations for different sections or contexts:

```css
@theme {
  /* Default theme colors... */

  /* Admin panel theme */
  --color-admin-bg-primary: #1e293b;
  --color-admin-bg-secondary: #334155;
  --color-admin-accent: #f97316;
  --color-admin-text: #f1f5f9;

  /* Marketing theme */
  --color-marketing-gradient-start: #667eea;
  --color-marketing-gradient-end: #764ba2;
  --color-marketing-highlight: #fbbf24;

  /* Blog theme */
  --color-blog-bg-article: #fefefe;
  --color-blog-text-body: #374151;
  --color-blog-accent-link: #2563eb;
}
```

Apply theme variants using specific classes:

```jsx
// Admin panel with custom theme
<div className="bg-admin-bg-primary text-admin-text min-h-screen">
  <header className="bg-admin-bg-secondary p-4">
    <h1 className="text-admin-accent">Admin Dashboard</h1>
  </header>
</div>

// Marketing section with gradient
<section className="bg-linear-to-r from-marketing-gradient-start to-marketing-gradient-end">
  <h2 className="text-white">Marketing Content</h2>
  <span className="text-marketing-highlight">Special Offer!</span>
</section>
```

#### 5. Implementing Color Schemes (Beyond Light/Dark)

Create multiple complete color schemes:

```css
@theme {
  /* Base theme colors... */

  /* High Contrast Theme */
  --color-hc-bg-1: #000000;
  --color-hc-bg-2: #1a1a1a;
  --color-hc-text-1: #ffffff;
  --color-hc-text-2: #f0f0f0;
  --color-hc-accent: #ffff00;

  /* Sepia Theme */
  --color-sepia-bg-1: #f7f3e9;
  --color-sepia-bg-2: #f0ead6;
  --color-sepia-text-1: #5d4e37;
  --color-sepia-text-2: #8b7355;
  --color-sepia-accent: #cd853f;

  /* Blue Light Theme */
  --color-blue-bg-1: #1a1f36;
  --color-blue-bg-2: #242946;
  --color-blue-text-1: #e1e5f2;
  --color-blue-text-2: #b8c4db;
  --color-blue-accent: #4dabf7;
}
```

### Advanced Customization Techniques

#### 1. Dynamic Theme Switching

Extend the `ThemeToggle` component to support multiple themes:

```tsx
// Enhanced theme toggle component
import { useState, useEffect } from 'react';
import useLocalStorage from 'use-local-storage';

type Theme = 'light' | 'dark' | 'high-contrast' | 'sepia';

const AdvancedThemeToggle = () => {
  const [theme, setTheme] = useLocalStorage<Theme>('advanced-theme', 'light');

  useEffect(() => {
    // Remove all theme classes
    document.documentElement.className = '';
    // Add current theme class
    document.documentElement.classList.add(theme);
  }, [theme]);

  const themes: { value: Theme; label: string; icon: string }[] = [
    { value: 'light', label: 'Light', icon: '☀️' },
    { value: 'dark', label: 'Dark', icon: '🌙' },
    { value: 'high-contrast', label: 'High Contrast', icon: '🔲' },
    { value: 'sepia', label: 'Sepia', icon: '📜' },
  ];

  return (
    <select
      value={theme}
      onChange={e => setTheme(e.target.value as Theme)}
      className="bg-l-bg-2 dark:bg-d-bg-2 text-l-text-1 dark:text-d-text-1 border border-border-l dark:border-border-d rounded px-3 py-2"
    >
      {themes.map(({ value, label, icon }) => (
        <option key={value} value={value}>
          {icon} {label}
        </option>
      ))}
    </select>
  );
};
```

#### 2. CSS Custom Properties with JavaScript

Dynamically update theme colors using JavaScript:

```tsx
// Theme customization hook
const useThemeCustomization = () => {
  const updateThemeColor = (property: string, value: string) => {
    document.documentElement.style.setProperty(`--color-${property}`, value);
  };

  const resetTheme = () => {
    // Reset to default values
    const defaults = {
      'l-bg-1': '#ffffff',
      'accent-1': '#58a6ff',
      // ... other defaults
    };

    Object.entries(defaults).forEach(([property, value]) => {
      updateThemeColor(property, value);
    });
  };

  return { updateThemeColor, resetTheme };
};

// Theme customizer component
const ThemeCustomizer = () => {
  const { updateThemeColor } = useThemeCustomization();
  const [primaryColor, setPrimaryColor] = useState('#58a6ff');

  const handleColorChange = (color: string) => {
    setPrimaryColor(color);
    updateThemeColor('accent-1', color);
  };

  return (
    <div className="p-4 bg-l-bg-2 dark:bg-d-bg-2 rounded-lg">
      <label className="block text-l-text-1 dark:text-d-text-1 mb-2">
        Primary Color:
      </label>
      <input
        type="color"
        value={primaryColor}
        onChange={e => handleColorChange(e.target.value)}
        className="w-full h-10 rounded border border-border-l dark:border-border-d"
      />
    </div>
  );
};
```

### Theme Testing and Quality Assurance

#### 1. Accessibility Considerations

Ensure your custom themes meet accessibility standards:

```css
@theme {
  /* Ensure sufficient contrast ratios */
  --color-l-bg-1: #ffffff; /* Background */
  --color-l-text-1: #1a1a1a; /* Text - should have 4.5:1 contrast ratio */

  /* Test your colors using tools like: */
  /* - WebAIM Contrast Checker */
  /* - Chrome DevTools Accessibility panel */
  /* - axe accessibility checker */
}
```

#### 2. Testing Theme Variants

Create a comprehensive test page to validate your theme:

```jsx
// ThemeTestPage component
const ThemeTestPage = () => {
  return (
    <div className="p-8 space-y-8">
      {/* Background layers test */}
      <section className="space-y-4">
        <h2 className="text-l-text-1 dark:text-d-text-1 text-xl font-bold">
          Background Layers
        </h2>
        <div className="bg-l-bg-1 dark:bg-d-bg-1 p-4 border border-border-l dark:border-border-d">
          <p className="text-l-text-1 dark:text-d-text-1">
            Primary background (l-bg-1/d-bg-1)
          </p>
          <div className="mt-2 bg-l-bg-2 dark:bg-d-bg-2 p-4">
            <p className="text-l-text-1 dark:text-d-text-1">
              Secondary background (l-bg-2/d-bg-2)
            </p>
            <div className="mt-2 bg-l-bg-3 dark:bg-d-bg-3 p-4">
              <p className="text-l-text-1 dark:text-d-text-1">
                Tertiary background (l-bg-3/d-bg-3)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Text hierarchy test */}
      <section className="space-y-4">
        <h2 className="text-l-text-1 dark:text-d-text-1 text-xl font-bold">
          Text Hierarchy
        </h2>
        <div className="bg-l-bg-1 dark:bg-d-bg-1 p-4">
          <h1 className="text-l-text-1 dark:text-d-text-1 text-2xl">
            Primary text (l-text-1/d-text-1)
          </h1>
          <p className="text-l-text-2 dark:text-d-text-2 text-lg">
            Secondary text (l-text-2/d-text-2)
          </p>
          <p className="text-l-text-3 dark:text-d-text-3">
            Tertiary text (l-text-3/d-text-3)
          </p>
        </div>
      </section>

      {/* Accent colors test */}
      <section className="space-y-4">
        <h2 className="text-l-text-1 dark:text-d-text-1 text-xl font-bold">
          Accent Colors
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <button className="bg-accent-1 text-white p-3 rounded">
            Primary
          </button>
          <button className="bg-accent-2 text-white p-3 rounded">
            Secondary
          </button>
          <button className="bg-accent-success text-white p-3 rounded">
            Success
          </button>
          <button className="bg-accent-warning text-white p-3 rounded">
            Warning
          </button>
          <button className="bg-accent-danger text-white p-3 rounded">
            Danger
          </button>
        </div>
      </section>
    </div>
  );
};
```

### Best Practices for Theme Customization

1. **Maintain Contrast Ratios**: Always test that text remains readable against background colors
2. **Use Semantic Naming**: Choose color variable names that describe purpose, not appearance
3. **Test Both Modes**: Ensure your customizations work in both light and dark modes
4. **Consider Color Blindness**: Test your themes with color blindness simulators
5. **Document Your Changes**: Keep track of customizations for team collaboration
6. **Version Your Themes**: Use version control to track theme evolution
7. **Performance**: Avoid excessive CSS custom property updates for better performance

This comprehensive theming system provides the foundation for creating beautiful, accessible, and maintainable user interfaces that adapt to your specific design requirements.

## Dark Mode Implementation

[↑ Back to Table of Contents](#-table-of-contents)

This template includes a ready-to-use dark mode implementation:

1. **Theme Toggle Component**: Located at `src/components/layout/ThemeToggle.tsx`, this component provides a button to switch between light and dark modes.

2. **Local Storage**: User preference is saved to local storage so it persists between visits.

3. **System Preference Detection**: The template automatically detects the user's system preference for dark/light mode on first visit.

4. **Implementation Example**:

```jsx
import { ThemeToggle } from '@/components/layout';

function MyComponent() {
  return (
    <div className="bg-l-bg-1 dark:bg-d-bg-1 text-l-text-1 dark:text-d-text-1">
      <h1>My Component</h1>
      <ThemeToggle />
    </div>
  );
}
```

---

## 🛠️ Development & Deployment

### Development Tools

[↑ Back to Table of Contents](#-table-of-contents)

### ESLint Configuration with Caching

This template uses ESLint to enforce code quality with intelligent caching for optimal performance. The configuration is in `eslint.config.js` and includes:

- React recommended rules
- TypeScript integration
- Import order rules
- React Hooks rules
- **Performance caching** - 70% faster linting on subsequent runs

To run ESLint:

```bash
npm run lint      # Check for issues (cached)
npm run lint:fix  # Fix issues automatically (cached)
```

**Caching Details:**

- Cache file: `.eslintcache` (automatically managed)
- First run: ~6 seconds, subsequent runs: ~2.5 seconds
- Only re-lints files that have changed since last run

### Prettier Configuration

Prettier ensures consistent code formatting. Configuration includes modern settings for optimal development experience:

```json
{
  "singleQuote": true,
  "semi": true,
  "tabWidth": 2,
  "printWidth": 80,
  "trailingComma": "es5",
  "arrowParens": "avoid",
  "endOfLine": "lf"
}
```

To run Prettier:

```bash
npm run format:all    # Format all files
npm run format:check  # Check formatting
```

### TypeScript Incremental Compilation

TypeScript compilation is optimized with incremental builds:

```bash
npm run type-check    # Incremental type checking (95% faster)
```

**Performance Benefits:**

- Cache file: `.tsbuildinfo` (automatically managed)
- Only type-checks changed files and their dependencies
- Massive speed improvement on large codebases

### Husky and lint-staged with Performance Optimizations

The template uses optimized git hooks for maximum development speed:

**Pre-commit Hook** (`.husky/pre-commit`):

- Runs lint-staged with caching enabled
- Only processes staged files (not entire codebase)
- ESLint and Prettier run with caching for speed

**Pre-push Hook** (`.husky/pre-push`):

- **Enhanced auto-fix capabilities**: Automatically fixes ESLint and Prettier issues
- **Smart change detection**: Only processes files that have actually changed
- **Automatic staging**: Auto-stages fixed files for seamless workflow
- **Smart build verification**: Only builds if source files changed after fixes
- **Clear feedback**: Notifies about applied fixes and build decisions

**lint-staged configuration:**

```json
{
  "*.{js,jsx,ts,tsx}": [
    "eslint --fix --cache --cache-location .eslintcache",
    "prettier --write"
  ],
  "*.{json,md}": ["prettier --write"]
}
```

This ensures that all committed code meets quality standards without slowing down development.

## ⚡ Performance Optimizations

[↑ Back to Table of Contents](#-table-of-contents)

This template is built with performance in mind, including both runtime and development-time optimizations:

### Development Performance

#### ESLint Caching

- **70% faster linting** on subsequent runs
- Cache persists between sessions
- Only re-lints changed files

#### TypeScript Incremental Compilation

- **95% faster type checking** (~0.5s vs 10s+)
- Incremental builds track file dependencies
- Perfect for large codebases

#### Smart Git Hooks

- **Conditional pre-push builds** - skip builds when no source changes
- **Lint-staged optimization** - only check files being committed
- **Cache-aware linting** - leverage ESLint cache in hooks

### Runtime Performance

### Vite Optimizations

- **Fast HMR**: Hot module replacement for instant feedback during development
- **Tree Shaking**: Automatic removal of unused code in production builds
- **Code Splitting**: Automatic code splitting for optimal bundle sizes
- **Asset Optimization**: Built-in optimization for images, fonts, and other assets
- **Modern JS Output**: Targets modern browsers by default for smaller bundles

### React 19 Features

- **Improved Hydration**: Faster initial page loads with better hydration
- **Concurrent Rendering**: Better user experience with non-blocking updates
- **Automatic Batching**: Optimized state updates for better performance
- **Suspense Improvements**: Enhanced loading states and error boundaries

### React Query Performance

- **Intelligent Caching**: Automatic background updates and cache invalidation
- **Request Deduplication**: Multiple components requesting same data get single request
- **Stale-While-Revalidate**: Instant UI updates with background data refresh
- **DevTools Integration**: Monitor queries, cache status, and performance

### Tailwind CSS v4 Benefits

- **Smaller CSS**: Only includes the styles you actually use
- **JIT Compilation**: Styles are generated on-demand during development
- **Optimized Output**: Production builds contain minimal CSS
- **No Build Step**: CSS processing is handled automatically

### Production Build Optimization

```bash
# Build for production with optimizations
npm run build

# Build with bundle size analysis
npm run build:analyze

# Preview production build locally
npm run preview
```

### Performance Monitoring

The template includes tools to monitor and optimize performance:

```tsx
// React Query DevTools (development only)
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// Monitor query performance, cache hits, and data flow
<ReactQueryDevtools initialIsOpen={false} />;
```

### Cache Files

All performance caches are properly managed:

- `.eslintcache` - ESLint results cache
- `.tsbuildinfo` - TypeScript incremental compilation cache
- Both are git-ignored but persist locally for speed

> 📊 **Performance Metrics**: See [PERFORMANCE.md](PERFORMANCE.md) for detailed benchmarks and optimization strategies.

## Browser Support

This template targets modern browsers with the following support:

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+
- **Mobile**: iOS Safari 14+, Chrome Android 90+

For legacy browser support, you can configure Vite to include polyfills:

```ts
// vite.config.ts
import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';

export default defineConfig({
  plugins: [
    // ... other plugins
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
  ],
});
```

## Deployment

[↑ Back to Table of Contents](#-table-of-contents)

### Build for Production

```bash
# Create production build
npm run build

# The built files will be in the `dist` directory
```

### Deployment Platforms

#### Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

#### Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --dir=dist --prod
```

#### GitHub Pages

1. Build the project: `npm run build`
2. Push the `dist` folder to a `gh-pages` branch
3. Enable GitHub Pages in repository settings

#### Docker

```dockerfile
# Dockerfile
FROM node:18-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### Environment Variables

Create environment files for different environments:

```bash
# .env.local (development)
VITE_APP_TITLE=My App - Development
VITE_API_URL=http://localhost:3001

# .env.production (production)
VITE_APP_TITLE=My App
VITE_API_URL=https://api.myapp.com
```

Use in your application:

```tsx
const apiUrl = import.meta.env.VITE_API_URL;
const appTitle = import.meta.env.VITE_APP_TITLE;
```

---

## 📚 Advanced Topics

### Folder Structure Best Practices

This template already implements a scalable folder structure. As your project grows, you can extend it with feature-based modules:

```
src/
├── 📁 app/              # Application configuration and setup
├── 📁 components/       # Reusable components organized by type
│   ├── 📁 ui/          # Basic UI components (buttons, inputs, etc.)
│   ├── 📁 layout/      # Layout components (header, footer, etc.)
│   └── ErrorBoundary.tsx # Global components
├── 📁 features/        # Feature-based modules
│   ├── auth/           # Authentication feature
│   ├── dashboard/      # Dashboard feature
│   └── profile/        # User profile feature
├── 📁 hooks/           # Custom React hooks
├── 📁 lib/            # Third-party library configurations
├── 📁 pages/          # Page components
├── 📁 styles/         # Global styles and themes
├── 📁 types/          # TypeScript type definitions
├── 📁 utils/          # Utility functions and constants
└── main.tsx           # Application entry point
```

Each feature in `features/` follows this structure:

```
features/auth/
├── components/       # Feature-specific components
├── hooks/           # Feature-specific hooks
├── types/           # Feature-specific types
├── api/            # Feature-specific API calls
└── index.ts        # Feature exports
```

See [STRUCTURE.md](STRUCTURE.md) for detailed architecture documentation.

## Adding Dependencies

[↑ Back to Table of Contents](#-table-of-contents)

### ✅ Already Included in This Template

The following popular dependencies are **already configured and ready to use**:

#### Routing (✅ Included)

- **React Router v7** - Client-side routing with layouts
- **Type definitions** - Full TypeScript support

#### Server State Management (✅ Included)

- **React Query (TanStack Query)** - Caching, background updates, DevTools
- **Query DevTools** - Development debugging interface

#### Form Handling (✅ Included)

- **React Hook Form** - High-performance forms with minimal re-renders
- **Zod** - TypeScript-first schema validation
- **Hook Form Resolvers** - Seamless Zod integration

#### Icons & UI (✅ Included)

- **Lucide React** - Beautiful, customizable icon library (1000+ icons)
- **Local Storage Hook** - Persistent state management

#### Development Tools (✅ Included)

- **Performance optimizations** - ESLint caching, TypeScript incremental compilation
- **Smart git hooks** - Conditional builds and optimized linting

### Common Dependencies to Consider

#### State Management (Optional)

```bash
# Zustand (lightweight global state)
npm install zustand

# Redux Toolkit (complex state management)
npm install @reduxjs/toolkit react-redux
```

#### UI Libraries (if you prefer pre-built components)

```bash
# Radix UI (headless components)
npm install @radix-ui/react-dialog @radix-ui/react-dropdown-menu

# shadcn/ui (pre-built components)
npx shadcn-ui@latest init
```

## 💾 Storage Hooks

[↑ Back to Table of Contents](#-table-of-contents)

This template includes powerful storage hooks for data persistence:

### useLocalStorage Hook

For storing data in localStorage with automatic JSON serialization:

```tsx
import { useLocalStorage } from '@/hooks';

const MyComponent = () => {
  const [user, setUser, removeUser] = useLocalStorage('user', {
    name: '',
    email: '',
  });

  return (
    <div>
      <p>Welcome, {user.name}!</p>
      <button
        onClick={() => setUser({ name: 'John', email: 'john@example.com' })}
      >
        Set User
      </button>
      <button onClick={removeUser}>Clear User</button>
    </div>
  );
};
```

**Features:**

- Type-safe with TypeScript generics
- Automatic JSON serialization/deserialization
- Cross-tab synchronization
- Error handling for corrupted data
- SSR-safe initialization

### useSecureStorage Hook

For storing sensitive data with AES-GCM encryption:

```tsx
import { useSecureStorage } from '@/hooks';

const SecureComponent = () => {
  const [token, setToken, removeToken, isLoading, error] =
    useSecureStorage('auth-token');

  const saveToken = async () => {
    await setToken('sensitive-jwt-token-here');
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <p>Token: {token ? '***ENCRYPTED***' : 'No token'}</p>
      <button onClick={saveToken}>Save Token</button>
      <button onClick={removeToken}>Clear Token</button>
    </div>
  );
};
```

**Features:**

- Web Crypto API encryption (AES-GCM with PBKDF2)
- Automatic encryption/decryption
- Configurable via environment variables
- Loading states and error handling
- Secure by default with development fallbacks

### Environment Configuration

The secure storage hook uses environment variables for encryption keys:

```bash
# .env (development)
VITE_ENCRYPTION_SECRET=your-development-encryption-key

# .env.production (production)
VITE_ENCRYPTION_SECRET=your-strong-production-encryption-key-here
```

**Security Best Practices:**

- Use a strong, randomly generated secret in production
- Never commit production secrets to version control
- Generate keys with: `openssl rand -base64 32`
- Rotate encryption keys periodically

#### Animations

```bash
# Framer Motion
npm install framer-motion

# React Spring
npm install @react-spring/web
```

### Package Management Tips

1. **Keep dependencies updated**: Use `npm run upgrade` regularly
2. **Audit security**: Run `npm audit` to check for vulnerabilities
3. **Bundle analysis**: Monitor bundle size with Vite's built-in `--report` flag
4. **Dependency cleanup**: Remove unused dependencies with `depcheck`

## Testing Setup

[↑ Back to Table of Contents](#-table-of-contents)

While not included by default, you can easily add testing:

### Vitest (recommended for Vite projects)

```bash
npm install --save-dev vitest @vitest/ui jsdom
npm install --save-dev @testing-library/react @testing-library/jest-dom
```

Add test script to `package.json`:

```json
{
  "scripts": {
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:run": "vitest run"
  }
}
```

### Jest (alternative)

```bash
npm install --save-dev jest @types/jest
npm install --save-dev @testing-library/react @testing-library/jest-dom
```

## Contributing

[↑ Back to Table of Contents](#-table-of-contents)

### Development Workflow

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Run tests: `npm test` (if you've added testing)
5. Run linting: `npm run lint:fix`
6. Format code: `npm run format`
7. Commit changes: `git commit -m 'Add amazing feature'`
8. Push to branch: `git push origin feature/amazing-feature`
9. Open a Pull Request

### Code Style Guidelines

- Use TypeScript for all new files
- Follow the existing ESLint and Prettier configurations
- Use semantic color variables from the theme system
- Write descriptive commit messages
- Add JSDoc comments for complex functions
- Keep components small and focused

## Troubleshooting

[↑ Back to Table of Contents](#-table-of-contents)

### Common Issues

#### Port Already in Use

```bash
# If port 5173 is in use, Vite will automatically use the next available port
# Or specify a different port:
npm run dev -- --port 3000
```

#### TypeScript Errors

```bash
# Clear TypeScript cache
rm -rf node_modules/.cache
npm run type-check
```

#### ESLint Issues

```bash
# Fix auto-fixable issues
npm run lint:fix

# For complex issues, check the ESLint output:
npm run lint
```

#### Build Issues

```bash
# Clear build cache
rm -rf dist
npm run build
```

### Getting Help

- 📚 **Documentation**: Check this README and the inline code comments
- 🐛 **Issues**: Open an issue on GitHub for bugs or feature requests
- 💬 **Discussions**: Use GitHub Discussions for questions and ideas
- 📧 **Contact**: Reach out to the maintainer for direct support

## License

[↑ Back to Table of Contents](#-table-of-contents)

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

[↑ Back to Table of Contents](#-table-of-contents)

- **React Team** for the amazing React 19 release with improved performance
- **React Router Team** for the powerful v7 routing solution
- **TanStack Team** for React Query - revolutionary server state management
- **React Hook Form Team** for the most performant form library
- **Colinhacks** for Zod - the best TypeScript-first validation library
- **Lucide** team for the beautiful, consistent icon library
- **Vite Team** for the lightning-fast development experience
- **Tailwind CSS** team for the utility-first CSS framework
- **TypeScript Team** for bringing static typing to JavaScript
- **ESLint & Prettier teams** for code quality tooling
- **Open Source Community** for the incredible tooling ecosystem

Special thanks to all the maintainers and contributors who make modern web development so productive and enjoyable!

---

**Built with ❤️ by [Yousif Abozid](https://github.com/YousifAbozid)**

_This template is constantly being improved. Star the repository to stay updated with the latest features and improvements!_
