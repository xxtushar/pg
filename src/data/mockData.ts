import { UserProfile, Announcement, Contact, QuickAction, SupportTicket, Property } from '../types';

export const mockUserProfile: UserProfile = {
  name: 'Rahul Sharma',
  avatarUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=250&q=80',
  status: 'Active',
  roomNumber: '102',
  bedNumber: 'Bed A',
  phone: '+91 98765 43210',
  email: 'rahul.sharma@email.com',
  pgName: 'Hamsa PG',
  pgAddress: '14th Cross, Indiranagar, Bengaluru, Karnataka 560038'
};

export const mockProperties: Property[] = [
  { id: '1', name: 'Hamsa PG', location: 'Indiranagar, Bengaluru', roomCount: 45 },
  { id: '2', name: 'Zenith Stays', location: 'Koramangala, Bengaluru', roomCount: 30 },
  { id: '3', name: 'Royal Residency PG', location: 'HSR Layout, Bengaluru', roomCount: 60 }
];

export const mockQuickActions: QuickAction[] = [
  {
    id: '1',
    title: 'Personal Details',
    subtitle: 'Update your personal info',
    iconType: 'personal',
    iconBgColor: 'bg-blue-100',
    iconColor: 'text-blue-600'
  },
  {
    id: '2',
    title: 'Emergency Contact',
    subtitle: 'Add or update contacts',
    iconType: 'emergency',
    iconBgColor: 'bg-orange-100',
    iconColor: 'text-orange-600'
  },
  {
    id: '3',
    title: 'Manager Contact',
    subtitle: 'Connect with PG manager',
    iconType: 'manager',
    iconBgColor: 'bg-purple-100',
    iconColor: 'text-purple-600'
  },
  {
    id: '4',
    title: 'PG Rules & Policies',
    subtitle: 'View rules & policies',
    iconType: 'rules',
    iconBgColor: 'bg-emerald-100',
    iconColor: 'text-emerald-600'
  },
  {
    id: '5',
    title: 'FAQ & Help',
    subtitle: 'Find answers to common questions',
    iconType: 'faq',
    iconBgColor: 'bg-blue-100',
    iconColor: 'text-blue-600'
  },
  {
    id: '6',
    title: 'Raise a Support Ticket',
    subtitle: 'Report an issue or request help',
    iconType: 'ticket',
    iconBgColor: 'bg-orange-100',
    iconColor: 'text-orange-600'
  }
];

export const mockImportantContacts: Contact[] = [
  {
    id: 'c1',
    name: 'Manager Rakesh',
    role: 'PG Operations Head',
    timing: '9:00 AM - 6:00 PM',
    phone: '+91 98123 45678',
    iconType: 'manager',
    bgColor: 'bg-emerald-100',
    iconColor: 'text-emerald-600'
  },
  {
    id: 'c2',
    name: 'Security Desk',
    role: 'Main Entrance Desk',
    timing: '24x7 Available',
    phone: '+91 98000 11122',
    iconType: 'security',
    bgColor: 'bg-blue-100',
    iconColor: 'text-blue-600'
  },
  {
    id: 'c3',
    name: 'Housekeeping',
    role: 'Cleaning & Facilities',
    timing: '8:00 AM - 7:00 PM',
    phone: '+91 98333 44455',
    iconType: 'housekeeping',
    bgColor: 'bg-orange-100',
    iconColor: 'text-orange-600'
  }
];

export const mockAnnouncements: Announcement[] = [
  {
    id: 'a1',
    title: 'Water Supply Interruption',
    badge: 'New',
    date: '12 Sep 2024',
    time: '08:30 AM',
    audience: 'All Residents',
    snippet: 'There will be a water supply interruption on 12 Sep...',
    fullContent: 'There will be a scheduled water supply interruption on 12 September 2024 from 10:00 AM to 02:00 PM for overhead tank cleaning and plumbing maintenance. Please store sufficient water for daily usage.',
    category: 'Utilities',
    iconType: 'droplet'
  },
  {
    id: 'a2',
    title: 'Room Cleaning Schedule',
    badge: 'Scheduled',
    date: '9 Sep 2024',
    time: '10:00 AM',
    audience: 'All Residents',
    snippet: 'Your room cleaning is scheduled for 10 Sep 2024...',
    fullContent: 'Deep room cleaning for 1st floor rooms (101 to 110) will be executed on 10 Sep 2024 between 10:00 AM and 01:00 PM. Kindly leave room keys with security or be present.',
    category: 'General',
    iconType: 'cleaning'
  },
  {
    id: 'a3',
    title: 'Ganesh Chaturthi Celebration',
    badge: 'Important',
    date: '10 Sep 2024',
    time: '05:00 PM',
    audience: 'All Residents',
    snippet: 'We are celebrating Ganesh Chaturthi on 10 Sep...',
    fullContent: 'We are celebrating Ganesh Chaturthi in the main dining hall on 10 Sep starting from 5:00 PM. Special dinner & sweets will be served for all residents. Join us for Puja & Cultural night!',
    category: 'Events',
    iconType: 'festival'
  },
  {
    id: 'a4',
    title: 'Electrical Maintenance',
    badge: 'General',
    date: '8 Sep 2024',
    time: '11:00 AM',
    audience: 'All Residents',
    snippet: 'Electrical maintenance will be conducted in common...',
    fullContent: 'Electrical maintenance and generator load testing will be conducted in common areas on 14 Sep from 02:00 PM to 04:00 PM. Power backup will be activated within 2 minutes of switchover.',
    category: 'Utilities',
    iconType: 'electricity'
  },
  {
    id: 'a5',
    title: 'Guest Entry Reminder',
    badge: 'Read',
    date: '6 Sep 2024',
    time: '09:15 AM',
    audience: 'All Residents',
    snippet: 'Please remember to register your guests before...',
    fullContent: 'All day visitors and overnight guests must be logged in the MyPG app security gate pass prior to 8:00 PM. Non-registered visitors will not be permitted entry past 10:00 PM.',
    category: 'General',
    iconType: 'guest'
  }
];

export const mockTickets: SupportTicket[] = [
  {
    id: 't1',
    ticketId: 'TCK-8921',
    category: 'Plumbing',
    subject: 'Bathroom Tap Leakage',
    description: 'The tap in Room 102 attached bathroom is dripping continuously.',
    status: 'In Progress',
    date: '14 Sep 2024',
    priority: 'Medium'
  },
  {
    id: 't2',
    ticketId: 'TCK-8740',
    category: 'Wi-Fi / Internet',
    subject: 'Low Wi-Fi Speed on 1st Floor',
    description: 'Intermittent signal drops during work hours in the evening.',
    status: 'Resolved',
    date: '02 Sep 2024',
    priority: 'Low'
  }
];
