import React, { useState, useEffect } from 'react';
import { IoCart, IoHome } from 'react-icons/io5';
import { SiMicrosoftvisio } from 'react-icons/si';
import { FaFileInvoice, FaLaptop } from 'react-icons/fa';
import './navbar.scss';
import { Link, useLocation } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io';
import plat from '../assets/logo.png';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [currentLang, setCurrentLang] = useState(i18n.language); // Language state

  // Toggle the cart
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  // Switch between French and English languages
  const toggleLanguage = () => {
    const newLang = currentLang === 'fr' ? 'en' : 'fr';
    i18n.changeLanguage(newLang);
  };

  // Track language change using useEffect
  useEffect(() => {
    const handleLanguageChange = () => {
      setCurrentLang(i18n.language);
    };

    // Add language change listener
    i18n.on('languageChanged', handleLanguageChange);

    return () => {
      // Clean up listener on component unmount
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  // Fetch cart items from localStorage
  const fetchCartItems = () => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCartItems);
  };

  // Fetch items when component mounts and listen to storage change
  useEffect(() => {
    fetchCartItems();

    const handleStorageChange = () => {
      fetchCartItems();
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  // Fetch cart items when cart is opened
  useEffect(() => {
    if (isCartOpen) {
      fetchCartItems();
    }
  }, [isCartOpen]);

  // Calculate total price of cart items
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  // Clear cart items
  const clearCart = () => {
    localStorage.removeItem('cartItems');
    setCartItems([]);
  };

  return (
    <>
      <ul className="horizontal-navbar">
        {[
          { to: '/', icon: <IoHome />, label: t('Accueil') },
          { to: '/produits', icon: <SiMicrosoftvisio />, label: t('Services') },
          { to: '/test-gratuit', icon: <FaLaptop />, label: t('Test Gratuit') },
          { to: '/blogs', icon: <FaFileInvoice />, label: t('Blogs') },
          { icon: <IoCart />, label: t('Panier'), onClick: toggleCart },
          {
            icon: currentLang === 'fr' ? '🇬🇧' : '🇫🇷',
            label: currentLang === 'fr' ? t('Switch to English ') : t('Passer au Français'),
            onClick: toggleLanguage
          }
        ].map((item, index) => (
          <li key={index}>
            <Link
              to={item.to}
              className={`icon_home ${location.pathname === item.to ? 'active' : ''}`}
              onClick={item.onClick}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Cart Sidebar */}
      <div className={`cart-sidebar ${isCartOpen ? 'open' : ''}`}>
        <img src={plat} alt="France iptv" width={200} className="ml-16" />
        <div className="cart-header">
          <h3>{t('Votre Panier')}</h3>
          <button onClick={toggleCart}>
            <IoMdClose className="text-red-600 font-bold text-xl" />
          </button>
        </div>
        <div className="cart-items">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <p>{item.name}</p>
                <p className="font-semibold text-green-600">
                  {item.price}€ x {item.quantity}
                </p>
              </div>
            ))
          ) : (
            <p>{t('Panier Vide')}</p>
          )}
        </div>
        <div className="cart-total">
          <p className="text-lg font-semibold text-green-700">{t('Total', { amount: totalPrice })}€</p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={clearCart}
            className="relative px-8 py-1 mt-5 rounded-md bg-white isolation-auto z-10 border-2 border-red-700 before:absolute before:w-full before:transition-all before:duration-700
             before:hover:w-full hover:text-white before:-right-full before:hover:right-0 before:rounded-full before:bg-[#A12347] before:-z-10 before:aspect-square 
             before:hover:scale-150 overflow-hidden before:hover:duration-700 inline-flex items-center justify-center px-4 py-3 text-sm font-semibold text-black
              bg-white border border-gray-200 rounded-lg shadow-sm gap-x-2 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
          >
            {t('Vider le Panier')}
          </button>
          <Link
            to="/checkout"
            className="relative text-center px-8 py-1 mt-5 rounded-md bg-white isolation-auto z-10 border-2 border-green-700 before:absolute before:w-full before:transition-all before:duration-700
             before:hover:w-full hover:text-white before:-right-full before:hover:right-0 before:rounded-full before:bg-[#1c4b1c] before:-z-10 before:aspect-square 
             before:hover:scale-150 overflow-hidden before:hover:duration-700 inline-flex items-center justify-center px-4 py-3 text-sm font-semibold text-black
              bg-white border border-gray-200 rounded-lg shadow-sm gap-x-2 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
            disabled={cartItems.length === 0}
            onClick={toggleCart}
          >
            {t('Procéder au Paiement')}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
