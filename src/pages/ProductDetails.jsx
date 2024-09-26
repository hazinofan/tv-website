import React, { useEffect, useState } from 'react';
import productImage from '../assets/product.png'; // Renamed for clarity
import '../index.css';
import { FaCheckCircle } from 'react-icons/fa';
import { IoIosFlash, IoMdFootball } from 'react-icons/io';
import { MdSupportAgent } from 'react-icons/md';
import { RiMoneyPoundBoxLine } from 'react-icons/ri';
import { useParams } from 'react-router-dom';

export default function ProductDetails() {
  const [activeTab, setActiveTab] = useState('details');
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch('/products.json');
        const data = await res.json();
        console.log('Fetched products:', data.products); 
        console.log('ID from params:', id); 
  
        const foundProduct = data.products.find((item) => item.id === id);
  
        // For debugging, log the found product
        console.log('Found product:', foundProduct); 
  
        setProduct(foundProduct);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };
  
    fetchProduct();
  }, [id]);
  
  

  return (
    <div>
      <h1 className='text-5xl text-center p-32' style={{ fontFamily: "fantasy" }}>Product Details</h1>
      <div className="m-2 group px-10 py-5 bg-white/10 rounded-lg flex flex-col items-center justify-center gap-2 relative after:absolute after:h-full after:bg-[#05043e] z-20 shadow-lg after:-z-20 after:w-full after:inset-0 after:rounded-lg transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden cursor-pointer after:-translate-y-full after:hover:translate-y-0">
        <img src={product ? productImage : '/path/to/placeholder.png'} alt="" width={250} />
        <p className="cardtxt font-semibold text-black tracking-wider group-hover:text-white text-xl">
          {product ? product.name : 'Loading...'}
        </p>
        <p className="blueberry font-semibold text-black text-xs group-hover:text-purple-300">
          {product ? product.description : 'Loading description...'}
        </p>
        <div className="ordernow flex flex-row justify-between items-center w-full">
          <p className="ordernow-text text-[#05043e] font-semibold group-hover:text-white">
            {product ? `${product.price} €` : 'Loading price...'}
          </p>
          <button className="cartBtn">
            ADD TO CART
          </button>
        </div>
      </div>

      <div className="relative self-center rounded-lg p-0.5 flex">
        <button
          type="button"
          onClick={() => setActiveTab('details')}
          className={`relative w-1/2 rounded-md py-2 text-sm font-medium whitespace-nowrap focus:outline-none sm:w-auto sm:px-8 ${activeTab === 'details' ? 'bg-[#abd373] text-white' : 'bg-white text-[#05043e]'}`}
        >
          Details
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('moneyBack')}
          className={`ml-0.5 relative w-1/2 rounded-md py-2 text-sm font-medium whitespace-nowrap focus:outline-none sm:w-auto sm:px-8 ${activeTab === 'moneyBack' ? 'bg-[#abd373] text-white' : 'bg-white text-[#05043e]'}`}
        >
          Money Back Policy
        </button>
      </div>

      {/* Content for selected tab */}
      <div className="mt-4">
        {activeTab === 'details' && product && (
          <div>
            <h1 className='font-semibold text-3xl'>{product.name}</h1>
            <div>
              <ul className="space-y-2 pt-8 pb-10">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center font-medium space-x-2 text-black">
                    <FaCheckCircle className="text-blue-600" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
        {activeTab === 'moneyBack' && (
          <p className="text-black">
            Our money-back policy ensures that if you are not satisfied, you can return the product within 30 days...
          </p>
        )}
      </div>
    </div>
  );
}
