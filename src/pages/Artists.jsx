import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Artists = () => {
  const [filterGenre, setFilterGenre] = useState('all');
  
  // YouTube Music inspired artist data
  const artists = [
    { 
      id: 1, 
      name: 'Taylor Swift', 
      genre: 'pop', 
      image: 'https://i.ytimg.com/vi/tollGa3S0o8/maxresdefault.jpg', 
      followers: '81.2M', 
      albums: 11, 
      topTrack: 'Cruel Summer',
      youtubeUrl: 'https://www.youtube.com/watch?v=tollGa3S0o8'
    },
    { 
      id: 2, 
      name: 'Ed Sheeran', 
      genre: 'pop', 
      image: 'https://i.ytimg.com/vi/orJSJGHjBLI/maxresdefault.jpg', 
      followers: '82.5M', 
      albums: 6,
      topTrack: 'Shape of You',
      youtubeUrl: 'https://www.youtube.com/watch?v=orJSJGHjBLI'
    },
    { 
      id: 3, 
      name: 'The Weeknd', 
      genre: 'rnb', 
      image: 'https://i.ytimg.com/vi/XXYlFuWEuKI/maxresdefault.jpg', 
      followers: '54.6M', 
      albums: 5,
      topTrack: 'Blinding Lights',
      youtubeUrl: 'https://www.youtube.com/watch?v=XXYlFuWEuKI'
    },
    { 
      id: 4, 
      name: 'Billie Eilish', 
      genre: 'alternative', 
      image: 'https://i.ytimg.com/vi/V1Pl8CzNzCw/maxresdefault.jpg', 
      followers: '40.3M', 
      albums: 3,
      topTrack: 'bad guy',
      youtubeUrl: 'https://www.youtube.com/watch?v=V1Pl8CzNzCw'
    },
    { 
      id: 5, 
      name: 'Drake', 
      genre: 'hiphop', 
      image: 'https://i.ytimg.com/vi/JFm7YDVlqnI/maxresdefault.jpg', 
      followers: '65.7M', 
      albums: 7,
      topTrack: 'God\'s Plan',
      youtubeUrl: 'https://www.youtube.com/watch?v=JFm7YDVlqnI'
    },
    { 
      id: 6, 
      name: 'Dua Lipa', 
      genre: 'pop', 
      image: 'https://i.ytimg.com/vi/WHuBW3qKm9g/maxresdefault.jpg', 
      followers: '30.2M', 
      albums: 3,
      topTrack: 'Levitating',
      youtubeUrl: 'https://www.youtube.com/watch?v=WHuBW3qKm9g'
    },
    { 
      id: 7, 
      name: 'Adele', 
      genre: 'pop', 
      image: 'https://i.ytimg.com/vi/U3ASj1L6_sY/maxresdefault.jpg', 
      followers: '57.9M', 
      albums: 4,
      topTrack: 'Hello',
      youtubeUrl: 'https://www.youtube.com/watch?v=U3ASj1L6_sY'
    },
    { 
      id: 8, 
      name: 'Coldplay', 
      genre: 'rock', 
      image: 'https://i.ytimg.com/vi/k4V3Mo61fJM/maxresdefault.jpg', 
      followers: '43.5M', 
      albums: 9,
      topTrack: 'Fix You',
      youtubeUrl: 'https://www.youtube.com/watch?v=k4V3Mo61fJM'
    },
  ];

  // Function to handle external YouTube links
  const openYoutubeLink = (url, event) => {
    event.preventDefault();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Filter artists based on selected genre
  const filteredArtists = filterGenre === 'all' 
    ? artists 
    : artists.filter(artist => artist.genre === filterGenre);

  return (
    <>
      <Header />
      <main className="artists-wrapper">
        <section className="artists-hero">
          <div className="artists-hero-content">
            <h1 className="artists-title">Discover Artists</h1>
            <p className="artists-subtitle">
              Find and follow your favorite musicians from around the world
            </p>
          </div>
        </section>
        
        <section className="artists-filter">
          <div className="filter-container">
            <h2>Browse by Genre</h2>
            <div className="genre-filters">
              <button 
                className={`genre-filter ${filterGenre === 'all' ? 'active' : ''}`}
                onClick={() => setFilterGenre('all')}
              >
                All Genres
              </button>
              {[
                {id: 'pop', label: 'Pop'},
                {id: 'hiphop', label: 'Hip-Hop'},
                {id: 'rnb', label: 'R&B'},
                {id: 'rock', label: 'Rock'},
                {id: 'alternative', label: 'Alternative'}
              ].map(genre => (
                <button 
                  key={genre.id}
                  className={`genre-filter ${filterGenre === genre.id ? 'active' : ''}`}
                  onClick={() => setFilterGenre(genre.id)}
                >
                  {genre.label}
                </button>
              ))}
            </div>
          </div>
        </section>
        
        <section className="artists-grid">
          {filteredArtists.map(artist => (
            <div className="artist-card" key={artist.id}>
              <div className="artist-image-container">
                <img src={artist.image} alt={artist.name} className="artist-image" />
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
              <div className="artist-info">
                <h3 className="artist-name">{artist.name}</h3>
                <p className="artist-top-track">
                  <span className="track-label">Top track:</span> {artist.topTrack}
                </p>
                <div className="artist-stats">
                  <span className="artist-followers">{artist.followers} followers</span>
                  <span className="artist-albums">{artist.albums} albums</span>
                </div>
                <button className="follow-button">Follow</button>
              </div>
            </div>
          ))}
        </section>
        
        {filteredArtists.length === 0 && (
          <div className="no-results">
            <p>No artists found for the selected genre.</p>
            <button 
              className="btn-secondary"
              onClick={() => setFilterGenre('all')}
            >
              View All Artists
            </button>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default Artists;