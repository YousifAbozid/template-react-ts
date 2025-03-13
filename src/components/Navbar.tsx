import { useState } from 'react';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar = ({ darkMode, toggleDarkMode }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-light-background-secondary dark:bg-dark-background-secondary py-4 px-6 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Brand */}
        <div className="flex items-center">
          <span className="text-accent-primary text-2xl font-bold">
            Portfolio
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#"
            className="text-light-text-primary dark:text-dark-text-primary hover:text-accent-primary dark:hover:text-accent-primary transition"
          >
            Home
          </a>
          <a
            href="#"
            className="text-light-text-primary dark:text-dark-text-primary hover:text-accent-primary dark:hover:text-accent-primary transition"
          >
            About
          </a>
          <a
            href="#"
            className="text-light-text-primary dark:text-dark-text-primary hover:text-accent-primary dark:hover:text-accent-primary transition"
          >
            Projects
          </a>
          <a
            href="#"
            className="text-light-text-primary dark:text-dark-text-primary hover:text-accent-primary dark:hover:text-accent-primary transition"
          >
            Contact
          </a>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-light-background-tertiary dark:bg-dark-background-tertiary hover:bg-opacity-80 transition"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-dark-text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-light-text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-md bg-light-background-tertiary dark:bg-dark-background-tertiary hover:bg-opacity-80 transition"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-light-text-primary dark:text-dark-text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 py-4 px-6 bg-light-background-tertiary dark:bg-dark-background-tertiary rounded-lg">
          <div className="flex flex-col space-y-4">
            <a
              href="#"
              className="text-light-text-primary dark:text-dark-text-primary hover:text-accent-primary dark:hover:text-accent-primary"
            >
              Home
            </a>
            <a
              href="#"
              className="text-light-text-primary dark:text-dark-text-primary hover:text-accent-primary dark:hover:text-accent-primary"
            >
              About
            </a>
            <a
              href="#"
              className="text-light-text-primary dark:text-dark-text-primary hover:text-accent-primary dark:hover:text-accent-primary"
            >
              Projects
            </a>
            <a
              href="#"
              className="text-light-text-primary dark:text-dark-text-primary hover:text-accent-primary dark:hover:text-accent-primary"
            >
              Contact
            </a>

            {/* Dark Mode Toggle */}
            <div className="flex items-center">
              <span className="text-light-text-primary dark:text-dark-text-primary mr-2">
                Toggle Dark Mode
              </span>
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full bg-light-background-primary dark:bg-dark-background-primary"
              >
                {darkMode ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-dark-text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-light-text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
