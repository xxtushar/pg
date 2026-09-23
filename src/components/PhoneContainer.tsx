import React from 'react';

interface PhoneContainerProps {
  children: React.ReactNode;
}

/**
 * Fills the real viewport edge-to-edge on a phone (with safe-area padding
 * for notches/home indicators). On a wider viewport it centers into a
 * mobile-app-width column instead of stretching full width. Both happen
 * purely from CSS breakpoints/env() — no manual "mobile vs desktop" toggle.
 */
export const PhoneContainer: React.FC<PhoneContainerProps> = ({ children }) => {
  return (
    <div className="flex min-h-dvh justify-center bg-slate-200 sm:items-start sm:py-8">
      <div
        className="flex h-dvh w-full max-w-[480px] flex-col overflow-y-auto no-scrollbar bg-white sm:h-[min(900px,calc(100dvh-4rem))] sm:rounded-[28px] sm:border sm:border-slate-300 sm:shadow-2xl"
        style={{
          paddingTop: 'env(safe-area-inset-top)',
          paddingBottom: 'env(safe-area-inset-bottom)',
        }}
      >
        {children}
      </div>
    </div>
  );
};
