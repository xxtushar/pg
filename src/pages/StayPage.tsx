import React, { useState } from 'react';
import { Bed, Wifi, Copy, Check, Users, Sparkles, Tv, Wind, Coffee } from 'lucide-react';
import { UserProfile } from '../types';

interface StayPageProps {
  user: UserProfile;
}

export const StayPage: React.FC<StayPageProps> = ({ user }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyWifi = () => {
    navigator.clipboard.writeText('HamsaPG_Guest@5G');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="p-4 space-y-4 bg-slate-50/50 min-h-full pb-6">
      {/* Room Overview Card */}
      <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Bed className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">Room {user.roomNumber} ({user.bedNumber})</h3>
              <p className="text-[11px] font-medium text-slate-400">1st Floor • Executive 3-Sharing AC</p>
            </div>
          </div>
          <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-600">
            Occupied
          </span>
        </div>

        {/* Wi-Fi Details Widget */}
        <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Wifi className="w-4 h-4 text-blue-600" />
            <div>
              <div className="text-[10px] font-bold text-slate-400 uppercase">Room Wi-Fi</div>
              <div className="text-xs font-bold text-slate-800">HamsaPG_Guest@5G</div>
            </div>
          </div>
          <button
            onClick={handleCopyWifi}
            className="flex items-center gap-1 px-2.5 py-1 bg-white border border-slate-200 rounded-lg text-[11px] font-bold text-slate-700 hover:bg-slate-100 transition-all active-press"
          >
            {copied ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
            <span>{copied ? 'Copied' : 'Copy'}</span>
          </button>
        </div>
      </div>

      {/* Roommates Card */}
      <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-purple-600" />
            <h3 className="text-xs font-bold text-slate-900">Your Roommates</h3>
          </div>
          <span className="text-[11px] font-semibold text-slate-400">2 / 3 Occupied</span>
        </div>

        <div className="space-y-2.5">
          <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50/70 border border-slate-100">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-700 font-bold text-xs flex items-center justify-center">
                AK
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">Amit Kumar</h4>
                <p className="text-[10px] text-slate-400">Bed B • Software Engineer</p>
              </div>
            </div>
            <span className="text-[10px] font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">In Room</span>
          </div>

          <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50/70 border border-slate-100">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center">
                VS
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">Vikram Singh</h4>
                <p className="text-[10px] text-slate-400">Bed C • Student</p>
              </div>
            </div>
            <span className="text-[10px] font-medium text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">Out</span>
          </div>
        </div>
      </div>

      {/* Included Amenities Grid */}
      <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm space-y-3">
        <h3 className="text-xs font-bold text-slate-900">Room Amenities</h3>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 text-xs font-semibold text-slate-700">
            <Wind className="w-4 h-4 text-blue-500" /> Split AC Included
          </div>
          <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 text-xs font-semibold text-slate-700">
            <Sparkles className="w-4 h-4 text-emerald-500" /> Daily Housekeeping
          </div>
          <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 text-xs font-semibold text-slate-700">
            <Coffee className="w-4 h-4 text-orange-500" /> 3 Times Meals
          </div>
          <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 text-xs font-semibold text-slate-700">
            <Tv className="w-4 h-4 text-purple-500" /> Common TV Lounge
          </div>
        </div>
      </div>
    </div>
  );
};
