import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import musicStudio from '../images/music-studio.jpg';

const Home = () => {
  // YouTube Music inspired featured content
  const featuredArtists = [
    {
      id: 1, 
      name: "Ed Sheeran",
      genre: "Pop • Singer-Songwriter • Acoustic",
      imageUrl: "https://i.ytimg.com/vi/orJSJGHjBLI/maxresdefault.jpg",
      profileUrl: "/artists/ed-sheeran",
      youtubeUrl: "https://www.youtube.com/watch?v=orJSJGHjBLI"
    },
    {
      id: 2, 
      name: "Taylor Swift",
      genre: "Pop • Country • Folk",
      imageUrl: "https://i.ytimg.com/vi/tollGa3S0o8/maxresdefault.jpg",
      profileUrl: "/artists/taylor-swift",
      youtubeUrl: "https://www.youtube.com/watch?v=tollGa3S0o8"
    },
    {
      id: 3, 
      name: "The Weeknd",
      genre: "R&B • Pop • Alternative",
      imageUrl: "https://i.ytimg.com/vi/XXYlFuWEuKI/maxresdefault.jpg",
      profileUrl: "/artists/the-weeknd",
      youtubeUrl: "https://www.youtube.com/watch?v=XXYlFuWEuKI"
    }
  ];
  
  // YouTube Music inspired latest releases
  const latestReleases = [
    {
      id: 2,
      title: "Thinking Out Loud",
      artist: "Ed Sheeran",
      album: "× (Multiply)",
      imageUrl: "https://i.ytimg.com/vi/lp-EO5I60KA/maxresdefault.jpg",
      youtubeUrl: "https://www.youtube.com/watch?v=lp-EO5I60KA"
    },
    {
      id: 3,
      title: "Blinding Lights",
      artist: "The Weeknd",
      album: "After Hours",
      imageUrl: "https://i.ytimg.com/vi/4NRXx6U8ABQ/maxresdefault.jpg",
      youtubeUrl: "https://www.youtube.com/watch?v=4NRXx6U8ABQ"
    },
    {
      id: 4,
      title: "Watermelon Sugar",
      artist: "Harry Styles",
      album: "Fine Line",
      imageUrl: "https://i.ytimg.com/vi/E07s5ZYygMg/maxresdefault.jpg",
      youtubeUrl: "https://www.youtube.com/watch?v=E07s5ZYygMg"
    }
  ];
  
  // YouTube Music inspired categories with sample videos for each category
  const musicCategories = [
    { id: 1, name: "Pop", icon: "🎵" },
    { id: 2, name: "Hip-Hop", icon: "🎤" },
    { id: 3, name: "Rock", icon: "🎸" },
    { id: 4, name: "Electronic", icon: "🎧" },
    { id: 5, name: "R&B", icon: "🎹" },
    { id: 6, name: "Latin", icon: "💃" }
  ];

  // Function to handle external YouTube links
  const openYoutubeLink = (url, event) => {
    event.preventDefault();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleSmoothScroll = (event) => {
    const targetId = event.target.getAttribute('href')?.substring(1);
    if (targetId && document.getElementById(targetId)) {
      event.preventDefault();
      document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Header />
      <main className="main-content">
        <section className="hero-section" style={{ height: '80vh' }}>
          <div className="hero-overlay"></div>
          <div className="hero-container">
            <div className="hero-content">
              <h1>Discover Your <span className="highlight">Sound</span></h1>
              <p className="hero-description">
                Connect with thousands of artists and listeners. Stream, share, and discover music that moves you.
              </p>
              <div className="hero-buttons">
                <Link to="/artists" className="btn-primary btn-vinyl">
                  <span>Discover Artists</span>
                </Link>
                <Link to="/latest" className="btn-secondary btn-equalizer">
                  <span>Latest Releases</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="categories-section">
          <div className="section-container">
            <h2 className="section-title">Browse Categories</h2>
            <div className="categories-grid">
              {musicCategories.map(category => (
                <div className="category-card" key={category.id}>
                  <div className="category-icon">{category.icon}</div>
                  <h3>{category.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="featured-section">
          <div className="section-container">
            <h2 className="section-title">Featured Artists</h2>
            <div className="artist-cards">
              {featuredArtists.map(artist => (
                <div className="artist-card" key={artist.id}>
                  <div className="artist-image-container">
                    <img src={artist.imageUrl} alt={artist.name} className="artist-image" />
                    <a 
                      href={artist.youtubeUrl} 
                      className="youtube-overlay"
                      onClick={(e) => openYoutubeLink(artist.youtubeUrl, e)}
                      title={`Watch ${artist.name} on YouTube Music`}
                    >
                      <svg className="youtube-play" viewBox="0 0 24 24" width="48" height="48">
                        <path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z" fill="red"/>
                      </svg>
                    </a>
                  </div>
                  <h3 className="artist-name">{artist.name}</h3>
                  <p className="artist-genre">{artist.genre}</p>
                  <div className="artist-links">
                    <Link to={artist.profileUrl} className="artist-link">
                      View Profile
                    </Link>
                    <a 
                      href={artist.youtubeUrl}
                      className="youtube-text-link" 
                      onClick={(e) => openYoutubeLink(artist.youtubeUrl, e)}
                    >
                      YouTube
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div className="section-cta">
              <Link to="/artists" className="view-all-link btn-vinyl">View All Artists</Link>
            </div>
          </div>
        </section>

        <section className="overview-section">
          <div className="overview-container">
            <div className="overview-content">
              <div className="overview-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18V5l12-2v13"></path>
                  <circle cx="6" cy="18" r="3"></circle>
                  <circle cx="18" cy="16" r="3"></circle>
                </svg>
              </div>
              <h2>Why MusicWave?</h2>
              <p>
                Our platform is designed for music lovers who want to stay connected with the pulse of the industry.
                Discover new releases, follow your favorite artists, and build a community around the sounds that move you.
                Experience music like never before with our premium features and exclusive content.
              </p>
              <Link to="/about" className="btn-primary btn-vinyl">
                Learn More About Us
              </Link>
            </div>
            <div className="overview-image">
              <img src={musicStudio} alt="Music Experience" />
            </div>
          </div>
        </section>

        <section className="latest-releases">
          <div className="section-container">
            <h2 className="section-title">Latest Releases</h2>
            <div className="track-cards">
              {latestReleases.map(track => (
                <div className="track-card" key={track.id}>
                  <div className="track-image-container">
                    <img src={track.imageUrl} alt={track.title} className="track-image" />
                    <a 
                      href={track.youtubeUrl} 
                      className="play-button"
                      onClick={(e) => openYoutubeLink(track.youtubeUrl, e)}
                      title={`Listen to ${track.title} on YouTube Music`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                    </a>
                  </div>
                  <h3 className="track-name">
                    <a 
                      href={track.youtubeUrl}
                      onClick={(e) => openYoutubeLink(track.youtubeUrl, e)}
                      className="track-link"
                    >
                      {track.title}
                    </a>
                  </h3>
                  <p className="track-artist">{track.artist}</p>
                  <p className="track-album">{track.album}</p>
                </div>
              ))}
            </div>
            <div className="section-cta">
              <Link to="/latest" className="btn-secondary btn-vinyl">Browse All Releases</Link>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="contact-container">
            <h2 className="section-title">Contact Us</h2>
            <p className="section-subtitle">Have questions about MusicWave? We'd love to hear from you. Our dedicated team is always ready to assist you with any inquiries.</p>
            
            <div className="contact-content">
              <div className="contact-info">
                <div className="contact-card">
                  <div className="contact-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div className="contact-details">
                    <h3>Email Us</h3>
                    <p>Our support team typically responds within 24 hours.</p>
                    <p><a href="mailto:contact@musicwave.com">contact@musicwave.com</a></p>
                    <p><a href="mailto:support@musicwave.com">support@musicwave.com</a></p>
                  </div>
                </div>
                
                <div className="contact-card">
                  <div className="contact-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div className="contact-details">
                    <h3>Call Us</h3>
                    <p>Speak directly with our customer service representatives.</p>
                    <p>+1 (555) 123-4567</p>
                    <p>Mon-Fri: 9AM - 6PM EST</p>
                  </div>
                </div>
                
                <div className="social-links">
                  <h3>Connect With Us</h3>
                  <p>Follow us on social media for the latest updates, exclusive content, and community discussions. Join our growing community of music lovers.</p>
                  <div className="social-icons">
                    <a href="#" className="social-icon" aria-label="Facebook">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </a>
                    <a href="#" className="social-icon" aria-label="Twitter">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                      </svg>
                    </a>
                    <a href="#" className="social-icon" aria-label="Instagram">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>
                    <a href="#" className="social-icon" aria-label="YouTube">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                      </svg>
                    </a>
                    <a href="#" className="social-icon" aria-label="LinkedIn">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="contact-form-container">
                <form className="contact-form">
                  <h3>Send us a Message</h3>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Your Name</label>
                      <input type="text" id="name" name="name" placeholder="Enter your name" required />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input type="email" id="email" name="email" placeholder="Enter your email" required />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <select id="subject" name="subject" required>
                      <option value="" disabled selected>Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Customer Support</option>
                      <option value="partnership">Business Partnership</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows="5" placeholder="How can we help you?" required></textarea>
                  </div>
                  
                  <button type="submit" className="contact-submit btn-vinyl">
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22 2L11 13"></path>
                        <path d="M22 2l-7 20-4-9-9-4 20-7z"></path>
                      </svg>
                      Send Message
                    </span>
                  </button>
                  
                  <div className="form-message"></div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;