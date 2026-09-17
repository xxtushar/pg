export type TabType = 'home' | 'stay' | 'requests' | 'announcements' | 'more';

export type CategoryFilter = 'All' | 'Important' | 'Utilities' | 'Events';

export type AnnouncementBadgeType = 'New' | 'Scheduled' | 'Important' | 'General' | 'Read';

export interface Announcement {
  id: string;
  title: string;
  badge: AnnouncementBadgeType;
  date: string;
  time: string;
  audience: string;
  snippet: string;
  fullContent: string;
  category: 'Utilities' | 'Important' | 'Events' | 'General';
  iconType: 'droplet' | 'cleaning' | 'festival' | 'electricity' | 'guest';
}

export interface UserProfile {
  name: string;
  avatarUrl: string;
  status: 'Active' | 'Inactive';
  roomNumber: string;
  bedNumber: string;
  phone: string;
  email: string;
  pgName: string;
  pgAddress: string;
}

export interface Contact {
  id: string;
  name: string;
  role: string;
  timing: string;
  phone: string;
  iconType: 'manager' | 'security' | 'housekeeping';
  bgColor: string;
  iconColor: string;
}

export interface QuickAction {
  id: string;
  title: string;
  subtitle: string;
  iconType: 'personal' | 'emergency' | 'manager' | 'rules' | 'faq' | 'ticket';
  iconBgColor: string;
  iconColor: string;
}

export interface SupportTicket {
  id: string;
  ticketId: string;
  category: string;
  subject: string;
  description: string;
  status: 'Open' | 'In Progress' | 'Resolved';
  date: string;
  priority: 'Low' | 'Medium' | 'High';
}

export interface FoodMenuItem {
  day: string;
  breakfast: string;
  lunch: string;
  dinner: string;
}

export interface Property {
  id: string;
  name: string;
  location: string;
  roomCount: number;
}
