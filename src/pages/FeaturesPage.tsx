import { Link } from 'react-router-dom';
import { ArrowLeft, Check } from 'lucide-react';

const FeaturesPage = () => {
  return (
    <div className="min-h-screen bg-l-bg-1 dark:bg-d-bg-1">
      {/* Header */}
      <header className="bg-l-bg-2 dark:bg-d-bg-2 border-b border-border-l dark:border-border-d">
        <div className="container mx-auto px-4 md:px-8">
          <div className="py-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-accent-1 hover:text-accent-2 mb-6 transition-colors"
            >
              <ArrowLeft size={20} />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-l-text-1 dark:text-d-text-1 mb-4">
              Template Features
            </h1>
            <p className="text-xl text-l-text-2 dark:text-d-text-2">
              Everything you need to build modern React applications
            </p>
          </div>
        </div>
      </header>

      {/* Features Grid */}
      <main className="py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Core Technologies */}
            <FeatureSection
              title="Core Technologies"
              description="Modern stack with the latest versions"
              features={[
                'React 19 with latest features',
                'TypeScript for type safety',
                'Vite for fast development',
                'Tailwind CSS v4 with new features',
              ]}
            />

            {/* Routing & Navigation */}
            <FeatureSection
              title="Routing & Navigation"
              description="Client-side routing with React Router"
              features={[
                'React Router v6 setup',
                'Nested routing support',
                'Route-based code splitting',
                'Navigation guards',
              ]}
            />

            {/* State Management */}
            <FeatureSection
              title="State Management"
              description="Efficient data fetching and caching"
              features={[
                'React Query for server state',
                'Local storage hook',
                'Optimistic updates',
                'Background refetching',
              ]}
            />

            {/* Forms & Validation */}
            <FeatureSection
              title="Forms & Validation"
              description="Type-safe form handling"
              features={[
                'React Hook Form integration',
                'Zod schema validation',
                'Form error handling',
                'Custom form components',
              ]}
            />

            {/* UI & Theming */}
            <FeatureSection
              title="UI & Theming"
              description="Comprehensive design system"
              features={[
                'Dark/light mode support',
                'Semantic color variables',
                'Responsive design',
                'Accessible components',
              ]}
            />

            {/* Developer Experience */}
            <FeatureSection
              title="Developer Experience"
              description="Tools for productive development"
              features={[
                'ESLint & Prettier setup',
                'Husky git hooks',
                'TypeScript strict mode',
                'Hot module replacement',
              ]}
            />
          </div>

          {/* Code Examples */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8 text-l-text-1 dark:text-d-text-1">
              Code Examples
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <CodeExample
                title="Routing Setup"
                code={`// App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import FeaturesPage from './pages/FeaturesPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="features" element={<FeaturesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}`}
              />

              <CodeExample
                title="Form with Validation"
                code={`// FormDemo.tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(8, 'Min 8 characters')
});

type FormData = z.infer<typeof schema>;

export function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  const onSubmit = (data: FormData) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Form fields */}
    </form>
  );
}`}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

interface FeatureSectionProps {
  title: string;
  description: string;
  features: string[];
}

function FeatureSection({ title, description, features }: FeatureSectionProps) {
  return (
    <div className="bg-l-bg-2 dark:bg-d-bg-2 p-8 rounded-xl border border-border-l dark:border-border-d">
      <h3 className="text-2xl font-bold mb-3 text-l-text-1 dark:text-d-text-1">
        {title}
      </h3>
      <p className="text-l-text-2 dark:text-d-text-2 mb-6">{description}</p>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <Check size={20} className="text-accent-success shrink-0" />
            <span className="text-l-text-1 dark:text-d-text-1">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

interface CodeExampleProps {
  title: string;
  code: string;
}

function CodeExample({ title, code }: CodeExampleProps) {
  return (
    <div className="bg-l-bg-2 dark:bg-d-bg-2 rounded-xl border border-border-l dark:border-border-d overflow-hidden">
      <div className="bg-l-bg-3 dark:bg-d-bg-3 px-4 py-3 border-b border-border-l dark:border-border-d">
        <h4 className="font-semibold text-l-text-1 dark:text-d-text-1">
          {title}
        </h4>
      </div>
      <pre className="p-4 overflow-x-auto text-sm">
        <code className="text-l-text-1 dark:text-d-text-1">{code}</code>
      </pre>
    </div>
  );
}

export default FeaturesPage;
