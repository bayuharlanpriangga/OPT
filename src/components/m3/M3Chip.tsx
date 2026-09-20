import React from 'react';

interface M3ChipProps {
  label: string;
  selected?: boolean;
  icon?: string;
  onClick?: () => void;
  className?: string;
  variant?: 'filter' | 'assist' | 'suggestion';
}

export const M3Chip: React.FC<M3ChipProps> = ({
  label,
  selected = false,
  icon,
  onClick,
  className = '',
  variant = 'filter',
}) => {
  const isClickable = !!onClick;

  const baseClasses = 'inline-flex items-center gap-2 px-3 py-1.5 rounded-m3-sm text-xs font-medium transition-all duration-150 select-none';

  let styleClasses = '';
  if (variant === 'filter') {
    if (selected) {
      styleClasses = 'bg-secondary-container text-on-secondary-container border border-transparent shadow-xs';
    } else {
      styleClasses = 'bg-transparent text-on-surface-variant border border-outline hover:bg-surface-container-high';
    }
  } else {
    styleClasses = 'bg-surface-container-low text-on-surface border border-outline-variant hover:bg-surface-container-high';
  }

  const clickableClasses = isClickable ? 'cursor-pointer m3-interactive' : '';

  return (
    <div
      onClick={onClick}
      className={`${baseClasses} ${styleClasses} ${clickableClasses} ${className}`}
    >
      {selected ? (
        <span className="material-symbols-outlined text-[16px]">check</span>
      ) : (
        icon && <span className="material-symbols-outlined text-[16px]">{icon}</span>
      )}
      <span>{label}</span>
    </div>
  );
};
