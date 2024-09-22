import React from 'react';
import '../index.css'

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Best IPTV Service: ConnectX Amazing Service</h1>
          <p>
            Experience premium entertainment with our top-notch provider. We offer the perfect selection of channels and content, ensuring a high-quality streaming experience for our customers. Join us for unparalleled service that brings your favorite shows, movies, and more right to your screen.
          </p>
          <button className="discover-btn">Discover More</button>
        </div>
        <div className="hero-image">
          <img src="/path-to-your-image/connectx-box.png" alt="ConnectX IPTV Box" />
        </div>
      </div>

      <div className="stats">
        <div className="stat-item">
          <h2>7.2K+</h2>
          <p>Member Active</p>
        </div>
        <div className="stat-item">
          <h2>9K+</h2>
          <p>Happy Clients</p>
        </div>
        <div className="stat-item">
          <h2>35+</h2>
          <p>Professional Team</p>
        </div>
        <div className="stat-item">
          <h2>10+</h2>
          <p>Years Experience</p>
        </div>
      </div>
    </section>
  );
}
