import React from 'react';
import { IoHome } from 'react-icons/io5';
import { CiFileOn, CiImageOn } from 'react-icons/ci';
import { LuGamepad2 } from 'react-icons/lu';
import { HiOutlineBookOpen } from 'react-icons/hi';
import { FaLaptop, FaUser } from 'react-icons/fa';
import './navbar.scss';
import { SiMicrosoftvisio } from 'react-icons/si';
import { Link } from 'react-router-dom'; // Make sure Link is imported

const Navbar = () => {
  return (
    <>
      <ul className="horizontal-navbar">
        <li>
          <Link to="/"> 
            <IoHome className='icon_home text-white'/>
            <span className=' text-white'> Accueil </span>
          </Link>
        </li>
        <li>
          <Link to="/produits">
            <SiMicrosoftvisio className='icon_home text-white'/>
            <span className=' text-white'> Services IPTV </span>
          </Link>
        </li>
        <li>
          <Link to="/test-gratuit" className='icon_home text-white'>
            <FaLaptop className=' text-white'/>
            <span className=' text-white text-lg'> Test Gratuit </span>
          </Link>
        </li>
        <li>
          <Link to="#">
            <LuGamepad2 />
            <span>Games</span>
          </Link>
        </li>
        <li>
          <Link to="#">
            <HiOutlineBookOpen />
            <span>Books</span>
          </Link>
        </li>
        <li>
          <Link to="#">
            <FaUser />
            <span>Profile</span>
          </Link>
        </li>
      </ul>

      <details>
        <summary>
          How it works
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="192"
            height="192"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <rect width="256" height="256" fill="none"></rect>
            <circle
              cx="128"
              cy="128"
              r="96"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            ></circle>
            <circle cx="128" cy="180" r="12"></circle>
            <path
              d="M127.9995,144.0045v-8a28,28,0,1,0-28-28"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            ></path>
          </svg>
        </summary>
        <div>
          <p>
            The scaling effect you see when you open this <code>&lt;details&gt;</code>{' '}
            element is created by using a keyframe animation.
          </p>
          <pre>
            <code>
              {`@keyframes scale {
                0% {
                  transform: scale(0);
                }
                100% {
                  transform: scale(1);
                }
              }`}
            </code>
          </pre>
          <p>This animation is added to the <code>&lt;div&gt;</code>, but only when the <code>[open]</code> attribute is toggled.</p>
          <pre>
            <code>
              {`details[open] div {
                animation: scale .15s ease;
              }`}
            </code>
          </pre>
          <p>Sadly there's no way (that I know of) to animate the <code>&lt;div&gt;</code> when the <code>&lt;details&gt;</code> is closing.</p>
        </div>
      </details>
    </>
  );
};

export default Navbar;
