import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook from i18next
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS

export default function Faq() {
  const [openQuestion, setOpenQuestion] = useState(null);
  const { t } = useTranslation(); // Initialize the translation hook

  useEffect(() => {
    AOS.init();
  }, []);

  const toggleAnswer = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const faqs = [
    { question: t('faq.q1'), answer: t('faq.a1') },
    { question: t('faq.q2'), answer: t('faq.a2') },
    { question: t('faq.q3'), answer: t('faq.a3') },
    { question: t('faq.q4'), answer: t('faq.a4') },
    { question: t('faq.q5'), answer: t('faq.a5') },
    { question: t('faq.q6'), answer: t('faq.a6') },
    { question: t('faq.q7'), answer: t('faq.a7') },
    { question: t('faq.q8'), answer: t('faq.a8') },
  ];

  return (
    <div className="" data-aos="fade-right" data-aos-delay="800">
      <section className="max-w-5xl mx-auto py-10 sm:py-20">
        <div className="flex items-center justify-center flex-col gap-y-2 py-5">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">{t('faq.title')}</h2>
          <p className="text-lg font-medium text-slate-700/70">{t('faq.subtitle')}</p>
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