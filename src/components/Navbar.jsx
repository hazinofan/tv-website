import React from 'react';
import { IoHome } from 'react-icons/io5';
import { CiFileOn, CiImageOn } from 'react-icons/ci';
import { LuGamepad2 } from 'react-icons/lu';
import { HiOutlineBookOpen } from 'react-icons/hi';
import { FaBell, FaUser } from 'react-icons/fa';
import './navbar.scss';

const Navbar = () => {
  return (
    <>
      <ul className="horizontal-navbar">
        <li>
          <a href="#">
            <IoHome className='icon_home text-white'/>
            <span> Accueil </span>
          </a>
        </li>
        <li>
          <a href="#">
            <CiImageOn />
            <span>Images</span>
          </a>
        </li>
        <li>
          <a href="#">
            <CiFileOn />
            <span>Files</span>
          </a>
        </li>
        <li>
          <a href="#">
            <LuGamepad2 />
            <span>Games</span>
          </a>
        </li>
        <li>
          <a href="#">
            <HiOutlineBookOpen />
            <span>Books</span>
          </a>
        </li>
        <li>
          <a href="#">
            <FaUser />
            <span>Profile</span>
          </a>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
