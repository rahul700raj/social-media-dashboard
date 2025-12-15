import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { usersAPI } from '../../services/api';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async (_, { rejectWithValue }) => {
  try {
    const response = await usersAPI.getUsers();
    return response;
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || 'Failed to fetch users');
  }
});

export const followUser = createAsyncThunk('users/followUser', async (userId, { rejectWithValue }) => {
  try {
    const response = await usersAPI.followUser(userId);
    return { userId, ...response };
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || 'Failed to follow user');
  }
});

export const unfollowUser = createAsyncThunk('users/unfollowUser', async (userId, { rejectWithValue }) => {
  try {
    const response = await usersAPI.unfollowUser(userId);
    return { userId, ...response };
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || 'Failed to unfollow user');
  }
});

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(followUser.fulfilled, (state, action) => {
        const user = state.items.find(u => u.id === action.payload.userId);
        if (user) {
          user.isFollowing = true;
          user.followers = (user.followers || 0) + 1;
        }
      })
      .addCase(unfollowUser.fulfilled, (state, action) => {
        const user = state.items.find(u => u.id === action.payload.userId);
        if (user) {
          user.isFollowing = false;
          user.followers = Math.max((user.followers || 0) - 1, 0);
        }
      });
  },
});

export default usersSlice.reducer;
