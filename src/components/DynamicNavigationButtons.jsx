import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const DynamicNavigationButtons = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const pages = [
    { name: "Home", path: "/" },
    { name: "ExplorePage", path: "/ExplorePage" },
    { name: "TripPlanner", path: "/TripPlanner" },
    { name: "MapPage", path: "/MapPage" },
    { name: "AboutUs", path: "/AboutUs" },
  ];

  // Find the current page index based on the pathname
  const currentPageIndex = pages.findIndex(
    (page) => page.path === location.pathname
  );

  const goToPage = (index) => {
    if (index >= 0 && index < pages.length) {
      navigate(pages[index].path);
    }
  };

  return (
    <div className="w-4/5 h-28 mx-auto">
      {/* Render previous button only if not on the Home page */}
      <div className="mt-20 text-left">
        {currentPageIndex !== 0 && (
          <button
            onClick={() => goToPage(currentPageIndex - 1)}
            className="text-white bg-myColor-500 font-serif hover:bg-myColor-600 focus:outline-none text-l rounded-full text-sm px-5 py-2.5"
          >
            Previous <FaArrowLeft className="ml-5" /> 
          </button>
        )}
      </div>
      <div className="-mt-14 text-right">
        {/* Render next button only if not on the AboutUs page */}
        {currentPageIndex !== pages.length - 1 && (
          <button
            onClick={() => goToPage(currentPageIndex + 1)}
            className="text-white bg-myColor-500 font-serif hover:bg-myColor-600 focus:outline-none text-l rounded-full text-sm px-10 py-2.5"
          >
            Next <FaArrowRight className="ml-2" />
          </button>
        )}
      </div>
    </div>
  );
};

export default DynamicNavigationButtons;
