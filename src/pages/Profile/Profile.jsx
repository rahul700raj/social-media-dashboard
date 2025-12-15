import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { updateProfile } from '../../store/slices/authSlice';
import toast from 'react-hot-toast';
import { Edit2, Save, X } from 'lucide-react';
import './Profile.css';

const Profile = () => {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    bio: user?.bio || '',
  });

  const isOwnProfile = !userId || userId === String(user?.id);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    dispatch(updateProfile(formData));
    setIsEditing(false);
    toast.success('Profile updated successfully!');
  };

  const handleCancel = () => {
    setFormData({
      name: user?.name || '',
      bio: user?.bio || '',
    });
    setIsEditing(false);
  };

  return (
    <div className="profile-page">
      <div className="profile-header">
        <img src={user?.avatar} alt={user?.name} className="profile-avatar-large" />
        
        <div className="profile-info">
          {isEditing ? (
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="profile-edit-input"
            />
          ) : (
            <h1 className="profile-name">{user?.name}</h1>
          )}
          
          <p className="profile-email">{user?.email}</p>
          
          {isEditing ? (
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              className="profile-edit-textarea"
              rows="3"
            />
          ) : (
            <p className="profile-bio">{user?.bio}</p>
          )}

          <div className="profile-stats">
            <div className="stat">
              <span className="stat-value">{user?.followers || 0}</span>
              <span className="stat-label">Followers</span>
            </div>
            <div className="stat">
              <span className="stat-value">{user?.following || 0}</span>
              <span className="stat-label">Following</span>
            </div>
          </div>

          {isOwnProfile && (
            <div className="profile-actions">
              {isEditing ? (
                <>
                  <button onClick={handleSave} className="btn-primary">
                    <Save size={18} /> Save
                  </button>
                  <button onClick={handleCancel} className="btn-secondary">
                    <X size={18} /> Cancel
                  </button>
                </>
              ) : (
                <button onClick={() => setIsEditing(true)} className="btn-primary">
                  <Edit2 size={18} /> Edit Profile
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="profile-contact">
        <h3>Contact Information</h3>
        <p>Email: rm2778643@gmail.com</p>
        <p>Phone: +91 9693243217</p>
      </div>
    </div>
  );
};

export default Profile;
