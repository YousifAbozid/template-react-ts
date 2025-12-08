import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ToastProvider } from '@/shared/contexts/ToastContext';
import { ThemeProvider } from '@/shared/contexts/ThemeProvider';
import ToastContainer from '@/shared/components/ui/ToastContainer';
import { queryClient } from '@/shared/lib';

interface AppProvidersProps {
  children: React.ReactNode;
}

export const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <ThemeProvider>
      <ToastProvider>
        <QueryClientProvider client={queryClient}>
          {children}
          <ReactQueryDevtools initialIsOpen={false} />
          <ToastContainer />
        </QueryClientProvider>
      </ToastProvider>
    </ThemeProvider>
  );
};
