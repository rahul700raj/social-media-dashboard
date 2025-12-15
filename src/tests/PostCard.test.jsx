import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import PostCard from '../components/Post/PostCard';
import postsReducer from '../store/slices/postsSlice';

const createMockStore = () => {
  return configureStore({
    reducer: {
      posts: postsReducer,
    },
  });
};

const mockPost = {
  id: 1,
  title: 'Test Post Title',
  body: 'This is a test post body',
  image: 'https://picsum.photos/600/400',
  author: {
    id: 1,
    name: 'Test User',
    avatar: 'https://ui-avatars.com/api/?name=Test+User',
  },
  likes: 42,
  isLiked: false,
  comments: [],
  createdAt: new Date().toISOString(),
};

const renderWithProviders = (component) => {
  const store = createMockStore();
  return render(
    <Provider store={store}>
      {component}
    </Provider>
  );
};

describe('PostCard Component', () => {
  it('renders post information correctly', () => {
    renderWithProviders(<PostCard post={mockPost} />);
    
    expect(screen.getByText('Test Post Title')).toBeInTheDocument();
    expect(screen.getByText('This is a test post body')).toBeInTheDocument();
    expect(screen.getByText('Test User')).toBeInTheDocument();
    expect(screen.getByText('42')).toBeInTheDocument();
  });

  it('displays post image', () => {
    renderWithProviders(<PostCard post={mockPost} />);
    
    const image = screen.getByAlt('Test Post Title');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', mockPost.image);
  });

  it('displays author avatar', () => {
    renderWithProviders(<PostCard post={mockPost} />);
    
    const avatar = screen.getByAlt('Test User');
    expect(avatar).toBeInTheDocument();
  });

  it('shows like button', () => {
    renderWithProviders(<PostCard post={mockPost} />);
    
    const likeButtons = screen.getAllByRole('button');
    expect(likeButtons.length).toBeGreaterThan(0);
  });

  it('displays comment count', () => {
    const postWithComments = {
      ...mockPost,
      comments: [{ id: 1, text: 'Comment 1' }, { id: 2, text: 'Comment 2' }],
    };
    
    renderWithProviders(<PostCard post={postWithComments} />);
    expect(screen.getByText('2')).toBeInTheDocument();
  });

  it('applies liked style when post is liked', () => {
    const likedPost = { ...mockPost, isLiked: true };
    renderWithProviders(<PostCard post={likedPost} />);
    
    const likeButton = screen.getAllByRole('button')[0];
    expect(likeButton).toHaveClass('liked');
  });

  it('renders without image when image is not provided', () => {
    const postWithoutImage = { ...mockPost, image: null };
    renderWithProviders(<PostCard post={postWithoutImage} />);
    
    const images = screen.queryAllByRole('img');
    // Should only have avatar, not post image
    expect(images.length).toBe(1);
  });
});
