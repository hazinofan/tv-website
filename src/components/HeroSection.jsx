import React, { useEffect, useRef, useState } from 'react';
import '../index.css';
import product from '../assets/product.png';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS

export default function HeroSection() {
  const { t } = useTranslation(); // Initialize translation hook
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    AOS.init();
  }, []);

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
    <section className="hero" data-aos="fade-down" data-aos-delay="400">
      <div className="hero-content">
        <div className="hero-text">
          <h1>{t('hero.title')}</h1> {/* Use translation for title */}
          <p>{t('hero.description')}</p> {/* Use translation for description */}
          <Link to='/produits/abonnement-platinium-12-mois' className="discover-btn">{t('hero.discover')}</Link> {/* Use translation for button */}
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
          <p>Membres Actifs</p>
        </div>
        <div className="stat-item">
          <h2>
            {isVisible && <CountUp start={0} end={9000} duration={2.5} separator="," />}+
          </h2>
          <p>Clients Satisfaits</p>
        </div>
        <div className="stat-item">
          <h2>
            {isVisible && <CountUp start={0} end={35} duration={2.5} />}+
          </h2>
          <p>Équipe Professionnelle</p>
        </div>
        <div className="stat-item">
          <h2>
            {isVisible && <CountUp start={0} end={10} duration={2.5} />}+
          </h2>
          <p>Années d'Expérience</p>
        </div>
      </div>
    </section>
  );
}
