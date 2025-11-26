import { useState } from 'react';
import { useToast } from '@/contexts/ToastContext';
import { useDebounce, useDebounceCallback } from '@/hooks/useDebounce';
import { useErrorBoundary } from '@/components/ErrorBoundary';
import {
  Search,
  AlertTriangle,
  CheckCircle,
  Info,
  AlertCircle,
  Zap,
} from 'lucide-react';

export default function DemoPage() {
  const { notify } = useToast();
  const { captureError } = useErrorBoundary();

  // Debounce hook demo
  const [searchValue, setSearchValue] = useState('');
  const debouncedSearchValue = useDebounce(searchValue, 500);

  // Debounce callback demo
  const debouncedSearch = useDebounceCallback((query: string) => {
    if (query.trim()) {
      notify('info', `Searching for: "${query}"`, 'top-right', 2000);
    }
  }, 500);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    debouncedSearch(value);
  };

  // Toast notifications demo
  const showToast = (type: 'success' | 'error' | 'warning' | 'info') => {
    const messages = {
      success: 'Operation completed successfully!',
      error: 'Something went wrong. Please try again.',
      warning: 'Please check your input and try again.',
      info: "Here's some useful information for you.",
    };

    notify(type, messages[type], 'bottom-right', 4000);
  };

  // Error boundary demo
  const triggerError = () => {
    try {
      // Simulate an error
      throw new Error('This is a demo error to test the error boundary');
    } catch (error) {
      captureError(error as Error);
    }
  };

  const causeComponentError = () => {
    // This will cause a render error that the error boundary will catch
    throw new Error(
      'Component render error - this will be caught by ErrorBoundary'
    );
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-l-text-1 dark:text-d-text-1 mb-4">
          🚀 New Features Demo
        </h1>
        <p className="text-l-text-2 dark:text-d-text-2 text-lg">
          Test the new Error Boundaries, Toast System, Debounce Hooks, and more!
        </p>
      </div>

      <div className="space-y-8">
        {/* Debounce Hook Demo */}
        <section className="bg-l-bg-2 dark:bg-d-bg-2 rounded-lg p-6 border border-border-l dark:border-border-d">
          <h2 className="text-2xl font-semibold text-l-text-1 dark:text-d-text-1 mb-4 flex items-center gap-2">
            <Search className="h-6 w-6 text-accent-1" />
            Debounce Hook Demo
          </h2>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="search"
                className="block text-sm font-medium text-l-text-2 dark:text-d-text-2 mb-2"
              >
                Search (debounced for 500ms)
              </label>
              <input
                id="search"
                type="text"
                value={searchValue}
                onChange={handleSearchChange}
                placeholder="Type to see debounce in action..."
                className="w-full px-3 py-2 border border-border-l dark:border-border-d rounded-md bg-l-bg-1 dark:bg-d-bg-1 text-l-text-1 dark:text-d-text-1 focus:ring-2 focus:ring-accent-1 focus:border-accent-1"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="p-3 bg-l-bg-3 dark:bg-d-bg-3 rounded">
                <strong>Current value:</strong>{' '}
                <span className="font-mono">{searchValue}</span>
              </div>
              <div className="p-3 bg-l-bg-3 dark:bg-d-bg-3 rounded">
                <strong>Debounced value:</strong>{' '}
                <span className="font-mono">{debouncedSearchValue}</span>
              </div>
            </div>
            <p className="text-xs text-l-text-3 dark:text-d-text-3">
              Notice how the debounced value updates only after you stop typing
              for 500ms. This is perfect for search inputs and API calls!
            </p>
          </div>
        </section>

        {/* Toast Notifications Demo */}
        <section className="bg-l-bg-2 dark:bg-d-bg-2 rounded-lg p-6 border border-border-l dark:border-border-d">
          <h2 className="text-2xl font-semibold text-l-text-1 dark:text-d-text-1 mb-4 flex items-center gap-2">
            <Zap className="h-6 w-6 text-accent-1" />
            Toast Notifications Demo
          </h2>
          <p className="text-l-text-2 dark:text-d-text-2 mb-4">
            Click any button below to see different types of toast
            notifications:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <button
              onClick={() => showToast('success')}
              className="flex items-center justify-center gap-2 px-4 py-2 bg-accent-success hover:bg-accent-success/80 text-white rounded-md transition-colors"
            >
              <CheckCircle className="h-4 w-4" />
              Success
            </button>
            <button
              onClick={() => showToast('error')}
              className="flex items-center justify-center gap-2 px-4 py-2 bg-accent-danger hover:bg-accent-danger/80 text-white rounded-md transition-colors"
            >
              <AlertCircle className="h-4 w-4" />
              Error
            </button>
            <button
              onClick={() => showToast('warning')}
              className="flex items-center justify-center gap-2 px-4 py-2 bg-accent-warning hover:bg-accent-warning/80 text-white rounded-md transition-colors"
            >
              <AlertTriangle className="h-4 w-4" />
              Warning
            </button>
            <button
              onClick={() => showToast('info')}
              className="flex items-center justify-center gap-2 px-4 py-2 bg-accent-1 hover:bg-accent-2 text-white rounded-md transition-colors"
            >
              <Info className="h-4 w-4" />
              Info
            </button>
          </div>
          <div className="mt-4 p-3 bg-l-bg-3 dark:bg-d-bg-3 rounded text-xs text-l-text-3 dark:text-d-text-3">
            <strong>Toast Features:</strong> Auto-dismiss after 4 seconds,
            manual close, different positions, animated entrance, proper
            accessibility, and theme-aware styling.
          </div>
        </section>

        {/* Error Boundary Demo */}
        <section className="bg-l-bg-2 dark:bg-d-bg-2 rounded-lg p-6 border border-border-l dark:border-border-d">
          <h2 className="text-2xl font-semibold text-l-text-1 dark:text-d-text-1 mb-4 flex items-center gap-2">
            <AlertTriangle className="h-6 w-6 text-accent-danger" />
            Error Boundary Demo
          </h2>
          <p className="text-l-text-2 dark:text-d-text-2 mb-4">
            Test the error boundary system that gracefully handles JavaScript
            errors:
          </p>
          <div className="space-y-3">
            <button
              onClick={triggerError}
              className="px-4 py-2 bg-accent-danger hover:bg-accent-danger/80 text-white rounded-md transition-colors mr-3"
            >
              Trigger Error (Handled)
            </button>
            <button
              onClick={causeComponentError}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors"
            >
              Cause Component Error (Will Show Error UI)
            </button>
          </div>
          <div className="mt-4 p-3 bg-l-bg-3 dark:bg-d-bg-3 rounded text-xs text-l-text-3 dark:text-d-text-3">
            <strong>Error Boundary Features:</strong> Catches JavaScript errors,
            shows friendly error UI, provides recovery options (reset, refresh,
            go home), shows error details in development mode.
          </div>
        </section>

        {/* shadcn/ui Integration */}
        <section className="bg-l-bg-2 dark:bg-d-bg-2 rounded-lg p-6 border border-border-l dark:border-border-d">
          <h2 className="text-2xl font-semibold text-l-text-1 dark:text-d-text-1 mb-4">
            🎨 shadcn/ui Integration
          </h2>
          <p className="text-l-text-2 dark:text-d-text-2 mb-4">
            shadcn/ui is now set up and ready to use! You can add beautiful,
            accessible components:
          </p>
          <div className="bg-l-bg-3 dark:bg-d-bg-3 rounded p-4 font-mono text-sm">
            <div className="text-l-text-3 dark:text-d-text-3 mb-2">
              # Add components as needed:
            </div>
            <div className="text-accent-1">npx shadcn@latest add button</div>
            <div className="text-accent-1">npx shadcn@latest add dialog</div>
            <div className="text-accent-1">npx shadcn@latest add select</div>
            <div className="text-accent-1">npx shadcn@latest add form</div>
          </div>
          <div className="mt-4 p-3 bg-l-bg-3 dark:bg-d-bg-3 rounded text-xs text-l-text-3 dark:text-d-text-3">
            <strong>shadcn/ui Benefits:</strong> Copy-paste components, full
            TypeScript support, customizable with CSS variables, works with
            Tailwind, accessible by default.
          </div>
        </section>

        {/* Hooks Overview */}
        <section className="bg-l-bg-2 dark:bg-d-bg-2 rounded-lg p-6 border border-border-l dark:border-border-d">
          <h2 className="text-2xl font-semibold text-l-text-1 dark:text-d-text-1 mb-4">
            🪝 Custom Hooks Available
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-l-bg-3 dark:bg-d-bg-3 rounded">
              <h3 className="font-semibold text-l-text-1 dark:text-d-text-1 mb-2">
                useDebounce
              </h3>
              <p className="text-sm text-l-text-2 dark:text-d-text-2 mb-2">
                Debounces a value with configurable delay
              </p>
              <code className="text-xs bg-l-bg-1 dark:bg-d-bg-1 p-1 rounded">
                useDebounce(value, delay)
              </code>
            </div>
            <div className="p-4 bg-l-bg-3 dark:bg-d-bg-3 rounded">
              <h3 className="font-semibold text-l-text-1 dark:text-d-text-1 mb-2">
                useDebounceCallback
              </h3>
              <p className="text-sm text-l-text-2 dark:text-d-text-2 mb-2">
                Debounces a callback function
              </p>
              <code className="text-xs bg-l-bg-1 dark:bg-d-bg-1 p-1 rounded">
                useDebounceCallback(fn, delay)
              </code>
            </div>
          </div>
          <div className="mt-4 p-3 bg-l-bg-3 dark:bg-d-bg-3 rounded text-xs text-l-text-3 dark:text-d-text-3">
            More hooks can be added to the <code>/src/hooks</code> directory as
            needed. Common ones include useLocalStorage, useMediaQuery,
            useWindowSize, usePrevious, etc.
          </div>
        </section>
      </div>
    </div>
  );
}
