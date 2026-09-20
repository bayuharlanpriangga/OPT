import React from 'react';

export type M3CardVariant = 'elevated' | 'filled' | 'outlined';

interface M3CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: M3CardVariant;
  interactive?: boolean;
}

export const M3Card: React.FC<M3CardProps> = ({
  children,
  variant = 'filled',
  interactive = false,
  className = '',
  ...props
}) => {
  const baseClasses = 'rounded-m3-xl p-5 md:p-6 transition-all duration-200 relative overflow-hidden';

  const variantClasses = {
    elevated: 'bg-surface-container-low text-on-surface m3-elevation-1 hover:m3-elevation-2',
    filled: 'bg-surface-container-highest text-on-surface',
    outlined: 'bg-surface-container-lowest text-on-surface border border-outline-variant',
  };

  const interactiveClasses = interactive
    ? 'cursor-pointer m3-interactive hover:-translate-y-0.5'
    : '';

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${interactiveClasses} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
