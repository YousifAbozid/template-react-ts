import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Code,
  Database,
  Palette,
  Shield,
  Zap,
  Globe,
  Play,
  Check,
  AlertCircle,
  Info,
  AlertTriangle,
  Github,
  Star,
  Download,
  Rocket,
  Settings,
  Users,
  BarChart3,
  Layout
} from 'lucide-react';

import { Button } from '@/shared/components/ui/Button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/shared/components/ui/Card';
import { Badge } from '@/shared/components/ui/Badge';
import {
  Alert,
  AlertDescription,
  AlertTitle
} from '@/shared/components/ui/Alert';
import { Input } from '@/shared/components/ui/Input';
import { Label } from '@/shared/components/ui/Label';
import { Textarea } from '@/shared/components/ui/Textarea';
import { Select, SelectOption } from '@/shared/components/ui/Select';
import { Checkbox } from '@/shared/components/ui/Checkbox';
import { Radio } from '@/shared/components/ui/Radio';
import { Switch } from '@/shared/components/ui/Switch';
import { Separator } from '@/shared/components/ui/Separator';
import { Skeleton } from '@/shared/components/ui/Skeleton';
import { Progress } from '@/shared/components/ui/Progress';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription
} from '@/shared/components/ui/Drawer';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '@/shared/components/ui/Dialog';
import { useToast } from '@/shared/contexts/ToastContext';
import ThemeToggle from '@/shared/components/ThemeToggle';

const features = [
  {
    icon: Code,
    title: 'Auto-Generated APIs',
    description:
      'Type-safe OpenAPI with automatic documentation and client generation',
    color: 'text-accent-primary'
  },
  {
    icon: Database,
    title: 'MongoDB Integration',
    description:
      'Mongoose models with validation and comprehensive database operations',
    color: 'text-accent-success'
  },
  {
    icon: Palette,
    title: 'Modern UI System',
    description:
      'Tailwind CSS v4 with dark mode and animated components using Framer Motion',
    color: 'text-accent-warning'
  },
  {
    icon: Shield,
    title: 'Type Safety',
    description:
      'End-to-end TypeScript with Zod validation and React Hook Form',
    color: 'text-accent-error'
  },
  {
    icon: Zap,
    title: 'Developer Experience',
    description:
      'ESLint, Prettier, Husky, and hot reload for optimal development workflow',
    color: 'text-accent-info'
  },
  {
    icon: Globe,
    title: 'Production Ready',
    description:
      'Optimized builds, error boundaries, and deployment configurations',
    color: 'text-accent-primary'
  }
];

const techStack = [
  'React 19+',
  'TypeScript',
  'Vite',
  'Tailwind CSS v4',
  'React Query',
  'Framer Motion',
  'Zod',
  'React Hook Form',
  'ESLint',
  'Prettier'
];

// Form validation schema
const formSchema = z.object({
  name: z
    .string()
    .min(1, 'Name is required')
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters'),
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address')
});

type FormData = z.infer<typeof formSchema>;

