import React, { useEffect, useState } from "react";
import './products.css';
import CarousselMovies from "../components/CarousselMovies";
import Steps from "../components/Steps";
import { Link } from "react-router-dom";
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS


const ProductPage = () => {

  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('/Products.json');
        if (!res.ok) {
          throw new Error('Error Fetching the Data');
        }
        const data = await res.json();
        if (data && data.products) {
          setProducts(data.products);
          console.log(data)
        } else {
          setError('No products found');
        }
      } catch (error) {
        setError(error.message);
      }
    };
  
    fetchProducts();
  }, []);
  return (
    <>
    <div className="header relative">
      <div className="bg-black absolute inset-0 opacity-50"></div> 
      <div className="three">
        <h1 className=""> Nos Abonnements IPTV </h1>
      </div>
    </div>
      <section className="content" data-aos="fade-down" data-aos-delay="400">
      <p className="">
        PLATINIUM-IPTV est équipé d'un processeur exceptionnel qui assure une expérience fluide, que ce soit pour regarder 
        des vidéos ou jouer à des jeux. De plus, PLATINIUM-IPTV s'impose également comme le choix ultime pour des divertissements 
        familiaux diversifiés, allant des chaînes de télévision aux films et séries, en passant par les jeux ou les émissions de télévision 
        à apprécier en famille. Cet appareil est votre ticket pour une qualité vidéo exceptionnelle, allant de l'ultra haute définition 4K au Full HD et HD, 
        vous plongeant dans un monde visuel clair et réaliste, avec une clarté exceptionnelle en FHD et 4K. PLATINIUM-IPTV dépasse le simple statut de téléviseur ;
         cela vous promet un temps précieux et divertissant.
      </p>
        
      </section>
          <div className="container" data-aos="fade-down" data-aos-delay="400">
            {products.map(product => (
              <div className="product-card" key={product.id}>
                <Link to={`/produits/${product.name.toLowerCase().replace(/\s+/g, '-')}`}>
                <img src={product.image} alt={product.name} />
                </Link>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <div className=" flex gap-2 justify-center">
                  <p className="price ">{product.price}€</p>
                  <p className="text-lg line-through text-red-600 font-semibold">{product.before}€</p>
                  </div>
                  <div className=" gap-3" style={{textAlign: "-webkit-center"}}>
                  <button className="cartBtn">
                    <svg className="cart" fill="white" viewBox="0 0 576 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path></svg>
                    AJOUTER AU PANIER
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512" className="product"><path d="M211.8 0c7.8 0 14.3 5.7 16.7 13.2C240.8 51.9 277.1 80 320 80s79.2-28.1 91.5-66.8C413.9 5.7 420.4 0 428.2 0h12.6c22.5 0 44.2 7.9 61.5 22.3L628.5 127.4c6.6 5.5 10.7 13.5 11.4 22.1s-2.1 17.1-7.8 23.6l-56 64c-11.4 13.1-31.2 14.6-44.6 3.5L480 197.7V448c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64V197.7l-51.5 42.9c-13.3 11.1-33.1 9.6-44.6-3.5l-56-64c-5.7-6.5-8.5-15-7.8-23.6s4.8-16.6 11.4-22.1L137.7 22.3C155 7.9 176.7 0 199.2 0h12.6z"></path></svg>
                  </button>
                  <Link to={`/produits/${product.name.toLowerCase().replace(/\s+/g, '-')}`}>
                  <button className="btn_details mt-3">
                      PLUS DE DETAILS
                  </button>
                  </Link>
                  </div>
                </div>
              </div>
            ))}

    </div>

    <Steps/>
    
    <CarousselMovies />
          </>
        );
      };

export default ProductPage;
