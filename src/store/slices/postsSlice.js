import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { postsAPI } from '../../services/api';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (_, { rejectWithValue }) => {
  try {
    const response = await postsAPI.getPosts();
    return response;
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || 'Failed to fetch posts');
  }
});

export const createPost = createAsyncThunk('posts/createPost', async (postData, { rejectWithValue }) => {
  try {
    const response = await postsAPI.createPost(postData);
    return response;
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || 'Failed to create post');
  }
});

export const likePost = createAsyncThunk('posts/likePost', async (postId, { rejectWithValue }) => {
  try {
    const response = await postsAPI.likePost(postId);
    return { postId, ...response };
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || 'Failed to like post');
  }
});

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    addComment: (state, action) => {
      const post = state.items.find(p => p.id === action.payload.postId);
      if (post) {
        post.comments = [...(post.comments || []), action.payload.comment];
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.items.unshift(action.payload);
      })
      .addCase(likePost.fulfilled, (state, action) => {
        const post = state.items.find(p => p.id === action.payload.postId);
        if (post) {
          post.likes = action.payload.likes;
          post.isLiked = action.payload.isLiked;
        }
      });
  },
});

export const { addComment } = postsSlice.actions;
export default postsSlice.reducer;
