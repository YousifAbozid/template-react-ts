# React TypeScript Template ⚛️

> ✨ Production-ready React template with TypeScript, Vite, Tailwind CSS v4, and comprehensive tooling. Features functional architecture, dark mode support, and complete developer experience.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

## 🚀 Features

- ⚡ **Lightning Fast** - Powered by Vite for instant dev server and optimized builds
- 🎨 **Modern Styling** - Tailwind CSS v4 with dark mode support and custom design system
- 🔧 **TypeScript First** - Full type safety with strict configuration
- 📱 **Responsive Design** - Mobile-first approach with adaptive layouts
- 🎭 **Smooth Animations** - Framer Motion integration for fluid user interactions
- 🗂️ **Smart Architecture** - Feature-based folder structure with shared components
- 🔄 **State Management** - TanStack Query for server state with devtools
- 🛡️ **Form Validation** - React Hook Form with Zod schema validation
- 🧭 **Routing** - React Router v7 with type-safe navigation
- 🌙 **Theme System** - Comprehensive dark/light mode with system preference detection
- 📦 **Component Library** - Pre-built UI components with consistent design
- 🧪 **Code Quality** - ESLint, Prettier, TypeScript, and pre-commit hooks
- 🔍 **Bundle Analysis** - Built-in tools for analyzing build output
- 🎯 **Developer Experience** - Hot reload, auto-formatting, and intelligent tooling

## 📦 Tech Stack

### Core

- **React 19** - Latest React with Concurrent Features
- **TypeScript 5.9** - Static type checking
- **Vite 7** - Next generation frontend tooling

### Styling & UI

- **Tailwind CSS v4** - Utility-first CSS framework
- **Framer Motion 12** - Production-ready motion library
- **Lucide React** - Beautiful & consistent icons

### State & Forms

- **TanStack Query v5** - Powerful data synchronization
- **React Hook Form 7** - Performant forms with easy validation
- **Zod 4** - TypeScript-first schema validation

### Development Tools

- **ESLint 9** - Code linting with React-specific rules
- **Prettier 3** - Code formatting
- **Husky 9** - Git hooks for code quality
- **lint-staged** - Run linters on staged files

## 🏗️ Project Structure

```
src/
├── app/                    # Application core
│   ├── App.tsx            # Main app component
│   ├── AppProviders.tsx   # Context providers setup
│   └── AppRouter.tsx      # Routing configuration
├── features/              # Feature-based modules
│   ├── Home/             # Landing page feature
│   └── NotFound/         # 404 error page
└── shared/               # Shared utilities
    ├── components/       # Reusable UI components
    │   ├── ui/          # Base UI component library
    │   ├── ErrorBoundary.tsx
    │   └── ThemeToggle.tsx
    ├── contexts/        # React contexts
    │   ├── ThemeProvider.tsx
    │   └── ToastContext.tsx
    ├── hooks/           # Custom React hooks
    ├── lib/             # External library configurations
    ├── styles/          # Global styles and Tailwind imports
    └── utils/           # Helper functions and constants
```

## 🚀 Quick Start

### Prerequisites

- **Node.js 18+** (Latest LTS recommended)
- **npm** or **yarn** or **pnpm**

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/YousifAbozid/template-react-ts.git
   cd template-react-ts
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 📋 Available Scripts

| Command                 | Description                               |
| ----------------------- | ----------------------------------------- |
| `npm run dev`           | Start development server                  |
| `npm run build`         | Build for production                      |
| `npm run preview`       | Preview production build                  |
| `npm run build:analyze` | Build with bundle analysis                |
| `npm run analyze`       | Analyze existing bundle                   |
| `npm run type-check`    | Run TypeScript type checking              |
| `npm run lint`          | Lint code with ESLint                     |
| `npm run lint:fix`      | Fix ESLint issues automatically           |
| `npm run format`        | Format code with Prettier                 |
| `npm run format:check`  | Check code formatting                     |
| `npm run fix-all`       | Run both linting and formatting fixes     |
| `npm run test`          | Run all checks (format, lint, type-check) |
| `npm run test:ci`       | Run tests and build for CI                |
| `npm run upgrade`       | Update dependencies interactively         |

