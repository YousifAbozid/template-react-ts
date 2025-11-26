import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for debouncing a value
 * @param value - The value to debounce
 * @param delay - The debounce delay in milliseconds
 * @returns The debounced value
 */
export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}

/**
 * Custom hook for debouncing a callback function
 * @param callback - The callback function to debounce
 * @param delay - The debounce delay in milliseconds
 * @returns The debounced callback function
 */
export function useDebounceCallback<T extends (...args: unknown[]) => unknown>(
  callback: T,
  delay: number
): T {
  const callbackRef = useRef(callback);
  const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

  // Update callback ref when callback changes
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const debouncedCallback = useRef((...args: Parameters<T>) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      callbackRef.current(...args);
    }, delay);
  }).current;

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return debouncedCallback as T;
}

/**
 * Custom hook for immediate debounce with cancel functionality
 * @param callback - The callback function to debounce
 * @param delay - The debounce delay in milliseconds
 * @returns Object with debounced function and cancel method
 */
export function useAdvancedDebounce<T extends (...args: unknown[]) => unknown>(
  callback: T,
  delay: number
) {
  const callbackRef = useRef(callback);
  const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

  // Update callback ref when callback changes
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const cancel = useRef(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = undefined;
    }
  }).current;

  const debouncedCallback = useRef((...args: Parameters<T>) => {
    cancel();
    timeoutRef.current = setTimeout(() => {
      callbackRef.current(...args);
    }, delay);
  }).current;

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      cancel();
    };
  }, []);

  return {
    debounced: debouncedCallback as T,
    cancel,
    isPending: () => !!timeoutRef.current,
  };
}
