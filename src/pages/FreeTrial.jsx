import React from "react";
import '../index.css';

const FreeTrial = () => {
  return (
    <>
    <div className="py-12" style={{ textAlign: "-webkit-center" }}>
      <div className="form-container">
        <form>
          {/* Full Name */}
          <div className="form__group field">
            <input required placeholder="Enter Your Full Name" className="form__field" type="text" id="fullname" />
            <label className="form__label" htmlFor="fullname">Full Name: *</label>
          </div>

          {/* Email */}
          <div className="form__group field">
            <input required placeholder="Enter Your Email" className="form__field" type="email" id="email" />
            <label className="form__label" htmlFor="email">Email: *</label>
          </div>

          {/* Phone */}
          <div className="form__group field">
            <input required placeholder="Enter Your Phone Number" className="form__field" type="text" id="phone" />
            <label className="form__label" htmlFor="phone">Phone: *</label>
          </div>

          {/* Country Select */}
          <div className="form__group field">
            <select required className="form__field" id="country">
              <option value="" disabled selected>Enter Your Country</option>
              <option value="USA">USA</option>
              <option value="Canada">Canada</option>
              <option value="UK">UK</option>
              <option value="France">France</option>
              <option value="Germany">Germany</option>
              <option value="Other">Other</option>
            </select>
            <label className="form__label" htmlFor="country">Your Country: *</label>
          </div>

          {/* MAC Address */}
          <div className="form__group field">
            <input required placeholder="70:b1:3d:33:c7:2a" className="form__field" type="text" id="mac-address" />
            <label className="form__label" htmlFor="mac-address">MAC Address of your device [MAG]:</label>
          </div>

          {/* Message */}
          <div className="form__group field">
            <textarea required placeholder="Enter Your Message" className="form__field" id="message" rows="4"></textarea>
            <label className="form__label" htmlFor="message">Your Message: *</label>
          </div>

          {/* Radio Buttons - Adult Option */}
          <div className="radio-button-container">
            <div className="radio-button grid">
              <label className="text-white text-lg mr-10">OPTION ADULT:</label>
              <input type="radio" className="radio-button__input" id="oui" name="adult-option" />
              <label className="radio-button__label" htmlFor="oui">
                <span className="radio-button__custom"></span>
                Oui
              </label>
            </div>
            <div className="radio-button">
              <input type="radio" className="radio-button__input" id="non" name="adult-option" />
              <label className="radio-button__label" htmlFor="non">
                <span className="radio-button__custom"></span>
                Non
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-center h-20">
            <div className="relative group">
              <button
                className="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
              >
                <span
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                ></span>

                <span className="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
                  <div className="relative z-10 flex items-center space-x-2">
                    <span className="transition-all duration-500 group-hover:translate-x-1">
                      Envoyer
                    </span>
                    <svg
                      className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                      data-slot="icon"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </span>
              </button>
            </div>
          </div>

        </form>
      </div>
    </div>
    </>
  );
};

export default FreeTrial;
