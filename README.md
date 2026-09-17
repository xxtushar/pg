# MyPG - Modern PG & Hostel Resident App 🏢📱

A mobile-first, responsive web application built for Paying Guest (PG) and Hostel residents. Built with **React 18**, **TypeScript**, **Tailwind CSS**, **Vite**, and **Lucide Icons**.

Features high-fidelity UI matching iOS mobile design aesthetics, complete with interactive profile management, announcements system, maintenance ticket raising, property switcher, and phone call simulations.

---

## 🌟 Key Features

### 👤 Profile & Support Page (`Profile & Support`)
- **Resident Profile Card**: View room number, bed assignment, contact info, and active status pill.
- **Quick Action Grid**: Fast access to *Personal Details*, *Emergency Contact*, *Manager Contact*, *PG Rules & Policies*, *FAQ & Help*, and *Raise a Support Ticket*.
- **Important Contacts**: Quick dial cards for *Manager Rakesh*, *Security Desk*, and *Housekeeping* with active simulated call popups.
- **Account Settings**: Toggle notification preferences, switch languages, inspect privacy policies, and logout.

### 📢 Announcements System (`Announcements`)
- **Category Filter Chips**: Filter notices by *All*, *Important*, *Utilities*, or *Events*.
- **Live Summary Metrics**: Real-time counters for *New*, *Important*, and *This Week* announcements.
- **Detailed Announcements**: Status badges (`New`, `Scheduled`, `Important`, `General`, `Read`), dates, times, target audiences, and detail modal reader.
- **Contact Manager CTA**: Quick contact button for announcement queries.

### 🏠 Dashboard, Room & Maintenance Tabs
- **Home (`Overview`)**: Rent payment receipt status, 3-meal daily mess menu (Breakfast, Lunch, Dinner), and urgent notice banner.
- **Stay (`Room & Amenities`)**: Roommate roster, Wi-Fi password copy button, and included facilities.
- **Requests (`Service Requests`)**: Active support ticket status tracking and new ticket submission modal.

### 📱 Device Preview Frame
- Realistic **iPhone 16 Pro mockup frame** with status bar (9:41, battery, Wi-Fi), Dynamic Island notch, and a view mode toggle switch (**Mobile Mockup** vs **Full Width Desktop**).

---

## 🚀 Tech Stack

- **Framework**: [React 18](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Build Tool**: [Vite](https://vite.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 🛠️ Getting Started

### Prerequisites

Ensure you have **Node.js** (v18 or higher) installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/mypg-app.git
   cd mypg-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open your browser at `http://localhost:3000/`.

---

## 📦 Scripts

- `npm run dev` - Starts the Vite local development server
- `npm run build` - Compiles TypeScript and builds the production bundle in `dist/`
- `npm run preview` - Locally previews the production build

---

## 📁 Project Structure

```
my-app/
├── public/              # Static assets
├── src/
│   ├── components/      # UI components (Header, BottomNav, PhoneContainer, Modals)
│   ├── data/            # Mock dataset for user, announcements, contacts & tickets
│   ├── pages/           # Page views (ProfileSupportPage, AnnouncementsPage, etc.)
│   ├── types/           # TypeScript interfaces & types
│   ├── App.tsx          # Main application orchestrator
│   ├── main.tsx         # React root entry
│   └── index.css        # Tailwind CSS imports & utilities
├── index.html           # HTML entry point with fonts & metadata
├── package.json         # Dependencies & scripts
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite & Tailwind plugin setup
└── README.md            # Repository documentation
```

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