## 🎨 Styling System

### Tailwind CSS v4

This template uses the latest Tailwind CSS v4 with:

- **Custom design tokens** defined in CSS
- **Dark mode support** with system preference detection
- **Responsive design utilities** for all screen sizes
- **Custom color palette** with semantic naming

### Design Tokens

```css
/* Example of custom design system */
--color-accent-primary: #3b82f6;
--color-accent-secondary: #1d4ed8;
--color-background-primary: #ffffff;
--color-text-primary: #111827;
```

### Component Architecture

- **Base UI components** in `src/shared/components/ui/`
- **Feature-specific components** in respective feature folders
- **Consistent props interface** across all components
- **Theme-aware styling** with CSS custom properties

## 🧩 Key Features Deep Dive

### Theme System

- 🌙 **Dark/Light mode** with smooth transitions
- 🔄 **System preference detection** and persistence
- 🎨 **Consistent color palette** across all components
- ⚡ **Zero flash** theme initialization

### Form Handling

- 📝 **React Hook Form** for performance
- ✅ **Zod validation** for type safety
- 🔄 **Real-time validation** with user-friendly errors
- 📱 **Accessible form components**

### State Management

- 🔄 **Server state** handled by TanStack Query
- 🏪 **Client state** with React hooks and Context API
- 📡 **Background sync** and cache management
- 🔧 **DevTools integration** for debugging

## 🔧 Configuration

### TypeScript Configuration

- **Strict mode enabled** for maximum type safety
- **Path aliases** configured for clean imports
- **Modern ES features** with proper target settings

### ESLint & Prettier

- **React-specific rules** for hooks and JSX
- **TypeScript integration** with type-aware linting
- **Automatic formatting** on save and commit
- **Consistent code style** across the project

### Vite Configuration

- **Path aliases** for cleaner imports (`@/`, `@/features`, etc.)
- **Optimized builds** with tree-shaking and code splitting
- **Development server** with hot module replacement
- **Bundle analysis** tools integration

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Popular Platforms

#### Vercel

```bash
npm i -g vercel
vercel --prod
```

#### Netlify

```bash
npm run build
# Upload dist/ folder to Netlify
```

#### GitHub Pages

```bash
npm run build
# Configure GitHub Pages to serve from dist/
```

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes** following the project conventions
4. **Run tests**: `npm run test`
5. **Commit changes**: `git commit -m 'Add amazing feature'`
6. **Push to branch**: `git push origin feature/amazing-feature`
7. **Open a Pull Request**

### Development Guidelines

- ✅ **Write TypeScript** with proper typing
- ✅ **Follow ESLint rules** - automated with pre-commit hooks
- ✅ **Use semantic commit messages**
- ✅ **Add tests** for new features
- ✅ **Update documentation** when needed

## 📖 Learn More

- **[React Documentation](https://react.dev/)** - Learn React fundamentals
- **[TypeScript Handbook](https://www.typescriptlang.org/docs/)** - TypeScript reference
- **[Vite Guide](https://vitejs.dev/guide/)** - Vite build tool
- **[Tailwind CSS](https://tailwindcss.com/docs)** - Utility-first CSS
- **[TanStack Query](https://tanstack.com/query)** - Data fetching library
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Yousif Abozid**

- 🐙 GitHub: [@YousifAbozid](https://github.com/YousifAbozid)
- 📧 Email: yousif.abozid@yahoo.com

---

<div align="center">

**⭐ Star this repository if you find it helpful!**

Made with ❤️ and ⚡ by [Yousif Abozid](https://github.com/YousifAbozid)

</div>
