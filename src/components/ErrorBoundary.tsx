import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error to console in development
    if (import.meta.env.DEV) {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    // Call optional onError callback
    this.props.onError?.(error, errorInfo);

    this.setState({
      error,
      errorInfo,
    });

    // Here you could also log the error to an error reporting service
    // logErrorToService(error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  private handleRefresh = () => {
    window.location.reload();
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI
      return (
        <div className="min-h-screen bg-l-bg-1 dark:bg-d-bg-1 flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-l-bg-2 dark:bg-d-bg-2 rounded-lg border border-border-l dark:border-border-d p-6 text-center">
            <div className="flex justify-center mb-4">
              <AlertTriangle className="h-12 w-12 text-accent-danger" />
            </div>

            <h1 className="text-xl font-bold text-l-text-1 dark:text-d-text-1 mb-2">
              Oops! Something went wrong
            </h1>

            <p className="text-l-text-2 dark:text-d-text-2 mb-6">
              We encountered an unexpected error. Don&apos;t worry, it&apos;s
              not your fault.
            </p>

            {/* Show error details in development */}
            {import.meta.env.DEV && this.state.error && (
              <details className="mb-6 text-left">
                <summary className="cursor-pointer text-l-text-2 dark:text-d-text-2 hover:text-l-text-1 dark:hover:text-d-text-1">
                  Error Details (Dev Mode)
                </summary>
                <pre className="mt-2 p-3 bg-l-bg-3 dark:bg-d-bg-3 rounded text-xs overflow-auto text-accent-danger">
                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}

            <div className="space-y-3">
              <button
                onClick={this.handleReset}
                className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-accent-1 hover:bg-accent-2 text-white rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-md cursor-pointer"
              >
                <RefreshCw className="h-5 w-5" />
                <span>Try Again</span>
              </button>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={this.handleRefresh}
                  className="flex items-center justify-center gap-3 px-4 py-3 bg-l-bg-3 dark:bg-d-bg-3 hover:bg-l-bg-hover dark:hover:bg-d-bg-hover text-l-text-1 dark:text-d-text-1 border border-border-l dark:border-border-d rounded-lg font-medium transition-all duration-200 cursor-pointer"
                >
                  <RefreshCw className="h-4 w-4" />
                  <span>Reload Page</span>
                </button>

                <button
                  onClick={this.handleGoHome}
                  className="flex items-center justify-center gap-3 px-4 py-3 bg-l-bg-3 dark:bg-d-bg-3 hover:bg-l-bg-hover dark:hover:bg-d-bg-hover text-l-text-1 dark:text-d-text-1 border border-border-l dark:border-border-d rounded-lg font-medium transition-all duration-200 cursor-pointer"
                >
                  <Home className="h-4 w-4" />
                  <span>Go Home</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Hook version for functional components
export function useErrorBoundary() {
  const [error, setError] = React.useState<Error | null>(null);

  const resetError = React.useCallback(() => {
    setError(null);
  }, []);

  const captureError = React.useCallback((error: Error) => {
    setError(error);
  }, []);

  React.useEffect(() => {
    if (error) {
      throw error;
    }
  }, [error]);

  return { captureError, resetError };
}
