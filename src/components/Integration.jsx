import React, { useEffect } from 'react';
import { FaDownload, FaLaptop } from 'react-icons/fa';
import { PiMaskHappyFill } from 'react-icons/pi';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS

export default function Integration() {
  const { t } = useTranslation(); // Initialize translation hook

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <section className="steps" data-aos="fade-down" data-aos-delay="800">
        <h1>{t('integration.title')}</h1> {/* Use translation for title */}
        <p>
          {t('integration.description')} {/* Use translation for description */}
        </p>

        <div className="row">
          <div className="steps-col">
            <h3 className='flex gap-3 items-center' style={{ placeContent: "center" }}>
              <FaLaptop /> {t('integration.order')}
            </h3>
            <p>
              {t('integration.orderDescription')} {/* Use translation for order description */}
            </p>
          </div>
          <div className="steps-col">
            <h3 className='flex gap-3 items-center' style={{ placeContent: "center" }}>
              <FaDownload /> {t('integration.installation')}
            </h3>
            <p>
              {t('integration.installationDescription')} {/* Use translation for installation description */}
            </p>
          </div>
          <div className="steps-col">
            <h3 className='flex gap-3 items-center' style={{ placeContent: "center" }}>
              <PiMaskHappyFill /> {t('integration.enjoy')}
            </h3>
            <p>
              {t('integration.enjoyDescription')} {/* Use translation for enjoy description */}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
