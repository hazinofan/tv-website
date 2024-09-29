import React, { useEffect } from 'react';
import '../index.css';  
import { FaLaptop, FaShoppingCart } from 'react-icons/fa';
import Caroussel from '../components/Caroussel';
import Integration from '../components/Integration';
import HeroSection from '../components/HeroSection';
import CarousselMovies from '../components/CarousselMovies';
import '../components/navbar.scss';
import PricingCards from '../components/PricingCards';
import EliteCard from '../components/EliteCard';
import Steps from '../components/Steps';
import Faq from '../components/Faq';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Import useTranslation

export default function Home() {
  const { t } = useTranslation(); // Initialize translation hook

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="home" data-aos="fade-down" data-aos-delay="800">
        <div className="banner_container">
          <div className="overlay"></div>
          <div className="content">
            <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mx-4 sm:mx-8">
              {t('home.title')} {/* Translation for title */}
            </h1>
            <p className="font-semibold pt-6 mx-4 sm:mx-8 lg:mx-72 text-base sm:text-lg md:text-xl">
              {t('home.description')} {/* Translation for description */}
            </p>
            <div className="buttons flex flex-col sm:flex-row gap-4 justify-center pt-6 text-white">
              <Link to="/produits">
                <button className="btn flex items-center justify-center gap-2 text-white">
                  <FaShoppingCart className="text-white" /> 
                  {t('home.orderNow')} {/* Translation for order button */}
                </button>
              </Link>
              <Link to="/test-gratuit">
                <button className="btn flex items-center justify-center gap-2">
                  <FaLaptop className="text-white" /> 
                  {t('home.freeTest')} {/* Translation for free test button */}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Caroussel />
      <Integration />
      <HeroSection />
      <CarousselMovies />
      <PricingCards />
      <EliteCard />
      <Steps />
      <Faq />
    </>
  );
}
