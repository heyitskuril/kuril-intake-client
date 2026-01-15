# Intaku Backend

Intaku Backend is the core engine of the Intaku platform — a mini SaaS system designed to manage public intake forms, clients, services, and business workflows in a scalable and secure way.

This backend is built with a **domain-driven architecture**, making it easy to extend, maintain, and evolve into a multi-tenant SaaS product.

---

## 🧠 Core Concept

Intaku allows business owners to:
- Register and manage their own intake system
- Create public intake forms (no login required for clients)
- Receive and manage client submissions
- Organize services, notes, branding, and announcements
- Control access using role-based authentication (admin, staff, etc.)

---

## 🛠 Tech Stack

- Node.js
- Express.js
- TypeScript
- Prisma ORM
- PostgreSQL
- JWT Authentication
- Zod / Validation Layer

---

## 📦 Architecture Overview

The backend follows a **domain-based structure**, where each feature is fully isolated and self-contained.

intaku/
├── frontend/
├── backend/
│   ├── src/
│   │   ├── domains/
│   │   │   ├── auth/
│   │   │   │   ├── auth.routes.ts
│   │   │   │   ├── auth.controller.ts
│   │   │   │   ├── auth.service.ts
│   │   │   │   ├── auth.middleware.ts
│   │   │   │   ├── auth.validation.ts
│   │   │   │   └── auth.types.ts
│   │   │   │
│   │   │   ├── users/
│   │   │   │   ├── users.routes.ts
│   │   │   │   ├── users.controller.ts
│   │   │   │   ├── users.service.ts
│   │   │   │   ├── users.repository.ts
│   │   │   │   ├── users.validation.ts
│   │   │   │   └── users.types.ts
│   │   │   │
│   │   │   ├── clients/
│   │   │   │   ├── clients.routes.ts
│   │   │   │   ├── clients.controller.ts
│   │   │   │   ├── clients.service.ts
│   │   │   │   ├── clients.repository.ts
│   │   │   │   ├── clients.validation.ts
│   │   │   │   └── clients.types.ts
│   │   │   │
│   │   │   ├── notes/
│   │   │   │   ├── notes.routes.ts
│   │   │   │   ├── notes.controller.ts
│   │   │   │   ├── notes.service.ts
│   │   │   │   ├── notes.repository.ts
│   │   │   │   ├── notes.validation.ts
│   │   │   │   └── notes.types.ts
│   │   │   │
│   │   │   ├── services/
│   │   │   │   ├── services.routes.ts
│   │   │   │   ├── services.controller.ts
│   │   │   │   ├── services.service.ts
│   │   │   │   ├── services.repository.ts
│   │   │   │   ├── services.validation.ts
│   │   │   │   └── services.types.ts
│   │   │   │
│   │   │   ├── formBuilder/
│   │   │   │   ├── formBuilder.routes.ts
│   │   │   │   ├── formBuilder.controller.ts
│   │   │   │   ├── formBuilder.service.ts
│   │   │   │   ├── formBuilder.repository.ts
│   │   │   │   ├── formBuilder.validation.ts
│   │   │   │   └── formBuilder.ContinueJan13types.ts
│   │   │   │
│   │   │   ├── branding/
│   │   │   │   ├── branding.routes.ts
│   │   │   │   ├── branding.controller.ts
│   │   │   │   ├── branding.service.ts
│   │   │   │   ├── branding.repository.ts
│   │   │   │   ├── branding.validation.ts
│   │   │   │   └── branding.types.ts
│   │   │   │
│   │   │   ├── announcements/
│   │   │   │   ├── announcements.routes.ts
│   │   │   │   ├── announcements.controller.ts
│   │   │   │   ├── announcements.service.ts
│   │   │   │   ├── announcements.repository.ts
│   │   │   │   ├── announcements.validation.ts
│   │   │   │   └── announcements.types.ts
│   │   │   │
│   │   │   ├── activityLogs/
│   │   │   │   ├── activityLogs.routes.ts
│   │   │   │   ├── activityLogs.controller.ts
│   │   │   │   ├── activityLogs.service.ts
│   │   │   │   ├── activityLogs.repository.ts
│   │   │   │   └── activityLogs.types.ts
│   │   │   │
│   │   │   └── dashboard/
│   │   │       ├── dashboard.routes.ts
│   │   │       ├── dashboard.controller.ts
│   │   │       ├── dashboard.service.ts
│   │   │       └── dashboard.types.ts
│   │   │
│   │   ├── shared/
│   │   │   ├── middleware/
│   │   │   │   ├── ErrorHandler.ts
│   │   │   │   ├── RateLimiter.ts
│   │   │   │   ├── cors.ts
│   │   │   │   ├── RequestLogger.ts
|   |   |   |   ├── authentication.ts
|   |   |   |   ├── authorization.ts
|   |   |   |   ├── fileUpload.ts
|   |   |   |   ├── sanitize.ts
|   |   |   |   ├── security.ts
|   |   |   |   ├── ipLogger.ts
│   │   │   │   └── validation.ts
│   │   │   │
│   │   │   ├── utils/
│   │   │   │   ├── jwt.ts
│   │   │   │   ├── hash.ts
│   │   │   │   ├── logger.ts
|   |   |   |   ├── formatters.ts
|   |   |   |   ├── validators.ts
│   │   │   │   └── response.ts
│   │   │   │
│   │   │   └── types/
│   │   │       ├── common.types.ts
│   │   │       └── enums.ts
│   │   │
│   │   ├── config/
│   │   │   ├── database.ts
│   │   │   ├── env.ts
│   │   │   └── constants.ts
│   │   │
│   │   ├── prisma/
│   │   │   ├── schema.prisma
│   │   │   ├── migrations/
│   │   │   └── seed.ts
│   │   │
│   │   ├── app.ts
│   │   └── server.ts
│   │
│   ├── tests/
│   │   ├── unit/
│   │   ├── integration/
│   │   └── setup.ts
│   │
│   ├── .env.example
│   ├── .gitignore
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
│
├── .gitignore
├── docker-compose.yml
├── LICENSE
└── README.md

code has done writen
1. 