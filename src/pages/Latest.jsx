import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Latest = () => {
  const [currentCategory, setCurrentCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  const [releases, setReleases] = useState([]);
  
  useEffect(() => {
    // Simulate loading data from YouTube Music API
    setIsLoading(true);
    
    // This would be replaced with an actual API call in production
    // Example: fetch('https://music.youtube.com/api/releases')
    setTimeout(() => {
      setReleases([
        {
          id: 2,
          title: 'Eyes Closed',
          artist: 'Ed Sheeran',
          type: 'single',
          image: 'https://i.ytimg.com/vi/yQv0dHYTFOY/maxresdefault.jpg',
          date: 'March 24, 2023',
          album: 'Subtract',
          tracks: 1,
          youtubeUrl: 'https://www.youtube.com/watch?v=yQv0dHYTFOY'
        },
        {
          id: 3,
          title: 'Shivers',
          artist: 'Ed Sheeran',
          type: 'single',
          image: 'https://i.ytimg.com/vi/Il0S8BocSNE/maxresdefault.jpg',
          date: 'September 10, 2021',
          album: '=',
          tracks: 1,
          youtubeUrl: 'https://www.youtube.com/watch?v=Il0S8BocSNE'
        },
        {
          id: 4,
          title: 'Flowers',
          artist: 'Miley Cyrus',
          type: 'album',
          image: 'https://i.ytimg.com/vi/G7KNmW9a75Y/maxresdefault.jpg',
          date: 'March 10, 2023',
          album: 'Endless Summer Vacation',
          tracks: 13,
          youtubeUrl: 'https://www.youtube.com/watch?v=G7KNmW9a75Y'
        },
        {
          id: 5,
          title: 'As It Was',
          artist: 'Harry Styles',
          type: 'single',
          image: 'https://i.ytimg.com/vi/H5v3kku4y6Q/maxresdefault.jpg',
          date: 'April 1, 2022',
          album: "Harry's House",
          tracks: 1,
          youtubeUrl: 'https://www.youtube.com/watch?v=H5v3kku4y6Q'
        },
        {
          id: 6,
          title: 'Calm Down',
          artist: 'Rema, Selena Gomez',
          type: 'ep',
          image: 'https://i.ytimg.com/vi/WcIcVapfqXw/maxresdefault.jpg',
          date: 'February 24, 2023',
          album: 'Rave & Roses Ultra',
          tracks: 5,
          youtubeUrl: 'https://www.youtube.com/watch?v=WcIcVapfqXw'
        },
        {
          id: 7,
          title: 'Die With A Smile',
          artist: 'Bruno Mars, Lady Gaga',
          type: 'single',
          image: 'https://i.ytimg.com/vi/r8JU13i_-ow/maxresdefault.jpg',
          date: 'August 16, 2023',
          album: 'Die With A Smile',
          tracks: 1,
          youtubeUrl: 'https://www.youtube.com/watch?v=r8JU13i_-ow'
        },
        {
          id: 8,
          title: 'Espresso',
          artist: 'Sabrina Carpenter',
          type: 'single',
          image: 'https://i.ytimg.com/vi/kBNt8hYgxY0/maxresdefault.jpg',
          date: 'April 12, 2024',
          album: 'Short n\' Sweet',
          tracks: 1,
          youtubeUrl: 'https://www.youtube.com/watch?v=kBNt8hYgxY0'
        }
      ]);
      setIsLoading(false);
    }, 800);
  }, []);

  // Filter releases based on selected category
  const filteredReleases = currentCategory === 'all' 
    ? releases 
    : releases.filter(release => release.type === currentCategory);

  // Function to handle external YouTube links
  const openYoutubeLink = (url, event) => {
    event.preventDefault();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <Header />
      <main className="main-wrapper">
        <section className="latest-hero">
          <div className="latest-hero-overlay"></div>
          <div className="latest-hero-content">
            <h1 className="latest-title">New Releases</h1>
            <p className="latest-subtitle">
              Stay updated with the freshest music from YouTube Music
            </p>
          </div>
        </section>
        
        <section className="latest-filter">
          <div className="filter-container">
            <div className="category-filters">
              <button 
                className={`category-filter ${currentCategory === 'all' ? 'active' : ''}`}
                onClick={() => setCurrentCategory('all')}
              >
                All Releases
              </button>
              <button 
                className={`category-filter ${currentCategory === 'album' ? 'active' : ''}`}
                onClick={() => setCurrentCategory('album')}
              >
                Albums
              </button>
              <button 
                className={`category-filter ${currentCategory === 'single' ? 'active' : ''}`}
                onClick={() => setCurrentCategory('single')}
              >
                Singles
              </button>
              <button 
                className={`category-filter ${currentCategory === 'ep' ? 'active' : ''}`}
                onClick={() => setCurrentCategory('ep')}
              >
                EPs
              </button>
            </div>
          </div>
        </section>
        
        {isLoading ? (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Loading latest releases from YouTube Music...</p>
          </div>
        ) : (
          <>
            <section className="releases-grid">
              {filteredReleases.map(release => (
                <div className="release-card" key={release.id}>
                  <div className="release-image-wrapper">
                    <img src={release.image} alt={release.title} className="release-image" />
                    <div className="release-overlay">
                      <a 
                        href={release.youtubeUrl || '#'} 
                        className="play-button"
                        onClick={(e) => release.youtubeUrl && openYoutubeLink(release.youtubeUrl, e)}
                        title={`Listen to ${release.title} on YouTube Music`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                          <polygon points="5 3 19 12 5 21 5 3"></polygon>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="release-info">
                    <div className="release-type">
                      <span className={`type-badge ${release.type}`}>{release.type}</span>
                      <span className="release-date">{release.date}</span>
                    </div>
                    <h3 className="release-title">
                      <a 
                        href={release.youtubeUrl || '#'}
                        onClick={(e) => release.youtubeUrl && openYoutubeLink(release.youtubeUrl, e)}
                        className="release-title-link"
                      >
                        {release.title}
                      </a>
                    </h3>
                    <p className="release-artist">{release.artist}</p>
                    <p className="release-album">{release.album}</p>
                    <p className="release-tracks">{release.tracks} track{release.tracks > 1 ? 's' : ''}</p>
                    <div className="release-actions">
                      <a 
                        href={`https://music.youtube.com/search?q=${encodeURIComponent(`${release.title} ${release.artist}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="yt-music-button"
                      >
                        <svg viewBox="0 0 24 24" width="18" height="18">
                          <path d="M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0zm0 19.104c-3.924 0-7.104-3.18-7.104-7.104S8.076 4.896 12 4.896s7.104 3.18 7.104 7.104-3.18 7.104-7.104 7.104zm0-13.332c-3.432 0-6.228 2.784-6.228 6.228S8.568 18.228 12 18.228s6.228-2.784 6.228-6.228S15.432 5.772 12 5.772zM9.684 15.54V8.46L16.2 12l-6.516 3.54z" fill="red" />
                        </svg>
                        <span>YouTube Music</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </section>
            
            {filteredReleases.length === 0 && (
              <div className="no-results">
                <p>No releases found in this category.</p>
              </div>
            )}

            <section className="youtube-music-promo">
              <div className="promo-container">
                <div className="promo-icon">
                  <svg viewBox="0 0 24 24" width="48" height="48">
                    <path d="M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0zm0 19.104c-3.924 0-7.104-3.18-7.104-7.104S8.076 4.896 12 4.896s7.104 3.18 7.104 7.104-3.18 7.104-7.104 7.104zm0-13.332c-3.432 0-6.228 2.784-6.228 6.228S8.568 18.228 12 18.228s6.228-2.784 6.228-6.228S15.432 5.772 12 5.772zM9.684 15.54V8.46L16.2 12l-6.516 3.54z" fill="red" />
                  </svg>
                </div>
                <div className="promo-content">
                  <h3>Discover More on YouTube Music</h3>
                  <p>Explore millions of songs, curated playlists, and personalized recommendations.</p>
                  <a 
                    href="https://music.youtube.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-primary btn-youtube"
                  >
                    Open YouTube Music
                  </a>
                </div>
              </div>
            </section>
          </>
        )}

        <section className="section-cta">
          <Link to="/artists" className="view-all-link btn-equalizer">
            <span>Discover More Artists</span>
          </Link>
        </section>

        <section className="newsletter-section">
          <div className="newsletter-container">
            <h3>Stay Updated with New Releases</h3>
            <p>Subscribe to our newsletter to get weekly updates on the latest music.</p>
            <form className="newsletter-form">
              <div className="newsletter-input-group">
                <input type="email" placeholder="Enter your email address" required />
                <button type="submit" className="btn-primary btn-equalizer">
                  <span>Subscribe</span>
                </button>
              </div>
              <p className="form-note">By subscribing, you agree to receive email updates from MusicWave.</p>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Latest;