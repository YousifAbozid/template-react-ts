import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <div className="min-h-screen bg-l-bg-1 dark:bg-d-bg-1 text-l-text-1 dark:text-d-text-1">
      <header className="py-6 px-4 md:px-8 border-b border-border-l dark:border-border-d">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold">
            React + TS + Vite + Tailwind Template
          </h1>
          <ThemeToggle />
        </div>
      </header>

      <main className="container mx-auto py-8 px-4 md:px-8">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-l-text-1 dark:text-d-text-1">
            Modern Web Development Template
          </h2>
          <p className="text-l-text-2 dark:text-d-text-2 mb-4">
            A ready-to-use template featuring React 19, TypeScript, Vite, and
            Tailwind CSS v4 with a comprehensive theming system and dark mode
            support.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <FeatureCard
              icon="🎨"
              title="Theme System"
              description="Semantic color variables for consistent design"
            />
            <FeatureCard
              icon="🌓"
              title="Dark Mode"
              description="Built-in dark mode with system preference detection"
            />
            <FeatureCard
              icon="⚛️"
              title="React 19"
              description="Latest React features and improvements"
            />
            <FeatureCard
              icon="⚡️"
              title="Vite"
              description="Lightning-fast development experience"
            />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-l-text-1 dark:text-d-text-1">
            Theme Examples
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-l-text-1 dark:text-d-text-1">
                UI Components
              </h3>

              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <button className="bg-accent-1 hover:bg-accent-2 text-l-text-inv dark:text-d-text-inv px-4 py-2 rounded transition-colors">
                    Primary Button
                  </button>
                  <button className="bg-l-bg-3 dark:bg-d-bg-3 text-l-text-1 dark:text-d-text-1 hover:bg-l-bg-hover dark:hover:bg-d-bg-hover px-4 py-2 rounded transition-colors">
                    Secondary Button
                  </button>
                  <button className="border border-accent-1 text-accent-1 hover:bg-accent-1 hover:text-l-text-inv dark:hover:text-l-text-inv px-4 py-2 rounded transition-colors">
                    Outline Button
                  </button>
                </div>

                <div className="bg-l-bg-2 dark:bg-d-bg-2 border border-border-l dark:border-border-d rounded-lg p-4 shadow-md">
                  <h3 className="text-l-text-1 dark:text-d-text-1 font-bold">
                    Card Component
                  </h3>
                  <p className="text-l-text-2 dark:text-d-text-2">
                    Example card using the theme system with dynamic colors.
                  </p>
                  <div className="mt-2">
                    <span className="inline-block bg-accent-success/20 text-accent-success px-2 py-1 rounded text-sm">
                      Success Tag
                    </span>
                    <span className="inline-block bg-accent-warning/20 text-accent-warning px-2 py-1 rounded text-sm ml-2">
                      Warning Tag
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="bg-accent-warning/10 border-l-4 border-accent-warning p-4">
                    <p className="text-accent-warning">
                      Warning alert message using theme colors
                    </p>
                  </div>
                  <div className="bg-accent-danger/10 border-l-4 border-accent-danger p-4">
                    <p className="text-accent-danger">
                      Error alert message using theme colors
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-l-text-1 dark:text-d-text-1">
                Theme Usage Examples
              </h3>

              <div className="bg-l-bg-2 dark:bg-d-bg-2 rounded-lg p-4 border border-border-l dark:border-border-d overflow-auto">
                <pre className="text-sm text-l-text-1 dark:text-d-text-1">
                  <code>{`// Background colors
<div className="bg-l-bg-1 dark:bg-d-bg-1">...</div>

// Text colors
<p className="text-l-text-2 dark:text-d-text-2">...</p>

// Border colors
<div className="border border-border-l dark:border-border-d">
  ...
</div>

// Accent colors
<button className="bg-accent-1">Primary</button>
<div className="text-accent-success">Success</div>`}</code>
                </pre>
              </div>

              <div className="mt-6">
                <h4 className="font-medium mb-2 text-l-text-1 dark:text-d-text-1">
                  Color Palette
                </h4>
                <div className="grid grid-cols-5 gap-2">
                  <ColorSwatch name="l-bg-1" />
                  <ColorSwatch name="l-bg-2" />
                  <ColorSwatch name="l-bg-3" />
                  <ColorSwatch name="l-text-1" />
                  <ColorSwatch name="l-text-2" />
                  <ColorSwatch name="d-bg-1" isDark />
                  <ColorSwatch name="d-bg-2" isDark />
                  <ColorSwatch name="d-bg-3" isDark />
                  <ColorSwatch name="d-text-1" isDark />
                  <ColorSwatch name="d-text-2" isDark />
                  <ColorSwatch name="accent-1" />
                  <ColorSwatch name="accent-2" />
                  <ColorSwatch name="accent-success" />
                  <ColorSwatch name="accent-warning" />
                  <ColorSwatch name="accent-danger" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-l-text-1 dark:text-d-text-1">
            Getting Started
          </h2>

          <div className="bg-l-bg-2 dark:bg-d-bg-2 rounded-lg p-4 border border-border-l dark:border-border-d">
            <pre className="text-sm text-l-text-1 dark:text-d-text-1">
              <code>{`# Clone the repository
git clone [repository-url] my-project
cd my-project

# Install dependencies
npm install

# Start development server
npm run dev`}</code>
            </pre>
          </div>

          <div className="mt-6 text-l-text-2 dark:text-d-text-2">
            <p>
              For complete documentation, please refer to the README.md file in
              the repository.
            </p>
          </div>
        </section>
      </main>

      <footer className="py-6 px-4 md:px-8 border-t border-border-l dark:border-border-d mt-12">
        <div className="container mx-auto text-center text-l-text-3 dark:text-d-text-3">
          <p>React 19 + TypeScript + Vite + Tailwind CSS v4 Template</p>
          <p className="mt-1">Built with 💙 by Yousif Abozid</p>
        </div>
      </footer>
    </div>
  );
}

// Helper components
interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-l-bg-2 dark:bg-d-bg-2 p-4 rounded-lg border border-border-l dark:border-border-d">
      <div className="text-3xl mb-2">{icon}</div>
      <h3 className="font-bold text-l-text-1 dark:text-d-text-1">{title}</h3>
      <p className="text-l-text-2 dark:text-d-text-2">{description}</p>
    </div>
  );
}

interface ColorSwatchProps {
  name: string;
  isDark?: boolean;
}

function ColorSwatch({ name, isDark = false }: ColorSwatchProps) {
  // Using inline style with CSS variables instead of dynamic classes
  const style = {
    backgroundColor: `var(--color-${name})`,
    color: isDark ? 'var(--color-d-text-1)' : 'var(--color-l-text-1)',
  };

  return (
    <div
      className="h-12 rounded flex items-center justify-center text-xs"
      style={style}
    >
      {name}
    </div>
  );
}

export default App;
