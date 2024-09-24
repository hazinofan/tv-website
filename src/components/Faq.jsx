import React, { useState } from 'react';

export default function Faq() {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleAnswer = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const faqs = [
    { 
      question: "Comment passer une commande ?", 
      answer: "Vous pouvez passer une commande en vous rendant sur notre site web, en choisissant votre abonnement et en suivant les instructions de paiement." 
    },
    { 
      question: "Que comprend notre forfait ?", 
      answer: "Lorsque vous vous inscrivez à PLATINIUM IPTV, vous recevez des identifiants de connexion au serveur IPTV ainsi que des instructions détaillées pour le configurer sur votre appareil." 
    },
    { 
      question: "Mes informations personnelles sont-elles sécurisées ?", 
      answer: "Nous sommes engagés à protéger votre vie privée et votre sécurité. Nos mesures de sécurité robustes garantissent la protection de vos informations personnelles et de paiement. Consultez notre politique de confidentialité pour plus de détails." 
    },
    { 
      question: "Comment accéder aux chaînes FR ?", 
      answer: "Pour utiliser FR CHANNELS, vous avez besoin d'une connexion Internet fiable et d'un appareil compatible (boîtier décodeur, smart TV, ordinateur ou mobile). Après avoir souscrit à un forfait, vous pouvez profiter de vos chaînes et émissions préférées." 
    },
    { 
      question: "Quels modes de paiement sont acceptés ?", 
      answer: "PLATINIUM IPTV accepte plusieurs méthodes de paiement, y compris les cartes de crédit, PayPal et les cryptomonnaies comme le Bitcoin." 
    },
    { 
      question: "Quelle est la politique de remboursement ?", 
      answer: "PLATINIUM IPTV offre une garantie de remboursement de 7 jours. Si vous n'êtes pas satisfait du service, vous pouvez demander un remboursement dans les 7 jours suivant votre abonnement." 
    },
    { 
      question: "Comment obtenir un essai gratuit ?", 
      answer: "Pour essayer notre service IPTV gratuitement, remplissez simplement le formulaire sur notre page Essai Gratuit. Vous recevrez vos codes d'accès dans les 5 à 10 minutes !" 
    },
    { 
      question: "Puis-je annuler mon abonnement à tout moment ?", 
      answer: "Oui, vous avez la liberté d'annuler votre abonnement à tout moment." 
    }
  ];

  return (
    <div className="">
      <section className="max-w-5xl mx-auto py-10 sm:py-20">
        <div className="flex items-center justify-center flex-col gap-y-2 py-5">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Foire Aux Questions</h2>
          <p className="text-lg font-medium text-slate-700/70">Questions liées à nos services IPTV</p>
        </div>
        <div className="w-full px-7 md:px-10 xl:px-2 py-4">
          <div className="mx-auto w-full max-w-5xl border border-slate-400/20 rounded-lg bg-white">
            {faqs.map((faq, index) => (
              <div className="border-b border-[#0A071B]/10" key={index}>
                <button 
                  className="question-btn flex w-full items-start gap-x-5 justify-between rounded-lg text-left text-lg font-bold text-slate-800 focus:outline-none p-5" 
                  onClick={() => toggleAnswer(index)}
                >
                  <span>{faq.question}</span>
                  <svg 
                    stroke="currentColor" 
                    fill="currentColor" 
                    strokeWidth="0" 
                    viewBox="0 0 24 24" 
                    className={`mt-1.5 md:mt-0 flex-shrink-0 h-5 w-5 text-[#5B5675] ${openQuestion === index ? 'rotate-180' : ''}`} 
                    height="1em" 
                    width="1em" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
                  </svg>
                </button>
                <div 
                  className="answer pt-2 pb-5 px-5 text-sm lg:text-base text-[#343E3A] font-medium" 
                  style={{ display: openQuestion === index ? 'block' : 'none' }}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
