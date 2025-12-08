import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from './Button';

export interface DrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
  side?: 'left' | 'right' | 'top' | 'bottom';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const Drawer: React.FC<DrawerProps> = ({
  open,
  onOpenChange,
  children,
  side = 'right',
  size = 'md'
}) => {
  const sizeClasses = {
    sm: side === 'left' || side === 'right' ? 'w-80' : 'h-80',
    md: side === 'left' || side === 'right' ? 'w-96' : 'h-96',
    lg: side === 'left' || side === 'right' ? 'w-[32rem]' : 'h-[32rem]',
    xl: side === 'left' || side === 'right' ? 'w-[40rem]' : 'h-[40rem]'
  };

  const slideVariants = {
    left: {
      hidden: { x: '-100%' },
      visible: { x: 0 }
    },
    right: {
      hidden: { x: '100%' },
      visible: { x: 0 }
    },
    top: {
      hidden: { y: '-100%' },
      visible: { y: 0 }
    },
    bottom: {
      hidden: { y: '100%' },
      visible: { y: 0 }
    }
  };

  const positionClasses = {
    left: 'left-0 top-0 h-full',
    right: 'right-0 top-0 h-full',
    top: 'top-0 left-0 w-full',
    bottom: 'bottom-0 left-0 w-full'
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-40 bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => onOpenChange(false)}
          />

          {/* Drawer */}
          <motion.div
            className={`fixed z-50 bg-background-card border border-border-primary ${positionClasses[side]} ${sizeClasses[size]}`}
            variants={slideVariants[side]}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <div className="relative h-full flex flex-col">
              {/* Close button */}
              <div className="absolute top-4 right-4 z-10">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onOpenChange(false)}
                  className="cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-auto p-6">{children}</div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const DrawerContent: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return <div className={`space-y-4 ${className || ''}`}>{children}</div>;
};

const DrawerHeader: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return <div className={`space-y-2 ${className || ''}`}>{children}</div>;
};

const DrawerTitle: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <h2
      className={`text-lg font-semibold text-text-primary ${className || ''}`}
    >
      {children}
    </h2>
  );
};

const DrawerDescription: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <p className={`text-sm text-text-secondary ${className || ''}`}>
      {children}
    </p>
  );
};

export { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription };
