import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-l-bg-1 dark:bg-d-bg-1 flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        {/* 404 Large Number */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-accent-1 opacity-20">404</h1>
          <h2 className="text-3xl font-bold text-l-text-1 dark:text-d-text-1 -mt-8">
            Page Not Found
          </h2>
        </div>

        {/* Description */}
        <div className="mb-8">
          <p className="text-l-text-2 dark:text-d-text-2 text-lg mb-4">
            Oops! The page you&apos;re looking for doesn&apos;t exist.
          </p>
          <p className="text-l-text-3 dark:text-d-text-3">
            It might have been moved, deleted, or you entered the wrong URL.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <Link
            to="/"
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-accent-1 hover:bg-accent-2 text-white rounded-lg transition-colors"
          >
            <Home className="h-5 w-5" />
            Go to Homepage
          </Link>

          <button
            onClick={() => window.history.back()}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-l-bg-2 dark:bg-d-bg-2 hover:bg-l-bg-hover dark:hover:bg-d-bg-hover text-l-text-1 dark:text-d-text-1 border border-border-l dark:border-border-d rounded-lg transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            Go Back
          </button>

          {/* Search suggestion */}
          <div className="pt-4 border-t border-border-l dark:border-border-d">
            <p className="text-l-text-3 dark:text-d-text-3 text-sm mb-2">
              Looking for something specific?
            </p>
            <Link
              to="/features"
              className="inline-flex items-center gap-2 text-accent-1 hover:text-accent-2 text-sm transition-colors"
            >
              <Search className="h-4 w-4" />
              Explore Features
            </Link>
          </div>
        </div>

        {/* Popular Links */}
        <div className="mt-8 pt-6 border-t border-border-l dark:border-border-d">
          <p className="text-l-text-3 dark:text-d-text-3 text-sm mb-3">
            Popular pages:
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Link
              to="/features"
              className="px-3 py-1 text-sm bg-l-bg-2 dark:bg-d-bg-2 hover:bg-l-bg-hover dark:hover:bg-d-bg-hover text-l-text-2 dark:text-d-text-2 border border-border-l dark:border-border-d rounded transition-colors"
            >
              Features
            </Link>
            <Link
              to="/form-demo"
              className="px-3 py-1 text-sm bg-l-bg-2 dark:bg-d-bg-2 hover:bg-l-bg-hover dark:hover:bg-d-bg-hover text-l-text-2 dark:text-d-text-2 border border-border-l dark:border-border-d rounded transition-colors"
            >
              Form Demo
            </Link>
            <Link
              to="/api-demo"
              className="px-3 py-1 text-sm bg-l-bg-2 dark:bg-d-bg-2 hover:bg-l-bg-hover dark:hover:bg-d-bg-hover text-l-text-2 dark:text-d-text-2 border border-border-l dark:border-border-d rounded transition-colors"
            >
              API Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
