import { Outlet, Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Layout = () => {
  return (
    <div className="min-h-screen bg-background-primary text-text-primary overflow-x-hidden">
      {/* Navigation */}
      <nav className="bg-background-secondary border-b border-border-primary">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link
              to="/"
              className="text-xl font-bold text-accent-primary shrink-0"
            >
              React Template
            </Link>

            {/* Theme Toggle */}
            <div className="shrink-0">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="w-full overflow-x-hidden">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="w-full py-12 bg-background-tertiary border-t border-border-primary">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2 text-text-primary">
                React TypeScript Template
              </h3>
              <p className="text-text-secondary">
                Modern, production-ready template with routing, forms, and API
                integration
              </p>
            </div>

            <div className="flex justify-center gap-4 mb-8">
              <a
                href="https://github.com/YousifAbozid/template-react-ts#readme"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent-primary hover:bg-accent-secondary text-text-inverse px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Documentation
              </a>
            </div>

            <div className="text-text-tertiary">
              <p className="text-center wrap-break-word">
                React 19 + TypeScript + Vite + Tailwind CSS v4 + React Router +
                React Query
              </p>
              <p className="mt-1">
                Built with 💙 by{' '}
                <a
                  href="https://github.com/YousifAbozid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-primary hover:underline"
                >
                  Yousif Abozid
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
