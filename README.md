# 🔥 Intaku
### A Modern Business Intake & Client Management Platform

<div align="center">

**Transform client inquiries into structured workflows with your own branded intake portal**

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)](https://www.prisma.io/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

[Features](#-key-features) • [Demo](#-demo) • [Quick Start](#-quick-start) • [Documentation](#-documentation) • [Architecture](#-architecture)

</div>

---

## 📋 Table of Contents

- [What is Intaku?](#-what-is-intaku)
- [The Problem & Solution](#-the-problem--solution)
- [Key Features](#-key-features)
- [Demo](#-demo)
- [Technology Stack](#-technology-stack)
- [Architecture](#-architecture)
- [Quick Start](#-quick-start)
- [Project Structure](#-project-structure)
- [API Documentation](#-api-documentation)
- [Deployment](#-deployment)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [License](#-license)
- [About the Developer](#-about-the-developer)

---

## 🎯 What is Intaku?

**Intaku** is a modern, production-grade platform that helps solo developers, freelancers, and small agencies manage client inquiries professionally. Think of it as **"Linktree for Business Intake"** — a single public link that transforms chaotic client requests into structured, actionable data. Intaku is a production-grade intake system designed first for personal use, with a clear path toward multi-tenant SaaS.

### 🌟 Core Concept

```
┌─────────────────────────────────────────────────────────────┐
│                    OLD WORKFLOW ❌                          │
├─────────────────────────────────────────────────────────────┤
│  Client → Random DM → Back-and-forth → Confusion           │
│         → Hours wasted → Maybe work together                │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                    NEW WORKFLOW ✅                          │
├─────────────────────────────────────────────────────────────┤
│  Client → Your Public Link → Structured Form               │
│         → You Review → Professional Response                │
│         → Clear Decision → Work Together                    │
└─────────────────────────────────────────────────────────────┘
```

### 🎭 Two Sides of the Platform

#### 1️⃣ **Public Intake Page** (No Login Required)
- Accessible via unique URL: `yourdomain.com/intake` or `yourdomain.com/username`
- Your **"business front door"** that clients visit
- Branded with your logo, colors, and messaging
- Collects structured client information through customizable forms
- Shows your services, pricing, and availability
- Displays announcements (e.g., "Booking full for Q1")

#### 2️⃣ **Protected Dashboard** (Login Required)
- Your **business control center**
- View and manage all incoming client submissions
- Track client status (New → In Progress → Completed)
- Add private internal notes for team collaboration
- Manage your service catalog
- Build custom intake forms with drag-and-drop
- Customize your public page branding
- Role-based access (Admin, Assistant, Viewer)

---

## 🚨 The Problem & Solution

### The Pain Points

As a freelance developer, I faced these challenges daily:

❌ **Scattered Communication** — Client requests via DMs, emails, social media  
❌ **Repetitive Questions** — Answering "What do you charge?" 100 times  
❌ **Unclear Scopes** — Lengthy back-and-forth before understanding the project  
❌ **Time Wastage** — Discovering projects weren't viable after hours of discussion  
❌ **Unprofessional Image** — Ghosting clients because I forgot to reply  
❌ **No Filtering System** — No way to screen viable projects systematically  

### The Solution

**Kuril Intake flips the script:**

✅ **Centralized Intake** — All requests through one professional form  
✅ **Pre-qualification** — Clients provide budget, timeline, and requirements upfront  
✅ **Professional Image** — Automated confirmations and structured responses  
✅ **Time Efficiency** — Review 10 submissions in the time of 1 DM conversation  
✅ **Smart Filtering** — Focus on projects that match your skills and goals  
✅ **Scalable Workflow** — From solo freelancer to small agency  

---

## ✨ Key Features

### 🌐 Public Features (No Authentication)

#### **Dynamic Intake Form**
- 📝 Admin-created custom fields with full validation
- 🎯 Service selection from pre-defined catalog
- 📎 File uploads for project briefs and references
- ⚡ Real-time validation with immediate feedback
- ✅ Professional submission confirmation

#### **Branded Experience**
- 🎨 Custom logo, favicon, and background images
- 🌈 Color theme configuration (primary, secondary, text)
- 📢 Welcome messages and taglines
- 🔔 Announcement banners (info, warning, success, error)
- 📅 Scheduled announcements with start/end dates

#### **Service Showcase**
- 💼 Display your services with descriptions
- 💰 Transparent pricing ranges
- ⏱️ Estimated completion timelines
- ✨ Feature lists for each service
- 🎯 Help clients choose the right service

### 🔒 Protected Dashboard Features

#### **Client Management**
- 📊 Real-time overview of all submissions
- 🏷️ Status tracking (New, In Progress, Completed, Rejected, Archived)
- 🔍 Advanced filtering and search
- 📝 View detailed client submissions
- 📈 Bulk status updates

#### **Internal Collaboration**
- 💬 Private notes visible only to team
- 👥 Multi-user comments and discussions
- 📅 Activity history with timestamps
- 🔗 Context-rich client records

#### **Service Catalog Management**
- ➕ Create and edit services
- 💵 Set pricing ranges (min/max)
- 📆 Define estimated timelines
- ✅ Feature lists for each service
- 🎚️ Display ordering and active/inactive toggle

#### **Form Builder**
- 🛠️ Drag-and-drop field editor
- 📋 Field types: text, textarea, email, number, select, radio, checkbox, date, file
- ✔️ Custom validation rules per field
- 💡 Help text for user guidance
- 🎯 Required/optional field control
- 📊 Field ordering and visibility

#### **Branding Customization**
- 🎨 Visual settings (colors, logos, images)
- 📝 Content settings (messages, descriptions)
- 🔍 SEO settings (meta tags, Open Graph)
- 🖼️ Image upload and management

#### **User Management**
- 👤 Role-based access control
- 🔐 Admin, Assistant, Viewer roles
- ➕ Add team members with permissions
- 📊 Activity tracking per user

#### **Analytics Dashboard** *(Planned)*
- 📈 Submission trends over time
- ✅ Acceptance rate tracking
- 🎯 Service popularity metrics
- 💰 Budget distribution analysis
- ⏱️ Response time monitoring

---

## 🎬 Demo

### Public Intake Page
```
https://yourdomain.com/intake
```

**What clients see:**
- Branded landing page with your logo and colors
- Service selection with pricing
- Custom intake form fields
- Professional submission confirmation

### Protected Dashboard
```
https://yourdomain.com/dashboard
```

**What you see:**
- All client submissions in one place
- Status management and filtering
- Internal notes and team collaboration
- Service and form customization

**Default Admin Credentials:**
```
Email: admin@kuril.dev
Password: Admin123!
```

⚠️ **Change these immediately after first login!**

---

## 🛠️ Technology Stack

### Backend Technologies

| Technology | Purpose | Why Chosen |
|-----------|---------|------------|
| **Node.js + Express** | Server framework | Perfect balance of simplicity and power |
| **TypeScript** | Type safety | Catch errors before runtime, better DX |
| **PostgreSQL** | Database | ACID compliance, relations, JSON support |
| **Prisma ORM** | Database toolkit | Type-safe queries, excellent migrations |
| **JWT** | Authentication | Stateless, scalable, mobile-friendly |
| **Zod** | Validation | TypeScript-first, type inference |
| **bcrypt** | Password hashing | Industry standard, adaptive difficulty |
| **Winston** | Logging | Multiple transports, production-ready |

### Frontend Technologies

| Technology | Purpose | Why Chosen |
|-----------|---------|------------|
| **React 18** | UI library | Huge ecosystem, component-based |
| **TypeScript** | Type safety | Same benefits as backend |
| **Vite** | Build tool | Lightning-fast HMR, modern tooling |
| **Tailwind CSS** | Styling | Utility-first, rapid development |
| **React Router** | Routing | Standard for React SPAs |
| **Axios** | HTTP client | Interceptors, request/response transforms |
| **React Hook Form** | Form management | Performance-focused, minimal re-renders |
| **Zod** | Validation | Shared schemas with backend |
| **date-fns** | Date utilities | Lightweight, functional |
| **Lucide React** | Icons | Beautiful, consistent icon set |
| **Recharts** | Charts | Composable, React-friendly |

### Development & DevOps

| Technology | Purpose |
|-----------|---------|
| **Git** | Version control |
| **Docker** | Containerization |
| **Docker Compose** | Multi-container orchestration |
| **GitHub Actions** | CI/CD |
| **ESLint** | Code linting |
| **Prettier** | Code formatting |

---

## 🏗️ Architecture

### Design Philosophy: Domain-Driven Design (DDD)

**Why DDD?**

Instead of scattering related code across `controllers/`, `models/`, `services/`, we group everything by **business domain**:

```
features/
├── auth/              # Everything about authentication
├── clients/           # Everything about client management  
├── services/          # Everything about service catalog
├── formBuilder/       # Everything about dynamic forms
├── branding/          # Everything about customization
├── notes/             # Everything about internal notes
├── users/             # Everything about user management
├── announcements/     # Everything about announcements
└── dashboard/         # Everything about analytics
```

**Benefits:**
- ✅ All related code in one place
- ✅ Easy to test in isolation
- ✅ Clear separation of concerns
- ✅ Scalable to microservices

### Application Flow

```
┌─────────────────────────────────────────────────────────┐
│                    CLIENT JOURNEY                        │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  1. Client visits your public intake URL                │
│  2. Sees your branding, services, announcements         │
│  3. Fills custom intake form                            │
│  4. Submits → Stored in database                        │
│  5. Receives confirmation message                       │
│                                                          │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│                    YOUR WORKFLOW                         │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  1. Login to protected dashboard                        │
│  2. See new submission notification                     │
│  3. Review client details and requirements              │
│  4. Add internal notes (if team)                        │
│  5. Update status: Accept / Reject / In Progress        │
│  6. Contact client directly                             │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

### Security Architecture

```typescript
// Multi-layer security approach

1. TypeScript Compile-Time Checks
   └─> Catch type errors during development

2. Zod Runtime Validation  
   └─> Validate all user input at API boundaries

3. JWT Authentication
   ├─> Access Token (15 minutes)
   └─> Refresh Token (7 days)

4. Role-Based Access Control
   ├─> Admin (Full access)
   ├─> Assistant (Read + Comment)
   └─> Viewer (Read only)

5. Database Constraints
   └─> Final safety net, prevent data corruption

6. Rate Limiting
   └─> Prevent brute force and DDoS attacks

7. Security Headers (Helmet.js)
   └─> XSS, clickjacking, MIME-sniffing protection
```

---

## 🚀 Quick Start

### Prerequisites

Ensure you have these installed:

- **Node.js** v18 or higher ([Download](https://nodejs.org/))
- **PostgreSQL** v14 or higher ([Download](https://www.postgresql.org/))
- **npm** or **yarn** (comes with Node.js)
- **Git** ([Download](https://git-scm.com/))

### Installation (5 Minutes)

#### 1. Clone the Repository

```bash
git clone https://github.com/heyitskuril/kuril-intake-client.git
cd kuril-intake-client
```

#### 2. Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Setup environment
cp .env.example .env

# Edit .env with your database credentials
nano .env
```

**Minimal `.env` configuration:**
```env
DATABASE_URL="postgresql://postgres:password@localhost:5432/kuril_intake"
JWT_SECRET="your-super-secret-key-change-this"
JWT_REFRESH_SECRET="your-refresh-secret-change-this"
FRONTEND_URL="http://localhost:5173"
```

```bash
# Generate Prisma client
npm run prisma:generate

# Run migrations
npm run prisma:migrate

# Seed database (creates admin user)
npm run prisma:seed

# Start backend server
npm run dev
```

✅ Backend running at `http://localhost:5000`

#### 3. Frontend Setup

```bash
cd ../frontend

# Install dependencies
npm install

# Setup environment
cp .env.example .env
```

**Minimal `.env` configuration:**
```env
VITE_API_URL=http://localhost:5000/api
```

```bash
# Start frontend server
npm run dev
```

✅ Frontend running at `http://localhost:5173`

#### 4. Access the Application

**Public Intake Page:**
```
http://localhost:5173/intake
```

**Admin Dashboard:**
```
http://localhost:5173/login

Email: admin@kuril.dev
Password: Admin123!
```

---

## 📁 Project Structure

```
intaku/
├── backend/
│   ├── src/
│   │   ├── domains/              # Domain-driven structure
│   │   │   ├── auth/             # Authentication logic
│   │   │   ├── clients/          # Client management
│   │   │   ├── services/         # Service catalog
│   │   │   ├── formBuilder/      # Dynamic form builder
│   │   │   ├── branding/         # Customization
│   │   │   ├── notes/            # Internal notes
│   │   │   ├── users/            # User management
│   │   │   ├── announcements/    # Announcements
│   │   │   ├── activityLogs/     # Audit trail
│   │   │   └── dashboard/        # Analytics
│   │   ├── shared/               # Shared utilities
│   │   │   ├── middleware/       # Express middleware
│   │   │   ├── utils/            # Helper functions
│   │   │   └── types/            # TypeScript types
│   │   ├── config/               # Configuration
│   │   ├── prisma/               # Database schema
│   │   ├── app.ts                # Express app
│   │   └── server.ts             # Server entry
│   └── tests/                    # Test suites
│
├── frontend/
│   ├── src/
│   │   ├── features/             # Feature modules
│   │   │   ├── auth/             # Auth UI & logic
│   │   │   ├── clients/          # Client management UI
│   │   │   ├── services/         # Service management UI
│   │   │   ├── formBuilder/      # Form builder UI
│   │   │   ├── branding/         # Branding UI
│   │   │   ├── notes/            # Notes UI
│   │   │   ├── users/            # User management UI
│   │   │   ├── announcements/    # Announcements UI
│   │   │   ├── dashboard/        # Dashboard UI
│   │   │   └── public/           # Public intake page
│   │   ├── shared/               # Shared components
│   │   │   ├── components/       # Reusable components
│   │   │   ├── hooks/            # Custom React hooks
│   │   │   ├── utils/            # Helper functions
│   │   │   └── types/            # TypeScript types
│   │   ├── pages/                # Page components
│   │   ├── routes/               # Routing configuration
│   │   ├── App.tsx               # Root component
│   │   ├── main.tsx              # Entry point
│   │   └── index.css             # Global styles
│   └── public/                   # Static assets
│
├── docker-compose.yml            # Docker orchestration
└── README.md                     # This file
```

### Key Architectural Patterns

#### 1. **Domain-Based Structure**
Each feature is self-contained with its own:
- Routes (API endpoints)
- Controllers (request handling)
- Services (business logic)
- Repositories (data access)
- Validation (input validation)
- Types (TypeScript definitions)

#### 2. **Repository Pattern**
Separation between business logic and data access:
```typescript
// Service handles business logic
class ClientsService {
  constructor(private repo: ClientsRepository) {}
  
  async create(data) {
    // Business logic here
    return this.repo.create(data);
  }
}

// Repository handles database operations
class ClientsRepository {
  async create(data) {
    return prisma.client.create({ data });
  }
}
```

#### 3. **API Response Standardization**
Consistent response format across all endpoints:
```typescript
// Success
{
  "success": true,
  "message": "Client created successfully",
  "data": { /* response data */ }
}

// Error
{
  "success": false,
  "error": "Validation failed",
  "details": [ /* error details */ ]
}
```

---

## 📊 API Documentation

### Base URL
```
Development: http://localhost:5000/api
Production: https://api.yourdomain.com/api
```

### Authentication Endpoints

#### POST `/auth/login`
Login with credentials.

**Request:**
```json
{
  "email": "admin@kuril.dev",
  "password": "Admin123!"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "accessToken": "eyJhbG...",
    "refreshToken": "eyJhbG...",
    "user": {
      "id": "uuid",
      "name": "Admin User",
      "email": "admin@kuril.dev",
      "role": "admin"
    }
  }
}
```

#### POST `/auth/register`
Register new user (admin only).

#### POST `/auth/refresh`
Refresh access token.

### Client Endpoints

#### POST `/clients` (Public)
Submit intake form.

#### GET `/clients` (Protected)
Get all clients with filtering.

**Query Parameters:**
- `status` - Filter by status
- `search` - Search by name/email
- `limit` - Results per page
- `offset` - Pagination offset

#### GET `/clients/:id` (Protected)
Get single client details.

#### PUT `/clients/:id` (Protected)
Update client status/details.

### Service Endpoints

#### GET `/services/public`
Get all active services (public).

#### POST `/services` (Protected)
Create new service (admin only).

#### PUT `/services/:id` (Protected)
Update service (admin only).

#### DELETE `/services/:id` (Protected)
Delete service (admin only).

### Form Builder Endpoints

#### GET `/form-builder/public`
Get active form fields (public).

#### POST `/form-builder` (Protected)
Create form field (admin only).

#### PUT `/form-builder/:id` (Protected)
Update form field (admin only).

#### DELETE `/form-builder/:id` (Protected)
Delete form field (admin only).

### Branding Endpoints

#### GET `/branding/public`
Get branding settings (public).

#### POST `/branding` (Protected)
Update branding (admin only).

### Full API documentation available in [API_DOCS.md](./API_DOCS.md)

---

## 🐳 Deployment

### Quick Deploy with Docker

```bash
# 1. Create environment file
cat > .env << EOF
DB_PASSWORD=your_secure_password
JWT_SECRET=$(openssl rand -base64 32)
JWT_REFRESH_SECRET=$(openssl rand -base64 32)
FRONTEND_URL=https://yourdomain.com
VITE_API_URL=https://api.yourdomain.com/api
EOF

# 2. Build and start
docker-compose up -d

# 3. Run migrations
docker-compose exec backend npx prisma migrate deploy

# 4. Seed database
docker-compose exec backend npx prisma db seed
```

### Deployment Options

| Platform | Best For | Complexity |
|----------|----------|------------|
| **Docker + VPS** | Full control | Medium |
| **Heroku** | Quick deploy | Easy |
| **Vercel + Railway** | Frontend + Backend | Easy |
| **DigitalOcean App** | All-in-one | Easy |
| **AWS EC2 + RDS** | Production scale | Hard |

### Detailed deployment guides available in [DEPLOYMENT.md](./DEPLOYMENT.md)

---

## 🗺️ Roadmap

### ✅ Phase 1: Core System (Completed)
- [x] User authentication & authorization
- [x] Client intake form submission
- [x] Admin dashboard for client management
- [x] Internal notes system
- [x] Role-based access control
- [x] Service catalog management
- [x] Dynamic form builder
- [x] Branding customization

### 🚧 Phase 2: Enhancement (In Progress)
- [ ] Rich text editor for notes
- [ ] File upload for client attachments
- [ ] Email notifications
- [ ] CSV export functionality
- [ ] Advanced search and filtering
- [ ] Mobile responsive improvements

### 📋 Phase 3: Analytics (Planned)
- [ ] Submission analytics dashboard
- [ ] Conversion rate tracking
- [ ] Budget distribution analysis
- [ ] Service popularity metrics
- [ ] Response time monitoring
- [ ] Custom reports

### ⚡ Phase 4: Automation (Planned)
- [ ] Automated email responses
- [ ] Status change notifications
- [ ] Client follow-up reminders
- [ ] Webhook integrations
- [ ] Slack/Discord notifications
- [ ] Calendar integration

### 🔮 Phase 5: Multi-Tenant SaaS (Future)
- [ ] Multi-tenant architecture
- [ ] Custom subdomain per user
- [ ] Subscription management
- [ ] Usage-based billing
- [ ] Team collaboration
- [ ] API for third-party integrations

### 🚀 Phase 6: Advanced Features (Future)
- [ ] AI-powered client matching
- [ ] Automated pricing suggestions
- [ ] Video consultation booking
- [ ] Contract management
- [ ] Payment processing
- [ ] Multi-language support

---

## 🤝 Contributing

This project welcomes contributions! Whether you're fixing bugs, improving documentation, or proposing new features, your help is appreciated.

### How to Contribute

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### Contribution Guidelines

- Follow existing code style and architecture patterns
- Write tests for new features
- Update documentation as needed
- Keep commits atomic and well-described
- Be respectful in discussions

### Areas Where You Can Help

- 🐛 Bug fixes
- 📚 Documentation improvements
- ✨ Feature implementations
- 🎨 UI/UX enhancements
- 🧪 Test coverage
- 🌍 Translations (future)

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

**What this means:**

✅ **You CAN:**
- Use for personal projects
- Use for commercial projects
- Modify the code
- Distribute the code
- Use privately

❌ **You CANNOT:**
- Hold the author liable
- Use trademarks without permission

⚠️ **You MUST:**
- Include the original license
- State significant changes

---

## 👤 About the Developer

### Hi, I'm Kuril! 👋

I'm a **full-stack developer** passionate about building practical solutions to real-world problems. This project was born from my frustration with disorganized client intake processes.

### Why I Built This

- **Solve Real Problems**: Transform chaotic client requests into structured workflows
- **Learn Best Practices**: Implement production-grade architecture and security
- **Demonstrate Skills**: Showcase full-stack capabilities
- **Share Knowledge**: Help other developers learn from complete projects
- **Build in Public**: Transparent development process

### Tech Stack Proficiency

**Backend:** Node.js, Express, TypeScript, PostgreSQL, Prisma  
**Frontend:** React, TypeScript, Tailwind CSS, Vite  
**DevOps:** Docker, Git, CI/CD  
**Architecture:** Domain-Driven Design, Repository Pattern, SOLID

### What I'm Looking For

I'm actively seeking opportunities as a **Full-Stack Developer** or **Backend Developer**.

**Interested in:**
- Companies valuing clean architecture
- Teams prioritizing mentorship
- Projects solving real problems
- Remote or hybrid opportunities

### Let's Connect!

- 📧 **Email:** [heyitskuril@gmail.com](mailto:heyitskuril@gmail.com)
- 💼 **LinkedIn:** [linkedin.com/in/kuril-dev](https://linkedin.com/in/kuril-dev)
- 🐙 **GitHub:** [@heyitskuril](https://github.com/heyitskuril)
- 🌐 **Portfolio:** [kuril.dev](https://kuril.dev)
- 🐦 **Twitter:** [@heyitskuril](https://twitter.com/heyitskuril)

**Open to:**
- Job opportunities
- Freelance projects
- Collaboration
- Mentorship
- Tech discussions

---

## 🙏 Acknowledgments

This project wouldn't exist without:

- **Open Source Community** - For amazing tools and libraries
- **Stack Overflow** - For countless solutions
- **TypeScript Team** - For making JavaScript enjoyable
- **Prisma Team** - For the best ORM experience
- **Vercel** - For Vite and modern tooling
- **Tailwind Labs** - For revolutionizing CSS

### Special Thanks

- ☕ **Coffee** - Powering late-night coding sessions
- 🐱 **My Cat** - Moral support and keyboard quality assurance
- 😤 **Frustration** - Motivating me to build solutions
- 👀 **You** - For reading this and checking out my work

---

## 💭 Final Thoughts

### This is More Than Code

**It's a philosophy:**

> "Build tools that respect your time. Create systems that scale your impact. Work smarter, not harder."

This project represents:
- **Systems Thinking** over feature accumulation
- **Professional Boundaries** over people-pleasing
- **Quality** over quantity
- **Sustainable Work** over burnout
- **Real Solutions** over tutorial projects

### What I Learned

1. **Architecture Matters** - Good structure saves debugging hours
2. **Security is Essential** - Worth the extra effort
3. **Documentation is Love** - Future-you will thank present-you
4. **Testing Saves Time** - Catch bugs before production
5. **User Experience** - Small details create big impact
6. **Ship It** - Perfectionism vs progress
7. **Ask for Help** - Community is supportive
8. **Build in Public** - Transparency builds trust

---

<div align="center">

**⭐ If you find this project helpful, please consider starring it on GitHub! ⭐**

**Built with ❤️ by [Kuril](https://github.com/heyitskuril)**

**[⬆ Back to Top](#-intaku)**

</div>

==========================================================================================


📁 Project Structure
intaku/
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

### Core Tables

#### Users Table
```prisma
model User {
  id            String   @id @default(uuid())
  name          String
  email         String   @unique
  password      String
  role          UserRole @default(viewer)
  created_at    DateTime @default(now())
  updated_at    DateTime @updatedAt
  
  internal_notes  InternalNote[]
  activity_logs   ActivityLog[]

  @@map("users")
}

enum UserRole {
  admin      // Full access
  assistant  // Read + comment
  viewer     // Read only
}
```

#### Clients Table
```prisma
model Client {
  id              String        @id @default(uuid())
  name            String
  email           String
  business_type   String?
  service_type    String?
  budget          Decimal?      @db.Decimal(15, 2)
  notes           String?       @db.Text
  attachment_url  String?
  form_data       Json?         // Stores dynamic form responses
  status          ClientStatus  @default(new)
  created_at      DateTime      @default(now())
  updated_at      DateTime      @updatedAt
  
  internal_notes  InternalNote[]
  activity_logs   ActivityLog[]

  @@index([status])
  @@index([created_at])
  @@index([email])
  @@map("clients")
}

enum ClientStatus {
  new
  in_progress
  completed
  rejected
  archived
}
```

#### Services Table
```prisma
model Service {
  id              String   @id @default(uuid())
  name            String
  description     String   @db.Text
  slug            String   @unique
  min_price       Decimal  @db.Decimal(15, 2)
  max_price       Decimal  @db.Decimal(15, 2)
  estimated_days  Int
  features        Json     // Array of features included
  is_active       Boolean  @default(true)
  display_order   Int      @default(0)
  created_at      DateTime @default(now())
  updated_at      DateTime @updatedAt

  @@index([is_active])
  @@index([display_order])
  @@map("services")
}
```

#### FormField Table
```prisma
model FormField {
  id              String    @id @default(uuid())
  field_name      String
  field_label     String
  field_type      FieldType
  placeholder     String?
  help_text       String?
  is_required     Boolean   @default(false)
  options         Json?
  validation_rules Json?
  display_order   Int       @default(0)
  is_active       Boolean   @default(true)
  created_at      DateTime  @default(now())
  updated_at      DateTime  @updatedAt

  @@index([is_active])
  @@index([display_order])
  @@map("form_fields")
}

enum FieldType {
  text
  textarea
  email
  number
  select
  radio
  checkbox
  date
  file
}
```

#### BrandingSetting Table
```prisma
model BrandingSetting {
  id          String   @id @default(uuid())
  key         String   @unique
  value       String   @db.Text
  category    String   // "visual", "content", "seo"
  description String?
  created_at  DateTime @default(now())
  updated_at  DateTime @updatedAt

  @@index([category])
  @@map("branding_settings")
}
```

#### Announcements Table
```prisma
model Announcement {
  id          String   @id @default(uuid())
  title       String
  message     String   @db.Text
  type        String   @default("info")
  is_active   Boolean  @default(true)
  priority    Int      @default(0)
  start_date  DateTime?
  end_date    DateTime?
  created_at  DateTime @default(now())
  updated_at  DateTime @updatedAt

  @@index([is_active])
  @@index([priority])
  @@map("announcements")
}
```

#### InternalNote Table
```prisma
model InternalNote {
  id          String   @id @default(uuid())
  client_id   String
  user_id     String
  note        String   @db.Text
  created_at  DateTime @default(now())
  updated_at  DateTime @updatedAt
  
  client      Client   @relation(fields: [client_id], references: [id], onDelete: Cascade)
  user        User     @relation(fields: [user_id], references: [id])

  @@index([client_id])
  @@index([user_id])
  @@map("internal_notes")
}
```

#### ActivityLog Table
```prisma
model ActivityLog {
  id          String          @id @default(uuid())
  user_id     String?
  action      ActivityAction
  target_type String?
  target_id   String?
  metadata    Json?
  ip_address  String?
  user_agent  String?
  created_at  DateTime        @default(now())
  
  user        User?           @relation(fields: [user_id], references: [id])
  client      Client?         @relation(fields: [target_id], references: [id], onDelete: Cascade)

  @@index([user_id])
  @@index([action])
  @@index([created_at])
  @@map("activity_logs")
}

enum ActivityAction {
  client_created
  client_updated
  status_changed
  note_added
  note_updated
  note_deleted
  user_created
  user_updated
  user_deleted
  announcement_created
  announcement_updated
  settings_updated
  service_created
  service_updated
  service_deleted
  form_field_created
  form_field_updated
  form_field_deleted
  branding_updated
  login
  logout
}