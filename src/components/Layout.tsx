import { Outlet, Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { Home, Star, FileText, Database, Zap } from 'lucide-react';

const Layout = () => {
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Features', href: '/features', icon: Star },
    { name: 'Form Demo', href: '/form-demo', icon: FileText },
    { name: 'API Demo', href: '/api-demo', icon: Database },
    { name: 'New Features', href: '/demo', icon: Zap },
  ];

  return (
    <div className="min-h-screen bg-l-bg-1 dark:bg-d-bg-1 text-l-text-1 dark:text-d-text-1 overflow-x-hidden">
      {/* Navigation */}
      <nav className="bg-l-bg-2 dark:bg-d-bg-2 border-b border-border-l dark:border-border-d">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="text-xl font-bold text-accent-1 shrink-0">
              React Template
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-1">
              {navigation.map(item => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href;

                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-accent-1 text-white shadow-md'
                        : 'text-l-text-2 dark:text-d-text-2 hover:text-accent-1 hover:bg-l-bg-3 dark:hover:bg-d-bg-3'
                    }`}
                  >
                    <Icon size={18} />
                    {item.name}
                  </Link>
                );
              })}
            </div>

            {/* Theme Toggle */}
            <div className="shrink-0">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden pb-4">
            <div className="flex flex-wrap gap-2 -mx-1">
              {navigation.map(item => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href;

                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-accent-1 text-white shadow-md'
                        : 'text-l-text-2 dark:text-d-text-2 hover:text-accent-1 hover:bg-l-bg-3 dark:hover:bg-d-bg-3'
                    }`}
                  >
                    <Icon size={16} />
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="w-full overflow-x-hidden">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="w-full py-12 bg-l-bg-3 dark:bg-d-bg-3 border-t border-border-l dark:border-border-d">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2 text-l-text-1 dark:text-d-text-1">
                React TypeScript Template
              </h3>
              <p className="text-l-text-2 dark:text-d-text-2">
                Modern, production-ready template with routing, forms, and API
                integration
              </p>
            </div>

            <div className="flex justify-center gap-4 mb-8">
              <a
                href="https://github.com/YousifAbozid/template-react-ts#readme"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent-1 hover:bg-accent-2 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Documentation
              </a>
            </div>

            <div className="text-l-text-3 dark:text-d-text-3">
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
                  className="text-accent-1 hover:underline"
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
