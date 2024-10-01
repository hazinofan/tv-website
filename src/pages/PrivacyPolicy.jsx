import React from 'react';
import { Helmet } from 'react-helmet';

export default function PrivacyPolicy() {
  return (
    <>
    <Helmet>
        <title>Politique de Confidentialité - PLATINIUM IPTV</title>
        <meta
          name="description"
          content="Découvrez notre politique de confidentialité. Nous protégeons vos données personnelles et vous informons sur leur collecte et utilisation."
        />
        <meta
          name="keywords"
          content="Politique de confidentialité, protection des données, cookies, collecte d'informations, droits de l'utilisateur"
        />
        <meta property="og:title" content="Politique de Confidentialité - PLATINIUM IPTV" />
        <meta
          property="og:description"
          content="Apprenez comment nous collectons, utilisons et protégeons vos informations personnelles avec PLATINIUM IPTV."
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.platinium-iptv.com/privacy-policy" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Politique de Confidentialité - PLATINIUM IPTV" />
        <meta
          name="twitter:description"
          content="Protégez vos données personnelles. Consultez notre politique de confidentialité pour en savoir plus."
        />
      </Helmet>
      
    <div className="bg-gray-100 min-h-screen py-12 px-6 lg:px-24">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Politique de Confidentialité</h1>
        <p className="text-gray-600 mb-6">
          Nous accordons une grande importance à la protection de vos données personnelles. Cette politique de confidentialité a pour objectif de vous informer sur la manière dont nous collectons, utilisons, et protégeons vos informations.
        </p>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Collecte des informations</h2>
          <p className="text-gray-600 mb-4">
            Nous recueillons certaines informations lorsque vous visitez notre site, notamment votre nom, adresse e-mail, et autres informations nécessaires lors de l'inscription ou de l'achat de nos services.
          </p>
          <p className="text-gray-600">
            Les informations collectées incluent : les informations fournies volontairement par les utilisateurs (formulaires, commandes), ainsi que les données anonymes sur l'utilisation du site via des cookies.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Utilisation des informations</h2>
          <ul className="list-disc ml-6 text-gray-600">
            <li className="mb-2">Améliorer l'expérience utilisateur et nos services.</li>
            <li className="mb-2">Traiter vos commandes et gérer vos demandes.</li>
            <li className="mb-2">Vous envoyer des communications importantes ou marketing.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Protection des données</h2>
          <p className="text-gray-600 mb-4">
            Nous mettons en œuvre des mesures de sécurité pour protéger vos données personnelles contre tout accès non autorisé, altération ou divulgation.
          </p>
          <p className="text-gray-600">
            Cependant, veuillez noter qu'aucun système de transmission de données via internet n'est totalement sécurisé.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Cookies</h2>
          <p className="text-gray-600 mb-4">
            Nous utilisons des cookies pour améliorer l'expérience de navigation sur notre site. Les cookies sont de petits fichiers texte stockés sur votre appareil, permettant de vous reconnaître lors de futures visites.
          </p>
          <p className="text-gray-600">
            Vous avez la possibilité de désactiver les cookies via les paramètres de votre navigateur, bien que cela puisse affecter votre expérience utilisateur.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Partage des informations</h2>
          <p className="text-gray-600">
            Nous ne vendons ni ne partageons vos données personnelles avec des tiers, sauf dans les cas où la loi l'exige, ou lorsque cela est nécessaire pour fournir nos services (par exemple, pour le traitement des paiements).
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Droits de l'utilisateur</h2>
          <p className="text-gray-600 mb-4">
            Vous avez le droit d'accéder à vos données personnelles, de les modifier ou de demander leur suppression. Vous pouvez également vous opposer à l'utilisation de vos données à des fins marketing.
          </p>
          <p className="text-gray-600">
            Pour exercer ces droits, veuillez nous contacter via notre formulaire de contact.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Modifications de la politique</h2>
          <p className="text-gray-600">
            Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Toute modification sera publiée sur cette page. Nous vous encourageons à consulter régulièrement cette page pour rester informé de la manière dont nous protégeons vos informations.
          </p>
        </section>

        <div className="text-gray-600 text-sm mt-8">
          <p>
            Si vous avez des questions concernant notre politique de confidentialité, n'hésitez pas à nous contacter à l'adresse suivante :
          </p>
          <p>Email : <a href="mailto:support@platinium-iptv.com" className="text-purple-600 font-semibold underline">support@platinium-iptv.com</a></p>
        </div>
      </div>
    </div>
    </>
  );
}
