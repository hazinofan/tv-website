import React, { useEffect, useState } from 'react';
import productImage from '../assets/product.png'; // Renamed for clarity
import '../index.css';
import { FaCheckCircle } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import Notification from './Notification';

export default function ProductDetails() {
  const [activeTab, setActiveTab] = useState('details');
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [notification, setNotification] = useState({ show: false, message: '' });
  const { name } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch('/Products.json');
        const data = await res.json();
        console.log('Fetched products:', data.products); 
        console.log('Name from params:', name); 
  
        const foundProduct = data.products.find(
          (item) => item.name.toLowerCase().replace(/\s+/g, '-') === name
        );
  
        console.log('Found product:', foundProduct); 
        setProduct(foundProduct);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };
  
    fetchProduct();
  }, [name]);
  
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

  const clearCart = () => {
    localStorage.removeItem('cart');
  };

  return (
    <div>
      <h1 className='text-5xl text-center pt-32' style={{ fontFamily: "fantasy" }}>Product Details</h1>
      <div className=" mt-10 ml-10">
        <Link to='/produits' style={{justifyContent: 'flex-start'}}>
          <button
            class="bg-white text-center w-48 rounded-2xl h-14 relative text-black text-xl font-semibold group"
            type="button"
          >
            <div
              class="bg-purple-400 rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1024 1024"
                height="25px"
                width="25px"
              >
                <path
                  d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                  fill="#000000"
                ></path>
                <path
                  d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                  fill="#000000"
                ></path>
              </svg>
            </div>
            <p class="translate-x-2" style={{ fontFamily: 'Oswald, sans-serif', justifyContent: 'center' }}>Retourner</p>
          </button>
        </Link>
      </div>

      <div className="m-2 group px-10 py-5 bg-black/10 rounded-lg flex flex-col items-center justify-center gap-2 relative after:absolute after:h-full after:bg-[#05043e] z-20 shadow-lg after:-z-20 after:w-full after:inset-0 after:rounded-lg transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden cursor-pointer after:-translate-y-full after:hover:translate-y-0">
        <img src={product ? product.image : '/path/to/placeholder.png'} alt="" style={{width: "330px"}} />
        <p className="cardtxt font-semibold text-black tracking-wider text-center group-hover:text-white text-3xl pb-3" style={{ fontFamily: 'Oswald, sans-serif', justifyContent: 'center'}}>
          {product ? product.name : 'Loading...'}
        </p>
        <p className="blueberry font-semibold text-center text-black md:text-lg group-hover:text-purple-300 md:pt-10 pb-4 md:px-36">
          {product ? product.description : 'Loading description...'}
        </p>
        <div className="ordernow flex flex-row justify-center gap-16 mt-10 items-center w-full">
          <p className="ordernow-text text-green-700 text-3xl font-semibold group-hover:text-white">
            {product ? `${product.price} €` : 'Loading price...'}
          </p>
          {/* Pass the product to the addToCart function */}
          <button className="cartBtn2" onClick={() => addToCart(product)}>
            AJOUTER AU PANIER
          </button>
        </div>
      </div>

      {/* Tabs and details section */}
      <div className="relative self-center rounded-lg p-0.5 flex justify-center mt-11">
        <button
          type="button"
          onClick={() => setActiveTab('details')}
          className={`relative w-1/2 rounded-md py-2 text-sm font-medium whitespace-nowrap focus:outline-none sm:w-auto sm:px-8 ${activeTab === 'details' ? 'bg-blue-950 text-white' : 'bg-white text-[#05043e]'}`}
        >
          Details
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('moneyBack')}
          className={`ml-0.5 relative w-1/2 rounded-md py-2 text-sm font-medium whitespace-nowrap focus:outline-none sm:w-auto sm:px-8 ${activeTab === 'moneyBack' ? 'bg-blue-950 text-white' : 'bg-white text-[#05043e]'}`}
        >
          Money Back Policy
        </button>
      </div>

      {/* Content for selected tab */}
      <div className="mt-4">
        {activeTab === 'details' && product && (
          <div>
            <h1 className='font-semibold text-3xl text-center' style={{ fontFamily: 'Oswald, sans-serif', justifyContent: 'center' }}>{product.name}</h1>
            <div>
              <ul className="space-y-2 pt-8 pb-10 md:pl-60 md:mt-7">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center font-medium space-x-2 text-black">
                    <FaCheckCircle className="text-purple-600" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
        {activeTab === 'moneyBack' && (
          <div className="bg-gray-100 p-6 md:p-12 rounded-lg shadow-md max-w-3xl mx-auto my-10">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-purple-600 mb-6">
              Politique de Remboursement
            </h2>
            <p className="text-gray-700 mb-4">
              Chez <strong>Platinum IPTV</strong>, nous nous engageons à fournir à nos clients une expérience de streaming exceptionnelle. Si, pour une raison quelconque, vous n'êtes pas entièrement satisfait de votre abonnement, nous avons mis en place une politique de remboursement claire :
            </p>
            
            <ol className="list-decimal list-inside mb-6 space-y-4">
              <li>
                <strong>Droit de Rétractation</strong> : Vous avez le droit de vous rétracter de votre abonnement dans un délai de 14 jours à compter de la date d'achat. Pour exercer ce droit, veuillez nous contacter par email à <a href="mailto:votre_email@platinumiptv.uk" className="text-purple-600 underline">support@platinumiptv.uk</a>.
              </li>
              <li>
                <strong>Conditions de Remboursement</strong> :
                <ul className="list-disc list-inside ml-5 space-y-2">
                  <li>Pour être éligible à un remboursement, votre demande doit être effectuée dans les 14 jours suivant l'achat.</li>
                  <li>Pour que votre remboursement soit traité, vous devez fournir la preuve d'achat (comme un reçu ou une confirmation de commande).</li>
                </ul>
              </li>
              <li>
                <strong>Traitement des Remboursements</strong> :
                <ul className="list-disc list-inside ml-5 space-y-2">
                  <li>Une fois que nous aurons reçu votre demande de remboursement, nous l'examinerons et vous informerons de l'approbation ou du rejet de votre remboursement.</li>
                  <li>Si votre demande est approuvée, le remboursement sera traité, et un crédit sera automatiquement appliqué à votre méthode de paiement d'origine dans un délai de 7 jours.</li>
                </ul>
              </li>
              <li>
                <strong>Exceptions</strong> : Les abonnements qui ont été utilisés après la période de 14 jours ne sont pas éligibles au remboursement.
              </li>
              <li>
                <strong>Assistance</strong> : Si vous avez des questions ou des préoccupations concernant notre politique de remboursement, n'hésitez pas à nous contacter à <a href="mailto:support@platinumiptv.uk" className="text-purple-600 underline">support@platinumiptv.uk</a>.
              </li>
            </ol>
      
            <p className="text-gray-700">
              Nous apprécions votre confiance et nous nous engageons à vous offrir le meilleur service possible.
            </p>
          </div>
        )}
      </div>
      {/* Notification */}
      <Notification 
        message={notification.message} 
        show={notification.show} 
        onClose={() => setNotification({ show: false, message: '' })}
      />
    </div>
  );
}
