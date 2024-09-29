import React, { useEffect } from "react";
import '../index.css';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS
import { useTranslation } from 'react-i18next';

const FreeTrial = () => {
  const { t } = useTranslation();

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
      {t('ft.title')}
     </span>
    </h1>
    <div className="py-12" style={{ textAlign: "-webkit-center" }}>
      <div className="form-container" data-aos="fade-down" data-aos-delay="400">
        <form >
          {/* Full Name */}
          <div className="form__group field">
            <input required placeholder="Enter Your Full Name" className="form__field" type="text" id="fullname" />
            <label className="form__label" htmlFor="fullname">{t('ft.fullName')}</label>
          </div>

          {/* Email */}
          <div className="form__group field">
            <input required placeholder="Enter Your Email" className="form__field" type="email" id="email" />
            <label className="form__label" htmlFor="email">Email: *</label>
          </div>

          {/* Phone */}
          <div className="form__group field">
            <input required placeholder="Enter Your Phone Number" className="form__field" type="text" id="phone" />
            <label className="form__label" htmlFor="phone">{t('ft.phone')}</label>
          </div>

          {/* Country Select */}
          <div className="form__group field">
            <input required placeholder="Enter Your Country" className="form__field" type="text" id="phone" />
            <label className="form__label" htmlFor="phone">{t('ft.country')}</label>
          </div>

          {/* MAC Address */}
          <div className="form__group field">
            <input required placeholder="70:b1:3d:33:c7:2a" className="form__field" type="text" id="mac-address" />
            <label className="form__label" htmlFor="mac-address">{t('ft.macAddress')}</label>
          </div>

          {/* Message */}
          <div className="form__group field">
            <textarea required placeholder="Enter Your Message" className="form__field" id="message" rows="4"></textarea>
            <label className="form__label" htmlFor="message">{t('ft.message')}</label>
          </div>

          {/* Radio Buttons - Adult Option */}
          <div className="radio-button-container">
            <div className="radio-button grid">
              <label className="text-white text-lg mr-10">{t('ft.optionAdult')}</label>
              <input type="radio" className="radio-button__input" id="{t('ft.yes')}" name="adult-option" />
              <label className="radio-button__label" htmlFor="{t('ft.yes')}">
                <span className="radio-button__custom"></span>
                {t('ft.yes')}
              </label>
            </div>
            <div className="radio-button">
              <input type="radio" className="radio-button__input" id="{t('ft.no')}" name="adult-option" />
              <label className="radio-button__label" htmlFor="{t('ft.no')}">
                <span className="radio-button__custom"></span>
                {t('ft.no')}
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
                    {t('ft.send')}
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
            {t('ft.guideTitle')}
            </h2>
            
            <p className="text-lg mb-8 leading-relaxed text-gray-600">
            {t('ft.guideDescription')}
            </p>
            
            <h3 className="text-2xl font-semibold text-purple-600 mb-4" style={{ fontFamily: 'Oswald, sans-serif' }}>
            {t('ft.activationProcedure')}
            </h3>
            
            <ol className="list-decimal list-inside text-lg mb-8 space-y-2">
                <li>
                {t('ft.activationStep1')}
                </li>
                <li>{t('ft.activationStep2')}</li>
                <li>
                {t('ft.activationStep3')}
                </li>
            </ol>
            
            <h3 className="text-2xl font-semibold text-purple-600 mb-4" style={{ fontFamily: 'Oswald, sans-serif' }}>
            {t('ft.usefulInfo')}
            </h3>
            
            <p className="text-lg mb-8 leading-relaxed text-gray-600">
            {t('ft.macAddressInfo')}
            </p>
            
            <h3 className="text-2xl font-semibold text-purple-600 mb-4" style={{ fontFamily: 'Oswald, sans-serif' }}>
            {t('ft.note')}
            </h3>
            
            <ul className="list-disc list-inside text-lg mb-8 space-y-2">
                <li>{t('ft.note1')}</li>
                <li>{t('ft.note2')}</li>
                <li>{t('ft.note3')}</li>
            </ul>
            
            <h3 className="text-2xl font-semibold text-purple-600 mb-4" style={{ fontFamily: 'Oswald, sans-serif' }}>
            {t('ft.contactInfo')}
            </h3>
            
            <p className="text-lg leading-relaxed mb-8 text-gray-600">
            {t('ft.contactNote')}
            </p>
        </div>


    </div>
    </>
  );
};

export default FreeTrial;
