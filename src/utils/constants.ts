/**
 * Application constants
 */

// API Configuration
export const API_CONFIG = {
  BASE_URL:
    (import.meta.env.VITE_API_BASE_URL as string) ||
    'http://localhost:3001/api',
  TIMEOUT: 10000,
  RETRY_ATTEMPTS: 3,
} as const;

// Toast Configuration
export const TOAST_CONFIG = {
  DEFAULT_DURATION: 5000,
  SUCCESS_DURATION: 3000,
  ERROR_DURATION: 7000,
  MAX_TOASTS: 5,
} as const;

// Theme Configuration
export const THEME_CONFIG = {
  STORAGE_KEY: 'theme-preference',
  DEFAULT_THEME: 'system',
} as const;

// Form Configuration
export const FORM_CONFIG = {
  DEBOUNCE_DELAY: 300,
  VALIDATION_DELAY: 500,
} as const;

// Application metadata
export const APP_CONFIG = {
  NAME: 'React Template',
  DESCRIPTION: 'Modern React TypeScript template',
  VERSION: '1.0.0',
  AUTHOR: 'Yousif Abozid',
  REPOSITORY: 'https://github.com/YousifAbozid/template-react-ts',
} as const;

// Breakpoints (should match Tailwind CSS)
export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  '2XL': 1536,
} as const;
