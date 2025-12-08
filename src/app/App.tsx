import { ErrorBoundary } from '@/shared/components/ErrorBoundary';
import { AppProviders } from './AppProviders';
import { AppRouter } from './AppRouter';

const App = () => {
  return (
    <ErrorBoundary>
      <AppProviders>
        <AppRouter />
      </AppProviders>
    </ErrorBoundary>
  );
};

export default App;
