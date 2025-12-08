import { useState } from 'react';
import { motion } from 'framer-motion';
import { useToast } from '@/contexts/ToastContext';
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Badge,
  Alert,
  Input,
  Textarea,
  Switch,
  Progress,
  Separator
} from '@/components/ui';
import { APP_CONFIG } from '@/utils/constants';

const HomePage = () => {
  const { notify } = useToast();
  const [inputValue, setInputValue] = useState('');
  const [switchValue, setSwitchValue] = useState(false);
  const [progress, setProgress] = useState(45);

  const handleToast = (type: 'success' | 'error' | 'warning' | 'info') => {
    const messages = {
      success: 'Operation completed successfully!',
      error: 'An error occurred. Please try again.',
      warning: 'Warning: Please review your input.',
      info: 'Here is some helpful information.'
    };
    notify(type, messages[type]);
  };

  return (
    <div className="min-h-screen bg-l-bg-1 dark:bg-d-bg-1">
      {/* Hero Section */}
      <section className="px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Badge className="mb-4">v{APP_CONFIG.VERSION}</Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-l-text-1 dark:text-d-text-1 sm:text-6xl">
              {APP_CONFIG.NAME}
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-l-text-2 dark:text-d-text-2">
              {APP_CONFIG.DESCRIPTION} with React 19, TypeScript, Vite, and
              Tailwind CSS v4. Feature-based architecture for scalable
              production apps.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                onClick={() =>
                  window.open(APP_CONFIG.REPOSITORY, '_blank', 'noopener')
                }
              >
                View on GitHub
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => handleToast('success')}
              >
                Try Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-12 text-center text-3xl font-bold text-l-text-1 dark:text-d-text-1">
              Key Features
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: 'React 19',
                  description:
                    'Latest React with improved performance and new features',
                  badge: 'Modern'
                },
                {
                  title: 'TypeScript',
                  description:
                    'Type-safe development with full TypeScript support',
                  badge: 'Type-Safe'
                },
                {
                  title: 'Vite',
                  description: 'Lightning-fast HMR and optimized build tooling',
                  badge: 'Fast'
                },
                {
                  title: 'Tailwind CSS v4',
                  description:
                    'Semantic theme system with light/dark mode support',
                  badge: 'Styled'
                },
                {
                  title: 'React Query',
                  description: 'Powerful data fetching and caching solution',
                  badge: 'Data'
                },
                {
                  title: 'Feature-Based',
                  description: 'Scalable architecture organized by features',
                  badge: 'Scalable'
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <div className="mb-2">
                        <Badge variant="secondary">{feature.badge}</Badge>
                      </div>
                      <CardTitle>{feature.title}</CardTitle>
                      <CardDescription>{feature.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Component Showcase */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-12 text-center text-3xl font-bold text-l-text-1 dark:text-d-text-1">
              Component Library
            </h2>
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Buttons Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Buttons</CardTitle>
                  <CardDescription>
                    Multiple variants and sizes with animations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    <Button>Default</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="destructive">Destructive</Button>
                    <Button variant="link">Link</Button>
                  </div>
                  <Separator className="my-4" />
                  <div className="flex flex-wrap gap-3">
                    <Button size="sm">Small</Button>
                    <Button size="default">Default</Button>
                    <Button size="lg">Large</Button>
                  </div>
                </CardContent>
              </Card>

              {/* Alerts Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Alerts</CardTitle>
                  <CardDescription>
                    Contextual feedback messages
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Alert variant="default">
                    <p className="font-medium">Info Alert</p>
                    <p className="text-sm">This is an informational message.</p>
                  </Alert>
                  <Alert variant="success">
                    <p className="font-medium">Success Alert</p>
                    <p className="text-sm">Operation completed successfully!</p>
                  </Alert>
                  <Alert variant="destructive">
                    <p className="font-medium">Error Alert</p>
                    <p className="text-sm">Something went wrong.</p>
                  </Alert>
                </CardContent>
              </Card>

              {/* Form Inputs Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Form Components</CardTitle>
                  <CardDescription>Interactive form elements</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-l-text-1 dark:text-d-text-1">
                      Input Field
                    </label>
                    <Input
                      placeholder="Enter some text..."
                      value={inputValue}
                      onChange={e => setInputValue(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-l-text-1 dark:text-d-text-1">
                      Textarea
                    </label>
                    <Textarea
                      placeholder="Enter a longer message..."
                      rows={3}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium text-l-text-1 dark:text-d-text-1">
                      Toggle Switch
                    </label>
                    <Switch
                      checked={switchValue}
                      onChange={e => setSwitchValue(e.target.checked)}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Toasts Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Toast Notifications</CardTitle>
                  <CardDescription>Global notification system</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    <Button
                      variant="outline"
                      onClick={() => handleToast('success')}
                    >
                      Success
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => handleToast('error')}
                    >
                      Error
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => handleToast('warning')}
                    >
                      Warning
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => handleToast('info')}
                    >
                      Info
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Progress & Badges */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Progress & Badges</CardTitle>
                  <CardDescription>
                    Visual indicators for status and progress
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <label className="text-sm font-medium text-l-text-1 dark:text-d-text-1">
                        Progress: {progress}%
                      </label>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() =>
                            setProgress(Math.max(0, progress - 10))
                          }
                        >
                          -10
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() =>
                            setProgress(Math.min(100, progress + 10))
                          }
                        >
                          +10
                        </Button>
                      </div>
                    </div>
                    <Progress value={progress} />
                  </div>
                  <div>
                    <label className="mb-3 block text-sm font-medium text-l-text-1 dark:text-d-text-1">
                      Badges
                    </label>
                    <div className="flex flex-wrap gap-2">
                      <Badge>Default</Badge>
                      <Badge variant="secondary">Secondary</Badge>
                      <Badge variant="outline">Outline</Badge>
                      <Badge variant="success">Success</Badge>
                      <Badge variant="destructive">Destructive</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-center text-2xl">
                  Technology Stack
                </CardTitle>
                <CardDescription className="text-center">
                  Built with modern tools and best practices
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {[
                    {
                      category: 'Framework',
                      items: ['React 19', 'TypeScript']
                    },
                    {
                      category: 'Build Tool',
                      items: ['Vite', 'SWC Compiler']
                    },
                    {
                      category: 'Styling',
                      items: ['Tailwind CSS v4', 'Framer Motion']
                    },
                    {
                      category: 'State',
                      items: ['React Query', 'Context API']
                    }
                  ].map(stack => (
                    <div key={stack.category}>
                      <h4 className="mb-2 font-semibold text-l-text-1 dark:text-d-text-1">
                        {stack.category}
                      </h4>
                      <ul className="space-y-1 text-sm text-l-text-2 dark:text-d-text-2">
                        {stack.items.map(item => (
                          <li key={item}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-2xl">Get Started</CardTitle>
                <CardDescription>
                  Clone the repository and start building your next project
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg bg-l-bg-2 dark:bg-d-bg-2 p-4">
                  <code className="text-sm text-l-text-1 dark:text-d-text-1">
                    git clone {APP_CONFIG.REPOSITORY}
                  </code>
                </div>
                <p className="text-sm text-l-text-2 dark:text-d-text-2">
                  Created by {APP_CONFIG.AUTHOR} • MIT License
                </p>
                <div className="flex justify-center gap-3">
                  <Button
                    onClick={() =>
                      window.open(APP_CONFIG.REPOSITORY, '_blank', 'noopener')
                    }
                  >
                    View Repository
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() =>
                      window.open(
                        `${APP_CONFIG.REPOSITORY}/blob/main/README.md`,
                        '_blank',
                        'noopener'
                      )
                    }
                  >
                    Documentation
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
