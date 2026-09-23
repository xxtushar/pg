import React from 'react';
import { Bell, ChevronDown } from 'lucide-react';
import { mockProperties } from '../data/mockData';

interface HeaderProps {
  title: string;
  selectedProperty: string;
  onSelectProperty: (propertyName: string) => void;
  onOpenNotifications: () => void;
  notificationCount?: number;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  selectedProperty,
  onSelectProperty,
  onOpenNotifications,
  notificationCount = 3
}) => {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  return (
    <header className="px-5 pt-4 pb-2 bg-white sticky top-0 z-20 border-b border-slate-100 lg:px-8 lg:pt-6 lg:pb-4">
      {/* Top Bar: Brand Logo & Notification Bell (logo hidden on desktop — the sidebar already brands it) */}
      <div className="flex items-center justify-between mb-3 lg:hidden">
        <h1 className="text-[26px] font-extrabold text-blue-600 tracking-tight leading-none">
          MyPG
        </h1>
        <NotificationBell onOpen={onOpenNotifications} count={notificationCount} />
      </div>

      {/* Title & Property Selector Row */}
      <div className="flex items-center justify-between gap-2">
        <h2 className="text-[22px] font-bold text-slate-900 tracking-tight leading-tight lg:text-[26px]">
          {title}
        </h2>

        {/* Dropdown Selector */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-all active-press"
          >
            <span>{selectedProperty}</span>
            <ChevronDown className={`w-3.5 h-3.5 text-slate-500 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
          </button>

          {dropdownOpen && (
            <>
              <div
                className="fixed inset-0 z-30"
                onClick={() => setDropdownOpen(false)}
              />
              <div className="absolute right-0 mt-1.5 w-44 bg-white rounded-xl shadow-lg border border-slate-100 py-1.5 z-40 animate-in fade-in zoom-in-95 duration-150">
                <div className="px-3 py-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Select PG Property
                </div>
                {mockProperties.map((prop) => (
                  <button
                    key={prop.id}
                    onClick={() => {
                      onSelectProperty(prop.name);
                      setDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 text-xs font-medium flex flex-col transition-colors ${
                      selectedProperty === prop.name
                        ? 'bg-blue-50 text-blue-600 font-semibold'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <span>{prop.name}</span>
                    <span className="text-[10px] text-slate-400 font-normal">{prop.location}</span>
                  </button>
                ))}
              </div>
            </>
          )}
        </div>

        {/* On desktop the top bar (with the bell) is hidden, so show it here instead */}
        <div className="hidden lg:block">
          <NotificationBell onOpen={onOpenNotifications} count={notificationCount} />
        </div>
      </div>
    </header>
  );
};

function NotificationBell({ onOpen, count }: { onOpen: () => void; count: number }) {
  return (
    <button
      onClick={onOpen}
      className="relative p-2 text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-full transition-colors active-press"
      aria-label="Notifications"
    >
      <Bell className="w-6 h-6 stroke-[1.8]" />
      {count > 0 && (
        <span className="absolute top-1 right-1 bg-rose-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border-2 border-white">
          {count}
        </span>
      )}
    </button>
  );
}
