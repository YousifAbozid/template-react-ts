import { Check, Mail, Lock, User, Phone } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-linear-to-br from-l-bg-1 via-l-bg-2 to-l-bg-3 dark:from-d-bg-1 dark:via-d-bg-2 dark:to-d-bg-3">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 md:py-24 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-linear-to-r from-accent-1 to-accent-2 bg-clip-text text-transparent">
              Modern React Template
            </h1>
            <p className="text-xl md:text-2xl text-l-text-2 dark:text-d-text-2 mb-8 max-w-3xl mx-auto">
              A production-ready template with React 19, TypeScript, Vite, and
              Tailwind CSS v4 featuring comprehensive theming, dark mode, and
              development tools.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                onClick={() =>
                  document
                    .getElementById('quick-start')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="bg-accent-1 hover:bg-accent-2 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
              >
                Get Started
              </button>
              <a
                href="https://github.com/YousifAbozid/template-react-ts"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-accent-1 text-accent-1 hover:bg-accent-1 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-center cursor-pointer"
              >
                View on GitHub
              </a>
            </div>

            {/* Feature Badges */}
            <div className="flex flex-wrap justify-center gap-2">
              <Badge text="React 19" />
              <Badge text="TypeScript" />
              <Badge text="React Router" />
              <Badge text="Vite" />
              <Badge text="Tailwind v4" />
              <Badge text="React Query" />
              <Badge text="React Hook Form" />
              <Badge text="Zod" />
            </div>
          </div>
        </div>
      </section>

      <main>
        {/* Features Section */}
        <section className="w-full py-20 bg-l-bg-1 dark:bg-d-bg-1">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-l-text-1 dark:text-d-text-1">
                Everything You Need
              </h2>
              <p className="text-lg text-l-text-2 dark:text-d-text-2 max-w-2xl mx-auto">
                Built with modern best practices and industry-standard tools for
                optimal developer experience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon="🎨"
                title="Comprehensive Theme System"
                description="Semantic color variables with light/dark mode support. Background layers, text hierarchy, and accent colors for consistent design."
                features={[
                  'Semantic naming',
                  'Auto dark mode',
                  'CSS custom properties',
                  'Accessibility-focused',
                ]}
              />
              <FeatureCard
                icon="⚡️"
                title="Lightning Fast Development"
                description="Vite provides instant hot reload, optimized builds, and modern JavaScript features for the best developer experience."
                features={[
                  'HMR',
                  'Tree shaking',
                  'Code splitting',
                  'Asset optimization',
                ]}
              />
              <FeatureCard
                icon="🔧"
                title="Development Tools"
                description="Pre-configured ESLint, Prettier, and Husky for code quality. Automated formatting and linting on commit."
                features={[
                  'ESLint rules',
                  'Prettier config',
                  'Git hooks',
                  'lint-staged',
                ]}
              />
              <FeatureCard
                icon="📱"
                title="Responsive Design"
                description="Mobile-first approach with Tailwind CSS utilities. Responsive breakpoints and flexible layouts out of the box."
                features={[
                  'Mobile-first',
                  'Flexbox/Grid',
                  'Responsive utilities',
                  'Touch-friendly',
                ]}
              />
              <FeatureCard
                icon="🚀"
                title="Production Ready"
                description="Optimized build process with modern browser support. Deploy anywhere with minimal configuration."
                features={[
                  'Modern targets',
                  'Optimized bundles',
                  'Performance focused',
                  'Easy deployment',
                ]}
              />
              <FeatureCard
                icon="🔒"
                title="Type Safety"
                description="Full TypeScript support with strict mode enabled. Catch errors early and improve code maintainability."
                features={[
                  'Strict TypeScript',
                  'Type checking',
                  'IntelliSense',
                  'Refactoring safety',
                ]}
              />
            </div>
          </div>
        </section>

        {/* Detailed Features Section */}
        <section className="w-full py-20 bg-l-bg-2 dark:bg-d-bg-2">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-l-text-1 dark:text-d-text-1">
                Complete Feature Set
              </h2>
              <p className="text-lg text-l-text-2 dark:text-d-text-2 max-w-2xl mx-auto">
                Everything you need for modern React development in one template
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Core Technologies */}
              <DetailedFeatureSection
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
              <DetailedFeatureSection
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
              <DetailedFeatureSection
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
              <DetailedFeatureSection
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
              <DetailedFeatureSection
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
              <DetailedFeatureSection
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
              <h3 className="text-3xl font-bold mb-8 text-l-text-1 dark:text-d-text-1 text-center">
                Code Examples
              </h3>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <CodeExample
                  title="Routing Setup"
                  code={`// App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}`}
                />

                <CodeExample
                  title="Form with Validation"
                  code={`// Form with Zod validation
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
        </section>

        {/* Theme Showcase */}
        <section className="w-full py-20 bg-l-bg-1 dark:bg-d-bg-1">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-l-text-1 dark:text-d-text-1">
                Powerful Theme System
              </h2>
              <p className="text-lg text-l-text-2 dark:text-d-text-2 max-w-2xl mx-auto">
                Semantic color variables designed for maintainability and
                consistency
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Component Examples */}
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-l-text-1 dark:text-d-text-1">
                  Interactive Components
                </h3>

                <div className="space-y-6">
                  {/* Buttons */}
                  <div>
                    <h4 className="font-medium mb-3 text-l-text-1 dark:text-d-text-1">
                      Buttons
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      <button className="bg-accent-1 hover:bg-accent-2 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                        Primary
                      </button>
                      <button className="bg-l-bg-3 dark:bg-d-bg-3 text-l-text-1 dark:text-d-text-1 hover:bg-l-bg-hover dark:hover:bg-d-bg-hover px-6 py-3 rounded-lg font-medium transition-colors border border-border-l dark:border-border-d">
                        Secondary
                      </button>
                      <button className="border-2 border-accent-1 text-accent-1 hover:bg-accent-1 hover:text-white px-6 py-3 rounded-lg font-medium transition-all">
                        Outline
                      </button>
                    </div>
                  </div>

                  {/* Form Elements */}
                  <div>
                    <h4 className="font-medium mb-3 text-l-text-1 dark:text-d-text-1">
                      Form Elements
                    </h4>
                    <div className="space-y-3">
                      <input
                        type="text"
                        placeholder="Email address"
                        className="w-full bg-l-bg-1 dark:bg-d-bg-1 text-l-text-1 dark:text-d-text-1 border border-border-l dark:border-border-d focus:border-accent-1 rounded-lg px-4 py-3 placeholder:text-l-text-3 dark:placeholder:text-d-text-3 transition-colors outline-none"
                      />
                      <select className="w-full bg-l-bg-1 dark:bg-d-bg-1 text-l-text-1 dark:text-d-text-1 border border-border-l dark:border-border-d focus:border-accent-1 rounded-lg px-4 py-3 transition-colors outline-none">
                        <option>Select an option</option>
                        <option>Option 1</option>
                        <option>Option 2</option>
                      </select>
                    </div>
                  </div>

                  {/* Alerts */}
                  <div>
                    <h4 className="font-medium mb-3 text-l-text-1 dark:text-d-text-1">
                      Status Messages
                    </h4>
                    <div className="space-y-3">
                      <Alert
                        type="success"
                        title="Success"
                        message="Your changes have been saved successfully!"
                      />
                      <Alert
                        type="warning"
                        title="Warning"
                        message="This action will affect multiple items."
                      />
                      <Alert
                        type="danger"
                        title="Error"
                        message="Something went wrong. Please try again."
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Code Examples */}
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-l-text-1 dark:text-d-text-1">
                  Code Examples
                </h3>

                <div className="space-y-6">
                  <CodeBlock
                    title="Theme Usage"
                    code={`// Background layers
<div className="bg-l-bg-1 dark:bg-d-bg-1">
  <div className="bg-l-bg-2 dark:bg-d-bg-2">
    <div className="bg-l-bg-3 dark:bg-d-bg-3">
      Nested backgrounds
    </div>
  </div>
</div>

// Text hierarchy
<h1 className="text-l-text-1 dark:text-d-text-1">
<p className="text-l-text-2 dark:text-d-text-2">
<span className="text-l-text-3 dark:text-d-text-3">

// Accent colors
<button className="bg-accent-1">Primary</button>
<span className="text-accent-success">Success</span>`}
                  />

                  <div className="bg-l-bg-3 dark:bg-d-bg-3 rounded-lg p-6 border border-border-l dark:border-border-d">
                    <h4 className="font-medium mb-4 text-l-text-1 dark:text-d-text-1">
                      Color Palette
                    </h4>
                    <div className="grid grid-cols-3 gap-3">
                      <ColorDemo
                        name="Background 1"
                        var="l-bg-1"
                        darkVar="d-bg-1"
                      />
                      <ColorDemo
                        name="Background 2"
                        var="l-bg-2"
                        darkVar="d-bg-2"
                      />
                      <ColorDemo
                        name="Background 3"
                        var="l-bg-3"
                        darkVar="d-bg-3"
                      />
                      <ColorDemo
                        name="Text Primary"
                        var="l-text-1"
                        darkVar="d-text-1"
                      />
                      <ColorDemo
                        name="Text Secondary"
                        var="l-text-2"
                        darkVar="d-text-2"
                      />
                      <ColorDemo name="Accent Primary" var="accent-1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Getting Started */}
        <section
          id="quick-start"
          className="w-full py-20 bg-l-bg-2 dark:bg-d-bg-2"
        >
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-l-text-1 dark:text-d-text-1">
                Quick Start Guide
              </h2>
              <p className="text-lg text-l-text-2 dark:text-d-text-2 max-w-2xl mx-auto">
                Get up and running in minutes with our comprehensive template
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-l-text-1 dark:text-d-text-1">
                  Installation
                </h3>

                <div className="space-y-4">
                  <Step
                    number="1"
                    title="Clone Repository"
                    description="Get the latest version of the template"
                    code="git clone https://github.com/YousifAbozid/template-react-ts.git my-project"
                  />
                  <Step
                    number="2"
                    title="Install Dependencies"
                    description="Install all required packages"
                    code="cd my-project && npm install"
                  />
                  <Step
                    number="3"
                    title="Start Development"
                    description="Launch the development server"
                    code="npm run dev"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-6 text-l-text-1 dark:text-d-text-1">
                  Available Scripts
                </h3>

                <div className="bg-l-bg-3 dark:bg-d-bg-3 rounded-lg p-6 border border-border-l dark:border-border-d">
                  <div className="space-y-4">
                    <ScriptCommand
                      command="npm run dev"
                      description="Start development server with HMR"
                    />
                    <ScriptCommand
                      command="npm run build"
                      description="Build for production with optimizations"
                    />
                    <ScriptCommand
                      command="npm run preview"
                      description="Preview production build locally"
                    />
                    <ScriptCommand
                      command="npm run lint"
                      description="Run ESLint to check for issues"
                    />
                    <ScriptCommand
                      command="npm run format"
                      description="Format code with Prettier"
                    />
                    <ScriptCommand
                      command="npm run fix-all"
                      description="Fix linting and formatting issues"
                    />
                  </div>
                </div>

                <div className="mt-6 p-4 bg-accent-success/10 border-l-4 border-accent-success rounded">
                  <p className="text-accent-success font-medium">
                    💡 Pro Tip: Use{' '}
                    <code className="bg-accent-success/20 px-1 rounded">
                      npm run fix-all
                    </code>{' '}
                    before committing to ensure code quality!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Form Demo Section */}
        <section className="w-full py-20 bg-l-bg-2 dark:bg-d-bg-2">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-l-text-1 dark:text-d-text-1">
                Form Validation Demo
              </h2>
              <p className="text-lg text-l-text-2 dark:text-d-text-2 max-w-2xl mx-auto">
                React Hook Form + Zod validation examples with real-time
                feedback
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Login Form */}
              <div className="bg-l-bg-1 dark:bg-d-bg-1 p-8 rounded-xl border border-border-l dark:border-border-d">
                <h3 className="text-2xl font-bold mb-6 text-l-text-1 dark:text-d-text-1">
                  Login Form
                </h3>
                <LoginFormDemo />
              </div>

              {/* Register Form */}
              <div className="bg-l-bg-1 dark:bg-d-bg-1 p-8 rounded-xl border border-border-l dark:border-border-d">
                <h3 className="text-2xl font-bold mb-6 text-l-text-1 dark:text-d-text-1">
                  Registration Form
                </h3>
                <RegisterFormDemo />
              </div>
            </div>

            {/* Form Features */}
            <div className="mt-16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <FormFeatureCard
                  icon="✅"
                  title="Type-Safe Validation"
                  description="Zod schemas ensure runtime and compile-time type safety"
                />
                <FormFeatureCard
                  icon="🎯"
                  title="Real-time Feedback"
                  description="Instant validation with helpful error messages"
                />
                <FormFeatureCard
                  icon="🚀"
                  title="Performance Optimized"
                  description="React Hook Form minimizes re-renders for better performance"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Performance & Browser Support */}
        <section className="w-full py-20 bg-l-bg-1 dark:bg-d-bg-1">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-l-text-1 dark:text-d-text-1">
                  Performance Optimized
                </h2>
                <p className="text-lg text-l-text-2 dark:text-d-text-2 mb-6">
                  Built with performance in mind using modern tools and
                  techniques
                </p>

                <div className="space-y-4">
                  <PerformanceFeature
                    icon="⚡️"
                    title="Vite Optimizations"
                    description="Fast HMR, tree shaking, code splitting, and asset optimization"
                  />
                  <PerformanceFeature
                    icon="⚛️"
                    title="React 19 Features"
                    description="Improved hydration, concurrent rendering, and automatic batching"
                  />
                  <PerformanceFeature
                    icon="🎨"
                    title="Tailwind JIT"
                    description="On-demand CSS generation with minimal bundle size"
                  />
                  <PerformanceFeature
                    icon="📦"
                    title="Modern Bundles"
                    description="Optimized for modern browsers with smaller bundle sizes"
                  />
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6 text-l-text-1 dark:text-d-text-1">
                  Browser Support
                </h2>
                <p className="text-lg text-l-text-2 dark:text-d-text-2 mb-6">
                  Supports all modern browsers with optional legacy support
                </p>

                <div className="bg-l-bg-2 dark:bg-d-bg-2 rounded-lg p-6 border border-border-l dark:border-border-d">
                  <div className="grid grid-cols-2 gap-4">
                    <BrowserSupport browser="Chrome" version="90+" />
                    <BrowserSupport browser="Firefox" version="88+" />
                    <BrowserSupport browser="Safari" version="14+" />
                    <BrowserSupport browser="Edge" version="90+" />
                    <BrowserSupport browser="iOS Safari" version="14+" />
                    <BrowserSupport browser="Chrome Android" version="90+" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

// Form schemas
const loginSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

const registerSchema = z
  .object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Please enter a valid email address'),
    phone: z
      .string()
      .regex(/^\+?[1-9]\d{1,14}$/, 'Please enter a valid phone number'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
    confirmPassword: z.string(),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

type LoginFormData = z.infer<typeof loginSchema>;
type RegisterFormData = z.infer<typeof registerSchema>;

interface BadgeProps {
  text: string;
}

function Badge({ text }: BadgeProps) {
  return (
    <span className="inline-block bg-accent-1/20 text-accent-1 px-3 py-1 rounded-full text-sm font-medium">
      {text}
    </span>
  );
}

interface CodeExampleProps {
  title: string;
  code: string;
}

function CodeExample({ title, code }: CodeExampleProps) {
  return (
    <div className="bg-l-bg-1 dark:bg-d-bg-1 rounded-xl border border-border-l dark:border-border-d overflow-hidden">
      <div className="bg-l-bg-2 dark:bg-d-bg-2 px-4 py-3 border-b border-border-l dark:border-border-d">
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

interface DetailedFeatureSectionProps {
  title: string;
  description: string;
  features: string[];
}

function DetailedFeatureSection({
  title,
  description,
  features,
}: DetailedFeatureSectionProps) {
  return (
    <div className="bg-l-bg-1 dark:bg-d-bg-1 p-8 rounded-xl border border-border-l dark:border-border-d">
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

// Form Demo Components
function LoginFormDemo() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Login data:', data);
    alert('Login form submitted! Check console for data.');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <FormField
        label="Email"
        icon={<Mail size={20} />}
        error={errors.email?.message}
      >
        <input
          type="email"
          placeholder="Enter your email"
          className={`w-full bg-l-bg-2 dark:bg-d-bg-2 text-l-text-1 dark:text-d-text-1 border border-border-l dark:border-border-d rounded-lg px-4 py-3 pl-12 focus:border-accent-1 transition-colors outline-none placeholder:text-l-text-3 dark:placeholder:text-d-text-3 ${
            errors.email
              ? 'border-accent-danger focus:border-accent-danger'
              : ''
          }`}
          {...register('email')}
        />
      </FormField>

      <FormField
        label="Password"
        icon={<Lock size={20} />}
        error={errors.password?.message}
      >
        <input
          type="password"
          placeholder="Enter your password"
          className={`w-full bg-l-bg-2 dark:bg-d-bg-2 text-l-text-1 dark:text-d-text-1 border border-border-l dark:border-border-d rounded-lg px-4 py-3 pl-12 focus:border-accent-1 transition-colors outline-none placeholder:text-l-text-3 dark:placeholder:text-d-text-3 ${
            errors.password
              ? 'border-accent-danger focus:border-accent-danger'
              : ''
          }`}
          {...register('password')}
        />
      </FormField>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full bg-accent-1 hover:bg-accent-2 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
          isSubmitting ? 'opacity-50 cursor-not-allowed transform-none' : ''
        }`}
      >
        {isSubmitting ? 'Logging in...' : 'Log In'}
      </button>
    </form>
  );
}

