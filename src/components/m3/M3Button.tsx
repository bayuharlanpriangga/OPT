import React from 'react';

export type M3ButtonVariant = 'filled' | 'tonal' | 'outlined' | 'text' | 'elevated';

interface M3ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: M3ButtonVariant;
  icon?: string;
  trailingIcon?: string;
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const M3Button: React.FC<M3ButtonProps> = ({
  children,
  variant = 'filled',
  icon,
  trailingIcon,
  size = 'md',
  fullWidth = false,
  className = '',
  disabled,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-m3-full transition-all duration-200 cursor-pointer select-none m3-interactive';

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-xs gap-1.5 h-8',
    md: 'px-5 py-2.5 text-sm gap-2 h-10',
    lg: 'px-6 py-3.5 text-base gap-2.5 h-12',
  };

  const variantClasses = {
    filled: 'bg-primary text-on-primary shadow-sm hover:shadow-md active:shadow-none',
    tonal: 'bg-secondary-container text-on-secondary-container hover:shadow-sm',
    outlined: 'border border-outline bg-transparent text-primary hover:bg-surface-container-high',
    text: 'bg-transparent text-primary hover:bg-surface-container-high px-3',
    elevated: 'bg-surface-container-low text-primary m3-elevation-1 hover:m3-elevation-2',
  };

  const disabledClasses = disabled
    ? 'opacity-38 cursor-not-allowed pointer-events-none'
    : '';

  return (
    <button
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${disabledClasses} ${
        fullWidth ? 'w-full' : ''
      } ${className}`}
      disabled={disabled}
      {...props}
    >
      {icon && <span className="material-symbols-outlined text-[20px]">{icon}</span>}
      <span>{children}</span>
      {trailingIcon && <span className="material-symbols-outlined text-[20px]">{trailingIcon}</span>}
    </button>
  );
};
