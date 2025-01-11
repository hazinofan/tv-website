import React, { useEffect, useState } from 'react';
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
import { trackPageVisit, trackMouseClick, trackButtonClick, trackScrollDepth } from "../utils/trackingService";

export default function Home() {
  const { t } = useTranslation(); 

  useEffect(() => {
    trackPageVisit("/home");   // ✅ Track Home Page Visit
    trackScrollDepth("/home"); // ✅ Track Scroll Depth
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  // ✅ Promo Popup Component
  const PromoPopup = () => {
    const [showPopup, setShowPopup] = useState(false);
  
    useEffect(() => {
      const hasSeenPopup = localStorage.getItem("hasSeenPopup");
      if (!hasSeenPopup) {
        setShowPopup(true);
      }
    }, []);
  
    const handleClose = () => {
      localStorage.setItem("hasSeenPopup", "true");
      setShowPopup(false);
    };

    return (
      showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-purple-200  text-white rounded-lg shadow-lg p-6 max-w-md mx-auto text-center space-y-4">
            <h2 className="text-3xl font-bold">🔥 Offre Spéciale ! 🔥</h2>
            <p className="text-lg leading-relaxed text-black">
              Profitez de notre fonctionnalité qui permet de regarder sur <span className="font-semibold">2 à 3 appareils en même temps</span> ! 
              En plus, nous offrons une <span className="font-semibold">réduction de 10 %</span> sur votre première commande.
            </p>
            <p className="text-lg leading-relaxed text-black">
              Nous avons également des chaînes qui diffuseront les <span className="font-semibold">finales de la Kings League</span> et le prochain tournoi. 
              Ne manquez pas cette occasion !
            </p>
            <button
              onClick={handleClose}
              className="bg-white text-purple-600 font-bold py-2 px-4 rounded hover:bg-purple-700 hover:text-white transition duration-200"
            >
              Fermer
            </button>
          </div>
        </div>
      )
    );
    
  };

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
      </Helmet>

      {/* ✅ Fixed Discount Bar */}
      <div 
        style={styles.discountBar} 
        className="bg-purple-600 bg-opacity-70 backdrop-blur-md text-white uppercase"
      >
        🎉 2 abonnements achetés = 1 offert ! 🎉
      </div>

      {/* ✅ Promo Popup */}
      <PromoPopup />

      <div 
        className="home" 
        data-aos="fade-down" 
        data-aos-delay="400" 
        onClick={(e) => trackMouseClick("/home", e.clientX, e.clientY)} // ✅ Corrected Mouse Click Tracking
      >
        <div className="banner_container">
          <div className="overlay"></div>
          <div className="content">
            <div style={{ textAlign: "-webkit-center"}}>
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
                <button 
                  onClick={() => trackButtonClick("order-now")}  // ✅ Unique ID for "Order Now"
                  className="btn flex items-center justify-center gap-2 text-white"
                >
                  <FaShoppingCart className="text-white" /> 
                  {t('home.orderNow')}
                </button>
              </Link>
              <Link to="/test-gratuit">
                <button 
                  onClick={() => trackButtonClick("free-test")}  // ✅ Unique ID for "Free Test"
                  className="btn flex items-center justify-center gap-2"
                >
                  <FaLaptop className="text-white" /> 
                  {t('home.freeTest')} 
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

// ✅ Styles for Popup & Discount Bar
const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  popup: {
    background: "white",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
  },
  closeButton: {
    marginTop: "10px",
    padding: "8px 16px",
    background: "#ff0000",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  discountBar: {
    position: "fixed",
    top: 0,
    width: "100%",
    height:"25px",
    color: "white",
    textAlign: "center",
    padding: "1px 0",
    fontSize: "16px",
    fontWeight: "bold",
    zIndex: 1000,

  }
};
