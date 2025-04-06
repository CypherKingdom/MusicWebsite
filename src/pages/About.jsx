import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <>
      <Header />
      <main className="about-wrapper">
        <section className="about-hero">
          <div className="about-hero-overlay"></div>
          <div className="about-hero-content">
            <h1 className="about-title">About MusicWave</h1>
            <p className="about-subtitle">
              Connecting music lovers with the sounds they love.
            </p>
          </div>
        </section>

        <section className="about-story">
          <div className="container">
            <div className="story-content">
              <h2>Our Story</h2>
              <p>
                MusicWave was born out of a passion for music and a desire to create a platform where artists and listeners can connect. 
                Our mission is to empower artists to share their music with the world and provide listeners with a seamless way to discover new sounds.
              </p>
              <p>
                From humble beginnings, we've grown into a vibrant community of music enthusiasts. Whether you're an artist looking to share your work or a listener searching for your next favorite track, MusicWave is here for you.
              </p>
            </div>
            <div className="story-image">
              <img src="https://via.placeholder.com/600x400" alt="Our Story" />
            </div>
          </div>
        </section>

        <section className="about-values">
          <div className="container">
            <h2>Our Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94"></path>
                  </svg>
                </div>
                <h3>Innovation</h3>
                <p>
                  We embrace creativity and constantly strive to innovate in the music industry.
                </p>
              </div>
              <div className="value-card">
                <div className="value-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20v-6M6 12h12"></path>
                  </svg>
                </div>
                <h3>Community</h3>
                <p>
                  Building a strong community of artists and listeners is at the heart of what we do.
                </p>
              </div>
              <div className="value-card">
                <div className="value-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2l9 21H3L12 2z"></path>
                  </svg>
                </div>
                <h3>Passion</h3>
                <p>
                  Our passion for music drives everything we do, from our platform to our community.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-team">
          <div className="container">
            <h2>Meet the Team</h2>
            <div className="team-grid">
              <div className="team-member">
                <div className="member-image">
                  <img src="https://via.placeholder.com/180" alt="Team Member" />
                </div>
                <h3 className="member-name">Alex Johnson</h3>
                <p className="member-role">Founder & CEO</p>
                <p className="member-bio">
                  Alex is a lifelong music enthusiast with a vision to connect artists and listeners worldwide.
                </p>
              </div>
              <div className="team-member">
                <div className="member-image">
                  <img src="https://via.placeholder.com/180" alt="Team Member" />
                </div>
                <h3 className="member-name">Taylor Smith</h3>
                <p className="member-role">Head of Product</p>
                <p className="member-bio">
                  Taylor leads the development of MusicWave's platform, ensuring a seamless user experience.
                </p>
              </div>
              <div className="team-member">
                <div className="member-image">
                  <img src="https://via.placeholder.com/180" alt="Team Member" />
                </div>
                <h3 className="member-name">Jordan Lee</h3>
                <p className="member-role">Community Manager</p>
                <p className="member-bio">
                  Jordan fosters connections within the MusicWave community, bringing artists and listeners together.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;