const HomePage = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [progress, setProgress] = useState(65);
  const { notify } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: ''
    }
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = form;

  const handleToastDemo = (type: 'success' | 'error' | 'warning' | 'info') => {
    const messages = {
      success: 'Operation completed successfully! 🎉',
      error: 'Something went wrong. Please try again.',
      warning: 'Please check your input before proceeding.',
      info: 'This is an informational message.'
    };
    notify(type, messages[type]);
  };

  const handleFormSubmit = async (data: FormData) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      notify(
        'success',
        `Welcome ${data.name}! Demo form submitted successfully.`
      );
      setIsDialogOpen(false);
      reset();
    } catch {
      notify('error', 'Something went wrong. Please try again.');
    }
  };

  const handleDialogClose = (open: boolean) => {
    setIsDialogOpen(open);
    if (!open) {
      reset();
    }
  };

  return (
    <div className="min-h-screen bg-background-primary text-text-primary antialiased">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-accent-primary/10 to-accent-secondary/10"></div>
        <div className="relative container mx-auto px-4 py-16 sm:py-24">
          <div className="flex justify-end mb-8">
            <ThemeToggle />
          </div>

          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <Rocket className="h-12 w-12 text-accent-primary" />
              <h1 className="text-5xl md:text-7xl font-bold text-text-primary">
                React
                <span className="text-accent-primary"> Template</span>
              </h1>
            </div>

            <p className="text-xl md:text-2xl text-text-secondary mb-8 leading-relaxed">
              Production-ready template with{' '}
              <span className="text-accent-primary font-semibold">
                TypeScript
              </span>
              ,<span className="text-accent-success font-semibold"> Vite</span>,
              and
              <span className="text-accent-warning font-semibold">
                {' '}
                modern tooling
              </span>
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button
                size="lg"
                onClick={() => setIsDialogOpen(true)}
                className="cursor-pointer"
              >
                <Play className="w-5 h-5 mr-2" />
                Try Demo
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() =>
                  window.open(
                    'https://github.com/YousifAbozid/template-react-ts',
                    '_blank'
                  )
                }
                className="cursor-pointer"
              >
                <Github className="w-5 h-5 mr-2" />
                View on GitHub
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <Badge variant="outline">{tech}</Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Everything You Need
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              A comprehensive template with all the modern tools and patterns
              for building scalable applications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <feature.icon
                      className={`h-10 w-10 ${feature.color} mb-2`}
                    />
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Components Demo Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Component Library
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Beautiful, accessible, and customizable components built with
              Framer Motion animations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Buttons & Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Layout className="h-5 w-5" />
                  Buttons & Actions
                </CardTitle>
                <CardDescription>
                  Interactive elements with hover animations and loading states
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Button
                    onClick={() => handleToastDemo('success')}
                    className="cursor-pointer"
                  >
                    Primary
                  </Button>
                  <Button variant="outline" className="cursor-pointer">
                    Outline
                  </Button>
                  <Button variant="secondary" className="cursor-pointer">
                    Secondary
                  </Button>
                  <Button variant="ghost" className="cursor-pointer">
                    Ghost
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button size="sm" className="cursor-pointer">
                    Small
                  </Button>
                  <Button size="lg" className="cursor-pointer">
                    Large
                  </Button>
                  <Button loading className="cursor-pointer">
                    Loading
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Toast Notifications */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5" />
                  Toast Notifications
                </CardTitle>
                <CardDescription>
                  Contextual feedback with animations and auto-dismiss
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleToastDemo('success')}
                    className="cursor-pointer"
                  >
                    <Check className="w-4 h-4 mr-2" />
                    Success
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleToastDemo('error')}
                    className="cursor-pointer"
                  >
                    <AlertCircle className="w-4 h-4 mr-2" />
                    Error
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleToastDemo('warning')}
                    className="cursor-pointer"
                  >
                    <AlertTriangle className="w-4 h-4 mr-2" />
                    Warning
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleToastDemo('info')}
                    className="cursor-pointer"
                  >
                    <Info className="w-4 h-4 mr-2" />
                    Info
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Alerts */}
            <Card>
              <CardHeader>
                <CardTitle>Alert Components</CardTitle>
                <CardDescription>
                  Various alert types for different contexts
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Alert variant="success">
                  <Check className="h-4 w-4 shrink-0 mt-0.5" />
                  <div className="flex-1 space-y-1">
                    <AlertTitle>Success!</AlertTitle>
                    <AlertDescription>
                      Your changes have been saved successfully.
                    </AlertDescription>
                  </div>
                </Alert>

                <Alert variant="warning">
                  <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5" />
                  <div className="flex-1 space-y-1">
                    <AlertTitle>Warning</AlertTitle>
                    <AlertDescription>
                      Please review your input before proceeding.
                    </AlertDescription>
                  </div>
                </Alert>
              </CardContent>
            </Card>

            {/* Badges */}
            <Card>
              <CardHeader>
                <CardTitle>Badges & Status</CardTitle>
                <CardDescription>
                  Status indicators and labels with color variants
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="default">Default</Badge>
                  <Badge variant="success">Active</Badge>
                  <Badge variant="warning">Pending</Badge>
                  <Badge variant="destructive">Error</Badge>
                  <Badge variant="outline">Draft</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Form Inputs */}
            <Card>
              <CardHeader>
                <CardTitle>Form Controls</CardTitle>
                <CardDescription>
                  Complete set of form inputs with validation support
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Select</Label>
                    <Select defaultValue="option2">
                      <SelectOption value="option1">Option 1</SelectOption>
                      <SelectOption value="option2">Option 2</SelectOption>
                      <SelectOption value="option3">Option 3</SelectOption>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Textarea</Label>
                    <Textarea placeholder="Enter your message..." rows={3} />
                  </div>
                </div>

                <Separator />

                <div className="space-y-3">
                  <Checkbox
                    label="Accept terms and conditions"
                    defaultChecked
                  />
                  <div className="space-y-2">
                    <Label>Choose option:</Label>
                    <div className="space-y-2">
                      <Radio name="demo" label="Option A" value="a" />
                      <Radio
                        name="demo"
                        label="Option B"
                        value="b"
                        defaultChecked
                      />
                    </div>
                  </div>
                  <Switch label="Enable notifications" defaultChecked />
                </div>
              </CardContent>
            </Card>

            {/* Progress & Feedback */}
            <Card>
              <CardHeader>
                <CardTitle>Progress & Loading</CardTitle>
                <CardDescription>
                  Progress bars, skeletons, and loading states
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Progress: {progress}%</Label>
                  <Progress value={progress} />
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => setProgress(Math.max(0, progress - 10))}
                      className="cursor-pointer"
                    >
                      Decrease
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => setProgress(Math.min(100, progress + 10))}
                      className="cursor-pointer"
                    >
                      Increase
                    </Button>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <Label>Loading Skeletons</Label>
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                    <Skeleton className="h-4 w-[150px]" />
                  </div>
                </div>

                <Button
                  variant="outline"
                  onClick={() => setIsDrawerOpen(true)}
                  className="cursor-pointer w-full"
                >
                  Open Drawer Demo
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: BarChart3, label: 'Performance Score', value: '100/100' },
              { icon: Users, label: 'Developer Friendly', value: 'TypeSafe' },
              { icon: Settings, label: 'Build Time', value: '<10s' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <stat.icon className="h-12 w-12 mx-auto text-accent-primary mb-4" />
                    <div className="text-3xl font-bold text-text-primary mb-2">
                      {stat.value}
                    </div>
                    <div className="text-text-secondary">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
              Get started with our production-ready template and focus on
              building your product, not configuring tools.
            </p>
            <div className="flex justify-center gap-4">
              <Button
                size="lg"
                onClick={() =>
                  window.open(
                    'https://github.com/YousifAbozid/template-react-ts#readme',
                    '_blank'
                  )
                }
                className="cursor-pointer"
              >
                <Download className="w-5 h-5 mr-2" />
                Get Started
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() =>
                  window.open(
                    'https://github.com/YousifAbozid/template-react-ts',
                    '_blank'
                  )
                }
                className="cursor-pointer"
              >
                <Star className="w-5 h-5 mr-2" />
                Star on GitHub
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Demo Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={handleDialogClose}>
        <DialogContent
          className="sm:max-w-md"
          onClose={() => handleDialogClose(false)}
        >
          <DialogHeader>
            <DialogTitle>Demo Form</DialogTitle>
            <DialogDescription>
              Try our form components with React Hook Form validation and Zod
              schema.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Enter your name"
                {...register('name')}
                className={
                  errors.name
                    ? 'border-accent-error focus:border-accent-error'
                    : ''
                }
              />
              {errors.name && (
                <p className="text-sm text-accent-error">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                {...register('email')}
                className={
                  errors.email
                    ? 'border-accent-error focus:border-accent-error'
                    : ''
                }
              />
              {errors.email && (
                <p className="text-sm text-accent-error">
                  {errors.email.message}
                </p>
              )}
            </div>

            <DialogFooter className="gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => handleDialogClose(false)}
                className="cursor-pointer"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="cursor-pointer"
                loading={isSubmitting}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Demo'}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Drawer Demo */}
      <Drawer
        open={isDrawerOpen}
        onOpenChange={setIsDrawerOpen}
        side="right"
        size="md"
      >
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Drawer Example</DrawerTitle>
            <DrawerDescription>
              This is a demonstration of the Drawer component with various
              content types.
            </DrawerDescription>
          </DrawerHeader>

          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="font-medium text-text-primary">Quick Settings</h3>
              <div className="space-y-3">
                <Switch label="Enable dark mode" />
                <Switch label="Email notifications" defaultChecked />
                <Switch label="Push notifications" />
              </div>
            </div>

            <Separator />

            <div className="space-y-3">
              <h3 className="font-medium text-text-primary">Preferences</h3>
              <div className="space-y-2">
                <Label>Language</Label>
                <Select defaultValue="en">
                  <SelectOption value="en">English</SelectOption>
                  <SelectOption value="es">Spanish</SelectOption>
                  <SelectOption value="fr">French</SelectOption>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Theme</Label>
                <div className="space-y-2">
                  <Radio
                    name="theme"
                    label="System"
                    value="system"
                    defaultChecked
                  />
                  <Radio name="theme" label="Light" value="light" />
                  <Radio name="theme" label="Dark" value="dark" />
                </div>
              </div>
            </div>

            <Separator />

            <div className="space-y-3">
              <h3 className="font-medium text-text-primary">
                Progress Example
              </h3>
              <div className="space-y-2">
                <Progress value={25} variant="success" size="sm" />
                <Progress value={50} variant="warning" size="md" />
                <Progress value={75} variant="error" size="lg" />
              </div>
            </div>

            <div className="pt-4">
              <Button
                onClick={() => {
                  notify('success', 'Drawer settings saved!');
                  setIsDrawerOpen(false);
                }}
                className="w-full cursor-pointer"
              >
                Save Settings
              </Button>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default HomePage;
