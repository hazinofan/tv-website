import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaLock } from 'react-icons/fa';
import './checkout.css'
import movie from '../assets/movie.jpg'
import bgg from '../assets/bgg.jpg'
import { useTranslation } from 'react-i18next';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Helmet } from 'react-helmet';

export default function Checkout() {
  const { t } = useTranslation();
  const form = useRef();
  let cartItems = [];
  const navigate = useNavigate();
  try {
    const storedItems = localStorage.getItem('cartItems');
    cartItems = storedItems ? JSON.parse(storedItems) : [];
  } catch (error) {
    console.error("Error parsing cart items from localStorage:", error);
    cartItems = []; // Fallback to an empty array in case of an error
  }

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleOrderSubmit = (event) => {
    event.preventDefault();

    const customerInfo = {
      name: event.target.full_name.value,  // Access 'full_name' instead of 'name'
      email: event.target.email.value,
      country: event.target.country.value,
      phone: event.target.phone.value,
      message: event.target.additional_message.value, 
    };

    const orderedProducts = cartItems.map(item => ({
      title: item.name,
      quantity: item.quantity,
      category: item.category || 'N/A', // Assuming you have category data in the cart items
      price: item.price,
    }));

    const emailData = {
      full_name: customerInfo.name,
      email: customerInfo.email,
      country: customerInfo.country,
      phone: customerInfo.phone,
      additional_message: customerInfo.message,
      products: orderedProducts, // This will be used in the template
      total_price: totalPrice,
    };

    // Store customer information in localStorage
    localStorage.setItem('customerInfo', JSON.stringify(customerInfo));

    emailjs.send(
      'service_fag2lxt', 
      'template_6eze5ew', 
      emailData, 
      'V6V66M4E9uE9Cm9Dh'
    ).then(
      () => {
        // Redirect to the Thank You page
        navigate('/thank-you');
      },
      (error) => {
        console.error('Failed to send email:', error);
      }
    );
    
    // Store customer information in localStorage
    localStorage.setItem('customerInfo', JSON.stringify(customerInfo));

    // Redirect to the Thank You page
    navigate('/thank-you');
  };


  return (
    <>
    <Helmet>
        <title>{t('checkout.title')} | Sécurisez votre abonnement IPTV</title>
        <meta name="description" content="Complete your purchase securely. Enjoy the best IPTV subscription with exclusive offers and customer support." />
        <meta name="keywords" content="Commande, Abonnement IPTV, Paiement Sécurisé, Achat en Ligne" />
        <link rel="canonical" href="https://platinium-iptv.com/checkout" />
      </Helmet>
    <div className="relative mx-auto w-full bg-cover bg-center" style={{ backgroundImage: `url(${bgg})` }}>
      <div className="absolute inset-0 bg-black opacity-15 z-0"></div>
      
      <div className="grid min-h-screen grid-cols-10 relative z-10">
        <div className="col-span-full pb-6 px-4 sm:pb-12 lg:col-span-6 lg:pb-24" style={{ marginTop: "80px" }}>
        <div className=" mt-10 ml-10">
      </div>
          <div className="mx-auto w-full max-w-lg">       
            <h1 className="relative text-2xl font-medium text-black sm:text-3xl" style={{ fontFamily: 'Oswald, sans-serif', justifyContent: "center" }}>
            {t('checkout.title')}
              <span className="mt-2 block h-1 w-10 bg-purple-600 sm:w-20"></span>
            </h1>
            <form className="mt-10 flex flex-col space-y-4" onSubmit={handleOrderSubmit}>
              <input type="hidden" name="products" />
              <input type="hidden" name="total_price" />
              <div className=' z-999'>
                <label htmlFor="name" className="text-md font-semibold text-white-500">
                {t('checkout.name')}<span className='text-red-600'>*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="full_name"
                  placeholder="John Doe"
                  className="mt-1 block w-full mb-4 rounded border-white bg-[#630a651f] py-3 px-4 text-sm placeholder-white-200 shadow-sm outline-none transition focus:ring-2 focus:ring-sky-500"
                  style={{ background: "#0000009e" }}
                  required
                />
                <label htmlFor="email" className="text-md font-semibold text-white-500">
                  Email : <span className='text-red-600'>*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john.capler@fang.com"
                  className="mt-1 block w-full rounded border-white bg-[#630a651f] py-3 px-4 text-sm placeholder-white-200 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                  style={{ background: "#0000009e" }}
                  required
                />
              </div>
              <div className="relative">
                <label htmlFor="country" className="text-md font-semibold text-white-500">
                {t('checkout.country')}<span className='text-red-600'>*</span>
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  placeholder="USA"
                  className="block w-full mt-2 rounded border-white bg-[#630a651f] py-3 px-4 pr-10 text-sm placeholder-white-200 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                  style={{ background: "#0000009e" }}
                />

              </div>
              <div className="relative">
                <label htmlFor="phone" className="text-md font-semibold text-white-500">
                {t('checkout.phone')} <span className='text-red-600'>*</span>
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="+44 5698...."
                  pattern="\d*" // This pattern ensures that only digits can be entered
                  className="block w-full mt-2 rounded border-white bg-#0000009e py-3 px-4 pr-10 text-sm placeholder-white-200 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                  style={{ background: "#0000009e" }}
                />

              </div>
              <div className="relative">
                <label htmlFor="message" className="text-md font-semibold text-white-500">
                {t('checkout.infos')} <span className='text-red-600'></span>
                </label>
                <textarea
                  id="additional-info"
                  name="additional_message"
                  placeholder="Informations supplémentaires ici"
                  rows="5"
                  cols="50"
                  className="block w-full mt-2 rounded border-white bg-#0000009e py-3 px-4 pr-10 text-sm placeholder-white-200 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                  style={{ background: "#0000009e", minHeight: "150px", resize: "vertical" }}
                ></textarea>
              </div>

              <div className="bg-card text-card-foreground" style={{ fontFamily: 'Oswald, sans-serif', justifyContent: "center" }}>
                <h1 className="text-2xl font-bold mb-4">{t('checkout.paiement')}</h1>
                <div className="bg-white-200 border-white border-2 p-4 rounded shadow-md">
                  <h2 className="font-semibold mb-2">{t('checkout.invoice')}</h2>
                  <p className="text-muted-foreground text-black text-xl">
                  {t('checkout.invoicedesc')}
                  </p>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                {t('checkout.politic')}
                  <a href="#" className="text-primary underline ml-1">Politique de confidentialité</a>.
                </p>
              </div>

              <button className="Btn" type='submit'>
              {t('checkout.button')}
                <svg className="svgIcon" viewBox="0 0 576 512"><path d="M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z"></path></svg>
              </button>
              <div className="flex items-center gap-3 mt-6 justify-center text-xs">
                <FaLock className='text-yellow-300' />
                <p> {t('checkout.secure')}</p>
              </div>
            </form>
            <p className="mt-10 text-center text-sm font-semibold text-white-500">
            {t('checkout.termes')}{' '}
              <Link to='/termes-et-conditions' className="whitespace-nowrap text-teal-800 underline hover:text-teal-600">
              {t('checkout.condition')}
              </Link>
            </p>
          </div>
        </div>
        <div className="relative col-span-full flex flex-col py-6 pl-8 pr-4 sm:py-12 lg:col-span-4 lg:py-24">
          <h2 className="sr-only">{t('checkout.resume')}</h2>
          <div>
            <img
              src={movie}
              alt="Paiement Sécurisé"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-gray-800/85 to-black opacity-95"></div>
          </div>
          <div className="relative pt-20">
          <ul className="space-y-5">
            {cartItems.length > 0 ? (
              cartItems.map((item, index) => (
                <li key={index} className="flex justify-between place-items-center text-lg text-white">
                  <img src={item.image} alt="Abonnement IPTV" width={120} />
                  <span>{item.name} (x{item.quantity})</span>
                  <span>{item.price}€</span>
                </li>
              ))
            ) : (
              <li className="text-white">{t('checkout.empty')}</li>
            )}
          </ul>

            <div className="my-5 h-0.5 w-full bg-#0000009e bg-opacity-30"></div>
            <div className="space-y-2 pb-44">
              <p className="flex justify-between text-lg font-bold text-white border-t-2 pt-5">
                <span style={{ fontFamily: 'Oswald, sans-serif', justifyContent: "center" }}>{t('checkout.total')}</span>
                <span>{totalPrice}€</span>
              </p>
              <p className="flex justify-between text-lg font-bold text-white pt-5">
                <span style={{ fontFamily: 'Oswald, sans-serif', justifyContent: "center" }}>{t('checkout.remiseremise')}</span>
                <span className='text-xs'>{t('checkout.discount')}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
