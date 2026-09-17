import React from 'react';
import { X, Bell, Droplet, Sparkles, Wrench } from 'lucide-react';

interface NotificationsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onClearNotifications: () => void;
}

export const NotificationsDrawer: React.FC<NotificationsDrawerProps> = ({
  isOpen,
  onClose,
  onClearNotifications
}) => {
  if (!isOpen) return null;

  const notifications = [
    {
      id: 'n1',
      title: 'Water Supply Interruption',
      desc: 'Scheduled water tank cleaning tomorrow morning 10 AM',
      time: '10 mins ago',
      unread: true,
      icon: <Droplet className="w-4 h-4 text-blue-600" />,
      bgColor: 'bg-blue-50'
    },
    {
      id: 'n2',
      title: 'Ganesh Chaturthi Event',
      desc: 'Puja starts at 5:00 PM today in main dining hall',
      time: '2 hours ago',
      unread: true,
      icon: <Sparkles className="w-4 h-4 text-orange-500" />,
      bgColor: 'bg-orange-50'
    },
    {
      id: 'n3',
      title: 'Ticket #TCK-8921 Updated',
      desc: 'Plumber Rakesh assigned to your tap repair request',
      time: 'Yesterday',
      unread: true,
      icon: <Wrench className="w-4 h-4 text-emerald-600" />,
      bgColor: 'bg-emerald-50'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-2 sm:p-4 bg-slate-900/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="fixed inset-0" onClick={onClose} />
      <div className="relative w-full max-w-md bg-white rounded-2xl p-4 shadow-2xl z-10 space-y-3 mt-12 animate-in slide-in-from-top duration-250 border border-slate-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bell className="w-5 h-5 text-blue-600" />
            <h3 className="text-sm font-bold text-slate-900">Notifications</h3>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-rose-500 text-white">
              {notifications.length}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClearNotifications}
              className="text-[11px] font-bold text-blue-600 hover:text-blue-700 hover:underline"
            >
              Clear All
            </button>
            <button
              onClick={onClose}
              className="p-1 text-slate-400 hover:text-slate-700 bg-slate-100 rounded-full"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="space-y-2 max-h-[60vh] overflow-y-auto no-scrollbar">
          {notifications.map((n) => (
            <div
              key={n.id}
              className={`p-3 rounded-xl border flex items-start gap-3 transition-colors ${
                n.unread ? 'bg-blue-50/40 border-blue-100' : 'bg-white border-slate-100'
              }`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${n.bgColor}`}>
                {n.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1 mb-0.5">
                  <h4 className="text-xs font-bold text-slate-900 truncate">{n.title}</h4>
                  <span className="text-[10px] text-slate-400 shrink-0">{n.time}</span>
                </div>
                <p className="text-[11px] text-slate-500 leading-tight">{n.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
