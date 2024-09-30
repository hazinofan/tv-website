import React, { useState, useEffect } from 'react';
import { ImWhatsapp } from 'react-icons/im';
import { MdEmail } from 'react-icons/md';
import { useTranslation } from 'react-i18next';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const ThankYouPage = () => {
  const { t } = useTranslation();  // Initialize the translation hook
  const [cartItems, setCartItems] = useState([]);  // State for cart items

  // Generate a random order number between 500 and 1000
  const orderNumber = Math.floor(Math.random() * (1000 - 500 + 1)) + 500;
  const customerInfo = JSON.parse(localStorage.getItem('customerInfo')) || {};

  // Fetch the cart items from localStorage and update the state
  useEffect(() => {
    try {
      const storedItems = localStorage.getItem('cartItems');
      setCartItems(storedItems ? JSON.parse(storedItems) : []);
    } catch (error) {
      console.error("Error parsing cart items from localStorage:", error);
      setCartItems([]); // Fallback to an empty array in case of an error
    }
  }, []);  // Empty dependency array to ensure it runs only once when the component mounts

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const clearCart = () => {
    localStorage.removeItem('cartItems');
    setCartItems([]);  // Clear the cart items in the state as well
  };

  return (
    <div className="max-w-7xl mx-auto p-8 bg-white shadow-lg rounded-lg my-14">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center lg:mb-16" style={{ textAlign: "-webkit-center"}}>
  <img 
    src={logo} 
    alt="Logo" 
    className="w-56 mb-4 lg:mb-0 lg:w-64 lg:ml-24" 
  />
  <h1 className="text-3xl lg:text-4xl font-bold text-gray-800">
    {t('ty.orderDetails')}
  </h1>
</div>

      <p className="text-2xl text-gray-600 mb-10">
        {t('ty.orderNumber', { orderNumber })} <br />
        {t('ty.thankYouMessage')}
      </p>

      {/* Order Info - Render once */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 border border-gray-300 rounded-lg bg-gray-50">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">{t('ty.orderInfoTitle')}</h2>
          <ul className="text-gray-700">
            <li className="mb-2">
              <span className="font-medium">{t('ty.summary')}</span> 
            </li>
            <li className="mb-2">
              <span className="font-semibold">{t('ty.status')}:</span> <span className='font-semibold text-green-600 text-lg'>{t('ty.success')}</span>
            </li>
            <li className="mb-2">
              <span className="font-semibold">{t('ty.paymentStatus')}:</span> {t('ty.pendingPayment')}
            </li>
            <li className="mb-2">
              <span className="font-semibold">{t('ty.paymentMethod')}:</span> {t('ty.paypalDebit')}
            </li>
          </ul>
        </div>

        {/* Customer Info */}
        <div className="p-6 border border-gray-300 rounded-lg bg-gray-50">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">{t('ty.customerInfoTitle')}</h2>
          <ul className="text-gray-700">
            <li className="mb-2">
              <span className="font-semibold text-lg mr-2">{t('ty.name')}:</span> {customerInfo.name}
            </li>
            <li className="mb-2">
              <span className="font-semibold text-lg mr-2">{t('ty.email')}:</span> {customerInfo.email}
            </li>
            <li className="mb-2">
              <span className="font-semibold text-lg mr-2">{t('ty.phone')}:</span> {customerInfo.phone}
            </li>
            <li className="mb-2">
              <span className="font-semibold text-lg mr-2">{t('ty.country')}:</span> {customerInfo.country}
            </li>
          </ul>
        </div>

        {/* Support Info */}
        <div className="p-6 border border-gray-300 rounded-lg bg-gray-50">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">{t('ty.supportTeamTitle')}</h2>
          <ul className="text-gray-700">
            <li className="mb-2">
              <span className="flex items-center text-xl gap-5 font-medium">
                <ImWhatsapp className='text-green-700' /> {t('ty.whatsappSupport')}:
              </span> +44 4753 930081
            </li>
            <li className="mb-2">
              <span className="flex items-center text-xl gap-5 font-medium">
                <MdEmail className='text-purple-700' /> {t('ty.emailSupport')}
              </span> support@platinium-iptv.com
            </li>
          </ul>
        </div>
      </div>

      {/* Cart Items - Render multiple items if they exist */}
      {cartItems.length > 0 ? (
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">{t('ty.productsTitle')}</h2>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index} className="text-gray-700 mb-2">
                - {item.name} x{item.quantity}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="text-lg text-red-500 mt-8">{t('ty.emptyCartMessage')}</p>
      )}

      <h1 className='mt-12 font-semibold text-3xl text-purple-600'>{t('ty.totalPrice')}: {totalPrice}€</h1>

      {/* IPTV-Specific Information */}
      <div className="mt-12 p-8 bg-purple-200 rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">{t('ty.accessIPTVTitle')}</h2>
        <p className="text-gray-700 mb-4">{t('ty.activationMessage')}</p>
        <p className="text-gray-700 mb-4">{t('ty.emailCredentialsMessage')}</p>
        <p className="text-gray-700 font-medium">{t('ty.enjoyMessage')}</p>
      </div>

      <div className="text-center mt-14">
        <Link
        to='/'
          onClick={clearCart}
          className="relative px-8 py-2 rounded-md bg-white isolation-auto z-10 border-2 border-purple-700 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full hover:text-white before:-right-full before:hover:right-0 before:rounded-full before:bg-purple-500 before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 inline-flex items-center justify-center px-4 py-3 text-sm font-semibold text-black bg-white border border-gray-200 rounded-lg shadow-sm gap-x-2 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" 
          style={{ width: "35%" }}
        >
          {t('ty.button')}
        </Link>
      </div>
    </div>
  );
};

export default ThankYouPage;
