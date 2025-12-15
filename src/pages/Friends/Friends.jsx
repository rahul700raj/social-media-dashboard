import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, followUser, unfollowUser } from '../../store/slices/usersSlice';
import LoadingSpinner from '../../components/UI/LoadingSpinner';
import { UserPlus, UserMinus } from 'lucide-react';
import './Friends.css';

const Friends = () => {
  const dispatch = useDispatch();
  const { items: users, loading, error } = useSelector((state) => state.users);
  const currentUser = useSelector((state) => state.auth.user);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleFollow = useCallback((userId) => {
    dispatch(followUser(userId));
  }, [dispatch]);

  const handleUnfollow = useCallback((userId) => {
    dispatch(unfollowUser(userId));
  }, [dispatch]);

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="error-message">Error: {error}</div>;

  const filteredUsers = users.filter(user => user.id !== currentUser?.id);

  return (
    <div className="friends-page">
      <h1 className="page-title">Friends & Followers</h1>
      
      <div className="users-grid">
        {filteredUsers.map((user) => (
          <div key={user.id} className="user-card">
            <img src={user.avatar} alt={user.name} className="user-avatar" />
            
            <div className="user-info">
              <h3 className="user-name">{user.name}</h3>
              <p className="user-bio">{user.bio}</p>
              
              <div className="user-stats">
                <span>{user.followers} followers</span>
                <span>{user.following} following</span>
              </div>
            </div>

            <button
              onClick={() => user.isFollowing ? handleUnfollow(user.id) : handleFollow(user.id)}
              className={`follow-btn ${user.isFollowing ? 'following' : ''}`}
            >
              {user.isFollowing ? (
                <>
                  <UserMinus size={18} /> Unfollow
                </>
              ) : (
                <>
                  <UserPlus size={18} /> Follow
                </>
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Friends;
