# 🚀 Kuril Intake Client

> **Production-Ready Client Intake Management System**  
> Built with PERN Stack (PostgreSQL, Express, React, Node.js)

[![Node.js](https://img.shields.io/badge/Node.js-18.x-green.svg)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.18-blue.svg)](https://expressjs.com/)
[![React](https://img.shields.io/badge/React-18.x-61dafb.svg)](https://reactjs.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-14+-336791.svg)](https://www.postgresql.org/)
[![Prisma](https://img.shields.io/badge/Prisma-5.x-2D3748.svg)](https://www.prisma.io/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [System Architecture](#-system-architecture)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Environment Variables](#-environment-variables)
- [Database Setup](#-database-setup)
- [Running the Application](#-running-the-application)
- [API Documentation](#-api-documentation)
- [Project Structure](#-project-structure)
- [Security Features](#-security-features)
- [Production Deployment](#-production-deployment)
- [Testing](#-testing)
- [Monitoring & Logging](#-monitoring--logging)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎯 Overview

**Kuril Intake Client** adalah sistem manajemen intake form untuk mengelola submission dari potential clients. Sistem ini memisahkan antara **client submission (public)** dan **admin dashboard (protected)** dengan authentication JWT.

### Use Cases:
- **Digital Agency**: Intake form untuk project inquiries
- **Consulting Firm**: Client consultation requests
- **Service Business**: Service inquiry management
- **SaaS Companies**: Demo request tracking

---

## ✨ Features

### Client Features (Public):
- ✅ Submit intake form tanpa registrasi
- ✅ Upload attachment (optional)
- ✅ Email notification (optional)
- ✅ Form validation
- ✅ Mobile responsive

### Admin Features (Protected):
- ✅ Secure JWT-based authentication
- ✅ Dashboard dengan statistics
- ✅ View all submissions dengan pagination
- ✅ Search & filter by status
- ✅ View detailed submission
- ✅ Update submission status (new → reviewed → closed)
- ✅ Delete submissions
- ✅ Export to CSV (optional)

### Technical Features:
- ✅ RESTful API architecture
- ✅ Password hashing dengan bcrypt
- ✅ JWT token authentication
- ✅ Rate limiting
- ✅ CORS protection
- ✅ Helmet security headers
- ✅ Error handling middleware
- ✅ Input validation & sanitization
- ✅ Database connection pooling
- ✅ Graceful shutdown
- ✅ Health check endpoint
- ✅ Logging system

---

## 🛠 Tech Stack

### Backend:
| Technology | Version | Purpose |
|------------|---------|---------|
| **Node.js** | 18.x+ | Runtime environment |
| **Express.js** | 4.18+ | Web framework |
| **PostgreSQL** | 14+ | Primary database |
| **Prisma ORM** | 5.x | Database ORM |
| **JWT** | 9.x | Authentication |
| **bcrypt** | 5.x | Password hashing |
| **Helmet** | 7.x | Security headers |
| **CORS** | 2.x | Cross-origin handling |
| **dotenv** | 16.x | Environment config |
| **express-rate-limit** | 7.x | Rate limiting |
| **winston** | 3.x | Logging |

### Frontend (Coming Soon):
| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 18.x | UI framework |
| **React Router** | 6.x | Client routing |
| **Axios** | 1.x | HTTP client |
| **Tailwind CSS** | 3.x | Styling |
| **React Hook Form** | 7.x | Form handling |
| **React Query** | 5.x | Server state management |
| **Zustand** | 4.x | Client state management |

### DevOps:
- **Docker** - Containerization
- **Nginx** - Reverse proxy
- **PM2** - Process manager
- **GitHub Actions** - CI/CD
- **PostgreSQL** - Production database

---

## 🏗 System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                      CLIENT LAYER                            │
│  ┌──────────────┐              ┌─────────────────────┐      │
│  │ Public Form  │              │  Admin Dashboard    │      │
│  │ (No Auth)    │              │  (JWT Protected)    │      │
│  └──────┬───────┘              └──────────┬──────────┘      │
│         │                                  │                 │
└─────────┼──────────────────────────────────┼─────────────────┘
          │                                  │
          │         ┌───────────────┐        │
          └────────►│   NGINX       │◄───────┘
                    │ Reverse Proxy │
                    └───────┬───────┘
                            │
          ┌─────────────────┼─────────────────┐
          │         EXPRESS.JS API SERVER      │
          │  ┌──────────────────────────────┐  │
          │  │   Middleware Layer           │  │
          │  │  • CORS                      │  │
          │  │  • Helmet (Security)         │  │
          │  │  • Rate Limiter              │  │
          │  │  • JWT Authentication        │  │
          │  │  • Error Handler             │  │
          │  └──────────────────────────────┘  │
          │                                     │
          │  ┌──────────────────────────────┐  │
          │  │   Route Layer                │  │
          │  │  • /api/intake               │  │
          │  │  • /api/auth                 │  │
          │  └──────────────────────────────┘  │
          │                                     │
          │  ┌──────────────────────────────┐  │
          │  │   Controller Layer           │  │
          │  │  • Business Logic            │  │
          │  │  • Validation                │  │
          │  │  • Response Handling         │  │
          │  └──────────────────────────────┘  │
          │                                     │
          │  ┌──────────────────────────────┐  │
          │  │   Prisma ORM                 │  │
          │  │  • Query Builder             │  │
          │  │  • Type Safety               │  │
          │  │  • Migration                 │  │
          │  └──────────────────────────────┘  │
          └─────────────────┬───────────────────┘
                            │
                    ┌───────▼───────┐
                    │  PostgreSQL   │
                    │   Database    │
                    └───────────────┘
```

---

## 📦 Prerequisites

Sebelum install, pastikan sudah ada:

- **Node.js** >= 18.x ([Download](https://nodejs.org/))
- **npm** >= 9.x (included with Node.js)
- **PostgreSQL** >= 14.x ([Download](https://www.postgresql.org/download/))
- **Git** ([Download](https://git-scm.com/))
- **Postman** atau **Thunder Client** (untuk testing API)

### Verify Installation:

```bash
node --version    # Should show v18.x or higher
npm --version     # Should show v9.x or higher
psql --version    # Should show PostgreSQL 14.x or higher
git --version     # Should show git version
```

---

## 🚀 Installation

### 1. Clone Repository

```bash
git clone https://github.com/yourusername/kuril-intake-client.git
cd kuril-intake-client
```

### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

### 3. Install Frontend Dependencies (Coming Soon)

```bash
cd ../frontend
npm install
```

---

## 🔐 Environment Variables

### Backend Environment Variables

Buat file `.env` di folder `backend/`:

```bash
cp .env.example .env
```

Edit `.env` dengan konfigurasi kamu:

```env
# ==========================================
# SERVER CONFIGURATION
# ==========================================
PORT=5000
NODE_ENV=development

# ==========================================
# DATABASE CONFIGURATION
# ==========================================
DATABASE_URL="postgresql://username:password@localhost:5432/kuril_intake?schema=public"

# Format: postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=SCHEMA
# Example: postgresql://postgres:admin123@localhost:5432/kuril_intake?schema=public

# ==========================================
# JWT CONFIGURATION
# ==========================================
JWT_SECRET=your-super-secret-jwt-key-min-32-characters-long-change-this
JWT_EXPIRES_IN=7d

# ==========================================
# CORS CONFIGURATION
# ==========================================
CLIENT_URL=http://localhost:3000

# ==========================================
# RATE LIMITING
# ==========================================
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100

# ==========================================
# EMAIL CONFIGURATION (Optional)
# ==========================================
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
EMAIL_FROM=noreply@kuril.com

# ==========================================
# FILE UPLOAD CONFIGURATION (Optional)
# ==========================================
MAX_FILE_SIZE=5242880
UPLOAD_PATH=./uploads
```

### Environment Variables Explanation:

| Variable | Description | Default | Required |
|----------|-------------|---------|----------|
| `PORT` | Server port | 5000 | Yes |
| `NODE_ENV` | Environment mode | development | Yes |
| `DATABASE_URL` | PostgreSQL connection string | - | Yes |
| `JWT_SECRET` | Secret key for JWT (min 32 chars) | - | Yes |
| `JWT_EXPIRES_IN` | Token expiration time | 7d | Yes |
| `CLIENT_URL` | Frontend URL for CORS | http://localhost:3000 | Yes |
| `RATE_LIMIT_WINDOW_MS` | Rate limit time window | 900000 (15 min) | No |
| `RATE_LIMIT_MAX_REQUESTS` | Max requests per window | 100 | No |
| `SMTP_*` | Email configuration | - | No |
| `MAX_FILE_SIZE` | Max upload size in bytes | 5MB | No |

---

## 💾 Database Setup

### 1. Create PostgreSQL Database

```bash
# Login ke PostgreSQL
psql -U postgres

# Buat database
CREATE DATABASE kuril_intake;

# Verify
\l

# Exit
\q
```

### 2. Generate Prisma Client

```bash
cd backend
npx prisma generate
```

### 3. Run Database Migration

```bash
npx prisma migrate dev --name init
```

Ini akan:
- Buat tables di database
- Generate Prisma Client
- Apply schema changes

### 4. (Optional) Seed Initial Data

Buat file `prisma/seed.js`:

```javascript
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

async function main() {
  // Create admin user
  const passwordHash = await bcrypt.hash('admin123', 10);
  
  const admin = await prisma.adminUser.create({
    data: {
      email: 'admin@kuril.com',
      passwordHash,
      role: 'admin',
    },
  });

  console.log('✅ Admin created:', admin.email);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
```

Run seed:

```bash
node prisma/seed.js
```

### 5. (Optional) Open Prisma Studio

```bash
npx prisma studio
```

Browser akan terbuka di `http://localhost:5555` - GUI untuk manage database.

---

## 🏃‍♂️ Running the Application

### Development Mode

```bash
# Backend
cd backend
npm run dev

# Server running at http://localhost:5000
```

### Production Mode

```bash
# Backend
cd backend
npm start
```

### Check Health

```bash
curl http://localhost:5000/
```

Response:
```json
{
  "success": true,
  "message": "Kuril Intake API is running",
  "version": "1.0.0",
  "timestamp": "2024-01-15T10:00:00.000Z"
}
```

---

## 📚 API Documentation

### Base URL

```
Development: http://localhost:5000
Production: https://api.kuril.com
```

### Authentication

Protected endpoints require JWT token in header:

```
Authorization: Bearer <your-jwt-token>
```

---

### 🔓 Public Endpoints

#### 1. Health Check

```http
GET /
```

**Response:**
```json
{
  "success": true,
  "message": "Kuril Intake API is running",
  "version": "1.0.0",
  "timestamp": "2024-01-15T10:00:00.000Z"
}
```

---

#### 2. Submit Intake Form

```http
POST /api/intake
Content-Type: application/json
```

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+628123456789",
  "serviceInquiry": "Website Development",
  "message": "I need a corporate website with CMS functionality",
  "budgetRange": "$5000 - $10000",
  "attachmentUrl": "https://example.com/project-brief.pdf"
}
```

**Required Fields:**
- `name` (string)
- `email` (string, valid email format)
- `phone` (string)
- `serviceInquiry` (string)
- `message` (string)

**Optional Fields:**
- `budgetRange` (string)
- `attachmentUrl` (string, valid URL)

**Success Response (201):**
```json
{
  "success": true,
  "message": "Intake form submitted successfully",
  "data": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+628123456789",
    "serviceInquiry": "Website Development",
    "message": "I need a corporate website with CMS functionality",
    "budgetRange": "$5000 - $10000",
    "attachmentUrl": "https://example.com/project-brief.pdf",
    "status": "new",
    "createdAt": "2024-01-15T10:00:00.000Z"
  }
}
```

**Error Response (400):**
```json
{
  "success": false,
  "message": "Please provide all required fields",
  "required": ["name", "email", "phone", "serviceInquiry", "message"]
}
```

---

#### 3. Admin Login

```http
POST /api/auth/login
Content-Type: application/json
```

**Request Body:**
```json
{
  "email": "admin@kuril.com",
  "password": "admin123"
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": "550e8400-e29b-41d4-a716-446655440000",
      "email": "admin@kuril.com",
      "role": "admin"
    }
  }
}
```

**Error Response (401):**
```json
{
  "success": false,
  "message": "Invalid credentials"
}
```

---

### 🔐 Protected Endpoints (Admin Only)

#### 4. Get Current Admin Profile

```http
GET /api/auth/me
Authorization: Bearer <token>
```

**Success Response (200):**
```json
{
  "success": true,
  "data": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "email": "admin@kuril.com",
    "role": "admin",
    "createdAt": "2024-01-01T10:00:00.000Z"
  }
}
```

---

#### 5. Get All Intake Submissions

```http
GET /api/intake?page=1&limit=10&status=new
Authorization: Bearer <token>
```

**Query Parameters:**
- `page` (number, default: 1)
- `limit` (number, default: 10, max: 100)
- `status` (string, optional: "new" | "reviewed" | "closed")

**Success Response (200):**
```json
{
  "success": true,
  "data": [
    {
      "id": "550e8400-e29b-41d4-a716-446655440000",
      "name": "John Doe",
      "email": "john@example.com",
      "phone": "+628123456789",
      "serviceInquiry": "Website Development",
      "message": "I need a corporate website",
      "budgetRange": "$5000 - $10000",
      "attachmentUrl": null,
      "status": "new",
      "createdAt": "2024-01-15T10:00:00.000Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 25,
    "totalPages": 3
  }
}
```

---

#### 6. Get Single Intake Submission

```http
GET /api/intake/:id
Authorization: Bearer <token>
```

**Success Response (200):**
```json
{
  "success": true,
  "data": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+628123456789",
    "serviceInquiry": "Website Development",
    "message": "I need a corporate website with CMS functionality",
    "budgetRange": "$5000 - $10000",
    "attachmentUrl": "https://example.com/brief.pdf",
    "status": "new",
    "createdAt": "2024-01-15T10:00:00.000Z"
  }
}
```

**Error Response (404):**
```json
{
  "success": false,
  "message": "Intake submission not found"
}
```

---

#### 7. Update Intake Status

```http
PATCH /api/intake/:id/status
Authorization: Bearer <token>
Content-Type: application/json
```

**Request Body:**
```json
{
  "status": "reviewed"
}
```

**Valid Status Values:**
- `new` - Baru submit
- `reviewed` - Sudah direview
- `closed` - Sudah selesai/ditutup

**Success Response (200):**
```json
{
  "success": true,
  "message": "Status updated successfully",
  "data": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "status": "reviewed",
    "...": "..."
  }
}
```

**Error Response (400):**
```json
{
  "success": false,
  "message": "Invalid status. Must be one of: new, reviewed, closed"
}
```

---

#### 8. Delete Intake Submission

```http
DELETE /api/intake/:id
Authorization: Bearer <token>
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Intake submission deleted successfully"
}
```

**Error Response (404):**
```json
{
  "success": false,
  "message": "Record not found"
}
```

---

### Error Response Format

All errors follow this format:

```json
{
  "success": false,
  "message": "Error message here",
  "stack": "Stack trace (development only)"
}
```

**Common HTTP Status Codes:**
- `200` - OK
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `404` - Not Found
- `409` - Conflict (Duplicate)
- `429` - Too Many Requests (Rate Limited)
- `500` - Internal Server Error

---

## 📁 Project Structure

```
kuril-intake-client/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── auth.controller.js      # Auth business logic
│   │   │   └── intake.controller.js    # Intake business logic
│   │   │
│   │   ├── db/
│   │   │   └── prisma.js               # Prisma client singleton
│   │   │
│   │   ├── middlewares/
│   │   │   ├── auth.middleware.js      # JWT verification
│   │   │   ├── error.middleware.js     # Global error handler
│   │   │   └── rateLimit.middleware.js # Rate limiting
│   │   │
│   │   ├── routes/
│   │   │   ├── auth.routes.js          # Auth endpoints
│   │   │   └── intake.routes.js        # Intake endpoints
│   │   │
│   │   ├── utils/
│   │   │   ├── jwt.js                  # JWT helpers
│   │   │   ├── logger.js               # Winston logger
│   │   │   └── validation.js           # Input validation
│   │   │
│   │   ├── app.js                      # Express app setup
│   │   └── server.js                   # Server entry point
│   │
│   ├── prisma/
│   │   ├── schema.prisma               # Database schema
│   │   ├── seed.js                     # Database seeding
│   │   └── migrations/                 # Migration files
│   │
│   ├── tests/                          # Test files
│   │   ├── unit/
│   │   └── integration/
│   │
│   ├── .env                            # Environment variables (gitignored)
│   ├── .env.example                    # Environment template
│   ├── .gitignore
│   ├── package.json
│   └── README.md
│
├── frontend/ (Coming Soon)
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── hooks/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── docker/
│   ├── Dockerfile.backend
│   ├── Dockerfile.frontend
│   └── docker-compose.yml
│
├── .github/
│   └── workflows/
│       ├── ci.yml                      # CI pipeline
│       └── cd.yml                      # CD pipeline
│
├── docs/
│   ├── API.md                          # API documentation
│   ├── DEPLOYMENT.md                   # Deployment guide
│   └── CONTRIBUTING.md                 # Contribution guide
│
├── .gitignore
├── LICENSE
└── README.md
```

---

## 🔒 Security Features

### 1. Authentication & Authorization
- ✅ JWT-based authentication
- ✅ Token expiration (7 days default)
- ✅ Password hashing with bcrypt (10 rounds)
- ✅ Protected admin routes

### 2. Input Validation
- ✅ Email format validation
- ✅ Required field checking
- ✅ SQL injection prevention (Prisma ORM)
- ✅ XSS protection

### 3. Security Headers (Helmet)
- ✅ Content Security Policy
- ✅ X-Frame-Options
- ✅ X-Content-Type-Options
- ✅ Strict-Transport-Security

### 4. Rate Limiting
- ✅ 100 requests per 15 minutes per IP
- ✅ Prevents brute force attacks
- ✅ Configurable limits

### 5. CORS Protection
- ✅ Whitelist specific origins
- ✅ Credentials support
- ✅ Method restrictions

### 6. Environment Security
- ✅ Secrets in environment variables
- ✅ No hardcoded credentials
- ✅ .env file in .gitignore

### 7. Error Handling
- ✅ No stack trace in production
- ✅ Consistent error format
- ✅ Logging for debugging

---

## 🚀 Production Deployment

### Deployment Checklist

#### Pre-Deployment:

- [ ] Set `NODE_ENV=production`
- [ ] Use strong `JWT_SECRET` (min 32 characters)
- [ ] Configure production database URL
- [ ] Set up SSL/TLS certificate
- [ ] Enable rate limiting
- [ ] Configure CORS for production domain
- [ ] Set up logging service (Winston → File/Cloud)
- [ ] Configure email service (SMTP)
- [ ] Set up file upload service (S3/Cloud Storage)
- [ ] Disable `/api/auth/register` endpoint
- [ ] Set up database backups
- [ ] Configure monitoring (New Relic/Datadog)
- [ ] Set up error tracking (Sentry)

#### Deployment Options:

### Option 1: VPS (DigitalOcean, Linode, AWS EC2)

```bash
# 1. Install Node.js & PostgreSQL
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs postgresql

# 2. Clone repository
git clone https://github.com/yourusername/kuril-intake-client.git
cd kuril-intake-client/backend

# 3. Install dependencies
npm install --production

# 4. Setup database
sudo -u postgres psql
CREATE DATABASE kuril_intake;
\q

# 5. Configure environment
cp .env.example .env
nano .env  # Edit with production values

# 6. Run migrations
npx prisma migrate deploy

# 7. Install PM2
npm install -g pm2

# 8. Start with PM2
pm2 start src/server.js --name kuril-api
pm2 startup
pm2 save

# 9. Setup Nginx reverse proxy
sudo apt install nginx
sudo nano /etc/nginx/sites-available/kuril
```

**Nginx Configuration:**

```nginx
server {
    listen 80;
    server_name api.kuril.com;

    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

```bash
# Enable site
sudo ln -s /etc/nginx/sites-available/kuril /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx

# Setup SSL with Let's Encrypt
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d api.kuril.com
```

---

### Option 2: Docker Deployment

**docker-compose.yml:**

```yaml
version: '3.8'

services:
  postgres:
    image: postgres:14-alpine
    container_name: kuril-db
    restart: always
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: ${DB_PASSWORD}
      POSTGRES_DB: kuril_intake
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data
    networks:
      - kuril-network

  backend:
    build:
      context: ./backend
      dockerfile: Dockerfile
    container_name: kuril-backend
    restart: always
    environment:
      NODE_ENV: production
      PORT: 5000
      DATABASE_URL: postgresql://postgres:${DB_PASSWORD}@postgres:5432/kuril_intake?schema=public
      JWT_SECRET: ${JWT_SECRET}
      JWT_EXPIRES_IN: ${JWT_EXPIRES_IN}
      CLIENT_URL: ${CLIENT_URL}
    ports:
      - "5000:5000"
    depends_on:
      - postgres
    networks:
      - kuril-network

  nginx:
    image: nginx:alpine
    container_name: kuril-nginx
    restart: always
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx/nginx.conf:/etc/nginx/nginx.conf
      - ./nginx/ssl:/etc/nginx/ssl
    depends_on:
      - backend
    networks:
      - kuril-network

volumes:
  postgres_data:

networks:
  kuril-network:
    driver: bridge
```

**Deploy:**

```bash
docker-compose up -d
docker-compose logs -f
```

---

### Option 3: Cloud Platform (Heroku, Railway, Render)

**Railway Deployment:**

```bash
# 1. Install Railway CLI
npm install -g @railway/cli

# 2. Login
railway login

# 3. Initialize project
railway init

# 4. Add PostgreSQL
railway add

# 5. Deploy
railway up
```

---

## 🧪 Testing

### Manual Testing with Postman

1. Import Postman collection (docs/postman-collection.json)
2. Set environment variables
3. Test all endpoints

### Automated Testing (Coming Soon)

```bash
# Unit tests
npm test

# Integration tests
npm run test:integration

# Coverage report
npm run test:coverage
```

---

Got you. I’ll continue **cleanly in English**, same professional README tone, production-ready, and **copy-paste safe**.
We’ll finish **Monitoring & Logging**, then **Contributing**, then **License**.
No fluff, no broken sections. Let’s ship this. 🚀

---

## 📊 Monitoring & Logging

Proper monitoring and logging are essential to keep the **Kuril Intake Client** stable, secure, and production-ready.

---

### 📝 Logging with Winston

The backend uses **Winston** as the primary logging library.

**Features:**

* Structured JSON logs
* Timestamped entries
* Environment-based log levels
* Separate transports for console and files
* Ready for cloud log aggregation

### Logger Configuration

```js
// src/utils/logger.js
const winston = require('winston');

const logger = winston.createLogger({
  level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: 'logs/error.log',
      level: 'error',
    }),
    new winston.transports.File({
      filename: 'logs/combined.log',
    }),
  ],
});

module.exports = logger;
```

### Usage Example

```js
const logger = require('../utils/logger');

logger.info('Server started successfully');
logger.warn('Rate limit exceeded');
logger.error('Database connection failed', error);
```

---

### ❗ Error Logging

All unhandled errors are captured by a **global error handler** and logged automatically.

```js
// src/middlewares/error.middleware.js
const logger = require('../utils/logger');

module.exports = (err, req, res, next) => {
  logger.error(err.message, { stack: err.stack });

  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || 'Internal Server Error',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  });
};
```

---

### 📈 Application Monitoring (Recommended)

For production environments, integrate one or more of the following:

| Tool                     | Purpose                           |
| ------------------------ | --------------------------------- |
| **PM2**                  | Process monitoring & auto-restart |
| **Sentry**               | Error tracking & stack traces     |
| **New Relic**            | Performance monitoring            |
| **Datadog**              | Infrastructure & APM              |
| **Grafana + Prometheus** | Metrics visualization             |

---

### PM2 Monitoring Example

```bash
pm2 start src/server.js --name kuril-api
pm2 monit
pm2 logs
```

---

### Health Check Endpoint

Used by load balancers and monitoring tools:

```http
GET /
```

Response:

```json
{
  "success": true,
  "message": "Kuril Intake API is running",
  "version": "1.0.0",
  "timestamp": "2024-01-15T10:00:00.000Z"
}
```

## 🤝 Contributing

Contributions are welcome and highly appreciated!
Whether you’re fixing bugs, improving documentation, or adding new features — thank you for helping make **Kuril Intake Client** better.

### How to Contribute

1. **Fork the repository**

   ```bash
   git fork https://github.com/yourusername/kuril-intake-client.git
   ```

2. **Clone your fork**

   ```bash
   git clone https://github.com/yourusername/kuril-intake-client.git
   cd kuril-intake-client
   ```

3. **Create a new branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Install dependencies**

   ```bash
   cd backend
   npm install
   ```

5. **Make your changes**

   * Follow existing code style
   * Keep logic modular and readable
   * Avoid breaking existing APIs
   * Add comments if the logic is complex

6. **Run the server & test**

   ```bash
   npm run dev
   ```

   Test APIs using Postman / Thunder Client.

7. **Commit your changes**

   ```bash
   git commit -m "feat: add pagination to intake endpoint"
   ```

8. **Push to your fork**

   ```bash
   git push origin feature/your-feature-name
   ```

9. **Open a Pull Request**

   * Clearly describe what you changed
   * Mention related issues (if any)
   * Add screenshots or API examples if relevant

---

### Contribution Guidelines

* ✅ Use **clear and descriptive commit messages**
* ✅ Follow REST API conventions
* ✅ Do not commit `.env` files or secrets
* ✅ Keep PRs focused (one feature or fix per PR)
* ❌ No breaking changes without discussion
* ❌ No hardcoded credentials

---

### Code Style

* JavaScript (CommonJS, no TypeScript)
* Express best practices
* Prisma for all database access
* Controller–Route separation
* Centralized error handling

---

### Reporting Bugs

If you find a bug, please open an issue with:

* Clear description of the issue
* Steps to reproduce
* Expected vs actual behavior
* Environment details (OS, Node version, DB)

---

### Feature Requests

Have an idea? Open an issue with:

* Feature description
* Use case
* Why it adds value
* Optional implementation suggestion

---

## 📄 License

This project is licensed under the **MIT License**.

### MIT License

```
MIT License

Copyright (c) 2024 Kuril

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```

# END
