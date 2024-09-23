import React from 'react';
import '../index.css'

export default function EliteCard() {
  return (
    <div>
      <div className="">
        <div className="relative pt-8">
          <div className="absolute inset-0 h-1/2"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
              <div className="flex-1 bg-white dark:bg-gray-900 px-6 py-8 lg:p-12">
                <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white sm:text-3xl">Offre exclusive : <span className=' font-semibold text-yellow-600'> PLATINIUM PACK </span> </h3>
                <p className="mt-6 text-base text-gray-500 dark:text-gray-300">
                Le pack Platinum inclut toutes les chaînes des packs Premium et Standard, avec une durée de 14 mois plus 1 mois offert, soit un total de 15 mois. Ce pack vous offre un support plus rapide et la possibilité de personnaliser vos listes de chaînes selon vos besoins pour une expérience sur-mesure.
                </p>
                <div className="mt-8">
                  <div className="flex items-center">
                    <h4 className="flex-shrink-0 pr-4 bg-white dark:bg-gray-900 text-sm tracking-wider font-semibold uppercase text-rose-600">
                      Ce qui est inclus
                    </h4>
                    <div className="flex-1 border-t-2 border-gray-200 dark:border-gray-600"></div>
                  </div>
                  <ul role="list" className="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5">
                    <li className="flex items-start lg:col-span-1">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-green-400 dark:text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <p className="ml-3 text-sm text-gray-700 dark:text-gray-300">Accès aux fonctionnalités premium</p>
                    </li>
                    <li className="flex items-start lg:col-span-1">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-green-400 dark:text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <p className="ml-3 text-sm text-gray-700 dark:text-gray-300">15 mois D'IPTV PLATINIUM</p>
                    </li>
                    <li className="flex items-start lg:col-span-1">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-green-400 dark:text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <p className="ml-3 text-sm text-gray-700 dark:text-gray-300">personnaliser vos listes de chaînes selon vos besoins</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="py-8 px-6 text-center bg-gray-50 dark:bg-gray-900 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
                <p className="text-lg leading-6 font-medium text-gray-900 dark:text-white">Offre à durée limitée</p>
                <div className="">
                  <span style={{ opacity: 0.5 }} className="font-mono text-xl md:text-lg font-medium text-gray-400 dark:text-gray-400">€</span>
                  <span style={{ opacity: 0.5 }} className="h1 line-through text-gray-600 dark:text-gray-400">120   </span>
                  <span className="text-red-600 text-sm">Special promotion</span>
                </div>
                <div className="mt-4 flex items-center justify-center text-5xl font-extrabold text-gray-900 dark:text-white"><span>90€</span>
                  <span className="ml-3 text-xl font-medium text-gray-500 dark:text-gray-400">EUR</span>
                </div>
                <div className="mt-6">
                <button
                    className="group relative cursor-pointer overflow-hidden whitespace-nowrap px-6 py-4 text-white [background:var(--bg)] [border-radius:var(--radius)]  transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_8px_rgba(62,61,117,0.7)] flex justify-center"
                    style={{
                        '--spread': '90deg',
                        '--shimmer-color': '#ffffff',
                        '--radius': '100px',
                        '--speed': '1.5s',
                        '--cut': '0.1em',
                        '--bg': 'radial-gradient(ellipse 80% 50% at 50% 120%, rgba(62, 61, 117), rgba(18, 18, 38))',
                    }}
                    >
                        <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute inset-[-100%] rotate-gradient">
                            <div className="absolute inset-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,hsl(0_0%_100%/1)_var(--spread),transparent_var(--spread))]"></div>
                        </div>
                    </div>
                    <div className="absolute [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]"></div>
                    <span className="z-10 w-48 whitespace-pre bg-gradient-to-b from-black from-30% to-gray-300/80 bg-clip-text text-center text-sm font-semibold leading-none tracking-tight text-white"> Commander </span>
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
