import React, { useEffect } from 'react';
import steps from '../assets/steps.png';
import '../index.css';
import { MdSubscriptions } from 'react-icons/md';
import { RiSecurePaymentLine } from 'react-icons/ri';
import { BiSolidHappyBeaming } from 'react-icons/bi';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS
import { useTranslation } from 'react-i18next'; // Import useTranslation hook from i18next

const Steps = () => {
  const { t } = useTranslation(); // Initialize the translation hook

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="pt-40 overflow-hidden" data-aos="fade-right" data-aos-delay="400">
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center -mx-5">
            <div className="w-full lg:w-1/2 px-5 mb-20 lg:mb-0">
              <div className="max-w-lg"> {/* Adjusted max width */}
                <span className="font-bold text-purple-600 text-2xl">{t('steps.title')}</span>
                <img src={steps} alt={t('steps.imageAlt')} className="w-full h-auto max-h-[800px]" /> {/* Adjust width and max height */}
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-5">
              <ul>
                <li className="flex pb-10 mb-8 border-b border-gray-200 dark:border-gray-700 ml-6">
                  <div className="mr-8">
                    <span className="flex justify-center items-center w-14 h-14 bg-purple-900 text-lg font-bold rounded-full text-white">
                      <MdSubscriptions />
                    </span>
                  </div>
                  <div className="max-w-xs">
                    <h3 className="mb-2 text-xl font-bold text-orange-800">{t('steps.step1Title')}</h3>
                    <p className="text-lg text-gray-500 dark:text-black">
                      {t('steps.step1Description')}
                    </p>
                  </div>
                </li>
                <li className="flex pb-10 mb-8 border-b border-gray-200 dark:border-gray-700">
                  <div className="mr-8">
                    <span className="flex justify-center items-center w-14 h-14 bg-purple-900 text-lg font-bold rounded-full text-white">
                      <RiSecurePaymentLine />
                    </span>
                  </div>
                  <div className="max-w-xs">
                    <h3 className="mb-2 text-xl font-bold text-orange-800">{t('steps.step2Title')}</h3>
                    <p className="text-lg text-gray-500 dark:text-black">
                      {t('steps.step2Description')}
                    </p>
                  </div>
                </li>
                <li className="flex pb-10 border-b border-gray-200 dark:border-gray-700">
                  <div className="mr-8">
                    <span className="flex justify-center items-center w-14 h-14 bg-purple-900 text-lg font-bold rounded-full text-white">
                      <BiSolidHappyBeaming />
                    </span>
                  </div>
                  <div className="max-w-xs">
                    <h3 className="mb-2 text-xl font-bold text-orange-800">{t('steps.step3Title')}</h3>
                    <p className="text-lg text-gray-500 dark:text-black">
                      {t('steps.step3Description')}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
