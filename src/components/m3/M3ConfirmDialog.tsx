import React from 'react';
import { M3Button } from './M3Button';

interface M3ConfirmDialogProps {
  isOpen: boolean;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  isDestructive?: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export const M3ConfirmDialog: React.FC<M3ConfirmDialogProps> = ({
  isOpen,
  title,
  message,
  confirmText = 'Konfirmasi',
  cancelText = 'Batal',
  isDestructive = false,
  onConfirm,
  onCancel,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fade-in">
      <div
        className="w-full max-w-md bg-surface-container-high rounded-m3-xl p-6 shadow-xl border border-outline-variant transform transition-all animate-scale-up"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center gap-3 mb-3">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
              isDestructive
                ? 'bg-error-container text-on-error-container'
                : 'bg-primary-container text-on-primary-container'
            }`}
          >
            <span className="material-symbols-outlined text-[24px]">
              {isDestructive ? 'warning' : 'help_outline'}
            </span>
          </div>
          <h3 className="text-lg font-bold text-on-surface">{title}</h3>
        </div>

        <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">
          {message}
        </p>

        <div className="flex items-center justify-end gap-3">
          <M3Button variant="text" size="md" onClick={onCancel}>
            {cancelText}
          </M3Button>
          <M3Button
            variant="filled"
            size="md"
            className={isDestructive ? 'bg-error! text-on-error! hover:bg-error/90!' : ''}
            onClick={onConfirm}
          >
            {confirmText}
          </M3Button>
        </div>
      </div>
    </div>
  );
};
