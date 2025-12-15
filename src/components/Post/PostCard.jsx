import React, { memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Heart, MessageCircle, Share2 } from 'lucide-react';
import { likePost } from '../../store/slices/postsSlice';
import './PostCard.css';

const PostCard = memo(({ post }) => {
  const dispatch = useDispatch();

  const handleLike = useCallback(() => {
    dispatch(likePost(post.id));
  }, [dispatch, post.id]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diff = now - date;
    const hours = Math.floor(diff / (1000 * 60 * 60));
    
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    if (days < 7) return `${days}d ago`;
    return date.toLocaleDateString();
  };

  return (
    <article className="post-card">
      <div className="post-header">
        <img src={post.author.avatar} alt={post.author.name} className="post-avatar" />
        <div className="post-author-info">
          <h3 className="post-author-name">{post.author.name}</h3>
          <span className="post-time">{formatDate(post.createdAt)}</span>
        </div>
      </div>

      <div className="post-content">
        <h2 className="post-title">{post.title}</h2>
        {post.body && <p className="post-body">{post.body}</p>}
        {post.image && <img src={post.image} alt={post.title} className="post-image" loading="lazy" />}
      </div>

      <div className="post-actions">
        <button
          onClick={handleLike}
          className={`post-action-btn ${post.isLiked ? 'liked' : ''}`}
        >
          <Heart size={20} fill={post.isLiked ? 'currentColor' : 'none'} />
          <span>{post.likes}</span>
        </button>

        <button className="post-action-btn">
          <MessageCircle size={20} />
          <span>{post.comments?.length || 0}</span>
        </button>

        <button className="post-action-btn">
          <Share2 size={20} />
        </button>
      </div>
    </article>
  );
});

PostCard.displayName = 'PostCard';

export default PostCard;
