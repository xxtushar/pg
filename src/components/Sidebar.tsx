import React from 'react';
import { LogOut, User as UserIcon } from 'lucide-react';
import { TabType, UserProfile } from '../types';
import { NAV_TABS } from '../data/navTabs';

interface SidebarProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
  user: UserProfile;
  onLogout: () => void;
}

/**
 * Desktop-only replacement for the bottom tab bar — a real website's
 * left-hand nav instead of a stretched-out mobile control. Hidden below
 * the `lg` breakpoint, where BottomNav takes over instead.
 */
export const Sidebar: React.FC<SidebarProps> = ({ activeTab, onTabChange, user, onLogout }) => {
  return (
    <aside className="hidden lg:flex lg:w-64 lg:shrink-0 lg:flex-col lg:border-r lg:border-slate-200 lg:bg-white">
      <div className="flex h-16 items-center px-6">
        <span className="text-[20px] font-extrabold text-blue-600 tracking-tight">MyPG</span>
      </div>

      <nav className="flex-1 space-y-1 px-3 py-2">
        {NAV_TABS.map(({ id, label, Icon }) => {
          const isActive = activeTab === id;
          return (
            <button
              key={id}
              onClick={() => onTabChange(id)}
              className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition-colors ${
                isActive
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800'
              }`}
            >
              <Icon className="w-[18px] h-[18px] stroke-[1.8]" />
              {label}
            </button>
          );
        })}
      </nav>

      <div className="border-t border-slate-100 p-3">
        <div className="flex items-center gap-3 rounded-xl px-3 py-2.5">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
            <UserIcon className="w-4 h-4" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-xs font-bold text-slate-900">{user.name}</p>
            <p className="truncate text-[11px] text-slate-400">
              Room {user.roomNumber} ({user.bedNumber})
            </p>
          </div>
          <button
            onClick={onLogout}
            aria-label="Log out"
            className="rounded-lg p-1.5 text-slate-400 hover:bg-rose-50 hover:text-rose-600"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
};
