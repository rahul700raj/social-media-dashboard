import axios from 'axios';

// Mock API base URL - replace with your actual API
const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth API
export const authAPI = {
  login: async (credentials) => {
    // Mock login - replace with real API
    await new Promise(resolve => setTimeout(resolve, 1000));
    return {
      token: 'mock-jwt-token-' + Date.now(),
      user: {
        id: 1,
        name: credentials.email.split('@')[0],
        email: credentials.email,
        avatar: `https://ui-avatars.com/api/?name=${credentials.email}&background=random`,
        bio: 'Social media enthusiast',
        followers: 150,
        following: 200,
      },
    };
  },
  signup: async (userData) => {
    // Mock signup - replace with real API
    await new Promise(resolve => setTimeout(resolve, 1000));
    return {
      token: 'mock-jwt-token-' + Date.now(),
      user: {
        id: Date.now(),
        name: userData.name,
        email: userData.email,
        avatar: `https://ui-avatars.com/api/?name=${userData.name}&background=random`,
        bio: 'New to social media',
        followers: 0,
        following: 0,
      },
    };
  },
};

// Posts API
export const postsAPI = {
  getPosts: async () => {
    const response = await api.get('/posts');
    return response.data.slice(0, 20).map(post => ({
      ...post,
      image: `https://picsum.photos/seed/${post.id}/600/400`,
      author: {
        id: post.userId,
        name: `User ${post.userId}`,
        avatar: `https://ui-avatars.com/api/?name=User${post.userId}&background=random`,
      },
      likes: Math.floor(Math.random() * 500),
      isLiked: false,
      comments: [],
      createdAt: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000).toISOString(),
    }));
  },
  createPost: async (postData) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const user = JSON.parse(localStorage.getItem('user'));
    return {
      id: Date.now(),
      ...postData,
      author: {
        id: user.id,
        name: user.name,
        avatar: user.avatar,
      },
      likes: 0,
      isLiked: false,
      comments: [],
      createdAt: new Date().toISOString(),
    };
  },
  likePost: async (postId) => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return {
      likes: Math.floor(Math.random() * 500),
      isLiked: true,
    };
  },
};

// Users API
export const usersAPI = {
  getUsers: async () => {
    const response = await api.get('/users');
    return response.data.map(user => ({
      ...user,
      avatar: `https://ui-avatars.com/api/?name=${user.name}&background=random`,
      bio: user.company.catchPhrase,
      followers: Math.floor(Math.random() * 1000),
      following: Math.floor(Math.random() * 500),
      isFollowing: Math.random() > 0.5,
    }));
  },
  followUser: async (userId) => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return { success: true };
  },
  unfollowUser: async (userId) => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return { success: true };
  },
};

// Notifications API
export const notificationsAPI = {
  getNotifications: async () => {
    await new Promise(resolve => setTimeout(resolve, 500));
    const types = ['like', 'comment', 'follow', 'mention'];
    return Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      type: types[Math.floor(Math.random() * types.length)],
      message: `User ${Math.floor(Math.random() * 10) + 1} ${types[Math.floor(Math.random() * types.length)]}ed your post`,
      user: {
        name: `User ${Math.floor(Math.random() * 10) + 1}`,
        avatar: `https://ui-avatars.com/api/?name=User${i}&background=random`,
      },
      read: Math.random() > 0.5,
      createdAt: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000).toISOString(),
    }));
  },
  markAsRead: async (notificationId) => {
    await new Promise(resolve => setTimeout(resolve, 200));
    return { success: true };
  },
};

export default api;
