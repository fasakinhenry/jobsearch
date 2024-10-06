import React, { useState } from "react";
import avatar_12 from "../../assests/images/illustrations/avatar12.png";
import avatar_11 from "../../assests/images/illustrations/avatar11.png";
import avatar_10 from "../../assests/images/illustrations/avatar10.png";
import avatar_5 from "../../assests/images/illustrations/avatar5.png";
const GridBackground = () => (
  <svg
    width="100%"
    height="100%"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute inset-0 z-0"
  >
    <defs>
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path
          d="M 40 0 L 0 0 0 40"
          fill="none"
          stroke="rgba(0,0,0,0.05)"
          strokeWidth="1"
        />
      </pattern>
      <linearGradient id="fade" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="white" stopOpacity="0" />
        <stop offset="100%" stopColor="white" stopOpacity="1" />
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid)" />
    <rect width="100%" height="100%" fill="url(#fade)" />
  </svg>
);

const HamburgerIcon = ({ isOpen }) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="50" cy="50" r="50" fill="#4ADE80" />
    <rect
      x="25"
      y="30"
      width="50"
      height="10"
      rx="5"
      fill={isOpen ? "transparent" : "white"}
    />
    <rect x="25" y="45" width="50" height="10" rx="5" fill="white" />
    <rect
      x="25"
      y="60"
      width="50"
      height="10"
      rx="5"
      fill={isOpen ? "transparent" : "white"}
    />
    {isOpen && (
      <>
        <rect
          x="25"
          y="30"
          width="50"
          height="10"
          rx="5"
          fill="white"
          transform="rotate(45 50 50)"
        />
        <rect
          x="25"
          y="60"
          width="50"
          height="10"
          rx="5"
          fill="white"
          transform="rotate(-45 50 50)"
        />
      </>
    )}
  </svg>
);

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-blue-50 font-sans overflow-hidden">
      <GridBackground />
      <div className="container mx-auto px-4 relative z-10">
        <header className="flex justify-between items-center py-4">
          <div className="text-xl md:text-2xl font-bold">Joblier</div>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Home
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Job Search
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Companies
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Career Advice
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              About Us
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="bg-green-500 text-white px-3 py-1 md:px-4 md:py-2 text-sm md:text-base rounded-full">
              Sign up
            </button>
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <HamburgerIcon isOpen={isMenuOpen} />
            </button>
          </div>
        </header>

        {isMenuOpen && (
          <div className="fixed inset-0 bg-green-500 z-50 flex flex-col justify-center items-center md:hidden">
            <nav className="text-center">
              <a href="#" className="block text-white text-3xl mb-6">
                Home
              </a>
              <a href="#" className="block text-white text-3xl mb-6">
                Job Search
              </a>
              <a href="#" className="block text-white text-3xl mb-6">
                Companies
              </a>
              <a href="#" className="block text-white text-3xl mb-6">
                Career Advice
              </a>
              <a href="#" className="block text-white text-3xl mb-6">
                About Us
              </a>
            </nav>
            <button
              className="absolute top-4 right-4"
              onClick={() => setIsMenuOpen(false)}
            >
              <HamburgerIcon isOpen={true} />
            </button>
          </div>
        )}

        <main className="relative text-center mt-8 md:mt-16">
          <div className=" ">
            <div className="absolute rounded-full shadow-md cursor-default overflow-hidden right-[12%] top-[40%]">
              <img src={avatar_12} alt="" width={100} height={100} />
            </div>
            <div className="absolute rounded-full shadow-md cursor-default overflow-hidden left-[12%] top-[40%]">
              <img src={avatar_11} alt="" width={100} height={100} />
            </div>
            <div className="absolute rounded-full shadow-md cursor-default overflow-hidden right-[1%] top-[93%]">
              <img src={avatar_10} alt="" width={100} height={100} />
            </div>
            <div className="absolute rounded-full shadow-md cursor-default overflow-hidden left-[1%] top-[93%]">
              <img src={avatar_5} alt="" width={100} height={100} />
            </div>
          </div>
          <div className="bg-green-200 text-green-800 px-3 py-1 rounded-full inline-block mb-4 text-sm md:text-base">
            NEW! AI-Powered Job Matching Technology
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
            Find your dream job with Joblier's smart search
          </h1>
          <p className="text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto text-sm md:text-base">
            Discover opportunities tailored to your skills and preferences. Our
            AI-driven platform connects you with the perfect job matches, making
            your career search seamless and effective.
          </p>
          <div className="flex items-center mx-auto bg-white rounded-full p-1 shadow-lg max-w-xl">
            <input
              type="text"
              placeholder="Search jobs, companies, or keywords..."
              className="flex-grow px-3 w-full md:px-4 py-2 text-sm md:text-base focus:outline-none"
            />
            <button className="bg-green-500 text-white p-2 rounded-full">
              {/* <Search size={20} /> */}
              Search
            </button>
          </div>
        </main>

        <div className="mt-8 md:mt-12 flex items-center space-x-2">
          <div className="mx-auto flex items-center space-x-3">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gray-300 border-2 border-white"
                />
              ))}
            </div>
            <div>
              <div className="font-bold text-sm md:text-base">4.8</div>
              <div className="text-xs md:text-sm text-gray-500">
                (10k+ Happy job seekers)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
