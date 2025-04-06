import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../images/image1.png';

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="footer-logo">
            <img src={image1} alt="MusicWave" className="logo-image" />
            <h3>MusicWave</h3>
          </div>
          <p>Discover, share, and enjoy music like never before.</p>
          <div className="social-icons">
            <a href="#" aria-label="Facebook"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
            <a href="#" aria-label="Twitter"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg></a>
            <a href="#" aria-label="Instagram"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
          </div>
        </div>

        <nav className="footer-nav">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/artists">Artists</Link></li>
            <li><Link to="/latest">Latest Releases</Link></li>
            <li><Link to="/about">About Us</Link></li>
          </ul>
        </nav>

        <nav className="footer-nav">
          <h4>Resources</h4>
          <ul>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </nav>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <ul>
            <li><a href="mailto:contact@musicwave.com">contact@musicwave.com</a></li>
            <li><a href="tel:+15551234567">+1 (555) 123-4567</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} MusicWave. All rights reserved.</p>
        <div className="footer-legal">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Cookies</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;