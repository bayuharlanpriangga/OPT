import React from 'react';
import { useApp } from '../../context/AppContext';

interface M3LikertScaleProps {
  value?: number;
  onChange: (val: number) => void;
  disabled?: boolean;
}

export const M3LikertScale: React.FC<M3LikertScaleProps> = ({
  value,
  onChange,
  disabled = false,
}) => {
  const { language } = useApp();

  const options = [
    {
      val: 1,
      label: { id: 'Sangat Tidak Setuju', en: 'Strongly Disagree' },
      size: 'w-11 h-11 md:w-13 md:h-13',
      unselectedClass:
        'bg-surface-container-high border-2 border-neutral-400 dark:border-neutral-600 hover:border-black dark:hover:border-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800',
      selectedClass:
        'bg-black dark:bg-neutral-950 border-2 border-black dark:border-neutral-700 text-white scale-110 shadow-lg ring-4 ring-neutral-400/40',
    },
    {
      val: 2,
      label: { id: 'Tidak Setuju', en: 'Disagree' },
      size: 'w-9 h-9 md:w-11 md:h-11',
      unselectedClass:
        'bg-surface-container-high border-2 border-neutral-400 dark:border-neutral-600 hover:border-black dark:hover:border-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800',
      selectedClass:
        'bg-black dark:bg-neutral-950 border-2 border-black dark:border-neutral-700 text-white scale-110 shadow-lg ring-4 ring-neutral-400/40',
    },
    {
      val: 3,
      label: { id: 'Netral', en: 'Neutral' },
      size: 'w-8 h-8 md:w-10 md:h-10',
      unselectedClass:
        'bg-surface-container-high border-2 border-outline-variant hover:border-outline hover:bg-surface-container-highest',
      selectedClass:
        'bg-white border-2 border-neutral-300 dark:border-neutral-100 text-neutral-900 scale-110 shadow-lg ring-4 ring-neutral-300/60 dark:ring-neutral-600/60',
    },
    {
      val: 4,
      label: { id: 'Setuju', en: 'Agree' },
      size: 'w-9 h-9 md:w-11 md:h-11',
      unselectedClass:
        'bg-surface-container-high border-2 border-primary/40 hover:border-primary hover:bg-primary/10',
      selectedClass:
        'bg-primary border-2 border-primary text-on-primary scale-110 shadow-lg ring-4 ring-primary/30',
    },
    {
      val: 5,
      label: { id: 'Sangat Setuju', en: 'Strongly Agree' },
      size: 'w-11 h-11 md:w-13 md:h-13',
      unselectedClass:
        'bg-surface-container-high border-2 border-primary/40 hover:border-primary hover:bg-primary/10',
      selectedClass:
        'bg-primary border-2 border-primary text-on-primary scale-110 shadow-lg ring-4 ring-primary/30',
    },
  ];

  return (
    <div className="w-full py-4 select-none">
      {/* Labels for ends */}
      <div className="flex justify-between items-center text-xs font-black uppercase tracking-wider mb-4 px-2">
        <span className="text-black dark:text-white flex items-center gap-1.5">
          <span className="material-symbols-outlined text-[16px]">close</span>
          {language === 'id' ? 'Tidak Setuju' : 'Disagree'}
        </span>
        <span className="text-primary flex items-center gap-1.5">
          {language === 'id' ? 'Setuju' : 'Agree'}
          <span className="material-symbols-outlined text-[16px]">check</span>
        </span>
      </div>

      {/* Segmented / Circular option row */}
      <div className="relative flex items-center justify-between px-2 md:px-6">
        {/* Connecting track line */}
        <div className="absolute left-8 right-8 top-1/2 -translate-y-1/2 h-1 bg-surface-container-highest z-0 rounded-full" />

        {options.map((opt) => {
          const isSelected = value === opt.val;
          return (
            <button
              key={opt.val}
              type="button"
              disabled={disabled}
              onClick={() => onChange(opt.val)}
              title={opt.label[language]}
              aria-label={opt.label[language]}
              className={`relative z-10 flex items-center justify-center rounded-full transition-all duration-200 cursor-pointer ${
                opt.size
              } ${
                isSelected
                  ? `${opt.selectedClass} hover:scale-115`
                  : `${opt.unselectedClass} hover:scale-105`
              }`}
            >
              {/* Tanpa angka di dalam lingkaran */}
            </button>
          );
        })}
      </div>

      {/* Text feedback indicator */}
      <div className="h-6 mt-4 text-center">
        {value ? (
          <span
            className={`inline-block text-xs md:text-sm font-bold px-3 py-1 rounded-full shadow-xs animate-fade-in ${
              value <= 2
                ? 'text-black dark:text-white bg-neutral-200 dark:bg-neutral-800'
                : value === 3
                ? 'text-on-surface bg-surface-container-high border border-outline-variant'
                : 'text-primary bg-primary-container'
            }`}
          >
            {options.find((o) => o.val === value)?.label[language]}
          </span>
        ) : (
          <span className="text-xs text-outline italic">
            {language === 'id'
              ? 'Pilih salah satu lingkaran (atau tekan angka 1-5 di keyboard)'
              : 'Select an option (or press keys 1-5 on your keyboard)'}
          </span>
        )}
      </div>
    </div>
  );
};
