import React, { useState, useEffect } from 'react';
import { IoCart, IoHome } from 'react-icons/io5';
import { SiMicrosoftvisio } from 'react-icons/si';
import { FaFileInvoice, FaLaptop } from 'react-icons/fa';
import './navbar.scss';
import { Link, useLocation } from 'react-router-dom';
import { FaRegTrashCan } from 'react-icons/fa6';
import { IoMdClose } from 'react-icons/io';
import plat from '../assets/logo.png'

const Navbar = () => {
  const location = useLocation();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  // Fetch cart items from localStorage
  const fetchCartItems = () => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCartItems);
  };

  useEffect(() => {
    fetchCartItems(); // Initial fetch when component mounts

    // Update cart when the storage event is triggered
    const handleStorageChange = () => {
      fetchCartItems();
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []); // Empty dependency array so it only runs on mount/unmount

  // Re-fetch items whenever the cart is opened
  useEffect(() => {
    if (isCartOpen) {
      fetchCartItems();
    }
  }, [isCartOpen]);

  // Calculate the total price of items in the cart
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const clearCart = () => {
    localStorage.removeItem('cartItems'); // Correct the key
    setCartItems([]); // Close the cart after clearing
  };

  return (
    <>
      <ul className="horizontal-navbar">
        {[
          { to: '/', icon: <IoHome />, label: 'Accueil' },
          { to: '/produits', icon: <SiMicrosoftvisio />, label: 'Services IPTV' },
          { to: '/test-gratuit', icon: <FaLaptop />, label: 'Test Gratuit' },
          { to: '/blogs', icon: <FaFileInvoice />, label: 'Blogs' },
          { icon: <IoCart />, label: 'Cart', onClick: toggleCart }
        ].map((item, index) => (
          <li key={index}>
            <Link
              to={item.to}
              className={`icon_home ${location.pathname === item.to ? 'active' : ''}`}
              onClick={item.onClick} // Attach click event for cart
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Cart Sidebar */}
      <div className={`cart-sidebar ${isCartOpen ? 'open' : ''}`}>
        <img src={plat} alt="France iptv" width={200} className='ml-16' />
        <div className="cart-header">
          <h3> Votre Panier </h3>
          <button onClick={toggleCart}>
          <IoMdClose className=' text-red-600 font-bold text-xl' />
          </button>
        </div>
        <div className="cart-items">
          {cartItems.length > 0 ? (
            cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <p>{item.name}</p>
                <p className=' font-semibold text-green-600'>{item.price}€ x {item.quantity}</p>
              </div>
            ))
          ) : (
            <p>Votre Panier est vide</p>
          )}
        </div>
        <div className="cart-total">
          <p className='text-lg font-semibold text-green-700'>Total: {totalPrice}€</p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => {
              clearCart(); 
            }}
            className="relative px-8 py-1 mt-5 rounded-md bg-white isolation-auto z-10 border-2 border-red-700 before:absolute before:w-full before:transition-all before:duration-700
             before:hover:w-full hover:text-white before:-right-full before:hover:right-0 before:rounded-full before:bg-[#A12347] before:-z-10 before:aspect-square 
             before:hover:scale-150 overflow-hidden before:hover:duration-700 inline-flex items-center justify-center px-4 py-3 text-sm font-semibold text-black
              bg-white border border-gray-200 rounded-lg shadow-sm gap-x-2 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
          >
            Vider le panier
          </button>
          <Link
            to='/checkout'
            className="relative text-center px-8 py-1 mt-5 rounded-md bg-white isolation-auto z-10 border-2 border-green-700 before:absolute before:w-full before:transition-all before:duration-700
             before:hover:w-full hover:text-white before:-right-full before:hover:right-0 before:rounded-full before:bg-[#1c4b1c] before:-z-10 before:aspect-square 
             before:hover:scale-150 overflow-hidden before:hover:duration-700 inline-flex items-center justify-center px-4 py-3 text-sm font-semibold text-black
              bg-white border border-gray-200 rounded-lg shadow-sm gap-x-2 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
            disabled={cartItems.length === 0}
            onClick={toggleCart} // Close cart when navigating to checkout
          >
            Passer au paiement
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
