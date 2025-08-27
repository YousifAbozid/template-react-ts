import { useEffect } from 'react';
import useLocalStorage from 'use-local-storage';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [darkMode, setDarkMode] = useLocalStorage(
    'theme',
    defaultDark ? 'dark' : 'light'
  );

  useEffect(() => {
    if (darkMode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => {
        setDarkMode(darkMode === 'dark' ? 'light' : 'dark');
      }}
      className="p-2 rounded-md bg-gray-200 dark:bg-gray-800 dark:text-white flex items-center justify-center cursor-pointer"
      aria-label={
        darkMode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
      }
    >
      {darkMode === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export default ThemeToggle;
