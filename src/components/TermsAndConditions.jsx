import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-center text-purple-600 mb-8">Termes et Conditions</h1>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Introduction</h2>
          <p className="text-gray-700 leading-7">
            Bienvenue sur Platinium IPTV. En accédant à ce site, vous acceptez d'être lié par les termes et conditions suivants. Ces conditions s'appliquent à tous les utilisateurs du site, y compris, sans s'y limiter, les visiteurs, clients et autres contributeurs de contenu.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Conditions d'utilisation</h2>
          <p className="text-gray-700 leading-7">
            En utilisant nos services, vous vous engagez à ne pas utiliser le contenu ou les services fournis par Platinium IPTV à des fins illégales ou non autorisées. Nous nous réservons le droit de suspendre ou de résilier votre accès à nos services en cas de violation de ces conditions.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Abonnement et Paiement</h2>
          <p className="text-gray-700 leading-7">
            Tous les abonnements à Platinium IPTV sont facturés selon le plan choisi lors de l'inscription. Les paiements doivent être effectués avant que l'accès au service ne soit activé. Les prix peuvent être modifiés à tout moment sans préavis.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Politique de Remboursement</h2>
          <p className="text-gray-700 leading-7">
            Nous proposons un essai gratuit pour permettre aux clients de tester notre service. Une fois qu'un abonnement payant a été activé, nous n'offrons pas de remboursement, sauf en cas de dysfonctionnement avéré de notre service.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Propriété Intellectuelle</h2>
          <p className="text-gray-700 leading-7">
            Tout le contenu présent sur ce site, y compris les images, textes, graphiques et logos, est la propriété de Platinium IPTV et est protégé par les lois sur la propriété intellectuelle. Toute utilisation non autorisée de ce contenu est strictement interdite.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Limitation de Responsabilité</h2>
          <p className="text-gray-700 leading-7">
            Platinium IPTV ne pourra être tenu responsable des interruptions temporaires de service ou de tout dommage causé par l'utilisation de notre plateforme. Nous nous efforçons de fournir un service de qualité, mais ne garantissons pas l'absence totale d'erreurs.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Modifications des Termes</h2>
          <p className="text-gray-700 leading-7">
            Platinium IPTV se réserve le droit de modifier ces termes à tout moment. Les utilisateurs seront informés des changements via notre site, et il est de votre responsabilité de consulter ces termes régulièrement.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Contactez-nous</h2>
          <p className="text-gray-700 leading-7">
            Si vous avez des questions concernant ces Termes et Conditions, vous pouvez nous contacter à tout moment via notre page de contact.
          </p>
        </section>

        <p className="text-gray-600 text-center mt-8">
          © {new Date().getFullYear()} Platinium IPTV. Tous droits réservés.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
