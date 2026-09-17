import React from 'react';
import { CreditCard, Utensils, ArrowRight, CheckCircle2, Megaphone } from 'lucide-react';
import { UserProfile } from '../types';

interface HomePageProps {
  user: UserProfile;
  onNavigateTab: (tab: any) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ user, onNavigateTab }) => {
  return (
    <div className="p-4 space-y-4 bg-slate-50/50 min-h-full pb-6">
      {/* Greeting Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-4 shadow-md">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold text-blue-100 uppercase tracking-wider">
              Welcome Back
            </span>
            <h2 className="text-xl font-bold tracking-tight mt-0.5">
              Hello, {user.name.split(' ')[0]} 👋
            </h2>
            <p className="text-xs text-blue-100 mt-1">
              {user.pgName} • Room {user.roomNumber} ({user.bedNumber})
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/20 text-center">
            <span className="block text-[10px] font-semibold uppercase text-blue-100">Status</span>
            <span className="text-xs font-bold text-emerald-300 flex items-center gap-1 mt-0.5">
              <CheckCircle2 className="w-3.5 h-3.5" /> Verified
            </span>
          </div>
        </div>
      </div>

      {/* Rent Due Card */}
      <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <CreditCard className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-900">September Rent Paid</h4>
            <p className="text-[11px] font-medium text-emerald-600">No pending dues • Next due Oct 05</p>
          </div>
        </div>
        <button className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-all">
          Receipt
        </button>
      </div>

      {/* Today's Mess Menu Card */}
      <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Utensils className="w-4 h-4 text-orange-500" />
            <h3 className="text-xs font-bold text-slate-900">Today's Mess Menu</h3>
          </div>
          <span className="text-[10px] font-semibold text-slate-400">Thursday, 17 Sep</span>
        </div>

        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
            <span className="block text-[10px] font-semibold text-slate-400 uppercase">Breakfast</span>
            <span className="text-xs font-bold text-slate-800 mt-1 block">Idli Sambar</span>
            <span className="text-[10px] text-slate-400">7:30 - 9:30 AM</span>
          </div>
          <div className="bg-orange-50/50 p-2.5 rounded-xl border border-orange-100">
            <span className="block text-[10px] font-semibold text-orange-500 uppercase">Lunch</span>
            <span className="text-xs font-bold text-slate-800 mt-1 block">North Thali</span>
            <span className="text-[10px] text-slate-400">12:30 - 2:30 PM</span>
          </div>
          <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
            <span className="block text-[10px] font-semibold text-slate-400 uppercase">Dinner</span>
            <span className="text-xs font-bold text-slate-800 mt-1 block">Roti & Paneer</span>
            <span className="text-[10px] text-slate-400">7:30 - 9:30 PM</span>
          </div>
        </div>
      </div>

      {/* Recent Notice Banner */}
      <button
        onClick={() => onNavigateTab('announcements')}
        className="w-full bg-blue-50 border border-blue-100 rounded-2xl p-4 flex items-center justify-between text-left hover:bg-blue-100/50 transition-all active-press"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0">
            <Megaphone className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wide">Latest Notice</span>
            <h4 className="text-xs font-bold text-slate-900 leading-tight">Water Supply Interruption Tomorrow</h4>
            <p className="text-[11px] text-slate-500">Tap to view complete details</p>
          </div>
        </div>
        <ArrowRight className="w-4 h-4 text-blue-600 shrink-0" />
      </button>
    </div>
  );
};
