import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import './products.css';
import CarousselMovies from "../components/CarousselMovies";
import Steps from "../components/Steps";
import { Link } from "react-router-dom";
import 'aos/dist/aos.css'; 
import AOS from 'aos';
import Notification from '../components/Notification';
import { Helmet } from "react-helmet"; // Import Helmet for SEO

const ProductPage = () => {
  const { t, i18n } = useTranslation();
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [notification, setNotification] = useState({ show: false, message: '' });

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const language = i18n.language;
        const res = await fetch(`/locales/Products_${language}.json`);
        if (!res.ok) {
          throw new Error('Error Fetching the Data');
        }
        const data = await res.json();
        if (data && data.products) {
          setProducts(data.products);
        } else {
          setError('No products found');
        }
      } catch (error) {
        setError(error.message);
      }
    };
  
    fetchProducts();
  }, [i18n.language]);

  const addToCart = (product) => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const existingItem = cartItems.find(item => item.id === product.id);
  
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cartItems.push({ ...product, quantity: 1 });
    }
  
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    window.dispatchEvent(new Event("storage"));
    setNotification({ show: true, message: `${product.name} has been added to the cart!` });
  };

  return (
    <>
      <Helmet>
        <title>Abonnements IPTV en France | Meilleur IPTV</title> {/* Improved Title */}
        <meta name="description" content="Découvrez nos abonnements IPTV avec une vaste sélection de chaînes. Le meilleur service IPTV en France avec des tarifs compétitifs." />
        <meta name="keywords" content="iptv france, abonnement iptv, meilleur iptv, iptv, iptv abonnement" />
        <meta property="og:title" content="Nos Abonnements IPTV - Meilleur IPTV en France" />
        <meta property="og:description" content="Choisissez parmi nos abonnements IPTV de qualité supérieure, offrant une grande variété de chaînes internationales et françaises." />
        <meta property="og:image" content="/images/iptv-abonnement.png" /> {/* Example image */}
        <meta property="og:type" content="product" />
      </Helmet>

      <div className="header relative">
        <div className="bg-black absolute inset-0 opacity-50"></div> 
        <div className="three">
          <h1>{t('prod.h1')} </h1> {/* This is your main H1 heading */}
        </div>
      </div>

      <section className="content" data-aos="fade-down" data-aos-delay="400">
        <h2>{t('prod.h2')}</h2> {/* H2 heading for better structure */}
        <p>
        {t('prod.p')}
        </p>
      </section>

      <div className="container" data-aos="fade-down" data-aos-delay="400">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <Link to={`/produits/${product.name.toLowerCase().replace(/\s+/g, '-')}`}>
              <img src={product.image} alt={`${product.name} abonnement IPTV`} /> {/* Use descriptive alt text */}
            </Link>
            <div className="product-info">
              <h3>{product.name}</h3>
              <div className="flex gap-2 justify-center">
                <p className="price">{product.price}€</p>
                <p className="text-lg line-through text-red-600 font-semibold">{product.before}€</p>
              </div>
              <div className="gap-3" style={{ textAlign: "-webkit-center" }}>
                <button className="cartBtn" onClick={() => addToCart(product)}>
                  {t('prod.button')}
                </button>
                <Link to={`/produits/${product.name.toLowerCase().replace(/\s+/g, '-')}`}>
                  <button className="btn_details mt-3">
                    {t('prod.details')}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Steps />
      <CarousselMovies />

      {/* Notification */}
      <Notification 
        message={notification.message} 
        show={notification.show} 
        onClose={() => setNotification({ show: false, message: '' })}
      />
    </>
  );
};

export default ProductPage;
