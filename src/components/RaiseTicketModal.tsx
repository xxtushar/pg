import React, { useState } from 'react';
import { X, Send, Wrench } from 'lucide-react';
import { SupportTicket } from '../types';

interface RaiseTicketModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (newTicket: SupportTicket) => void;
}

export const RaiseTicketModal: React.FC<RaiseTicketModalProps> = ({
  isOpen,
  onClose,
  onSubmit
}) => {
  const [category, setCategory] = useState('Plumbing');
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState<'Low' | 'Medium' | 'High'>('Medium');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!subject.trim() || !description.trim()) return;

    const ticket: SupportTicket = {
      id: 't_' + Date.now(),
      ticketId: `TCK-${Math.floor(1000 + Math.random() * 9000)}`,
      category,
      subject,
      description,
      status: 'Open',
      date: '17 Sep 2024',
      priority
    };

    onSubmit(ticket);
    setSubject('');
    setDescription('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="fixed inset-0" onClick={onClose} />
      <div className="relative w-full max-w-md bg-white rounded-t-3xl sm:rounded-3xl p-5 shadow-2xl z-10 space-y-4 animate-in slide-in-from-bottom duration-250">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center">
              <Wrench className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">Raise Support Ticket</h3>
              <p className="text-[11px] text-slate-400">Report an issue to PG Manager</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 bg-slate-100 rounded-full"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3 text-xs">
          <div>
            <label className="block text-slate-700 font-bold mb-1">Issue Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-800 focus:outline-none focus:border-blue-600"
            >
              <option value="Plumbing">Plumbing (Tap, Leak, Flush)</option>
              <option value="Electrical">Electrical (Light, Fan, AC, Socket)</option>
              <option value="Wi-Fi / Internet">Wi-Fi / Internet Issue</option>
              <option value="Cleaning & Hygiene">Cleaning & Housekeeping</option>
              <option value="Food & Mess">Food & Mess Issue</option>
              <option value="Other">Other / General Query</option>
            </select>
          </div>

          <div>
            <label className="block text-slate-700 font-bold mb-1">Subject / Summary</label>
            <input
              type="text"
              required
              placeholder="e.g. Hot water not working in bathroom"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-800 focus:outline-none focus:border-blue-600"
            />
          </div>

          <div>
            <label className="block text-slate-700 font-bold mb-1">Detailed Description</label>
            <textarea
              required
              rows={3}
              placeholder="Please provide specifics about the location and nature of the issue..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-800 focus:outline-none focus:border-blue-600 resize-none"
            />
          </div>

          <div>
            <label className="block text-slate-700 font-bold mb-1">Priority Level</label>
            <div className="grid grid-cols-3 gap-2">
              {(['Low', 'Medium', 'High'] as const).map((lvl) => (
                <button
                  type="button"
                  key={lvl}
                  onClick={() => setPriority(lvl)}
                  className={`py-1.5 rounded-xl font-bold border transition-all ${
                    priority === lvl
                      ? lvl === 'High'
                        ? 'bg-rose-50 border-rose-500 text-rose-600'
                        : 'bg-blue-50 border-blue-600 text-blue-600'
                      : 'bg-slate-50 border-slate-200 text-slate-600'
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-2 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all active-press"
          >
            <Send className="w-4 h-4" />
            <span>Submit Ticket</span>
          </button>
        </form>
      </div>
    </div>
  );
};
