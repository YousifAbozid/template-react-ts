import React from 'react';
import { motion } from 'framer-motion';

export interface InputProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'onDrag' | 'onDragEnd' | 'onDragStart' | 'onAnimationStart' | 'onAnimationEnd'
> {
  variant?: 'default' | 'error';
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <motion.input
        type={type}
        className={[
          'flex h-10 w-full rounded-md border border-input-border bg-input-bg px-3 py-2 text-sm text-input-text file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-input-placeholder focus-visible:outline-none focus-visible:border-input-border-focus disabled:cursor-not-allowed disabled:opacity-50',
          className
        ]
          .filter(Boolean)
          .join(' ')}
        ref={ref}
        initial={{ scale: 1 }}
        whileFocus={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };
