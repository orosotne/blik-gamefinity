'use client';

import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, icon, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-foreground-secondary mb-2">
            {label}
          </label>
        )}
        <div className="relative">
          {icon && (
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground-muted">
              {icon}
            </div>
          )}
          <input
            ref={ref}
            className={cn(
              'w-full px-4 py-3 bg-background-secondary border border-border rounded-xl',
              'text-foreground placeholder:text-foreground-muted',
              'focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary',
              'transition-all duration-200',
              icon && 'pl-12',
              error && 'border-secondary focus:border-secondary focus:ring-secondary',
              className
            )}
            {...props}
          />
        </div>
        {error && <p className="mt-2 text-sm text-secondary">{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;



