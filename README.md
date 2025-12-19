# 🚀 Kuril Intake Client

> **Full-Stack Client Intake Management System**  
> Production-ready PERN stack application for managing client inquiries and submissions

[![Node.js](https://img.shields.io/badge/Node.js-18.x-green.svg)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18.x-61dafb.svg)](https://reactjs.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-14+-336791.svg)](https://www.postgresql.org/)
[![Express](https://img.shields.io/badge/Express-4.18-blue.svg)](https://expressjs.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Demo](#-demo)
- [Tech Stack](#-tech-stack)
- [System Architecture](#-system-architecture)
- [Quick Start](#-quick-start)
- [Project Structure](#-project-structure)
- [Documentation](#-documentation)
- [Development](#-development)
- [Deployment](#-deployment)
- [API Documentation](#-api-documentation)
- [Screenshots](#-screenshots)
- [Contributing](#-contributing)
- [Roadmap](#-roadmap)
- [License](#-license)
- [Support](#-support)
- [Acknowledgments](#-acknowledgments)

---

## 🎯 Overview

**Kuril Intake Client** adalah sistem manajemen intake form modern yang memudahkan bisnis untuk menerima dan mengelola inquiry dari potential clients. Dibangun dengan PERN stack (PostgreSQL, Express, React, Node.js) dengan fokus pada **production-ready**, **scalable**, dan **developer-friendly**.

### 🎬 Use Cases:

- **Digital Agencies** - Manage project inquiries from potential clients
- **Consulting Firms** - Track consultation requests and follow-ups
- **Service Businesses** - Handle service inquiries and bookings
- **SaaS Companies** - Manage demo requests and sales leads
- **Freelancers** - Professional intake form for client projects
- **Startups** - Quick setup for client inquiry management

### 💡 Why Kuril Intake Client?

- ✅ **Zero Setup for Clients** - No registration/login required for submission
- ✅ **Powerful Admin Dashboard** - Secure, JWT-protected management interface
- ✅ **Production Ready** - Security best practices, error handling, validation
- ✅ **Modern Tech Stack** - Latest technologies with great DX
- ✅ **Easy to Deploy** - Multiple deployment options (Docker, VPS, Cloud)
- ✅ **Fully Documented** - Comprehensive docs for every component
- ✅ **Responsive Design** - Mobile-first, works on all devices
- ✅ **Scalable Architecture** - Clean separation, easy to extend

---

## ✨ Features

### 🌐 Public Features (No Authentication):

- **Intake Form Submission**
  - Clean, professional form design
  - Real-time client-side validation
  - Service type selection
  - Budget range tracking
  - Attachment URL support
  - Success/error feedback with toast notifications
  - Mobile responsive design

### 🔐 Admin Features (JWT Protected):

- **Authentication System**
  - Secure JWT-based login
  - Token expiration & refresh
  - Password hashing with bcrypt
  - Auto-logout on token expiry
  - Protected routes

- **Dashboard Overview**
  - Real-time statistics (total, new, reviewed, closed)
  - Recent submissions preview
  - Quick action cards
  - Completion rate tracking
  - Visual status indicators

- **Intake Management**
  - List all submissions with pagination
  - Search functionality (name, email, service)
  - Filter by status (new, reviewed, closed)
  - View detailed submission info
  - Update submission status
  - Delete submissions
  - Responsive table view

- **Submission Details**
  - Full contact information
  - Project requirements
  - Budget information
  - Attachment links
  - Status management
  - Quick actions (email, call)
  - Submission metadata

### 🔧 Technical Features:

**Backend:**
- RESTful API with Express.js
- PostgreSQL database with Prisma ORM
- JWT authentication & authorization
- Bcrypt password hashing
- CORS & Helmet security
- Input validation & sanitization
- Comprehensive error handling
- Request/response logging
- Graceful shutdown
- Environment-based configuration

**Frontend:**
- React 18 with modern hooks
- Vite for blazing-fast dev server
- TanStack Query (React Query) for server state
- Zustand for client state management
- React Hook Form for form handling
- React Router 6 for navigation
- Tailwind CSS for styling
- Axios with interceptors
- Toast notifications
- Responsive design (mobile-first)
- Loading & error states
- Optimistic UI updates

---

## 🎥 Demo

### Live Demo:
- **Public Form**: [https://kuril-intake.vercel.app](https://kuril-intake.vercel.app)
- **Admin Dashboard**: [https://kuril-intake.vercel.app/admin](https://kuril-intake.vercel.app/admin)

### Demo Credentials:
```
Email: admin@kuril.com
Password: admin123
```

---

## 🛠 Tech Stack

### Frontend

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 18.x | UI library |
| **Vite** | 5.x | Build tool & dev server |
| **React Router** | 6.x | Client-side routing |
| **TanStack Query** | 5.x | Server state management |
| **Zustand** | 4.x | Client state management |
| **Axios** | 1.x | HTTP client |
| **React Hook Form** | 7.x | Form handling |
| **Tailwind CSS** | 3.x | Utility-first CSS |
| **Lucide React** | 0.x | Icon library |
| **date-fns** | 3.x | Date formatting |

### Backend

| Technology | Version | Purpose |
|------------|---------|---------|
| **Node.js** | 18.x+ | JavaScript runtime |
| **Express.js** | 4.18+ | Web framework |
| **PostgreSQL** | 14+ | Relational database |
| **Prisma ORM** | 5.x | Database ORM & migrations |
| **bcrypt** | 5.x | Password hashing |
| **jsonwebtoken** | 9.x | JWT authentication |
| **Helmet** | 7.x | Security headers |
| **CORS** | 2.x | Cross-origin handling |
| **dotenv** | 16.x | Environment variables |

### DevOps & Tools

- **Docker** - Containerization
- **PM2** - Process management
- **Nginx** - Reverse proxy
- **Git** - Version control
- **Postman** - API testing
- **Prisma Studio** - Database GUI

---

## 🏗 System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         CLIENT LAYER                             │
│                                                                  │
│  ┌──────────────────────┐         ┌─────────────────────────┐  │
│  │   PUBLIC WEB APP     │         │   ADMIN DASHBOARD       │  │
│  │  (React + Vite)      │         │  (React + Vite)         │  │
│  │                      │         │                         │  │
│  │  - Intake Form       │         │  - Statistics           │  │
│  │  - Validation        │         │  - Intake List          │  │
│  │  - Toast Feedback    │         │  - Detail View          │  │
│  │                      │         │  - Status Management    │  │
│  └──────────┬───────────┘         └─────────┬───────────────┘  │
│             │                               │                   │
└─────────────┼───────────────────────────────┼───────────────────┘
              │                               │
              │      HTTP/HTTPS               │
              │                               │
       ┌──────▼───────────────────────────────▼──────┐
       │          REVERSE PROXY (Nginx)              │
       │  - SSL/TLS Termination                      │
       │  - Load Balancing                           │
       │  - Static File Serving                      │
       └──────┬──────────────────────────────────────┘
              │
       ┌──────▼──────────────────────────────────────┐
       │          API GATEWAY / ROUTER                │
       │           (Express.js)                       │
       │                                              │
       │  ┌────────────────────────────────────────┐ │
       │  │      MIDDLEWARE LAYER                  │ │
       │  │  - CORS Handler                        │ │
       │  │  - Security Headers (Helmet)           │ │
       │  │  - Body Parser                         │ │
       │  │  - JWT Verification                    │ │
       │  │  - Error Handler                       │ │
       │  │  - Request Logger                      │ │
       │  └────────────────────────────────────────┘ │
       │                                              │
       │  ┌────────────────────────────────────────┐ │
       │  │         ROUTE LAYER                    │ │
       │  │                                        │ │
       │  │  /api/intake  ────► Intake Routes     │ │
       │  │  /api/auth    ────► Auth Routes       │ │
       │  │  /            ────► Health Check      │ │
       │  └────────────────────────────────────────┘ │
       │                                              │
       │  ┌────────────────────────────────────────┐ │
       │  │      CONTROLLER LAYER                  │ │
       │  │                                        │ │
       │  │  - Business Logic                      │ │
       │  │  - Input Validation                    │ │
       │  │  - Response Formatting                 │ │
       │  │  - Error Handling                      │ │
       │  └────────────────────────────────────────┘ │
       │                                              │
       │  ┌────────────────────────────────────────┐ │
       │  │         PRISMA ORM                     │ │
       │  │                                        │ │
       │  │  - Query Builder                       │ │
       │  │  - Type Safety                         │ │
       │  │  - Migrations                          │ │
       │  │  - Connection Pool                     │ │
       │  └────────────────────────────────────────┘ │
       └──────┬───────────────────────────────────────┘
              │
       ┌──────▼──────────────────────────────────────┐
       │         DATABASE LAYER                       │
       │          (PostgreSQL)                        │
       │                                              │
       │  ┌─────────────────┐  ┌──────────────────┐  │
       │  │ intake_         │  │  admin_users     │  │
       │  │ submissions     │  │                  │  │
       │  │                 │  │  - id            │  │
       │  │ - id            │  │  - email         │  │
       │  │ - name          │  │  - password_hash │  │
       │  │ - email         │  │  - role          │  │
       │  │ - phone         │  │  - created_at    │  │
       │  │ - service       │  │                  │  │
       │  │ - message       │  └──────────────────┘  │
       │  │ - budget        │                         │
       │  │ - status        │                         │
       │  │ - created_at    │                         │
       │  └─────────────────┘                         │
       └──────────────────────────────────────────────┘
```

### Data Flow:

1. **Client Request** → User submits form or admin performs action
2. **Reverse Proxy** → Nginx handles SSL and routes to API
3. **Middleware** → Request passes through security & validation
4. **Routes** → Maps endpoint to appropriate controller
5. **Controller** → Executes business logic
6. **Prisma ORM** → Queries database with type safety
7. **Database** → PostgreSQL stores/retrieves data
8. **Response** → JSON response sent back through layers

---

## ⚡ Quick Start

### Prerequisites

Make sure you have installed:
- **Node.js** >= 18.x
- **npm** >= 9.x
- **PostgreSQL** >= 14.x
- **Git**

### 1. Clone Repository

```bash
git clone https://github.com/yourusername/kuril-intake-client.git
cd kuril-intake-client
```

### 2. Setup Backend

```bash
# Navigate to backend
cd backend

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env
# Edit .env with your configuration

# Setup database
npx prisma generate
npx prisma migrate dev --name init

# (Optional) Seed admin user
node prisma/seed.js

# Start backend server
npm run dev
```

Backend runs at: **http://localhost:5000**

### 3. Setup Frontend

Open new terminal:

```bash
# Navigate to frontend
cd frontend

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env
# Edit .env with backend URL

# Start frontend server
npm run dev
```

Frontend runs at: **http://localhost:3000**

### 4. Test the Application

1. **Public Form**: Open http://localhost:3000
2. **Admin Login**: Open http://localhost:3000/admin/login
   - Email: `admin@kuril.com`
   - Password: `admin123`

---

## 📁 Project Structure

```
kuril-intake-client/
│
├── backend/                        # Backend API (Node.js + Express)
│   ├── src/
│   │   ├── controllers/            # Business logic
│   │   ├── db/                     # Database connection
│   │   ├── middlewares/            # Express middlewares
│   │   ├── routes/                 # API routes
│   │   ├── utils/                  # Helper functions
│   │   ├── app.js                  # Express app config
│   │   └── server.js               # Server entry point
│   │
│   ├── prisma/
│   │   ├── schema.prisma           # Database schema
│   │   └── migrations/             # Migration history
│   │
│   ├── .env.example                # Environment template
│   ├── package.json                # Backend dependencies
│   └── README.md                   # Backend documentation
│
├── frontend/                       # Frontend App (React + Vite)
│   ├── src/
│   │   ├── components/             # React components
│   │   ├── hooks/                  # Custom hooks
│   │   ├── pages/                  # Page components
│   │   ├── services/               # API services
│   │   ├── store/                  # State management
│   │   ├── App.jsx                 # Main app component
│   │   ├── main.jsx                # Entry point
│   │   └── index.css               # Global styles
│   │
│   ├── .env.example                # Environment template
│   ├── package.json                # Frontend dependencies
│   ├── tailwind.config.js          # Tailwind config
│   ├── vite.config.js              # Vite config
│   └── README.md                   # Frontend documentation
│
├── docker/                         # Docker configurations
│   ├── Dockerfile.backend
│   ├── Dockerfile.frontend
│   └── docker-compose.yml
│
├── docs/                           # Additional documentation
│   ├── API.md                      # API documentation
│   ├── DEPLOYMENT.md               # Deployment guide
│   └── ARCHITECTURE.md             # Architecture details
│
├── .github/
│   └── workflows/                  # CI/CD pipelines
│       ├── backend-ci.yml
│       └── frontend-ci.yml
│
├── .gitignore                      # Git ignore rules
├── LICENSE                         # MIT License
├── CONTRIBUTING.md                 # Contribution guide
├── CHANGELOG.md                    # Version history
└── README.md                       # This file
```

---

## 📚 Documentation

Comprehensive documentation for each part:

### Main Documentation:
- **[ROOT README](README.md)** - This file (overview, quick start)
- **[Backend README](backend/README.md)** - Complete backend guide
- **[Frontend README](frontend/README.md)** - Complete frontend guide

### Additional Docs:
- **[API Documentation](docs/API.md)** - Detailed API endpoints
- **[Deployment Guide](docs/DEPLOYMENT.md)** - Production deployment
- **[Architecture](docs/ARCHITECTURE.md)** - System design deep dive
- **[Contributing](CONTRIBUTING.md)** - How to contribute
- **[Changelog](CHANGELOG.md)** - Version history

### Quick Links:
- [Backend Installation](backend/README.md#-installation)
- [Frontend Installation](frontend/README.md#-installation)
- [API Endpoints](backend/README.md#-api-documentation)
- [Environment Variables](backend/README.md#-environment-variables)
- [Deployment Options](backend/README.md#-deployment)
- [Troubleshooting](backend/README.md#-troubleshooting)

---

## 💻 Development

### Development Workflow

#### 1. Backend Development

```bash
cd backend

# Development mode (auto-restart)
npm run dev

# Production mode
npm start

# Database operations
npx prisma studio           # Open database GUI
npx prisma migrate dev      # Create migration
npx prisma generate         # Generate Prisma Client
```

#### 2. Frontend Development

```bash
cd frontend

# Development mode (HMR)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

### Code Quality

#### Backend Standards:
- Use **CommonJS** (`require`/`module.exports`)
- Follow **MVC-like** architecture
- Add JSDoc comments
- Handle errors properly
- Validate all inputs

#### Frontend Standards:
- Use **ES6+** features
- Functional components with hooks
- Follow React best practices
- Use Tailwind utility classes
- Keep components small & focused

### Git Workflow

```bash
# Create feature branch
git checkout -b feature/amazing-feature

# Make changes
git add .
git commit -m "feat: add amazing feature"

# Push to your fork
git push origin feature/amazing-feature

# Open Pull Request on GitHub
```

---

## 🚀 Deployment

Multiple deployment options available:

### Option 1: Full Stack - Docker Compose (Recommended)

```bash
# Build and start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

**Includes:**
- PostgreSQL database
- Backend API
- Frontend app
- Nginx reverse proxy

### Option 2: Separate Deployment

#### Backend:
- **VPS**: DigitalOcean, Linode, AWS EC2
- **Cloud**: Railway, Heroku, Render
- **Container**: Docker on any platform

[Backend Deployment Guide →](backend/README.md#-deployment)

#### Frontend:
- **Vercel** (Recommended for React)
- **Netlify**
- **AWS S3 + CloudFront**
- **Nginx** on VPS

[Frontend Deployment Guide →](frontend/README.md#-deployment)

### Option 3: Cloud Platforms

#### Railway (Easiest):
```bash
npm install -g @railway/cli
railway login
railway init
railway up
```

#### Vercel (Frontend):
```bash
cd frontend
vercel
```

### Environment Setup

**Backend `.env`:**
```env
PORT=5000
NODE_ENV=production
DATABASE_URL=postgresql://user:pass@host:5432/db
JWT_SECRET=your-32-char-secret
CLIENT_URL=https://yourdomain.com
```

**Frontend `.env`:**
```env
VITE_API_BASE_URL=https://api.yourdomain.com
```

---

## 📖 API Documentation

### Base URL
```
Development: http://localhost:5000
Production: https://api.yourdomain.com
```

### Endpoints Summary

#### Public Endpoints (No Auth):

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Health check |
| POST | `/api/intake` | Submit intake form |
| POST | `/api/auth/login` | Admin login |

#### Protected Endpoints (Requires JWT):

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/auth/me` | Get current admin |
| GET | `/api/intake` | List all intakes (paginated) |
| GET | `/api/intake/:id` | Get intake detail |
| PATCH | `/api/intake/:id/status` | Update intake status |
| DELETE | `/api/intake/:id` | Delete intake |

### Authentication

Protected endpoints require JWT token:

```http
Authorization: Bearer <your-jwt-token>
```

### Example Requests

**Submit Intake:**
```bash
curl -X POST http://localhost:5000/api/intake \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+628123456789",
    "serviceInquiry": "Website Development",
    "message": "I need a corporate website"
  }'
```

**Login Admin:**
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@kuril.com",
    "password": "admin123"
  }'
```

**Get All Intakes:**
```bash
curl -X GET http://localhost:5000/api/intake?page=1&limit=10 \
  -H "Authorization: Bearer YOUR_TOKEN"
```

[Full API Documentation →](backend/README.md#-api-documentation)

---

## 📸 Screenshots

### Public Intake Form
![Intake Form](docs/images/intake-form.png)
*Clean, professional form for client submissions*

### Admin Login
![Admin Login](docs/images/admin-login.png)
*Secure JWT-based authentication*

### Admin Dashboard
![Dashboard](docs/images/dashboard.png)
*Overview with statistics and recent submissions*

### Intakes List
![Intakes List](docs/images/intakes-list.png)
*Manage all submissions with pagination and filters*

### Intake Detail
![Intake Detail](docs/images/intake-detail.png)
*View and manage submission details*

---

## 🤝 Contributing

We welcome contributions from the community!

### How to Contribute:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to the branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

### Contribution Guidelines:

- Follow existing code style
- Write meaningful commit messages
- Add tests for new features
- Update documentation
- Keep PRs focused and small

[Full Contributing Guide →](CONTRIBUTING.md)

---

## 🗺 Roadmap

### Phase 1: MVP ✅ (Current)
- [x] Backend API with Express
- [x] PostgreSQL with Prisma
- [x] JWT Authentication
- [x] Public intake form
- [x] Admin dashboard
- [x] CRUD operations
- [x] Responsive design

### Phase 2: Enhanced Features 🚧 (Next)
- [ ] Email notifications (SMTP)
- [ ] File upload (AWS S3)
- [ ] Export to CSV/PDF
- [ ] Advanced search & filters
- [ ] Bulk operations
- [ ] Activity logs
- [ ] Email templates

### Phase 3: Advanced Features 📋 (Future)
- [ ] Real-time updates (WebSocket)
- [ ] Analytics dashboard
- [ ] Custom fields builder
- [ ] Multi-language support
- [ ] API rate limiting
- [ ] Automated testing (E2E)
- [ ] Performance optimization

### Phase 4: Enterprise Features 📋 (Future)
- [ ] Multi-tenancy support
- [ ] Role-based access control
- [ ] API versioning
- [ ] Webhook integrations
- [ ] Advanced reporting
- [ ] Audit trails
- [ ] Data encryption at rest

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2024 Kuril Intake Client

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...
```

---

## 📞 Support

### Need Help?

- **Documentation**: Check [docs](docs/) folder
- **Issues**: [GitHub Issues](https://github.com/yourusername/kuril-intake-client/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/kuril-intake-client/discussions)
- **Email**: support@kuril.com
- **Discord**: [Join our community](https://discord.gg/kuril)

### Reporting Issues

Please include:
- Operating system & version
- Node.js version
- Steps to reproduce
- Expected vs actual behavior
- Error messages/logs

---

## 🙏 Acknowledgments

### Technologies:
- [Node.js](https://nodejs.org/) - JavaScript runtime
- [Express.js](https://expressjs.com/) - Web framework
- [PostgreSQL](https://www.postgresql.org/) - Database
- [Prisma](https://www.prisma.io/) - Next-generation ORM
- [React](https://reactjs.org/) - UI library
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [TanStack Query](https://tanstack.com/query) - Data fetching

### Inspiration:
- [TypeForm](https://www.typeform.com/) - Form inspiration
- [Airtable](https://www.airtable.com/) - Database UI inspiration
- [Linear](https://linear.app/) - Design inspiration

### Contributors:
Thanks to all contributors who have helped this project grow!

---

## 📊 Project Stats

- **Language**: JavaScript
- **Framework**: Express.js + React
- **Database**: PostgreSQL
- **Lines of Code**: ~5,000+
- **Components**: 15+
- **API Endpoints**: 8
- **Test Coverage**: Coming soon

---

## 🌟 Star History

If you find this project helpful, please consider giving it a ⭐!

[![Star History Chart](https://api.star-history.com/svg?repos=yourusername/kuril-intake-client&type=Date)](https://star-history.com/#yourusername/kuril-intake-client&Date)

---

## 📈 Performance

- **Lighthouse Score**: 95+
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s
- **API Response Time**: < 100ms (avg)
- **Database Queries**: Optimized with indexes

---

<div align="center">

### Built with ❤️ using PERN Stack

**PostgreSQL • Express • React • Node.js**

[⬆ Back to Top](#-kuril-intake-client)

---

Made with 💪 by developers, for developers

**[⭐ Star this repo](https://github.com/yourusername/kuril-intake-client)** • **[🐛 Report Bug](https://github.com/yourusername/kuril-intake-client/issues)** • **[✨ Request Feature](https://github.com/yourusername/kuril-intake-client/issues)**

</div>


bikinin prompt biar nanti dibuatin sama ai untuk mvp app nya

# 🚀 Kuril Intake Client

> **Full-Stack Learning Project - PERN Stack Implementation**  
> A production-ready client intake management system built while mastering full-stack development from Month 3 to Month 5 of the PERN roadmap

[![Node.js](https://img.shields.io/badge/Node.js-18.x-green.svg)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18.x-61dafb.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-14+-336791.svg)](https://www.postgresql.org/)
[![Express](https://img.shields.io/badge/Express-4.18-blue.svg)](https://expressjs.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Roadmap](https://img.shields.io/badge/Learning-PERN_Stack-blueviolet.svg)]()

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Learning Journey](#-learning-journey)
- [Skills Implemented](#-skills-implemented)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [System Architecture](#-system-architecture)
- [Quick Start](#-quick-start)
- [Project Structure](#-project-structure)
- [Development Guide](#-development-guide)
- [Roadmap Integration](#-roadmap-integration)
- [What I Learned](#-what-i-learned)
- [Next Steps](#-next-steps)
- [Documentation](#-documentation)
- [Contributing](#-contributing)
- [License](#-license)
- [Support](#-support)
- [Acknowledgments](#-acknowledgments)

---

## 🎯 Overview

**Kuril Intake Client** adalah project full-stack yang gue bangun sebagai implementasi praktis dari **PERN Stack Learning Roadmap**. Project ini menggabungkan konsep-konsep fundamental yang dipelajari dari **Month 3 (Databases & Security)** sampai **Month 5 (Full-Stack Development)**, dengan penambahan **TypeScript** di Month 4 untuk type-safe development.

### 🎬 Real-World Application:

Sistem ini dirancang untuk:
- **Digital Agencies** - Manage project inquiries from potential clients
- **Consulting Firms** - Track consultation requests and follow-ups
- **Service Businesses** - Handle service inquiries and bookings
- **SaaS Companies** - Manage demo requests and sales leads
- **Freelancers** - Professional intake form for client projects
- **Learning Purpose** - Implement real production patterns

### 💡 Why This Project?

- ✅ **Hands-On Learning** - Apply concepts immediately after learning
- ✅ **Production Patterns** - Real-world architecture, not toy examples
- ✅ **Type Safety** - TypeScript for catching errors early
- ✅ **Progressive Complexity** - Start simple, add features incrementally
- ✅ **Portfolio Ready** - Showcase full-stack capabilities
- ✅ **Best Practices** - Security, testing, deployment included
- ✅ **Documentation First** - Every decision is documented

---

## 📚 Learning Journey

This project maps directly to the **PERN Stack Roadmap**:

### Month 3: Databases & Security (Week 9-12)
**Implemented in Backend**
- ✅ **Week 9**: PostgreSQL Fundamentals → Database design, Prisma ORM, migrations
- ✅ **Week 10**: Authentication E2E → JWT auth, bcrypt, RBAC, security patterns
- ✅ **Week 11**: Dashboard UI → Admin interface (prepared for React integration)
- ✅ **Week 12**: Docs & Deployment → API documentation, deployment strategy

### Month 4: React Core + TypeScript (Week 13-16)
**Implemented in Frontend**
- ✅ **Week 13**: React Fundamentals → Components, state, hooks, props
- ✅ **Week 14**: Routing & Forms → React Router, React Hook Form, validation
- ✅ **Week 15**: Start TypeScript → Type-safe components & props
- ✅ **Week 16**: Finalizing TypeScript → Type-safe utilities, advanced types

### Month 5: Full-Stack Development (Week 17-20)
**Integrated Frontend + Backend**
- ✅ **Week 17**: Connecting Frontend/Backend → Axios, CORS, API integration
- ✅ **Week 18**: Authentication Flow → JWT client-side, protected routes
- ✅ **Week 19**: Admin Panel → CRUD operations, pagination, search
- ✅ **Week 20**: Testing & Deployment → Full production deployment

---

## 🛠 Skills Implemented

### Backend Skills (Month 2-3)

#### Week 7: Express Basics
- ✅ Express routes & controllers
- ✅ Custom middleware & error handling
- ✅ Request validation (manual)
- ✅ RESTful API design
- ✅ HTTP status codes & responses

#### Week 9: PostgreSQL Fundamentals
- ✅ Database schema design
- ✅ Prisma ORM setup & migrations
- ✅ Multi-table relationships (1-to-many)
- ✅ Query optimization & indexing
- ✅ Seed scripts for development

#### Week 10: Authentication E2E
- ✅ Password hashing (bcrypt)
- ✅ JWT access tokens
- ✅ Auth middleware
- ✅ Role-based access control (admin)
- ✅ API protection (CORS, Helmet)
- ✅ Security best practices

### Frontend Skills (Month 4)

#### Week 13: React Fundamentals
- ✅ Functional components with hooks
- ✅ State management (useState)
- ✅ Props & component composition
- ✅ useEffect for side effects
- ✅ Event handling
- ✅ Conditional rendering

#### Week 14: Routing and Forms
- ✅ React Router 6 (client-side routing)
- ✅ Protected routes implementation
- ✅ React Hook Form (form handling)
- ✅ Form validation (client-side)
- ✅ Toast notifications (user feedback)

#### Week 15: Start TypeScript
- ✅ TypeScript configuration (strict mode)
- ✅ Type component props & children
- ✅ Type utility functions & API client
- ✅ React-specific types (FC, ReactNode, etc.)
- ✅ Type custom hooks
- ✅ Interface vs Type decisions

#### Week 16: Finalizing TypeScript
- ✅ Type-safe state management (Zustand)
- ✅ Generic types for reusable components
- ✅ Type-safe API responses
- ✅ Discriminated unions for status
- ✅ Type guards & narrowing
- ✅ Utility types (Pick, Omit, Partial)

### Full-Stack Integration (Month 5)

#### Week 17: Connecting Frontend & Backend
- ✅ Axios HTTP client configuration
- ✅ Request/response interceptors
- ✅ CORS setup & handling
- ✅ Environment variables
- ✅ Error handling globally
- ✅ Type-safe API client

#### Week 18: Authentication & Authorization
- ✅ JWT token management (localStorage)
- ✅ Login/logout flow
- ✅ Protected routes (frontend)
- ✅ Auth state persistence (Zustand)
- ✅ Token refresh strategy (manual)
- ✅ Type-safe auth store

#### Week 19: Admin Panel & Advanced Features
- ✅ Data table with pagination
- ✅ Search functionality
- ✅ Filter by status
- ✅ CRUD operations (Create, Read, Update, Delete)
- ✅ Modal dialogs & confirmations
- ✅ Responsive design (mobile-first)
- ✅ Type-safe components

#### Week 20: Testing & Deployment
- ✅ Environment separation (dev/prod)
- ✅ Production build optimization
- ✅ Deployment configuration
- ✅ API documentation
- ✅ README & setup guides

---

## ✨ Features

### 🌐 Public Features (No Authentication)

**Skills Applied: Week 13-14 (React Fundamentals, Forms)**

- **Intake Form Submission**
  - Clean form UI with validation
  - Real-time error feedback
  - Service type dropdown
  - Budget range selection
  - Success/error notifications
  - Mobile responsive layout
  - TypeScript type safety

### 🔐 Admin Features (JWT Protected)

**Skills Applied: Week 10, 18 (Authentication, Authorization)**

- **Authentication System**
  - JWT-based login
  - Secure password hashing
  - Token expiration handling
  - Auto-logout on expiry
  - Protected routes
  - Type-safe auth flow

**Skills Applied: Week 19 (Admin Panel)**

- **Dashboard Overview**
  - Statistics cards (React components)
  - Recent submissions list
  - Status indicators
  - Quick actions
  - Type-safe data display

- **Intake Management**
  - Paginated table view
  - Search by name/email/service
  - Filter by status
  - View detailed info
  - Update status (new → reviewed → closed)
  - Delete submissions
  - Type-safe CRUD operations

### 🔧 Technical Implementation

**Backend (Month 2-3 Skills)**
- RESTful API with Express.js
- PostgreSQL + Prisma ORM
- JWT authentication & middleware
- Bcrypt password hashing
- CORS & Helmet security
- Input validation
- Error handling middleware
- Graceful shutdown

**Frontend (Month 4-5 Skills)**
- React 18 with Hooks + TypeScript
- Vite dev server (fast HMR)
- React Router 6 (protected routes)
- React Hook Form (forms)
- Zustand (auth state) - type-safe
- TanStack Query (server state) - type-safe
- Tailwind CSS (styling)
- Axios interceptors - type-safe
- Toast notifications
- Full TypeScript coverage

---

## 🛠 Tech Stack

### Backend (Learned in Month 2-3)

| Technology | Version | Purpose | Learned In |
|------------|---------|---------|------------|
| **Node.js** | 18.x+ | JavaScript runtime | Week 6 |
| **Express.js** | 4.18+ | Web framework | Week 7 |
| **PostgreSQL** | 14+ | Database | Week 9 |
| **Prisma ORM** | 5.x | Database ORM | Week 9 |
| **bcrypt** | 5.x | Password hashing | Week 10 |
| **jsonwebtoken** | 9.x | JWT auth | Week 10 |
| **Helmet** | 7.x | Security headers | Week 10 |
| **CORS** | 2.x | Cross-origin | Week 10 |
| **dotenv** | 16.x | Environment variables | Week 7 |

### Frontend (Learned in Month 4-5)

| Technology | Version | Purpose | Learned In |
|------------|---------|---------|------------|
| **React** | 18.x | UI library | Week 13 |
| **TypeScript** | 5.x | Type safety | Week 15-16 |
| **Vite** | 5.x | Build tool | Week 13 |
| **React Router** | 6.x | Routing | Week 14 |
| **React Hook Form** | 7.x | Forms | Week 14 |
| **TanStack Query** | 5.x | Server state | Week 17 |
| **Zustand** | 4.x | Client state | Week 18 |
| **Axios** | 1.x | HTTP client | Week 17 |
| **Tailwind CSS** | 3.x | Styling | Week 13 |
| **Lucide React** | 0.x | Icons | Week 13 |
| **date-fns** | 3.x | Date formatting | Week 19 |

### DevOps & Tools

- **Docker** - Containerization
- **PM2** - Process management
- **Nginx** - Reverse proxy
- **Git** - Version control
- **Postman** - API testing
- **Prisma Studio** - Database GUI
- **ESLint** - Code linting
- **Prettier** - Code formatting

---

## 🏗 System Architecture

**Applied Skills: Week 17-20 (Full-Stack Integration)**

```
┌─────────────────────────────────────────────────────────────────┐
│                CLIENT LAYER (Month 4 + TypeScript)               │
│                                                                  │
│  ┌──────────────────────┐         ┌─────────────────────────┐  │
│  │   PUBLIC FORM        │         │   ADMIN DASHBOARD       │  │
│  │   (Week 13-14)       │         │   (Week 18-19)          │  │
│  │   TypeScript ✓       │         │   TypeScript ✓          │  │
│  │                      │         │                         │  │
│  │  - React Components  │         │  - Protected Routes     │  │
│  │  - Form Validation   │         │  - JWT Token Mgmt       │  │
│  │  - Toast Feedback    │         │  - CRUD Operations      │  │
│  │  - Type-Safe Props   │         │  - Type-Safe State      │  │
│  └──────────┬───────────┘         └─────────┬───────────────┘  │
│             │                               │                   │
└─────────────┼───────────────────────────────┼───────────────────┘
              │                               │
              │   Axios HTTP Client (Week 17) │
              │   - Request Interceptors      │
              │   - Response Interceptors     │
              │   - Error Handling            │
              │   - TypeScript Types ✓        │
              │                               │
       ┌──────▼───────────────────────────────▼──────┐
       │          EXPRESS.JS API (Week 7)             │
       │                                              │
       │  ┌────────────────────────────────────────┐ │
       │  │      MIDDLEWARE (Week 7, 10)           │ │
       │  │  - CORS (Week 10)                      │ │
       │  │  - Helmet (Week 10)                    │ │
       │  │  - JWT Verify (Week 10)                │ │
       │  │  - Error Handler (Week 7)              │ │
       │  └────────────────────────────────────────┘ │
       │                                              │
       │  ┌────────────────────────────────────────┐ │
       │  │      CONTROLLERS (Week 7)              │ │
       │  │  - Business Logic                      │ │
       │  │  - Validation                          │ │
       │  │  - Response Formatting                 │ │
       │  └────────────────────────────────────────┘ │
       │                                              │
       │  ┌────────────────────────────────────────┐ │
       │  │      PRISMA ORM (Week 9)               │ │
       │  │  - Type-Safe Queries                   │ │
       │  │  - Migrations                          │ │
       │  └────────────────────────────────────────┘ │
       └──────┬───────────────────────────────────────┘
              │
       ┌──────▼──────────────────────────────────────┐
       │      POSTGRESQL DATABASE (Week 9)            │
       │                                              │
       │  Tables: intake_submissions, admin_users    │
       │  Indexes: email (for fast search)           │
       └──────────────────────────────────────────────┘
```

### Data Flow:

1. **Client Request** → User submits form or admin performs action (TypeScript validated)
2. **Axios Client** → Type-safe HTTP request with interceptors
3. **Express Middleware** → Security checks & JWT verification
4. **Controllers** → Business logic & validation
5. **Prisma ORM** → Type-safe database queries
6. **PostgreSQL** → Data storage & retrieval
7. **Response** → Type-safe JSON response back to client

---

## ⚡ Quick Start

### Prerequisites (Month 1-2 Setup)

Make sure you have installed:
- **Node.js** >= 18.x (Learned: Week 6)
- **npm** >= 9.x
- **PostgreSQL** >= 14.x (Learned: Week 9)
- **Git** (Learned: Week 3)

### Verify Installation:

```bash
node --version    # v18.x.x or higher
npm --version     # 9.x.x or higher
psql --version    # PostgreSQL 14.x or higher
```

### 1. Clone Repository

```bash
git clone https://github.com/yourusername/kuril-intake-client.git
cd kuril-intake-client
```

### 2. Setup Backend (Week 9-10 Skills)

```bash
cd backend

# Install dependencies
npm install

# Setup environment (Week 10)
cp .env.example .env
# Edit .env with your PostgreSQL credentials

# Database setup (Week 9)
npx prisma generate
npx prisma migrate dev --name init

# Seed admin user (Week 10)
node prisma/seed.js

# Start server (Week 7)
npm run dev
```

Backend runs at: **http://localhost:5000**

### 3. Setup Frontend (Week 13-16 Skills)

```bash
cd frontend

# Install dependencies
npm install

# Setup environment (Week 17)
cp .env.example .env
# Ensure VITE_API_BASE_URL=http://localhost:5000

# Start dev server (Week 13)
npm run dev
```

Frontend runs at: **http://localhost:3000**

### 4. Test Application

1. **Public Form** (Week 13-14): http://localhost:3000
   - Submit intake form
   - Test validation
   - Check success feedback

2. **Admin Login** (Week 18): http://localhost:3000/admin/login
   - Email: `admin@kuril.com`
   - Password: `admin123`
   - Test JWT authentication

3. **Admin Dashboard** (Week 19): http://localhost:3000/admin/dashboard
   - View statistics
   - Recent submissions
   - CRUD operations

---

## 📁 Project Structure

**Applied: Week 7, 9, 13, 15-16 (Separation of Concerns + TypeScript)**

```
kuril-intake-client/
│
├── backend/                        # Backend API (Node.js + Express)
│   ├── src/
│   │   ├── controllers/            # Week 7: Business logic
│   │   │   ├── auth.controller.js
│   │   │   └── intake.controller.js
│   │   │
│   │   ├── db/                     # Week 9: Database connection
│   │   │   └── prisma.js           # Prisma client singleton
│   │   │
│   │   ├── middlewares/            # Week 7, 10: Middlewares
│   │   │   ├── auth.middleware.js  # JWT verification
│   │   │   └── error.middleware.js # Global error handler
│   │   │
│   │   ├── routes/                 # Week 7: API routes
│   │   │   ├── auth.routes.js      # Auth endpoints
│   │   │   └── intake.routes.js    # Intake endpoints
│   │   │
│   │   ├── utils/                  # Week 10: Utilities
│   │   │   └── jwt.js              # JWT helpers
│   │   │
│   │   ├── app.js                  # Week 7: Express config
│   │   └── server.js               # Week 7: Entry point
│   │
│   ├── prisma/
│   │   ├── schema.prisma           # Week 9: DB schema
│   │   ├── seed.js                 # Week 9: Database seeding
│   │   └── migrations/             # Week 9: Migration history
│   │
│   ├── .env.example                # Environment template
│   ├── .gitignore
│   ├── package.json                # Backend dependencies
│   └── README.md                   # Backend documentation
│
├── frontend/                       # Frontend App (React + TypeScript + Vite)
│   ├── src/
│   │   ├── components/             # Week 13: Reusable UI
│   │   │   ├── AdminLayout.tsx
│   │   │   └── ProtectedRoute.tsx
│   │   │
│   │   ├── hooks/                  # Week 17: Custom hooks
│   │   │   ├── useAuth.ts          # Auth hooks
│   │   │   └── useIntakes.ts       # Intake data hooks
│   │   │
│   │   ├── pages/                  # Week 13-14: Pages
│   │   │   ├── PublicForm.tsx
│   │   │   ├── AdminLogin.tsx
│   │   │   ├── Dashboard.tsx
│   │   │   ├── IntakesList.tsx
│   │   │   └── IntakeDetail.tsx
│   │   │
│   │   ├── services/               # Week 17: API client
│   │   │   ├── axios.ts            # Axios instance
│   │   │   └── api.ts              # API functions
│   │   │
│   │   ├── store/                  # Week 18: State management
│   │   │   └── authStore.ts        # Zustand auth store
│   │   │
│   │   ├── types/                  # Week 15-16: TypeScript types
│   │   │   └── index.ts            # All type definitions
│   │   │
│   │   ├── utils/                  # Week 16: Utilities
│   │   │   └── helpers.ts          # Helper functions
│   │   │
│   │   ├── App.tsx                 # Week 13: Main component
│   │   ├── main.tsx                # Week 13: Entry point
│   │   ├── index.css               # Global styles
│   │   └── vite-env.d.ts           # Week 15: Vite types
│   │
│   ├── public/                     # Static assets
│   ├── .env.example                # Environment template
│   ├── .gitignore
│   ├── eslint.config.js            # ESLint config
│   ├── index.html                  # HTML template
│   ├── package.json                # Frontend dependencies
│   ├── postcss.config.js           # PostCSS config
│   ├── tailwind.config.js          # Tailwind config
│   ├── tsconfig.json               # Week 15: TS config
│   ├── tsconfig.node.json          # Week 15: Node TS config
│   ├── vite.config.ts              # Vite configuration
│   └── README.md                   # Frontend documentation
│
├── docs/                           # Additional documentation
│   ├── API.md                      # API documentation
│   ├── TYPESCRIPT_GUIDE.md         # TypeScript implementation guide
│   └── ARCHITECTURE.md             # Architecture details
│
├── .gitignore                      # Git ignore rules
├── LICENSE                         # MIT License
├── CONTRIBUTING.md                 # Contribution guide
└── README.md                       # This file
```

---

## 💻 Development Guide

### Backend Development (Week 7, 9, 10)

```bash
cd backend

# Development mode (auto-restart with nodemon)
npm run dev

# Production mode
npm start

# Database operations (Week 9)
npx prisma studio           # Open visual DB editor (localhost:5555)
npx prisma migrate dev      # Create new migration
npx prisma generate         # Update Prisma Client
npx prisma migrate reset    # Reset database (careful!)
```

### Frontend Development (Week 13-16)

```bash
cd frontend

# Development mode (with HMR)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Type check
npx tsc --noEmit
```

### Code Quality

#### Backend Standards:
- Use **CommonJS** (`require`/`module.exports`)
- Follow **MVC-like** architecture
- Add JSDoc comments for functions
- Handle all errors properly
- Validate inputs before processing
- Use meaningful variable names

#### Frontend Standards (TypeScript):
- Use **ES6+** features and TypeScript
- Functional components with hooks
- Type all props, state, and functions
- Use `interface` for objects, `type` for unions
- Follow React best practices
- Use Tailwind utility classes
- Keep components small & focused
- Extract reusable logic into custom hooks

### Git Workflow

```bash
# Create feature branch
git checkout -b feature/amazing-feature

# Make changes and commit
git add .
git commit -m "feat: add amazing feature"

# Push to your fork
git push origin feature/amazing-feature

# Open Pull Request on GitHub
```

---

## 🗺 Roadmap Integration

### ✅ Completed Skills

**Month 3: Databases & Security**
- [x] Week 9: PostgreSQL setup, Prisma ORM, schema design
- [x] Week 10: JWT auth, bcrypt, middleware, RBAC
- [x] Week 12: API documentation, deployment strategy

**Month 4: React Core + TypeScript**
- [x] Week 13: Components, hooks, state management
- [x] Week 14: React Router, forms, validation
- [x] Week 15: TypeScript setup, component typing
- [x] Week 16: Advanced types, type-safe utilities

**Month 5: Full-Stack Development**
- [x] Week 17: API integration, Axios setup, type-safe client
- [x] Week 18: Auth flow, protected routes, type-safe store
- [x] Week 19: Admin panel, CRUD operations, type-safe components
- [x] Week 20: Production deployment, documentation

### 🚧 Next Enhancements (Future Skills)

**Month 6: Advanced JavaScript & Algorithms**
- [ ] Refactor with advanced JS patterns
- [ ] Optimize data structures usage
- [ ] Apply algorithm optimization
- [ ] Advanced TypeScript patterns

**Month 7: Testing & CI/CD**
- [ ] Week 25: Frontend unit tests (Jest + RTL + TypeScript)
- [ ] Week 26: Backend integration tests
- [ ] Week 27: GitHub Actions CI/CD with type checking
- [ ] Week 28: Performance optimization

**Month 8: Monitoring & Observability**
- [ ] Week 30: Logging (Winston) with type-safe logs
- [ ] Week 31: Monitoring (Sentry) with TypeScript SDK
- [ ] Week 32: Security audit

**Month 9: Capstone Project**
- [ ] Build advanced features
- [ ] Backend TypeScript migration (optional)
- [ ] GraphQL with TypeScript (Week 24)
- [ ] Real-time features

---

## 💡 What I Learned

### Backend Lessons (Month 2-3)

**Week 7 - Express Basics:**
- How to structure API routes properly
- Middleware pattern for reusable logic
- Error handling best practices
- Request/response lifecycle understanding

**Week 9 - PostgreSQL:**
- Database schema design principles
- Prisma ORM advantages over raw SQL
- Migration workflow for version control
- Indexing for query performance
- One-to-many relationships

**Week 10 - Authentication:**
- Never store plain passwords (always hash with bcrypt)
- JWT token structure and security considerations
- Middleware pattern for route protection
- CORS and security headers importance
- Role-based access control implementation

### Frontend Lessons (Month 4)

**Week 13 - React Fundamentals:**
- Component-based architecture benefits
- State management with hooks
- Props vs state differences
- useEffect lifecycle understanding
- Event handling patterns

**Week 14 - Routing & Forms:**
- Client-side routing advantages
- Form validation strategies
- Controlled vs uncontrolled inputs
- User feedback importance (toast notifications)
- Protected route implementation

**Week 15 - Start TypeScript:**
- Type safety catches bugs at compile time
- Interface vs Type for props (use interface for objects)
- Generic types for reusable components
- TypeScript + React patterns (FC, ReactNode, etc.)
- Type inference reduces verbosity

**Week 16 - Finalizing TypeScript:**
- Type inference saves time (don't over-type)
- Discriminated unions for state management
- Type guards for runtime safety
- Utility types (Pick, Omit, Partial) are powerful
- Strict mode catches more errors

### Full-Stack Lessons (Month 5)

**Week 17 - Integration:**
- Frontend-backend communication patterns
- Axios interceptors power for global handling
- CORS configuration challenges
- Environment variable management
- Type-safe API client benefits

**Week 18 - Auth Flow:**
- Token storage strategies (localStorage)
- Protected route implementation patterns
- State persistence challenges
- User experience during authentication
- Type-safe auth store prevents errors

**Week 19 - Admin Panel:**
- Pagination necessity for large datasets
- Search & filter UX patterns
- CRUD operation patterns
- Responsive design challenges
- Type-safe components improve DX

**Week 20 - Deployment:**
- Environment separation importance
- Production build optimization
- SSL/TLS certificate setup
- Database migration in production
- Documentation is crucial

---

## 🚀 Next Steps

### Immediate (This Week)
- [ ] Complete TypeScript migration (100% coverage)
- [ ] Add Zod for runtime validation
- [ ] Add email notifications (SMTP)
- [ ] Implement file upload for attachments
- [ ] Add more filter options
- [ ] Improve error messages

### Short Term (Month 7-8)
- [ ] Write unit tests with TypeScript (Jest + @testing-library/react)
- [ ] Write integration tests for API
- [ ] Setup CI/CD pipeline with type checking
- [ ] Add monitoring (Sentry) with TypeScript SDK
- [ ] Performance optimization (Lighthouse audit)
- [ ] Add request validation (Zod)

### Long Term (Month 9-10)
- [ ] Migrate backend to TypeScript (optional)
- [ ] Add GraphQL endpoint with TypeScript (Week 24)
- [ ] Real-time updates (WebSocket) with type-safe events
- [ ] Advanced analytics dashboard
- [ ] Multi-language support with type-safe i18n
- [ ] Mobile app with React Native + TypeScript

---

## 📚 Documentation

Comprehensive documentation for each part:

### Main Documentation:
- **[ROOT README](README.md)** - This file (overview, quick start)
- **[Backend README](backend/README.md)** - Complete backend guide
- **[Frontend README](frontend/README.md)** - Complete frontend guide

### Additional Docs:
- **[TypeScript Guide](docs/TYPESCRIPT_GUIDE.md)** - TypeScript implementation details
- **[API Documentation](docs/API.md)** - Detailed API endpoints
- **[Architecture](docs/ARCHITECTURE.md)** - System design deep dive
- **[Contributing](CONTRIBUTING.md)** - How to contribute
- **[Changelog](CHANGELOG.md)** - Version history

### Quick Links:
- [Backend Installation](backend/README.md#-installation)
- [Frontend Installation](frontend/README.md#-installation)
- [TypeScript Setup](docs/TYPESCRIPT_GUIDE.md#-setup-typescript)
- [API Endpoints](backend/README.md#-api-documentation)
- [Environment Variables](backend/README.md#-environment-variables)
- [Deployment Options](backend/README.md#-deployment)
- [