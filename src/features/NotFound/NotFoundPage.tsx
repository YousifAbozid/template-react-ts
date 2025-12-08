import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-background-primary flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        {/* 404 Large Number */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-accent-primary opacity-20 mb-4">
            404
          </h1>
          <h2 className="text-3xl font-bold text-text-primary -mt-8">
            Page Not Found
          </h2>
        </div>

        {/* Description */}
        <div className="mb-8">
          <p className="text-text-secondary text-lg mb-4">
            Oops! The page you&apos;re looking for doesn&apos;t exist.
          </p>
          <p className="text-text-tertiary">
            It might have been moved, deleted, or you entered the wrong URL.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <Link
            to="/"
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-accent-primary hover:bg-accent-secondary text-text-inverse rounded-lg transition-colors"
          >
            <Home className="h-5 w-5" />
            Go to Homepage
          </Link>

          <button
            onClick={() => window.history.back()}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-background-secondary hover:bg-background-hover text-text-primary border border-border-primary rounded-lg transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            Go Back
          </button>

          {/* Search suggestion */}
          <div className="pt-4 border-t border-border-primary">
            <p className="text-text-tertiary text-sm mb-2">
              Looking for something specific?
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-accent-primary hover:text-accent-secondary text-sm transition-colors"
            >
              <Search className="h-4 w-4" />
              Browse Homepage
            </Link>
          </div>
        </div>

        {/* Help text */}
        <div className="mt-8 pt-6 border-t border-border-primary">
          <p className="text-text-tertiary text-sm">
            Visit our homepage to explore all available features including
            forms, API demos, and more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
