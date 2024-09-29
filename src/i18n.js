import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
            faq: {
                title: "Frequently Asked Questions",
                subtitle: "Questions related to our IPTV services",
                q1: "How to place an order?",
                a1: "You can place an order by visiting our website, selecting your subscription, and following the payment instructions.",
                q2: "What does our package include?",
                a2: "When you sign up for PLATINIUM IPTV, you receive IPTV server login credentials along with detailed instructions to configure it on your device.",
                q3: "Are my personal details secure?",
                a3: "We are committed to protecting your privacy and security. Our robust security measures ensure the protection of your personal and payment information. Please check our privacy policy for more details.",
                q4: "How can I access FR channels?",
                a4: "To use FR CHANNELS, you need a reliable internet connection and a compatible device (set-top box, smart TV, computer, or mobile). Once subscribed, you can enjoy your favorite channels and shows.",
                q5: "What payment methods are accepted?",
                a5: "PLATINIUM IPTV accepts multiple payment methods, including credit cards, PayPal, and cryptocurrencies like Bitcoin.",
                q6: "What is the refund policy?",
                a6: "PLATINIUM IPTV offers a 7-day money-back guarantee. If you are not satisfied with the service, you can request a refund within 7 days of your subscription.",
                q7: "How to get a free trial?",
                a7: "To try our IPTV service for free, simply fill out the form on our Free Trial page. You will receive your access codes within 5 to 10 minutes!",
                q8: "Can I cancel my subscription at any time?",
                a8: "Yes, you have the freedom to cancel your subscription at any time.",
              },
              ft: {
                    "title": "Form to be filled to benefit from the free 2-hour IPTV trial:",
                    "fullName": "Full Name: *",
                    "email": "Email: *",
                    "phone": "Phone Number: *",
                    "country": "Country: *",
                    "macAddress": "MAC Address of your device [MAG]:",
                    "message": "Your Message: *",
                    "optionAdult": "ADULT OPTION:",
                    "yes": "Yes",
                    "no": "No",
                    "send": "Send",
                    "guideTitle": "Installation Guide",
                    "guideDescription": "Platinium IPTV offers a free 24-hour IPTV trial with no obligations or payments required. You can test our server and explore all the channels, packages, and VOD we offer. Simply click the link to access our website.",
                    "activationProcedure": "Activation Procedure:",
                    "activationStep1": "Fill out the free IPTV subscription test form.",
                    "activationStep2": "Click send.",
                    "activationStep3": "The necessary activation information (credentials and m3u link) will be sent to you once generated. (Check your email after sending).",
                    "usefulInfo": "Useful Information:",
                    "macAddressInfo": "MAG Address: A unique series of numbers and letters (e.g., 1b:10:c8:d2:84:e4) identifying your device. You can find it in your TV settings or in your app.",
                    "note": "Note:",
                    "note1": "Demo accounts will be automatically suspended during major sports events (football, basketball, tennis, etc.).",
                    "note2": "Any request sent during the suspension will be delayed until the end of the events.",
                    "note3": "Forms that are not correctly filled or have missing information will not be processed.",
                    "contactInfo": "Contact Information:",
                    "contactNote": "Feel free to contact us for any additional information. Our teams are available 24/7."
                  },
              hero: {
                "title" : "best iptv service: Platinium IPTV amazing service",
                "discover": " Learn more ",
                "description" : "Experience premium entertainment with our top-notch  provider. We offer the perfekt selection of channels and content, ensuring a high-quality streaming experience for our customers. Join us for unparalleled service that brings your favorite shows, movies, and more right to your screen."
              },
              products:{
                "title" : "Product Details",
                "return" : "Return"
              },
              rembours:{
                "title" : "Refund Policy" ,
                "body1" : "At Platinum IPTV, we are committed to providing our customers with an exceptional streaming experience. If for any reason you are not completely satisfied with your subscription, we have a clear refund policy in place:",
                "body2": "Right of Withdrawal: You have the right to withdraw from your subscription within 14 days from the date of purchase. To exercise this right, please contact us by email at support@platinumiptv.com ",
                "condition": "Reimbursement Conditions",
                "cond1" : "To be eligible for a refund, your request must be made within 14 days of purchase.",
                "cond2" : "For your refund to be processed, you must provide proof of purchase (such as a receipt or order confirmation).",
                "title3" : "Processing Refunds",
                "trait1": "Once we receive your refund request, we will review it and notify you whether your refund has been approved or rejected.",
                "trait2": "If your request is approved, the refund will be processed, and a credit will automatically be applied to your original payment method within 7 days.",
                "exception": "Exceptions",
                "excep": "Subscriptions that have been used after the 14-day period are not eligible for a refund.",
                "assis": "Support",
                "assistext": "If you have any questions or concerns regarding our refund policy, please feel free to contact us at",
                "footer": "We appreciate your trust and are committed to providing you with the best service possible.",
                "button": "ADD TO CART"
              },
              prod: {
                "button": "ADD TO CART",
                "details": "MORE DETAILS"
              },
              pc : {
                "title" : "Adult channels list is not included.",
                "1month" : " 1 Month Subscription",
                "3month" : " 3 Month Subscription",
                "6month" : " 6 Month Subscription",
                "12month" : " 12 Month Subscription",
                "included" : "What is included"

              },
          home: {
            title: "DISCOVER THE EXCELLENCE OF OUR IPTV SUBSCRIPTION SERVICE",
            description: "Watch your favorite channels live with our IPTV platform. Our dedicated IPTV website also offers a user-friendly interface and intuitive navigation.",
            orderNow: "Order Now",
            freeTest: "Free Test",
          },
          integration: {
            title: "Make Your Subscription Integration Easier",
            description: "Before you can enjoy your Subscription, simply follow three easy steps.",
            order: "Place an Order",
            orderDescription: "Access our premium IPTV service in just a few clicks, giving you immediate access to an exceptional experience.",
            installation: "Installation",
            installationDescription: "To optimize your experience with your IPTV subscription, simply download the appropriate app for your device from the online store of your choice.",
            enjoy: "HAVE FUN",
            enjoyDescription: "Explore a vast catalog of thousands of channels and videos, and dive into a more diverse and higher-quality TV experience right now.",
          },
          eliteCard: {
            title: "Exclusive Offer: PLATINUM PACK",
            description: "The Platinum Pack includes all channels from Premium and Standard packs, with a 14-month duration plus 1 month free, totaling 15 months. This pack offers faster support and the ability to customize your channel list to your needs for a tailored experience.",
            included: "What's Included",
            accessPremiumFeatures: "Access to premium features",
            monthsOfIPTV: "15 months of IPTV Platinum",
            customizeChannelList: "Customize your channel list",
            limitedOffer: "Limited Time Offer",
            specialPromotion: "Special promotion",
            orderButton: "Order Now",
          },
          steps: {
            title: "3 Easy Steps",
            imageAlt: "Steps",
            step1Title: "Choose Your Subscription",
            step1Description: "Select your subscription plan and download our app on your device.",
            step2Title: "Make Secure Payment",
            step2Description: "Pay via your credit card or PayPal. Wait a few minutes and receive your subscription by email.",
            step3Title: "Enjoy Now",
            step3Description: "Log in with your account credentials and gain instant access to thousands of channels worldwide.",
          },
          card: {
            title: "Exclusive Plan",
            description: "Get access to exclusive content and channels tailored just for you.",
            button: "Subscribe Now",
          },
          services: "IPTV Services",
          freeTrial: "Free Trial",
          blogs: "Blogs",
          cart: "Cart",
          yourCart: "Your Cart",
          emptyCart: "Your Cart is empty",
          total: "Total: {{amount}}€",
          clearCart: "Clear Cart",
          proceedToCheckout: "Proceed to Checkout",
        }
      },
      fr: {
        translation: {
            faq: {
                title: "Foire Aux Questions",
                subtitle: "Questions liées à nos services IPTV",
                q1: "Comment passer une commande ?",
                a1: "Vous pouvez passer une commande en vous rendant sur notre site web, en choisissant votre abonnement et en suivant les instructions de paiement.",
                q2: "Que comprend notre forfait ?",
                a2: "Lorsque vous vous inscrivez à PLATINIUM IPTV, vous recevez des identifiants de connexion au serveur IPTV ainsi que des instructions détaillées pour le configurer sur votre appareil.",
                q3: "Mes informations personnelles sont-elles sécurisées ?",
                a3: "Nous sommes engagés à protéger votre vie privée et votre sécurité. Nos mesures de sécurité robustes garantissent la protection de vos informations personnelles et de paiement. Consultez notre politique de confidentialité pour plus de détails.",
                q4: "Comment accéder aux chaînes FR ?",
                a4: "Pour utiliser FR CHANNELS, vous avez besoin d'une connexion Internet fiable et d'un appareil compatible (boîtier décodeur, smart TV, ordinateur ou mobile). Après avoir souscrit à un forfait, vous pouvez profiter de vos chaînes et émissions préférées.",
                q5: "Quels modes de paiement sont acceptés ?",
                a5: "PLATINIUM IPTV accepte plusieurs méthodes de paiement, y compris les cartes de crédit, PayPal et les cryptomonnaies comme le Bitcoin.",
                q6: "Quelle est la politique de remboursement ?",
                a6: "PLATINIUM IPTV offre une garantie de remboursement de 7 jours. Si vous n'êtes pas satisfait du service, vous pouvez demander un remboursement dans les 7 jours suivant votre abonnement.",
                q7: "Comment obtenir un essai gratuit ?",
                a7: "Pour essayer notre service IPTV gratuitement, remplissez simplement le formulaire sur notre page Essai Gratuit. Vous recevrez vos codes d'accès dans les 5 à 10 minutes !",
                q8: "Puis-je annuler mon abonnement à tout moment ?",
                a8: "Oui, vous avez la liberté d'annuler votre abonnement à tout moment.",
              },
              ft: {
                  "title": "Formulaire à remplir pour bénéficier de l'essai IPTV gratuit de 2 heures :",
                  "fullName": "Nom Complet: *",
                  "email": "Email: *",
                  "phone": "Numéro de télephone: *",
                  "country": "Pays: *",
                  "macAddress": "Adresse MAC de votre appareil [MAG]:",
                  "message": "Votre Message: *",
                  "optionAdult": "OPTION ADULT:",
                  "yes": "Oui",
                  "no": "Non",
                  "send": "Envoyer",
                  "guideTitle": "Guide d'Installation",
                  "guideDescription": "Platinium IPTV propose un essai IPTV gratuit de 24 heures sans aucune obligation ni paiement requis. Vous pouvez tester notre serveur et explorer toutes les chaînes, forfaits et VOD que nous offrons. Cliquez simplement sur le lien pour accéder à notre site web.",
                  "activationProcedure": "Procédure d'Activation :",
                  "activationStep1": "Remplissez le formulaire de test de l'abonnement IPTV gratuit.",
                  "activationStep2": "Cliquez sur envoyer.",
                  "activationStep3": "Les informations d'activation nécessaires (identifiants et lien m3u) vous seront envoyées dès qu'elles seront générées. (Vérifiez votre email après l'envoi).",
                  "usefulInfo": "Informations Utiles :",
                  "macAddressInfo": "L'adresse MAG : une série unique de chiffres et de lettres (Exemple : 1b:10:c8:d2:84:e4) qui identifie votre appareil. Vous pouvez la trouver dans les paramètres de votre TV ou dans votre application.",
                  "note": "Remarque :",
                  "note1": "Les comptes de démonstration seront automatiquement suspendus pendant les grands événements sportifs (football, basket, tennis, etc.).",
                  "note2": "Toute demande envoyée pendant la suspension des tests sera retardée jusqu'à la fin des événements.",
                  "note3": "Les formulaires mal remplis ou avec des informations manquantes ne seront pas traités.",
                  "contactInfo": "Informations de Contact :",
                  "contactNote": "N'hésitez pas à nous contacter pour toute information complémentaire. Nos équipes sont disponibles 7 jours sur 7, 24 heures sur 24."
                },
              hero: {
                "title" : "meilleur service IPTV : service incroyable Platinium IPTV",
                "discover": " En savoir plus ",
                "description" : "Vivez un divertissement haut de gamme avec notre fournisseur de premier ordre. Nous offrons une sélection parfaite de chaînes et de contenus, garantissant une expérience de streaming de haute qualité à nos clients. Rejoignez-nous pour un service inégalé qui apporte vos émissions, films et bien plus encore préférés directement sur votre écran."
              },
              pc: {
                "title": "La liste des chaînes pour adultes n'est pas incluse.",
                "3month" : " 3 Mois d'abonnement",
                "1month" : " 1 Mois d'abonnement",
                "6month" : " 6 Mois d'abonnement",
                "12month" : " 12 Mois d'abonnement",
                "included" : "Ce qui est inclus"
              },
              rembours:{
                "title" : "Politique de Remboursement" ,
                "body1" : "Chez Platinum IPTV, nous nous engageons à fournir à nos clients une expérience de streaming exceptionnelle. Si, pour une raison quelconque, vous n'êtes pas entièrement satisfait de votre abonnement, nous avons mis en place une politique de remboursement claire :",
                "body2" : "Droit de Rétractation : Vous avez le droit de vous rétracter de votre abonnement dans un délai de 14 jours à compter de la date d'achat. Pour exercer ce droit, veuillez nous contacter par email à support@platinumiptv.com",
                "condition" : "Conditions de Remboursement",
                "cond1" : "Pour être éligible à un remboursement, votre demande doit être effectuée dans les 14 jours suivant l'achat.",
                "cond2" : "Pour que votre remboursement soit traité, vous devez fournir la preuve d'achat (comme un reçu ou une confirmation de commande).",
                "title3" : "Traitement des Remboursements",
                "trait1" : "Une fois que nous aurons reçu votre demande de remboursement, nous l'examinerons et vous informerons de l'approbation ou du rejet de votre remboursement.",
                "trait2": "Si votre demande est approuvée, le remboursement sera traité, et un crédit sera automatiquement appliqué à votre méthode de paiement d'origine dans un délai de 7 jours.",
                "exception" : "Exceptions",
                "excep" : "Les abonnements qui ont été utilisés après la période de 14 jours ne sont pas éligibles au remboursement.",
                "assis" : "Assistance ",
                "assistext" : "Si vous avez des questions ou des préoccupations concernant notre politique de remboursement, n'hésitez pas à nous contacter à",
                "footer" : "Nous apprécions votre confiance et nous nous engageons à vous offrir le meilleur service possible."?
                "button" : " AJOUTER AU PANIER"

              },
              products:{
                "title" : "Détails du produit",
                "return" : "Retourner"
              },
              prod: {
                "button" : " AJOUTER AU PANIER",
                "details" : "PLUS DE DETAILS"
              },
          home: {
            title: "DÉCOUVREZ L'EXCELLENCE DE NOTRE SERVICE D'ABONNEMENT IPTV",
            description: "Regardez vos chaînes préférées en temps réel avec notre plateforme IPTV. Notre site Internet dédié à l'IPTV propose également une interface conviviale et une navigation intuitive.",
            orderNow: "Commandez Maintenant",
            freeTest: "Test Gratuit",
          },
          integration: {
            title: "Rendre l'intégration de votre abonnement plus facile",
            description: "Avant de pouvoir profiter de votre Abonnement, suivez simplement trois étapes simples.",
            order: "Passer une commande",
            orderDescription: "Accédez à notre service IPTV premium en seulement quelques clics, vous offrant une expérience immédiate et de qualité exceptionnelle.",
            installation: "Installation",
            installationDescription: "Pour optimiser votre expérience avec votre abonnement IPTV, téléchargez simplement l'application appropriée pour votre appareil depuis la boutique en ligne de votre choix.",
            enjoy: "AMUSEZ-VOUS",
            enjoyDescription: "Explorez un vaste catalogue de milliers de chaînes et de vidéos, et plongez dans une expérience TV plus diversifiée et de meilleure qualité dès maintenant.",
          },
          eliteCard: {
            title: "Offre exclusive : PLATINIUM PACK",
            description: "Le pack Platinum inclut toutes les chaînes des packs Premium et Standard, avec une durée de 14 mois plus 1 mois offert, soit un total de 15 mois. Ce pack vous offre un support plus rapide et la possibilité de personnaliser vos listes de chaînes selon vos besoins pour une expérience sur-mesure.",
            included: "Ce qui est inclus",
            accessPremiumFeatures: "Accès aux fonctionnalités premium",
            monthsOfIPTV: "15 mois D'IPTV PLATINIUM",
            customizeChannelList: "Personnaliser vos listes de chaînes selon vos besoins",
            limitedOffer: "Offre à durée limitée",
            specialPromotion: "Special promotion",
            orderButton: "Commander",
          },
          steps: {
            title: "3 Étapes Faciles",
            imageAlt: "Étapes",
            step1Title: "Choisissez votre abonnement",
            step1Description: "Choisissez votre formule d'abonnement et téléchargez notre application sur votre appareil.",
            step2Title: "Effectuer le paiement sécurisé",
            step2Description: "Procédez via votre carte bancaire ou votre compte PayPal. Attendez quelques minutes et recevez votre abonnement par email.",
            step3Title: "Profitez-en maintenant",
            step3Description: "Connectez-vous avec les informations d'identification de votre compte et vous aurez un accès instantané à des milliers de chaînes du monde entier.",
          },
          card: {
            title: "Plan Exclusif",
            description: "Accédez à un contenu exclusif et à des chaînes adaptées juste pour vous.",
            button: "Abonnez-vous Maintenant",
          },
          services: "Services IPTV",
          freeTrial: "Test Gratuit",
          blogs: "Blogs",
          cart: "Panier",
          yourCart: "Votre Panier",
          emptyCart: "Votre Panier est vide",
          total: "Total: {{amount}}€",
          clearCart: "Vider le panier",
          proceedToCheckout: "Passer au paiement",
        }
      }
    },
    lng: "fr", // Default language
    fallbackLng: "en", // Fallback language
    interpolation: {
      escapeValue: false // React already safeguards against XSS
    }
  });

export default i18n;
