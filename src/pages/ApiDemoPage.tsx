import { Link } from 'react-router-dom';
import { ArrowLeft, RefreshCw, Loader2, AlertCircle } from 'lucide-react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';

// Mock API functions
type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
};

const fetchPosts = async (): Promise<Post[]> => {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=5'
  );
  if (!response.ok) throw new Error('Failed to fetch posts');
  return response.json();
};

const fetchUser = async (id: number): Promise<User> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  if (!response.ok) throw new Error('Failed to fetch user');
  return response.json();
};

const createPost = async (post: Omit<Post, 'id'>): Promise<Post> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  });
  if (!response.ok) throw new Error('Failed to create post');
  return response.json();
};

const ApiDemoPage = () => {
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
              API Demo
            </h1>
            <p className="text-xl text-l-text-2 dark:text-d-text-2">
              React Query integration with data fetching examples
            </p>
          </div>
        </div>
      </header>

      <main className="py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Posts List */}
            <div className="bg-l-bg-2 dark:bg-d-bg-2 p-8 rounded-xl border border-border-l dark:border-border-d">
              <h2 className="text-2xl font-bold mb-6 text-l-text-1 dark:text-d-text-1">
                Posts (Query)
              </h2>
              <PostsList />
            </div>

            {/* User Details */}
            <div className="bg-l-bg-2 dark:bg-d-bg-2 p-8 rounded-xl border border-border-l dark:border-border-d">
              <h2 className="text-2xl font-bold mb-6 text-l-text-1 dark:text-d-text-1">
                User Details (Dynamic Query)
              </h2>
              <UserDetails />
            </div>
          </div>

          {/* Create Post */}
          <div className="mt-12 bg-l-bg-2 dark:bg-d-bg-2 p-8 rounded-xl border border-border-l dark:border-border-d">
            <h2 className="text-2xl font-bold mb-6 text-l-text-1 dark:text-d-text-1">
              Create Post (Mutation)
            </h2>
            <CreatePost />
          </div>

          {/* React Query Features */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8 text-l-text-1 dark:text-d-text-1">
              React Query Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FeatureCard
                icon="⚡️"
                title="Automatic Caching"
                description="Data is automatically cached and reused across components"
              />
              <FeatureCard
                icon="🔄"
                title="Background Updates"
                description="Data is refetched in the background to stay fresh"
              />
              <FeatureCard
                icon="📱"
                title="Offline Support"
                description="Graceful handling of network failures and offline scenarios"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

function PostsList() {
  const {
    data: posts,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="animate-spin text-accent-1" size={24} />
        <span className="ml-2 text-l-text-2 dark:text-d-text-2">
          Loading posts...
        </span>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center py-12">
        <AlertCircle className="mx-auto text-accent-danger mb-4" size={48} />
        <p className="text-accent-danger mb-4">
          Error:{' '}
          {error instanceof Error ? error.message : 'Failed to fetch posts'}
        </p>
        <button
          onClick={() => refetch()}
          className="bg-accent-1 hover:bg-accent-2 text-white px-4 py-2 rounded-lg transition-colors"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm text-l-text-3 dark:text-d-text-3">
          {posts?.length} posts
        </span>
        <button
          onClick={() => refetch()}
          disabled={isFetching}
          className="flex items-center gap-2 text-accent-1 hover:text-accent-2 transition-colors disabled:opacity-50"
        >
          <RefreshCw
            className={`w-4 h-4 ${isFetching ? 'animate-spin' : ''}`}
          />
          Refresh
        </button>
      </div>

      <div className="space-y-4">
        {posts?.map(post => (
          <div
            key={post.id}
            className="bg-l-bg-1 dark:bg-d-bg-1 p-4 rounded-lg border border-border-l dark:border-border-d"
          >
            <h3 className="font-semibold text-l-text-1 dark:text-d-text-1 mb-2">
              {post.title}
            </h3>
            <p className="text-sm text-l-text-2 dark:text-d-text-2 line-clamp-2">
              {post.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function UserDetails() {
  const [userId, setUserId] = useState<number>(1);

  const {
    data: user,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['user', userId],
    queryFn: () => fetchUser(userId),
    enabled: userId > 0,
  });

  return (
    <div>
      <div className="mb-6">
        <label className="block text-sm font-medium text-l-text-1 dark:text-d-text-1 mb-2">
          User ID
        </label>
        <select
          value={userId}
          onChange={e => setUserId(Number(e.target.value))}
          className="w-full bg-l-bg-1 dark:bg-d-bg-1 text-l-text-1 dark:text-d-text-1 border border-border-l dark:border-border-d rounded-lg px-3 py-2 focus:border-accent-1 outline-none"
        >
          {Array.from({ length: 10 }, (_, i) => i + 1).map(id => (
            <option key={id} value={id}>
              User {id}
            </option>
          ))}
        </select>
      </div>

      {isLoading && (
        <div className="flex items-center justify-center py-8">
          <Loader2 className="animate-spin text-accent-1" size={24} />
          <span className="ml-2 text-l-text-2 dark:text-d-text-2">
            Loading user...
          </span>
        </div>
      )}

      {isError && (
        <div className="text-center py-8">
          <AlertCircle className="mx-auto text-accent-danger mb-2" size={32} />
          <p className="text-accent-danger text-sm">
            {error instanceof Error ? error.message : 'Failed to fetch user'}
          </p>
        </div>
      )}

      {user && (
        <div className="bg-l-bg-1 dark:bg-d-bg-1 p-4 rounded-lg border border-border-l dark:border-border-d">
          <h3 className="font-semibold text-l-text-1 dark:text-d-text-1 mb-3">
            {user.name}
          </h3>
          <div className="space-y-2 text-sm">
            <p className="text-l-text-2 dark:text-d-text-2">
              <strong>Email:</strong> {user.email}
            </p>
            <p className="text-l-text-2 dark:text-d-text-2">
              <strong>Phone:</strong> {user.phone}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

function CreatePost() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const queryClient = useQueryClient();

  const createPostMutation = useMutation({
    mutationFn: createPost,
    onSuccess: newPost => {
      // Optimistically update the posts list
      queryClient.setQueryData(['posts'], (oldPosts: Post[] | undefined) => {
        return oldPosts ? [newPost, ...oldPosts] : [newPost];
      });

      // Clear form
      setTitle('');
      setBody('');
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() && body.trim()) {
      createPostMutation.mutate({
        title: title.trim(),
        body: body.trim(),
        userId: 1,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-l-text-1 dark:text-d-text-1 mb-2">
          Title
        </label>
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="w-full bg-l-bg-1 dark:bg-d-bg-1 text-l-text-1 dark:text-d-text-1 border border-border-l dark:border-border-d rounded-lg px-3 py-2 focus:border-accent-1 outline-none"
          placeholder="Enter post title"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-l-text-1 dark:text-d-text-1 mb-2">
          Body
        </label>
        <textarea
          value={body}
          onChange={e => setBody(e.target.value)}
          className="w-full bg-l-bg-1 dark:bg-d-bg-1 text-l-text-1 dark:text-d-text-1 border border-border-l dark:border-border-d rounded-lg px-3 py-2 focus:border-accent-1 outline-none h-24 resize-none"
          placeholder="Enter post content"
          required
        />
      </div>

      <button
        type="submit"
        disabled={createPostMutation.isPending || !title.trim() || !body.trim()}
        className="bg-accent-1 hover:bg-accent-2 text-white px-6 py-2 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
      >
        {createPostMutation.isPending && (
          <Loader2 className="animate-spin" size={16} />
        )}
        {createPostMutation.isPending ? 'Creating...' : 'Create Post'}
      </button>

      {createPostMutation.isError && (
        <p className="text-accent-danger text-sm">
          Error:{' '}
          {createPostMutation.error instanceof Error
            ? createPostMutation.error.message
            : 'Failed to create post'}
        </p>
      )}

      {createPostMutation.isSuccess && (
        <p className="text-accent-success text-sm">
          Post created successfully! Check the posts list for updates.
        </p>
      )}
    </form>
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

export default ApiDemoPage;
