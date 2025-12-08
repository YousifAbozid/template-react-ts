import React from 'react';
import { motion } from 'framer-motion';

type AlertVariant = 'default' | 'destructive' | 'success' | 'warning' | 'info';

const getAlertClasses = (variant: AlertVariant): string => {
  const baseClasses = 'relative w-full rounded-lg border p-4';

  const variantClasses = {
    default: 'bg-background-card border-border-primary text-text-primary',
    destructive: 'border-accent-error/50 text-accent-error bg-state-error-bg',
    success: 'border-accent-success/50 text-accent-success bg-state-success-bg',
    warning: 'border-accent-warning/50 text-accent-warning bg-state-warning-bg',
    info: 'border-accent-info/50 text-accent-info bg-state-info-bg'
  };

  return `${baseClasses} ${variantClasses[variant]}`;
};

export interface AlertProps extends Omit<
  React.HTMLAttributes<HTMLDivElement>,
  'onDrag' | 'onDragEnd' | 'onDragStart' | 'onAnimationStart' | 'onAnimationEnd'
> {
  variant?: AlertVariant;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant = 'default', ...props }, ref) => (
    <motion.div
      ref={ref}
      role="alert"
      className={[getAlertClasses(variant), 'flex gap-3', className]
        .filter(Boolean)
        .join(' ')}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      {...props}
    />
  )
);
Alert.displayName = 'Alert';

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={['font-medium leading-none tracking-tight', className]
      .filter(Boolean)
      .join(' ')}
    {...props}
  />
));
AlertTitle.displayName = 'AlertTitle';

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={['text-sm leading-relaxed', className].filter(Boolean).join(' ')}
    {...props}
  />
));
AlertDescription.displayName = 'AlertDescription';

export { Alert, AlertTitle, AlertDescription };
