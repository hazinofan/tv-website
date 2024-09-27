import React, { useEffect } from "react";
import '../index.css';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS

const FreeTrial = () => {

   useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
    <h1
      className="text-3xl font-extrabold text-black md:text-5xl lg:text-4xl pt-40"
      data-aos="fade-down"
      data-aos-delay="400"
    >
     <span
        className="text-transparent bg-clip-text bg-gradient-to-r to-red-700 from-blue-500 flex items-center text-center"
        style={{ fontFamily: 'Oswald, sans-serif', justifyContent: 'center' }}
     >
      Formulaire à remplir pour bénéficier de l'essai IPTV gratuit de 2 heures :
     </span>
    </h1>
    <div className="py-12" style={{ textAlign: "-webkit-center" }}>
      <div className="form-container" data-aos="fade-down" data-aos-delay="400">
        <form >
          {/* Full Name */}
          <div className="form__group field">
            <input required placeholder="Enter Your Full Name" className="form__field" type="text" id="fullname" />
            <label className="form__label" htmlFor="fullname">Nom Complet: *</label>
          </div>

          {/* Email */}
          <div className="form__group field">
            <input required placeholder="Enter Your Email" className="form__field" type="email" id="email" />
            <label className="form__label" htmlFor="email">Email: *</label>
          </div>

          {/* Phone */}
          <div className="form__group field">
            <input required placeholder="Enter Your Phone Number" className="form__field" type="text" id="phone" />
            <label className="form__label" htmlFor="phone">Numéro de télephone: *</label>
          </div>

          {/* Country Select */}
          <div className="form__group field">
            <input required placeholder="Enter Your Phone Number" className="form__field" type="text" id="phone" />
            <label className="form__label" htmlFor="phone">Pays: *</label>
          </div>

          {/* MAC Address */}
          <div className="form__group field">
            <input required placeholder="70:b1:3d:33:c7:2a" className="form__field" type="text" id="mac-address" />
            <label className="form__label" htmlFor="mac-address">Address MAC de votre appareil [MAG]:</label>
          </div>

          {/* Message */}
          <div className="form__group field">
            <textarea required placeholder="Enter Your Message" className="form__field" id="message" rows="4"></textarea>
            <label className="form__label" htmlFor="message">Votre Message: *</label>
          </div>

          {/* Radio Buttons - Adult Option */}
          <div className="radio-button-container">
            <div className="radio-button grid">
              <label className="text-white text-lg mr-10">OPTION ADULT:</label>
              <input type="radio" className="radio-button__input" id="oui" name="adult-option" />
              <label className="radio-button__label" htmlFor="oui">
                <span className="radio-button__custom"></span>
                Oui
              </label>
            </div>
            <div className="radio-button">
              <input type="radio" className="radio-button__input" id="non" name="adult-option" />
              <label className="radio-button__label" htmlFor="non">
                <span className="radio-button__custom"></span>
                Non
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-center h-20">
            <div className="relative group">
              <button
                className="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
              >
                <span
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                ></span>

                <span className="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
                  <div className="relative z-10 flex items-center space-x-2">
                    <span className="transition-all duration-500 group-hover:translate-x-1">
                      Envoyer
                    </span>
                    <svg
                      className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                      data-slot="icon"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </span>
              </button>
            </div>
          </div>

        </form>
      </div>
      <div className="bg-white text-gray-800 p-10 rounded-lg shadow-md w-full md:w-3/4 lg:w-2/3 mx-auto text-left mt-28" data-aos="fade-down" data-aos-delay="400">
            <h2 className="text-4xl font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-red-400" style={{ fontFamily: 'Oswald, sans-serif' }}>
                Guide d'Installation
            </h2>
            
            <p className="text-lg mb-8 leading-relaxed text-gray-600">
                Platinium IPTV propose un essai IPTV gratuit de 24 heures sans aucune obligation ni paiement requis. Vous pouvez tester notre serveur et explorer tous les chaînes, forfaits et VOD que nous offrons. Cliquez simplement sur le lien pour accéder à notre site web.
            </p>
            
            <h3 className="text-2xl font-semibold text-purple-600 mb-4" style={{ fontFamily: 'Oswald, sans-serif' }}>
                Procédure d'Activation :
            </h3>
            
            <ol className="list-decimal list-inside text-lg mb-8 space-y-2">
                <li>
                Remplissez le formulaire de test de l'abonnement IPTV gratuit.
                </li>
                <li>Cliquez sur envoyer.</li>
                <li>
                Les informations d'activation nécessaires (identifiants et lien m3u) vous seront envoyées dès qu'elles seront générées. (Vérifiez votre email après l'envoi).
                </li>
            </ol>
            
            <h3 className="text-2xl font-semibold text-purple-600 mb-4" style={{ fontFamily: 'Oswald, sans-serif' }}>
                Informations Utiles :
            </h3>
            
            <p className="text-lg mb-8 leading-relaxed text-gray-600">
                L'adresse MAG : une série unique de chiffres et de lettres (Exemple : <span className="font-mono text-black">1b:10:c8:d2:84:e4</span>) qui identifie votre appareil. Vous pouvez la trouver dans les paramètres de votre TV ou dans votre application.
            </p>
            
            <h3 className="text-2xl font-semibold text-purple-600 mb-4" style={{ fontFamily: 'Oswald, sans-serif' }}>
                Remarque :
            </h3>
            
            <ul className="list-disc list-inside text-lg mb-8 space-y-2">
                <li>Les comptes de démonstration seront automatiquement suspendus pendant les grands événements sportifs (football, basket, tennis, etc.).</li>
                <li>Toute demande envoyée pendant la suspension des tests sera retardée jusqu'à la fin des événements.</li>
                <li>Les formulaires mal remplis ou avec des informations manquantes ne seront pas traités.</li>
            </ul>
            
            <h3 className="text-2xl font-semibold text-purple-600 mb-4" style={{ fontFamily: 'Oswald, sans-serif' }}>
                Informations de Contact :
            </h3>
            
            <p className="text-lg leading-relaxed mb-8 text-gray-600">
                N'hésitez pas à nous contacter pour toute information complémentaire.
            </p>
            
            <p className="text-lg leading-relaxed">
                Nos équipes sont disponibles 7 jours sur 7, 24 heures sur 24.
            </p>
        </div>


    </div>
    </>
  );
};

export default FreeTrial;
