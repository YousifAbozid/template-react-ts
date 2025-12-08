import React, { useId } from 'react';

export interface RadioProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'type'
> {
  label?: string;
}

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ className, label, id, ...props }, ref) => {
    const generatedId = useId();
    const inputId = id || generatedId;

    return (
      <div className="flex items-center space-x-2">
        <input
          type="radio"
          id={inputId}
          className={`h-4 w-4 rounded-full border border-input-border text-accent-primary focus:outline-none focus:border-input-border-focus disabled:cursor-not-allowed disabled:opacity-50 ${className || ''}`}
          ref={ref}
          {...props}
        />
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
          >
            {label}
          </label>
        )}
      </div>
    );
  }
);
Radio.displayName = 'Radio';

export { Radio };
