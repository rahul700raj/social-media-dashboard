import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { markAsRead } from '../../store/slices/notificationsSlice';
import { Heart, MessageCircle, UserPlus, AtSign } from 'lucide-react';
import './Notifications.css';

const Notifications = () => {
  const dispatch = useDispatch();
  const { items: notifications, loading } = useSelector((state) => state.notifications);

  const handleMarkAsRead = useCallback((notificationId) => {
    dispatch(markAsRead(notificationId));
  }, [dispatch]);

  const getIcon = (type) => {
    switch (type) {
      case 'like':
        return <Heart size={20} className="notification-icon like" />;
      case 'comment':
        return <MessageCircle size={20} className="notification-icon comment" />;
      case 'follow':
        return <UserPlus size={20} className="notification-icon follow" />;
      case 'mention':
        return <AtSign size={20} className="notification-icon mention" />;
      default:
        return null;
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diff = now - date;
    const hours = Math.floor(diff / (1000 * 60 * 60));
    
    if (hours < 1) return 'Just now';
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    if (days < 7) return `${days}d ago`;
    return date.toLocaleDateString();
  };

  if (loading) return <div>Loading notifications...</div>;

  return (
    <div className="notifications-page">
      <h1 className="page-title">Notifications</h1>

      <div className="notifications-list">
        {notifications.length === 0 ? (
          <div className="no-notifications">
            <p>No notifications yet</p>
          </div>
        ) : (
          notifications.map((notification) => (
            <div
              key={notification.id}
              className={`notification-item ${notification.read ? 'read' : 'unread'}`}
              onClick={() => !notification.read && handleMarkAsRead(notification.id)}
            >
              <img
                src={notification.user.avatar}
                alt={notification.user.name}
                className="notification-avatar"
              />
              
              <div className="notification-content">
                <div className="notification-header">
                  {getIcon(notification.type)}
                  <p className="notification-message">{notification.message}</p>
                </div>
                <span className="notification-time">{formatDate(notification.createdAt)}</span>
              </div>

              {!notification.read && <div className="unread-indicator"></div>}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Notifications;
