import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-white dark:bg-dark-background-primary text-black dark:text-white">
      <h1 className="text-3xl font-bold">Hello, Tailwind Dark Mode!</h1>
      <ThemeToggle />
    </div>
  );
}

export default App;
