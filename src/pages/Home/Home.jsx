import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../../store/slices/postsSlice';
import PostCard from '../../components/Post/PostCard';
import LoadingSpinner from '../../components/UI/LoadingSpinner';
import './Home.css';

const Home = () => {
  const dispatch = useDispatch();
  const { items: posts, loading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="error-message">Error: {error}</div>;

  return (
    <div className="home-page">
      <h1 className="page-title">Home Feed</h1>
      <div className="posts-container">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Home;
