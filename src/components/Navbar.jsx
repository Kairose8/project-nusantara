import iconAirplane from "../assets/iconAirplane.png";
import { useNavigate } from "react-router-dom";
// import React, { useState, useEffect } from 'react';

// const handleKeyPress = (event) =>{
//   if (event.key === "click")
// }

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <>
      <nav className=" border-gray-200">
        <div className=" flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img  src={iconAirplane} className="h-10" alt="Icon Pesawat" />
            <span className="block sm:hidden text-center text-l font-semibold whitespace-nowrap text-white ">
              The Amazing Yogyakarta
            </span>
          </a>
          <div className="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
            <button
              data-collapse-toggle="navbar-language"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-language"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-language"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 lg:text-xl">
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
        </div>
      </nav>
    </>
  );
}

