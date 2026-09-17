import { useState } from 'react';
import { PhoneContainer } from './components/PhoneContainer';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { ProfileSupportPage } from './pages/ProfileSupportPage';
import { AnnouncementsPage } from './pages/AnnouncementsPage';
import { HomePage } from './pages/HomePage';
import { StayPage } from './pages/StayPage';
import { RequestsPage } from './pages/RequestsPage';
import { AnnouncementDetailModal } from './components/AnnouncementDetailModal';
import { CallModal } from './components/CallModal';
import { RaiseTicketModal } from './components/RaiseTicketModal';
import { NotificationsDrawer } from './components/NotificationsDrawer';
import {
  mockUserProfile,
  mockQuickActions,
  mockImportantContacts,
  mockAnnouncements,
  mockTickets
} from './data/mockData';
import { TabType, Announcement, Contact, SupportTicket } from './types';
import { X } from 'lucide-react';

export function App() {
  // Navigation State
  const [activeTab, setActiveTab] = useState<TabType>('more'); // Start on 'more' (Image 1 screen)
  const [selectedProperty, setSelectedProperty] = useState<string>('Hamsa PG');
  const [notificationCount, setNotificationCount] = useState<number>(3);

  // Data States
  const [announcements] = useState<Announcement[]>(mockAnnouncements);
  const [tickets, setTickets] = useState<SupportTicket[]>(mockTickets);

  // Modals & Dialogs States
  const [selectedAnnouncement, setSelectedAnnouncement] = useState<Announcement | null>(null);
  const [activeCallContact, setActiveCallContact] = useState<Contact | null>(null);
  const [isRaiseTicketOpen, setIsRaiseTicketOpen] = useState<boolean>(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState<boolean>(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState<boolean>(true);
  const [selectedLanguage, setSelectedLanguage] = useState<string>('English');

  // Generic Quick Action Info Dialog
  const [activeDialog, setActiveDialog] = useState<{ title: string; content: string; icon: string } | null>(null);

  // Header Title Resolver
  const getHeaderTitle = () => {
    switch (activeTab) {
      case 'home':
        return 'Overview';
      case 'stay':
        return 'Stay & Room';
      case 'requests':
        return 'Service Requests';
      case 'announcements':
        return 'Announcements';
      case 'more':
        return 'Profile & Support';
    }
  };

  // Quick Action Handler
  const handleQuickActionClick = (actionId: string) => {
    switch (actionId) {
      case '1':
        setActiveDialog({
          title: 'Personal Details',
          content: 'Rahul Sharma | Room 102 (Bed A)\nID Card: #PG-IND-8842\nJoined: 15 Jan 2024\nEmergency Contact: +91 98000 77766 (Father)',
          icon: 'personal'
        });
        break;
      case '2':
        setActiveDialog({
          title: 'Emergency Contact',
          content: 'Primary: Rajesh Sharma (Father) - +91 98000 77766\nSecondary: Sunita Sharma (Mother) - +91 98000 77755\nLocal Guardian: Indiranagar Clinic - 080-25251122',
          icon: 'emergency'
        });
        break;
      case '3':
        // Connect Manager -> open call modal for Manager Rakesh
        setActiveCallContact(mockImportantContacts[0]);
        break;
      case '4':
        setActiveDialog({
          title: 'PG Rules & Policies',
          content: '1. Main Gate Closes at 10:30 PM sharp.\n2. No Smoking or Alcohol inside PG premises.\n3. Visitors allowed in reception lounge until 8:00 PM.\n4. Save Water & Electricity when leaving your room.',
          icon: 'rules'
        });
        break;
      case '5':
        setActiveDialog({
          title: 'FAQ & Help',
          content: 'Q: What are the Mess Timings?\nA: B/F: 7:30-9:30 AM | Lunch: 12:30-2:30 PM | Dinner: 7:30-9:30 PM\n\nQ: How to request AC service?\nA: Go to Requests tab and tap "New Ticket".',
          icon: 'faq'
        });
        break;
      case '6':
        setIsRaiseTicketOpen(true);
        break;
    }
  };

  const handleAddNewTicket = (newTicket: SupportTicket) => {
    setTickets([newTicket, ...tickets]);
    setActiveTab('requests');
  };

  return (
    <PhoneContainer>
      {/* Header Bar */}
      <Header
        title={getHeaderTitle()}
        selectedProperty={selectedProperty}
        onSelectProperty={(prop) => setSelectedProperty(prop)}
        onOpenNotifications={() => setIsNotificationsOpen(true)}
        notificationCount={notificationCount}
      />

      {/* Main Page Render Area */}
      <main className="flex-1 bg-slate-50/50">
        {activeTab === 'home' && (
          <HomePage
            user={mockUserProfile}
            onNavigateTab={(tab) => setActiveTab(tab)}
          />
        )}

        {activeTab === 'stay' && <StayPage user={mockUserProfile} />}

        {activeTab === 'requests' && (
          <RequestsPage
            tickets={tickets}
            onOpenRaiseTicket={() => setIsRaiseTicketOpen(true)}
            onSelectTicket={(ticket) => {
              setActiveDialog({
                title: `${ticket.ticketId}: ${ticket.subject}`,
                content: `Category: ${ticket.category}\nStatus: ${ticket.status}\nDate: ${ticket.date}\nPriority: ${ticket.priority}\n\nDescription:\n${ticket.description}`,
                icon: 'ticket'
              });
            }}
          />
        )}

        {activeTab === 'announcements' && (
          <AnnouncementsPage
            announcements={announcements}
            onSelectAnnouncement={(item) => setSelectedAnnouncement(item)}
            onContactManager={() => setActiveCallContact(mockImportantContacts[0])}
          />
        )}

        {activeTab === 'more' && (
          <ProfileSupportPage
            user={mockUserProfile}
            quickActions={mockQuickActions}
            contacts={mockImportantContacts}
            onActionClick={handleQuickActionClick}
            onContactCall={(contact) => setActiveCallContact(contact)}
            onLogout={() => {
              if (confirm('Are you sure you want to log out of MyPG?')) {
                alert('Logged out successfully.');
              }
            }}
            onToggleNotifications={() => setNotificationsEnabled(!notificationsEnabled)}
            notificationsEnabled={notificationsEnabled}
            onSelectLanguage={() => {
              const langs = ['English', 'Hindi', 'Kannada', 'Tamil'];
              const next = langs[(langs.indexOf(selectedLanguage) + 1) % langs.length];
              setSelectedLanguage(next);
            }}
            selectedLanguage={selectedLanguage}
          />
        )}
      </main>

      {/* Bottom 5-Tab Navigation */}
      <BottomNav activeTab={activeTab} onTabChange={(tab) => setActiveTab(tab)} />

      {/* Interactive Modals */}
      <AnnouncementDetailModal
        announcement={selectedAnnouncement}
        onClose={() => setSelectedAnnouncement(null)}
      />

      <CallModal
        contact={activeCallContact}
        onClose={() => setActiveCallContact(null)}
      />

      <RaiseTicketModal
        isOpen={isRaiseTicketOpen}
        onClose={() => setIsRaiseTicketOpen(false)}
        onSubmit={handleAddNewTicket}
      />

      <NotificationsDrawer
        isOpen={isNotificationsOpen}
        onClose={() => setIsNotificationsOpen(false)}
        onClearNotifications={() => setNotificationCount(0)}
      />

      {/* Generic Info Popup Dialog */}
      {activeDialog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="fixed inset-0" onClick={() => setActiveDialog(null)} />
          <div className="relative w-full max-w-sm bg-white rounded-3xl p-5 shadow-2xl z-10 space-y-3 animate-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-slate-900">{activeDialog.title}</h3>
              <button
                onClick={() => setActiveDialog(null)}
                className="p-1.5 text-slate-400 hover:text-slate-700 bg-slate-100 rounded-full"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="text-xs text-slate-600 font-medium whitespace-pre-line leading-relaxed bg-slate-50 p-3 rounded-2xl border border-slate-100">
              {activeDialog.content}
            </div>
            <button
              onClick={() => setActiveDialog(null)}
              className="w-full py-2.5 bg-blue-600 text-white text-xs font-bold rounded-xl active-press"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </PhoneContainer>
  );
}

export default App;
