# Intaku Frontend

Intaku Frontend is the user-facing layer of the Intaku platform — designed to serve both **public users** (clients filling intake forms) and **authenticated users** (business owners managing their workflow).

The frontend follows a **feature-based architecture**, making it scalable, maintainable, and perfect for a SaaS-style product.

---

## 🎯 Core Experience

### Public Users
- Access intake forms without login
- Submit business inquiries
- View announcements or branding pages
- Simple, fast, and frictionless UX

### Authenticated Users (Business Owners)
- Login to dashboard
- Manage clients & submissions
- Create services
- Build custom intake forms
- Control branding & announcements
- Manage users and roles

---

## 🛠 Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Context API (Auth)
- Feature-based architecture

---

## 🧩 Architecture Overview

The frontend is structured by **features**, not technical layers.

📁 Project Structure

intaku/
├── backend/
├── frontend/
│   ├── src/
│   │   ├── features/
│   │   │   ├── auth/
│   │   │   │   ├── components/
|   |   |   |   |   ├── AuthProvider.tsx
│   │   │   │   │   ├── LoginForm.tsx
│   │   │   │   │   └── ProtectedRoute.tsx
│   │   │   │   ├── hooks/
│   │   │   │   │   └── useAuth.ts
│   │   │   │   ├── services/
│   │   │   │   │   └── authService.ts
│   │   │   │   ├── types/
│   │   │   │   │   └── auth.types.ts
│   │   │   │   └── utils/
│   │   │   │       └── tokenStorage.ts
│   │   │   │
│   │   │   ├── clients/
│   │   │   │   ├── components/
│   │   │   │   │   ├── ClientList.tsx
│   │   │   │   │   ├── ClientCard.tsx
│   │   │   │   │   ├── ClientDetail.tsx
│   │   │   │   │   ├── ClientStatusBadge.tsx
│   │   │   │   │   └── ClientFilters.tsx
│   │   │   │   ├── hooks/
│   │   │   │   │   └── useClients.ts
│   │   │   │   ├── services/
│   │   │   │   │   └── clientsService.ts
│   │   │   │   |── types/
│   │   │   │   |   └── clients.types.ts
|   |   |   |   └── utils/
│   │   │   │
│   │   │   ├── notes/
│   │   │   │   ├── components/
│   │   │   │   │   ├── NotesList.tsx
│   │   │   │   │   ├── NoteItem.tsx
│   │   │   │   │   └── NoteForm.tsx
│   │   │   │   ├── hooks/
│   │   │   │   │   └── useNotes.ts
│   │   │   │   ├── services/
│   │   │   │   │   └── notesService.ts
│   │   │   │   |── types/
│   │   │   │   |   └── notes.types.ts
|   |   |   |   └── utils/
│   │   │   │
│   │   │   ├── services/
│   │   │   │   ├── components/
│   │   │   │   │   ├── ServiceList.tsx
│   │   │   │   │   ├── ServiceCard.tsx
│   │   │   │   │   ├── ServiceForm.tsx
│   │   │   │   │   └── ServiceManagement.tsx
│   │   │   │   ├── hooks/
│   │   │   │   │   └── useServices.ts
│   │   │   │   ├── services/
│   │   │   │   │   └── servicesService.ts
│   │   │   │   |── types/
│   │   │   │   |   └── services.types.ts
|   |   |   |   └── utils/
│   │   │   │
│   │   │   ├── formBuilder/
│   │   │   │   ├── components/
│   │   │   │   │   ├── FormBuilderPanel.tsx
│   │   │   │   │   ├── FieldEditor.tsx
│   │   │   │   │   └── FieldPreview.tsx
│   │   │   │   ├── hooks/
│   │   │   │   │   └── useFormBuilder.ts
│   │   │   │   ├── services/
│   │   │   │   │   └── formBuilderService.ts
│   │   │   │   |── types/
│   │   │   │   |   └── formBuilder.types.ts
|   |   |   |   └── utils/
│   │   │   │
│   │   │   ├── branding/
│   │   │   │   ├── components/
│   │   │   │   │   ├── BrandingSettings.tsx
│   │   │   │   │   ├── ColorPicker.tsx
│   │   │   │   │   └── ImageUploader.tsx
│   │   │   │   ├── hooks/
│   │   │   │   │   └── useBranding.ts
│   │   │   │   ├── services/
│   │   │   │   │   └── brandingService.ts
│   │   │   │   |── types/
│   │   │   │   |   └── branding.types.ts
|   |   |   |   └── utils/
│   │   │   │
│   │   │   ├── announcements/
│   │   │   │   ├── components/
│   │   │   │   │   ├── AnnouncementBanner.tsx
│   │   │   │   │   ├── AnnouncementEditor.tsx
│   │   │   │   │   └── AnnouncementManagement.tsx
│   │   │   │   ├── hooks/
│   │   │   │   │   └── useAnnouncements.ts
│   │   │   │   ├── services/
│   │   │   │   │   └── announcementsService.ts
│   │   │   │   |── types/
│   │   │   │   |   └── announcements.types.ts
|   |   |   |   └── utils/
│   │   │   │
│   │   │   ├── dashboard/
│   │   │   │   ├── components/
│   │   │   │   │   ├── Dashboard.tsx
│   │   │   │   │   ├── MetricsCards.tsx
│   │   │   │   │   ├── RecentClients.tsx
│   │   │   │   │   ├── ActivityFeed.tsx
│   │   │   │   │   └── StatsChart.tsx
│   │   │   │   ├── hooks/
│   │   │   │   │   └── useDashboard.ts
│   │   │   │   ├── services/
│   │   │   │   │   └── dashboardService.ts
│   │   │   │   |── types/
│   │   │   │   |   └── dashboard.types.ts
|   |   |   |   └── utils/
│   │   │   │
│   │   │   ├── users/
│   │   │   │   ├── components/
│   │   │   │   │   ├── UserList.tsx
│   │   │   │   │   ├── RegisterForm.tsx
│   │   │   │   │   └── UserRoleBadge.tsx
│   │   │   │   ├── hooks/
│   │   │   │   │   └── useUsers.ts
│   │   │   │   ├── services/
│   │   │   │   │   └── usersService.ts
│   │   │   │   |── types/
│   │   │   │   |   └── users.types.ts
|   |   |   |   └── utils/
│   │   │   │
│   │   │   └── public/
│   │   │       ├── components/
│   │   │       │   ├── PublicIntakeForm.tsx
│   │   │       │   ├── LandingHero.tsx
│   │   │       │   └── SuccessMessage.tsx
│   │   │       ├── pages/
│   │   │       │   └── PublicIntakePage.tsx
│   │   │       |── services/
│   │   │       |   └── publicIntakeService.ts
|   |   |       └── utils/
│   │   │
│   │   ├── shared/
│   │   │   ├── components/
│   │   │   │   ├── Layout/
│   │   │   │   │   ├── Header.tsx
│   │   │   │   │   ├── Sidebar.tsx
│   │   │   │   │   ├── Footer.tsx
│   │   │   │   │   └── MainLayout.tsx
│   │   │   │   │
│   │   │   │   ├── UI/
│   │   │   │   │   ├── Button.tsx
│   │   │   │   │   ├── Input.tsx
│   │   │   │   │   ├── Select.tsx
│   │   │   │   │   ├── Textarea.tsx
│   │   │   │   │   ├── Table.tsx
│   │   │   │   │   ├── Card.tsx
│   │   │   │   │   ├── Modal.tsx
│   │   │   │   │   ├── Badge.tsx
│   │   │   │   │   ├── Alert.tsx
│   │   │   │   │   ├── Tabs.tsx
│   │   │   │   │   └── Loading.tsx
│   │   │   │   │
│   │   │   │   └── ErrorBoundary.tsx
│   │   │   │
│   │   │   ├── hooks/
│   │   │   │   ├── useApi.ts
│   │   │   │   ├── useLocalStorage.ts
│   │   │   │   ├── useDebounce.ts
│   │   │   │   └── useToast.ts
│   │   │   │
│   │   │   ├── utils/
│   │   │   │   ├── apiClient.ts
│   │   │   │   ├── formatters.ts
│   │   │   │   ├── validators.ts
│   │   │   │   └── constants.ts
│   │   │   │
│   │   │   └── types/
│   │   │       └── common.types.ts
│   │   │
│   │   ├── config/
│   │   │   └── env.ts
│   │   │
│   │   ├── pages/
│   │   │   ├── LoginPage.tsx
│   │   │   ├── DashboardPage.tsx
|   |   |   ├── AnnouncementsPage.tsx
|   |   |   ├── BrandingPage.tsx
|   |   |   ├── FormBuilderPage.tsx
|   |   |   ├── ServicesPage.tsx
│   │   │   ├── ClientsPage.tsx
│   │   │   ├── ClientDetailPage.tsx
│   │   │   ├── UsersPage.tsx
│   │   │   ├── SettingsPage.tsx
│   │   │   └── NotFoundPage.tsx
│   │   │
│   │   ├── routes/
│   │   │   └── AppRoutes.tsx
|   |   |
|   |   ├── assets/
|   |   |   └── react.svg
│   │   │
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   │
│   │── index.html
│   │
│   ├── .env.example
│   ├── .gitignore
│   ├── package.json
│   ├── tsconfig.json
│   ├── vite.config.ts
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── README.md
│
├── .gitignore
├── docker-compose.yml
├── LICENSE
└── README.md

code has done writen
1. 