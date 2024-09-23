import React from 'react';
import '../index.css';  
import { FaLaptop, FaShoppingCart } from 'react-icons/fa';
import Caroussel from '../components/Caroussel';
import Integration from '../components/Integration';
import HeroSection from '../components/HeroSection';
import CarousselMovies from '../components/CarousselMovies';
import '../components/navbar.scss'
import PricingCards from '../components/PricingCards';
import EliteCard from '../components/EliteCard';

export default function Home() {
  return (
    <>
    <div className="home">
      <div className="banner_container">
        <div className="overlay"></div>
        <div className="content">
          <h1 className='font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mx-4 sm:mx-8 lg:mx-72'>
            DÉCOUVREZ L'EXCELLENCE DE NOTRE SERVICE D'ABONNEMENT IPTV
          </h1>
          <p className='font-semibold pt-6 mx-4 sm:mx-8 lg:mx-72 text-base sm:text-lg md:text-xl'>
            Regardez vos chaînes préférées en temps réel avec notre plateforme IPTV.
            Notre site Internet dédié à l'IPTV propose également une interface conviviale et une navigation intuitive.
          </p>
          <div className="buttons flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <button className="btn flex items-center justify-center gap-2">
              <FaShoppingCart className='text-white' /> 
              commandez maintenant
            </button>
            <button className="btn flex items-center justify-center gap-2">
              <FaLaptop className='text-white' /> 
              Test Gratuit
            </button>
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
    </>
  );
}
