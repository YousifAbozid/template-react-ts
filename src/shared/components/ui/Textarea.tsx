import React from 'react';

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={`flex min-h-20 w-full rounded-md border border-input-border bg-input-bg px-3 py-2 text-sm text-input-text placeholder:text-input-placeholder focus-visible:outline-none focus-visible:border-input-border-focus disabled:cursor-not-allowed disabled:opacity-50 resize-none ${className || ''}`}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = 'Textarea';

export { Textarea };
