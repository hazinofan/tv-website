import React from 'react';
import steps from '../assets/steps.png'
import '../index.css'
import { MdSubscriptions } from 'react-icons/md';
import { RiSecurePaymentLine } from 'react-icons/ri';
import { BiSolidHappyBeaming } from 'react-icons/bi';

const Steps = () => {
  return (
    <section className="pt-40 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center -mx-5">
            <div className="w-full lg:w-1/2 px-5 mb-20 lg:mb-0">
            <div className="max-w-lg"> {/* Adjusted max width */}
                <span className="font-bold text-purple-600 text-2xl"> 3 Étapes Faciles</span>
                <img src={steps} alt="Steps" className="w-full h-auto max-h-[800px]" /> {/* Adjust width and max height */}
                <button class="buttonn type1"></button>
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
                    <h3 className="mb-2 text-xl font-bold text-orange-800">Choisissez votre abonnement</h3>
                    <p className="text-lg text-gray-500 dark:text-black">
                    choisissez votre formule d'abonnement et téléchargez notre application sur votre appareil.
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
                    <h3 className="mb-2 text-xl font-bold text-orange-800">
                    Effectuer le paiement sécurisé</h3>
                    <p className="text-lg text-gray-500 dark:text-black">
                    procéder via votre carte bancaire ou votre compte PayPal. Attendez quelques minutes et recevez votre abonnement par email.
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
                    <h3 className="mb-2 text-xl font-bold text-orange-800">
                        Profitez-en maintenant
                    </h3>
                    <p className="text-lg text-gray-500 dark:text-black">
                    connectez-vous avec les informations d'identification de votre compte et vous aurez un accès instantané à des milliers de chaînes du monde entier.
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
