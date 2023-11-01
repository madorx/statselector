import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import Logo from '../assets/logo.png';
import Privacy from './Privacy';

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);
  const [openPrivacy, setOpenPrivacy] = useState(false);
  const refreshPage = () => {
    window.location.reload();
  };
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-xs">
      <div>
        {' '}
        <button className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-600 to-blue-400">
          <img
            className="w-10 mx-auto cursor-pointer animated fadeIn hover:scale-105 duration-300"
            src={Logo}
            alt="logo"
            onClick={refreshPage}
          />
        </button>
      </div>
      {/* menu */}
      <div className="hidden md:flex">
        <ul className="hidden md:flex title text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-pink-600 to-purple-400">
          <li className="px-4 cursor-pointer animated animatedFadeInDown fadeInDown hover:scale-105 duration-300">
            <Link to="selector" smooth={true} duration={500}>
              <span className="hover:text-cyan-300">Selector</span>
            </Link>
          </li>
          <li className="px-4 cursor-pointer animated animatedFadeInDown fadeInDown hover:scale-105 duration-300">
            <Link to="about" smooth={true} duration={500}>
              <span className="hover:text-cyan-300">About</span>
            </Link>
          </li>
          <li className="px-4 cursor-pointer animated animatedFadeInDown fadeInDown hover:scale-105 duration-300">
            <Link to="contact" smooth={true} duration={500}>
              <span className="hover:text-cyan-300">Contact</span>
            </Link>
          </li>
          <li
            onClick={() => setOpenPrivacy(true)}
            className="px-4 cursor-pointer animated animatedFadeInDown fadeInDown hover:scale-105 duration-300"
          >
            <span className="hover:text-cyan-300">Privacy Policy</span>
          </li>
        </ul>
      </div>
      {/* Hamburger */}
      <div onClick={handleNav} className="md:hidden z-10 bg-pink-600">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      <Privacy open={openPrivacy} onClose={() => setOpenPrivacy(false)} />
      {/* Mobile menu */}
      <ul
        className={
          nav
            ? 'fixed left-0 top-0 w-[65%] h-full ease-in-out duration-500 bg-[#0a192f] cursor-pointer border-r border-purple-400 title'
            : 'ease-in-out duration-500 fixed left-[-100%]'
        }
      >
        <img className="h-[80px] p-4" src={Logo} alt="Logo" />
        <li
          className="py-6 p-4 text-4xl cursor-pointer border-b border-purple-400 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-pink-600 to-purple-400
    "
        >
          <Link onClick={handleNav} to="selector" smooth={true} duration={500}>
            <span className="hover:text-teal-300">Selector</span>
          </Link>
        </li>
        <li className="py-6 p-4 text-4xl cursor-pointer border-b border-purple-400 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-pink-600 to-purple-400">
          <Link onClick={handleNav} to="about" smooth={true} duration={500}>
            <span className="hover:text-teal-300">About</span>
          </Link>
        </li>
        <li className="py-6 p-4 text-4xl cursor-pointer border-b border-purple-400  text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-pink-600 to-purple-400">
          <Link onClick={handleNav} to="contact" smooth={true} duration={500}>
            <span className="hover:text-teal-300">Contact</span>
          </Link>
        </li>
        <li
          onClick={() => setOpenPrivacy(true)}
          className="py-6 p-4 text-4xl cursor-pointer text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-pink-600 to-purple-400"
        >
          <span className="hover:text-cyan-300">Privacy Policy</span>
        </li>
      </ul>
    </div>
  );
};
