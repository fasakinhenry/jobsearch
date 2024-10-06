import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-white py-10">
      <div className="text-center mb-8">
        <p className="text-xl">Our happy customers</p>
        <p className="text-orange-500 text-2xl font-semibold">4.8</p>
        <p className="text-gray-500">(10.2k reviews by our customers)</p>
      </div>

      {/* Overlapping Circles (Avatars) */}
      <div className="flex justify-center items-center space-x-[-15px]">
        <div className="w-16 h-16 rounded-full bg-cover bg-center border-4 border-white z-30" style={{ backgroundImage: `url('/path/to/avatar1.jpg')` }}></div>
        <div className="w-16 h-16 rounded-full bg-cover bg-center border-4 border-white z-20" style={{ backgroundImage: `url('/path/to/avatar2.jpg')` }}></div>
        <div className="w-16 h-16 rounded-full bg-cover bg-center border-4 border-white z-10" style={{ backgroundImage: `url('/path/to/avatar3.jpg')` }}></div>
      </div>
    </footer>
  );
};

export default Footer;
