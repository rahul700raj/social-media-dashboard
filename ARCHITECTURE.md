# 🏗️ Architecture Documentation

Technical architecture and design decisions for the Social Media Dashboard.

**Developer:** Rahul Mishra  
**Contact:** rm2778643@gmail.com | +91 9693243217

## 📐 System Architecture

### High-Level Overview

```
┌─────────────────────────────────────────────────────────┐
│                     React Application                    │
├─────────────────────────────────────────────────────────┤
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │   UI Layer   │  │  State Mgmt  │  │  API Layer   │  │
│  │  Components  │◄─┤    Redux     │◄─┤   Axios      │  │
│  └──────────────┘  └──────────────┘  └──────────────┘  │
│         │                  │                  │          │
│         ▼                  ▼                  ▼          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │   Routing    │  │    Hooks     │  │   Services   │  │
│  │ React Router │  │   Custom     │  │   API Calls  │  │
│  └──────────────┘  └──────────────┘  └──────────────┘  │
└─────────────────────────────────────────────────────────┘
```

## 🎯 Design Patterns

### 1. Container/Presentational Pattern
- **Pages** - Smart containers with logic
- **Components** - Dumb presentational components
- Clear separation of concerns

### 2. Redux Toolkit Pattern
- Slice-based state management
- Async thunks for side effects
- Normalized state structure
- Immutable updates

### 3. Compound Component Pattern
- Layout components (Navbar, Sidebar)
- Flexible composition
- Shared context

### 4. Custom Hooks Pattern
- Reusable logic extraction
- State management
- Side effects handling

## 📦 Component Architecture

### Component Hierarchy

```
App
├── Layout
│   ├── Navbar
│   └── Sidebar
├── Pages
│   ├── Auth
│   │   ├── Login
│   │   └── Signup
│   ├── Home
│   │   └── PostCard (memoized)
│   ├── Profile
│   ├── CreatePost
│   ├── Friends
│   └── Notifications
└── UI Components
    └── LoadingSpinner
```

### Component Types

1. **Layout Components**
   - Structural components
   - Navigation
   - Consistent across pages

2. **Page Components**
   - Route-level components
   - Lazy loaded
   - Data fetching

3. **Feature Components**
   - Business logic
   - State management
   - API integration

4. **UI Components**
   - Reusable elements
   - No business logic
   - Styled components

## 🔄 State Management

### Redux Store Structure

```javascript
{
  auth: {
    user: Object,
    token: String,
    isAuthenticated: Boolean,
    loading: Boolean,
    error: String
  },
  posts: {
    items: Array,
    loading: Boolean,
    error: String
  },
  theme: {
    mode: 'light' | 'dark'
  },
  users: {
    items: Array,
    loading: Boolean,
    error: String
  },
  notifications: {
    items: Array,
    unreadCount: Number,
    loading: Boolean,
    error: String
  }
}
```

### State Flow

```
User Action → Dispatch Action → Reducer → New State → UI Update
     ↓
  Async Thunk → API Call → Success/Error → Reducer → UI Update
```

## 🌐 Routing Architecture

### Route Structure

```
/
├── /login (public)
├── /signup (public)
└── / (protected)
    ├── / (Home)
    ├── /profile/:userId
    ├── /create-post
    ├── /friends
    └── /notifications
```

### Route Protection

```javascript
Protected Route → Check Auth → 
  ├── Authenticated → Render Component
  └── Not Authenticated → Redirect to Login
```

## 🔌 API Architecture

### API Layer Structure

```
services/
└── api.js
    ├── axios instance
    ├── interceptors
    ├── authAPI
    ├── postsAPI
    ├── usersAPI
    └── notificationsAPI
```

### Request Flow

```
Component → Redux Thunk → API Service → Axios → Backend
                                          ↓
Component ← Redux Store ← Reducer ← Response
```

### Error Handling

```
API Error → Catch in Thunk → Reject with Value → 
  Update Error State → Display Toast → UI Feedback
```

## 🎨 Styling Architecture

### CSS Architecture

```
styles/
├── global.css (CSS variables, resets)
└── component-specific CSS modules
```

### Theme System

```
CSS Variables → Theme Slice → 
  data-theme attribute → CSS applies styles
```

### Responsive Strategy

```
Mobile First → Tablet Breakpoint → Desktop Breakpoint
  (< 768px)      (768px - 1024px)      (> 1024px)
```

## ⚡ Performance Architecture

### Optimization Strategies

1. **Code Splitting**
   ```
   Route Level → React.lazy → Suspense → 
     Load on Demand → Smaller Initial Bundle
   ```

2. **Memoization**
   ```
   React.memo → Props Comparison → 
     Skip Render if Same → Better Performance
   ```

3. **Lazy Loading**
   ```
   Images → Intersection Observer → 
     Load When Visible → Faster Initial Load
   ```

## 🧪 Testing Architecture

### Test Structure

```
tests/
├── setup.js (test configuration)
├── Login.test.jsx (component tests)
└── PostCard.test.jsx (component tests)
```

### Testing Strategy

```
Unit Tests → Component Tests → Integration Tests
    ↓              ↓                    ↓
  Logic      Rendering/Events      User Flows
```

## 🔒 Security Architecture

### Security Layers

1. **Authentication**
   - JWT tokens
   - localStorage
   - Token expiry

2. **Authorization**
   - Protected routes
   - Route guards
   - Permission checks

3. **Input Validation**
   - Form validation
   - Sanitization
   - Type checking

## 📱 Responsive Architecture

### Breakpoint System

```javascript
Mobile:  < 768px  → Single column, hidden sidebar
Tablet:  768-1024px → Visible sidebar, grid layouts
Desktop: > 1024px → Full layout, multi-column
```

## 🔄 Data Flow

### Complete Data Flow

```
User Interaction
    ↓
Event Handler
    ↓
Dispatch Action (Redux)
    ↓
Async Thunk (if needed)
    ↓
API Call
    ↓
Response
    ↓
Reducer Updates State
    ↓
Selector Reads State
    ↓
Component Re-renders
    ↓
UI Updates
```

## 🏗️ Build Architecture

### Build Process

```
Source Code → Vite → 
  ├── Transpile (Babel)
  ├── Bundle (Rollup)
  ├── Minify (Terser)
  ├── Code Split
  └── Optimize Assets
      ↓
  Production Build
```

## 📊 Monitoring Architecture

### Monitoring Strategy

```
Application → Error Boundary → 
  ├── Log Errors
  ├── Display Fallback UI
  └── Report to Service (Sentry)
```

## 🔧 Configuration Architecture

### Environment Configuration

```
.env files → Vite → process.env → 
  Runtime Configuration → Application
```

## 📞 Contact

For architecture questions or discussions:

**Rahul Mishra**
- Email: rm2778643@gmail.com
- Phone: +91 9693243217

---

This architecture supports scalability, maintainability, and performance while following React best practices.
