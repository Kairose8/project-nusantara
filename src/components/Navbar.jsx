import iconAirplane from "../assets/icons/iconAirplane.png";
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="border-gray-200">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">

        {/* icon pesawat */}
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={iconAirplane} className="h-10 lg:h-16" alt="Icon Pesawat" />
        </a>

        {/* tulisan judul sm */}
          <span className="block md:hidden text-center text-l font-semibold whitespace-nowrap text-white ">
            The Amazing Yogyakarta
          </span>
        <div className="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">

          {/* burger button */}
          <button onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
            aria-controls="navbar-language"
            aria-expanded="false"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* navbar lg */}
        <div
              className="hidden items-center justify-between w-full md:flex md:w-auto md:order-1"
            >
              <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 lg:text-xl">
                <li>
                  <button onClick={() => navigate('/') }
                    className="block py-2 px-3 md:p-0 text-white rounded bg-transparent hover:text-yellow-600"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button onClick={() => navigate('/ExplorePage') }
                    className="block py-2 px-3 md:p-0 text-white rounded bg-transparent hover:text-yellow-600"
                  >
                    Go Explore
                  </button>
                </li>
                <li>
                  <button onClick={() => navigate('/TripPlanner') }
                    className="block py-2 px-3 md:p-0 text-white rounded bg-transparent hover:text-yellow-600"
                  >
                    Plan Your Trip
                  </button>
                </li>
                <li>
                  <button onClick={() => navigate('/MapPage') }
                    className="block py-2 px-3 md:p-0 text-white rounded bg-transparent hover:text-yellow-600"
                  >
                    Adventure Map
                  </button>
                </li>
                <li>
                  <button onClick={() => navigate('/AboutUs') }
                    className="block py-2 px-3 md:p-0 text-white rounded bg-transparent hover:text-yellow-600"
                  >
                    About Us
                  </button>
                </li>
              </ul>
            </div>

        {/* navbar sm */}
        {isOpen && (
          <div className="fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white rounded-lg p-8">
              <ul className="flex flex-col font-medium space-y-4">
                <li>
                  <button onClick={() => {navigate('/'); toggleMenu();}}
                    className="block py-2 px-3 text-black rounded bg-transparent hover:text-yellow-600"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button onClick={() => {navigate('/ExplorePage'); toggleMenu();}}
                    className="block py-2 px-3 text-black rounded bg-transparent hover:text-yellow-600"
                  >
                    Go Explore
                  </button>
                </li>
                <li>
                  <button onClick={() => {navigate('/TripPlanner'); toggleMenu();}}
                    className="block py-2 px-3 text-black rounded bg-transparent hover:text-yellow-600"
                  >
                    Plan Your Trip
                  </button>
                </li>
                <li>
                  <button onClick={() => {navigate('/MapPage'); toggleMenu();}}
                    className="block py-2 px-3 text-black rounded bg-transparent hover:text-yellow-600"
                  >
                    Adventure Map
                  </button>
                </li>
                <li>
                  <button onClick={() => {navigate('/AboutUs'); toggleMenu();}}
                    className="block py-2 px-3 text-black rounded bg-transparent hover:text-yellow-600"
                  >
                    About Us
                  </button>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
