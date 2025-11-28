'use client';

import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  container?: boolean;
  background?: 'default' | 'secondary' | 'gradient' | 'grid' | 'dots';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
}

const backgrounds: Record<string, string> = {
  default: 'bg-background',
  secondary: 'bg-background-secondary',
  gradient: 'bg-gradient-to-b from-background to-background-secondary',
  grid: 'bg-background bg-grid',
  dots: 'bg-background bg-dots',
};

const paddings: Record<string, string> = {
  none: '',
  sm: 'py-12 md:py-16',
  md: 'py-16 md:py-24',
  lg: 'py-24 md:py-32',
  xl: 'py-32 md:py-40',
};

const Section = forwardRef<HTMLElement, SectionProps>(
  (
    { className, container = true, background = 'default', padding = 'md', children, ...props },
    ref
  ) => {
    return (
      <section
        ref={ref}
        className={cn('relative overflow-hidden', backgrounds[background], paddings[padding], className)}
        {...props}
      >
        {container ? <div className="container-custom relative">{children}</div> : children}
      </section>
    );
  }
);

Section.displayName = 'Section';

// Section Header Component
interface SectionHeaderProps {
  badge?: string;
  title: string | React.ReactNode;
  description?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export function SectionHeader({
  badge,
  title,
  description,
  align = 'center',
  className,
}: SectionHeaderProps) {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className={cn('max-w-3xl mb-12 md:mb-16', alignClasses[align], className)}
    >
      {badge && (
        <span className="inline-block px-4 py-1.5 text-sm font-medium text-primary bg-primary/10 rounded-full mb-4">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">{title}</h2>
      {description && (
        <p className="text-lg text-foreground-secondary leading-relaxed">{description}</p>
      )}
    </motion.div>
  );
}

export default Section;



