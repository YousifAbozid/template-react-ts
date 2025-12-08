import React from 'react';
import { motion } from 'framer-motion';

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
  max?: number;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'success' | 'warning' | 'error';
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  (
    {
      className,
      value = 0,
      max = 100,
      size = 'md',
      variant = 'default',
      ...props
    },
    ref
  ) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

    const sizeClasses = {
      sm: 'h-2',
      md: 'h-3',
      lg: 'h-4'
    };

    const variantClasses = {
      default: 'bg-accent-primary',
      success: 'bg-accent-success',
      warning: 'bg-accent-warning',
      error: 'bg-accent-error'
    };

    return (
      <div
        ref={ref}
        className={`relative w-full overflow-hidden rounded-full bg-background-tertiary ${sizeClasses[size]} ${className || ''}`}
        {...props}
      >
        <motion.div
          className={`h-full ${variantClasses[variant]} transition-all`}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      </div>
    );
  }
);
Progress.displayName = 'Progress';

export { Progress };
