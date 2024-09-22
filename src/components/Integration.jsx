import React from 'react'
import { FaDownload, FaLaptop } from 'react-icons/fa'
import { PiMaskHappyFill } from 'react-icons/pi'

export default function Integration() {
  return (
    <>
        <section className="steps">
            <h1>Rendre l'intégration de votre abonnement plus facile</h1>
            <p>
                Avant de pouvoir profiter de votre Abonnement, suivez simplement trois étapes simples.
            </p>

            <div className="row">
                <div className="steps-col">
                <h3 className=' flex gap-3 items-center' style={{placeContent: "center"}}>
                    <FaLaptop /> Passer une commande
                </h3>
                <p>
                    Accédez à notre service IPTV premium en seulement quelques clics, vous offrant une expérience immédiate et de qualité exceptionnelle.
                </p>
                </div>
                <div className="steps-col">
                <h3 className=' flex gap-3 items-center' style={{placeContent: "center"}}>
                    <FaDownload /> Installation
                </h3>
                <p>
                    Pour optimiser votre expérience avec votre abonnement IPTV, téléchargez simplement l'application appropriée pour votre appareil depuis la boutique en ligne de votre choix.
                </p>
                </div>
                <div className="steps-col">
                <h3 className=' flex gap-3 items-center' style={{placeContent: "center"}}>
                    <PiMaskHappyFill /> AMUSEZ-VOUS
                </h3>
                <p>
                    Explorez un vaste catalogue de milliers de chaînes et de vidéos, et plongez dans une expérience TV plus diversifiée et de meilleure qualité dès maintenant.
                </p>
                </div>
            </div>
            </section>
        </>
  )
}
