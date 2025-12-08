import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

export type SkeletonProps = Omit<HTMLMotionProps<'div'>, 'ref'>;

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={`animate-pulse rounded-md bg-background-tertiary ${className || ''}`}
        initial={{ opacity: 0.5 }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        {...props}
      />
    );
  }
);
Skeleton.displayName = 'Skeleton';

export { Skeleton };
