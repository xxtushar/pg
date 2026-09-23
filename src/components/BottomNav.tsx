import React from 'react';
import { TabType } from '../types';
import { NAV_TABS } from '../data/navTabs';

interface BottomNavProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onTabChange }) => {
  return (
    <nav className="sticky bottom-0 bg-white border-t border-slate-100 px-3 py-2 z-20 shadow-[0_-4px_12px_rgba(0,0,0,0.03)] lg:hidden">
      <div className="flex items-center justify-around max-w-md mx-auto">
        {NAV_TABS.map(({ id, label, Icon }) => {
          const isActive = activeTab === id;
          return (
            <button
              key={id}
              onClick={() => onTabChange(id)}
              className={`flex flex-col items-center justify-center py-1 px-2 rounded-xl transition-all duration-150 active-press ${
                isActive
                  ? 'text-blue-600 font-bold'
                  : 'text-slate-400 hover:text-slate-600 font-medium'
              }`}
            >
              <div className="relative">
                <Icon className={`w-6 h-6 stroke-[1.8] ${isActive ? 'scale-105' : ''}`} />
              </div>
              <span className="text-[11px] mt-1 tracking-tight leading-none">{label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
