import React from 'react';
import { Bell, MessageCircle, Menu } from 'lucide-react';

const Header = ({ onMenuClick }) => {
  return (
    <header className="bg-white border-b border-gray-200 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button className="md:hidden" onClick={onMenuClick}>
            <Menu size={24} />
          </button>
          <h1 className="text-xl md:text-2xl font-bold">Joblier</h1>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li><a href="#" className="text-green-500">Find Work</a></li>
            <li><a href="#" className="text-gray-600">Portfolio</a></li>
            <li><a href="#" className="text-gray-600">Applications</a></li>
            <li><a href="#" className="text-gray-600">Community</a></li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <Bell className="text-gray-600" />
          <MessageCircle className="text-gray-600" />
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
