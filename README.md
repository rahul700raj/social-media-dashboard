# 🚀 Social Media Dashboard

A modern, full-featured social media dashboard built with React, Redux Toolkit, and React Router. This project demonstrates advanced React concepts including hooks, state management, routing, API integration, performance optimization, and testing.

**Developer:** Rahul Mishra  
**Contact:** rm2778643@gmail.com | +91 9693243217

## ✨ Features

### 🔐 Authentication
- Login/Signup with form validation
- Protected routes
- Persistent authentication with localStorage
- Form validation using react-hook-form

### 🏠 Home Feed
- Fetch and display posts from API
- Post cards with title, image, and description
- Like functionality
- Optimized rendering with React.memo
- Lazy loading for images

### 👤 Profile Management
- View user profile with stats (followers/following)
- Edit profile information
- Update name and bio
- Avatar display

### ✍️ Create Post
- Form to create new posts
- Title, description, and image URL inputs
- Image preview
- Form validation
- Toast notifications

### 🌓 Dark/Light Theme
- Global theme management with Redux
- Persistent theme preference
- Smooth transitions
- System preference detection

### 👥 Friends/Followers
- List of users with follow/unfollow buttons
- User cards with avatars and stats
- Real-time follow status updates

### 🔔 Notifications
- Real-time activity notifications
- Mock API polling (30-second intervals)
- Unread notification badges
- Mark as read functionality
- Different notification types (like, comment, follow, mention)

### ⚡ Performance Optimizations
- React.memo for component memoization
- useCallback for function memoization
- Lazy loading with React.lazy and Suspense
- Code splitting by route
- Optimized re-renders

### 🧪 Testing
- Unit tests with Vitest and React Testing Library
- Login form validation tests
- PostCard component tests
- Test coverage for critical components

## 🛠️ Tech Stack

- **React 18** - UI library
- **Redux Toolkit** - State management
- **React Router v6** - Routing
- **React Hook Form** - Form handling
- **Axios** - HTTP client
- **Vite** - Build tool
- **Vitest** - Testing framework
- **React Testing Library** - Component testing
- **Lucide React** - Icons
- **React Hot Toast** - Notifications

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/rahul700raj/social-media-dashboard.git

# Navigate to project directory
cd social-media-dashboard

# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm test

# Build for production
npm run build
```

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Layout/
│   │   ├── Layout.jsx
│   │   ├── Navbar.jsx
│   │   └── Sidebar.jsx
│   ├── Post/
│   │   └── PostCard.jsx
│   └── UI/
│       └── LoadingSpinner.jsx
├── pages/
│   ├── Auth/
│   │   ├── Login.jsx
│   │   └── Signup.jsx
│   ├── Home/
│   │   └── Home.jsx
│   ├── Profile/
│   │   └── Profile.jsx
│   ├── CreatePost/
│   │   └── CreatePost.jsx
│   ├── Friends/
│   │   └── Friends.jsx
│   └── Notifications/
│       └── Notifications.jsx
├── store/
│   ├── store.js
│   └── slices/
│       ├── authSlice.js
│       ├── postsSlice.js
│       ├── themeSlice.js
│       ├── usersSlice.js
│       └── notificationsSlice.js
├── services/
│   └── api.js
├── styles/
│   └── global.css
├── tests/
│   ├── setup.js
│   ├── Login.test.jsx
│   └── PostCard.test.jsx
├── App.jsx
└── main.jsx
```

## 🎯 Key Concepts Demonstrated

### React Hooks
- `useState` - Local state management
- `useEffect` - Side effects and lifecycle
- `useContext` - Context consumption (via Redux)
- `useReducer` - Complex state logic (via Redux Toolkit)
- `useCallback` - Function memoization
- `useMemo` - Value memoization (implicit in selectors)

### Redux Toolkit
- Store configuration
- Slice creation with reducers
- Async thunks for API calls
- Redux DevTools integration
- Normalized state structure

### React Router
- Route configuration
- Protected routes
- Nested routes
- Navigation guards
- Lazy loading routes

### Performance Optimization
- Component memoization with React.memo
- Callback memoization with useCallback
- Code splitting with lazy loading
- Optimized re-renders
- Image lazy loading

### Testing
- Component unit tests
- Form validation testing
- User interaction testing
- Redux integration testing
- Mock data and API calls

## 🔄 State Management

The application uses Redux Toolkit for global state management:

- **auth** - User authentication and profile
- **posts** - Posts feed and interactions
- **theme** - Dark/light theme preference
- **users** - Friends and followers
- **notifications** - Real-time notifications

## 🎨 Styling

- CSS Modules for component-scoped styles
- CSS custom properties for theming
- Responsive design with media queries
- Smooth transitions and animations

## 🧪 Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with UI
npm run test:ui
```

## 📝 API Integration

The project uses JSONPlaceholder as a mock API. Replace the API endpoints in `src/services/api.js` with your actual backend API.

## 🚀 Deployment

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 📚 Learning Outcomes

This project covers:
- ✅ React component architecture
- ✅ Hooks (useState, useEffect, useContext, useReducer, useCallback)
- ✅ Redux Toolkit for state management
- ✅ React Router for navigation
- ✅ API integration with Axios
- ✅ Form handling and validation
- ✅ Performance optimization techniques
- ✅ Testing with Vitest and RTL
- ✅ Dark/light theme implementation
- ✅ Responsive design
- ✅ Code splitting and lazy loading

## 📞 Contact

**Rahul Mishra**
- Email: rm2778643@gmail.com
- Phone: +91 9693243217

## 📄 License

This project is open source and available for learning purposes.

---

Built with ❤️ by Rahul Mishra
