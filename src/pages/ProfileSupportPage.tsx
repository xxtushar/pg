import React from 'react';
import {
  User,
  Phone,
  Mail,
  ChevronRight,
  UserCheck,
  FileText,
  HelpCircle,
  Ticket,
  Shield,
  Broom,
  Bell,
  Globe,
  Lock,
  LogOut,
  PhoneCall
} from 'lucide-react';
import { UserProfile, QuickAction, Contact } from '../types';

interface ProfileSupportPageProps {
  user: UserProfile;
  quickActions: QuickAction[];
  contacts: Contact[];
  onActionClick: (actionId: string) => void;
  onContactCall: (contact: Contact) => void;
  onLogout: () => void;
  onToggleNotifications: () => void;
  notificationsEnabled: boolean;
  onSelectLanguage: () => void;
  selectedLanguage: string;
}

export const ProfileSupportPage: React.FC<ProfileSupportPageProps> = ({
  user,
  quickActions,
  contacts,
  onActionClick,
  onContactCall,
  onLogout,
  onToggleNotifications,
  notificationsEnabled,
  onSelectLanguage,
  selectedLanguage
}) => {
  // Helper function to render specific quick action icons matching the screenshot
  const renderQuickActionIcon = (type: QuickAction['iconType']) => {
    switch (type) {
      case 'personal':
        return <User className="w-5 h-5 text-blue-600" />;
      case 'emergency':
        return <Phone className="w-5 h-5 text-orange-500" />;
      case 'manager':
        return <UserCheck className="w-5 h-5 text-purple-600" />;
      case 'rules':
        return <FileText className="w-5 h-5 text-emerald-600" />;
      case 'faq':
        return <HelpCircle className="w-5 h-5 text-blue-600" />;
      case 'ticket':
        return <Ticket className="w-5 h-5 text-orange-500" />;
    }
  };

  // Helper for contact icons
  const renderContactIcon = (type: Contact['iconType']) => {
    switch (type) {
      case 'manager':
        return <User className="w-5 h-5 text-emerald-600" />;
      case 'security':
        return <Shield className="w-5 h-5 text-blue-600" />;
      case 'housekeeping':
        return <Broom className="w-5 h-5 text-orange-500" />;
    }
  };

  return (
    <div className="p-4 space-y-4 bg-slate-50/50 min-h-full pb-6 lg:mx-auto lg:max-w-5xl lg:space-y-6 lg:p-8">
      {/* 1. Main Profile Card */}
      <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm transition-all hover:shadow-md">
        <div className="flex items-start gap-4">
          {/* Avatar Container */}
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-blue-100 overflow-hidden border-2 border-white shadow-sm flex items-center justify-center">
              <img
                src={user.avatarUrl}
                alt={user.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback avatar graphic
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <User className="w-10 h-10 text-blue-500" />
            </div>
          </div>

          {/* User Details */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2 mb-1">
              <h3 className="text-lg font-bold text-slate-900 truncate tracking-tight">
                {user.name}
              </h3>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-700">
                {user.status}
              </span>
            </div>

            <p className="text-xs font-semibold text-slate-500 mb-2">
              Room {user.roomNumber} • {user.bedNumber}
            </p>

            <div className="space-y-1 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span className="truncate font-medium">{user.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span className="truncate font-medium">{user.email}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Quick Links Grid (2x3 Layout) */}
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-3">
        {quickActions.map((action) => (
          <button
            key={action.id}
            onClick={() => onActionClick(action.id)}
            className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all text-left flex flex-col justify-between group active-press"
          >
            <div className="flex items-start justify-between mb-3">
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center ${action.iconBgColor}`}
              >
                {renderQuickActionIcon(action.iconType)}
              </div>
              <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors mt-1" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900 leading-tight mb-0.5">
                {action.title}
              </h4>
              <p className="text-[11px] text-slate-400 font-normal leading-tight line-clamp-1">
                {action.subtitle}
              </p>
            </div>
          </button>
        ))}
      </div>

      <div className="space-y-4 lg:grid lg:grid-cols-2 lg:items-start lg:gap-6 lg:space-y-0">
      {/* 3. Important Contacts Section */}
      <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm space-y-3">
        <h3 className="text-sm font-bold text-slate-900 tracking-tight">
          Important Contacts
        </h3>

        <div className="space-y-3 divide-y divide-slate-100/60">
          {contacts.map((contact) => (
            <div
              key={contact.id}
              className="flex items-center justify-between pt-3 first:pt-0"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${contact.bgColor}`}
                >
                  {renderContactIcon(contact.iconType)}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 leading-tight">
                    {contact.name}
                  </h4>
                  <p className="text-[11px] text-slate-400 font-medium">
                    {contact.timing}
                  </p>
                </div>
              </div>

              <button
                onClick={() => onContactCall(contact)}
                className="w-9 h-9 rounded-full border border-blue-200 bg-blue-50/50 hover:bg-blue-600 hover:text-white text-blue-600 flex items-center justify-center transition-all active-press"
                aria-label={`Call ${contact.name}`}
              >
                <PhoneCall className="w-4 h-4 stroke-[2]" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* 4. General Settings Menu List */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm divide-y divide-slate-100 overflow-hidden">
        {/* Notifications Item */}
        <div className="flex items-center justify-between p-3.5 hover:bg-slate-50/50 transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center">
              <Bell className="w-4 h-4 text-purple-600" />
            </div>
            <span className="text-xs font-bold text-slate-800">Notifications</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-slate-400">
              {notificationsEnabled ? 'On' : 'Off'}
            </span>
            <button
              onClick={onToggleNotifications}
              className="p-1 hover:bg-slate-100 rounded-md transition-colors"
            >
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>
          </div>
        </div>

        {/* Language Item */}
        <button
          onClick={onSelectLanguage}
          className="w-full flex items-center justify-between p-3.5 hover:bg-slate-50/50 transition-colors active-press text-left"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
              <Globe className="w-4 h-4 text-emerald-600" />
            </div>
            <span className="text-xs font-bold text-slate-800">Language</span>
          </div>

          <div className="flex items-center gap-1">
            <span className="text-xs font-medium text-slate-400">
              {selectedLanguage}
            </span>
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </div>
        </button>

        {/* Privacy Item */}
        <button className="w-full flex items-center justify-between p-3.5 hover:bg-slate-50/50 transition-colors active-press text-left">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
              <Lock className="w-4 h-4 text-blue-600" />
            </div>
            <span className="text-xs font-bold text-slate-800">Privacy</span>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-400" />
        </button>

        {/* Logout Item */}
        <button
          onClick={onLogout}
          className="w-full flex items-center justify-between p-3.5 hover:bg-rose-50/50 transition-colors active-press text-left"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-rose-100 flex items-center justify-center">
              <LogOut className="w-4 h-4 text-rose-600" />
            </div>
            <span className="text-xs font-bold text-rose-600">Logout</span>
          </div>
          <ChevronRight className="w-4 h-4 text-rose-400" />
        </button>
      </div>
      </div>
    </div>
  );
};