function RegisterFormDemo() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Registration data:', data);
    alert('Registration form submitted! Check console for data.');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <FormField
        label="Full Name"
        icon={<User size={20} />}
        error={errors.name?.message}
      >
        <input
          type="text"
          placeholder="Enter your full name"
          className={`w-full bg-l-bg-2 dark:bg-d-bg-2 text-l-text-1 dark:text-d-text-1 border border-border-l dark:border-border-d rounded-lg px-4 py-3 pl-12 focus:border-accent-1 transition-colors outline-none placeholder:text-l-text-3 dark:placeholder:text-d-text-3 ${
            errors.name ? 'border-accent-danger focus:border-accent-danger' : ''
          }`}
          {...register('name')}
        />
      </FormField>

      <FormField
        label="Email"
        icon={<Mail size={20} />}
        error={errors.email?.message}
      >
        <input
          type="email"
          placeholder="Enter your email"
          className={`w-full bg-l-bg-2 dark:bg-d-bg-2 text-l-text-1 dark:text-d-text-1 border border-border-l dark:border-border-d rounded-lg px-4 py-3 pl-12 focus:border-accent-1 transition-colors outline-none placeholder:text-l-text-3 dark:placeholder:text-d-text-3 ${
            errors.email
              ? 'border-accent-danger focus:border-accent-danger'
              : ''
          }`}
          {...register('email')}
        />
      </FormField>

      <FormField
        label="Phone Number"
        icon={<Phone size={20} />}
        error={errors.phone?.message}
      >
        <input
          type="tel"
          placeholder="+1234567890"
          className={`w-full bg-l-bg-2 dark:bg-d-bg-2 text-l-text-1 dark:text-d-text-1 border border-border-l dark:border-border-d rounded-lg px-4 py-3 pl-12 focus:border-accent-1 transition-colors outline-none placeholder:text-l-text-3 dark:placeholder:text-d-text-3 ${
            errors.phone
              ? 'border-accent-danger focus:border-accent-danger'
              : ''
          }`}
          {...register('phone')}
        />
      </FormField>

      <FormField
        label="Password"
        icon={<Lock size={20} />}
        error={errors.password?.message}
      >
        <input
          type="password"
          placeholder="Create a password"
          className={`w-full bg-l-bg-2 dark:bg-d-bg-2 text-l-text-1 dark:text-d-text-1 border border-border-l dark:border-border-d rounded-lg px-4 py-3 pl-12 focus:border-accent-1 transition-colors outline-none placeholder:text-l-text-3 dark:placeholder:text-d-text-3 ${
            errors.password
              ? 'border-accent-danger focus:border-accent-danger'
              : ''
          }`}
          {...register('password')}
        />
      </FormField>

      <FormField
        label="Confirm Password"
        icon={<Lock size={20} />}
        error={errors.confirmPassword?.message}
      >
        <input
          type="password"
          placeholder="Confirm your password"
          className={`w-full bg-l-bg-2 dark:bg-d-bg-2 text-l-text-1 dark:text-d-text-1 border border-border-l dark:border-border-d rounded-lg px-4 py-3 pl-12 focus:border-accent-1 transition-colors outline-none placeholder:text-l-text-3 dark:placeholder:text-d-text-3 ${
            errors.confirmPassword
              ? 'border-accent-danger focus:border-accent-danger'
              : ''
          }`}
          {...register('confirmPassword')}
        />
      </FormField>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full bg-accent-1 hover:bg-accent-2 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
          isSubmitting ? 'opacity-50 cursor-not-allowed transform-none' : ''
        }`}
      >
        {isSubmitting ? 'Creating Account...' : 'Create Account'}
      </button>
    </form>
  );
}

interface FormFieldProps {
  label: string;
  icon: React.ReactNode;
  error?: string;
  children: React.ReactNode;
}

function FormField({ label, icon, error, children }: FormFieldProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-l-text-1 dark:text-d-text-1 mb-2">
        {label}
      </label>
      <div className="relative">
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-l-text-3 dark:text-d-text-3">
          {icon}
        </div>
        {children}
      </div>
      {error && <p className="mt-2 text-sm text-accent-danger">{error}</p>}
    </div>
  );
}

interface FormFeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

function FormFeatureCard({ icon, title, description }: FormFeatureCardProps) {
  return (
    <div className="bg-l-bg-1 dark:bg-d-bg-1 p-6 rounded-lg border border-border-l dark:border-border-d">
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="font-semibold text-l-text-1 dark:text-d-text-1 mb-2">
        {title}
      </h3>
      <p className="text-sm text-l-text-2 dark:text-d-text-2">{description}</p>
    </div>
  );
}

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

function FeatureCard({ icon, title, description, features }: FeatureCardProps) {
  return (
    <div className="bg-l-bg-2 dark:bg-d-bg-2 p-6 rounded-xl border border-border-l dark:border-border-d hover:shadow-lg transition-shadow duration-300">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-l-text-1 dark:text-d-text-1">
        {title}
      </h3>
      <p className="text-l-text-2 dark:text-d-text-2 mb-4">{description}</p>
      <ul className="space-y-1">
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex items-center text-sm text-l-text-3 dark:text-d-text-3"
          >
            <span className="text-accent-success mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

interface AlertProps {
  type: 'success' | 'warning' | 'danger';
  title: string;
  message: string;
}

function Alert({ type, title, message }: AlertProps) {
  const colors = {
    success: 'accent-success',
    warning: 'accent-warning',
    danger: 'accent-danger',
  };

  const icons = {
    success: '✓',
    warning: '⚠',
    danger: '✕',
  };

  return (
    <div
      className={`bg-${colors[type]}/10 border-l-4 border-${colors[type]} p-4 rounded`}
    >
      <div className="flex items-start">
        <span className={`text-${colors[type]} mr-3 font-bold`}>
          {icons[type]}
        </span>
        <div>
          <p className={`font-medium text-${colors[type]}`}>{title}</p>
          <p className="text-l-text-2 dark:text-d-text-2 text-sm mt-1">
            {message}
          </p>
        </div>
      </div>
    </div>
  );
}

interface CodeBlockProps {
  title: string;
  code: string;
}

function CodeBlock({ title, code }: CodeBlockProps) {
  return (
    <div className="bg-l-bg-2 dark:bg-d-bg-2 rounded-lg overflow-hidden border border-border-l dark:border-border-d">
      <div className="bg-l-bg-3 dark:bg-d-bg-3 px-4 py-2 border-b border-border-l dark:border-border-d">
        <h4 className="font-medium text-l-text-1 dark:text-d-text-1">
          {title}
        </h4>
      </div>
      <pre className="p-4 overflow-x-auto max-w-full">
        <code className="text-sm text-l-text-1 dark:text-d-text-1 whitespace-pre-wrap wrap-break-words">
          {code}
        </code>
      </pre>
    </div>
  );
}

interface ColorDemoProps {
  name: string;
  var: string;
  darkVar?: string;
}

function ColorDemo({ name, var: colorVar, darkVar }: ColorDemoProps) {
  const style = darkVar
    ? { backgroundColor: `var(--color-${colorVar})` }
    : { backgroundColor: `var(--color-${colorVar})` };

  return (
    <div className="text-center">
      <div
        className="h-12 rounded-lg border border-border-l dark:border-border-d mb-2"
        style={style}
      />
      <p className="text-xs text-l-text-3 dark:text-d-text-3">{name}</p>
    </div>
  );
}

interface StepProps {
  number: string;
  title: string;
  description: string;
  code: string;
}

function Step({ number, title, description, code }: StepProps) {
  return (
    <div className="flex gap-4">
      <div className="shrink-0 w-8 h-8 bg-accent-1 text-white rounded-full flex items-center justify-center font-bold text-sm">
        {number}
      </div>
      <div className="flex-1">
        <h4 className="font-semibold text-l-text-1 dark:text-d-text-1 mb-1">
          {title}
        </h4>
        <p className="text-sm text-l-text-2 dark:text-d-text-2 mb-2">
          {description}
        </p>
        <code className="block bg-l-bg-1 dark:bg-d-bg-1 text-accent-1 p-3 rounded-lg text-sm overflow-x-auto">
          {code}
        </code>
      </div>
    </div>
  );
}

interface ScriptCommandProps {
  command: string;
  description: string;
}

function ScriptCommand({ command, description }: ScriptCommandProps) {
  return (
    <div className="flex justify-between items-center py-2">
      <code className="bg-l-bg-1 dark:bg-d-bg-1 text-accent-1 px-3 py-1 rounded font-mono text-sm">
        {command}
      </code>
      <span className="text-l-text-3 dark:text-d-text-3 text-sm ml-4">
        {description}
      </span>
    </div>
  );
}

interface PerformanceFeatureProps {
  icon: string;
  title: string;
  description: string;
}

function PerformanceFeature({
  icon,
  title,
  description,
}: PerformanceFeatureProps) {
  return (
    <div className="flex gap-3">
      <span className="text-2xl">{icon}</span>
      <div>
        <h4 className="font-semibold text-l-text-1 dark:text-d-text-1">
          {title}
        </h4>
        <p className="text-sm text-l-text-2 dark:text-d-text-2">
          {description}
        </p>
      </div>
    </div>
  );
}

interface BrowserSupportProps {
  browser: string;
  version: string;
}

function BrowserSupport({ browser, version }: BrowserSupportProps) {
  return (
    <div className="flex items-center justify-between py-2">
      <span className="text-l-text-1 dark:text-d-text-1 font-medium">
        {browser}
      </span>
      <span className="text-accent-success font-semibold">{version}</span>
    </div>
  );
}

export default HomePage;
