import React from 'react';
import { motion } from 'framer-motion';

type ButtonVariant =
  | 'default'
  | 'destructive'
  | 'outline'
  | 'secondary'
  | 'ghost'
  | 'link';
type ButtonSize = 'default' | 'sm' | 'lg' | 'icon';

const getButtonClasses = (variant: ButtonVariant, size: ButtonSize): string => {
  const baseClasses =
    'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';

  const variantClasses = {
    default: 'bg-accent-primary text-text-inverse hover:bg-accent-secondary',
    destructive: 'bg-accent-error text-text-inverse hover:bg-accent-error/90',
    outline:
      'border border-border-primary bg-background-primary hover:bg-background-hover hover:text-text-primary',
    secondary:
      'bg-background-tertiary text-text-primary hover:bg-background-hover',
    ghost: 'hover:bg-background-hover hover:text-text-primary',
    link: 'text-accent-primary underline-offset-4 hover:underline'
  };

  const sizeClasses = {
    default: 'h-10 px-4 py-2',
    sm: 'h-9 rounded-md px-3',
    lg: 'h-11 rounded-md px-8',
    icon: 'h-10 w-10'
  };

  return `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`;
};

export interface ButtonProps extends Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'onDrag' | 'onDragEnd' | 'onDragStart' | 'onAnimationStart' | 'onAnimationEnd'
> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLElement, ButtonProps>(
  (
    {
      className,
      variant = 'default',
      size = 'default',
      loading,
      children,
      disabled,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const classes = [getButtonClasses(variant, size), className]
      .filter(Boolean)
      .join(' ');

    if (asChild) {
      const child = children as React.ReactElement<
        React.HTMLAttributes<HTMLElement>
      >;
      const { className: childClassName, ...childProps } = child.props || {};
      return React.cloneElement(child, {
        className: [classes, childClassName].filter(Boolean).join(' '),
        ...childProps,
        ...props
      });
    }

    return (
      <motion.button
        className={classes}
        ref={ref as React.Ref<HTMLButtonElement>}
        disabled={disabled || loading}
        whileHover={{ scale: disabled || loading ? 1 : 1.02 }}
        whileTap={{ scale: disabled || loading ? 1 : 0.98 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        {...props}
      >
        {loading && (
          <motion.div
            className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          />
        )}
        {children}
      </motion.button>
    );
  }
);
Button.displayName = 'Button';

export { Button };
