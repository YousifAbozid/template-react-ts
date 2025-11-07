# React 19, TypeScript, Vite, Tailwind CSS v4, Prettier, Eslint and Husky Template

A modern, ready-to-use template for building web applications with React 19, TypeScript, Vite, and Tailwind CSS v4, featuring a comprehensive theming system with dark mode support.

## Features

- 🎨 Complete theming system with semantic color variables
- 🌓 Dark mode support out of the box
- 📱 Responsive design ready
- 🚀 Optimized for Tailwind CSS v4
- ⚛️ React 19 with TypeScript
- ⚡️ Vite for fast development and builds
- 🧹 ESLint and Prettier for code quality
- 🪝 Husky and lint-staged for pre-commit hooks

## Technologies Used

This template combines the following technologies to provide a modern development experience:

- **React 19**: Latest version of the popular UI library with improved performance
- **TypeScript**: Static type checking for more robust code
- **Vite**: Next generation frontend tooling for fast development and optimized builds
- **Tailwind CSS v4**: Utility-first CSS framework with built-in dark mode support
- **ESLint**: Linting utility for identifying and fixing code problems
- **Prettier**: Code formatter for consistent styling
- **Husky**: Git hooks to enforce code quality checks before commits
- **lint-staged**: Run linters on git staged files

## Getting Started

### Installation

1. Clone this repository:

   ```bash
   git clone [repository-url] my-project
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

### Project Structure

```
template-react-ts/
├── .husky/                # Git hooks configuration
├── src/
│   ├── components/        # Reusable components
│   ├── App.tsx            # Main application component
│   ├── main.tsx           # Application entry point
│   └── globals.css        # Global styles and theme variables
├── public/                # Static assets
├── index.html             # HTML template
├── vite.config.ts         # Vite configuration
├── tsconfig.json          # TypeScript configuration
├── eslint.config.js       # ESLint configuration
└── package.json           # Project dependencies and scripts
```

## Available Scripts

The template includes the following npm scripts:

- **`npm run dev`**: Start the development server
- **`npm run build`**: Type-check and build the app for production
- **`npm run preview`**: Preview the production build locally
- **`npm run lint`**: Run ESLint to check for code issues
- **`npm run lint:fix`**: Run ESLint and automatically fix issues
- **`npm run format`**: Run Prettier to format all files
- **`npm run format:check`**: Check if files are properly formatted
- **`npm run fix-all`**: Run both lint:fix and format to fix all issues
- **`npm run upgrade`**: Update all dependencies to their latest versions

## Theme System

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

The theme is defined in `src/globals.css` using Tailwind CSS v4's `@theme` directive:

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
<section className="bg-gradient-to-r from-marketing-gradient-start to-marketing-gradient-end">
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

This template includes a ready-to-use dark mode implementation:

1. **Theme Toggle Component**: Located at `src/components/ThemeToggle.tsx`, this component provides a button to switch between light and dark modes.

2. **Local Storage**: User preference is saved to local storage so it persists between visits.

3. **System Preference Detection**: The template automatically detects the user's system preference for dark/light mode on first visit.

4. **Implementation Example**:

```jsx
import ThemeToggle from './components/ThemeToggle';

function MyComponent() {
  return (
    <div className="bg-l-bg-1 dark:bg-d-bg-1 text-l-text-1 dark:text-d-text-1">
      <h1>My Component</h1>
      <ThemeToggle />
    </div>
  );
}
```

## Development Tools

### ESLint Configuration

This template uses ESLint to enforce code quality. The configuration is in `eslint.config.js` and includes:

- React recommended rules
- TypeScript integration
- Import order rules
- React Hooks rules

To run ESLint:

```bash
npm run lint      # Check for issues
npm run lint:fix  # Fix issues automatically
```

### Prettier Configuration

Prettier ensures consistent code formatting. Configuration is in `.prettierrc`:

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
npm run format        # Format all files
npm run format:check  # Check formatting
```

### Husky and lint-staged

The template uses Husky to run checks before commits and lint-staged to only check files that are being committed:

- ESLint and Prettier run on staged JavaScript/TypeScript files
- Prettier runs on staged JSON and Markdown files

This ensures that all committed code meets the project's quality standards.

## Performance Optimizations

This template is built with performance in mind:

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

### Tailwind CSS v4 Benefits

- **Smaller CSS**: Only includes the styles you actually use
- **JIT Compilation**: Styles are generated on-demand during development
- **Optimized Output**: Production builds contain minimal CSS
- **No Build Step**: CSS processing is handled automatically

### Production Build Optimization

```bash
# Build for production with optimizations
npm run build

# Preview production build locally
npm run preview

# Analyze bundle size (optional)
npx vite-bundle-analyzer dist
```

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

## Folder Structure Best Practices

As your project grows, consider organizing files like this:

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # Basic UI components (buttons, inputs, etc.)
│   ├── layout/          # Layout components (header, footer, etc.)
│   └── forms/           # Form-specific components
├── pages/               # Page components
├── hooks/               # Custom React hooks
├── utils/               # Utility functions
├── services/            # API services and external integrations
├── stores/              # State management (if using Zustand/Redux)
├── types/               # TypeScript type definitions
├── constants/           # App constants and configurations
└── assets/              # Images, fonts, and other static assets
```

## Adding Dependencies

### Common Dependencies to Consider

#### State Management

```bash
# Zustand (lightweight state management)
npm install zustand

# React Query (server state management)
npm install @tanstack/react-query
```

#### Routing

```bash
# React Router
npm install react-router-dom
npm install --save-dev @types/react-router-dom
```

#### Form Handling

```bash
# React Hook Form
npm install react-hook-form

# Zod (schema validation)
npm install zod
npm install @hookform/resolvers
```

#### UI Libraries (if you prefer not to build from scratch)

```bash
# Radix UI (headless components)
npm install @radix-ui/react-dialog @radix-ui/react-dropdown-menu

# shadcn/ui (pre-built components)
npx shadcn-ui@latest init
```

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
3. **Bundle analysis**: Monitor bundle size with tools like `webpack-bundle-analyzer`
4. **Dependency cleanup**: Remove unused dependencies with `depcheck`

## Testing Setup

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

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- **React Team** for the amazing React 19 release
- **Vite Team** for the lightning-fast development experience
- **Tailwind CSS** team for the utility-first CSS framework
- **TypeScript Team** for bringing static typing to JavaScript
- **Open Source Community** for the incredible tooling ecosystem

---

**Built with ❤️ by [Yousif Abozid](https://github.com/YousifAbozid)**

_This template is constantly being improved. Star the repository to stay updated with the latest features and improvements!_
