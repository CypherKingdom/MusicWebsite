import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Import images
import image1 from '../images/image1.png';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validate = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (!isLogin) {
      if (!formData.name) {
        newErrors.name = 'Name is required';
      }
      
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
    }
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Here you would handle the actual login/signup process
    console.log('Form submitted:', formData);
    alert(`${isLogin ? 'Login' : 'Registration'} successful!`);
    
    // Reset form after submission
    setFormData({
      email: '',
      password: '',
      name: '',
      confirmPassword: ''
    });
  };

  const toggleForm = () => {
    setIsLogin(prev => !prev);
    setErrors({});
  };

  return (
    <>
      <Header />
      <main className="auth-wrapper">
        <div className="auth-container">
          <div className="auth-form-container">
            <div className="auth-tabs">
              <button 
                className={`auth-tab ${isLogin ? 'active' : ''}`} 
                onClick={() => setIsLogin(true)}
              >
                Log In
              </button>
              <button 
                className={`auth-tab ${!isLogin ? 'active' : ''}`} 
                onClick={() => setIsLogin(false)}
              >
                Sign Up
              </button>
            </div>
            
            <form className="auth-form" onSubmit={handleSubmit}>
              <h2>{isLogin ? 'Welcome Back!' : 'Create an Account'}</h2>
              <p className="auth-subtitle">
                {isLogin 
                  ? 'Log in to access your personalized music experience' 
                  : 'Join our community of music lovers today'}
              </p>
              
              {!isLogin && (
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className={errors.name ? 'error' : ''}
                  />
                  {errors.name && <span className="error-message">{errors.name}</span>}
                </div>
              )}
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className={errors.email ? 'error' : ''}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className={errors.password ? 'error' : ''}
                />
                {errors.password && <span className="error-message">{errors.password}</span>}
              </div>
              
              {!isLogin && (
                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm your password"
                    className={errors.confirmPassword ? 'error' : ''}
                  />
                  {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
                </div>
              )}
              
              {isLogin && (
                <div className="forgot-password">
                  <Link to="/forgot-password">Forgot password?</Link>
                </div>
              )}
              
              <button type="submit" className={`auth-button ${isLogin ? 'btn-vinyl' : 'btn-equalizer'}`}>
                {isLogin ? 'Log In' : <span>Create Account</span>}
              </button>
              
              <div className="auth-divider">
                <span>or continue with</span>
              </div>
              
              <div className="social-auth">
                <button type="button" className="social-auth-button google btn-equalizer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#DB4437">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.46 7.12h-2.19v1.09h2.19v2.19h1.09v-2.19h2.19v-1.09h-2.19V6.93h-1.09v2.19z"></path>
                  </svg>
                  <span>Google</span>
                </button>
                <button type="button" className="social-auth-button facebook btn-vinyl">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#4267B2">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10c.13 0 .26-.01.39-.02v-7.4h-2.4v-2.78h2.4V9.38c0-2.39 1.46-3.68 3.59-3.68.7 0 1.37.04 1.61.06v2.23h-1.1c-.83 0-1.07.42-1.07 1.04v1.36h2.13l-.28 2.78h-1.85V21.3C18.88 20.28 22 16.52 22 12z"></path>
                  </svg>
                  <span>Facebook</span>
                </button>
              </div>
              
              <p className="auth-toggle">
                {isLogin 
                  ? "Don't have an account? " 
                  : "Already have an account? "}
                <button type="button" onClick={toggleForm} className="toggle-link">
                  {isLogin ? 'Sign up' : 'Log in'}
                </button>
              </p>
            </form>
          </div>
          
          <div className="auth-image" style={{ 
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url(${image1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}>
            <div className="auth-image-content">
              <h2>Music Connects Us All</h2>
              <p>Join MusicWave to discover new artists, create playlists, and share your favorite music with friends.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Login;