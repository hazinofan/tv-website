import React, { useState, useEffect } from "react";
import './products.css';
import CarousselMovies from "../components/CarousselMovies";
import Steps from "../components/Steps";
import { Link } from "react-router-dom";
import 'aos/dist/aos.css'; 
import AOS from 'aos';
import Notification from '../components/Notification'; // Import the notification

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [notification, setNotification] = useState({ show: false, message: '' });

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
        } else {
          setError('No products found');
        }
      } catch (error) {
        setError(error.message);
      }
    };
  
    fetchProducts();
  }, []);

  // Function to add items to the cart in localStorage
  const addToCart = (product) => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const existingItem = cartItems.find(item => item.id === product.id);
  
    if (existingItem) {
      existingItem.quantity += 1; // If product exists, increase the quantity
    } else {
      cartItems.push({ ...product, quantity: 1 }); // If not, add new product
    }
  
    localStorage.setItem("cartItems", JSON.stringify(cartItems)); // Save to localStorage
  
    // Dispatch a storage event to notify other components
    window.dispatchEvent(new Event("storage"));
  
    // Show notification
    setNotification({ show: true, message: `${product.name} has been added to the cart!` });
  
    // Debugging: log the notification state
    console.log("Notification state:", { show: true, message: `${product.name} has been added to the cart!` });
  };

  
  return (
    <>
      <div className="header relative">
        <div className="bg-black absolute inset-0 opacity-50"></div> 
        <div className="three">
          <h1> Nos Abonnements IPTV </h1>
        </div>
      </div>
      <section className="content" data-aos="fade-down" data-aos-delay="400">
        <p>
          {/* Description of your products */}
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
              <div className=" gap-3" style={{ textAlign: "-webkit-center" }}>
                <button className="cartBtn" onClick={() => addToCart(product)}>
                  AJOUTER AU PANIER
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
