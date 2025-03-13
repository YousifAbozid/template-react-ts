# Tailwind CSS v4 Theme Template

A modern, ready-to-use template for building web applications with Tailwind CSS v4, featuring a comprehensive theming system with dark mode support.

## Features

- 🎨 Complete theming system with semantic color variables
- 🌓 Dark mode support out of the box
- 📱 Responsive design ready
- 🚀 Optimized for Tailwind CSS v4

## Theme System

This template includes a carefully crafted theming system with semantic color variables for both light and dark modes.

### Color System Structure

Colors are organized in the following categories:

- **Light/Dark Background Colors**: Primary, secondary, tertiary, and hover states
- **Light/Dark Text Colors**: Primary, secondary, tertiary, and inverted text
- **Accent Colors**: Primary, secondary, success, warning, danger
- **Border Colors**: Light and dark mode borders
- **Shadow Colors**: For consistent box-shadow effects

### How to Use Theme Colors

You can apply theme colors directly using Tailwind utility classes:

```jsx
// Background colors
<div className="bg-l-bg-1 dark:bg-d-bg-1">...</div>

// Text colors
<p className="text-l-text-2 dark:text-d-text-2">...</p>

// Border colors
<div className="border border-border-l dark:border-border-d">...</div>

// Accent colors
<button className="bg-accent-1">Primary Action</button>
<div className="text-accent-success">Success message</div>
```

## Customizing the Theme

To customize the theme, modify the color variables in `src/globals.css`:

```css
@theme {
  /* Light Mode - Background Colors */
  --color-l-bg-1: #ffffff; /* Your custom color */

  /* Add more custom colors as needed */
}
```

## Getting Started

1. Clone this repository
2. Install dependencies: `npm install` or `yarn install`
3. Start the development server: `npm run dev` or `yarn dev`
4. Start building your project using the theme system

## Dark Mode

This template includes a `ThemeToggle` component that allows users to switch between light and dark modes. The dark mode uses the `dark` class on the HTML element.

## Browser Support

This template works in all modern browsers that support Tailwind CSS v4.

## License

MIT
