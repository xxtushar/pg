import React from 'react';
import { X, Calendar, Clock, Users, Megaphone, Share2, CheckCircle } from 'lucide-react';
import { Announcement } from '../types';

interface AnnouncementDetailModalProps {
  announcement: Announcement | null;
  onClose: () => void;
}

export const AnnouncementDetailModal: React.FC<AnnouncementDetailModalProps> = ({
  announcement,
  onClose
}) => {
  const [acknowledged, setAcknowledged] = React.useState(false);

  if (!announcement) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="fixed inset-0"
        onClick={onClose}
      />
      <div className="relative w-full max-w-md bg-white rounded-t-3xl sm:rounded-3xl p-5 shadow-2xl z-10 space-y-4 max-h-[85vh] overflow-y-auto no-scrollbar animate-in slide-in-from-bottom duration-250">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-blue-50 text-blue-600">
              <Megaphone className="w-5 h-5" />
            </span>
            <span className="text-xs font-bold uppercase text-blue-600 tracking-wider">
              {announcement.category} Announcement
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 bg-slate-100 rounded-full transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Title */}
        <h3 className="text-lg font-extrabold text-slate-900 leading-tight">
          {announcement.title}
        </h3>

        {/* Meta Pills */}
        <div className="flex flex-wrap gap-2 text-[11px] font-semibold text-slate-500">
          <span className="flex items-center gap-1 bg-slate-100 px-2.5 py-1 rounded-lg">
            <Calendar className="w-3.5 h-3.5 text-slate-400" />
            {announcement.date}
          </span>
          <span className="flex items-center gap-1 bg-slate-100 px-2.5 py-1 rounded-lg">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            {announcement.time}
          </span>
          <span className="flex items-center gap-1 bg-slate-100 px-2.5 py-1 rounded-lg">
            <Users className="w-3.5 h-3.5 text-slate-400" />
            {announcement.audience}
          </span>
        </div>

        {/* Divider */}
        <div className="h-px bg-slate-100 w-full" />

        {/* Body Content */}
        <div className="text-xs text-slate-600 leading-relaxed space-y-2 font-normal">
          <p>{announcement.fullContent}</p>
          <p className="text-slate-400 text-[11px]">
            For urgent concerns or questions regarding this announcement, please contact your resident PG Manager through the support page.
          </p>
        </div>

        {/* Actions */}
        <div className="pt-2 flex items-center gap-2">
          <button
            onClick={() => setAcknowledged(!acknowledged)}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold transition-all active-press ${
              acknowledged
                ? 'bg-emerald-100 text-emerald-700 border border-emerald-200'
                : 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm'
            }`}
          >
            <CheckCircle className="w-4 h-4" />
            <span>{acknowledged ? 'Acknowledged' : 'Mark as Read'}</span>
          </button>

          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({ title: announcement.title, text: announcement.fullContent });
              } else {
                alert('Announcement copied to clipboard!');
              }
            }}
            className="p-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl transition-all"
            title="Share"
          >
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
