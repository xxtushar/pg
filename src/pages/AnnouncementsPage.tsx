import React, { useState } from 'react';
import {
  Megaphone,
  AlertCircle,
  Calendar,
  Droplet,
  Broom,
  Sparkles,
  Zap,
  User,
  ChevronRight,
  Headphones,
  MessageSquare
} from 'lucide-react';
import { Announcement, CategoryFilter, AnnouncementBadgeType } from '../types';

interface AnnouncementsPageProps {
  announcements: Announcement[];
  onSelectAnnouncement: (announcement: Announcement) => void;
  onContactManager: () => void;
}

export const AnnouncementsPage: React.FC<AnnouncementsPageProps> = ({
  announcements,
  onSelectAnnouncement,
  onContactManager
}) => {
  const [selectedFilter, setSelectedFilter] = useState<CategoryFilter>('All');

  // Filter announcements based on selected tag
  const filteredAnnouncements = announcements.filter((item) => {
    if (selectedFilter === 'All') return true;
    return item.category === selectedFilter;
  });

  // Calculate dynamic stats
  const newCount = announcements.filter((a) => a.badge === 'New').length;
  const importantCount = announcements.filter(
    (a) => a.badge === 'Important' || a.category === 'Important'
  ).length;
  const totalThisWeek = announcements.length;

  // Helper for rendering badges with colors from screenshot
  const renderBadge = (badge: AnnouncementBadgeType) => {
    switch (badge) {
      case 'New':
        return (
          <span className="px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-blue-50 text-blue-600 border border-blue-100">
            New
          </span>
        );
      case 'Scheduled':
        return (
          <span className="px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-emerald-50 text-emerald-600 border border-emerald-100">
            Scheduled
          </span>
        );
      case 'Important':
        return (
          <span className="px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-orange-50 text-orange-600 border border-orange-100">
            Important
          </span>
        );
      case 'General':
        return (
          <span className="px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-purple-50 text-purple-600 border border-purple-100">
            General
          </span>
        );
      case 'Read':
        return (
          <span className="px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-slate-100 text-slate-500 border border-slate-200">
            Read
          </span>
        );
    }
  };

  // Helper for rendering announcement icon
  const renderAnnouncementIcon = (iconType: Announcement['iconType']) => {
    switch (iconType) {
      case 'droplet':
        return (
          <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
            <Droplet className="w-6 h-6 text-blue-600 fill-blue-600" />
          </div>
        );
      case 'cleaning':
        return (
          <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
            <Broom className="w-6 h-6 text-emerald-600" />
          </div>
        );
      case 'festival':
        return (
          <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center shrink-0">
            <Sparkles className="w-6 h-6 text-orange-500 fill-orange-500" />
          </div>
        );
      case 'electricity':
        return (
          <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center shrink-0">
            <Zap className="w-6 h-6 text-purple-600 fill-purple-600" />
          </div>
        );
      case 'guest':
        return (
          <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
            <User className="w-6 h-6 text-emerald-600 fill-emerald-600" />
          </div>
        );
    }
  };

  return (
    <div className="p-4 space-y-4 bg-slate-50/50 min-h-full pb-6">
      {/* 1. Filter Chips Row */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
        {/* All Pill */}
        <button
          onClick={() => setSelectedFilter('All')}
          className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all active-press border ${
            selectedFilter === 'All'
              ? 'border-blue-600 text-blue-600 bg-blue-50/60 shadow-sm'
              : 'border-slate-200 text-slate-600 bg-white hover:bg-slate-50'
          }`}
        >
          All
        </button>

        {/* Important Pill */}
        <button
          onClick={() => setSelectedFilter('Important')}
          className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all active-press border ${
            selectedFilter === 'Important'
              ? 'border-orange-500 text-orange-600 bg-orange-50/60 shadow-sm'
              : 'border-slate-200 text-slate-600 bg-white hover:bg-slate-50'
          }`}
        >
          <span className="w-4 h-4 rounded-full bg-orange-500 text-white flex items-center justify-center text-[10px] font-bold">
            !
          </span>
          <span>Important</span>
        </button>

        {/* Utilities Pill */}
        <button
          onClick={() => setSelectedFilter('Utilities')}
          className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all active-press border ${
            selectedFilter === 'Utilities'
              ? 'border-blue-500 text-blue-600 bg-blue-50/60 shadow-sm'
              : 'border-slate-200 text-slate-600 bg-white hover:bg-slate-50'
          }`}
        >
          <Droplet className="w-3.5 h-3.5 text-blue-500 fill-blue-500" />
          <span>Utilities</span>
        </button>

        {/* Events Pill */}
        <button
          onClick={() => setSelectedFilter('Events')}
          className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all active-press border ${
            selectedFilter === 'Events'
              ? 'border-purple-500 text-purple-600 bg-purple-50/60 shadow-sm'
              : 'border-slate-200 text-slate-600 bg-white hover:bg-slate-50'
          }`}
        >
          <Calendar className="w-3.5 h-3.5 text-purple-500" />
          <span>Events</span>
        </button>
      </div>

      {/* 2. Summary Metric Cards Row */}
      <div className="grid grid-cols-3 gap-2.5">
        {/* Metric 1: New */}
        <div className="bg-white p-3 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
            <Megaphone className="w-4 h-4 text-blue-600" />
          </div>
          <div>
            <div className="text-[11px] font-semibold text-slate-500 leading-none mb-1">
              New
            </div>
            <div className="text-lg font-bold text-blue-600 leading-none">
              {newCount}
            </div>
          </div>
        </div>

        {/* Metric 2: Important */}
        <div className="bg-white p-3 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-full bg-orange-50 flex items-center justify-center shrink-0">
            <AlertCircle className="w-4 h-4 text-orange-500 fill-orange-500 text-white" />
          </div>
          <div>
            <div className="text-[11px] font-semibold text-slate-500 leading-none mb-1">
              Important
            </div>
            <div className="text-lg font-bold text-orange-600 leading-none">
              {importantCount}
            </div>
          </div>
        </div>

        {/* Metric 3: This Week */}
        <div className="bg-white p-3 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
            <Calendar className="w-4 h-4 text-emerald-600" />
          </div>
          <div>
            <div className="text-[11px] font-semibold text-slate-500 leading-none mb-1">
              This Week
            </div>
            <div className="text-lg font-bold text-emerald-600 leading-none">
              {totalThisWeek}
            </div>
          </div>
        </div>
      </div>

      {/* 3. Announcements Card List */}
      <div className="space-y-3">
        {filteredAnnouncements.map((item) => (
          <div
            key={item.id}
            onClick={() => onSelectAnnouncement(item)}
            className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md transition-all cursor-pointer active-press group"
          >
            <div className="flex items-start gap-3.5">
              {renderAnnouncementIcon(item.iconType)}

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="text-xs font-bold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  {renderBadge(item.badge)}
                </div>

                <p className="text-[11px] font-semibold text-slate-400 mb-1.5">
                  {item.date} • {item.time} • {item.audience}
                </p>

                <p className="text-xs text-slate-500 font-normal leading-relaxed line-clamp-1">
                  {item.snippet}
                </p>
              </div>

              <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors self-center shrink-0" />
            </div>
          </div>
        ))}
      </div>

      {/* 4. Need Help? Contact Manager CTA Banner */}
      <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm flex items-center justify-between gap-3 mt-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
            <Headphones className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-900 leading-tight">
              Need Help?
            </h4>
            <p className="text-[11px] font-medium text-slate-400">
              Have questions about an announcement?
            </p>
          </div>
        </div>

        <button
          onClick={onContactManager}
          className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-blue-600 text-blue-600 text-xs font-bold hover:bg-blue-50 transition-all active-press shrink-0"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Contact Manager</span>
        </button>
      </div>
    </div>
  );
};
