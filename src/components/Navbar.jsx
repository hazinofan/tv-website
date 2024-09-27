import React, { useState } from 'react';
import { IoCart, IoHome } from 'react-icons/io5';
import { SiMicrosoftvisio } from 'react-icons/si';
import { FaFileInvoice, FaLaptop } from 'react-icons/fa';
import './navbar.scss';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const cartItems = [
    { id: 1, name: "Product 1", price: 20 },
    { id: 2, name: "Product 2", price: 30 },
  ];

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
        <div className="cart-header">
          <h3>Your Cart</h3>
          <button onClick={toggleCart}>Close</button>
        </div>
        <div className="cart-items">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <p>{item.name}</p>
              <p>{item.price} USD</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
