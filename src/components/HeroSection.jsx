import React, { useEffect, useRef, useState } from 'react';
import '../index.css'
import product from '../assets/product.png'
import CountUp from 'react-countup';


export default function HeroSection() {
    const [isVisible, setIsVisible] = useState(false);
    const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.5, // Adjust as needed to trigger animation when 30% of the section is visible
      }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Meilleur service IPTV : service incroyable Platinium IPTV</h1>
          <p>
          Vivez un divertissement haut de gamme avec notre fournisseur de premier ordre. Nous proposons une sélection parfaite de chaînes et de contenus, garantissant une expérience de streaming de haute qualité à nos clients. Rejoignez-nous pour un service inégalé qui apporte vos émissions, films et bien plus encore préférés directement sur votre écran.
          </p>
          <button className="discover-btn">En savoir plus</button>
        </div>
        <div className="hero-image">
          <img src={product} alt="IPTV Box" />
        </div>
      </div>

      <div className="stats" ref={statsRef}>
      <div className="stat-item">
        <h2>
          {isVisible && <CountUp start={0} end={7200} duration={2.5} separator="," />}+
        </h2>
        <p>Member Active</p>
      </div>
      <div className="stat-item">
        <h2>
          {isVisible && <CountUp start={0} end={9000} duration={2.5} separator="," />}+
        </h2>
        <p>Happy Clients</p>
      </div>
      <div className="stat-item">
        <h2>
          {isVisible && <CountUp start={0} end={35} duration={2.5} />}+
        </h2>
        <p>Professional Team</p>
      </div>
      <div className="stat-item">
        <h2>
          {isVisible && <CountUp start={0} end={10} duration={2.5} />}+
        </h2>
        <p>Years Experience</p>
      </div>
    </div>
    </section>
  );
}
