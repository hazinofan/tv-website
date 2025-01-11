import React, { useEffect, useState } from "react";
import "./pricing.css";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos"; // Import AOS
import { useTranslation } from "react-i18next"; // Import useTranslation
import axios from "axios";

export default function PricingCards() {
  const [billingType, setBillingType] = useState("monthly"); // State to toggle between billing types
  const { t, i18n } = useTranslation();

  const trackButtonClick = async (buttonId) => {
    await axios.post("https://platinium-backend.onrender.com/api/button-click", { buttonId });
  };
  

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="font-roboto" data-aos="zoom-in" data-aos-delay="400">
      <div className="sm:flex sm:flex-col sm:align-center p-10">
        <div className="relative self-center bg-slate-200 rounded-lg p-0.5 flex">
          <button
            type="button"
            onClick={() => setBillingType("monthly")}
            className={`relative w-1/2 rounded-md py-2 text-sm font-medium whitespace-nowrap focus:outline-none sm:w-auto sm:px-8 ${
              billingType === "monthly"
                ? "bg-slate-50 text-slate-900"
                : "text-slate-500"
            }`}
          >
            STANDARD
          </button>
          <button
            type="button"
            onClick={() => setBillingType("yearly")}
            className={`ml-0.5 relative w-1/2 border rounded-md py-2 text-sm font-medium whitespace-nowrap focus:outline-none sm:w-auto sm:px-8 ${
              billingType === "yearly"
                ? "bg-slate-50 text-slate-900"
                : "text-slate-500"
            }`}
          >
            PREMIUM
          </button>
        </div>

        {/* Card container */}
        <div className="mt-12 space-y-3 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-4 sm:gap-6 md:max-w-7xl md:mx-auto xl:grid-cols-4">
          {billingType === "monthly" ? (
            <>
              {/* Monthly Pricing Cards */}
              <div className="border border-slate-200 rounded-lg shadow-sm divide-y divide-slate-200">
                <div className="p-6">
                  <h2 className="text-3xl leading-6 font-bold text-purple-600">
                    STANDARD
                  </h2>
                  <p className="mt-2 text-xl text-slate-700 leading-tight">
                    {t("pc.title")}
                  </p>
                  <p className="mt-10 text-2xl font-semibold text-black leading-tight">
                    {t("pc.1month")}
                  </p>
                  <p className="mt-5">
                    <span className="text-4xl font-bold text-slate-900 tracking-tighter">
                      20€{" "}
                    </span>
                    <span className="text-xl line-through font-bold text-red-600 tracking-tighter">
                      24€{" "}
                    </span>
                  </p>

                  {/* button buy  */}

                  <Link
                    to={
                      i18n.language === "en"
                        ? "/produits/standard-iptv-subscription-1-month"
                        : "/produits/abonnement-iptv-standard-1-mois"
                    }
                  >
                    <div
                      data-tooltip={
                        i18n.language === "en" ? "Price: -4€" : "Prix: -4€"
                      }
                      className="button"
                    >
                      <div className="button-wrapper">
                        <button
                          className="text"
                          onClick={() => trackButtonClick("standard-1-mois")}
                        >
                          COMMANDER
                        </button>
                        <span className="icon">
                          <BsCart2 />
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="pt-6 pb-8 px-6">
                  <h3 className="text-lg font-bold text-slate-900 tracking-wide uppercase">
                    {t("pc.included")}
                  </h3>
                  <ul className="mt-4 space-y-3">
                    <li className="flex space-x-3">NO BUFFERING</li>
                    <li className="flex space-x-3 items-center">
                      {" "}
                      <FaCheck className=" text-green-600 text-sm" />{" "}
                      <strong>+16500</strong> Channels{" "}
                    </li>
                    <li className="flex space-x-3 items-center">
                      {" "}
                      <FaCheck className=" text-green-600 text-sm" />{" "}
                      <strong>+40100</strong> Movies & Series{" "}
                    </li>
                    <li className="flex space-x-3 items-center">
                      {" "}
                      <FaCheck className=" text-green-600 text-sm" />{" "}
                      <strong>VOD, in Fr, En, and Ar...</strong>
                    </li>
                    <li
                      className="flex space-x-3 items-center"
                      style={{ gap: "20px" }}
                    >
                      {" "}
                      <FaCheck className=" text-green-600 text-lg" /> Smart
                      IPTV, MAG, Android, PC, Apple iOS
                    </li>
                    <li
                      className="flex space-x-3 items-center"
                      style={{ gap: "20px" }}
                    >
                      {" "}
                      <FaCheck className=" text-green-600 text-sm" /> Qualities
                      4K - FHD - HD - SD - H.265
                    </li>
                    <li
                      className="flex space-x-3 items-center"
                      style={{ gap: "20px" }}
                    >
                      {" "}
                      <FaCheck className=" text-green-600 text-sm" /> Compatible
                      with VPN
                    </li>
                    <li
                      className="flex space-x-3 items-center"
                      style={{ gap: "20px" }}
                    >
                      {" "}
                      <FaCheck className=" text-green-600 text-sm" /> 24/7
                      Support
                    </li>
                  </ul>
                </div>
              </div>
              <div className="border border-slate-200 rounded-lg shadow-sm divide-y divide-slate-200">
                <div className="p-6">
                  <h2 className="text-3xl leading-6 font-bold text-purple-600">
                    STANDARD
                  </h2>
                  <p className="mt-2 text-xl text-slate-700 leading-tight">
                    {t("pc.title")}
                  </p>
                  <p className="mt-10 text-2xl font-semibold text-black leading-tight">
                    {t("pc.3month")}
                  </p>
                  <p className="mt-5">
                    <span className="text-4xl font-bold text-slate-900 tracking-tighter">
                      28€{" "}
                    </span>
                    <span className="text-xl line-through font-bold text-red-600 tracking-tighter">
                      32€{" "}
                    </span>
                  </p>

                  {/* button buy  */}

                  <Link
                    to={
                      i18n.language === "en"
                        ? "/produits/standard-iptv-subscription-3-month"
                        : "/produits/abonnement-iptv-standard-3-mois"
                    }
                  >
                    <div
                      data-tooltip={
                        i18n.language === "en" ? "Price: -4€" : "Prix: -4€"
                      }
                      className="button"
                    >
                      <div className="button-wrapper">
                        <button className="text" onClick={() => trackButtonClick("standard_3mois")}>COMMANDER</button>
                        <span className="icon">
                          <BsCart2 />
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="pt-6 pb-8 px-6">
                  <h3 className="text-lg font-bold text-slate-900 tracking-wide uppercase">
                    {t("pc.included")}
                  </h3>
                  <ul className="mt-4 space-y-3">
                    <li className="flex space-x-3">NO BUFFERING</li>
                    <li className="flex space-x-3 items-center">
                      {" "}
                      <FaCheck className=" text-green-600 text-sm" />{" "}
                      <strong>+16500</strong> Channels{" "}
                    </li>
                    <li className="flex space-x-3 items-center">
                      {" "}
                      <FaCheck className=" text-green-600 text-sm" />{" "}
                      <strong>+40100</strong> Movies & Series{" "}
                    </li>
                    <li className="flex space-x-3 items-center">
                      {" "}
                      <FaCheck className=" text-green-600 text-sm" />{" "}
                      <strong>VOD, in Fr, En, and Ar...</strong>
                    </li>
                    <li
                      className="flex space-x-3 items-center"
                      style={{ gap: "20px" }}
                    >
                      {" "}
                      <FaCheck className=" text-green-600 text-lg" /> Smart
                      IPTV, MAG, Android, PC, Apple iOS
                    </li>
                    <li
                      className="flex space-x-3 items-center"
                      style={{ gap: "20px" }}
                    >
                      {" "}
                      <FaCheck className=" text-green-600 text-sm" /> Qualities
                      4K - FHD - HD - SD - H.265
                    </li>
                    <li
                      className="flex space-x-3 items-center"
                      style={{ gap: "20px" }}
                    >
                      {" "}
                      <FaCheck className=" text-green-600 text-sm" /> Compatible
                      with VPN
                    </li>
                    <li
                      className="flex space-x-3 items-center"
                      style={{ gap: "20px" }}
                    >
                      {" "}
                      <FaCheck className=" text-green-600 text-sm" /> 24/7
                      Support
                    </li>
                  </ul>
                </div>
              </div>
              <div className="border border-slate-200 rounded-lg shadow-sm divide-y divide-slate-200">
                <div className="p-6">
                  <h2 className="text-3xl leading-6 font-bold text-purple-600">
                    STANDARD
                  </h2>
                  <p className="mt-2 text-xl text-slate-700 leading-tight">
                    {t("pc.title")}
                  </p>
                  <p className="mt-10 text-2xl font-semibold text-black leading-tight">
                    {t("pc.6month")}
                  </p>
                  <p className="mt-5">
                    <span className="text-4xl font-bold text-slate-900 tracking-tighter">
                      40€{" "}
                    </span>
                    <span className="text-xl line-through font-bold text-red-600 tracking-tighter">
                      45€{" "}
                    </span>
                  </p>

                  {/* button buy  */}

                  <Link
                    to={
                      i18n.language === "en"
                        ? "/produits/standard-iptv-subscription-6-month"
                        : "/produits/abonnement-iptv-standard-6-mois"
                    }
                  >
                    <div
                      data-tooltip={
                        i18n.language === "en" ? "Price: -5€" : "Prix: -5€"
                      }
                      className="button"
                    >
                      <div className="button-wrapper">
                        <button className="text" onClick={() => trackButtonClick("standard_6_mois")}>COMMANDER</button>
                        <span className="icon">
                          <BsCart2 />
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="pt-6 pb-8 px-6">
                  <h3 className="text-lg font-bold text-slate-900 tracking-wide uppercase">
                    {t("pc.included")}
                  </h3>
                  <ul className="mt-4 space-y-3">
                    <li className="flex space-x-3">NO BUFFERING</li>
                    <li className="flex space-x-3 items-center">
                      {" "}
                      <FaCheck className=" text-green-600 text-sm" />{" "}
                      <strong>+16500</strong> Channels{" "}
                    </li>
                    <li className="flex space-x-3 items-center">
                      {" "}
                      <FaCheck className=" text-green-600 text-sm" />{" "}
                      <strong>+40100</strong> Movies & Series{" "}
                    </li>
                    <li className="flex space-x-3 items-center">
                      {" "}
                      <FaCheck className=" text-green-600 text-sm" />{" "}
                      <strong>VOD, in Fr, En, and Ar...</strong>
                    </li>
                    <li
                      className="flex space-x-3 items-center"
                      style={{ gap: "20px" }}
                    >
                      {" "}
                      <FaCheck className=" text-green-600 text-lg" /> Smart
                      IPTV, MAG, Android, PC, Apple iOS
                    </li>
                    <li
                      className="flex space-x-3 items-center"
                      style={{ gap: "20px" }}
                    >
                      {" "}
                      <FaCheck className=" text-green-600 text-sm" /> Qualities
                      4K - FHD - HD - SD - H.265
                    </li>
                    <li
                      className="flex space-x-3 items-center"
                      style={{ gap: "20px" }}
                    >
                      {" "}
                      <FaCheck className=" text-green-600 text-sm" /> Compatible
                      with VPN
                    </li>
                    <li
                      className="flex space-x-3 items-center"
                      style={{ gap: "20px" }}
                    >
                      {" "}
                      <FaCheck className=" text-green-600 text-sm" /> 24/7
                      Support
                    </li>
                  </ul>
                </div>
              </div>
              <div className="border border-slate-200 rounded-lg shadow-sm divide-y divide-slate-200">
                <div className="p-6">
                  <h2 className="text-3xl leading-6 font-bold text-purple-600">
                    STANDARD
                  </h2>
                  <p className="mt-2 text-xl text-slate-700 leading-tight">
                    {t("pc.title")}
                  </p>
                  <p className="mt-10 text-2xl font-semibold text-black leading-tight">
                    {t("pc.12month")}
                  </p>
                  <p className="mt-5">
                    <span className="text-4xl font-bold text-slate-900 tracking-tighter">
                      55€{" "}
                    </span>
                    <span className="text-xl line-through font-bold text-red-600 tracking-tighter">
                      65€{" "}
                    </span>
                  </p>

                  {/* button buy  */}

                  <Link
                    to={
                      i18n.language === "en"
                        ? "/produits/standard-iptv-subscription-12-month"
                        : "/produits/abonnement-iptv-standard-12-mois"
                    }
                  >
                    <div
                      data-tooltip={
                        i18n.language === "en" ? "Price: -10€" : "Prix: -10€"
                      }
                      className="button"
                    >
                      <div className="button-wrapper">
                        <button className="text" onClick={() => trackButtonClick("standard_12_mois")}>COMMANDER</button>
                        <span className="icon">
                          <BsCart2 />
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="pt-6 pb-8 px-6">
                  <h3 className="text-lg font-bold text-slate-900 tracking-wide uppercase">
                    {t("pc.included")}
                  </h3>
                  <ul className="mt-4 space-y-3">
                    <li className="flex space-x-3">NO BUFFERING</li>
                    <li className="flex space-x-3 items-center">
                      {" "}
                      <FaCheck className=" text-green-600 text-sm" />{" "}
                      <strong>+16500</strong> Channels{" "}
                    </li>
                    <li className="flex space-x-3 items-center">
                      {" "}
                      <FaCheck className=" text-green-600 text-sm" />{" "}
                      <strong>+40100</strong> Movies & Series{" "}
                    </li>
                    <li className="flex space-x-3 items-center">
                      {" "}
                      <FaCheck className=" text-green-600 text-sm" />{" "}
                      <strong>VOD, in Fr, En, and Ar...</strong>
                    </li>
                    <li
                      className="flex space-x-3 items-center"
                      style={{ gap: "20px" }}
                    >
                      {" "}
                      <FaCheck className=" text-green-600 text-lg" /> Smart
                      IPTV, MAG, Android, PC, Apple iOS
                    </li>
                    <li
                      className="flex space-x-3 items-center"
                      style={{ gap: "20px" }}
                    >
                      {" "}
                      <FaCheck className=" text-green-600 text-sm" /> Qualities
                      4K - FHD - HD - SD - H.265
                    </li>
                    <li
                      className="flex space-x-3 items-center"
                      style={{ gap: "20px" }}
                    >
                      {" "}
                      <FaCheck className=" text-green-600 text-sm" /> Compatible
                      with VPN
                    </li>
                    <li
                      className="flex space-x-3 items-center"
                      style={{ gap: "20px" }}
                    >
                      {" "}
                      <FaCheck className=" text-green-600 text-sm" /> 24/7
                      Support
                    </li>
                  </ul>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Yearly Pricing Cards */}
              <div className="border border-slate-200 rounded-lg shadow-sm divide-y divide-slate-200">
                <div className="p-6">
                  <h2 className="text-3xl leading-6 font-bold text-yellow-600">
                    PREMIUM
                  </h2>
                  <p className="mt-2 text-xl text-slate-700 leading-tight">
                    {t("pc.title")}
                  </p>
                  <p className="mt-10 text-2xl font-semibold text-black leading-tight">
                    {t("pc.1month")}
                  </p>
                  <p className="mt-5">
                    <span className="text-4xl font-bold text-slate-900 tracking-tighter">
                      25€{" "}
                    </span>
                    <span className="text-xl line-through font-bold text-red-600 tracking-tighter">
                      30€{" "}
                    </span>
                  </p>

                  {/* button buy  */}

                  <Link
                    to={
                      i18n.language === "en"
                        ? "/produits/premium-iptv-subscription-1-months"
                        : "/produits/abonnement-iptv-premium-1-mois"
                    }
                  >
                    <div
                      data-tooltip={
                        i18n.language === "en" ? "Price: -5€" : "Prix: -5€"
                      }
                      className="button"
                    >
                      <div className="button-wrapper">
                        <button className="text" onClick={() => trackButtonClick("premium_1_mois")}>COMMANDER</button>
                        <span className="icon">
                          <BsCart2 />
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="pt-6 pb-8 px-6">
                  <h3 className="text-lg font-bold text-slate-900 tracking-wide uppercase">
                    {t("pc.included")}
                  </h3>
                  <ul className="mt-4 space-y-3">
                    <li className="flex space-x-3">NO BUFFERING</li>
                    <li className="flex space-x-3 items-center">
                      {" "}
                      <FaCheck className=" text-green-600 text-sm" />{" "}
                      <strong>+16500</strong> Channels{" "}
                    </li>
                    <li className="flex space-x-3 items-center">
                      {" "}
                      <FaCheck className=" text-green-600 text-sm" />{" "}
                      <strong>+40100</strong> Movies & Series{" "}
                    </li>
                    <li className="flex space-x-3 items-center">
                      {" "}
                      <FaCheck className=" text-green-600 text-sm" />{" "}
                      <strong>VOD, in Fr, En, and Ar...</strong>
                    </li>
                    <li
                      className="flex space-x-3 items-center"
                      style={{ gap: "20px" }}
                    >
                      {" "}
                      <FaCheck className=" text-green-600 text-lg" /> Smart
                      IPTV, MAG, Android, PC, Apple iOS
                    </li>
                    <li
                      className="flex space-x-3 items-center"
                      style={{ gap: "20px" }}
                    >
                      {" "}
                      <FaCheck className=" text-green-600 text-sm" /> Qualities
                      4K - FHD - HD - SD - H.265
                    </li>
                    <li
                      className="flex space-x-3 items-center"
                      style={{ gap: "20px" }}
                    >
                      {" "}
                      <FaCheck className=" text-green-600 text-sm" /> Compatible
                      with VPN
                    </li>
                    <li
                      className="flex space-x-3 items-center"
                      style={{ gap: "20px" }}
                    >
                      {" "}
                      <FaCheck className=" text-green-600 text-sm" /> 24/7
                      Support
                    </li>
                  </ul>
                </div>
              </div>
              <div className="border border-slate-200 rounded-lg shadow-sm divide-y divide-slate-200">
                <div className="p-6">
                  <h2 className="text-3xl leading-6 font-bold text-yellow-600">
                    PREMIUM
                  </h2>
                  <p className="mt-2 text-xl text-slate-700 leading-tight">
                    {t("pc.title")}
                  </p>
                  <p className="mt-10 text-2xl font-semibold text-black leading-tight">
                    {t("pc.3month")}
                  </p>
                  <p className="mt-5">
                    <span className="text-4xl font-bold text-slate-900 tracking-tighter">
                      35€{" "}
                    </span>
                    <span className="text-xl line-through font-bold text-red-600 tracking-tighter">
                      39€{" "}
                    </span>
                  </p>

                  {/* button buy  */}

                  <Link
                    to={
                      i18n.language === "en"
                        ? "/produits/premium-iptv-subscription-3-months"
                        : "/produits/abonnement-iptv-premium-3-mois"
                    }
                  >
                    <div
                      data-tooltip={
                        i18n.language === "en" ? "Price: -4€" : "Prix: -4€"
                      }
                      className="button"
                    >
                      <div className="button-wrapper">
                        <button className="text" onClick={() => trackButtonClick("premium_1_mois")}>COMMANDER</button>
                        <span className="icon">
                          <BsCart2 />
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="pt-6 pb-8 px-6">
                  <h3 className="text-lg font-bold text-slate-900 tracking-wide uppercase">
                    {t("pc.included")}
                  </h3>
                  <ul className="mt-4 space-y-3">
                    <li className="flex space-x-3">NO BUFFERING</li>
                    <li className="flex space-x-3 items-center">
                      {" "}
                      <FaCheck className=" text-green-600 text-sm" />{" "}
                      <strong>+16500</strong> Channels{" "}
                    </li>
                    <li className="flex space-x-3 items-center">
                      {" "}
                      <FaCheck className=" text-green-600 text-sm" />{" "}
                      <strong>+40100</strong> Movies & Series{" "}
                    </li>
                    <li className="flex space-x-3 items-center">
                      {" "}
                      <FaCheck className=" text-green-600 text-sm" />{" "}
                      <strong>VOD, in Fr, En, and Ar...</strong>
                    </li>
                    <li
                      className="flex space-x-3 items-center"
                      style={{ gap: "20px" }}
                    >
                      {" "}
                      <FaCheck className=" text-green-600 text-lg" /> Smart
                      IPTV, MAG, Android, PC, Apple iOS
                    </li>
                    <li
                      className="flex space-x-3 items-center"
                      style={{ gap: "20px" }}
                    >
                      {" "}
                      <FaCheck className=" text-green-600 text-sm" /> Qualities
                      4K - FHD - HD - SD - H.265
                    </li>
                    <li
                      className="flex space-x-3 items-center"
                      style={{ gap: "20px" }}
                    >
                      {" "}
                      <FaCheck className=" text-green-600 text-sm" /> Compatible
                      with VPN
                    </li>
                    <li
                      className="flex space-x-3 items-center"
                      style={{ gap: "20px" }}
                    >
                      {" "}
                      <FaCheck className=" text-green-600 text-sm" /> 24/7
                      Support
                    </li>
                  </ul>
                </div>
              </div>
              <div className="border border-slate-200 rounded-lg shadow-sm divide-y divide-slate-200">
                <div className="p-6">
                  <h2 className="text-3xl leading-6 font-bold text-yellow-600">
                    PREMIUM
                  </h2>
                  <p className="mt-2 text-xl text-slate-700 leading-tight">
                    {t("pc.title")}
                  </p>
                  <p className="mt-10 text-2xl font-semibold text-black leading-tight">
                    {t("pc.6month")}
                  </p>
                  <p className="mt-5">
                    <span className="text-4xl font-bold text-slate-900 tracking-tighter">
                      45€{" "}
                    </span>
                    <span className="text-xl line-through font-bold text-red-600 tracking-tighter">
                      52€{" "}
                    </span>
                  </p>

                  {/* button buy  */}

                  <Link
                    to={
                      i18n.language === "en"
                        ? "/produits/premium-iptv-subscription-6-months"
                        : "/produits/abonnement-iptv-premium-6-mois"
                    }
                  >
                    <div
                      data-tooltip={
                        i18n.language === "en" ? "Price: -7€" : "Prix: -7€"
                      }
                      className="button"
                    >
                      <div className="button-wrapper">
                        <button className="text" onClick={() => trackButtonClick("premium_6_mois")}>COMMANDER</button>
                        <span className="icon">
                          <BsCart2 />
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="pt-6 pb-8 px-6">
                  <h3 className="text-lg font-bold text-slate-900 tracking-wide uppercase">
                    {t("pc.included")}
                  </h3>
                  <ul className="mt-4 space-y-3">
                    <li className="flex space-x-3">NO BUFFERING</li>
                    <li className="flex space-x-3 items-center">
                      {" "}
                      <FaCheck className=" text-green-600 text-sm" />{" "}
                      <strong>+16500</strong> Channels{" "}
                    </li>
                    <li className="flex space-x-3 items-center">
                      {" "}
                      <FaCheck className=" text-green-600 text-sm" />{" "}
                      <strong>+40100</strong> Movies & Series{" "}
                    </li>
                    <li className="flex space-x-3 items-center">
                      {" "}
                      <FaCheck className=" text-green-600 text-sm" />{" "}
                      <strong>VOD, in Fr, En, and Ar...</strong>
                    </li>
                    <li
                      className="flex space-x-3 items-center"
                      style={{ gap: "20px" }}
                    >
                      {" "}
                      <FaCheck className=" text-green-600 text-lg" /> Smart
                      IPTV, MAG, Android, PC, Apple iOS
                    </li>
                    <li
                      className="flex space-x-3 items-center"
                      style={{ gap: "20px" }}
                    >
                      {" "}
                      <FaCheck className=" text-green-600 text-sm" /> Qualities
                      4K - FHD - HD - SD - H.265
                    </li>
                    <li
                      className="flex space-x-3 items-center"
                      style={{ gap: "20px" }}
                    >
                      {" "}
                      <FaCheck className=" text-green-600 text-sm" /> Compatible
                      with VPN
                    </li>
                    <li
                      className="flex space-x-3 items-center"
                      style={{ gap: "20px" }}
                    >
                      {" "}
                      <FaCheck className=" text-green-600 text-sm" /> 24/7
                      Support
                    </li>
                  </ul>
                </div>
              </div>
              <div className="border border-slate-200 rounded-lg shadow-sm divide-y divide-slate-200">
                <div className="p-6">
                  <h2 className="text-3xl leading-6 font-bold text-yellow-600">
                    PREMIUM
                  </h2>
                  <p className="mt-2 text-xl text-slate-700 leading-tight">
                    {t("pc.title")}
                  </p>
                  <p className="mt-10 text-2xl font-semibold text-black leading-tight">
                    {t("pc.12month")}
                  </p>
                  <p className="mt-5">
                    <span className="text-4xl font-bold text-slate-900 tracking-tighter">
                      60€{" "}
                    </span>
                    <span className="text-xl line-through font-bold text-red-600 tracking-tighter">
                      70€{" "}
                    </span>
                  </p>

                  {/* button buy  */}

                  <Link
                    to={
                      i18n.language === "en"
                        ? "/produits/premium-iptv-subscription-12-months"
                        : "/produits/abonnement-iptv-premium-12-mois"
                    }
                  >
                    <div
                      data-tooltip={
                        i18n.language === "en" ? "Price: -10€" : "Prix: -10€"
                      }
                      className="button"
                    >
                      <div className="button-wrapper">
                        <button className="text" onClick={() => trackButtonClick("premium_12_mois")}>COMMANDER</button>
                        <span className="icon">
                          <BsCart2 />
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="pt-6 pb-8 px-6">
                  <h3 className="text-lg font-bold text-slate-900 tracking-wide uppercase">
                    {t("pc.included")}
                  </h3>
                  <ul className="mt-4 space-y-3">
                    <li className="flex space-x-3">NO BUFFERING</li>
                    <li className="flex space-x-3 items-center">
                      {" "}
                      <FaCheck className=" text-green-600 text-sm" />{" "}
                      <strong>+16500</strong> Channels{" "}
                    </li>
                    <li className="flex space-x-3 items-center">
                      {" "}
                      <FaCheck className=" text-green-600 text-sm" />{" "}
                      <strong>+40100</strong> Movies & Series{" "}
                    </li>
                    <li className="flex space-x-3 items-center">
                      {" "}
                      <FaCheck className=" text-green-600 text-sm" />{" "}
                      <strong>VOD, in Fr, En, and Ar...</strong>
                    </li>
                    <li
                      className="flex space-x-3 items-center"
                      style={{ gap: "20px" }}
                    >
                      {" "}
                      <FaCheck className=" text-green-600 text-lg" /> Smart
                      IPTV, MAG, Android, PC, Apple iOS
                    </li>
                    <li
                      className="flex space-x-3 items-center"
                      style={{ gap: "20px" }}
                    >
                      {" "}
                      <FaCheck className=" text-green-600 text-sm" /> Qualities
                      4K - FHD - HD - SD - H.265
                    </li>
                    <li
                      className="flex space-x-3 items-center"
                      style={{ gap: "20px" }}
                    >
                      {" "}
                      <FaCheck className=" text-green-600 text-sm" /> Compatible
                      with VPN
                    </li>
                    <li
                      className="flex space-x-3 items-center"
                      style={{ gap: "20px" }}
                    >
                      {" "}
                      <FaCheck className=" text-green-600 text-sm" /> 24/7
                      Support
                    </li>
                  </ul>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
