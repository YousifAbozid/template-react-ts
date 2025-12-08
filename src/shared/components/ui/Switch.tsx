import React, { useId } from 'react';

export interface SwitchProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'type'
> {
  label?: string;
}

const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ label, id, ...props }, ref) => {
    const generatedId = useId();
    const inputId = id || generatedId;

    return (
      <div className="flex items-center space-x-2">
        <label
          htmlFor={inputId}
          className="relative inline-flex h-6 w-11 items-center rounded-full bg-background-tertiary transition-colors cursor-pointer"
        >
          <input
            type="checkbox"
            id={inputId}
            className="sr-only peer"
            ref={ref}
            {...props}
          />
          <span className="inline-block h-4 w-4 transform rounded-full bg-text-inverse transition-transform peer-checked:translate-x-6 peer-checked:bg-accent-primary ml-1" />
        </label>
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium leading-none cursor-pointer"
          >
            {label}
          </label>
        )}
      </div>
    );
  }
);
Switch.displayName = 'Switch';

export { Switch };
