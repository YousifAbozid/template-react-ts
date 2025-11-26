// Common TypeScript type definitions

// API Response Types
export interface ApiResponse<T = unknown> {
  data: T;
  message?: string;
  status: 'success' | 'error';
  timestamp?: string;
}

export interface ApiError {
  message: string;
  code: string | number;
  details?: Record<string, unknown>;
}

// Common UI Props
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
  id?: string;
  'data-testid'?: string;
}

// Theme Types
export type Theme = 'light' | 'dark' | 'system';

// Form Types
export interface FormFieldError {
  message: string;
  type: string;
}

export interface FormState {
  isSubmitting: boolean;
  isValid: boolean;
  errors: Record<string, FormFieldError>;
}

// Navigation Types
export interface NavItem {
  label: string;
  href: string;
  icon?: React.ComponentType;
  isActive?: boolean;
  isExternal?: boolean;
}

// Toast Types
export type ToastType = 'success' | 'error' | 'warning' | 'info';

export interface ToastMessage {
  id: string;
  type: ToastType;
  title?: string;
  message: string;
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
}

// Storage Types
export interface StorageError {
  message: string;
  key: string;
  operation: 'read' | 'write' | 'delete';
}

export type StorageHookReturn<T> = [
  value: T,
  setValue: (value: T | ((prevValue: T) => T)) => void,
  removeValue: () => void,
];

export type SecureStorageHookReturn = [
  value: string,
  setValue: (value: string) => Promise<void>,
  removeValue: () => void,
  isLoading: boolean,
  error: Error | null,
];

// Generic utility types
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>;
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};
