import React from 'react';

interface AppShellProps {
  children: React.ReactNode;
}

/**
 * Sizes itself purely from the real viewport, no manual mode switch:
 *  - phone (< sm):  fills the screen edge-to-edge, safe-area aware
 *  - tablet (sm–lg): centers into a mobile-app-width card
 *  - laptop+ (lg+):  full-bleed content column next to the sidebar —
 *                     a real website, not a stretched phone screen
 */
export const AppShell: React.FC<AppShellProps> = ({ children }) => {
  return (
    <div className="flex min-h-dvh flex-1 justify-center bg-slate-200 sm:items-start sm:py-8 lg:items-stretch lg:justify-start lg:bg-white lg:py-0">
      <div
        className="flex h-dvh w-full max-w-[480px] flex-col overflow-y-auto no-scrollbar bg-white sm:h-[min(900px,calc(100dvh-4rem))] sm:rounded-[28px] sm:border sm:border-slate-300 sm:shadow-2xl lg:h-dvh lg:max-w-none lg:rounded-none lg:border-0 lg:shadow-none"
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
