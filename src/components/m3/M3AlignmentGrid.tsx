import React from 'react';
import type { AlignmentResult, Language } from '../../types';

interface M3AlignmentGridProps {
  result?: AlignmentResult;
  language: Language;
  interactive?: boolean;
  onSelectAlignment?: (alignmentName: string) => void;
}

export const M3AlignmentGrid: React.FC<M3AlignmentGridProps> = ({
  result,
  language,
  interactive = false,
  onSelectAlignment,
}) => {
  const currentAlignment = result?.alignment || '';

  const cells = [
    { key: 'Lawful Good', idLabel: 'Lawful Good', desc: { id: 'Pejuang Kebajikan Tertib', en: 'Orderly Crusader' }, color: 'text-blue-600 dark:text-blue-400 bg-blue-500/10' },
    { key: 'Neutral Good', idLabel: 'Neutral Good', desc: { id: 'Dermawan Murni', en: 'Pure Benefactor' }, color: 'text-emerald-600 dark:text-emerald-400 bg-emerald-500/10' },
    { key: 'Chaotic Good', idLabel: 'Chaotic Good', desc: { id: 'Pemberontak Berhati Mulia', en: 'Rebel with a Cause' }, color: 'text-cyan-600 dark:text-cyan-400 bg-cyan-500/10' },
    { key: 'Lawful Neutral', idLabel: 'Lawful Neutral', desc: { id: 'Penegak Hukum Adil', en: 'Judicial Arbiter' }, color: 'text-indigo-600 dark:text-indigo-400 bg-indigo-500/10' },
    { key: 'True Neutral', idLabel: 'True Neutral', desc: { id: 'Penyeimbang Alami', en: 'Undivided Pragmatist' }, color: 'text-slate-600 dark:text-slate-400 bg-slate-500/10' },
    { key: 'Chaotic Neutral', idLabel: 'Chaotic Neutral', desc: { id: 'Jiwa Bebas Tanpa Batas', en: 'Free Spirit Individualist' }, color: 'text-amber-600 dark:text-amber-400 bg-amber-500/10' },
    { key: 'Lawful Evil', idLabel: 'Lawful Evil', desc: { id: 'Penguasa Tirani Tertib', en: 'Systemic Dominator' }, color: 'text-purple-600 dark:text-purple-400 bg-purple-500/10' },
    { key: 'Neutral Evil', idLabel: 'Neutral Evil', desc: { id: 'Oportunis Egois Dingin', en: 'Pure Self-Server' }, color: 'text-rose-600 dark:text-rose-400 bg-rose-500/10' },
    { key: 'Chaotic Evil', idLabel: 'Chaotic Evil', desc: { id: 'Penghancur Anarkis', en: 'Destructive Anarchist' }, color: 'text-red-700 dark:text-red-400 bg-red-500/10' },
  ];

  // Normalized coordinate for dot placement:
  // orderScore: -100 (Chaotic, right) to +100 (Lawful, left)
  // moralityScore: -100 (Evil, bottom) to +100 (Good, top)
  const orderX = result ? 50 - (result.orderScore / 100) * 40 : 50;
  const moralY = result ? 50 - (result.moralityScore / 100) * 40 : 50;

  return (
    <div className="space-y-4">
      <div className="relative rounded-m3-lg border border-outline-variant p-3 md:p-4 bg-surface-container">
        {/* Grid labels */}
        <div className="grid grid-cols-3 gap-2 relative">
          {cells.map((cell) => {
            const isMatch = currentAlignment.toLowerCase() === cell.key.toLowerCase();
            return (
              <div
                key={cell.key}
                onClick={() => interactive && onSelectAlignment?.(cell.key)}
                className={`p-3 rounded-m3-md border text-center transition-all relative select-none ${
                  isMatch
                    ? 'border-primary ring-2 ring-primary/40 bg-primary-container/30 shadow-xs'
                    : 'border-outline-variant/60 bg-surface-container-low hover:bg-surface-container-high'
                } ${interactive ? 'cursor-pointer' : ''}`}
              >
                {isMatch && (
                  <span className="absolute -top-2 -right-1 bg-primary text-on-primary text-[9px] font-black uppercase px-1.5 py-0.5 rounded-full shadow-xs">
                    YOU
                  </span>
                )}
                <div className={`text-xs md:text-sm font-black ${isMatch ? 'text-primary' : 'text-on-surface'}`}>
                  {cell.key}
                </div>
                <div className="text-[10px] text-on-surface-variant line-clamp-1 mt-0.5">
                  {cell.desc[language]}
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Coordinate Marker if scores exist */}
        {result && (
          <div className="mt-4 pt-3 border-t border-outline-variant/60 flex items-center justify-between text-xs text-on-surface-variant">
            <span>
              {language === 'id' ? 'Keteraturan (Order): ' : 'Order Axis: '}
              <strong className="text-on-surface">{result.orderScore > 0 ? `+${result.orderScore}` : result.orderScore}</strong> ({result.orderLabel[language]})
            </span>
            <span>
              {language === 'id' ? 'Moralitas (Morality): ' : 'Morality Axis: '}
              <strong className="text-on-surface">{result.moralityScore > 0 ? `+${result.moralityScore}` : result.moralityScore}</strong> ({result.moralityLabel[language]})
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
