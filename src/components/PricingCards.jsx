import React, { useState } from 'react';
import './pricing.css';
import { FaCheck } from 'react-icons/fa';

export default function PricingCards() {
    const [billingType, setBillingType] = useState('monthly'); // State to toggle between billing types

    return (
        <div className="font-roboto">
            <div className="sm:flex sm:flex-col sm:align-center p-10">
                <div className="relative self-center bg-slate-200 rounded-lg p-0.5 flex">
                    <button 
                        type="button"
                        onClick={() => setBillingType('monthly')} 
                        className={`relative w-1/2 rounded-md py-2 text-sm font-medium whitespace-nowrap focus:outline-none sm:w-auto sm:px-8 ${billingType === 'monthly' ? 'bg-slate-50 text-slate-900' : 'text-slate-500'}`}
                    >
                        STANDARD 
                    </button>
                    <button 
                        type="button"
                        onClick={() => setBillingType('yearly')} 
                        className={`ml-0.5 relative w-1/2 border rounded-md py-2 text-sm font-medium whitespace-nowrap focus:outline-none sm:w-auto sm:px-8 ${billingType === 'yearly' ? 'bg-slate-50 text-slate-900' : 'text-slate-500'}`}
                    >
                        PREMIUM
                    </button>
                </div>
                
                {/* Card container */}
                <div className="mt-12 space-y-3 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-4 sm:gap-6 md:max-w-7xl md:mx-auto xl:grid-cols-4">
                    {billingType === 'monthly' ? (
                        <>
                            {/* Monthly Pricing Cards */}
                            <div className="border border-slate-200 rounded-lg shadow-sm divide-y divide-slate-200">
                                <div className="p-6">
                                    <h2 className="text-3xl leading-6 font-bold text-purple-600">STANDARD</h2>
                                    <p className="mt-2 text-xl text-slate-700 leading-tight">
                                        La liste des chaînes pour adultes n'est pas incluse.
                                    </p>
                                    <p className="mt-10 text-2xl font-semibold text-black leading-tight">
                                        1 Mois d'Abonnement 
                                    </p>
                                    <p className="mt-5">
                                        <span className="text-4xl font-bold text-slate-900 tracking-tighter">20€ </span>
                                        <span className="text-xl line-through font-bold text-red-600 tracking-tighter">24€ </span>
                                    </p>

                                    {/* button buy  */}

                                    <div data-tooltip="Price:-4€" className="button">
                                        <div className="button-wrapper">
                                        <div className="text">Buy Now</div>
                                            <span className="icon">
                                            <svg viewBox="0 0 16 16" className="bi bi-cart2" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
                                        </svg>
                                            </span>
                                        </div>  
                                    </div>

                                </div>
                                <div className="pt-6 pb-8 px-6">
                                    <h3 className="text-lg font-bold text-slate-900 tracking-wide uppercase">Ce qui est inclus</h3>
                                    <ul   className="mt-4 space-y-3">
                                        <li className="flex space-x-3">NO BUFFERING</li>
                                        <li className="flex space-x-3 items-center"> <FaCheck className=' text-green-600 text-sm' /> <strong>+16500</strong> Channels </li>
                                        <li className="flex space-x-3 items-center"> <FaCheck className=' text-green-600 text-sm' /> <strong>+40100</strong> Movies & Series </li>
                                        <li className="flex space-x-3 items-center"> <FaCheck className=' text-green-600 text-sm' /> <strong>VOD, in Fr, En, and Ar...</strong></li>
                                        <li className="flex space-x-3 items-center" style={{gap: "20px"}}> <FaCheck className=' text-green-600 text-lg' /> Smart IPTV, MAG, Android, PC, Apple iOS</li>
                                        <li className="flex space-x-3 items-center" style={{gap: "20px"}}> <FaCheck className=' text-green-600 text-sm' /> Qualities 4K - FHD - HD - SD - H.265</li>
                                        <li className="flex space-x-3 items-center" style={{gap: "20px"}}> <FaCheck className=' text-green-600 text-sm' /> Compatible with VPN</li>
                                        <li className="flex space-x-3 items-center" style={{gap: "20px"}}> <FaCheck className=' text-green-600 text-sm' /> 24/7 Support</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="border border-slate-200 rounded-lg shadow-sm divide-y divide-slate-200">
                                <div className="p-6">
                                    <h2 className="text-3xl leading-6 font-bold text-purple-600">STANDARD</h2>
                                    <p className="mt-2 text-xl text-slate-700 leading-tight">
                                        La liste des chaînes pour adultes n'est pas incluse.
                                    </p>
                                    <p className="mt-10 text-2xl font-semibold text-black leading-tight">
                                        3 Mois d'Abonnement
                                    </p>
                                    <p className="mt-5">
                                        <span className="text-4xl font-bold text-slate-900 tracking-tighter">28€ </span>
                                        <span className="text-xl line-through font-bold text-red-600 tracking-tighter">32€ </span>
                                    </p>

                                    {/* button buy  */}

                                    <div data-tooltip="Price:-4€" className="button">
                                        <div className="button-wrapper">
                                        <div className="text">Buy Now</div>
                                            <span className="icon">
                                            <svg viewBox="0 0 16 16" className="bi bi-cart2" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
                                        </svg>
                                            </span>
                                        </div>  
                                    </div>
                                </div>
                                <div className="pt-6 pb-8 px-6">
                                    <h3 className="text-lg font-bold text-slate-900 tracking-wide uppercase">Ce qui est inclus</h3>
                                    <ul   className="mt-4 space-y-3">
                                        <li className="flex space-x-3">NO BUFFERING</li>
                                        <li className="flex space-x-3 items-center"> <FaCheck className=' text-green-600 text-sm' /> <strong>+16500</strong> Channels </li>
                                        <li className="flex space-x-3 items-center"> <FaCheck className=' text-green-600 text-sm' /> <strong>+40100</strong> Movies & Series </li>
                                        <li className="flex space-x-3 items-center"> <FaCheck className=' text-green-600 text-sm' /> <strong>VOD, in Fr, En, and Ar...</strong></li>
                                        <li className="flex space-x-3 items-center" style={{gap: "20px"}}> <FaCheck className=' text-green-600 text-lg' /> Smart IPTV, MAG, Android, PC, Apple iOS</li>
                                        <li className="flex space-x-3 items-center" style={{gap: "20px"}}> <FaCheck className=' text-green-600 text-sm' /> Qualities 4K - FHD - HD - SD - H.265</li>
                                        <li className="flex space-x-3 items-center" style={{gap: "20px"}}> <FaCheck className=' text-green-600 text-sm' /> Compatible with VPN</li>
                                        <li className="flex space-x-3 items-center" style={{gap: "20px"}}> <FaCheck className=' text-green-600 text-sm' /> 24/7 Support</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="border border-slate-200 rounded-lg shadow-sm divide-y divide-slate-200">
                                <div className="p-6">
                                    <h2 className="text-3xl leading-6 font-bold text-purple-600">STANDARD</h2>
                                    <p className="mt-2 text-xl text-slate-700 leading-tight">
                                        La liste des chaînes pour adultes n'est pas incluse.
                                    </p>
                                    <p className="mt-10 text-2xl font-semibold text-black leading-tight">
                                        6 Mois d'Abonnement
                                    </p>
                                    <p className="mt-5">
                                        <span className="text-4xl font-bold text-slate-900 tracking-tighter">40€ </span>
                                        <span className="text-xl line-through font-bold text-red-600 tracking-tighter">45€ </span>
                                    </p>
                                    
                                    {/* button buy  */}

                                    <div data-tooltip="Price:-5€" className="button">
                                        <div className="button-wrapper">
                                        <div className="text">Buy Now</div>
                                            <span className="icon">
                                            <svg viewBox="0 0 16 16" className="bi bi-cart2" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
                                        </svg>
                                            </span>
                                        </div>  
                                    </div>


                                </div>
                                <div className="pt-6 pb-8 px-6">
                                    <h3 className="text-lg font-bold text-slate-900 tracking-wide uppercase">Ce qui est inclus</h3>
                                    <ul   className="mt-4 space-y-3">
                                        <li className="flex space-x-3">NO BUFFERING</li>
                                        <li className="flex space-x-3 items-center"> <FaCheck className=' text-green-600 text-sm' /> <strong>+16500</strong> Channels </li>
                                        <li className="flex space-x-3 items-center"> <FaCheck className=' text-green-600 text-sm' /> <strong>+40100</strong> Movies & Series </li>
                                        <li className="flex space-x-3 items-center"> <FaCheck className=' text-green-600 text-sm' /> <strong>VOD, in Fr, En, and Ar...</strong></li>
                                        <li className="flex space-x-3 items-center" style={{gap: "20px"}}> <FaCheck className=' text-green-600 text-lg' /> Smart IPTV, MAG, Android, PC, Apple iOS</li>
                                        <li className="flex space-x-3 items-center" style={{gap: "20px"}}> <FaCheck className=' text-green-600 text-sm' /> Qualities 4K - FHD - HD - SD - H.265</li>
                                        <li className="flex space-x-3 items-center" style={{gap: "20px"}}> <FaCheck className=' text-green-600 text-sm' /> Compatible with VPN</li>
                                        <li className="flex space-x-3 items-center" style={{gap: "20px"}}> <FaCheck className=' text-green-600 text-sm' /> 24/7 Support</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="border border-slate-200 rounded-lg shadow-sm divide-y divide-slate-200">
                                <div className="p-6">
                                    <h2 className="text-3xl leading-6 font-bold text-purple-600">STANDARD</h2>
                                    <p className="mt-2 text-xl text-slate-700 leading-tight">
                                        La liste des chaînes pour adultes n'est pas incluse.
                                    </p>
                                    <p className="mt-10 text-2xl font-semibold text-black leading-tight">
                                        12 Mois d'Abonnement
                                    </p>
                                    <p className="mt-5">
                                        <span className="text-4xl font-bold text-slate-900 tracking-tighter">55€ </span>
                                        <span className="text-xl line-through font-bold text-red-600 tracking-tighter">60€ </span>
                                    </p>


                                    {/* button buy  */}

                                    <div data-tooltip="Price:-5€" className="button">
                                        <div className="button-wrapper">
                                        <div className="text">Buy Now</div>
                                            <span className="icon">
                                            <svg viewBox="0 0 16 16" className="bi bi-cart2" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
                                        </svg>
                                            </span>
                                        </div>  
                                    </div>

                                </div>
                                <div className="pt-6 pb-8 px-6">
                                    <h3 className="text-lg font-bold text-slate-900 tracking-wide uppercase">Ce qui est inclus</h3>
                                    <ul   className="mt-4 space-y-3">
                                        <li className="flex space-x-3">NO BUFFERING</li>
                                        <li className="flex space-x-3 items-center"> <FaCheck className=' text-green-600 text-sm' /> <strong>+16500</strong> Channels </li>
                                        <li className="flex space-x-3 items-center"> <FaCheck className=' text-green-600 text-sm' /> <strong>+40100</strong> Movies & Series </li>
                                        <li className="flex space-x-3 items-center"> <FaCheck className=' text-green-600 text-sm' /> <strong>VOD, in Fr, En, and Ar...</strong></li>
                                        <li className="flex space-x-3 items-center" style={{gap: "20px"}}> <FaCheck className=' text-green-600 text-lg' /> Smart IPTV, MAG, Android, PC, Apple iOS</li>
                                        <li className="flex space-x-3 items-center" style={{gap: "20px"}}> <FaCheck className=' text-green-600 text-sm' /> Qualities 4K - FHD - HD - SD - H.265</li>
                                        <li className="flex space-x-3 items-center" style={{gap: "20px"}}> <FaCheck className=' text-green-600 text-sm' /> Compatible with VPN</li>
                                        <li className="flex space-x-3 items-center" style={{gap: "20px"}}> <FaCheck className=' text-green-600 text-sm' /> 24/7 Support</li>
                                    </ul>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            {/* Yearly Pricing Cards */}
                            <div className="border border-slate-200 rounded-lg shadow-sm divide-y divide-slate-200">
                                <div className="p-6">
                                    <h2 className="text-3xl leading-6 font-bold text-yellow-600">PREMIUM</h2>
                                    <p className="mt-2 text-xl text-slate-700 leading-tight">
                                        La liste des chaînes pour adultes est incluse.
                                    </p>
                                    <p className="mt-10 text-2xl font-semibold text-black leading-tight">
                                        1 Mois d'Abonnement 
                                    </p>
                                    <p className="mt-5">
                                        <span className="text-4xl font-bold text-slate-900 tracking-tighter">25€ </span>
                                        <span className="text-xl line-through font-bold text-red-600 tracking-tighter">30€ </span>
                                    </p>

                                    {/* button buy  */}

                                    <div data-tooltip="Price:-5€" className="button">
                                        <div className="button-wrapper">
                                        <div className="text">Buy Now</div>
                                            <span className="icon">
                                            <svg viewBox="0 0 16 16" className="bi bi-cart2" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
                                        </svg>
                                            </span>
                                        </div>  
                                    </div>

                                </div>
                                <div className="pt-6 pb-8 px-6">
                                    <h3 className="text-lg font-bold text-slate-900 tracking-wide uppercase">Ce qui est inclus</h3>
                                    <ul   className="mt-4 space-y-3">
                                        <li className="flex space-x-3">NO BUFFERING</li>
                                        <li className="flex space-x-3 items-center"> <FaCheck className=' text-green-600 text-sm' /> <strong>+16500</strong> Channels </li>
                                        <li className="flex space-x-3 items-center"> <FaCheck className=' text-green-600 text-sm' /> <strong>+40100</strong> Movies & Series </li>
                                        <li className="flex space-x-3 items-center"> <FaCheck className=' text-green-600 text-sm' /> <strong>VOD, in Fr, En, and Ar...</strong></li>
                                        <li className="flex space-x-3 items-center" style={{gap: "20px"}}> <FaCheck className=' text-green-600 text-lg' /> Smart IPTV, MAG, Android, PC, Apple iOS</li>
                                        <li className="flex space-x-3 items-center" style={{gap: "20px"}}> <FaCheck className=' text-green-600 text-sm' /> Qualities 4K - FHD - HD - SD - H.265</li>
                                        <li className="flex space-x-3 items-center" style={{gap: "20px"}}> <FaCheck className=' text-green-600 text-sm' /> Compatible with VPN</li>
                                        <li className="flex space-x-3 items-center" style={{gap: "20px"}}> <FaCheck className=' text-green-600 text-sm' /> 24/7 Support</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="border border-slate-200 rounded-lg shadow-sm divide-y divide-slate-200">
                                <div className="p-6">
                                    <h2 className="text-3xl leading-6 font-bold text-yellow-600">PREMIUM</h2>
                                    <p className="mt-2 text-xl text-slate-700 leading-tight">
                                        La liste des chaînes pour adultes est incluse.
                                    </p>
                                    <p className="mt-10 text-2xl font-semibold text-black leading-tight">
                                        3 Mois d'Abonnement
                                    </p>
                                    <p className="mt-5">
                                        <span className="text-4xl font-bold text-slate-900 tracking-tighter">35€ </span>
                                        <span className="text-xl line-through font-bold text-red-600 tracking-tighter">39€ </span>
                                    </p>

                                    {/* button buy  */}

                                    <div data-tooltip="Price:-4€" className="button">
                                        <div className="button-wrapper">
                                        <div className="text">Buy Now</div>
                                            <span className="icon">
                                            <svg viewBox="0 0 16 16" className="bi bi-cart2" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
                                        </svg>
                                            </span>
                                        </div>  
                                    </div>
                                </div>
                                <div className="pt-6 pb-8 px-6">
                                    <h3 className="text-lg font-bold text-slate-900 tracking-wide uppercase">Ce qui est inclus</h3>
                                    <ul   className="mt-4 space-y-3">
                                        <li className="flex space-x-3">NO BUFFERING</li>
                                        <li className="flex space-x-3 items-center"> <FaCheck className=' text-green-600 text-sm' /> <strong>+16500</strong> Channels </li>
                                        <li className="flex space-x-3 items-center"> <FaCheck className=' text-green-600 text-sm' /> <strong>+40100</strong> Movies & Series </li>
                                        <li className="flex space-x-3 items-center"> <FaCheck className=' text-green-600 text-sm' /> <strong>VOD, in Fr, En, and Ar...</strong></li>
                                        <li className="flex space-x-3 items-center" style={{gap: "20px"}}> <FaCheck className=' text-green-600 text-lg' /> Smart IPTV, MAG, Android, PC, Apple iOS</li>
                                        <li className="flex space-x-3 items-center" style={{gap: "20px"}}> <FaCheck className=' text-green-600 text-sm' /> Qualities 4K - FHD - HD - SD - H.265</li>
                                        <li className="flex space-x-3 items-center" style={{gap: "20px"}}> <FaCheck className=' text-green-600 text-sm' /> Compatible with VPN</li>
                                        <li className="flex space-x-3 items-center" style={{gap: "20px"}}> <FaCheck className=' text-green-600 text-sm' /> 24/7 Support</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="border border-slate-200 rounded-lg shadow-sm divide-y divide-slate-200">
                                <div className="p-6">
                                    <h2 className="text-3xl leading-6 font-bold text-yellow-600">PREMIUM</h2>
                                    <p className="mt-2 text-xl text-slate-700 leading-tight">
                                        La liste des chaînes pour adultes est incluse.
                                    </p>
                                    <p className="mt-10 text-2xl font-semibold text-black leading-tight">
                                        6 Mois d'Abonnement
                                    </p>
                                    <p className="mt-5">
                                        <span className="text-4xl font-bold text-slate-900 tracking-tighter">45€ </span>
                                        <span className="text-xl line-through font-bold text-red-600 tracking-tighter">52€ </span>
                                    </p>
                                    
                                    {/* button buy  */}

                                    <div data-tooltip="Price:-7€" className="button">
                                        <div className="button-wrapper">
                                        <div className="text">Buy Now</div>
                                            <span className="icon">
                                            <svg viewBox="0 0 16 16" className="bi bi-cart2" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
                                        </svg>
                                            </span>
                                        </div>  
                                    </div>


                                </div>
                                <div className="pt-6 pb-8 px-6">
                                    <h3 className="text-lg font-bold text-slate-900 tracking-wide uppercase">Ce qui est inclus</h3>
                                    <ul   className="mt-4 space-y-3">
                                        <li className="flex space-x-3">NO BUFFERING</li>
                                        <li className="flex space-x-3 items-center"> <FaCheck className=' text-green-600 text-sm' /> <strong>+16500</strong> Channels </li>
                                        <li className="flex space-x-3 items-center"> <FaCheck className=' text-green-600 text-sm' /> <strong>+40100</strong> Movies & Series </li>
                                        <li className="flex space-x-3 items-center"> <FaCheck className=' text-green-600 text-sm' /> <strong>VOD, in Fr, En, and Ar...</strong></li>
                                        <li className="flex space-x-3 items-center" style={{gap: "20px"}}> <FaCheck className=' text-green-600 text-lg' /> Smart IPTV, MAG, Android, PC, Apple iOS</li>
                                        <li className="flex space-x-3 items-center" style={{gap: "20px"}}> <FaCheck className=' text-green-600 text-sm' /> Qualities 4K - FHD - HD - SD - H.265</li>
                                        <li className="flex space-x-3 items-center" style={{gap: "20px"}}> <FaCheck className=' text-green-600 text-sm' /> Compatible with VPN</li>
                                        <li className="flex space-x-3 items-center" style={{gap: "20px"}}> <FaCheck className=' text-green-600 text-sm' /> 24/7 Support</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="border border-slate-200 rounded-lg shadow-sm divide-y divide-slate-200">
                                <div className="p-6">
                                    <h2 className="text-3xl leading-6 font-bold text-yellow-600">PREMIUM</h2>
                                    <p className="mt-2 text-xl text-slate-700 leading-tight">
                                        La liste des chaînes pour adultes est incluse.
                                    </p>
                                    <p className="mt-10 text-2xl font-semibold text-black leading-tight">
                                        12 Mois d'Abonnement
                                    </p>
                                    <p className="mt-5">
                                        <span className="text-4xl font-bold text-slate-900 tracking-tighter">60€ </span>
                                        <span className="text-xl line-through font-bold text-red-600 tracking-tighter">70€ </span>
                                    </p>


                                    {/* button buy  */}

                                    <div data-tooltip="Price:-10€" className="button">
                                        <div className="button-wrapper">
                                        <div className="text">Buy Now</div>
                                            <span className="icon">
                                            <svg viewBox="0 0 16 16" className="bi bi-cart2" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
                                        </svg>
                                            </span>
                                        </div>  
                                    </div>

                                </div>
                                <div className="pt-6 pb-8 px-6">
                                    <h3 className="text-lg font-bold text-slate-900 tracking-wide uppercase">Ce qui est inclus</h3>
                                    <ul   className="mt-4 space-y-3">
                                        <li className="flex space-x-3">NO BUFFERING</li>
                                        <li className="flex space-x-3 items-center"> <FaCheck className=' text-green-600 text-sm' /> <strong>+16500</strong> Channels </li>
                                        <li className="flex space-x-3 items-center"> <FaCheck className=' text-green-600 text-sm' /> <strong>+40100</strong> Movies & Series </li>
                                        <li className="flex space-x-3 items-center"> <FaCheck className=' text-green-600 text-sm' /> <strong>VOD, in Fr, En, and Ar...</strong></li>
                                        <li className="flex space-x-3 items-center" style={{gap: "20px"}}> <FaCheck className=' text-green-600 text-lg' /> Smart IPTV, MAG, Android, PC, Apple iOS</li>
                                        <li className="flex space-x-3 items-center" style={{gap: "20px"}}> <FaCheck className=' text-green-600 text-sm' /> Qualities 4K - FHD - HD - SD - H.265</li>
                                        <li className="flex space-x-3 items-center" style={{gap: "20px"}}> <FaCheck className=' text-green-600 text-sm' /> Compatible with VPN</li>
                                        <li className="flex space-x-3 items-center" style={{gap: "20px"}}> <FaCheck className=' text-green-600 text-sm' /> 24/7 Support</li>
                                    </ul>
                                </div>
                            </div>
                            
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
