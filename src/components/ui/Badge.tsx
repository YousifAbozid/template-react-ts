import React from 'react';
import { motion } from 'framer-motion';

type BadgeVariant =
  | 'default'
  | 'secondary'
  | 'destructive'
  | 'success'
  | 'warning'
  | 'outline';

const getBadgeClasses = (variant: BadgeVariant): string => {
  const baseClasses =
    'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-border-focus focus:ring-offset-2';

  const variantClasses = {
    default:
      'border-transparent bg-accent-primary text-text-inverse hover:bg-accent-primary/80',
    secondary:
      'border-transparent bg-background-tertiary text-text-primary hover:bg-background-hover',
    destructive:
      'border-transparent bg-accent-error text-text-inverse hover:bg-accent-error/80',
    success:
      'border-transparent bg-accent-success text-text-inverse hover:bg-accent-success/80',
    warning:
      'border-transparent bg-accent-warning text-text-inverse hover:bg-accent-warning/80',
    outline: 'text-text-primary border-border-primary'
  };

  return `${baseClasses} ${variantClasses[variant]}`;
};

export interface BadgeProps extends Omit<
  React.HTMLAttributes<HTMLDivElement>,
  'onDrag' | 'onDragEnd' | 'onDragStart' | 'onAnimationStart' | 'onAnimationEnd'
> {
  variant?: BadgeVariant;
}

function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  return (
    <motion.div
      className={[getBadgeClasses(variant), className]
        .filter(Boolean)
        .join(' ')}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
      {...props}
    />
  );
}

export { Badge };
