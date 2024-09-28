import React, { useState } from 'react';
import './pricing.css';
import { FaCheck, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { BsCart2 } from 'react-icons/bs';

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

                                    <Link to='/produits/abonnement-standard-1-mois'>
                                    <div data-tooltip="Prix:-4€" className="button">
                                        <div className="button-wrapper">
                                        <button className="text">COMMANDER</button>
                                            <span className="icon">
                                            <BsCart2 />
                                            </span>
                                        </div>  
                                    </div>
                                    </Link>

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

                                    <Link to='/produits/abonnement-standard-3-moiss'>
                                    <div data-tooltip="Prix:-4€" className="button">
                                        <div className="button-wrapper">
                                        <button className="text">COMMANDER</button>
                                            <span className="icon">
                                            <BsCart2 />
                                            </span>
                                        </div>  
                                    </div>
                                    </Link>
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

                                    <Link to='/produits/abonnement-standard-6-mois'>
                                    <div data-tooltip="Prix:-5€" className="button">
                                        <div className="button-wrapper">
                                        <button className="text">COMMANDER</button>
                                            <span className="icon">
                                            <BsCart2 />
                                            </span>
                                        </div>  
                                    </div>
                                    </Link>


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
                                        <span className="text-xl line-through font-bold text-red-600 tracking-tighter">65€ </span>
                                    </p>


                                    {/* button buy  */}

                                    <Link to='/produits/abonnement-standard-12-mois'>
                                    <div data-tooltip="Prix:-10€" className="button">
                                        <div className="button-wrapper">
                                        <button className="text">COMMANDER</button>
                                            <span className="icon">
                                            <BsCart2 />
                                            </span>
                                        </div>  
                                    </div>
                                    </Link>

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

                                    <Link to='/produits/abonnement-premium-1-mois'>
                                    <div data-tooltip="Prix:-5€" className="button">
                                        <div className="button-wrapper">
                                        <button className="text">COMMANDER</button>
                                            <span className="icon">
                                            <BsCart2 />
                                            </span>
                                        </div>  
                                    </div>
                                    </Link>

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

                                    <Link to='/produits/abonnement-premium-3-mois'>
                                    <div data-tooltip="Prix:-4€" className="button">
                                        <div className="button-wrapper">
                                        <button className="text">COMMANDER</button>
                                            <span className="icon">
                                            <BsCart2 />
                                            </span>
                                        </div>  
                                    </div>
                                    </Link>
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

                                    <Link to='/produits/abonnement-premium-6-mois'>
                                    <div data-tooltip="Prix:-7€" className="button">
                                        <div className="button-wrapper">
                                        <button className="text">COMMANDER</button>
                                            <span className="icon">
                                            <BsCart2 />
                                            </span>
                                        </div>  
                                    </div>
                                    </Link>


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

                                    <Link to='/produits/abonnement-premium-12-mois'>
                                    <div data-tooltip="Prix:-10€" className="button">
                                        <div className="button-wrapper">
                                        <button className="text">COMMANDER</button>
                                            <span className="icon">
                                            <BsCart2 />
                                            </span>
                                        </div>  
                                    </div>
                                    </Link>

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
