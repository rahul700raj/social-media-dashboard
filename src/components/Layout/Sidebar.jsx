import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, PlusSquare, Users, User } from 'lucide-react';
import { useSelector } from 'react-redux';
import './Sidebar.css';

const Sidebar = () => {
  const { user } = useSelector((state) => state.auth);

  const navItems = [
    { to: '/', icon: Home, label: 'Home' },
    { to: '/create-post', icon: PlusSquare, label: 'Create Post' },
    { to: '/friends', icon: Users, label: 'Friends' },
    { to: `/profile/${user?.id}`, icon: User, label: 'Profile' },
  ];

  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
