'use client';

import { forwardRef } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

type CardVariant = 'default' | 'glass' | 'gradient' | 'outline';

interface CardProps extends HTMLMotionProps<'div'> {
  variant?: CardVariant;
  hover?: boolean;
  glow?: boolean;
}

const variants: Record<CardVariant, string> = {
  default: 'bg-background-secondary',
  glass: 'glass',
  gradient: 'gradient-border bg-background-secondary',
  outline: 'bg-transparent border border-border',
};

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', hover = true, glow = false, children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn(
          'rounded-2xl p-6 transition-all duration-300',
          variants[variant],
          hover && 'hover:border-foreground-muted/30',
          glow && 'hover:shadow-lg hover:shadow-primary/10',
          className
        )}
        whileHover={hover ? { y: -4 } : undefined}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = 'Card';

export default Card;



