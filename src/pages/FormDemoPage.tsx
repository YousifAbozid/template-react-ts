import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, Lock, User, Phone } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

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

const FormDemoPage = () => {
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
              Form Demo
            </h1>
            <p className="text-xl text-l-text-2 dark:text-d-text-2">
              React Hook Form + Zod validation examples
            </p>
          </div>
        </div>
      </header>

      <main className="py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Login Form */}
            <div className="bg-l-bg-2 dark:bg-d-bg-2 p-8 rounded-xl border border-border-l dark:border-border-d">
              <h2 className="text-2xl font-bold mb-6 text-l-text-1 dark:text-d-text-1">
                Login Form
              </h2>
              <LoginForm />
            </div>

            {/* Register Form */}
            <div className="bg-l-bg-2 dark:bg-d-bg-2 p-8 rounded-xl border border-border-l dark:border-border-d">
              <h2 className="text-2xl font-bold mb-6 text-l-text-1 dark:text-d-text-1">
                Registration Form
              </h2>
              <RegisterForm />
            </div>
          </div>

          {/* Form Features */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8 text-l-text-1 dark:text-d-text-1">
              Form Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FeatureCard
                icon="✅"
                title="Type-Safe Validation"
                description="Zod schemas ensure runtime and compile-time type safety"
              />
              <FeatureCard
                icon="🎯"
                title="Real-time Feedback"
                description="Instant validation with helpful error messages"
              />
              <FeatureCard
                icon="🚀"
                title="Performance Optimized"
                description="React Hook Form minimizes re-renders for better performance"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    // Simulate API call
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
          className={`w-full bg-l-bg-1 dark:bg-d-bg-1 text-l-text-1 dark:text-d-text-1 border border-border-l dark:border-border-d rounded-lg px-4 py-3 pl-12 focus:border-accent-1 transition-colors outline-none placeholder:text-l-text-3 dark:placeholder:text-d-text-3 ${
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
          className={`w-full bg-l-bg-1 dark:bg-d-bg-1 text-l-text-1 dark:text-d-text-1 border border-border-l dark:border-border-d rounded-lg px-4 py-3 pl-12 focus:border-accent-1 transition-colors outline-none placeholder:text-l-text-3 dark:placeholder:text-d-text-3 ${
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

function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    // Simulate API call
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
          className={`w-full bg-l-bg-1 dark:bg-d-bg-1 text-l-text-1 dark:text-d-text-1 border border-border-l dark:border-border-d rounded-lg px-4 py-3 pl-12 focus:border-accent-1 transition-colors outline-none placeholder:text-l-text-3 dark:placeholder:text-d-text-3 ${
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
          className={`w-full bg-l-bg-1 dark:bg-d-bg-1 text-l-text-1 dark:text-d-text-1 border border-border-l dark:border-border-d rounded-lg px-4 py-3 pl-12 focus:border-accent-1 transition-colors outline-none placeholder:text-l-text-3 dark:placeholder:text-d-text-3 ${
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
          className={`w-full bg-l-bg-1 dark:bg-d-bg-1 text-l-text-1 dark:text-d-text-1 border border-border-l dark:border-border-d rounded-lg px-4 py-3 pl-12 focus:border-accent-1 transition-colors outline-none placeholder:text-l-text-3 dark:placeholder:text-d-text-3 ${
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
          className={`w-full bg-l-bg-1 dark:bg-d-bg-1 text-l-text-1 dark:text-d-text-1 border border-border-l dark:border-border-d rounded-lg px-4 py-3 pl-12 focus:border-accent-1 transition-colors outline-none placeholder:text-l-text-3 dark:placeholder:text-d-text-3 ${
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
          className={`w-full bg-l-bg-1 dark:bg-d-bg-1 text-l-text-1 dark:text-d-text-1 border border-border-l dark:border-border-d rounded-lg px-4 py-3 pl-12 focus:border-accent-1 transition-colors outline-none placeholder:text-l-text-3 dark:placeholder:text-d-text-3 ${
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

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-l-bg-2 dark:bg-d-bg-2 p-6 rounded-lg border border-border-l dark:border-border-d">
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="font-semibold text-l-text-1 dark:text-d-text-1 mb-2">
        {title}
      </h3>
      <p className="text-sm text-l-text-2 dark:text-d-text-2">{description}</p>
    </div>
  );
}

export default FormDemoPage;
