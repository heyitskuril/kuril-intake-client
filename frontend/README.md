# 🎨 Kuril Intake Client - Frontend

> **Modern React Application** built with Vite, React Router, TanStack Query, and Tailwind CSS

[![React](https://img.shields.io/badge/React-18.x-61dafb.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-38B2AC.svg)](https://tailwindcss.com/)
[![React Query](https://img.shields.io/badge/React_Query-5.x-FF4154.svg)](https://tanstack.com/query)

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Environment Variables](#-environment-variables)
- [Running the Application](#-running-the-application)
- [Project Structure](#-project-structure)
- [Components Guide](#-components-guide)
- [State Management](#-state-management)
- [API Integration](#-api-integration)
- [Styling](#-styling)
- [Building for Production](#-building-for-production)
- [Deployment](#-deployment)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)

---

## 🎯 Overview

Frontend application untuk **Kuril Intake Client** - modern web interface dengan 2 main sections:

1. **Public Intake Form** - For clients to submit inquiries (no authentication)
2. **Admin Dashboard** - For admins to manage submissions (protected with JWT auth)

### Key Highlights:
- ✅ Modern React 18 with Hooks
- ✅ Vite for blazing-fast development
- ✅ Tailwind CSS for utility-first styling
- ✅ React Router 6 for client-side routing
- ✅ TanStack Query (React Query) for server state
- ✅ Zustand for client state
- ✅ React Hook Form for form handling
- ✅ Responsive design (mobile-first)
- ✅ Toast notifications
- ✅ Protected routes
- ✅ Axios interceptors

---

## ✨ Features

### Public Features:
- ✅ **Intake Form Submission**
  - Clean, professional form design
  - Client-side validation
  - Success/error feedback
  - Mobile responsive
  - No authentication required

### Admin Features:
- ✅ **Authentication**
  - JWT-based login
  - Token management
  - Auto-logout on token expiration
  - Protected routes

- ✅ **Dashboard**
  - Overview statistics
  - Recent submissions
  - Quick actions
  - Visual status indicators

- ✅ **Intake Management**
  - List all submissions with pagination
  - Search functionality
  - Filter by status
  - View detailed information
  - Update submission status
  - Delete submissions

### Technical Features:
- ✅ Optimistic updates
- ✅ Automatic cache invalidation
- ✅ Loading states
- ✅ Error handling
- ✅ Toast notifications
- ✅ Responsive sidebar
- ✅ Date formatting
- ✅ Axios interceptors for auth

---

## 🛠 Tech Stack

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
| **React Hot Toast** | 2.x | Toast notifications |
| **date-fns** | 3.x | Date formatting |

---

## 🏗 Architecture

```
┌────────────────────────────────────────────┐
│           USER INTERFACE                    │
│  ┌──────────────┐    ┌─────────────────┐   │
│  │ Public Form  │    │ Admin Dashboard │   │
│  └──────┬───────┘    └────────┬────────┘   │
└─────────┼─────────────────────┼────────────┘
          │                     │
          │    ┌────────────┐   │
          └────┤   ROUTER   ├───┘
               │  (React    │
               │   Router)  │
               └──────┬─────┘
                      │
          ┌───────────┴──────────┐
          │                      │
  ┌───────▼────────┐    ┌───────▼────────┐
  │  PAGES         │    │  COMPONENTS    │
  │  - PublicForm  │    │  - Layout      │
  │  - Dashboard   │    │  - Protected   │
  │  - IntakesList │    │  - etc.        │
  └───────┬────────┘    └────────────────┘
          │
  ┌───────▼────────────────────────────────┐
  │         STATE MANAGEMENT                │
  │  ┌──────────────┐  ┌─────────────────┐ │
  │  │ React Query  │  │    Zustand      │ │
  │  │ (Server)     │  │    (Client)     │ │
  │  └──────┬───────┘  └─────────────────┘ │
  └─────────┼──────────────────────────────┘
            │
  ┌─────────▼──────────┐
  │   AXIOS INSTANCE   │
  │   - Interceptors   │
  │   - Base Config    │
  └─────────┬──────────┘
            │
  ┌─────────▼──────────┐
  │    BACKEND API     │
  │  (Express Server)  │
  └────────────────────┘
```

### Architecture Layers:

1. **UI Layer (Pages & Components)**
   - Presentational logic
   - User interactions
   - Render views

2. **Routing Layer (React Router)**
   - URL-based navigation
   - Protected routes
   - Lazy loading (future)

3. **State Layer**
   - **React Query**: Server data, caching, refetching
   - **Zustand**: Auth state, UI state

4. **API Layer (Services)**
   - Axios configuration
   - HTTP requests
   - Error handling

5. **Backend API**
   - Data persistence
   - Authentication
   - Business logic

---

## 📦 Prerequisites

Pastikan sudah terinstall:

- **Node.js** >= 18.x ([Download](https://nodejs.org/))
- **npm** >= 9.x (included with Node.js)
- **Backend API** running on `http://localhost:5000`

### Verify Installation:

```bash
node --version    # v18.x.x or higher
npm --version     # 9.x.x or higher
```

---

## 🚀 Installation

### 1. Clone Repository

```bash
git clone https://github.com/yourusername/kuril-intake-client.git
cd kuril-intake-client/frontend
```

### 2. Install Dependencies

```bash
npm install
```

This will install all dependencies from `package.json`.

### 3. Setup Environment Variables

```bash
cp .env.example .env
```

Edit `.env` file (see [Environment Variables](#-environment-variables))

---

## 🔐 Environment Variables

### `.env` Configuration

Create `.env` file in `frontend/` directory:

```env
# API Configuration
VITE_API_BASE_URL=http://localhost:5000
VITE_API_TIMEOUT=30000

# App Configuration
VITE_APP_NAME=Kuril Intake Client
VITE_APP_VERSION=1.0.0
```

### Environment Variables Explanation:

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `VITE_API_BASE_URL` | Backend API base URL | Yes | http://localhost:5000 |
| `VITE_API_TIMEOUT` | Request timeout (ms) | No | 30000 |
| `VITE_APP_NAME` | Application name | No | Kuril Intake Client |
| `VITE_APP_VERSION` | Application version | No | 1.0.0 |

### Important Notes:

- All env variables must start with `VITE_` to be exposed to the app
- Variables are embedded at **build time**
- Never commit `.env` to version control
- Use different `.env` files for different environments:
  - `.env.development`
  - `.env.production`

---

## 🏃‍♂️ Running the Application

### Development Mode

```bash
npm run dev
```

Application will start at:
- **Frontend**: `http://localhost:3000`
- **Backend Proxy**: `/api` routes proxied to `http://localhost:5000`

Features in development:
- Hot Module Replacement (HMR)
- Fast Refresh
- Error overlay
- Source maps

### Build for Production

```bash
npm run build
```

Creates optimized production build in `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

Preview production build locally at `http://localhost:4173`.

---

## 📁 Project Structure

```
frontend/
├── public/                      # Static assets
│   └── vite.svg
│
├── src/
│   ├── components/              # Reusable components
│   │   ├── AdminLayout.tsx      # Admin dashboard layout
│   │   └── ProtectedRoute.tsx   # Route guard component
│   │
│   ├── hooks/                   # Custom React hooks
│   │   ├── useAuth.tsx           # Auth-related hooks
│   │   └── useIntakes.tsx        # Intake data hooks
│   │
│   ├── pages/                   # Page components
│   │   ├── PublicForm.tsx       # Public intake form page
│   │   ├── AdminLogin.tsx       # Admin login page
│   │   ├── Dashboard.tsx        # Admin dashboard page
│   │   ├── IntakesList.tsx      # Intakes list page
│   │   └── IntakeDetail.tsx     # Intake detail page
│   │
│   ├── services/                # API services
│   │   ├── axios.tsx             # Axios instance & interceptors
│   │   └── api.tsx               # API endpoint functions
│   │
│   ├── store/                   # State management
│   │   └── authStore.tsx         # Zustand auth store
│   │
│   ├── App.tsx                  # Main App component with Router
│   ├── main.tsx                 # Application entry point
│   └── index.css                # Global styles & Tailwind
│
├── .env.example                 # Environment variables template
├── .gitignore                   # Git ignore rules
├── index.html                   # HTML template
├── package.json                 # Dependencies & scripts
├── postcss.config.js            # PostCSS configuration
├── tailwind.config.js           # Tailwind CSS configuration
├── vite.config.js               # Vite configuration
└── README.md                    # This file
```

---

## 🧩 Components Guide

### Core Components:

#### 1. **AdminLayout.jsx**
Main layout for admin pages with sidebar and navigation.

**Features:**
- Responsive sidebar (mobile toggle)
- Navigation menu
- User profile display
- Logout button
- Nested routing with `<Outlet />`

**Usage:**
```jsx
<Route path="/admin" element={<AdminLayout />}>
  <Route path="dashboard" element={<Dashboard />} />
</Route>
```

#### 2. **ProtectedRoute.jsx**
Guards routes that require authentication.

**Features:**
- Checks auth status from Zustand store
- Redirects to login if not authenticated
- Preserves attempted URL for redirect after login

**Usage:**
```jsx
<Route
  path="/admin"
  element={
    <ProtectedRoute>
      <AdminLayout />
    </ProtectedRoute>
  }
/>
```

---

## 📄 Pages Guide

### Public Pages:

#### **PublicForm.jsx** (`/`)
Public-facing intake form for clients.

**Features:**
- Form validation with React Hook Form
- Required fields indicator
- Select dropdowns for service and budget
- Textarea for project details
- Success state with celebration animation
- Error handling
- Mobile responsive

**Form Fields:**
- Name (required)
- Email (required, validated)
- Phone (required)
- Service Inquiry (required, dropdown)
- Budget Range (optional, dropdown)
- Message (required, textarea)
- Attachment URL (optional)

---

### Admin Pages:

#### **AdminLogin.jsx** (`/admin/login`)
Admin authentication page.

**Features:**
- Email & password form
- Validation
- Loading state
- Error feedback
- Demo credentials display
- Redirect after successful login
- Auto-redirect if already logged in

#### **Dashboard.jsx** (`/admin/dashboard`)
Admin overview page with statistics.

**Features:**
- Statistics cards (total, new, reviewed, closed)
- Recent submissions list
- Quick actions
- Completion rate
- Visual indicators
- Links to detailed pages

#### **IntakesList.jsx** (`/admin/intakes`)
List all intake submissions with filtering.

**Features:**
- Data table with columns
- Pagination (10 items per page)
- Search functionality (name, email, service)
- Status filter tabs (all, new, reviewed, closed)
- Status badges
- Quick actions (view, delete)
- Responsive table
- Loading & error states

#### **IntakeDetail.jsx** (`/admin/intakes/:id`)
View and manage single intake submission.

**Features:**
- Full submission details
- Contact information with action links
- Status management (update status)
- Project details display
- Metadata (submission date, ID)
- Quick actions (email, call)
- Delete functionality
- Back navigation

---

## 🗃 State Management

### 1. Server State (TanStack Query)

Handles data fetching, caching, and synchronization with backend.

**Query Keys:**
- `['intakes', params]` - List of intakes
- `['intake', id]` - Single intake
- `['me']` - Current user profile

**Benefits:**
- Automatic background refetching
- Cache management
- Optimistic updates
- Request deduplication
- Loading & error states

**Example:**
```jsx
const { data, isLoading, error } = useIntakes({ page: 1, limit: 10 });
```

---

### 2. Client State (Zustand)

Manages client-side state (auth).

**Store: `authStore.js`**

**State:**
```javascript
{
  user: null,           // Current user object
  token: null,          // JWT token
  isAuthenticated: false // Auth status
}
```

**Actions:**
- `login(user, token)` - Store user and token
- `logout()` - Clear auth data
- `updateUser(userData)` - Update user info
- `initialize()` - Load from localStorage

**Persistence:**
- Automatically synced with localStorage
- Survives page refresh
- Cleared on logout

**Usage:**
```jsx
const { user, isAuthenticated, logout } = useAuthStore();
```

---

## 🔌 API Integration

### Axios Instance (`services/axios.js`)

Centralized HTTP client with interceptors.

**Configuration:**
```javascript
baseURL: import.meta.env.VITE_API_BASE_URL
timeout: 30000
headers: { 'Content-Type': 'application/json' }
```

**Request Interceptor:**
- Automatically attaches JWT token from localStorage
- Format: `Authorization: Bearer <token>`

**Response Interceptor:**
- Global error handling
- Auto-logout on 401 (Unauthorized)
- Toast notifications for errors
- Network error handling

---

### API Service (`services/api.js`)

All API calls in one place.

**Auth API:**
```javascript
authAPI.login(credentials)        // POST /api/auth/login
authAPI.getMe()                   // GET /api/auth/me
authAPI.register(data)            // POST /api/auth/register
```

**Intake API:**
```javascript
intakeAPI.submit(data)            // POST /api/intake
intakeAPI.getAll(params)          // GET /api/intake?page=1&limit=10
intakeAPI.getById(id)             // GET /api/intake/:id
intakeAPI.updateStatus(id, status) // PATCH /api/intake/:id/status
intakeAPI.delete(id)              // DELETE /api/intake/:id
```

---

### Custom Hooks (`hooks/`)

React Query hooks for data fetching.

**useIntakes.js:**
```javascript
useIntakes(params)          // Get all intakes
useIntake(id)               // Get single intake
useSubmitIntake()           // Submit form mutation
useUpdateIntakeStatus()     // Update status mutation
useDeleteIntake()           // Delete mutation
```

**useAuth.js:**
```javascript
useLogin()                  // Login mutation
useLogout()                 // Logout function
useMe()                     // Get current user
```

**Example Usage:**
```jsx
const { data, isLoading } = useIntakes({ page: 1, limit: 10 });
const { mutate: submitIntake } = useSubmitIntake();

const handleSubmit = (formData) => {
  submitIntake(formData, {
    onSuccess: () => {
      toast.success('Form submitted!');
    }
  });
};
```

---

## 🎨 Styling

### Tailwind CSS

Utility-first CSS framework for rapid UI development.

**Configuration:** `tailwind.config.js`

**Custom Theme:**
```javascript
colors: {
  primary: {
    50-900 // Custom blue scale
  }
}
```

**Custom Classes:** `index.css`

```css
.btn - Base button
.btn-primary - Primary button
.btn-secondary - Secondary button
.btn-danger - Danger button
.input - Form input
.card - Card container
.badge - Status badge
.badge-new - New status
.badge-reviewed - Reviewed status
.badge-closed - Closed status
```

**Usage:**
```jsx
<button className="btn btn-primary">
  Click me
</button>

<input className="input" placeholder="Enter text" />

<div className="card">
  <p>Card content</p>
</div>
```

### Responsive Design

Mobile-first approach with Tailwind breakpoints:

```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
  {/* 1 column mobile, 2 tablet, 4 desktop */}
</div>
```

---

## 🏗 Building for Production

### 1. Build the App

```bash
npm run build
```

Creates optimized build in `dist/` folder with:
- Minified JavaScript
- CSS extraction and minification
- Asset optimization
- Tree shaking (removes unused code)
- Code splitting

### 2. Build Output

```
dist/
├── assets/
│   ├── index-[hash].js     # Main JavaScript bundle
│   └── index-[hash].css    # Main CSS bundle
├── index.html              # Entry HTML
└── vite.svg                # Static assets
```

### 3. Build Optimization

**Vite automatically:**
- Minifies code
- Removes console.logs (production)
- Optimizes images
- Generates source maps (configurable)
- Creates vendor chunks

### 4. Environment-Specific Builds

```bash
# Development build
npm run build -- --mode development

# Production build
npm run build -- --mode production
```

---

## 🚀 Deployment

### Option 1: Vercel (Recommended)

**Easiest deployment for React/Vite apps.**

#### Via Vercel CLI:

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel
```

#### Via Git Integration:

1. Push code to GitHub/GitLab/Bitbucket
2. Import project on [vercel.com](https://vercel.com)
3. Configure:
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Add environment variables in Vercel dashboard
5. Deploy!

**Environment Variables in Vercel:**
```
VITE_API_BASE_URL=https://api.yourdomain.com
```

---

### Option 2: Netlify

#### Via Netlify CLI:

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

#### Via Git Integration:

1. Push to GitHub
2. Connect repo on [netlify.com](https://netlify.com)
3. Configure:
   - Build Command: `npm run build`
   - Publish Directory: `dist`
4. Add environment variables
5. Deploy!

---

### Option 3: AWS S3 + CloudFront

#### 1. Build the app

```bash
npm run build
```

#### 2. Upload to S3

```bash
# Install AWS CLI
aws s3 sync dist/ s3://your-bucket-name --delete
```

#### 3. Configure CloudFront

- Create CloudFront distribution
- Point to S3 bucket
- Configure custom domain
- Add SSL certificate

---

### Option 4: Nginx (VPS)

#### 1. Build the app locally

```bash
npm run build
```

#### 2. Upload to server

```bash
scp -r dist/* user@your-server:/var/www/kuril-frontend
```

#### 3. Configure Nginx

```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /var/www/kuril-frontend;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location /api {
        proxy_pass http://localhost:5000;
    }
}
```

#### 4. Enable site

```bash
sudo ln -s /etc/nginx/sites-available/kuril-frontend /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

---

## 🔧 Troubleshooting

### Common Issues:

#### 1. "Cannot GET /" on Refresh

**Problem:** React Router routes not working after page refresh

**Solution:**
Configure server to serve `index.html` for all routes.

**Vercel/Netlify:** Add `vercel.json` or `_redirects`:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

**Nginx:**
```nginx
try_files $uri $uri/ /index.html;
```

---

#### 2. API Calls Failing (CORS)

**Problem:** CORS errors in browser console

**Solution:**
1. Ensure backend CORS is configured for frontend URL
2. Check `VITE_API_BASE_URL` in `.env`
3. Use proxy in development (`vite.config.js`):
   ```javascript
   server: {
     proxy: {
       '/api': 'http://localhost:5000'
     }
   }
   ```

---

#### 3. Environment Variables Not Working

**Problem:** `import.meta.env.VITE_*` is undefined

**Solution:**
1. Prefix all variables with `VITE_`
2. Restart dev server after changing `.env`
3. Check `.env` is in root of `frontend/` folder

---

#### 4. Build Fails

**Problem:** `npm run build` errors

**Solution:**
```bash
# Clear cache
rm -rf node_modules package-lock.json
npm install

# Check for TypeScript errors (if using TS)
# Check for missing dependencies
npm install
```

---

#### 5. White Screen After Deploy

**Problem:** Blank page in production

**Solution:**
1. Check browser console for errors
2. Verify build was successful
3. Check base URL in `vite.config.js`:
   ```javascript
   base: '/' // or '/subdirectory/' if in subdirectory
   ```
4. Verify environment variables are set in hosting platform

---

#### 6. Authentication Not Persisting

**Problem:** Logged out after refresh

**Solution:**
1. Check browser localStorage has `auth-storage`
2. Verify Zustand persist is configured
3. Check `initialize()` is called in `App.jsx`

---

## 🧪 Testing (Future Implementation)

### Unit Testing

```bash
# Install testing libraries
npm install --save-dev vitest @testing-library/react @testing-library/jest-dom

# Run tests
npm test
```

### E2E Testing

```bash
# Install Cypress
npm install --save-dev cypress

# Open Cypress
npx cypress open
```

---

## 🤝 Contributing

We welcome contributions!

### Development Workflow:

1. **Fork the repository**

2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Make your changes**
   - Follow existing code style
   - Use functional components with hooks
   - Keep components small and focused

4. **Test your changes**
   - Test in development mode
   - Build and preview production
   - Test on different screen sizes

5. **Commit your changes**
   ```bash
   git commit -m "feat: add amazing feature"
   ```

6. **Push to your fork**
   ```bash
   git push origin feature/amazing-feature
   ```

7. **Open a Pull Request**

### Code Style:

- Use **ES6+ syntax**
- Functional components with hooks
- Follow React best practices
- Use Tailwind utility classes
- Add comments for complex logic

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/yourusername/kuril-intake-client/issues)
- **Email**: support@kuril.com

---

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI library
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [TanStack Query](https://tanstack.com/query) - Data fetching
- [Zustand](https://github.com/pmndrs/zustand) - State management

---

## 📊 Performance Metrics

Typical Lighthouse scores:

- **Performance**: 95+
- **Accessibility**: 90+
- **Best Practices**: 95+
- **SEO**: 90+

---

## 🔄 Version History

- **v1.0.0** - Initial release
  - Public intake form
  - Admin dashboard
  - Authentication system
  - CRUD operations

---

<div align="center">

**Built with ❤️ using React + Vite + Tailwind CSS**

⭐ Star this repo if you find it helpful!

</div>