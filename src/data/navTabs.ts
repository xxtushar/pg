import { Home, Bed, Wrench, Megaphone, MoreHorizontal } from 'lucide-react';
import { TabType } from '../types';

export const NAV_TABS: { id: TabType; label: string; Icon: typeof Home }[] = [
  { id: 'home', label: 'Home', Icon: Home },
  { id: 'stay', label: 'Stay', Icon: Bed },
  { id: 'requests', label: 'Requests', Icon: Wrench },
  { id: 'announcements', label: 'Announcements', Icon: Megaphone },
  { id: 'more', label: 'More', Icon: MoreHorizontal },
];
