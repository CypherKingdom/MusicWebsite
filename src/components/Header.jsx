import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

// Import images
import logo from '../images/image1.png';

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleSmoothScroll = (event) => {
      const targetId = event.target.getAttribute('href')?.substring(1);
      if (targetId && document.getElementById(targetId)) {
        event.preventDefault();
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
      }
    };

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((link) => link.addEventListener('click', handleSmoothScroll));

    return () => {
      navLinks.forEach((link) => link.removeEventListener('click', handleSmoothScroll));
    };
  }, [location]);

  // Close menu when location changes (page navigation)
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const handleMenuToggle = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <img src={logo} alt="MusicWave Logo" style={{ width: '32px', height: '32px', objectFit: 'contain' }} />
              <span className="logo-text">MusicWave</span>
            </div>
          </Link>
        </div>

        <input 
          className="menu-toggle" 
          type="checkbox" 
          id="menu-toggle" 
          checked={menuOpen}
          onChange={handleMenuToggle}
        />
        <label className="hamburger" htmlFor="menu-toggle" aria-label="Toggle menu">
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </label>

        <nav className={`navigation ${menuOpen ? 'menu-open' : ''}`}>
          <ul className="menu">
            <li>
              <Link 
                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} 
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                className={`nav-link ${location.pathname === '/artists' ? 'active' : ''}`} 
                to="/artists"
              >
                Artists
              </Link>
            </li>
            <li>
              <Link 
                className={`nav-link ${location.pathname === '/latest' ? 'active' : ''}`} 
                to="/latest"
              >
                Latest
              </Link>
            </li>
            <li>
              <a className="nav-link" href="#contact" onClick={() => setMenuOpen(false)}>
                Contact Us
              </a>
            </li>
          </ul>
        </nav>

        <ul className="user-menu">
          <li>
            <Link 
              className={`btn-secondary btn-vinyl ${isActive('/about') ? 'active-btn' : ''}`} 
              to="/about"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link 
              className={`btn-primary btn-equalizer ${isActive('/login') ? 'active-btn' : ''}`} 
              to="/login"
            >
              <span>Sign Up</span>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;