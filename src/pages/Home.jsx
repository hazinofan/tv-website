import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet'; // Import Helmet
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
import logo from '../assets/logo2.png'

export default function Home() {
  const { t } = useTranslation(); // Initialize translation hook

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Helmet>
        {/* Page Title */}
        <title>PLATINIUM IPTV - Meilleur Fournisseur IPTV en France en 2024</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Découvrez PLATINIUM IPTV, votre fournisseur d'abonnement IPTV de haute qualité. Compatible avec IPTV Smarters Pro, Smart IPTV, et plus encore. Profitez du meilleur service IPTV dès aujourd'hui."
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="PLATINIUM IPTV, iptv smarters pro, abonnement iptv, iptv smarters, smart iptv"
        />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="PLATINIUM IPTV - Abonnement IPTV Smarters Pro, Smart IPTV" />
        <meta
          property="og:description"
          content="PLATINIUM IPTV vous offre les meilleurs abonnements IPTV. Compatible avec IPTV Smarters Pro et Smart IPTV. Rejoignez-nous pour une expérience IPTV exceptionnelle."
        />
        <meta property="og:url" content="https://www.platinium-iptv.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PLATINIUM IPTV - Abonnement IPTV Smarters Pro, Smart IPTV" />
        <meta
          name="twitter:description"
          content="Abonnez-vous à PLATINIUM IPTV et profitez du meilleur service IPTV sur IPTV Smarters Pro, Smart IPTV, et plus."
        />
      </Helmet>


      <div className="home" data-aos="fade-down" data-aos-delay="400">
        <div className="banner_container">
          <div className="overlay"></div>
          <div className="content">
            <div className="  " style={{ textAlign: "-webkit-center"}}>
            <img src={logo} alt="PLATINIUM IPTV - Abonnement IPTV Smarters Pro" width={260}/>
            </div>
            <h1 className="font-bold text-3xl sm:text-4xl md:px-40 md:text-5xl lg:text-6xl mx-4 sm:mx-8 mt-8">
              {t('home.title')} {/* Translation for title */}
            </h1>
            <p className="font-semibold pt-6 mx-4 sm:mx-8 lg:mx-72 text-base sm:text-lg md:text-xl text-white">
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
