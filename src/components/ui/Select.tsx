import React from 'react';

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children: React.ReactNode;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <select
        className={`h-10 w-full rounded-md border border-input-border bg-input-bg pl-3 py-2 text-sm text-input-text placeholder:text-input-placeholder focus:outline-none focus:border-input-border-focus disabled:cursor-not-allowed disabled:opacity-50 ${className || ''}`}
        ref={ref}
        {...props}
      >
        {children}
      </select>
    );
  }
);
Select.displayName = 'Select';

export interface SelectOptionProps extends React.OptionHTMLAttributes<HTMLOptionElement> {
  children: React.ReactNode;
}

const SelectOption = React.forwardRef<HTMLOptionElement, SelectOptionProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <option
        className={`py-1.5 px-3 text-sm ${className || ''}`}
        ref={ref}
        {...props}
      >
        {children}
      </option>
    );
  }
);
SelectOption.displayName = 'SelectOption';

export { Select, SelectOption };
