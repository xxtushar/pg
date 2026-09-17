import React, { useState, useEffect } from 'react';
import { PhoneOff, Mic, MicOff, Volume2, Shield, User, Broom } from 'lucide-react';
import { Contact } from '../types';

interface CallModalProps {
  contact: Contact | null;
  onClose: () => void;
}

export const CallModal: React.FC<CallModalProps> = ({ contact, onClose }) => {
  const [seconds, setSeconds] = useState(0);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    if (!contact) return;
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [contact]);

  if (!contact) return null;

  const formatTime = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xs bg-slate-900 text-white rounded-3xl p-6 shadow-2xl z-10 flex flex-col items-center text-center space-y-6">
        {/* Contact Icon Avatar */}
        <div className="relative mt-2">
          <div className="w-20 h-20 rounded-full bg-slate-800 border-2 border-slate-700 flex items-center justify-center text-white shadow-xl animate-pulse">
            {contact.iconType === 'manager' && <User className="w-10 h-10 text-emerald-400" />}
            {contact.iconType === 'security' && <Shield className="w-10 h-10 text-blue-400" />}
            {contact.iconType === 'housekeeping' && <Broom className="w-10 h-10 text-orange-400" />}
          </div>
          <span className="absolute bottom-0 right-0 w-4 h-4 bg-emerald-500 rounded-full border-2 border-slate-900" />
        </div>

        <div>
          <h3 className="text-base font-extrabold tracking-tight">{contact.name}</h3>
          <p className="text-xs text-slate-400 mt-0.5">{contact.phone}</p>
          <div className="inline-block mt-2 px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-xs font-semibold">
            {formatTime(seconds)} • Connected
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-4 pt-2">
          <button
            onClick={() => setMuted(!muted)}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
              muted ? 'bg-rose-500 text-white' : 'bg-slate-800 text-slate-200 hover:bg-slate-700'
            }`}
          >
            {muted ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
          </button>

          <button
            onClick={onClose}
            className="w-14 h-14 rounded-full bg-rose-600 hover:bg-rose-700 text-white flex items-center justify-center shadow-lg transition-all active-press"
          >
            <PhoneOff className="w-6 h-6" />
          </button>

          <button className="w-12 h-12 rounded-full bg-slate-800 text-slate-200 hover:bg-slate-700 flex items-center justify-center">
            <Volume2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
