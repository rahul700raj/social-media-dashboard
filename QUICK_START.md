# ⚡ Quick Start Guide

Get the Social Media Dashboard up and running in minutes!

**Developer:** Rahul Mishra  
**Contact:** rm2778643@gmail.com | +91 9693243217

## 🚀 5-Minute Setup

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager
- Git installed

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/rahul700raj/social-media-dashboard.git

# 2. Navigate to project directory
cd social-media-dashboard

# 3. Install dependencies
npm install

# 4. Start development server
npm run dev

# 5. Open browser
# Visit: http://localhost:5173
```

That's it! The app should now be running. 🎉

## 🎯 First Steps

### 1. Create an Account
- Click "Sign up" on the login page
- Fill in your details:
  - Name: Your full name
  - Email: Valid email address
  - Password: At least 6 characters
- Click "Sign Up"

### 2. Explore the Dashboard
- **Home Feed**: View posts from all users
- **Create Post**: Share your thoughts
- **Friends**: Discover and follow users
- **Profile**: View and edit your profile
- **Notifications**: Check your activity

### 3. Try Key Features
- Toggle dark/light theme (moon/sun icon)
- Like posts
- Create a new post
- Follow/unfollow users
- Edit your profile

## 📝 Test Credentials

For quick testing, use any email/password combination:
- Email: `test@example.com`
- Password: `password123`

(Mock authentication - any valid email works)

## 🛠️ Available Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build

# Testing
npm test             # Run tests
npm run test:ui      # Run tests with UI
npm run test:watch   # Run tests in watch mode

# Code Quality
npm run lint         # Run ESLint
```

## 📁 Project Structure Overview

```
social-media-dashboard/
├── src/
│   ├── components/      # Reusable components
│   ├── pages/          # Page components
│   ├── store/          # Redux store & slices
│   ├── services/       # API services
│   ├── styles/         # Global styles
│   └── tests/          # Test files
├── public/             # Static assets
└── package.json        # Dependencies
```

## 🎨 Customization

### Change Theme Colors

Edit `src/styles/global.css`:

```css
:root {
  --primary: #3b82f6;      /* Change primary color */
  --secondary: #8b5cf6;    /* Change secondary color */
  /* ... more variables */
}
```

### Add New Pages

1. Create component in `src/pages/`
2. Add route in `src/App.jsx`
3. Add navigation link in `src/components/Layout/Sidebar.jsx`

### Connect Real API

Edit `src/services/api.js`:

```javascript
const API_BASE_URL = 'https://your-api.com';
```

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 5173
npx kill-port 5173

# Or use different port
npm run dev -- --port 3000
```

### Dependencies Issues
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
```bash
# Clear Vite cache
rm -rf node_modules/.vite
npm run dev
```

## 📚 Learning Path

### Beginner
1. Explore the UI
2. Create posts
3. Follow users
4. Toggle theme

### Intermediate
1. Read component code
2. Understand Redux flow
3. Modify styles
4. Add simple features

### Advanced
1. Add new features
2. Integrate real API
3. Write tests
4. Deploy to production

## 🎓 Key Concepts to Learn

### React Fundamentals
- Components & Props
- State & Lifecycle
- Hooks (useState, useEffect)
- Event Handling

### Advanced React
- Context API
- Custom Hooks
- Performance Optimization
- Code Splitting

### Redux
- Store Configuration
- Slices & Reducers
- Async Thunks
- Selectors

### React Router
- Route Configuration
- Navigation
- Protected Routes
- URL Parameters

## 📖 Documentation

- [README.md](README.md) - Project overview
- [FEATURES.md](FEATURES.md) - Complete feature list
- [ARCHITECTURE.md](ARCHITECTURE.md) - Technical architecture
- [DEPLOYMENT.md](DEPLOYMENT.md) - Deployment guide
- [CONTRIBUTING.md](CONTRIBUTING.md) - Contribution guidelines

## 🔗 Useful Links

- [React Documentation](https://react.dev)
- [Redux Toolkit](https://redux-toolkit.js.org)
- [React Router](https://reactrouter.com)
- [Vite](https://vitejs.dev)

## 💡 Tips

1. **Use React DevTools** - Install browser extension
2. **Use Redux DevTools** - Monitor state changes
3. **Check Console** - Look for errors/warnings
4. **Read Error Messages** - They're usually helpful
5. **Experiment** - Break things and learn!

## 🎯 Next Steps

1. ✅ Get the app running
2. ✅ Explore all features
3. ✅ Read the code
4. ✅ Make small changes
5. ✅ Add new features
6. ✅ Deploy your version

## 📞 Need Help?

**Rahul Mishra**
- Email: rm2778643@gmail.com
- Phone: +91 9693243217
- GitHub: [@rahul700raj](https://github.com/rahul700raj)

## 🌟 Show Your Support

If you find this project helpful:
- ⭐ Star the repository
- 🍴 Fork and customize
- 📢 Share with others
- 🐛 Report bugs
- 💡 Suggest features

---

Happy Coding! 🚀

**Built with ❤️ by Rahul Mishra**
