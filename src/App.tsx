import { useEffect } from 'react';
import useLocalStorage from 'use-local-storage';

import Navbar from './components/Navbar';

function App() {
  // Get system preference for dark/light mode
  const defaultDark =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Use local storage to persist theme preference
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', defaultDark);

  // Toggle dark mode and update document class
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen bg-light-background-primary dark:bg-dark-background-primary text-light-text-primary dark:text-dark-text-primary transition-colors duration-300">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
          <p className="text-light-text-secondary dark:text-dark-text-secondary text-lg">
            This is a simple portfolio site to showcase my skills and projects.
          </p>
        </section>

        <section className="mb-12 p-6 bg-light-background-secondary dark:bg-dark-background-secondary rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-accent-primary">
            About Me
          </h2>
          <p className="mb-4">
            I'm a web developer passionate about building beautiful and
            functional applications.
          </p>
          <div className="flex gap-4">
            <button className="px-4 py-2 bg-accent-primary text-white rounded hover:opacity-90 transition">
              Contact Me
            </button>
            <button className="px-4 py-2 border border-accent-primary text-accent-primary rounded hover:bg-accent-primary hover:bg-opacity-10 transition">
              View Resume
            </button>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map(item => (
            <div
              key={item}
              className="p-6 bg-light-background-secondary dark:bg-dark-background-secondary rounded-lg hover:shadow-md transition"
            >
              <h3 className="text-xl font-bold mb-2">Project {item}</h3>
              <p className="text-light-text-tertiary dark:text-dark-text-tertiary mb-4">
                This is a sample project description to test the styling and
                colors.
              </p>
              <div className="flex justify-between items-center">
                <span className="inline-block px-3 py-1 bg-accent-success bg-opacity-20 text-accent-success rounded-full text-sm">
                  React
                </span>
                <a href="#" className="text-accent-primary hover:underline">
                  View Details
                </a>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;
