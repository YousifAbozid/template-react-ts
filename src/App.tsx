import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-l-bg-1 dark:bg-d-bg-1 text-l-text-1 dark:text-d-text-1">
      <h1 className="text-3xl font-bold">Hello, Tailwind Dark Mode!</h1>
      <ThemeToggle />
    </div>
  );
}

export default App;
