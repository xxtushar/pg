import React, { useState } from 'react';
import { Wifi, Signal, Battery, Smartphone, Monitor } from 'lucide-react';

interface PhoneContainerProps {
  children: React.ReactNode;
}

export const PhoneContainer: React.FC<PhoneContainerProps> = ({ children }) => {
  const [isMobileFrame, setIsMobileFrame] = useState<boolean>(true);

  return (
    <div className="min-h-screen bg-slate-200 py-4 sm:py-8 px-2 sm:px-4 flex flex-col items-center justify-start selection:bg-blue-100">
      {/* View Mode Toggle Controls */}
      <div className="mb-4 bg-white/80 backdrop-blur border border-slate-300 rounded-full p-1 shadow-sm flex items-center gap-1 z-30">
        <button
          onClick={() => setIsMobileFrame(true)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
            isMobileFrame
              ? 'bg-blue-600 text-white shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Smartphone className="w-3.5 h-3.5" />
          <span>Mobile Mockup</span>
        </button>
        <button
          onClick={() => setIsMobileFrame(false)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
            !isMobileFrame
              ? 'bg-blue-600 text-white shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Monitor className="w-3.5 h-3.5" />
          <span>Full Width</span>
        </button>
      </div>

      {isMobileFrame ? (
        /* Realistic iPhone 16 Pro Style Device Frame */
        <div className="relative w-full max-w-[420px] bg-slate-950 rounded-[50px] p-3 shadow-2xl border-4 border-slate-800 ring-1 ring-slate-900/50 transition-all duration-300">
          {/* Outer Side Buttons (Aesthetic details) */}
          <div className="absolute -left-4 top-28 w-1 h-12 bg-slate-700 rounded-l-md" />
          <div className="absolute -left-4 top-44 w-1 h-12 bg-slate-700 rounded-l-md" />
          <div className="absolute -right-4 top-36 w-1 h-16 bg-slate-700 rounded-r-md" />

          {/* Screen Wrapper */}
          <div className="relative bg-white rounded-[40px] overflow-hidden min-h-[850px] flex flex-col shadow-inner">
            {/* Status Bar */}
            <div className="bg-white pt-2.5 px-7 pb-1 flex items-center justify-between text-slate-900 select-none z-30">
              <span className="text-xs font-bold tracking-tight">9:41</span>
              
              {/* Dynamic Island Pill */}
              <div className="absolute left-1/2 -translate-x-1/2 top-2.5 w-24 h-5 bg-black rounded-full flex items-center justify-end px-2 gap-1.5 z-40">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-800" />
                <div className="w-1.5 h-1.5 rounded-full bg-blue-900/80 animate-pulse" />
              </div>

              <div className="flex items-center gap-1.5 text-slate-800">
                <Signal className="w-3.5 h-3.5 fill-current stroke-none" />
                <Wifi className="w-3.5 h-3.5 stroke-[2.5]" />
                <Battery className="w-4 h-4 stroke-[2]" />
              </div>
            </div>

            {/* Application Viewport */}
            <div className="flex-1 flex flex-col overflow-y-auto no-scrollbar relative bg-white">
              {children}
            </div>

            {/* iPhone Home Indicator Bar */}
            <div className="bg-white pb-2 pt-1 flex justify-center items-center z-30">
              <div className="w-32 h-1 bg-slate-900 rounded-full" />
            </div>
          </div>
        </div>
      ) : (
        /* Full Desktop Mode Wrapper */
        <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden min-h-[800px] flex flex-col">
          <div className="bg-slate-900 text-white px-4 py-2 text-xs flex items-center justify-between">
            <span className="font-semibold text-blue-400">MyPG Resident Web Dashboard</span>
            <span className="text-slate-400">Responsive View</span>
          </div>
          <div className="flex-1 flex flex-col overflow-y-auto">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};
