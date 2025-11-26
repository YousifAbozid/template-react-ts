import { useEffect, useState, useRef } from 'react';
import { Toast as ToastType } from '@/contexts/ToastContext';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle, AlertTriangle, Check, Info } from 'lucide-react';

interface ToastProps {
  toast: ToastType;
  onRemove: () => void;
}

export default function Toast({ toast, onRemove }: ToastProps) {
  const [visible, setVisible] = useState(true);
  const progressRef = useRef<HTMLDivElement>(null);
  const startTimeRef = useRef<number>(Date.now());
  const animationFrameRef = useRef<number | null>(null);
  const toastDuration = toast.duration;
  const animationDuration = 300; // Exit animation duration in ms

  // Start exit animation before removing from DOM
  useEffect(() => {
    const visibleDuration = toastDuration - animationDuration;

    const timer = setTimeout(() => {
      setVisible(false);
    }, visibleDuration);

    // Update progress bar - this will run for the full visible duration
    const updateProgressBar = () => {
      if (!progressRef.current) return;

      const elapsed = Date.now() - startTimeRef.current;
      // Make sure progress bar finishes exactly when the visible duration ends
      const remaining = Math.max(0, visibleDuration - elapsed);
      const progress = (remaining / visibleDuration) * 100;

      progressRef.current.style.width = `${progress}%`;

      if (elapsed < visibleDuration) {
        animationFrameRef.current = requestAnimationFrame(updateProgressBar);
      } else if (progressRef.current) {
        // Ensure we set to exactly 0% at the end
        progressRef.current.style.width = '0%';
      }
    };

    animationFrameRef.current = requestAnimationFrame(updateProgressBar);

    return () => {
      clearTimeout(timer);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [toastDuration]);

  // Once exit animation completes, call onRemove
  useEffect(() => {
    if (!visible) {
      const timer = setTimeout(onRemove, animationDuration);
      return () => clearTimeout(timer);
    }
  }, [visible, onRemove]);

  // Get the appropriate icon and background color based on toast type
  const getToastStyles = () => {
    switch (toast.type) {
      case 'success':
        return {
          icon: <Check className="w-5 h-5" />,
          bgColor: 'bg-accent-success text-white',
          progressColor: 'bg-white/60',
        };
      case 'error':
        return {
          icon: <AlertCircle className="w-5 h-5" />,
          bgColor: 'bg-accent-danger text-white',
          progressColor: 'bg-white/60',
        };
      case 'warning':
        return {
          icon: <AlertTriangle className="w-5 h-5" />,
          bgColor: 'bg-accent-warning text-l-text-1 dark:text-d-text-1',
          progressColor: 'bg-l-text-1 dark:bg-d-text-1/60',
        };
      case 'info':
      default:
        return {
          icon: <Info className="w-5 h-5" />,
          bgColor: 'bg-accent-1 text-white',
          progressColor: 'bg-white/60',
        };
    }
  };

  const { icon, bgColor, progressColor } = getToastStyles();

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 15, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.9 }}
          transition={{ duration: 0.2 }}
          className={`${bgColor} rounded-lg shadow-lg flex flex-col w-full max-w-md mx-auto overflow-hidden md:mx-0`}
          style={{
            minWidth: '280px',
            maxWidth: '100%',
          }}
          role="alert"
        >
          <div className="p-3 md:p-3 flex items-center gap-2 md:gap-3">
            <div className="shrink-0">{icon}</div>
            <p className="text-sm md:text-sm font-medium flex-1 wrap-break-words">
              {toast.message}
            </p>
          </div>

          {/* Progress indicator */}
          <div className="h-1 w-full bg-black/10">
            <div
              ref={progressRef}
              className={`h-full ${progressColor}`}
              style={{ width: '100%', transition: 'width linear' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
