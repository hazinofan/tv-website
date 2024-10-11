import React from 'react';
import { IoLogoWhatsapp } from 'react-icons/io5';

const WhatsAppButton = ({ phoneNumber = "12763001517", message = "Bonjour! Je suis intéressé par le prix actuel de l’abonnement Elite. Pourriez-vous s'il vous plaît fournir les détails?" }) => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

  return (
    <div className="fixed top-5 left-5 z-50"> {/* Position and z-index */}
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <div className="relative flex items-center justify-center w-16 h-16 bg-green-500 rounded-full shadow-lg cursor-pointer transition-transform transform hover:scale-105 animate-pulse 
                        sm:w-12 sm:h-12 md:w-16 md:h-16"> {/* Responsive sizes */}
          <IoLogoWhatsapp className='text-3xl' />
        </div>
      </a>
    </div>
  );
};

export default WhatsAppButton;
