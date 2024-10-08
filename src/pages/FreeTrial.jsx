import { useEffect, useState, useRef } from "react";
import '../index.css';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const FreeTrial = () => {
  const { t } = useTranslation();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    country: '',
    macAddress: '',
  });
  
  const [emailSent, setEmailSent] = useState(false);
  const form = useRef();

  // Initialize AOS
  useEffect(() => {
    AOS.init();
  }, []);

  // Handle form field changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Send email using EmailJS
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_fag2lxt', 'template_975j2io', form.current, 'V6V66M4E9uE9Cm9Dh')
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          
          // Show success message
          setEmailSent(true);

          // Clear the form fields
          setFormData({
            name: '',
            email: '',
            phone: '',
            message: '',
            country: '',
            macAddress: ''
          });

          setTimeout(() => {
            setEmailSent(false);
          }, 5000);
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <>

      <Helmet>
        <title>IPTV Gratuit - Obtenez votre essai gratuit IPTV | Platinium IPTV</title>
        <meta name="description" content="Testez gratuitement IPTV pendant 2 heures. Obtenez un code IPTV gratuit, m3u IPTV et accédez à smart IPTV TV avec Platinium IPTV." />
        <meta name="keywords" content="iptv gratuit, code iptv, m3u iptv, smart iptv tv" />
      </Helmet>

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
          <form ref={form} onSubmit={sendEmail} >
            {/* Full Name */}
            <div className="form__group field">
              <input
                required
                placeholder="Enter Your Full Name"
                className="form__field"
                type="text"
                value={formData.name}
                id="fullname"
                name="name"
                onChange={handleChange}
              />
              <label className="form__label" htmlFor="fullname">{t('ft.fullName')}</label>
            </div>

            {/* Email */}
            <div className="form__group field">
              <input
                required
                placeholder="Enter Your Email"
                className="form__field"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <label className="form__label" htmlFor="email">{t('ft.email')}</label>
            </div>

            {/* Phone */}
            <div className="form__group field">
              <input
                required
                placeholder="Enter Your Phone Number"
                className="form__field"
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
              <label className="form__label" htmlFor="phone">{t('ft.phone')}</label>
            </div>

            {/* Country */}
            <div className="form__group field">
              <input
                required
                placeholder="Enter Your Country"
                className="form__field"
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
              />
              <label className="form__label" htmlFor="country">{t('ft.country')}</label>
            </div>

            {/* MAC Address */}
            <div className="form__group field">
              <input
                required
                placeholder="70:b1:3d:33:c7:2a"
                className="form__field"
                type="text"
                name="macAddress"
                value={formData.macAddress}
                onChange={handleChange}
              />
              <label className="form__label" htmlFor="macAddress">{t('ft.macAddress')}</label>
            </div>

            {/* Message */}
            <div className="form__group field">
              <textarea
                required
                placeholder="Enter Your Message"
                className="form__field"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <label className="form__label" htmlFor="message">{t('ft.message')}</label>
            </div>

            {/* Radio Buttons - Adult Option */}
            <div className="radio-button-container">
              <div className="radio-button grid">
                <label className="text-white text-lg mr-10">{t('ft.optionAdult')}</label>
                <input type="radio" value="oui" className="radio-button__input" id="yesOption" name="adult_option" />
                <label className="radio-button__label" htmlFor="yesOption">
                  <span className="radio-button__custom"></span>
                  {t('ft.yes')}
                </label>
              </div>
              <div className="radio-button">
                <input type="radio" value="no" className="radio-button__input" id="noOption" name="adult_option" />
                <label className="radio-button__label" htmlFor="noOption">
                  <span className="radio-button__custom"></span>
                  {t('ft.no')}
                </label>
              </div>
            </div>
 
            {/* Submit Button */}
            <div className="flex items-center justify-center h-20">
              <div className="relative group">
                <button
                  type="submit"
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

          {/* Show success message if email is sent */}
          {emailSent && (
            <p className="text-green-600 text-xl font-semibold mt-4">Email sent successfully!</p>
          )}
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

        {/* Internal SEO Links */}
        <div className="internal-links my-10 hidden">
                    <p>Discover more on our <Link to="/blog">IPTV Blog</Link>, where we share insights and updates about the latest in IPTV technology.</p>
                    <p>Learn about the variety of <Link to="/produits">IPTV packages</Link> we offer, tailored to fit every customer’s needs.</p>
                    <p>Need assistance? Visit our <Link to="/contact">contact page</Link> for support or inquiries.</p>
                </div>
                
                {/* External SEO Links */}
                <div className="external-links my-10 hidden">
                    <p>Stay informed with the latest IPTV news at <a href="https://www.guru99.com/best-iptv-services.html" target="_blank" rel="noopener noreferrer">IPTV News</a>.</p>
                    <p>Find out more about how <a href="https://www.paypal.com" target="_blank" rel="noopener noreferrer">PayPal</a> secures your online payments.</p>
                    <p>Find out more about how <a href="https://fr.wikipedia.org/wiki/T%C3%A9l%C3%A9vision_IP" target="_blank" rel="noopener noreferrer">PayPal</a> secures your online payments.</p>
                </div>
    </>
  );
};

export default FreeTrial;
