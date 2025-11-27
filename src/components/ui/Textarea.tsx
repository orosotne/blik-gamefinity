'use client';

import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-foreground-secondary mb-2">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          className={cn(
            'w-full px-4 py-3 bg-background-secondary border border-border rounded-xl',
            'text-foreground placeholder:text-foreground-muted',
            'focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary',
            'transition-all duration-200 resize-none',
            error && 'border-secondary focus:border-secondary focus:ring-secondary',
            className
          )}
          {...props}
        />
        {error && <p className="mt-2 text-sm text-secondary">{error}</p>}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

export default Textarea;



