import React from 'react';
import { MdEmail, MdSupportAgent } from 'react-icons/md';


export default function Footer() {
  return (
    <footer className="bg-gray-200 py-12 px-5">
      <div className="container mx-auto">
        <div className="text-center">
          <h3 className="text-3xl leading-10 text-purple-800 font-bold mb-4">
            Inscrivez-vous à notre newsletter pour recevoir des mises à jour
          </h3>
          <p className="text-base text-gray-500 mb-6">
            Ajoutez votre adresse Email pour avoir les dernières mises à jour de notre service et nos serveurs avant tout le monde.
          </p>
          <div className="flex justify-center space-x-3">
            <input
              className="bg-white rounded-lg w-72 text-sm px-4 py-3 shadow focus:outline-none"
              type="email"
              placeholder="email@email.com"
            />
            <button className="font-bold rounded-lg text-white bg-purple-700 hover:bg-purple-600 cursor-pointer px-6 py-3 shadow-lg focus:outline-none">
              Subscribe
            </button>
          </div>
        </div>
        
        <div className="mt-12 flex flex-col md:flex-row  justify-between items-center border-t pt-8" style={{placeContent: "center"}}>
          <div className="grid items-center  text-gray-600">
            <p className="flex items-center mb-10 gap-2 text-lg">
              <MdSupportAgent className="text-purple-600 text-2xl" />
              +212665078502
            </p>
            <p className="flex items-center gap-2 text-lg">
              <MdEmail className="text-purple-600 text-2xl" />
              platiniumiptv@support.com
            </p>
          </div>

        </div>
      </div>
          <div className="mt-4 md:mt-0">
            <span className="text-lg text-gray-500 block mt-2">
              © Platinium-IPTV 2024, All rights reserved.
            </span>
          </div>
    </footer>
  );
}
