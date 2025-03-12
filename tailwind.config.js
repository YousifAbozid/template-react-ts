/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // Enable dark mode with class strategy
  theme: {
    extend: {
      colors: {
        // Light mode colors
        light: {
          background: {
            primary: '#ffffff', // Lightest background
            secondary: '#f6f8fa', // Secondary background
            tertiary: '#ebedf0', // Tertiary background
          },
          text: {
            primary: '#24292f', // Primary text
            secondary: '#57606a', // Secondary text
            tertiary: '#6e7781', // Tertiary text
          },
        },
        // Dark mode colors (GitHub inspired)
        dark: {
          background: {
            primary: '#0d1117', // Darkest background
            secondary: '#161b22', // Secondary background
            tertiary: '#21262d', // Tertiary background
          },
          text: {
            primary: '#f0f6fc', // Primary text
            secondary: '#c9d1d9', // Secondary text
            tertiary: '#8b949e', // Tertiary text
          },
        },
        // Accent colors (shared between modes but will look different in context)
        accent: {
          primary: '#58a6ff', // Primary accent (blue)
          success: '#3fb950', // Success accent (green)
          warning: '#d29922', // Warning accent (yellow)
          danger: '#f85149', // Danger accent (red)
        },
      },
    },
  },
  plugins: [],
};
