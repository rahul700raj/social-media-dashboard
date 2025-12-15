import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Home, Bell, User, LogOut, Moon, Sun } from 'lucide-react';
import { logout } from '../../store/slices/authSlice';
import { toggleTheme } from '../../store/slices/themeSlice';
import './Navbar.css';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { mode } = useSelector((state) => state.theme);
  const { unreadCount } = useSelector((state) => state.notifications);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          SocialHub
        </Link>

        <div className="navbar-actions">
          <Link to="/" className="navbar-icon" title="Home">
            <Home size={20} />
          </Link>

          <Link to="/notifications" className="navbar-icon notification-icon" title="Notifications">
            <Bell size={20} />
            {unreadCount > 0 && <span className="notification-badge">{unreadCount}</span>}
          </Link>

          <button
            onClick={() => dispatch(toggleTheme())}
            className="navbar-icon"
            title="Toggle theme"
          >
            {mode === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          <Link to={`/profile/${user?.id}`} className="navbar-icon" title="Profile">
            <User size={20} />
          </Link>

          <button onClick={handleLogout} className="navbar-icon" title="Logout">
            <LogOut size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
