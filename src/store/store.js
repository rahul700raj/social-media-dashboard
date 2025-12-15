import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import postsReducer from './slices/postsSlice';
import themeReducer from './slices/themeSlice';
import usersReducer from './slices/usersSlice';
import notificationsReducer from './slices/notificationsSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postsReducer,
    theme: themeReducer,
    users: usersReducer,
    notifications: notificationsReducer,
  },
});
