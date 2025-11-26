import { ErrorBoundary } from '@/components/ErrorBoundary';
import { AppProviders } from './providers';
import { AppRouter } from './router';

function App() {
  return (
    <ErrorBoundary>
      <AppProviders>
        <AppRouter />
      </AppProviders>
    </ErrorBoundary>
  );
}

export default App;
