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

src/
├── features/
│ ├── auth/
│ ├── clients/
│ ├── services/
│ ├── formBuilder/
│ ├── branding/
│ ├── announcements/
│ ├── dashboard/
│ ├── users/
│ └── public/
│
├── shared/
│ ├── components/
│ ├── hooks/
│ ├── utils/
│ └── types/
│
├── pages/
├── routes/
├── config/
├── App.tsx
└── main.tsx

yaml
Copy code

Each feature usually contains:
- `components`
- `hooks`
- `services`
- `types`

---

## 🔐 Routing Strategy

- `/intake` → Public intake page (default entry point)
- `/login` → Admin login
- Protected routes for dashboard & management pages
- Role-based route protection (admin-only features)

The app intentionally defaults to **public access first**, making it suitable for real-world intake usage.

---

## 🎨 UI System

- Reusable UI components (Button, Input, Modal, Table, etc.)
- Shared layout system (Header, Sidebar, Footer)
- Responsive & dashboard-ready design
- Tailwind-powered styling

---

## 🧠 State & Auth Management

- Centralized `AuthProvider`
- Token-based authentication
- ProtectedRoute abstraction
- Clean separation between auth logic and UI

---

## 🚀 SaaS-Ready Direction

Designed to evolve into:
- Multi-user intake platform
- Link-in-bio style intake links
- White-label intake forms
- Per-user branding & customization
- Paid plans & feature limits

---

## ✨ Philosophy

> “Intaku Frontend is built to feel simple for clients, powerful for business owners.”