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
      shortLabel: '1',
      label: { id: 'Sangat Tidak Setuju', en: 'Strongly Disagree' },
      colorClass: 'text-error',
      bgActiveClass: 'bg-error text-on-error',
      size: 'w-11 h-11 md:w-13 md:h-13',
    },
    {
      val: 2,
      shortLabel: '2',
      label: { id: 'Tidak Setuju', en: 'Disagree' },
      colorClass: 'text-error/80',
      bgActiveClass: 'bg-error/80 text-white',
      size: 'w-9 h-9 md:w-11 md:h-11',
    },
    {
      val: 3,
      shortLabel: '3',
      label: { id: 'Netral', en: 'Neutral' },
      colorClass: 'text-outline',
      bgActiveClass: 'bg-secondary text-on-secondary',
      size: 'w-8 h-8 md:w-10 md:h-10',
    },
    {
      val: 4,
      shortLabel: '4',
      label: { id: 'Setuju', en: 'Agree' },
      colorClass: 'text-primary/80',
      bgActiveClass: 'bg-primary/80 text-on-primary',
      size: 'w-9 h-9 md:w-11 md:h-11',
    },
    {
      val: 5,
      shortLabel: '5',
      label: { id: 'Sangat Setuju', en: 'Strongly Agree' },
      colorClass: 'text-primary',
      bgActiveClass: 'bg-primary text-on-primary',
      size: 'w-11 h-11 md:w-13 md:h-13',
    },
  ];

  return (
    <div className="w-full py-4 select-none">
      {/* Labels for ends */}
      <div className="flex justify-between items-center text-xs font-semibold uppercase tracking-wider mb-4 px-2">
        <span className="text-error/90 flex items-center gap-1">
          <span className="material-symbols-outlined text-[16px]">close</span>
          {language === 'id' ? 'Sangat Tidak Setuju' : 'Strongly Disagree'}
        </span>
        <span className="text-primary flex items-center gap-1">
          {language === 'id' ? 'Sangat Setuju' : 'Strongly Agree'}
          <span className="material-symbols-outlined text-[16px]">check</span>
        </span>
      </div>

      {/* Segmented / Circular option row */}
      <div className="relative flex items-center justify-between px-2 md:px-6">
        {/* Connecting track line */}
        <div className="absolute left-8 right-8 top-1/2 -translate-y-1/2 h-1 bg-surface-container-highest -z-0 rounded-full" />

        {options.map((opt) => {
          const isSelected = value === opt.val;
          return (
            <button
              key={opt.val}
              type="button"
              disabled={disabled}
              onClick={() => onChange(opt.val)}
              title={opt.label[language]}
              className={`relative z-10 flex flex-col items-center justify-center rounded-full transition-all duration-200 cursor-pointer ${
                opt.size
              } ${
                isSelected
                  ? `${opt.bgActiveClass} scale-110 shadow-lg ring-4 ring-surface-container-high`
                  : 'bg-surface-container-high text-on-surface-variant hover:scale-105 border-2 border-outline-variant hover:border-outline'
              }`}
            >
              <span className="font-bold text-sm md:text-base">{opt.val}</span>
            </button>
          );
        })}
      </div>

      {/* Text feedback indicator */}
      <div className="h-6 mt-4 text-center">
        {value ? (
          <span className="inline-block text-xs md:text-sm font-medium text-on-surface bg-surface-container-high px-3 py-0.5 rounded-full animate-fade-in">
            {options.find((o) => o.val === value)?.label[language]}
          </span>
        ) : (
          <span className="text-xs text-outline italic">
            {language === 'id' ? 'Pilih salah satu skala (atau tekan angka 1-5 di keyboard)' : 'Select a scale (or press keys 1-5 on your keyboard)'}
          </span>
        )}
      </div>
    </div>
  );
};
