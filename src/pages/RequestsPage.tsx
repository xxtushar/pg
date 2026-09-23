import React from 'react';
import { Plus, Clock, CheckCircle2, AlertTriangle, ChevronRight } from 'lucide-react';
import { SupportTicket } from '../types';

interface RequestsPageProps {
  tickets: SupportTicket[];
  onOpenRaiseTicket: () => void;
  onSelectTicket: (ticket: SupportTicket) => void;
}

export const RequestsPage: React.FC<RequestsPageProps> = ({
  tickets,
  onOpenRaiseTicket,
  onSelectTicket
}) => {
  const getStatusBadge = (status: SupportTicket['status']) => {
    switch (status) {
      case 'In Progress':
        return (
          <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-50 text-amber-600 border border-amber-200">
            <Clock className="w-3 h-3" /> In Progress
          </span>
        );
      case 'Resolved':
        return (
          <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-600 border border-emerald-200">
            <CheckCircle2 className="w-3 h-3" /> Resolved
          </span>
        );
      case 'Open':
        return (
          <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-blue-50 text-blue-600 border border-blue-200">
            <AlertTriangle className="w-3 h-3" /> Open
          </span>
        );
    }
  };

  return (
    <div className="p-4 space-y-4 bg-slate-50/50 min-h-full pb-6 lg:mx-auto lg:max-w-5xl lg:space-y-6 lg:p-8">
      {/* Header CTA Banner */}
      <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm flex items-center justify-between gap-3">
        <div>
          <h3 className="text-sm font-bold text-slate-900">Need Service or Repair?</h3>
          <p className="text-[11px] text-slate-400 font-medium">Raise a maintenance or complaint ticket</p>
        </div>
        <button
          onClick={onOpenRaiseTicket}
          className="flex items-center gap-1.5 px-3.5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-sm transition-all active-press shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>New Ticket</span>
        </button>
      </div>

      {/* Ticket List Section */}
      <div className="space-y-3 lg:space-y-4">
        <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider px-1">
          Your Maintenance Tickets ({tickets.length})
        </h4>

        <div className="space-y-3 lg:grid lg:grid-cols-2 lg:gap-4 lg:space-y-0">
        {tickets.map((ticket) => (
          <div
            key={ticket.id}
            onClick={() => onSelectTicket(ticket)}
            className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md transition-all cursor-pointer active-press group"
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded-md bg-slate-100 text-[10px] font-bold text-slate-600">
                  {ticket.ticketId}
                </span>
                <span className="text-xs font-semibold text-slate-400">• {ticket.category}</span>
              </div>
              {getStatusBadge(ticket.status)}
            </div>

            <h3 className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-1">
              {ticket.subject}
            </h3>

            <p className="text-xs text-slate-500 font-normal line-clamp-2 mb-2 leading-relaxed">
              {ticket.description}
            </p>

            <div className="flex items-center justify-between text-[11px] text-slate-400 font-medium pt-2 border-t border-slate-50">
              <span>Reported on {ticket.date}</span>
              <div className="flex items-center gap-1 text-blue-600 font-semibold group-hover:translate-x-0.5 transition-transform">
                <span>View Details</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};
