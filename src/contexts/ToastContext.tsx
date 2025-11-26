import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
} from 'react';

export type ToastType = 'success' | 'error' | 'warning' | 'info';
export type ToastPosition =
  | 'top-left'
  | 'top-right'
  | 'top-center'
  | 'bottom-left'
  | 'bottom-right'
  | 'bottom-center';

export interface Toast {
  id: string;
  type: ToastType;
  message: string;
  createdAt: number;
  position: ToastPosition;
  duration: number;
}

interface ToastContextProps {
  toasts: Toast[];
  notify: (
    type: ToastType,
    message: string,
    position?: ToastPosition,
    duration?: number
  ) => void;
  removeToast: (id: string) => void;
  position: ToastPosition;
  setPosition: (position: ToastPosition) => void;
}

const ToastContext = createContext<ToastContextProps | undefined>(undefined);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [position, setPosition] = useState<ToastPosition>('bottom-right');

  const notify = useCallback(
    (
      type: ToastType,
      message: string,
      position?: ToastPosition,
      duration: number = 3000
    ) => {
      const id = `toast-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;

      const newToast: Toast = {
        id,
        type,
        message,
        createdAt: Date.now(),
        position: position || 'bottom-right',
        duration,
      };

      setToasts(currentToasts => [...currentToasts, newToast]);

      // Auto-remove toast after the specified duration
      setTimeout(() => {
        removeToast(id);
      }, duration);
    },
    []
  );

  const removeToast = useCallback((id: string) => {
    setToasts(currentToasts => currentToasts.filter(toast => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider
      value={{ toasts, notify, removeToast, position, setPosition }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);

  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  return context;
}
